#!/usr/bin/env node
/**
 * Whale News Scraper
 * Searches for whale-related news and updates news-data.json
 * Run via cron every 3 days
 */

const fs = require('fs');
const path = require('path');

const NEWS_FILE = path.join(__dirname, '..', 'news-data.json');
const MAX_ARTICLES = 50;

// Categories and their keywords
const CATEGORIES = {
  conservation: ['conservation', 'protect', 'endangered', 'save', 'rescue', 'extinction', 'threat', 'ban', 'sanctuary'],
  research: ['study', 'research', 'scientist', 'discover', 'found', 'evidence', 'data', 'tracking', 'population'],
  migration: ['migration', 'migrate', 'journey', 'route', 'travel', 'seasonal', 'movement', 'pattern'],
  tourism: ['watching', 'tour', 'cruise', 'destination', 'spot', 'see', 'best place', 'season'],
  species: ['species', 'blue whale', 'humpback', 'orca', 'beluga', 'sperm whale', 'right whale', 'gray whale', 'minke']
};

function categorize(title, description) {
  const text = (title + ' ' + (description || '')).toLowerCase();
  
  for (const [category, keywords] of Object.entries(CATEGORIES)) {
    if (keywords.some(kw => text.includes(kw))) {
      return category;
    }
  }
  return 'general';
}

async function loadExistingNews() {
  try {
    const data = fs.readFileSync(NEWS_FILE, 'utf8');
    return JSON.parse(data);
  } catch {
    return { lastUpdated: null, articles: [] };
  }
}

function saveNews(data) {
  fs.writeFileSync(NEWS_FILE, JSON.stringify(data, null, 2));
  console.log(`Saved ${data.articles.length} articles to ${NEWS_FILE}`);
}

// This will be called by Clawdbot's cron with articles found via web_search
async function updateNews(newArticles) {
  const existing = await loadExistingNews();
  const existingUrls = new Set(existing.articles.map(a => a.url));
  
  let added = 0;
  for (const article of newArticles) {
    if (!existingUrls.has(article.url)) {
      article.category = article.category || categorize(article.title, article.description);
      article.date = article.date || new Date().toISOString().split('T')[0];
      existing.articles.unshift(article);
      existingUrls.add(article.url);
      added++;
    }
  }
  
  // Keep only most recent articles
  existing.articles = existing.articles.slice(0, MAX_ARTICLES);
  existing.lastUpdated = new Date().toISOString();
  
  saveNews(existing);
  console.log(`Added ${added} new articles`);
  return added;
}

// Export for use by Clawdbot
module.exports = { updateNews, categorize, loadExistingNews };

// If run directly, show current stats
if (require.main === module) {
  const data = loadExistingNews();
  console.log('Current news stats:');
  console.log(`  Total articles: ${data.articles.length}`);
  console.log(`  Last updated: ${data.lastUpdated}`);
  
  const byCategory = {};
  data.articles.forEach(a => {
    byCategory[a.category] = (byCategory[a.category] || 0) + 1;
  });
  console.log('  By category:', byCategory);
}
