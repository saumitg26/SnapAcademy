/**
 * Data Catalog Project - Worldwide Wonders
 * SEA Stage 2
 *
 * Data structure: wonderCatalog is an array of objects.
 * Each object represents one wonder with consistent properties.
 *
 * Features:
 *   1. Era Filter   — filters array using comparison operators on yearBuilt
 *   2. Sort         — reorders array using .sort() with a comparator function
 *   3. Search       — filters array using .filter() + .includes() across multiple fields
 *   4. UNESCO Toggle — filters array to only isUNESCO === true entries
 */

// ============================================================
// DATA — Array of objects. Negative yearBuilt = BCE. 0 = Natural/timeless.
// ============================================================

const wonderCatalog = [
  {
    name: "Great Pyramid of Giza",
    location: "Egypt",
    continent: "Africa",
    type: "Man-made",
    yearBuilt: -2560,
    visitorCount: 14700000,
    isUNESCO: true,
    description: "The oldest and largest of the three Giza pyramids, built as a tomb for Pharaoh Khufu. The only surviving original Wonder of the Ancient World.",
    quickFact: "Built with roughly 2.3 million stone blocks, each averaging 2.5 to 15 tonnes.",
    emoji: "🔺"
  },
  {
    name: "Petra",
    location: "Jordan",
    continent: "Asia",
    type: "Ruins",
    yearBuilt: -312,
    visitorCount: 1100000,
    isUNESCO: true,
    description: "Known as the Rose City, Petra was carved directly into vibrant red sandstone cliffs by the Nabataean civilization.",
    quickFact: "Only 15% of the ancient city has been excavated — 85% still lies underground.",
    emoji: "🏛️"
  },
  {
    name: "Great Barrier Reef",
    location: "Australia",
    continent: "Oceania",
    type: "Natural",
    yearBuilt: 0,
    visitorCount: 2000000,
    isUNESCO: true,
    description: "The world's largest coral reef system, stretching over 2,300 km and home to thousands of marine species.",
    quickFact: "Visible from outer space — the only living thing that can be seen from the Moon.",
    emoji: "🐠"
  },
  {
    name: "Machu Picchu",
    location: "Peru",
    continent: "South America",
    type: "Ruins",
    yearBuilt: 1450,
    visitorCount: 1500000,
    isUNESCO: true,
    description: "An Incan citadel perched 2,430 metres above sea level in the Andes, built during the height of the Inca Empire.",
    quickFact: "Stones fit so perfectly a credit card cannot slide between them — built with no mortar.",
    emoji: "🏔️"
  },
  {
    name: "Colosseum",
    location: "Italy",
    continent: "Europe",
    type: "Ruins",
    yearBuilt: 70,
    visitorCount: 7700000,
    isUNESCO: true,
    description: "Rome's iconic amphitheatre could hold up to 80,000 spectators for gladiatorial contests and public spectacles.",
    quickFact: "It had a retractable canvas awning called the velarium to shade spectators from the sun.",
    emoji: "🏟️"
  },
  {
    name: "Angkor Wat",
    location: "Cambodia",
    continent: "Asia",
    type: "Man-made",
    yearBuilt: 1113,
    visitorCount: 2600000,
    isUNESCO: true,
    description: "The largest religious monument ever constructed, originally built as a Hindu temple before converting to Buddhism.",
    quickFact: "Its bas-reliefs stretch nearly half a kilometre — the longest continuous bas-relief in the world.",
    emoji: "⛩️"
  },
  {
    name: "Taj Mahal",
    location: "India",
    continent: "Asia",
    type: "Man-made",
    yearBuilt: 1632,
    visitorCount: 8000000,
    isUNESCO: true,
    description: "A masterpiece of Mughal architecture, built by Emperor Shah Jahan as a mausoleum for his beloved wife Mumtaz Mahal.",
    quickFact: "The Taj Mahal appears to change color through the day — pinkish at dawn, white at noon, golden at sunset.",
    emoji: "🕌"
  },
  {
    name: "Victoria Falls",
    location: "Zambia / Zimbabwe",
    continent: "Africa",
    type: "Natural",
    yearBuilt: 0,
    visitorCount: 1500000,
    isUNESCO: true,
    description: "The largest curtain of falling water on Earth — over 1.7 km wide and 108 m tall. Known locally as The Smoke That Thunders.",
    quickFact: "The spray rises up to 400 m into the air and can be seen from 50 km away.",
    emoji: "💧"
  },
  {
    name: "Chichen Itza",
    location: "Mexico",
    continent: "North America",
    type: "Ruins",
    yearBuilt: 514,
    visitorCount: 2700000,
    isUNESCO: true,
    description: "A pre-Columbian Mayan city featuring the famous El Castillo pyramid, an astronomical calendar carved in stone.",
    quickFact: "On spring and autumn equinoxes, sunlight creates a shadow serpent slithering down the pyramid steps.",
    emoji: "🌞"
  },
  {
    name: "Great Wall of China",
    location: "China",
    continent: "Asia",
    type: "Man-made",
    yearBuilt: -221,
    visitorCount: 10000000,
    isUNESCO: true,
    description: "A series of fortifications stretching over 21,000 km, built across centuries to protect Chinese states from invasion.",
    quickFact: "Sticky rice flour was used as mortar in some sections — and it proved incredibly durable.",
    emoji: "🏯"
  },
  {
    name: "Stonehenge",
    location: "England",
    continent: "Europe",
    type: "Man-made",
    yearBuilt: -3000,
    visitorCount: 1500000,
    isUNESCO: true,
    description: "A prehistoric ring of standing stones on Salisbury Plain, precisely aligned with the solstices.",
    quickFact: "The bluestones were transported from Wales, nearly 250 km away — no one is sure exactly how.",
    emoji: "🗿"
  },
  {
    name: "Göbekli Tepe",
    location: "Turkey",
    continent: "Asia",
    type: "Ruins",
    yearBuilt: -9600,
    visitorCount: 500000,
    isUNESCO: true,
    description: "The world's oldest known temple complex, predating Stonehenge by 6,000 years and built by hunter-gatherers.",
    quickFact: "Its discovery completely rewrote our understanding of when humans first organized into complex societies.",
    emoji: "🏺"
  },
  {
    name: "Hagia Sophia",
    location: "Turkey",
    continent: "Asia",
    type: "Man-made",
    yearBuilt: 537,
    visitorCount: 3700000,
    isUNESCO: true,
    description: "A stunning feat of Byzantine engineering in Istanbul, serving as a cathedral, mosque, museum, and mosque again.",
    quickFact: "Its massive dome appears to float — supported by pendentives, a major engineering breakthrough of its era.",
    emoji: "🕍"
  },
  {
    name: "Pamukkale",
    location: "Turkey",
    continent: "Asia",
    type: "Natural",
    yearBuilt: 0,
    visitorCount: 2000000,
    isUNESCO: true,
    description: "Dazzling white calcium terraces and thermal pools cascading down a hillside, used as a spa since antiquity.",
    quickFact: "The ancient city of Hierapolis sits at the top — its hot springs were believed to have healing powers.",
    emoji: "🌊"
  },
  {
    name: "Alhambra",
    location: "Spain",
    continent: "Europe",
    type: "Man-made",
    yearBuilt: 1238,
    visitorCount: 3000000,
    isUNESCO: true,
    description: "A breathtaking Moorish palace and fortress complex in Granada, showcasing the pinnacle of Islamic architecture in Europe.",
    quickFact: "Its name comes from Arabic meaning The Red One, after the reddish hue of its walls at dusk.",
    emoji: "🏰"
  },
  {
    name: "Mount Everest",
    location: "Nepal / Tibet",
    continent: "Asia",
    type: "Natural",
    yearBuilt: 0,
    visitorCount: 500000,
    isUNESCO: false,
    description: "Earth's highest mountain at 8,849 m, standing on the border of Nepal and Tibet in the Himalayas.",
    quickFact: "Everest grows about 4 mm taller every year due to tectonic uplift from the Indian subcontinent.",
    emoji: "⛰️"
  },
  {
    name: "Amazon Rainforest",
    location: "Brazil & 8 countries",
    continent: "South America",
    type: "Natural",
    yearBuilt: 0,
    visitorCount: 3000000,
    isUNESCO: false,
    description: "The world's largest tropical rainforest, covering over 5.5 million km² and home to 10% of all species on Earth.",
    quickFact: "The Amazon influences rainfall patterns as far away as the central United States.",
    emoji: "🌿"
  },
  {
    name: "Easter Island Moai",
    location: "Chile",
    continent: "Oceania",
    type: "Man-made",
    yearBuilt: 1250,
    visitorCount: 100000,
    isUNESCO: true,
    description: "Nearly 1,000 monolithic statues carved by the Rapa Nui people, standing on a remote Pacific island.",
    quickFact: "The largest moai stands nearly 10 m tall and weighs 82 tonnes — and was never successfully transported.",
    emoji: "🗽"
  },
  {
    name: "Northern Lights",
    location: "Arctic Circle",
    continent: "Europe",
    type: "Natural",
    yearBuilt: 0,
    visitorCount: 2500000,
    isUNESCO: false,
    description: "A natural light display caused by solar particles interacting with Earth's atmosphere, best seen in polar regions.",
    quickFact: "The same phenomenon in the Southern Hemisphere is called Aurora Australis.",
    emoji: "🌌"
  },
  {
    name: "Waitomo Glowworm Caves",
    location: "New Zealand",
    continent: "Oceania",
    type: "Natural",
    yearBuilt: 0,
    visitorCount: 500000,
    isUNESCO: false,
    description: "Limestone caves lit by thousands of bioluminescent glowworms, creating a living galaxy underground.",
    quickFact: "These glowworms are found only in New Zealand — they use their glow to lure prey into sticky threads.",
    emoji: "✨"
  }
];

// ============================================================
// STATE — tracks active filters/sort
// ============================================================

let currentEra     = "all";
let currentSort    = "name";
let currentSearch  = "";
let unescoOnly     = false;

// ============================================================
// HELPER FUNCTIONS
// ============================================================

// Returns the era category for a wonder based on yearBuilt
function getEra(yearBuilt) {
  if (yearBuilt === 0)   return "natural";
  if (yearBuilt < 1000)  return "ancient";   // negatives (BCE) are always < 1000
  if (yearBuilt < 1800)  return "medieval";
  return "modern";
}

// Converts a raw yearBuilt number into a readable label
function formatYear(yearBuilt) {
  if (yearBuilt === 0)  return "Timeless";
  if (yearBuilt < 0)    return Math.abs(yearBuilt) + " BCE";
  return yearBuilt + " AD";
}

// Shortens large visitor numbers (e.g. 1500000 → "1.5M")
function formatVisitors(n) {
  if (n >= 1000000) return (n / 1000000).toFixed(1) + "M";
  if (n >= 1000)    return Math.round(n / 1000) + "K";
  return n.toString();
}

// ============================================================
// FEATURE 1 — ERA FILTER
// Uses .filter() and comparison operators on yearBuilt
// ============================================================

function filterByEra(data) {
  if (currentEra === "all") return data;
  return data.filter(function(wonder) {
    return getEra(wonder.yearBuilt) === currentEra;
  });
}

// ============================================================
// FEATURE 2 — SORT
// Uses .sort() with a comparator function
// ============================================================

function sortWonders(data) {
  var sorted = data.slice(); // copy so original array stays untouched

  if (currentSort === "name") {
    sorted.sort(function(a, b) {
      return a.name.localeCompare(b.name);
    });
  } else if (currentSort === "visitors") {
    sorted.sort(function(a, b) {
      return b.visitorCount - a.visitorCount; // descending: highest first
    });
  } else if (currentSort === "oldest") {
    sorted.sort(function(a, b) {
      return a.yearBuilt - b.yearBuilt; // ascending: most negative (oldest BCE) first
    });
  }

  return sorted;
}

// ============================================================
// FEATURE 3 — SEARCH
// Uses .filter() + .toLowerCase() + .includes() across multiple fields
// ============================================================

function filterBySearch(data) {
  var query = currentSearch.toLowerCase().trim();
  if (!query) return data;

  return data.filter(function(wonder) {
    return (
      wonder.name.toLowerCase().includes(query)        ||
      wonder.location.toLowerCase().includes(query)    ||
      wonder.continent.toLowerCase().includes(query)   ||
      wonder.type.toLowerCase().includes(query)        ||
      wonder.description.toLowerCase().includes(query)
    );
  });
}

// ============================================================
// FEATURE 4 — UNESCO TOGGLE
// Uses .filter() to keep only wonders where isUNESCO === true
// ============================================================

function filterByUNESCO(data) {
  if (!unescoOnly) return data;
  return data.filter(function(wonder) {
    return wonder.isUNESCO === true;
  });
}

// ============================================================
// CARD BUILDER
// Takes one wonder object, returns an HTML string
// ============================================================

function buildCard(wonder) {
  // UNESCO badge only renders if isUNESCO is true
  var unescoHTML = wonder.isUNESCO
    ? '<span class="unesco-badge">🏆 UNESCO</span>'
    : '';

  return (
    '<div class="card era-' + getEra(wonder.yearBuilt) + '">' +
      '<div class="card-emoji">' + wonder.emoji + '</div>' +
      '<div class="card-header">' +
        '<span class="type-tag">' + wonder.type + '</span>' +
        unescoHTML +
      '</div>' +
      '<h2 class="card-title">' + wonder.name + '</h2>' +
      '<p class="card-location">📍 ' + wonder.location + ' &nbsp;·&nbsp; ' + wonder.continent + '</p>' +
      '<p class="card-desc">' + wonder.description + '</p>' +
      '<div class="card-quick-fact">' +
        '<strong>✦ Quick Fact:</strong> ' + wonder.quickFact +
      '</div>' +
      '<div class="card-stats">' +
        '<div class="stat">' +
          '<span class="stat-label">Built / Formed</span>' +
          '<span class="stat-value">' + formatYear(wonder.yearBuilt) + '</span>' +
        '</div>' +
        '<div class="stat">' +
          '<span class="stat-label">Visitors / Year</span>' +
          '<span class="stat-value">' + formatVisitors(wonder.visitorCount) + '</span>' +
        '</div>' +
      '</div>' +
    '</div>'
  );
}

// ============================================================
// RENDER — chains all four operations, then draws the grid
// ============================================================

function renderCards() {
  var results = filterBySearch(wonderCatalog);  // Feature 3
  results     = filterByEra(results);           // Feature 1
  results     = filterByUNESCO(results);        // Feature 4
  results     = sortWonders(results);           // Feature 2

  var container = document.getElementById("cards-container");
  var counter   = document.getElementById("result-count");

  if (results.length === 0) {
    container.innerHTML = '<p class="no-results">No wonders match that search. Try a different filter or keyword!</p>';
  } else {
    container.innerHTML = results.map(buildCard).join("");
  }

  counter.textContent = "Showing " + results.length + " of " + wonderCatalog.length + " wonders";
}

// ============================================================
// EVENT LISTENERS
// ============================================================

// Feature 3: Search — fires on every keystroke
document.getElementById("search-input").addEventListener("input", function(e) {
  currentSearch = e.target.value;
  renderCards();
});

// Feature 1: Era filter buttons
document.querySelectorAll(".era-btn").forEach(function(btn) {
  btn.addEventListener("click", function() {
    document.querySelectorAll(".era-btn").forEach(function(b) { b.classList.remove("active"); });
    btn.classList.add("active");
    currentEra = btn.dataset.era;
    renderCards();
  });
});

// Feature 2: Sort buttons
document.querySelectorAll(".sort-btn").forEach(function(btn) {
  btn.addEventListener("click", function() {
    document.querySelectorAll(".sort-btn").forEach(function(b) { b.classList.remove("active"); });
    btn.classList.add("active");
    currentSort = btn.dataset.sort;
    renderCards();
  });
});

// Feature 4: UNESCO toggle
document.getElementById("unesco-toggle").addEventListener("change", function(e) {
  unescoOnly = e.target.checked;
  renderCards();
});

// ============================================================
// INIT
// ============================================================
renderCards();
