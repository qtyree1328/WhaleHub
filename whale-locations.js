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
        accessibility: "Good",
        // Use imageUrls (array) for multiple images, or imageUrl (string) for single image
        imageUrls: [
            "https://www.juneauwhalewatch.com/wp-content/uploads/2022/03/Juneau-Whale-Watching-Tour-and-Tracys-King-Crab-Combo_8.jpg"
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
        accessibility: "Good",
        imageUrl: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop",
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
        accessibility: "Good",
        imageUrl: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop",
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
        accessibility: "Excellent",
        imageUrl: "https://media.timeout.com/images/106176947/image.webp",
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
        accessibility: "Good",
        imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Whale_Watching_in_Valdes_Peninsula_-_panoramio_-_Ecohotel.jpg",
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
        accessibility: "Excellent",
        // Example with multiple images - arrows will appear to navigate
        imageUrls: [
            "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1564979045531-fa386a275b27?w=600&h=400&fit=crop",
            "https://images.unsplash.com/photo-1568430462989-44163eb1752f?w=600&h=400&fit=crop"
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
        accessibility: "Excellent",
        imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Dana_Point_Whale_Watch_Charter_Boat_4.jpg",
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
        accessibility: "Good",
        imageUrl: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop",
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
        accessibility: "Excellent",
        imageUrl: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop",
        industrySize: "6-8 operators",
        annualVisitors: 150000,
        monthlyDensity: [2, 2, 2, 2, 3, 3, 3, 3, 3, 2, 2, 2],
        speciesMonthly: {"Humpback whale": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], "Orca": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], "Minke whale": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]}
    },
    {
        name: "Stellwagen Bank",
        location: "USA",
        coordinates: [-70.3333, 42.4167],
        entertainment: 86,
        visibility: 73,
        species: ["Humpback whale", "Fin whale", "Minke whale", "Right whale"],
        bestMonths: [4, 5, 6, 7, 8, 9, 10],
        specialNotes: "National Marine Sanctuary; productive feeding grounds; historic whaling heritage",
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
        accessibility: "Good",
        imageUrl: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop",
        industrySize: "4-6 operators",
        annualVisitors: 20000,
        monthlyDensity: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        speciesMonthly: { "Sperm whale": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], "Pilot whale": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], "Beaked whale": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],"Humpback whale": [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1]}
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
        accessibility: "Excellent",
        imageUrl: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop",
        industrySize: "6-8 operators",
        annualVisitors: 100000,
        monthlyDensity: [2, 2, 2, 2, 1, 1, 1, 1, 1, 2, 2, 2],
        speciesMonthly: {"Orca": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], "Bryde's whale": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]}
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
        accessibility: "Moderate",
        imageUrl: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop",
        industrySize: "Small local operators",
        annualVisitors: 15000,
        monthlyDensity: [0, 0, 0, 0, 0, 0, 2, 3, 3, 1, 0, 0],
        speciesMonthly: {"Humpback whale": [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0], "Sperm whale": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], "Bryde's whale": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]}
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
        accessibility: "Moderate",
        imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Ballenas_en_peninsula_valdes.jpg",
        industrySize: "Limited access",
        annualVisitors: 30000,
        monthlyDensity: [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0],
        speciesMonthly: {"Orca": [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0]}
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
        accessibility: "Moderate",
        imageUrl: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop",
        industrySize: "Limited permits",
        annualVisitors: 40000,
        monthlyDensity: [0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 1, 0],
        speciesMonthly: {"Blue whale": [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0], "Sei whale": [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0], "Bryde's whale": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]}
    }
];

// const SPECIES_SEASONS_BY_LOCATION = {
//   "Juneau": {
//     "Humpback whale": "Apr-Oct",
//     "Orca": "May-Sep",
//     "Gray whale": "Apr-Jun",
//     "Minke whale": "May-Sep"
//   },
//   "San Ignacio Lagoon": {
//     "Humpback whale": "Dec-Mar",
//     "Blue whale": "Feb-Apr",
//     "Gray whale": "Dec-Mar",
//     "Fin whale": "Year-round"
//   },
//   "Húsavík": {
//     "Humpback whale": "Apr-Oct",
//     "Blue whale": "May-Sep",
//     "Orca": "May-Sep",
//     "Sperm whale": "May-Sep",
//     "Fin whale": "May-Sep"
//   },
//   "Puerto Madryn": {
//     "Orca": "Sep-Nov",
//     "Humpback whale": "Jul-Nov",
//     "Southern right whale": "Jun-Dec"
//   },
//   "Península Valdés": {
//     "Orca": "Sep-Nov",
//     "Humpback whale": "Jul-Dec",
//     "Southern right whale": "Jul-Dec"
//   },
//   "Monterey Bay": {
//     "Blue whale": "May-Nov",
//     "Humpback whale": "Apr-Dec",
//     "Orca": "Year-round",
//     "Gray whale": "Dec-May",
//     "Fin whale": "Year-round"
//   },
//   "Dana Point": {
//     "Blue whale": "May-Nov",
//     "Humpback whale": "Year-round",
//     "Orca": "Year-round",
//     "Gray whale": "Dec-Apr",
//     "Fin whale": "Year-round"
//   },
//   "Vancouver Island": {
//     "Orca": "May-Oct",
//     "Humpback whale": "May-Oct",
//     "Gray whale": "Mar-May",
//     "Minke whale": "May-Oct"
//   },
//   "Tadoussac": {
//     "Blue whale": "Jun-Sep",
//     "Humpback whale": "Jun-Oct",
//     "Beluga whale": "May-Oct",
//     "Fin whale": "May-Oct",
//     "Minke whale": "May-Oct"
//   },
//   "San Diego": {
//     "Blue whale": "May-Sep",
//     "Humpback whale": "Year-round",
//     "Orca": "Year-round",
//     "Gray whale": "Dec-Apr",
//     "Fin whale": "Year-round"
//   },
//   "San Juan Islands": {
//     "Orca": "May-Sep",
//     "Humpback whale": "May-Sep",
//     "Gray whale": "Mar-May",
//     "Minke whale": "May-Sep"
//   },
//   "Victoria": {
//     "Orca": "May-Oct",
//     "Humpback whale": "Apr-Oct",
//     "Gray whale": "Mar-May",
//     "Minke whale": "May-Oct"
//   },
//   "Kaikōura": {
//     "Humpback whale": "Jun-Aug",
//     "Orca": "Dec-Mar",
//     "Sperm whale": "Year-round",
//     "Southern right whale": "Jun-Aug"
//   },
//   "Cabo San Lucas": {
//     "Blue whale": "Year-round",
//     "Humpback whale": "Dec-Apr",
//     "Gray whale": "Dec-Apr",
//     "Sperm whale": "Year-round",
//     "Fin whale": "Year-round"
//   },
//   "Seward": {
//     "Humpback whale": "Apr-Oct",
//     "Orca": "May-Sep",
//     "Gray whale": "Apr-Jun",
//     "Minke whale": "May-Sep"
//   },
//   "Ushuaia": {
//     "Humpback whale": "Nov-Mar",
//     "Orca": "Nov-Mar",
//     "Blue whale": "Nov-Mar",
//     "Fin whale": "Nov-Mar",
//     "Minke whale": "Nov-Mar"
//   },
//   "Tofino": {
//     "Humpback whale": "May-Oct",
//     "Orca": "May-Sep",
//     "Gray whale": "Mar-Oct",
//     "Minke whale": "May-Sep"
//   },
//   "Samaná Bay": {
//     "Humpback whale": "Jan-Mar"
//   },
//   "Reykjavík": {
//     "Humpback whale": "Year-round",
//     "Orca": "Occasional",
//     "Minke whale": "Year-round"
//   },
//   "Stellwagen Bank": {
//     "Humpback whale": "Apr-Oct",
//     "North Atlantic right whale": "Apr-Oct",
//     "Fin whale": "Apr-Oct",
//     "Minke whale": "Apr-Oct"
//   },
//   "Akureyri": {
//     "Humpback whale": "Apr-Oct",
//     "Blue whale": "Jun-Aug",
//     "Fin whale": "Jun-Aug",
//     "Minke whale": "Apr-Oct"
//   },
//   "Mirissa": {
//     "Blue whale": "Nov-May",
//     "Humpback whale": "Nov-May",
//     "Sperm whale": "Nov-May",
//     "Bryde's whale": "Nov-May"
//   },
//   "Lofoten Islands": {
//     "Orca": "Nov-Feb",
//     "Humpback whale": "Nov-Feb"
//   },
//   "Maui": {
//     "Humpback whale": "Dec-May",
//     "Sperm whale": "Occasional",
//     "Pilot whale": "Occasional"
//   },
//   "Tonga (Vava'u)": {
//     "Humpback whale": "Jul-Oct"
//   },
//   "Hervey Bay": {
//     "Humpback whale": "Jul-Oct"
//   },
//   "Hermanus": {
//     "Humpback whale": "Jun-Dec",
//     "Southern right whale": "Jun-Nov",
//     "Bryde's whale": "Year-round"
//   },
//   "Tromsø": {
//     "Orca": "Oct-Jan",
//     "Humpback whale": "Oct-Jan",
//     "Sperm whale": "Jun-Aug",
//     "Pilot whale": "Jun-Aug",
//     "Minke whale": "Jun-Aug"
//   },
//   "Andenes": {
//     "Humpback whale": "May-Sep",
//     "Orca": "Nov-Jan",
//     "Sperm whale": "May-Sep",
//     "Pilot whale": "May-Sep",
//     "Minke whale": "May-Sep"
//   },
//   "Bay of Fundy": {
//     "Humpback whale": "Jun-Oct",
//     "North Atlantic right whale": "Jun-Oct",
//     "Fin whale": "Jun-Oct",
//     "Minke whale": "Jun-Oct"
//   },
//   "Azores": {
//     "Blue whale": "Mar-Jul",
//     "Sperm whale": "Year-round",
//     "Fin whale": "Mar-Jul",
//     "Sei whale": "Mar-Jul",
//     "Pilot whale": "Year-round"
//   },
//   "Oahu": {
//     "Humpback whale": "Dec-May",
//     "Sperm whale": "Occasional",
//     "Pilot whale": "Occasional"
//   },
//   "Churchill": {
//     "Beluga whale": "Jun-Sep"
//   },
//   "Dominica": {
//     "Humpback whale": "Dec-Apr",
//     "Sperm whale": "Year-round",
//     "Pilot whale": "Year-round",
//     "Beaked whale": "Year-round"
//   },
//   "Hauraki Gulf": {
//     "Orca": "Year-round",
//     "Bryde's whale": "Year-round"
//   },
//   "Nuquí/Bahía Solano": {
//     "Humpback whale": "Jul-Oct",
//     "Sperm whale": "Year-round",
//     "Bryde's whale": "Year-round"
//   },
//   "Punta Norte": {
//     "Orca": "Sep-Nov"
//   },
//   "Galápagos (Bolívar Channel)": {
//     "Blue whale": "Jun-Nov",
//     "Sei whale": "Jun-Nov",
//     "Bryde's whale": "Year-round"
//   }
// };

// const MONTH_ABBR_TO_INDEX = {
//   Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
//   Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11
// };

// function parseSeasonStringToArray(seasonStr) {
//   const arr = new Array(12).fill(0);
//   if (!seasonStr) return arr;

//   const s = seasonStr.trim().toLowerCase();

//   // Year-round and "Occasional" → treat as presence all year
//   if (s.includes("year-round") || s.includes("year round") || s.includes("yearround")) {
//     return arr.fill(1);
//   }
//   if (s.includes("occasional")) {
//     return arr.fill(1);
//   }

//   // Simple range e.g. "Apr-Oct", "Dec-Mar"
//   const parts = seasonStr.split("-");
//   if (parts.length === 2) {
//     const start = parts[0].trim().slice(0, 3);
//     const end = parts[1].trim().slice(0, 3);
//     const startIdx = MONTH_ABBR_TO_INDEX[start] ?? null;
//     const endIdx = MONTH_ABBR_TO_INDEX[end] ?? null;
//     if (startIdx === null || endIdx === null) return arr;

//     if (startIdx <= endIdx) {
//       for (let i = startIdx; i <= endIdx; i++) arr[i] = 1;
//     } else {
//       for (let i = startIdx; i < 12; i++) arr[i] = 1;
//       for (let i = 0; i <= endIdx; i++) arr[i] = 1;
//     }
//     return arr;
//   }

//   // Fallback: single month abbreviation
//   const single = seasonStr.trim().slice(0, 3);
//   const idx = MONTH_ABBREV_TO_INDEX[single];
//   if (idx != null) arr[idx] = 1;
//   return arr;
// }

// // Precompute per-location speciesMonthly + counts
// WHALE_WATCHING_LOCATIONS.forEach(loc => {
//   const seasons = SPECIES_SEASONS_BY_LOCATION[loc.name];
//   if (!seasons) return;

//   const speciesMonthly = {};
//   const monthlySpeciesCounts = new Array(12).fill(0);
//   const speciesFirstMonthIndex = {};

//   Object.entries(seasons).forEach(([species, seasonStr]) => {
//     const arr = parseSeasonStringToArray(seasonStr);
//     speciesMonthly[species] = arr;

//     const firstIdx = arr.findIndex(v => v > 0);
//     speciesFirstMonthIndex[species] = firstIdx === -1 ? 99 : firstIdx;

//     arr.forEach((v, mi) => {
//       if (v > 0) monthlySpeciesCounts[mi] += 1;
//     });
//   });

//   loc.speciesMonthly = speciesMonthly;
//   loc.monthlySpeciesCounts = monthlySpeciesCounts;
//   loc.speciesFirstMonthIndex = speciesFirstMonthIndex;
// });


// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = WHALE_WATCHING_LOCATIONS;
}