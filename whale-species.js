// Whale Species Database
// Comprehensive information about whale species for the gallery and detail pages

const WHALE_SPECIES = [
    {
        id: 'blue-whale',
        commonName: 'Blue Whale',
        scientificName: 'Balaenoptera musculus',
        category: 'Baleen Whale',
        hasMapData: true,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Anim1754_-_Flickr_-_NOAA_Photo_Library.jpg/1280px-Anim1754_-_Flickr_-_NOAA_Photo_Library.jpg',
        heroImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Anim1754_-_Flickr_-_NOAA_Photo_Library.jpg/1920px-Anim1754_-_Flickr_-_NOAA_Photo_Library.jpg',
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
        ]
    },
    {
        id: 'humpback-whale',
        commonName: 'Humpback Whale',
        scientificName: 'Megaptera novaeangliae',
        category: 'Baleen Whale',
        hasMapData: true,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Humpback_Whale_underwater_shot.jpg/1280px-Humpback_Whale_underwater_shot.jpg',
        heroImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Humpback_Whale_underwater_shot.jpg/1920px-Humpback_Whale_underwater_shot.jpg',
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
        ]
    },
    {
        id: 'sperm-whale',
        commonName: 'Sperm Whale',
        scientificName: 'Physeter macrocephalus',
        category: 'Toothed Whale',
        hasMapData: true,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Sperm_whale_pod.jpg/1280px-Sperm_whale_pod.jpg',
        heroImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Sperm_whale_pod.jpg/1920px-Sperm_whale_pod.jpg',
        color: '#d7263d',
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
        ]
    },
    {
        id: 'orca',
        commonName: 'Orca (Killer Whale)',
        scientificName: 'Orcinus orca',
        category: 'Toothed Whale',
        hasMapData: false,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Killerwhales_jumping.jpg/1280px-Killerwhales_jumping.jpg',
        heroImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Killerwhales_jumping.jpg/1920px-Killerwhales_jumping.jpg',
        color: '#1a1a2e',
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
        ]
    },
    {
        id: 'gray-whale',
        commonName: 'Gray Whale',
        scientificName: 'Eschrichtius robustus',
        category: 'Baleen Whale',
        hasMapData: false,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Ballena_gris_adulta_con_su_ballenato.jpg/1280px-Ballena_gris_adulta_con_su_ballenato.jpg',
        heroImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Ballena_gris_adulta_con_su_ballenato.jpg/1920px-Ballena_gris_adulta_con_su_ballenato.jpg',
        color: '#6c757d',
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
        ]
    },
    {
        id: 'fin-whale',
        commonName: 'Fin Whale',
        scientificName: 'Balaenoptera physalus',
        category: 'Baleen Whale',
        hasMapData: false,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Fin_whale_from_air.jpg/1280px-Fin_whale_from_air.jpg',
        heroImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Fin_whale_from_air.jpg/1920px-Fin_whale_from_air.jpg',
        color: '#495057',
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
        ]
    },
    {
        id: 'beluga-whale',
        commonName: 'Beluga Whale',
        scientificName: 'Delphinapterus leucas',
        category: 'Toothed Whale',
        hasMapData: false,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Belugawal2.JPG/1280px-Belugawal2.JPG',
        heroImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Belugawal2.JPG/1920px-Belugawal2.JPG',
        color: '#f8f9fa',
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
        ]
    },
    {
        id: 'right-whale',
        commonName: 'Southern Right Whale',
        scientificName: 'Eubalaena australis',
        category: 'Baleen Whale',
        hasMapData: false,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Southern_right_whale.jpg/1280px-Southern_right_whale.jpg',
        heroImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Southern_right_whale.jpg/1920px-Southern_right_whale.jpg',
        color: '#343a40',
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
        ]
    },
    {
        id: 'minke-whale',
        commonName: 'Minke Whale',
        scientificName: 'Balaenoptera acutorostrata',
        category: 'Baleen Whale',
        hasMapData: false,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Minke_whale_in_ross_sea.jpg/1280px-Minke_whale_in_ross_sea.jpg',
        heroImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Minke_whale_in_ross_sea.jpg/1920px-Minke_whale_in_ross_sea.jpg',
        color: '#20c997',
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
        ]
    },
    {
        id: 'brydes-whale',
        commonName: 'Bryde\'s Whale',
        scientificName: 'Balaenoptera brydei',
        category: 'Baleen Whale',
        hasMapData: false,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Brydes_whale.jpg/1280px-Brydes_whale.jpg',
        heroImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Brydes_whale.jpg/1920px-Brydes_whale.jpg',
        color: '#fd7e14',
        shortDescription: 'Tropical residents with three distinctive head ridges.',
        fullDescription: `Bryde's whales (pronounced "broo-dus") are medium-sized baleen whales that prefer warmer waters than most other baleen whale species. They are named after Johan Bryde, a Norwegian consul who helped establish the first whaling station in South Africa.

Unlike most baleen whales that migrate to polar waters to feed, Bryde's whales remain in tropical and subtropical waters year-round, following schools of fish. They are distinguished by three parallel ridges on top of their head—other rorquals have only one.

Bryde's whales are known for their unpredictable behavior. They may surface erratically and change direction suddenly while feeding, making them challenging to observe but exciting for whale watchers.`,
        stats: {
            length: 'Up to 55 ft (16.5 m)',
            weight: 'Up to 45 tons',
            lifespan: '50+ years',
            diet: 'Schooling fish, krill',
            population: '90,000-100,000',
            status: 'Least Concern'
        },
        migrationPattern: 'Bryde\'s whales are largely non-migratory, staying in warm tropical and subtropical waters year-round, though they may move locally following prey.',
        bestViewingMonths: [1, 2, 3, 4, 5, 10, 11, 12],
        funFacts: [
            'They have three ridges on their head, unlike other rorquals',
            'Bryde\'s whales rarely show their tail flukes when diving',
            'They are unpredictable surface swimmers',
            'They can eat 1,500 lbs of fish in a single feeding'
        ]
    }
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = WHALE_SPECIES;
}
