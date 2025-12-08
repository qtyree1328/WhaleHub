// Whale Watching Locations Database
// Data from comprehensive whale watching guide spreadsheet with real coordinates and images
// Updated with all 38 locations including monthly density data, industry size, and annual visitors
//
// IMAGE FORMAT OPTIONS:
// - imageUrl: "https://..." (single image - string)
// - imageUrls: ["https://...", "https://..."] (multiple images - array, arrows will appear)
// 
// Both formats are supported. Use imageUrls array for multiple images per location.
// If both are provided, imageUrls takes precedence.


// imageUrls: [
//             'https://whalewatchersatlas.com/images/',
//             'https://whalewatchersatlas.com/images/'
//         ],


const WHALE_WATCHING_LOCATIONS = [
    {
        name: "Juneau",
        location: "USA",
        coordinates: [-134.4200, 58.3019],
        entertainment: 94,
        visibility: 70,
        species: ["Humpback whale", "Orca", "Gray whale", "Minke whale"],
        bestMonths: [4, 5, 6, 7, 8, 9, 10],
        specialNotes: "Bubble-net feeding; largest AK whale port; glacier viewing",
        fullDescription: `Juneau sits in the center of Southeast Alaska's Inside Passage, a protected marine corridor where nutrient-rich glacial runoff fuels one of the most reliable whale-watching ecosystems on the planet. The combination of deep fjords, steep underwater drop-offs, and consistent summer feeding conditions makes Juneau one of the highest-success whale-watching locations in the U.S.—often with near-daily humpback whale sightings in season.

Juneau combines reliability, unique humpback behavior, and spectacular glacial scenery with accessible trip logistics. For travelers prioritizing a high probability of seeing whales—especially cooperative feeding and breaching—Juneau stands out as one of the top whale-watching locations in North America. Juneau's peak season is from June through August, but there are high sighting rates from May through September. Orca sightings are less predictable but occur year-round, with slightly higher frequency in late spring and early summer.`,
        
        accessibility: "Good",
        // Use imageUrls (array) for multiple images, or imageUrl (string) for single image
        imageUrls: [
            'https://whalewatchersatlas.com/images/Juneau1.jpg',
            'https://whalewatchersatlas.com/images/Juneau2.jpg',
            'https://whalewatchersatlas.com/images/Juneau3.jpeg',
            'https://whalewatchersatlas.com/images/Juneau4.jpg',
            'https://whalewatchersatlas.com/images/Juneau5.avif',
            'https://whalewatchersatlas.com/images/Juneau6.jpg'
        ],
        industrySize: "20 operators, 68 vessels",
        annualVisitors: 400000,
        monthlyDensity: [0, 0, 0, 3, 4, 4, 4, 4, 3, 2, 0, 0],
        speciesMonthly: {"Humpback whale": [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0], "Orca": [0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0], "Gray whale": [0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0], "Minke whale": [0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0]}
    },
    {
        name: "San Ignacio Lagoon",
        location: "Mexico",
        coordinates: [-113.2000, 27.3000],
        entertainment: 93,
        visibility: 77,
        species: ["Humpback whale", "Blue whale", "Gray whale", "Fin whale"],
        bestMonths: [1, 2, 3, 4, 12],
        specialNotes: "Friendliest whales; touching distance; mothers & calves",
        fullDescription: `San Ignacio Lagoon is the primary calving ground for eastern Pacific gray whales and part of Mexico's El Vizcaíno Biosphere Reserve—the largest wildlife refuge in Latin America. What makes this UNESCO World Heritage Site unique is the extraordinary 'friendly whale' behavior. Here, calm, shallow, warm waters draw pregnant females and newborn calves, producing rare and highly social behavior—gray whales often approach boats voluntarily, sometimes allowing gentle contact.

This remarkable behavior, first documented in 1972 when a gray whale initiated contact with a local fisherman, occurs nowhere else on earth. The protected lagoon remains undeveloped and remote, accessible only by chartered flight or long overland journey, preserving an authentic wilderness experience. Peak season runs from late December through early April, with February and March offering the highest concentration of mother-calf pairs. More than 1,000 individual gray whales pass through each season..`,
        accessibility: "Good",
        imageUrls: [
            'https://whalewatchersatlas.com/images/SanIgnacio4.jpg',
            'https://whalewatchersatlas.com/images/SanIgnacio1.jpg',
            'https://whalewatchersatlas.com/images/SanIgnacio2.jpg',
            'https://whalewatchersatlas.com/images/SanIgnacio3.jpg'
        ],
        industrySize: "Multiple small operators",
        annualVisitors: 50000,
        monthlyDensity: [3, 4, 4, 2, 0, 0, 0, 0, 0, 0, 0, 2],
        speciesMonthly: {"Humpback whale": [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1], "Blue whale": [0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0], "Gray whale": [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1], "Fin whale": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]}
    },
    {
        name: "Húsavík",
        location: "Iceland",
        coordinates: [-17.3400, 66.0449],
        entertainment: 87,
        visibility: 82,
        species: ["Humpback whale", "Blue whale", "Orca", "Sperm whale", "Fin whale"],
        bestMonths: [4, 5, 6, 7, 8, 9, 10],
        specialNotes: "Whale Capital of Europe; 24 cetaceans spotted; traditional oak boats",
        fullDescription: `Húsavík, often called the 'Whale Capital of Europe,' sits on the shores of Skjálfandi Bay in northern Iceland, where nutrient-rich arctic currents create one of Europe's most productive whale-watching ecosystems. The bay's unique underwater topography concentrates prey species, attracting up to 23 different cetacean species including humpback whales, minke whales, and the occasional blue whale.

Whale-watching tours operate aboard traditional Icelandic oak boats—lovingly restored fishing vessels that offer an authentic maritime experience. The industry maintains a 97% average success rate for whale sightings over the past three decades. Peak season runs from May through September, with the longest daylight hours in June and July. The town also hosts Iceland's renowned Whale Museum, featuring a 22-meter blue whale skeleton, making it an ideal destination for combining wildlife encounters with marine education.`,
        accessibility: "Good",
        imageUrls: [
            'https://whalewatchersatlas.com/images/Husavik1.webp',
            'https://whalewatchersatlas.com/images/Husavik2.jpeg',
            'https://whalewatchersatlas.com/images/Husavik3.jpg',
            'https://whalewatchersatlas.com/images/Husavik4.jpeg'
        ],
        industrySize: "4 major operators",
        annualVisitors: 100000,
        monthlyDensity: [0, 0, 0, 3, 4, 5, 5, 5, 4, 3, 0, 0],
        speciesMonthly: {"Humpback whale": [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0], "Blue whale": [0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0], "Orca": [0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0], "Sperm whale": [0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0], "Fin whale": [0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0]}
    },
    {
        name: "Puerto Madryn",
        location: "Argentina",
        coordinates: [-65.0442, -42.7797],
        entertainment: 86,
        visibility: 75,
        species: ["Orca", "Humpback whale", "Southern right whale"],
        bestMonths: [6, 7, 8, 9, 10, 11],
        specialNotes: "Main town for Peninsula Valdés; combines with orca beach-hunting",
        fullDescription: `Puerto Madryn serves as the gateway to Península Valdés, providing the primary access point and accommodation base for one of South America's most spectacular marine wildlife reserves. The town sits on the shores of Golfo Nuevo, where southern right whales come remarkably close to shore—sometimes within 20 feet of the beach at Playa El Doradillo from June through August.

The calm, sheltered bay waters make Puerto Madryn ideal for boat-based whale watching, including semi-submersible vessels with underwater viewing windows. From September through December, tours depart from nearby Puerto Pirámides, the only licensed port for whale excursions within the UNESCO-protected peninsula. Beyond whales, the region offers opportunities to see elephant seals, sea lions, Magellanic penguins, and the famous beach-hunting orcas of Punta Norte.`,
        accessibility: "Excellent",
        imageUrls: [
            'https://whalewatchersatlas.com/images/Puerto1.jpg',
            'https://whalewatchersatlas.com/images/Puerto2.jpg',
            'https://whalewatchersatlas.com/images/Puerto4.jpg',
            'https://whalewatchersatlas.com/images/Puerto5.jpg'
        ],
        industrySize: "6-10 operators",
        annualVisitors: 157000,
        monthlyDensity: [0, 0, 0, 0, 0, 1, 2, 3, 3, 3, 2, 1],
        speciesMonthly: {"Orca": [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0], "Humpback whale": [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0], "Southern right whale": [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1]}
    },
    {
        name: "Península Valdés",
        location: "Argentina",
        coordinates: [-63.9333, -42.5000],
        entertainment: 86,
        visibility: 74,
        species: ["Orca", "Humpback whale", "Southern right whale"],
        bestMonths: [7, 8, 9, 10, 11, 12],
        specialNotes: "UNESCO World Heritage; orcas beach-hunting; right whale nursery",
        fullDescription: `Península Valdés is a UNESCO World Heritage Site recognized as one of the most important breeding grounds for southern right whales in the world. Over 1,100 individual whales have been counted in a single season, with mothers and calves gathering in the sheltered bays of Golfo Nuevo and Golfo San José from June through December to breed and nurse.

What makes Valdés truly unique is the presence of a resident orca population that has developed an extraordinary hunting technique found almost nowhere else on earth: intentional beach stranding. At Punta Norte and Caleta Valdés, orcas deliberately launch themselves onto the beach to catch sea lion and elephant seal pups during high tide, particularly in March-April and October-November. This behavior is taught from generation to generation within specific family groups, representing a remarkable example of cultural transmission in marine mammals.`,
        accessibility: "Good",
        imageUrls: [
            'https://whalewatchersatlas.com/images/Valdes1.jpg',
            'https://whalewatchersatlas.com/images/Valdes2.jpg',
            'https://whalewatchersatlas.com/images/Valdes3.jpg',
            'https://whalewatchersatlas.com/images/Valdes4.jpg',
            'https://whalewatchersatlas.com/images/Valdes5.jpg'
        ],
        industrySize: "6-10 operators",
        annualVisitors: 244000,
        monthlyDensity: [0, 0, 0, 0, 0, 0, 2, 3, 3, 3, 3, 2],
        speciesMonthly: {"Orca": [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0], "Humpback whale": [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1], "Southern right whale": [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1]}
    },
    {
        name: "Monterey Bay",
        location: "USA",
        coordinates: [-121.8940, 36.7470],
        entertainment: 92,
        visibility: 79,
        species: ["Humpback whale", "Blue whale", "Gray whale", "Orca", "Fin whale"],
        bestMonths: [4, 5, 6, 7, 8, 9, 10, 11],
        specialNotes: "World-class marine sanctuary; submarine canyon; kelp forests; year-round diversity",
        fullDescription: `Monterey Bay sits at the head of one of the deepest submarine canyons on North America's west coast—a vast underwater chasm comparable in depth to the Grand Canyon that plunges to over 10,000 feet. This remarkable geology creates powerful upwelling currents that draw cold, nutrient-rich water from the deep, fueling an extraordinarily productive marine ecosystem just minutes from shore.

The Monterey Bay National Marine Sanctuary—the largest protected ocean area in the continental United States—supports year-round whale watching with different species appearing each season: gray whales during their December-April migration, humpbacks and blue whales from spring through fall, and resident orca populations. The canyon's proximity to shore means blue whales, the largest animals ever to exist, can sometimes be seen feeding within a few miles of the coastline. Marine biologist-led tours offer exceptional educational experiences.`,
        accessibility: "Excellent",
        // Example with multiple images - arrows will appear to navigate
        imageUrls: [
            'https://whalewatchersatlas.com/images/Monteray1.jpg',
            'https://whalewatchersatlas.com/images/Monteray2.jpg',
            'https://whalewatchersatlas.com/images/Monteray3.webp',
            'https://whalewatchersatlas.com/images/Monteray4.webp',
            'https://whalewatchersatlas.com/images/Monteray5.jpeg',
            'https://whalewatchersatlas.com/images/Monteray6.jpg'
        ],
        industrySize: "10-15 operators",
        annualVisitors: 300000,
        monthlyDensity: [2, 2, 2, 3, 4, 4, 4, 4, 4, 4, 4, 2],
        speciesMonthly: {"Blue whale": [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0], "Humpback whale": [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1], "Orca": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], "Gray whale": [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1], "Fin whale": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]}
    },
    {
        name: "Dana Point",
        location: "USA",
        coordinates: [-117.6981, 33.4667],
        entertainment: 90,
        visibility: 81,
        species: ["Gray whale", "Blue whale", "Humpback whale", "Fin whale"],
        bestMonths: [1, 2, 3, 12],
        specialNotes: "Dolphin & whale capital; 10,000+ dolphins resident; gray whale migration peak",
        fullDescription: `Dana Point holds the distinction of being the first Whale Heritage Area in the Americas and is officially designated as the 'Dolphin and Whale Watching Capital of the World.' Located along Southern California's coast between Los Angeles and San Diego, the area benefits from ideal year-round weather and an extraordinary concentration of marine life drawn by nutrient-rich waters.

Dana Point offers genuine year-round whale watching: gray whales during their November-May migration (one of the longest mammalian migrations on earth at 10,000-14,000 miles round-trip), and blue whales—the largest animals on the planet—from May through November. Fin whales, humpbacks, and minke whales appear throughout the year. The area also hosts some of the highest dolphin concentrations on earth, with pods of thousands regularly encountered. The 50+ year-old Festival of Whales celebrates this remarkable marine heritage each spring.`,
        accessibility: "Excellent",
        imageUrls: [
            'https://whalewatchersatlas.com/images/Dana1.webp',
            'https://whalewatchersatlas.com/images/Dana5.jpg',
            'https://whalewatchersatlas.com/images/Dana2.webp',
            'https://whalewatchersatlas.com/images/Dana3.webp',
            'https://whalewatchersatlas.com/images/Dana4.webp'
        ],
        industrySize: "5-8 operators",
        annualVisitors: 150000,
        monthlyDensity: [2, 2, 2, 2, 3, 4, 4, 4, 3, 3, 2, 2],
        speciesMonthly: {"Blue whale": [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0], "Humpback whale": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], "Orca": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], "Gray whale": [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1], "Fin whale": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]}
    },
    {
        name: "Vancouver Island",
        location: "Canada",
        coordinates: [-125.5000, 49.6600],
        entertainment: 91,
        visibility: 77,
        species: ["Orca", "Humpback whale", "Gray whale"],
        bestMonths: [5, 6, 7, 8, 9],
        specialNotes: "Resident & transient orcas; salmon runs; ancient rainforest coastline",
        fullDescription: `Vancouver Island's waters are home to the most studied orca populations in the world, with researchers tracking individual whales and family groups for over five decades. The northern resident orca community—approximately 200 whales in 16 pods—returns each summer to Johnstone Strait and the surrounding waters to feed on migrating salmon, while three distinct southern resident pods (J, K, and L) patrol the waters around Victoria and the Gulf Islands.

Johnstone Strait, particularly the area around Telegraph Cove, is considered one of the world's premier destinations for orca observation, with whales regularly seen performing their unique 'beach rubbing' behavior on the pebble shores of Robson Bight Ecological Reserve. The protected inside passage provides calm waters ideal for kayaking alongside whales. Humpbacks, gray whales, and minke whales are also regularly spotted. Peak orca season runs from May through October, with July-September offering the highest sighting rates.`,
        accessibility: "Good",
        imageUrls: [
            'https://whalewatchersatlas.com/images/van1.webp',
            'https://whalewatchersatlas.com/images/van2.jpg',
            'https://whalewatchersatlas.com/images/van3.webp',
            'https://whalewatchersatlas.com/images/van4.jpg',
            'https://whalewatchersatlas.com/images/van5.jpg'
        ],
        industrySize: "15+ operators",
        annualVisitors: 250000,
        monthlyDensity: [0, 0, 0, 0, 3, 3, 3, 3, 3, 2, 0, 0],
        speciesMonthly: {"Orca": [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0], "Humpback whale": [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0], "Gray whale": [0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0], "Minke whale": [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0]}
    },
    {
        name: "Tadoussac",
        location: "Canada",
        coordinates: [-69.7183, 48.1433],
        entertainment: 89,
        visibility: 84,
        species: ["Beluga whale", "Minke whale", "Fin whale", "Blue whale", "Humpback whale"],
        bestMonths: [6, 7, 8, 9, 10],
        specialNotes: "Belugas & 12 other whale species; fjord meets ocean; marine interpretation center",
        fullDescription: `Tadoussac sits at one of the world's great natural confluences: the point where the cold, deep waters of the Saguenay Fjord meet the brackish St. Lawrence Estuary. This mixing of freshwater and saltwater creates unique conditions that concentrate krill and small fish, drawing up to 13 whale species to these waters each summer—including the only year-round resident beluga population in the St. Lawrence.

The endangered St. Lawrence beluga whales—recognizable by their pure white coloring—number around 900 individuals and can be spotted from shore throughout the year, though most whale-watching tours operate from May through October. The dramatic fjord scenery, with steep cliffs rising directly from the water, creates a spectacular backdrop for whale watching. Blue whales, the largest animals on earth, are regularly seen here during summer months—one of the most accessible places in the world to encounter these magnificent creatures.`,
        accessibility: "Excellent",
        imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Whale_watching_in_Tadoussac_by_boat.JPG",
        industrySize: "8-12 operators",
        annualVisitors: 200000,
        monthlyDensity: [0, 0, 0, 0, 3, 4, 4, 4, 4, 3, 0, 0],
        speciesMonthly: {"Blue whale": [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0], "Humpback whale": [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0], "Beluga whale": [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0], "Fin whale": [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0], "Minke whale": [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0]}
    },
    {
        name: "San Diego",
        location: "USA",
        coordinates: [-117.1611, 32.7157],
        entertainment: 87,
        visibility: 80,
        species: ["Gray whale", "Blue whale", "Humpback whale", "Fin whale"],
        bestMonths: [1, 2, 3, 12],
        specialNotes: "20,000 gray whales migrate past annually; warm year-round climate; family-friendly",
        fullDescription: `San Diego offers exceptional year-round whale watching along Southern California's coast, with mild weather and calm seas creating ideal viewing conditions. The area has earned a reputation as possibly the best location in the world for observing blue whales—the largest animals ever to exist—which aggregate offshore from May through November to feed on dense krill concentrations.

Gray whales pass close to shore during their annual migration between December and April, with January through March offering peak sightings of the southbound journey. The return migration, featuring mothers with newborn calves, extends through April. Humpback whales, fin whales, and multiple dolphin species are encountered throughout the year. San Diego's departure points offer easy access for travelers, and the consistent weather means cancellations due to rough seas are rare. The area's proximity to the coast allows for shorter boat rides to reach prime viewing areas.`,
        accessibility: "Excellent",
        imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/%22Hot_Coals_Only%22_-_Whale_View_Point_-_La_Jolla_(15854312799).jpg",
        industrySize: "8-12 operators",
        annualVisitors: 250000,
        monthlyDensity: [2, 2, 2, 2, 3, 4, 4, 4, 3, 3, 2, 2],
        speciesMonthly: {"Blue whale": [0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0], "Humpback whale": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], "Orca": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], "Gray whale": [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1], "Fin whale": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]}
    },
    {
        name: "San Juan Islands",
        location: "USA",
        coordinates: [-123.0000, 48.5500],
        entertainment: 92,
        visibility: 73,
        species: ["Orca", "Humpback whale", "Gray whale", "Minke whale"],
        bestMonths: [5, 6, 7, 8, 9],
        specialNotes: "Southern Resident orcas (J, K, L pods); critical habitat; world-class research",
        fullDescription: `The San Juan Islands, located in Washington State's Salish Sea, are home to three genetically distinct pods of southern resident orcas—designated J, K, and L pods—that have been studied continuously since the 1970s, making them among the best-understood whale populations on earth. Each pod maintains unique cultural traditions, vocalizations (dialects), and family structures passed down through generations.

The islands' position at the confluence of the Strait of Juan de Fuca, the Strait of Georgia, and Puget Sound creates powerful currents that concentrate salmon—the resident orcas' primary food source. Lime Kiln Point State Park on San Juan Island is considered one of the best land-based whale-watching locations in the world. The endangered southern resident population (approximately 75-80 individuals) faces conservation challenges, making respectful viewing practices especially important here. Peak season runs from May through October.`,
        accessibility: "Good",
        imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Post0055_-_Flickr_-_NOAA_Photo_Library.jpg",
        industrySize: "12+ operators",
        annualVisitors: 300000,
        monthlyDensity: [0, 0, 0, 0, 2, 3, 3, 3, 2, 0, 0, 0],
        speciesMonthly: {"Orca": [0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0], "Humpback whale": [0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0], "Gray whale": [0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0], "Minke whale": [0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0]}
    },
    {
        name: "Victoria",
        location: "Canada",
        coordinates: [-123.3656, 48.4284],
        entertainment: 87,
        visibility: 73,
        species: ["Orca", "Humpback whale", "Gray whale", "Minke whale"],
        bestMonths: [5, 6, 7, 8, 9],
        specialNotes: "Capital city access; Salish Sea orcas; historic Inner Harbour; Royal BC Museum",
        fullDescription: `Victoria, the capital of British Columbia, serves as a major departure point for whale watching in the Salish Sea, offering easy access to the waters where southern resident orcas, transient orcas, humpbacks, and gray whales are regularly encountered. Multiple operators run tours from the Inner Harbour, just steps from the city's historic downtown.

The area benefits from its position near the boundary between Canadian and U.S. waters, where nutrient-rich currents support diverse marine life. From April through October, whale-watching tours achieve high success rates for orca sightings, with both salmon-eating resident populations and marine mammal-hunting transient populations present. Victoria also offers exceptional shore-based viewing opportunities, particularly at East Sooke Park and along the scenic coastline. The combination of world-class whale watching with Victoria's cultural attractions, gardens, and dining makes it an appealing destination for travelers seeking a complete experience.`,
        accessibility: "Excellent",
        imageUrl: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop",
        industrySize: "15+ operators",
        annualVisitors: 275000,
        monthlyDensity: [0, 0, 1, 2, 3, 3, 3, 3, 3, 2, 0, 0],
        speciesMonthly: {"Orca": [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0], "Humpback whale": [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0], "Gray whale": [0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0], "Minke whale": [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0]}
    },
    {
        name: "Kaikōura",
        location: "New Zealand",
        coordinates: [173.6833, -42.4167],
        entertainment: 91,
        visibility: 78,
        species: ["Sperm whale", "Humpback whale", "Orca", "Blue whale"],
        bestMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        specialNotes: "Year-round sperm whales; submarine canyon; giant squid habitat; UNESCO consideration",
        fullDescription: `Kaikōura occupies a unique position on New Zealand's South Island where a deep submarine canyon approaches exceptionally close to shore, creating year-round habitat for giant sperm whales—the world's largest toothed predators. Unlike most whale-watching destinations that depend on seasonal migrations, Kaikōura offers reliable sperm whale sightings throughout the year, with resident males feeding in the nutrient-rich canyon waters.

The whale-watching industry here was founded in 1987 by five local Māori families who mortgaged their homes to create a sustainable tourism business, combining traditional Māori values of environmental guardianship (kaitiakitanga) with modern conservation practices. The operation maintains a 95% success rate for whale sightings and has become a model for community-based ecotourism worldwide. Beyond sperm whales, visitors may encounter dusky dolphins, New Zealand fur seals, and migrating humpbacks and orcas during certain seasons. The stunning backdrop of the snow-capped Seaward Kaikōura Range adds to the dramatic setting.`,
        accessibility: "Good",
        imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/NZ280315_Kaikoura_Whale_Watching_06.jpg",
        industrySize: "3-4 operators",
        annualVisitors: 100000,
        monthlyDensity: [3, 3, 3, 3, 3, 4, 4, 4, 3, 3, 3, 4],
        speciesMonthly: {"Humpback whale": [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0], "Orca": [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1], "Sperm whale": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], "Southern right whale": [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0]}
    },
    {
        name: "Cabo San Lucas",
        location: "Mexico",
        coordinates: [-109.9167, 22.8905],
        entertainment: 88,
        visibility: 77,
        species: ["Humpback whale", "Gray whale", "Blue whale"],
        bestMonths: [1, 2, 3, 12],
        specialNotes: "Pacific meets Sea of Cortez; warm-water destination; luxury resort base",
        fullDescription: `Cabo San Lucas sits at the dramatic southern tip of Mexico's Baja California Peninsula, where the Pacific Ocean meets the Sea of Cortez (Gulf of California)—a confluence that Jacques Cousteau famously called 'the world's aquarium.' This intersection of warm and cold waters creates exceptional marine biodiversity and serves as a critical migratory corridor for multiple whale species.

Blue whales—the largest animals ever to exist—are regularly encountered between November and April, with an estimated 3,000 individuals passing through these waters. Humpback whales gather here during winter months to breed and calve in the warm, protected waters. Traveling north into the Sea of Cortez opens opportunities to encounter orcas, pilot whales, and gray whales. The area also offers excellent weather and well-developed tourism infrastructure, making it accessible for travelers seeking reliable whale encounters combined with resort amenities.`,
        accessibility: "Excellent",
        imageUrl: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop",
        industrySize: "15+ operators",
        annualVisitors: 300000,
        monthlyDensity: [3, 3, 3, 3, 1, 1, 1, 1, 1, 1, 1, 2],
        speciesMonthly: {"Blue whale": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], "Humpback whale": [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1], "Gray whale": [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1], "Sperm whale": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], "Fin whale": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]}
    },
    {
        name: "Seward",
        location: "USA",
        coordinates: [-149.4422, 60.1042],
        entertainment: 88,
        visibility: 72,
        species: ["Humpback whale", "Orca", "Gray whale", "Fin whale"],
        bestMonths: [5, 6, 7, 8],
        specialNotes: "Kenai Fjords gateway; tidewater glaciers; sea otters, sea lions, puffins",
        fullDescription: `Seward serves as a gateway to Kenai Fjords National Park, where massive tidewater glaciers calve directly into the sea and nutrient-rich waters support abundant marine life. The town's location on Resurrection Bay provides access to some of Alaska's most productive whale-watching waters, with humpback whales, orcas, fin whales, and gray whales regularly encountered.

Day cruises from Seward combine whale watching with opportunities to see calving glaciers, sea otters, Steller sea lions, harbor seals, and abundant seabirds—offering one of Alaska's most comprehensive marine wildlife experiences in a single outing. The protected fjord waters remain relatively calm even when open ocean conditions are rough. Peak season runs from May through September, with July and August offering the warmest weather and longest daylight hours. Seward's accessibility by road from Anchorage (2.5 hours) makes it a practical option for travelers.`,
        accessibility: "Good",
        imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
        industrySize: "8-12 operators",
        annualVisitors: 200000,
        monthlyDensity: [0, 0, 0, 2, 3, 3, 3, 3, 2, 1, 0, 0],
        speciesMonthly: {"Humpback whale": [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0], "Orca": [0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0], "Gray whale": [0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0], "Minke whale": [0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0]}
    },
    {
        name: "Ushuaia",
        location: "Argentina",
        coordinates: [-68.3029, -54.8019],
        entertainment: 84,
        visibility: 71,
        species: ["Humpback whale", "Orca", "Fin whale", "Southern right whale"],
        bestMonths: [11, 12, 1, 2, 3],
        specialNotes: "Southernmost city; Beagle Channel; Antarctica gateway; dramatic Patagonian scenery",
        fullDescription: `Ushuaia, the southernmost city in the world, serves as the primary departure point for Antarctic expedition cruises and offers unique access to the whale-rich waters of the Beagle Channel and Drake Passage. The region represents the frontier of Southern Hemisphere whale watching, where nutrient-rich Antarctic waters support diverse marine life.

During the austral summer (November through March), these waters become feeding grounds for humpback whales, minke whales, and orcas drawn by abundant krill. Multi-day expedition cruises departing from Ushuaia venture to the Antarctic Peninsula, where whale encounters often include close approaches to vessels in sheltered bays. The area also offers opportunities to see southern right whales, particularly in the protected waters around the nearby Valdés Peninsula earlier in the season. For travelers seeking remote wilderness whale encounters as part of a larger Antarctic adventure, Ushuaia is the essential starting point.`,
        accessibility: "Good",
        imageUrl: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop",
        industrySize: "5-8 operators",
        annualVisitors: 80000,
        monthlyDensity: [4, 4, 3, 0, 0, 0, 0, 0, 0, 0, 2, 3],
        speciesMonthly: {"Humpback whale": [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1], "Orca": [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1], "Blue whale": [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1], "Fin whale": [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1], "Minke whale": [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1]}
    },
    {
        name: "Tofino",
        location: "Canada",
        coordinates: [-125.9076, 49.1534],
        entertainment: 87,
        visibility: 73,
        species: ["Gray whale", "Humpback whale", "Orca"],
        bestMonths: [3, 4, 5, 6, 7, 8, 9],
        specialNotes: "Pacific Rim National Park; ancient rainforest; hot springs accessible by boat",
        fullDescription: `Tofino sits on the wild west coast of Vancouver Island within the Clayoquot Sound UNESCO Biosphere Reserve, offering whale watching in the dramatic setting of the open Pacific Ocean, ancient rainforest, and rugged coastline. The area lies directly along the gray whale migration route and supports a population of 'resident' gray whales that remain throughout summer to feed in the nutrient-rich kelp forests.

From March through October, gray whales are reliably sighted, with some individuals returning year after year to the same feeding areas—a phenomenon that has allowed researchers to identify and name specific whales. Humpback whales have become increasingly common in recent years, while orcas (both resident and transient populations) pass through periodically. Tofino's surf culture, pristine beaches, and ancient temperate rainforest trails create a complete wilderness experience beyond whale watching. The town's remote location maintains an authentic, unhurried atmosphere.`,
        accessibility: "Good",
        imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Grey_Whale_in_Clayoquot_Sound_Unesco_Biosphere_Preserve.jpg",
        industrySize: "8-10 operators",
        annualVisitors: 100000,
        monthlyDensity: [0, 0, 1, 2, 3, 3, 3, 3, 3, 2, 0, 0],
        speciesMonthly: {"Humpback whale": [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0], "Orca": [0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0], "Gray whale": [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0], "Minke whale": [0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0]}
    },
    {
        name: "Samaná Bay",
        location: "Dominican Republic",
        coordinates: [-69.3365, 19.2064],
        entertainment: 88,
        visibility: 73,
        species: ["Humpback whale"],
        bestMonths: [1, 2, 3],
        specialNotes: "Caribbean humpback breeding grounds; males singing; mothers with calves",
        fullDescription: `Samaná Bay serves as one of the most important breeding and calving grounds for North Atlantic humpback whales, with more than 1,500 whales gathering in these warm, shallow Caribbean waters between January and late March each year. The bay, along with the offshore Silver Bank and Navidad Bank sanctuaries, collectively form the Marine Mammal Sanctuary of the Dominican Republic—where research suggests all North Atlantic humpback populations converge to reproduce.

Male humpbacks perform their haunting, complex songs throughout the breeding season—compositions that can last over an hour and carry for miles underwater. The bay's calm, protected waters offer excellent conditions for observing spectacular surface behaviors: breaching, tail slapping, and competitive male groups pursuing females. Samaná combines reliable humpback encounters with tropical Caribbean vacation amenities, making it accessible for travelers seeking both wildlife and beach experiences. The nearby Los Haitises National Park adds rainforest exploration options.`,
        accessibility: "Good",
        imageUrl: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop",
        industrySize: "10+ operators",
        annualVisitors: 100000,
        monthlyDensity: [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        speciesMonthly: {"Humpback whale": [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]}
    },
    {
        name: "Reykjavík",
        location: "Iceland",
        coordinates: [-21.9426, 64.1466],
        entertainment: 83,
        visibility: 75,
        species: ["Humpback whale", "Minke whale", "Orca", "Blue whale"],
        bestMonths: [5, 6, 7, 8, 9],
        specialNotes: "Capital city departures; Faxaflói Bay; puffins; Northern Lights combo tours",
        fullDescription: `Reykjavík offers the convenience of whale watching directly from Iceland's capital city, with tours departing from the Old Harbour in the city center. The waters of Faxaflói Bay support year-round whale-watching operations, with minke whales and white-beaked dolphins reliably encountered throughout the season and humpback whales increasingly common.

While Húsavík in the north offers higher whale concentrations, Reykjavík's accessibility makes it practical for travelers with limited time or those combining whale watching with Iceland's other attractions. Winter tours (November through February) offer the unique possibility of combining whale watching with northern lights viewing, creating an extraordinary nature experience. The relatively short boat rides from the harbor mean tours can operate even when weather conditions are marginal. Multiple operators offer various vessel types, from high-speed RIBs to larger traditional boats with indoor viewing areas.`,
        accessibility: "Excellent",
        imageUrl: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop",
        industrySize: "6-8 operators",
        annualVisitors: 150000,
        monthlyDensity: [2, 2, 2, 2, 3, 3, 3, 3, 3, 2, 2, 2],
        speciesMonthly: {"Humpback whale": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], "Orca": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], "Minke whale": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]}
    },
    {
        name: "Gloucester",
        location: "USA",
        coordinates: [-70.671818, 42.613408],
        entertainment: 86,
        visibility: 73,
        species: ["Humpback whale", "Fin whale", "Minke whale", "Right whale"],
        bestMonths: [4, 5, 6, 7, 8, 9, 10],
        specialNotes: "National Marine Sanctuary; productive feeding grounds; historic whaling heritage",
        fullDescription: `Stellwagen Bank National Marine Sanctuary, located at the mouth of Massachusetts Bay, represents one of the most intensively studied and actively managed whale-watching areas in the world. The underwater plateau creates upwelling currents that concentrate prey species, drawing humpback whales, fin whales, minke whales, and the critically endangered North Atlantic right whale to feed here from April through October.

Gloucester and other Cape Ann ports serve as departure points for tours led by experienced naturalists who contribute to ongoing research through photo-identification and behavioral observations—creating a citizen science component to many trips. The area's long history of whale research (documented in over 75 peer-reviewed papers) means guides can often identify individual whales by name and share their life histories. The proximity to Boston makes Stellwagen accessible for day trips, while the New England coastal setting and Gloucester's historic fishing heritage add cultural dimension to the experience.`,
        accessibility: "Excellent",
        imageUrl: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop",
        industrySize: "8-10 operators",
        annualVisitors: 200000,
        monthlyDensity: [0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 0, 0],
        speciesMonthly: {"Humpback whale": [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0], "North Atlantic right whale": [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0], "Fin whale": [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0], "Minke whale": [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0]}
    },
    {
        name: "Akureyri",
        location: "Iceland",
        coordinates: [-18.0900, 65.6835],
        entertainment: 82,
        visibility: 73,
        species: ["Humpback whale", "Minke whale", "Blue whale"],
        bestMonths: [6, 7, 8],
        specialNotes: "Northern Iceland; Eyjafjörður fjord; midnight sun; less crowded than south",
        fullDescription: `Akureyri, Iceland's second-largest city, offers whale watching in the protected waters of Eyjafjörður—the country's longest fjord, stretching over 60 kilometers inland. The dramatic setting, with steep mountains rising directly from the water, provides a spectacular backdrop for whale encounters while offering calmer conditions than exposed coastal waters.

Humpback whales are the most commonly encountered species, along with minke whales and white-beaked dolphins. The area sees fewer visitors than Húsavík, creating a less crowded experience particularly during peak summer season. Akureyri's position along Iceland's Diamond Circle touring route makes it convenient for travelers combining whale watching with visits to Mývatn, Dettifoss waterfall, and other northern attractions. The town offers more amenities and dining options than smaller whale-watching villages, appealing to travelers seeking comfort alongside wilderness experiences.`,
        accessibility: "Good",
        imageUrl: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop",
        industrySize: "3-4 operators",
        annualVisitors: 50000,
        monthlyDensity: [0, 0, 0, 2, 3, 4, 4, 4, 3, 2, 0, 0],
        speciesMonthly: {"Humpback whale": [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0], "Blue whale": [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0], "Fin whale": [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0], "Minke whale": [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0]}
    },
    {
        name: "Mirissa",
        location: "Sri Lanka",
        coordinates: [80.4713, 5.9485],
        entertainment: 84,
        visibility: 73,
        species: ["Blue whale", "Sperm whale", "Fin whale"],
        bestMonths: [11, 12, 1, 2, 3, 4],
        specialNotes: "Blue whale hotspot; continental shelf; small fishing village; tropical climate",
        fullDescription: `Mirissa, on Sri Lanka's southern coast, offers what many consider the most reliable blue whale watching in the world. Between December and April, the world's largest animals congregate in waters just a few miles offshore, drawn by rich feeding conditions along the edge of the continental shelf. Unlike most blue whale destinations where sightings are rare, Mirissa regularly delivers multiple blue whale encounters per trip during peak season.

The area also hosts sperm whales, Bryde's whales, spinner dolphins, and occasionally orcas, creating diverse cetacean encounters. However, travelers should be aware of significant concerns about the whale-watching industry here: Sri Lanka's enforcement of approach distance regulations has been inconsistent, and reports of boats chasing and harassing whales are common. Responsible travelers should carefully research operators and choose those demonstrating genuine commitment to ethical practices. Peak season runs from December through March, with calmer seas in February and March.`,
        accessibility: "Good",
        imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Beauty_of_dolphins_mirissa.jpg",
        industrySize: "6-8 operators",
        annualVisitors: 75000,
        monthlyDensity: [3, 3, 3, 2, 1, 0, 0, 0, 0, 0, 2, 3],
        speciesMonthly: {"Blue whale": [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1], "Humpback whale": [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1], "Sperm whale": [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1], "Bryde's whale": [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1]}
    },
    {
        name: "Lofoten Islands",
        location: "Norway",
        coordinates: [14.2000, 68.2000],
        entertainment: 86,
        visibility: 69,
        species: ["Orca", "Humpback whale", "Sperm whale"],
        bestMonths: [10, 11, 12, 1],
        specialNotes: "Arctic orca safari; herring run; Northern Lights; dramatic mountain scenery",
        fullDescription: `The Lofoten Islands, located above the Arctic Circle in northern Norway, offer one of the world's most spectacular winter wildlife experiences: orcas and humpback whales hunting massive herring schools against a backdrop of snow-covered mountains and the dancing northern lights. From November through January, billions of herring migrate into the fjords to overwinter, drawing hundreds of whales to feed.

The whales employ cooperative hunting strategies, with orcas using their 'carousel feeding' technique—swimming in tightening circles to concentrate herring into dense balls before taking turns feeding. The dark Arctic winter (when the sun never rises above the horizon) creates atmospheric conditions for photography, with blue twilight hours and potential aurora displays adding to the otherworldly experience. Water temperatures require full exposure suits for extended observation, and weather can be challenging, but for adventurous travelers seeking raw Arctic wilderness whale encounters, Lofoten is unmatched.`,
        accessibility: "Moderate",
        imageUrl: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop",
        industrySize: "4-6 operators",
        annualVisitors: 40000,
        monthlyDensity: [2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2],
        speciesMonthly: {"Orca": [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1], "Humpback whale": [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1]}
    },
    {
        name: "Maui",
        location: "USA",
        coordinates: [-156.3319, 20.7984],
        entertainment: 89,
        visibility: 81,
        species: ["Humpback whale"],
        bestMonths: [12, 1, 2, 3, 4],
        specialNotes: "Prime breeding & calving grounds; singing males; shallow warm channels",
        fullDescription: `Maui lies at the heart of the Hawaiian Islands Humpback Whale National Marine Sanctuary, one of the world's most important breeding and calving grounds for North Pacific humpback whales. An estimated 10,000 humpbacks migrate to Hawaiian waters each winter, with the warm, shallow channels between Maui, Lana'i, and Moloka'i offering protected nursery habitat.

Peak season runs from January through March, when male humpbacks perform their elaborate songs (lasting up to 20 minutes and audible for miles underwater) and compete dramatically for female attention through breaching, tail slapping, and aggressive 'heat runs.' The combination of reliable whale sightings, warm tropical weather, and Maui's developed tourism infrastructure makes this one of the most accessible premium whale-watching destinations in the world. Multiple operators offer tours from Lahaina and Ma'alaea harbors, ranging from large catamarans to small-group rafts. Shore-based viewing is also excellent from multiple coastal vantage points.`,
        accessibility: "Excellent",
        imageUrl: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop",
        industrySize: "20+ operators",
        annualVisitors: 500000,
        monthlyDensity: [2, 2, 2, 1, 1, 0, 0, 0, 0, 0, 0, 1],
        speciesMonthly: {"Humpback whale": [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1], "Sperm whale": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], "Pilot whale": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]}
    },
    {
        name: "Tonga (Vava'u)",
        location: "Tonga",
        coordinates: [-173.9833, -18.6500],
        entertainment: 93,
        visibility: 82,
        species: ["Humpback whale"],
        bestMonths: [7, 8, 9, 10],
        specialNotes: "Swim with humpbacks; crystal-clear waters; mothers & calves; life-changing encounters",
        fullDescription: `The Kingdom of Tonga offers one of the world's rarest wildlife experiences: the legal opportunity to swim in open water with humpback whales. The Vava'u archipelago in northern Tonga serves as a critical nursery for humpbacks that migrate from Antarctic feeding grounds, with mothers and calves lingering in the warm, protected waters from July through October.

Strict government regulations—limiting swimmers to groups of four plus a guide, requiring licensed operators, and prohibiting SCUBA diving with whales—aim to protect both whales and swimmers while enabling remarkable close encounters. Swimmers may find themselves eye-to-eye with a 40-ton mother resting alongside her playful calf, or witness the powerful songs of nearby males resonating through the water. The experience requires reasonable swimming ability and comfort in open ocean conditions. Tonga's remote location and limited tourism infrastructure mean this remains an exclusive, uncrowded destination for travelers seeking transformative wildlife encounters.`,
        accessibility: "Moderate",
        imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Whale_watching,_Vava%27u.jpg",
        industrySize: "8-10 operators",
        annualVisitors: 15000,
        monthlyDensity: [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0],
        speciesMonthly: {"Humpback whale": [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0]}
    },
    {
        name: "Hervey Bay",
        location: "Australia",
        coordinates: [152.8720, -25.2854],
        entertainment: 88,
        visibility: 79,
        species: ["Humpback whale"],
        bestMonths: [7, 8, 9, 10, 11],
        specialNotes: "Natural 'whale playground'; curious whales approach boats; spectacular breaching",
        fullDescription: `Hervey Bay, on Australia's Queensland coast, has earned the nickname 'Whale Watching Capital of Australia' for the unique behavior humpback whales display in these protected waters. Unlike most locations where whales are observed during active migration, Hervey Bay serves as a 'rest stop' where humpbacks pause during their southbound journey to Antarctica, lingering in the calm, shallow waters to rest and socialize.

This resting behavior creates exceptional viewing opportunities, with whales often approaching boats in what researchers call 'mugging'—displaying curiosity rather than flight responses. The protected waters behind Fraser Island (the world's largest sand island) provide calm conditions ideal for extended observation. Peak season runs from late July through early November, with August and September offering the highest whale concentrations. Some operators hold permits for in-water encounters under strict conditions. The bay's calm, warm waters make whale watching accessible for all ages and fitness levels.`,
        accessibility: "Excellent",
        imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Humpback_Whale.jpg",
        industrySize: "6-8 operators",
        annualVisitors: 120000,
        monthlyDensity: [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0],
        speciesMonthly: {"Humpback whale": [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0]}
    },
    {
        name: "Hermanus",
        location: "South Africa",
        coordinates: [19.2410, -34.4187],
        entertainment: 92,
        visibility: 86,
        species: ["Southern right whale"],
        bestMonths: [7, 8, 9, 10, 11],
        specialNotes: "Best land-based viewing globally; whales close to shore; whale crier with kelp horn",
        fullDescription: `Hermanus is internationally recognized as offering the best land-based whale watching in the world, with the World Wildlife Fund ranking it among the top 12 whale-watching destinations globally. Southern right whales come extraordinarily close to shore in Walker Bay—sometimes within 5 meters of the rocky coastline—making binoculars optional rather than essential.

The town's 12-kilometer Cliff Path provides continuous whale-watching vantage points, while the famous 'Whale Crier'—the only one of his kind in the world—patrols the streets blowing a kelp horn to announce whale sightings. This charming tradition captures the community's deep connection to the annual whale migration. Peak season runs from July through November, with September and October offering the highest whale concentrations as mothers nurse calves and males compete for mates. The annual Hermanus Whale Festival in late September celebrates this natural spectacle with educational programs, music, and community events. Hermanus is just 90 minutes from Cape Town, making it easily accessible as a day trip or weekend destination.`,
        accessibility: "Excellent",
        imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Hermanus_-_whale_watching_-_panoramio_(7).jpg",
        industrySize: "8-10 operators",
        annualVisitors: 150000,
        monthlyDensity: [0, 0, 0, 0, 0, 2, 3, 3, 3, 3, 2, 0],
        speciesMonthly: {"Humpback whale": [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1], "Southern right whale": [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0], "Bryde's whale": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]}
    },
    {
        name: "Tromsø",
        location: "Norway",
        coordinates: [18.9553, 69.6492],
        entertainment: 87,
        visibility: 72,
        species: ["Orca", "Humpback whale", "Fin whale"],
        bestMonths: [10, 11, 12, 1],
        specialNotes: "Winter orca safari; herring migration; Northern Lights; Sami cultural heritage",
        fullDescription: `Tromsø, located 350 kilometers above the Arctic Circle, serves as the gateway to Norway's northern whale-watching grounds, where orcas and humpback whales hunt massive herring schools in the dramatic Arctic winter. From November through January, when the sun never rises above the horizon, the blue twilight hours create atmospheric conditions unlike anywhere else on earth.

The herring migration draws hundreds of whales to the fjords surrounding Tromsø, creating concentrated feeding aggregations accessible by boat tours departing from the city. The possibility of combining whale watching with northern lights viewing makes Tromsø unique among world whale-watching destinations. The city itself offers excellent infrastructure, museums (including the Polar Museum), and distinctive Arctic architecture. Tours operate in challenging winter conditions requiring warm clothing and tolerance for cold, but for travelers seeking raw Arctic wildlife experiences, Tromsø delivers unforgettable encounters.`,
        accessibility: "Good",
        imageUrl: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop",
        industrySize: "6-8 operators",
        annualVisitors: 60000,
        monthlyDensity: [3, 2, 0, 0, 0, 2, 2, 2, 0, 1, 2, 3],
        speciesMonthly: {"Orca": [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1], "Humpback whale": [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1], "Sperm whale": [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0], "Pilot whale": [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0], "Minke whale": [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0]}
    },
    {
        name: "Andenes",
        location: "Norway",
        coordinates: [16.1194, 69.3143],
        entertainment: 88,
        visibility: 75,
        species: ["Sperm whale", "Orca", "Humpback whale"],
        bestMonths: [5, 6, 7, 8, 9],
        specialNotes: "World's best sperm whale site; Bleik Canyon; midnight sun; remote Arctic adventure",
        fullDescription: `Andenes, at the northern tip of the Vesterålen archipelago in Arctic Norway, offers remarkable access to deep ocean waters just minutes from shore. The continental shelf drops away steeply near the coast, creating year-round habitat for sperm whales—the world's largest toothed predators—that dive to extraordinary depths to hunt giant squid in the submarine canyons.

Unlike most sperm whale destinations that require long boat journeys to reach deep water, Andenes tours reach prime habitat within 30 minutes. Summer expeditions (May through September) operate under the midnight sun, with nearly 24 hours of daylight creating extended viewing opportunities. Orcas, pilot whales, minke whales, and humpbacks are also regularly encountered. The Andenes Whale Centre provides educational context through exhibits on whale biology and the region's whaling history. The remote Arctic setting, with dramatic coastal mountains and seabird colonies, adds wilderness dimension to the whale-watching experience.`,
        accessibility: "Moderate",
        imageUrl: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop",
        industrySize: "3-4 operators",
        annualVisitors: 25000,
        monthlyDensity: [0, 0, 0, 0, 2, 3, 3, 3, 1, 0, 0, 0],
        speciesMonthly: {"Humpback whale": [0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0], "Orca": [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1], "Sperm whale": [0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0], "Pilot whale": [0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0], "Minke whale": [0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0]}
    },
    {
        name: "Bay of Fundy",
        location: "Canada",
        coordinates: [-66.0000, 45.0000],
        entertainment: 84,
        visibility: 74,
        species: ["Humpback whale", "Fin whale", "Minke whale", "Right whale"],
        bestMonths: [6, 7, 8, 9, 10],
        specialNotes: "Highest tides globally; endangered right whale habitat; dramatic coastal cliffs",
        fullDescription: `The Bay of Fundy, between New Brunswick and Nova Scotia, experiences the highest tides in the world—reaching over 16 meters (53 feet) in some areas—creating extreme mixing conditions that concentrate nutrients and support exceptional marine productivity. These waters serve as critical feeding habitat for the endangered North Atlantic right whale, with only approximately 350 individuals remaining in the world's population.

The bay functions as a summer nursery, with mothers and calves feeding on dense copepod concentrations from July through October. Fin whales, minke whales, and humpbacks also aggregate here to feed, creating diverse whale-watching opportunities. The rarity and endangered status of right whales makes every sighting significant—researchers work to photo-identify individuals, and responsible operators maintain strict approach distances. The bay's dramatic tidal landscapes, including the famous Hopewell Rocks, add geological wonder to the wildlife experience.`,
        accessibility: "Good",
        imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Whale_tail_by_the_island_of_Grand_Manan,_New_Brunswick,_Canada.jpg",
        industrySize: "6-8 operators",
        annualVisitors: 100000,
        monthlyDensity: [0, 0, 0, 0, 0, 3, 3, 3, 3, 2, 0, 0],
        speciesMonthly: {"Humpback whale": [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0], "North Atlantic right whale": [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0], "Fin whale": [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0], "Minke whale": [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0]}
    },
    {
        name: "Azores",
        location: "Portugal",
        coordinates: [-27.2000, 38.7000],
        entertainment: 89,
        visibility: 80,
        species: ["Sperm whale", "Blue whale", "Fin whale", "Sei whale"],
        bestMonths: [4, 5, 6, 7, 8, 9, 10],
        specialNotes: "20+ cetacean species; traditional lookout towers; volcanic islands; mid-Atlantic hotspot",
        fullDescription: `The Azores, a Portuguese archipelago in the mid-Atlantic, occupy a position along one of the ocean's great migratory highways, with up to 28 cetacean species recorded in these waters—making it one of the most diverse whale-watching destinations on earth. The islands serve as a 'pit stop' for whales migrating between northern feeding grounds and southern breeding areas.

Spring and early summer bring blue whales, sei whales, and fin whales; sperm whales (particularly males) are present year-round; and resident populations of multiple dolphin species ensure sightings throughout the season. The traditional 'vigia' system—land-based spotters perched in clifftop lookouts originally used for whaling operations—now guides whale-watching boats to sightings with remarkable efficiency. The Azores' history as a former whaling station adds cultural depth, with several islands preserving whaling heritage sites. The mid-Atlantic location means these islands can be reached from both North America and Europe.`,
        accessibility: "Good",
        imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/A%C3%A7ores_2010-07-21_(5115135406).jpg",
        industrySize: "10+ operators",
        annualVisitors: 80000,
        monthlyDensity: [0, 0, 3, 4, 5, 5, 4, 3, 3, 2, 0, 0],
        speciesMonthly: {"Blue whale": [0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0], "Sperm whale": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], "Fin whale": [0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0], "Sei whale": [0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0], "Pilot whale": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]}
    },
    {
        name: "Oahu",
        location: "USA",
        coordinates: [-157.8583, 21.4389],
        entertainment: 84,
        visibility: 72,
        species: ["Humpback whale"],
        bestMonths: [12, 1, 2, 3, 4],
        specialNotes: "Honolulu departures; combines with snorkeling; Pearl Harbor historic site nearby",
        fullDescription: `Oahu, the most populated and visited of Hawaii's islands, offers accessible whale watching from multiple departure points around Honolulu. The island's position within the Hawaiian Islands Humpback Whale National Marine Sanctuary means that during peak winter season (January through March), humpback whale encounters are highly reliable.

Departing from Waikiki or Ko'Olina, tours reach whale aggregation areas within 30-45 minutes, making this one of the most convenient whale-watching destinations for travelers already visiting Honolulu. While less concentrated than waters off Maui, Oahu's whale watching offers excellent opportunities to observe breeding behaviors including breaching, tail slapping, and competitive male groups. The combination of reliable sightings, developed tourism infrastructure, and Honolulu's many attractions makes Oahu practical for travelers who want to include whale watching as part of a broader Hawaiian vacation without traveling to outer islands.`,
        accessibility: "Excellent",
        imageUrl: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop",
        industrySize: "15+ operators",
        annualVisitors: 400000,
        monthlyDensity: [2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 1],
        speciesMonthly: {"Humpback whale": [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1], "Sperm whale": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], "Pilot whale": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]}
    },
    {
        name: "Churchill",
        location: "Canada",
        coordinates: [-94.1650, 58.7684],
        entertainment: 81,
        visibility: 66,
        species: ["Beluga whale"],
        bestMonths: [7, 8],
        specialNotes: "3,000 belugas in Churchill River estuary; polar bear capital; extreme remote access",
        fullDescription: `Churchill, Manitoba—accessible only by plane or train on the shores of Hudson Bay—hosts one of the largest beluga whale aggregations in the world. Each summer, approximately 60,000 belugas migrate into Hudson Bay, with an estimated 3,000 gathering in the Churchill River estuary from mid-June through mid-August to calve, molt, and socialize in the warmer river waters.

Beluga encounters here are exceptionally intimate: the curious, vocal whales approach kayaks, boats, and even stand-up paddleboards, creating close interactions impossible at most whale destinations. The belugas' white coloring and expressive faces—they can change facial expressions—make them particularly engaging subjects. Churchill is also famous as the 'Polar Bear Capital of the World,' with bear viewing possible in October-November. This combination of beluga whales and polar bears in an accessible Arctic location makes Churchill unique among wildlife destinations, though its remote location requires significant planning and travel time.`,
        accessibility: "Moderate",
        imageUrl: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop",
        industrySize: "4-6 operators",
        annualVisitors: 30000,
        monthlyDensity: [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
        speciesMonthly: {"Beluga whale": [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0]}
    },
    {    
        name: "Dominica",
        location: "Dominica",
        coordinates: [-61.3710, 15.4150],
        entertainment: 86,
        visibility: 72,
        species: ["Sperm whale"],
        bestMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        specialNotes: "Year-round resident sperm whales; snorkeling with whales permitted; volcanic island",
        fullDescription: `Dominica, known as the “Nature Island” of the Caribbean, hosts the only year-round resident population of sperm whales in the world. A community of approximately 200–300 sperm whales—primarily females and their offspring—lives permanently in the deep waters off Dominica’s west coast, where steep submarine terrain provides ideal habitat and abundant squid prey.

    Unlike other sperm whale destinations where males are the primary residents, Dominica’s population centers on extended family groups of females with calves of various ages, offering opportunities to observe social behaviors and nursing. The whales can be encountered year-round, though calmer seas from November through March create optimal viewing conditions. Dominica permits respectful in-water encounters under strict guidelines, allowing snorkelers to observe these deep-diving giants between their 45-minute dives. The island’s minimal development and commitment to ecotourism create an authentic wilderness experience, though limited flight connections require planning.`,
        accessibility: "Good",
        imageUrl: "https://whalewatchersatlas.com/images/Monteray6.jpg",
        industrySize: "4-6 operators",
        annualVisitors: 20000,
        monthlyDensity: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        speciesMonthly: {
            "Sperm whale":    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            "Pilot whale":    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            "Beaked whale":   [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            "Humpback whale": [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1]
        }
    },

    {
        name: "Hauraki Gulf",
        location: "New Zealand",
        coordinates: [175.0000, -36.5000],
        entertainment: 82,
        visibility: 69,
        species: ["Orca", "Humpback whale", "Bryde's whale"],
        bestMonths: [1, 2, 3, 4, 5, 10, 11, 12],
        specialNotes: "Auckland departures; Bryde's whales year-round; dolphins abundant; volcanic islands",
        fullDescription: `The Hauraki Gulf, visible from downtown Auckland’s waterfront, supports a year-round resident population of Bryde’s whales—one of only a few such populations in the world and among the most endangered. These sleek, tropical whales feed on schools of fish in the gulf’s productive waters, often within sight of New Zealand’s largest city.

    The juxtaposition of whale watching with Auckland’s skyline backdrop creates a unique urban wildlife experience. Common dolphins, bottlenose dolphins, and orcas are also regularly encountered, with orcas visiting the gulf to hunt stingrays in shallow waters. The Hauraki Gulf Marine Park encompasses numerous islands and protected areas, supporting rich biodiversity beyond whales. Tours depart from downtown Auckland, making this one of the most accessible whale-watching destinations from a major international city. November through May offers the calmest conditions and highest cetacean activity.`,
        accessibility: "Excellent",
        imageUrl: "https://whalewatchersatlas.com/images/Monteray6.jpg",
        industrySize: "6-8 operators",
        annualVisitors: 100000,
        monthlyDensity: [2, 2, 2, 2, 1, 1, 1, 1, 1, 2, 2, 2],
        speciesMonthly: {
            "Orca":        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            "Bryde's whale": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
        }
    },

    {
        name: "Nuquí/Bahía Solano",
        location: "Colombia",
        coordinates: [-77.2667, 5.7000],
        entertainment: 85,
        visibility: 71,
        species: ["Humpback whale"],
        bestMonths: [7, 8, 9, 10],
        specialNotes: "Pacific coast rainforest; mothers & calves; remote jungle lodges; breaching displays",
        fullDescription: `Colombia’s Pacific coast, accessible only by air or boat, offers some of South America’s most pristine and least-visited humpback whale habitat. Each year from July through October, humpback whales migrate from Antarctic feeding grounds to breed and calve in the warm, protected waters of Bahía Solano, Nuquí, and surrounding coastal areas within the Utría National Park.

    The remote Pacific coast remains largely undeveloped, with small eco-lodges providing the only accommodation amid dense Chocó rainforest—one of the most biodiverse regions on earth. Whale-watching tours operate from local fishing boats, maintaining an authentic, community-based experience far from mass tourism. The combination of humpback whales, pristine rainforest, and traditional Afro-Colombian and Indigenous communities creates a uniquely Colombian experience. Access requires flights from Medellín or Cali, and amenities are basic, but for travelers seeking genuine wilderness whale encounters with cultural depth, Colombia’s Pacific coast rewards the effort.`,
        accessibility: "Moderate",
        imageUrl: "https://whalewatchersatlas.com/images/Monteray6.jpg",
        industrySize: "Small local operators",
        annualVisitors: 15000,
        monthlyDensity: [0, 0, 0, 0, 0, 0, 2, 3, 3, 1, 0, 0],
        speciesMonthly: {
            "Humpback whale": [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0],
            "Sperm whale":    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            "Bryde's whale":  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
        }
    },

    {
        name: "Punta Norte",
        location: "Argentina",
        coordinates: [-63.6810, -42.1030],
        entertainment: 90,
        visibility: 75,
        species: ["Orca", "Southern right whale"],
        bestMonths: [2, 3, 4],
        specialNotes: "Famous orca intentional beaching; sea lion predation; decades of research",
        fullDescription: `Punta Norte, at the northeastern tip of Península Valdés, is one of only two places in the world where orcas have developed the extraordinary behavior of intentionally stranding themselves on beaches to catch seal and sea lion pups. This high-risk hunting technique—where orcas launch themselves onto sand with enough momentum to grab prey, then wriggle back to sea on retreating waves—is taught from generation to generation within specific family groups.

    The behavior is concentrated in March and April when sea lion pups are venturing into shallow water, and again in October–November when elephant seal pups provide targets. Viewing occurs from clifftop vantage points (beach access is restricted to protect wildlife and visitors), requiring patience and luck—the whales appear only during specific tidal conditions a few hours each day. For wildlife enthusiasts, witnessing this unique predation behavior ranks among the world’s most dramatic natural history spectacles.`,
        accessibility: "Moderate",
        imageUrl: "https://whalewatchersatlas.com/images/Monteray6.jpg",
        industrySize: "Limited access",
        annualVisitors: 30000,
        monthlyDensity: [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0],
        speciesMonthly: {
            "Orca": [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0]
        }
    },

    {
        name: "Galápagos (Bolívar Channel)",
        location: "Ecuador",
        coordinates: [-91.4167, -0.3833],
        entertainment: 83,
        visibility: 68,
        species: ["Orca", "Humpback whale", "Bryde's whale"],
        bestMonths: [6, 7, 8, 9, 10],
        specialNotes: "Endemic Galápagos orcas; Darwin's evolution islands; unique marine ecosystem",
        fullDescription: `The Bolívar Channel, separating Isabela and Fernandina islands in the Galápagos, represents one of the world’s most reliable locations for encountering sei whales—an otherwise elusive species that typically inhabits remote oceanic waters. The channel’s position at the confluence of several major ocean currents creates exceptional upwelling and productivity.

    The Galápagos marine ecosystem supports an extraordinary diversity of cetaceans: blue whales, Bryde’s whales, sperm whales, orcas, and multiple dolphin species appear depending on season and oceanographic conditions. Whale encounters typically occur during multi-day expedition cruises through the archipelago, combining marine mammals with the Galápagos’ famous terrestrial wildlife—giant tortoises, marine iguanas, blue-footed boobies, and endemic finches. The protected waters of the Galápagos Marine Reserve ensure relatively undisturbed whale populations, though sightings vary significantly with ocean conditions and season.`,
        accessibility: "Moderate",
        imageUrl: "https://whalewatchersatlas.com/images/Monteray6.jpg",
        industrySize: "Limited permits",
        annualVisitors: 40000,
        monthlyDensity: [0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 1, 0],
        speciesMonthly: {
            "Blue whale":   [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0],
            "Sei whale":    [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0],
            "Bryde's whale":[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
        }
    },


    // --- NEW LOCATIONS BUILT FROM YOUR DESCRIPTIONS ---

    {
        name: "Cape Cod / Stellwagen Bank",
        location: "Massachusetts, USA",
        coordinates: [-70.3186, 41.6979],
        entertainment: 88,
        visibility: 70,
        species: ["Humpback whale", "Fin whale", "Minke whale", "North Atlantic right whale"],
        bestMonths: [4, 5, 6, 7, 8, 9, 10],
        specialNotes: "Access to Stellwagen Bank; long research history; frequent humpbacks and fins",
        fullDescription: `Cape Cod’s waters provide access to Stellwagen Bank National Marine Sanctuary, one of the most productive whale-watching areas in the North Atlantic. Barnstable and neighboring Provincetown serve as departure points for tours reaching feeding grounds where humpback whales, fin whales, and the critically endangered North Atlantic right whale aggregate from April through October.

    The area’s long whale-watching history has created a citizen science culture, with researchers and tour operators collaborating to identify individual whales through photo-identification catalogs. Many humpbacks return year after year, allowing guides to share life histories of recognized individuals. The proximity to Boston and Cape Cod’s summer tourism infrastructure makes this highly accessible, while the New England coastal setting—historic lighthouses, seaside villages, and fresh seafood—adds regional character to the wildlife experience.`,
        accessibility: "Excellent",
        imageUrl: "https://whalewatchersatlas.com/images/Monteray6.jpg",
        industrySize: "Multiple large operators",
        annualVisitors: 150000,
        monthlyDensity: [0, 0, 0, 2, 2, 3, 3, 3, 3, 2, 0, 0],
        speciesMonthly: {
            "Humpback whale":        [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0],
            "Fin whale":             [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0],
            "Minke whale":           [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0],
            "North Atlantic right whale": [0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0]
        }
    },

    {
        name: "Depoe Bay",
        location: "Oregon, USA",
        coordinates: [-124.0622, 44.8073],
        entertainment: 84,
        visibility: 65,
        species: ["Gray whale", "Humpback whale"],
        bestMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12],
        specialNotes: "Resident gray whales; strong land-based viewing; Whale Watching Center",
        fullDescription: `Depoe Bay, Oregon, claims the title of “Whale Watching Capital of the Oregon Coast,” with gray whales visible from shore virtually year-round. The town’s position along the Pacific coast migration route and its resident population of summer-feeding gray whales create exceptional viewing consistency from this small coastal community.

    Gray whales pass close to shore during their December–May migration between Alaska and Mexico, while a population of approximately 200 “resident” grays remains along the Oregon coast year-round rather than completing the full migration—feeding in kelp beds just offshore. The Whale Watching Center, operated by Oregon State Parks, provides educational exhibits and trained volunteers who help visitors spot whales from the viewing platforms. Depoe Bay’s compact, walkable downtown and spectacular coastal scenery make it an appealing destination for travelers seeking accessible whale watching without boat tours.`,
        accessibility: "Good",
        imageUrl: "https://whalewatchersatlas.com/images/Monteray6.jpg",
        industrySize: "Small fleet of local operators",
        annualVisitors: 60000,
        monthlyDensity: [1, 1, 2, 3, 2, 2, 2, 2, 2, 1, 1, 2],
        speciesMonthly: {
            "Gray whale":     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            "Humpback whale": [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0]
        }
    },

    {
        name: "Orcas Island",
        location: "Washington, USA",
        coordinates: [-122.9657, 48.6457],
        entertainment: 87,
        visibility: 68,
        species: ["Orca", "Humpback whale", "Minke whale", "Gray whale"],
        bestMonths: [4, 5, 6, 7, 8, 9, 10],
        specialNotes: "Critical habitat for southern resident orcas; premier land-based viewing at Lime Kiln",
        fullDescription: `Orcas Island, the largest of Washington State’s San Juan Islands, offers premier access to the waters where endangered southern resident orcas have been studied for over 50 years. The island’s western shoreline and surrounding waters fall within the critical habitat designated for these iconic whales, with the J, K, and L pods returning each summer to hunt salmon.

    Lime Kiln Point State Park—dubbed “Whale Watch Park”—is considered one of the finest land-based whale-watching locations in the world, with orcas regularly passing within hundreds of meters of shore. The island also serves as a departure point for boat tours that maintain respectful distances from these endangered whales while providing closer observation opportunities. The San Juan Islands’ protected status and active conservation community create a culture of responsible whale watching, with strict regulations governing vessel behavior around the vulnerable southern resident population.`,
        accessibility: "Moderate",
        imageUrl: "https://whalewatchersatlas.com/images/Monteray6.jpg",
        industrySize: "Medium-sized regional industry",
        annualVisitors: 80000,
        monthlyDensity: [0, 0, 1, 2, 2, 3, 3, 3, 3, 2, 1, 0],
        speciesMonthly: {
            "Orca":          [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            "Humpback whale":[0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0],
            "Minke whale":   [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0],
            "Gray whale":    [0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1]
        }
    },

    {
        name: "Cape May",
        location: "New Jersey, USA",
        coordinates: [-74.9111, 38.9368],
        entertainment: 78,
        visibility: 62,
        species: ["Humpback whale", "Fin whale", "Minke whale", "North Atlantic right whale", "Atlantic bottlenose dolphin"],
        bestMonths: [4, 5, 6, 7, 8, 9, 10, 11],
        specialNotes: "Historic Victorian resort town; mixed whale and dolphin tours; mid-Atlantic migration corridor",
        fullDescription: `Cape May, at the southern tip of New Jersey, offers whale and dolphin watching in the waters where Delaware Bay meets the Atlantic Ocean. While not a premiere whale destination, the area provides opportunities to see humpback whales, fin whales, and occasional right whales during spring and fall migrations, along with abundant bottlenose dolphins throughout summer.

    The Cape May Whale Watcher and other operators run tours from this historic Victorian resort town, combining marine wildlife with the chance to explore one of America’s oldest seaside communities. Spring tours may encounter migrating whales, while summer trips focus on dolphins and the diverse marine life drawn to the bay–ocean confluence. Cape May’s accessibility from Philadelphia and New York, combined with its beaches, birding, and Victorian architecture, makes it practical for travelers seeking marine wildlife experiences on the mid-Atlantic coast.`,
        accessibility: "Excellent",
        imageUrl: "https://whalewatchersatlas.com/images/Monteray6.jpg",
        industrySize: "Several established operators",
        annualVisitors: 50000,
        monthlyDensity: [0, 0, 1, 2, 2, 2, 3, 3, 3, 2, 1, 0],
        speciesMonthly: {
            "Humpback whale":          [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
            "Fin whale":               [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
            "Minke whale":             [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0],
            "North Atlantic right whale":[0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0],
            "Atlantic bottlenose dolphin":[0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0]
        }
    },

    {
        name: "Ningaloo Reef",
        location: "Western Australia, Australia",
        coordinates: [113.90, -22.00],
        entertainment: 92,
        visibility: 82,
        species: ["Humpback whale", "Whale shark"],
        bestMonths: [3, 4, 5, 6, 7, 8, 9, 10],
        specialNotes: "World Heritage fringing reef; swim-with humpbacks and whale sharks; remote Coral Coast",
        fullDescription: `Ningaloo Reef, along Western Australia’s remote Coral Coast, offers a rare opportunity to swim with humpback whales during their northbound and southbound migrations. As many as 30,000 humpbacks pass through these waters between August and October, with strict regulations allowing small groups of snorkelers to enter the water for brief encounters with these massive mammals.

    Ningaloo gained UNESCO World Heritage status for its extraordinary reef system—one of the world’s largest fringing reefs—which also supports reliable encounters with whale sharks from March through July. The combination of whale shark and humpback whale swimming experiences makes Ningaloo unique among world wildlife destinations. The remote location (around 1,200 kilometers north of Perth) maintains an uncrowded experience, though access requires significant travel planning. Exmouth and Coral Bay serve as base towns for the reef.`,
        accessibility: "Remote but organized",
        imageUrl: "https://whalewatchersatlas.com/images/Monteray6.jpg",
        industrySize: "Specialized eco-tourism hub",
        annualVisitors: 40000,
        monthlyDensity: [0, 0, 1, 2, 3, 3, 3, 3, 2, 2, 1, 0],
        speciesMonthly: {
            "Humpback whale": [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0],
            "Whale shark":    [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0]
        }
    },

    {
        name: "Bazaruto Archipelago",
        location: "Mozambique",
        coordinates: [35.5000, -21.6333],
        entertainment: 86,
        visibility: 78,
        species: ["Humpback whale", "Whale shark"],
        bestMonths: [6, 7, 8, 9, 10, 11],
        specialNotes: "National park islands; humpback migration route; dugongs and pristine reefs",
        fullDescription: `The Bazaruto Archipelago, a chain of islands off Mozambique’s coast protected as a national park, lies along the migration route for humpback whales traveling between Antarctic feeding grounds and tropical breeding areas. From June through November, humpbacks pass through these warm Indian Ocean waters, with mothers and calves often lingering in the protected shallow waters around the islands.

    While Mozambique’s whale-watching industry is less developed than established destinations, this creates an uncrowded, frontier experience. The archipelago’s pristine coral reefs, abundant marine life (including the endangered dugong), and traditional dhow sailing culture add dimension beyond whale encounters. Limited accommodation options—primarily upscale eco-lodges—maintain low visitor numbers. For travelers seeking off-the-beaten-path humpback encounters combined with exceptional diving and snorkeling, Bazaruto offers genuine wilderness appeal.`,
        accessibility: "Remote (light aircraft + boat)",
        imageUrl: "https://whalewatchersatlas.com/images/Monteray6.jpg",
        industrySize: "Low-density high-end tourism",
        annualVisitors: 15000,
        monthlyDensity: [0, 0, 0, 0, 1, 2, 3, 3, 3, 2, 1, 0],
        speciesMonthly: {
            "Humpback whale": [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0],
            "Whale shark":    [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1]
        }
    },

    {
        name: "Silver Bank",
        location: "Dominican Republic (offshore bank)",
        coordinates: [-69.75, 20.5],
        entertainment: 93,
        visibility: 75,
        species: ["Humpback whale"],
        bestMonths: [1, 2, 3, 4],
        specialNotes: "Live-aboard-only sanctuary; premier in-water humpback encounters; strict regulations",
        fullDescription: `Silver Bank, located approximately 80 miles north of the Dominican Republic, hosts the largest known gathering of North Atlantic humpback whales—with as many as several thousand individuals congregating between January and April to mate and calve. This protected sanctuary, accessible only by multi-day live-aboard expedition, offers one of the world’s premier opportunities for in-water encounters with humpback whales.

    Strict regulations permit small groups of snorkelers to enter the water in the presence of whales, creating intimate encounters impossible at most destinations. The remote, expedition-style experience (typically 7–10 days including travel) filters for committed wildlife enthusiasts, maintaining an uncrowded atmosphere despite high whale concentrations. The shallow bank waters provide exceptional visibility and calm conditions compared to open ocean environments. For travelers willing to invest significant time and expense, Silver Bank delivers transformative whale encounters.`,
        accessibility: "Remote live-aboard only",
        imageUrl: "https://whalewatchersatlas.com/images/Monteray6.jpg",
        industrySize: "Tightly limited permits",
        annualVisitors: 2000,
        monthlyDensity: [2, 3, 3, 2, 0, 0, 0, 0, 0, 0, 0, 0],
        speciesMonthly: {
            "Humpback whale": [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0]
        }
    },

    {
        name: "Uvita (Marino Ballena NP)",
        location: "Costa Rica",
        coordinates: [-83.7399, 9.1734],
        entertainment: 85,
        visibility: 70,
        species: ["Humpback whale"],
        bestMonths: [1, 2, 3, 7, 8, 9, 10, 12],
        specialNotes: "Double humpback season (north & south); whale-tail sandbar; tropical rainforest backdrop",
        fullDescription: `Uvita, on Costa Rica’s southern Pacific coast, sits within the Marino Ballena National Park—named for the humpback whale (“ballena”) that serves as its centerpiece species. The park’s distinctive whale-tail-shaped sand bar, visible at low tide, marks waters where humpback whales from both Northern and Southern Hemisphere populations converge at different times of year.

    Southern Hemisphere humpbacks arrive between July and November, migrating from Antarctic waters to breed and calve; Northern Hemisphere populations visit from December through March. This double season creates extended whale-watching opportunities unusual among world destinations. The national park’s protected status ensures relatively undisturbed waters, while Costa Rica’s ecotourism culture promotes responsible viewing practices. The combination of humpback whales, tropical rainforest, scarlet macaws, and Pacific beaches makes Uvita appealing for travelers seeking diverse wildlife experiences.`,
        accessibility: "Good (road access from San José)",
        imageUrl: "https://whalewatchersatlas.com/images/Monteray6.jpg",
        industrySize: "Growing local ecotourism",
        annualVisitors: 40000,
        monthlyDensity: [2, 2, 2, 0, 0, 0, 2, 3, 3, 2, 0, 2],
        speciesMonthly: {
            "Humpback whale": [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1]
        }
    },

    {
        name: "Tromsø Fjords",
        location: "Norway",
        coordinates: [18.9553, 69.6492],
        entertainment: 89,
        visibility: 60,
        species: ["Orca", "Humpback whale", "Fin whale"],
        bestMonths: [1, 10, 11, 12],
        specialNotes: "Arctic herring run; orcas and humpbacks in fjords; polar night & northern lights backdrop",
        fullDescription: `Tromsø has emerged as one of the few locations where operators offer snorkeling experiences with wild orcas and humpback whales during the Arctic herring-feeding season. From November through January, massive herring schools concentrate in the fjords north of Tromsø, drawing hundreds of whales that can be observed from boats—and, under controlled conditions, from the water.

    These encounters require dry suits for protection in near-freezing water temperatures and involve significant physical demands. The experience is strictly weather-dependent and cannot be guaranteed. For fit, adventurous travelers comfortable with challenging conditions, swimming alongside orcas carousel-feeding on herring bait balls beneath the Arctic twilight ranks among the world’s most extraordinary wildlife experiences. Strict safety protocols and experienced guides are essential—this is frontier wildlife tourism requiring careful operator selection.`,
        accessibility: "Good (major Arctic city hub)",
        imageUrl: "https://whalewatchersatlas.com/images/Monteray6.jpg",
        industrySize: "Seasonal specialist operators",
        annualVisitors: 25000,
        monthlyDensity: [2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 3, 3],
        speciesMonthly: {
            "Orca":          [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
            "Humpback whale":[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
            "Fin whale":     [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1]
        }
    },

    {
        name: "Northern Indian Ocean (Maldives–Oman)",
        location: "Maldives / Oman",
        coordinates: [73.3997, 1.9250],
        entertainment: 88,
        visibility: 80,
        species: ["Blue whale", "Sperm whale"],
        bestMonths: [11, 12, 1, 2, 3, 4, 5],
        specialNotes: "Non-migratory Indian Ocean blue whales; live-aboard and offshore expeditions",
        fullDescription: `The waters surrounding the Maldives and extending to Oman’s southern coast support an unusual blue whale population that does not follow typical migration patterns. Rather than traveling to polar waters to feed, these Indian Ocean blue whales remain in tropical latitudes year-round, undertaking westward movements between the Maldives and the Arabian Sea.

    November and May represent peak periods for blue whale encounters in these waters, though the research on this population remains limited compared to better-studied groups. The Maldives’ resort infrastructure provides comfortable bases for wildlife-focused expeditions, while the remote waters south of Oman offer genuine frontier exploration. For travelers interested in blue whales outside traditional destinations, the Indian Ocean population represents an emerging opportunity—though sighting reliability is less established than at locations like Mirissa or Monterey Bay.`,
        accessibility: "Variable (resorts vs. offshore expeditions)",
        imageUrl: "https://whalewatchersatlas.com/images/Monteray6.jpg",
        industrySize: "Emerging niche market",
        annualVisitors: 5000,
        monthlyDensity: [2, 2, 2, 2, 3, 3, 2, 0, 0, 0, 2, 2],
        speciesMonthly: {
            "Blue whale":  [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1],
            "Sperm whale": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
        }
    }
]



// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = WHALE_WATCHING_LOCATIONS;
}
