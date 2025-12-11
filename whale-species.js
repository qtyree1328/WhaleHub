// Whale Species Database
// Comprehensive information about whale species for the gallery and detail pages
//
// IMAGE FORMAT OPTIONS:
// - heroImage: "https://..." (single image - string)
// - heroImages: ["https://...", "https://..."] (multiple images - array, arrows will appear)
//
// Both formats are supported. Use heroImages array for multiple images per species.
// If both are provided, heroImages takes precedence.
//
// MAP CONFIG:
// To add a species to the map, set hasMapData: true and add a mapConfig object:
// mapConfig: {
//     id: 'unique_layer_id',           // Unique identifier for the map layer
//     sourceId: 'unique_source_id',    // Unique identifier for the data source
//     url: 'mapbox://username.tileset', // Mapbox tileset URL
//     sourceLayer: 'layer-name',        // Source layer name from Mapbox
//     color: { base: '#hex', heatmap: [...] }, // Color configuration
//     dateRange: { startYear: 2005, endYear: 2025 } // Year range for data filtering
// }

const WHALE_SPECIES = [
    {
        id: 'blue-whale',
        commonName: 'Blue Whale',
        scientificName: 'Balaenoptera musculus',
        category: 'Baleen Whale',
        hasMapData: true,
        image: 'https://whalewatchersatlas.com/images/whales/Blue_whale1.webp',
        heroImage: 'https://whalewatchersatlas.com/images/whales/Blue_whale1.webp',
        heroImages: [
            'https://whalewatchersatlas.com/images/whales/Blue_whale1.webp',
            'https://whalewatchersatlas.com/images/whales/Blue_whale2.jpg'
        ],
        color: '#0066ff',
        shortDescription: 'The largest animal ever known to exist on Earth.',
        fullDescription: `The blue whale is the largest animal known to have ever existed, reaching lengths of up to 100 feet (30 meters) and weights of up to 200 tons. Despite their enormous size, blue whales feed almost exclusively on tiny shrimp-like animals called krill.

Blue whales are found in all oceans except the Arctic. They migrate seasonally between summer feeding grounds in polar waters and winter breeding grounds in tropical and subtropical waters.

Their distinctive mottled blue-gray coloring and small dorsal fin make them identifiable at sea. Blue whales can live for 80-90 years and produce the loudest sounds of any animal, reaching up to 188 decibels.`,
        stats: {
            length: 'Up to 100 ft (30 m)',
            weight: 'Up to 200 tons',
            lifespan: '80-90 years',
            diet: 'Krill',
            population: '10,000-25,000',
            status: 'Endangered'
        },
        migrationPattern: 'Blue whales undertake long seasonal migrations, traveling from cold, productive waters where they feed in summer to warmer, tropical waters where they breed and give birth in winter.',
        bestViewingMonths: [6, 7, 8, 9],
        funFacts: [
            'A blue whale\'s heart is the size of a small car',
            'Their tongue alone can weigh as much as an elephant',
            'Blue whale calves gain about 200 pounds per day',
            'They can consume up to 6 tons of krill daily'
        ],
        mapConfig: {
            id: 'blue_whale_heat',
            sourceId: 'blue_whale_src',
            url: 'mapbox://qtyree.d8ugc52g',
            sourceLayer: 'Blue_whale_gbif_2005-2025_fin-9os5to',
            color: {
                base: '#0066ff',
                heatmap: [
                    'interpolate', ['linear'], ['heatmap-density'],
                    0.0, 'rgba(209, 211, 251, 0)',
                    0.3, 'rgba(150,200,255,0.6)',
                    0.6, 'rgba(70,130,255,0.8)',
                    1.0, 'rgba(0,60,200,0.95)'
                ]
            },
            dateRange: { startYear: 2006, endYear: 2025 }
        }
    },
    {
        id: 'humpback-whale',
        commonName: 'Humpback Whale',
        scientificName: 'Megaptera novaeangliae',
        category: 'Baleen Whale',
        hasMapData: true,
        image: 'https://whalewatchersatlas.com/images/whales/Humpback1.avif',
        heroImage: 'https://whalewatchersatlas.com/images/whales/Humpback1.avif',
        heroImages: [
            'https://whalewatchersatlas.com/images/whales/Humpback1.avif',
            'https://whalewatchersatlas.com/images/whales/Humpback2.jpg',
            'https://whalewatchersatlas.com/images/whales/Humpback3.jpg',
            'https://whalewatchersatlas.com/images/whales/Humpback4.jpg',
            'https://whalewatchersatlas.com/images/whales/Humpback5.jpg'
        ],
        color: '#00a65a',
        shortDescription: 'Famous for their spectacular breaching and complex songs.',
        fullDescription: `Humpback whales are among the most acrobatic of the great whales, known for their spectacular breaching displays where they launch their massive bodies almost entirely out of the water. They are also renowned for their complex and haunting songs, which can last for hours.

These whales are easily identified by their distinctive body shape, with long pectoral fins (up to one-third of their body length) and a knobbly head. Their tail flukes have unique black and white patterns that researchers use to identify individuals.

Humpbacks are found in all oceans and undertake one of the longest migrations of any mammal, traveling up to 16,000 miles annually between feeding and breeding grounds.`,
        stats: {
            length: 'Up to 60 ft (18 m)',
            weight: 'Up to 40 tons',
            lifespan: '45-50 years',
            diet: 'Krill, small fish',
            population: '80,000+',
            status: 'Least Concern'
        },
        migrationPattern: 'Humpbacks make one of the longest migrations of any mammal, traveling from polar feeding grounds to tropical breeding areas. Some populations migrate over 5,000 miles each way.',
        bestViewingMonths: [1, 2, 3, 7, 8, 9],
        funFacts: [
            'Their songs can be heard up to 20 miles away',
            'They use bubble-net feeding to catch fish',
            'Each whale has a unique tail pattern like a fingerprint',
            'Males compete by singing complex songs lasting up to 20 hours'
        ],
        mapConfig: {
            id: 'humpback_whale_heat',
            sourceId: 'humpback_whale_src',
            url: 'mapbox://qtyree.humpback_whale_2005_2025',
            sourceLayer: 'humpback_whale_2005_2025',
            color: {
                base: '#00dc30ff',
                heatmap: [
                    'interpolate', ['linear'], ['heatmap-density'],
                    0.0, 'rgba(0,0,0,0)',
                    0.3, 'rgba(180,240,190,0.6)',
                    0.6, 'rgba(80,200,120,0.8)',
                    1.0, 'rgba(0, 180, 78, 0.95)'
                ]
            },
            dateRange: { startYear: 2005, endYear: 2025 }
        }
    },
    {
        id: 'sperm-whale',
        commonName: 'Sperm Whale',
        scientificName: 'Physeter macrocephalus',
        category: 'Toothed Whale',
        hasMapData: true,
        image: 'https://whalewatchersatlas.com/images/whales/Sperm1.png',
        heroImage: 'https://whalewatchersatlas.com/images/whales/Sperm1.png',
        heroImages: [
            'https://whalewatchersatlas.com/images/whales/Sperm1.png',
            'https://whalewatchersatlas.com/images/whales/Sperm2.jpg',
            'https://whalewatchersatlas.com/images/whales/Sperm3.jpg'
        ],
        color: '#ed0322ff',
        shortDescription: 'The largest toothed predator and deepest diving mammal.',
        fullDescription: `The sperm whale is the largest of all toothed whales and the largest toothed predator on Earth. Made famous by Herman Melville's "Moby Dick," these magnificent creatures possess the largest brain of any animal and can dive deeper than any other mammal.

Sperm whales have a distinctive appearance with their enormous, block-shaped head (which can be up to one-third of their total length), wrinkled skin, and a blowhole positioned at the front left of their head, giving them an angled spout.

They are found throughout the world's oceans, from the equator to the edges of polar ice, though males venture into colder waters more frequently than females and calves.`,
        stats: {
            length: 'Up to 67 ft (20 m)',
            weight: 'Up to 57 tons',
            lifespan: '70+ years',
            diet: 'Giant squid, fish',
            population: '300,000-450,000',
            status: 'Vulnerable'
        },
        migrationPattern: 'Sperm whales don\'t follow strict migration patterns like baleen whales. Males tend to move to higher latitudes, while females and young stay in tropical and subtropical waters year-round.',
        bestViewingMonths: [5, 6, 7, 8, 9],
        funFacts: [
            'They can dive to depths of over 7,000 feet',
            'Their brain weighs about 17 pounds—the largest of any animal',
            'They can hold their breath for up to 90 minutes',
            'Their clicking sounds can reach 230 decibels'
        ],
        mapConfig: {
            id: 'sperm_whale_heat',
            sourceId: 'sperm_whale_src',
            url: 'mapbox://qtyree.8kuncm9v',
            sourceLayer: 'Sperm_whale_gbif_2005-2025_fi-9hwg0r',
            color: {
                base: '#e90120ff',
                heatmap: [
                    'interpolate', ['linear'], ['heatmap-density'],
                    0.0, 'rgba(0,0,0,0)',
                    0.3, 'rgba(235, 116, 116, 0.6)',
                    0.6, 'rgba(234, 83, 63, 0.8)',
                    1.0, 'rgba(246, 0, 0, 0.95)'
                ]
            },
            dateRange: { startYear: 2005, endYear: 2025 }
        }
    },
    {
        id: 'beluga-whale',
        commonName: 'Beluga Whale',
        scientificName: 'Delphinapterus leucas',
        category: 'Toothed Whale',
        hasMapData: true,
        image: 'https://whalewatchersatlas.com/images/whales/beluga1.avif',
        heroImage: 'https://whalewatchersatlas.com/images/whales/beluga1.avif',
        heroImages: [
            'https://whalewatchersatlas.com/images/whales/beluga1.avif',
            'https://whalewatchersatlas.com/images/whales/beluga1.webp',
            'https://whalewatchersatlas.com/images/whales/beluga2.webp',
            'https://whalewatchersatlas.com/images/whales/beluga3.jpg'
        ],
        color: '#e6ff01ff',
        shortDescription: 'The "canary of the sea" with remarkable vocal abilities.',
        fullDescription: `Beluga whales are small, white whales known for their distinctive rounded forehead called a "melon" and their remarkable vocal abilities, which earned them the nickname "canary of the sea." They are highly social animals that live in groups and can produce a wide variety of sounds.

Unlike most whales, belugas have a flexible neck that allows them to turn their head in all directions. Their white coloration provides camouflage in their icy Arctic habitat, though calves are born dark gray and gradually lighten over several years.

Belugas are found in Arctic and sub-Arctic waters, often congregating in estuaries and river mouths during summer months. Some populations migrate seasonally, while others remain in the same area year-round.`,
        stats: {
            length: 'Up to 18 ft (5.5 m)',
            weight: 'Up to 3,500 lbs',
            lifespan: '35-50 years',
            diet: 'Fish, squid, crustaceans',
            population: '150,000+',
            status: 'Least Concern'
        },
        migrationPattern: 'Beluga migration varies by population. Some migrate hundreds of miles between winter sea ice and summer estuaries, while others are resident in specific areas.',
        bestViewingMonths: [7, 8],
        funFacts: [
            'They can change the shape of their melon to make sounds',
            'Belugas can swim backwards',
            'Their white color provides camouflage in icy waters',
            'They shed and regrow their skin annually'
        ],
        // Add mapConfig when Mapbox data is available:
        mapConfig: {
            id: 'beluga_heat',
            sourceId: 'beluga_src',
            url: 'mapbox://qtyree.7gaw6161',
            sourceLayer: 'Beluga_whale_gbif_2005-2025-3o6w3m',
            color: {
                base: '#fffb00ff',
                heatmap: [
                    'interpolate', ['linear'], ['heatmap-density'],
                    0.0, 'rgba(0,0,0,0)',
                    0.3, 'rgba(244, 230, 125, 0.6)',
                    0.6, 'rgba(223, 229, 55, 0.8)',
                    1.0, 'rgba(255, 255, 0, 0.95)'
                ]
            },
            dateRange: { startYear: 2005, endYear: 2025 }
        }
    },
    {
        id: 'gray-whale',
        commonName: 'Gray Whale',
        scientificName: 'Eschrichtius robustus',
        category: 'Baleen Whale',
        hasMapData: true,
        image: 'https://whalewatchersatlas.com/images/whales/Grey1.webp',
        heroImage: 'https://whalewatchersatlas.com/images/whales/Grey1.webp',
        heroImages: [
            'https://whalewatchersatlas.com/images/whales/Grey1.webp',
            'https://whalewatchersatlas.com/images/whales/Grey2.webp',
            'https://whalewatchersatlas.com/images/whales/Grey3.webp',
            'https://whalewatchersatlas.com/images/whales/Grey4.jpg'
        ],
        color: '#3cdef4ff',
        shortDescription: 'Champion migrators traveling 12,000 miles annually.',
        fullDescription: `Gray whales are known for making one of the longest annual migrations of any mammal, traveling up to 12,000 miles round trip between their summer feeding grounds in the Arctic and their winter breeding lagoons in Baja California, Mexico.

These whales are the only baleen whales that are primarily bottom feeders, scooping up sediment from the ocean floor and filtering out small crustaceans called amphipods. This unique feeding style often leaves them with patches of barnacles and whale lice.

Gray whales in the breeding lagoons of Mexico are famous for being "friendly," often approaching boats and allowing people to touch them—a remarkable behavior that has made them favorites among whale watchers.`,
        stats: {
            length: 'Up to 49 ft (15 m)',
            weight: 'Up to 40 tons',
            lifespan: '55-70 years',
            diet: 'Amphipods, worms',
            population: '27,000',
            status: 'Least Concern'
        },
        migrationPattern: 'Gray whales make one of the longest migrations of any mammal, traveling from Arctic feeding grounds to Baja California breeding lagoons and back—a 10,000-12,000 mile journey.',
        bestViewingMonths: [1, 2, 3, 12],
        funFacts: [
            'They are called "friendly whales" for approaching boats',
            'Calves gain 60-70 pounds per day on mother\'s milk',
            'They were once called "devil fish" by whalers',
            'They\'ve been making this migration for millions of years'
        ],
        mapConfig: {
            id: 'gray_whale_heat',
            sourceId: 'gray_whale_src',
            url: 'mapbox://qtyree.cswaoaox',
            sourceLayer: 'Grey_whale_gbif_2005-2025_fin-78xday',
            color: {
                base: '#3cdef4ff',
                heatmap: [
                    'interpolate', ['linear'], ['heatmap-density'],
                    0.0, 'rgba(0,0,0,0)',
                    0.3, 'rgba(179, 243, 246, 0.6)',
                    0.6, 'rgba(101, 242, 255, 0.8)',
                    1.0, 'rgba(62, 236, 252, 0.95)'
                ]
            },
            dateRange: { startYear: 2005, endYear: 2025 }
        }
    },
    {
        id: 'minke-whale',
        commonName: 'Minke Whale',
        scientificName: 'Balaenoptera acutorostrata',
        category: 'Baleen Whale',
        hasMapData: true,
        image: 'https://whalewatchersatlas.com/images/whales/minke1.webp',
        heroImage: 'https://whalewatchersatlas.com/images/whales/minke1.webp',
        heroImages: [
            'https://whalewatchersatlas.com/images/whales/minke1.webp',
            'https://whalewatchersatlas.com/images/whales/minke2.jpg',
            'https://whalewatchersatlas.com/images/whales/minke3.jpg',
            'https://whalewatchersatlas.com/images/whales/minke4.jpg'
        ],
        color: '#f0b209ff',
        shortDescription: 'The smallest and most abundant of the rorqual whales.',
        fullDescription: `Minke whales are the smallest of the rorqual whales (the family that includes blue, fin, and humpback whales) and are found in oceans worldwide. They are curious animals that often approach boats, making them popular with whale watchers.

These sleek, streamlined whales are identified by their pointed snout, relatively small size, and a distinctive white band on their flippers (in the common minke whale). They are solitary animals, usually seen alone or in small groups.

Despite being the most abundant of the large baleen whales, minke whales face threats from climate change affecting their prey and ongoing hunting in some countries.`,
        stats: {
            length: 'Up to 35 ft (10.7 m)',
            weight: 'Up to 10 tons',
            lifespan: '40-50 years',
            diet: 'Krill, small fish',
            population: '500,000+',
            status: 'Least Concern'
        },
        migrationPattern: 'Minke whales migrate seasonally, spending summers in polar waters and winters in tropical waters, though their patterns are less predictable than other baleen whales.',
        bestViewingMonths: [5, 6, 7, 8, 9],
        funFacts: [
            'They are often curious and approach boats',
            'Named after a Norwegian whaler who mistook them for blue whales',
            'They can swim at speeds up to 24 mph',
            'Each whale consumes about 1,000 lbs of food daily'
        ],
        // Add mapConfig when Mapbox data is available:
        mapConfig: {
            id: 'minke_heat',
            sourceId: 'minke_src',
            url: 'mapbox://qtyree.minke_whale_2005_2025',
            sourceLayer: 'minke_whale_2005_2025',
            color: {
                base: '#f0b209ff',
                heatmap: [
                    'interpolate', ['linear'], ['heatmap-density'],
                    0.0, 'rgba(0,0,0,0)',
                    0.3, 'rgba(230, 215, 150, 0.6)',
                    0.6, 'rgba(246, 213, 65, 0.8)',
                    1.0, 'rgba(255, 204, 2, 0.95)'
                ]
            },
            dateRange: { startYear: 2005, endYear: 2025 }
        }
    },
    {
        id: 'north-atlantic-right-whale',
        commonName: 'North Atlantic Right Whale',
        scientificName: 'Eubalaena glacialis',
        category: 'Baleen Whale',
        hasMapData: true,
        image: 'https://whalewatchersatlas.com/images/whales/north_atlantic_right1.jpg',
        heroImage: 'https://whalewatchersatlas.com/images/whales/north_atlantic_right1.jpg',
        heroImages: [
            'https://whalewatchersatlas.com/images/whales/north_atlantic_right1.jpg'
        ],
        color: '#f842d9ff',
        shortDescription: 'One of the most endangered large whales with fewer than 350 remaining.',
        fullDescription: `The North Atlantic right whale is one of the world's most endangered large whale species, with fewer than 350 individuals remaining. They were named "right" whales by whalers who considered them the "right" whale to hunt because they swam slowly, floated when killed, and yielded large amounts of oil.

These whales are characterized by their lack of a dorsal fin, broad back, and distinctive white callosities (rough patches of skin) on their heads. Each whale's callosity pattern is unique and used by researchers for identification.

North Atlantic right whales face numerous threats including ship strikes, entanglement in fishing gear, climate change affecting their food supply, and noise pollution. Conservation efforts are ongoing to protect this critically endangered species.`,
        stats: {
            length: 'Up to 52 ft (16 m)',
            weight: 'Up to 70 tons',
            lifespan: '70+ years',
            diet: 'Copepods, krill',
            population: '<350',
            status: 'Critically Endangered'
        },
        migrationPattern: 'North Atlantic right whales migrate along the eastern coast of North America, from feeding grounds in New England and Canada to calving grounds off the southeastern United States.',
        bestViewingMonths: [1, 2, 3, 4],
        funFacts: [
            'Fewer than 350 individuals remain',
            'They can be identified by unique callosity patterns',
            'Females give birth only every 6-10 years',
            'Ship strikes are a leading cause of death'
        ],
        mapConfig: {
            id: 'north_atlantic_right_whale_heat',
            sourceId: 'north_atlantic_right_whale_src',
            url: 'mapbox://qtyree.0gcvr6cu',
            sourceLayer: 'NorthAtlanticRight_whale_gbif-3i6wg7',
            color: {
                base: '#f445d4ff',
                heatmap: [
                    'interpolate', ['linear'], ['heatmap-density'],
                    0.0, 'rgba(0,0,0,0)',
                    0.3, 'rgba(241, 144, 215, 0.6)',
                    0.6, 'rgba(251, 70, 242, 0.8)',
                    1.0, 'rgba(255, 35, 207, 0.95)'
                ]
            },
            dateRange: { startYear: 2005, endYear: 2025 }
        }
    },
    {
        id: 'southern-right-whale',
        commonName: 'Southern Right Whale',
        scientificName: 'Eubalaena australis',
        category: 'Baleen Whale',
        hasMapData: true,
        image: 'https://whalewatchersatlas.com/images/whales/Southern_right3.jpg',
        heroImage: 'https://whalewatchersatlas.com/images/whales/Southern_right3.jpg',
        heroImages: [
            'https://whalewatchersatlas.com/images/whales/Southern_right3.jpg',
            'https://whalewatchersatlas.com/images/whales/Southern_right_whale2.jpg',
            'https://whalewatchersatlas.com/images/whales/southern-right-whale-1.webp'
        ],
        color: '#d511f7ff',
        shortDescription: 'Gentle giants that come remarkably close to shore.',
        fullDescription: `Southern right whales are large baleen whales named by early whalers who considered them the "right" whale to hunt—they were slow swimmers, floated when killed, and yielded large quantities of oil and baleen. This made them easy targets, and they were hunted nearly to extinction.

These whales are easily recognized by their lack of a dorsal fin, their broad back, and the distinctive white callosities (rough patches of skin) on their heads. Each whale's callosity pattern is unique, like a fingerprint.

Southern right whales are found in southern hemisphere waters and are known for coming remarkably close to shore, making places like Hermanus, South Africa one of the best land-based whale watching destinations in the world.`,
        stats: {
            length: 'Up to 56 ft (17 m)',
            weight: 'Up to 80 tons',
            lifespan: '50+ years',
            diet: 'Copepods, krill',
            population: '15,000+',
            status: 'Least Concern'
        },
        migrationPattern: 'Southern right whales migrate between summer feeding grounds in Antarctic waters and winter breeding grounds along the coasts of South America, South Africa, and Australia.',
        bestViewingMonths: [7, 8, 9, 10],
        funFacts: [
            'They were named the "right" whale to hunt by whalers',
            'Their callosities are covered in whale lice',
            'They can be identified by unique head patterns',
            'Mothers and calves stay together for about a year'
        ],
        mapConfig: {
            id: 'southern_right_whale_heat',
            sourceId: 'southern_right_whale_src',
            url: 'mapbox://qtyree.a55e1jkt',
            sourceLayer: 'SouthernRight_whale_gbif_2005-a4f4pm',
            color: {
                base: '#d511f7ff',
                heatmap: [
                    'interpolate', ['linear'], ['heatmap-density'],
                    0.0, 'rgba(0,0,0,0)',
                    0.3, 'rgba(228, 148, 216, 0.6)',
                    0.6, 'rgba(207, 103, 242, 0.8)',
                    1.0, 'rgba(217, 31, 250, 0.95)'
                ]
            },
            dateRange: { startYear: 2005, endYear: 2025 }
        }
    },
    {
        id: 'fin-whale',
        commonName: 'Fin Whale',
        scientificName: 'Balaenoptera physalus',
        category: 'Baleen Whale',
        hasMapData: true,
        image: 'https://whalewatchersatlas.com/images/whales/fin1.jpg',
        heroImage: 'https://whalewatchersatlas.com/images/whales/fin1.jpg',
        heroImages: [
            'https://whalewatchersatlas.com/images/whales/fin1.jpg',
            'https://whalewatchersatlas.com/images/whales/fin2.webp',
            'https://whalewatchersatlas.com/images/whales/fin3.png',
            'https://whalewatchersatlas.com/images/whales/fin4.webp'
        ],
        color: '#005f0aff',
        shortDescription: 'The "greyhound of the sea" and second-largest animal.',
        fullDescription: `The fin whale is the second-largest animal on Earth after the blue whale, reaching lengths of up to 85 feet. Known as the "greyhound of the sea" for its sleek body and impressive speed, fin whales can swim at speeds up to 23 mph in short bursts.

One of the most distinctive features of fin whales is their asymmetrical coloring—the right lower jaw is white, while the left is dark. Scientists believe this asymmetry may be used to confuse prey while feeding.

Fin whales are found in all oceans and are often seen in social groups. Despite being heavily hunted in the 20th century, populations are slowly recovering, though they remain endangered.`,
        stats: {
            length: 'Up to 85 ft (26 m)',
            weight: 'Up to 80 tons',
            lifespan: '80-90 years',
            diet: 'Krill, small fish, squid',
            population: '100,000+',
            status: 'Vulnerable'
        },
        migrationPattern: 'Fin whales migrate seasonally, moving to cooler waters to feed in summer and warmer waters in winter. However, their migration patterns are less predictable than some other species.',
        bestViewingMonths: [6, 7, 8, 9, 10],
        funFacts: [
            'They can eat up to 2 tons of food per day',
            'Their blow can reach 20 feet high',
            'They have asymmetrical jaw coloring—unique among whales',
            'A fin whale\'s heart weighs about 400 pounds'
        ],
        mapConfig: {
            id: 'fin_whale_heat',
            sourceId: 'fin_whale_src',
            url: 'mapbox://qtyree.fin_whale_2005_2025',
            sourceLayer: 'Fin_whale_2005_2025',
            color: {
                base: '#03642aff',
                heatmap: [
                    'interpolate', ['linear'], ['heatmap-density'],
                    0.0, 'rgba(0,0,0,0)',
                    0.3, 'rgba(65, 89, 64, 0.6)',
                    0.6, 'rgba(45, 106, 58, 0.8)',
                    1.0, 'rgba(2, 93, 26, 0.95)'
                ]
            },
            dateRange: { startYear: 2005, endYear: 2025 }
        }
    },
    {
        id: 'sei-whale',
        commonName: 'Sei Whale',
        scientificName: 'Balaenoptera borealis',
        category: 'Baleen Whale',
        hasMapData: true,
        image: 'https://whalewatchersatlas.com/images/whales/sei1.jpg',
        heroImage: 'https://whalewatchersatlas.com/images/whales/sei1.jpg',
        heroImages: [
            'https://whalewatchersatlas.com/images/whales/sei1.jpg'
        ],
        color: '#20024fff',
        shortDescription: 'One of the fastest whales, capable of bursts up to 35 mph.',
        fullDescription: `The sei whale is the third-largest rorqual after the blue whale and fin whale, reaching lengths of up to 64 feet. Named after the Norwegian word "sei" (pollock), these whales often appeared off Norway at the same time as the pollock.

Sei whales are among the fastest cetaceans, capable of short bursts of speed up to 35 mph. They have a distinctive tall, sickle-shaped dorsal fin and a sleek, streamlined body that makes them powerful swimmers.

Unlike other rorquals that lunge-feed, sei whales are primarily skimmers, swimming through patches of prey with their mouths open. They prefer deep, offshore waters and are less commonly seen than other large whales.`,
        stats: {
            length: 'Up to 64 ft (19.5 m)',
            weight: 'Up to 31 tons',
            lifespan: '50-70 years',
            diet: 'Copepods, krill, small fish',
            population: '50,000-80,000',
            status: 'Endangered'
        },
        migrationPattern: 'Sei whales have unpredictable migration patterns, generally moving to cooler waters in summer and warmer waters in winter, but they are known to appear suddenly in areas and then disappear.',
        bestViewingMonths: [6, 7, 8],
        funFacts: [
            'One of the fastest whales at up to 35 mph',
            'Named after the Norwegian word for pollock',
            'They skim-feed rather than lunge-feed',
            'Sei whales prefer deep, offshore waters'
        ],
        mapConfig: {
            id: 'sei_whale_heat',
            sourceId: 'sei_whale_src',
            url: 'mapbox://qtyree.27hrhgdx',
            sourceLayer: 'Sei_whale_gbif_2005-2025_fina-c4994m',
            color: {
                base: '#20024fff',
                heatmap: [
                    'interpolate', ['linear'], ['heatmap-density'],
                    0.0, 'rgba(0,0,0,0)',
                    0.3, 'rgba(82, 71, 99, 0.6)',
                    0.6, 'rgba(55, 35, 80, 0.8)',
                    1.0, 'rgba(58, 6, 123, 0.95)'
                ]
            },
            dateRange: { startYear: 2005, endYear: 2025 }
        }
    },
    {
        id: 'orca',
        commonName: 'Orca',
        scientificName: 'Orcinus orca',
        category: 'Toothed Whale',
        hasMapData: true,
        image: 'https://whalewatchersatlas.com/images/whales/orca1.webp',
        heroImage: 'https://whalewatchersatlas.com/images/whales/orca1.webp',
        heroImages: [
            'https://whalewatchersatlas.com/images/whales/orca1.webp',
            'https://whalewatchersatlas.com/images/whales/Orca2.jpg',
            'https://whalewatchersatlas.com/images/whales/Orca3.jpg',
            'https://whalewatchersatlas.com/images/whales/Orca4.webp',
            'https://whalewatchersatlas.com/images/whales/Orca5.jpg',
            'https://whalewatchersatlas.com/images/whales/Orca6.webp',
            'https://whalewatchersatlas.com/images/whales/Orca7.webp'
        ],
        color: '#0e0e2bff',
        shortDescription: 'Apex predators with complex social structures and cultures.',
        fullDescription: `Orcas, also known as killer whales, are actually the largest members of the dolphin family. They are apex predators found in every ocean, from the Arctic to the Antarctic. Their distinctive black and white coloring and tall dorsal fin make them instantly recognizable.

Orcas live in tight-knit family groups called pods, led by matriarchs. Different populations have developed unique hunting techniques, vocalizations, and diets—essentially different cultures passed down through generations.

These highly intelligent creatures have been observed using sophisticated hunting strategies, including intentionally beaching themselves to catch seals and creating waves to knock prey off ice floes.`,
        stats: {
            length: 'Up to 32 ft (10 m)',
            weight: 'Up to 6 tons',
            lifespan: '50-90 years',
            diet: 'Fish, seals, other whales',
            population: '50,000+',
            status: 'Data Deficient'
        },
        migrationPattern: 'Orcas don\'t have predictable migration routes. Some populations are resident, staying in the same area year-round, while others (transients) travel widely following prey.',
        bestViewingMonths: [5, 6, 7, 8, 9],
        funFacts: [
            'Female orcas can live over 100 years',
            'They are one of the few species with menopause',
            'Different pods have distinct dialects',
            'They have the second-largest brain of any ocean mammal'
        ],
        mapConfig: {
            id: 'orca_whale_heat',
            sourceId: 'orca_whale_src',
            url: 'mapbox://qtyree.a7fg98a5',
            sourceLayer: 'Orca_whale_gbif_2005-2025_fin-dnycm5',
            color: {
                base: '#0e0e2bff',
                heatmap: [
                    'interpolate', ['linear'], ['heatmap-density'],
                    0.0, 'rgba(0,0,0,0)',
                    0.3, 'rgba(97, 97, 129, 0.6)',
                    0.6, 'rgba(47, 47, 74, 0.8)',
                    1.0, 'rgba(26, 26, 39, 0.95)'
                ]
            },
            dateRange: { startYear: 2005, endYear: 2025 }
        }
    }
];


// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = WHALE_SPECIES;
}