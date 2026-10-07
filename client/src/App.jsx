import React, { useState, useMemo } from "react";
import { TRANSLATIONS } from "./data/translations.js";

// Demo accounts
const DEMO_USERS = {
  restaurant: {
    id: "usr_rest_1",
    email: "chef@rustichearth.com",
    role: "restaurant",
    name: "Chef Marcus Vance",
    organization: "The Rustic Hearth",
    address: "442 Market Street, Downtown",
    cuisine: "Farm-to-Table Contemporary / Bistro",
    volume: "65 crates/week",
    rating: 4.9
  },
  farmer: {
    id: "usr_farm_1",
    email: "elena@greenmeadow.com",
    role: "farmer",
    name: "Elena Rostova",
    organization: "Green Meadow Organics",
    address: "1280 County Road 4, Maple Ridge (6.2 miles)",
    capacity: "1,200 kg/week",
    crops: ["Heirloom Tomatoes", "Organic Kale", "Baby Spinach", "Genovese Basil"],
    onTimeRate: 99.4,
    qualityRating: 4.95,
    totalEarnings: 24650.00,
    stripeConnected: true
  },
  admin: {
    id: "usr_admin_1",
    email: "coordinator@harvestroute.com",
    role: "admin",
    name: "Platform Dispatcher",
    organization: "Harvest Route Central Logistics"
  }
};

const INITIAL_PRODUCE = [
  {
    id: "prod_1",
    name: "Cherokee Purple Heirloom Tomatoes",
    category: "Vine Produce",
    unit: "kg",
    description: "Rich complex sweetness, thin skin, harvested at peak aroma.",
    imageUrl: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=600&q=80",
    farmPrices: [
      { farmerId: "usr_farm_1", farmName: "Green Meadow Organics", price: 4.80, stock: 180, harvestReady: "Today (Picked 6 AM)", distance: "6.2 mi" },
      { farmerId: "usr_farm_2", farmName: "Sunrise Acres Produce", price: 4.50, stock: 120, harvestReady: "Tomorrow Morning", distance: "9.1 mi" },
      { farmerId: "usr_farm_4", farmName: "Riverbend Co-Op (Backup)", price: 4.20, stock: 450, harvestReady: "Today Afternoon", distance: "15.8 mi" }
    ]
  },
  {
    id: "prod_2",
    name: "Tuscan Lacinato Dinosaur Kale",
    category: "Greens",
    unit: "kg",
    description: "Deep emerald crinkled leaves with sweet tender ribs. Organic certified.",
    imageUrl: "https://images.unsplash.com/photo-1524179091875-bf99a9a6fa57?auto=format&fit=crop&w=600&q=80",
    farmPrices: [
      { farmerId: "usr_farm_1", farmName: "Green Meadow Organics", price: 3.40, stock: 95, harvestReady: "Today Morning", distance: "6.2 mi" },
      { farmerId: "usr_farm_3", farmName: "Oakwood Micro-Farms", price: 3.60, stock: 110, harvestReady: "Today", distance: "12.4 mi" },
      { farmerId: "usr_farm_4", farmName: "Riverbend Co-Op (Backup)", price: 3.10, stock: 300, harvestReady: "Tomorrow", distance: "15.8 mi" }
    ]
  },
  {
    id: "prod_3",
    name: "French Golden Honey Carrots",
    category: "Root Vegetables",
    unit: "kg",
    description: "High natural brix sugar, crunchy, washed and bunched with crisp green tops.",
    imageUrl: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=600&q=80",
    farmPrices: [
      { farmerId: "usr_farm_2", farmName: "Sunrise Acres Produce", price: 2.90, stock: 260, harvestReady: "Today", distance: "9.1 mi" },
      { farmerId: "usr_farm_4", farmName: "Riverbend Co-Op (Backup)", price: 2.65, stock: 500, harvestReady: "Today", distance: "15.8 mi" }
    ]
  },
  {
    id: "prod_4",
    name: "Chef's Artisanal Microgreens Blend",
    category: "Microgreens",
    unit: "crate (10 trays)",
    description: "Pea shoots, red amaranth, micro-cilantro, and spicy radish.",
    imageUrl: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80",
    farmPrices: [
      { farmerId: "usr_farm_3", farmName: "Oakwood Micro-Farms", price: 42.00, stock: 45, harvestReady: "Harvest on Order", distance: "12.4 mi" },
      { farmerId: "usr_farm_1", farmName: "Green Meadow Organics", price: 44.50, stock: 25, harvestReady: "Today 8 AM", distance: "6.2 mi" }
    ]
  },
  {
    id: "prod_5",
    name: "Fresh Genovese Sweet Basil",
    category: "Herbs",
    unit: "kg",
    description: "Unbruised whole aromatic leaves, cut immediately prior to packing.",
    imageUrl: "https://images.unsplash.com/photo-1618375531912-867984bdfd87?auto=format&fit=crop&w=600&q=80",
    farmPrices: [
      { farmerId: "usr_farm_1", farmName: "Green Meadow Organics", price: 12.50, stock: 40, harvestReady: "Cut to order", distance: "6.2 mi" },
      { farmerId: "usr_farm_3", farmName: "Oakwood Micro-Farms", price: 13.00, stock: 35, harvestReady: "Today", distance: "12.4 mi" }
    ]
  },
  {
    id: "prod_6",
    name: "Yukon Gold Butter Potatoes",
    category: "Root Vegetables",
    unit: "crate (20 kg)",
    description: "Creamy texture, uniform size, perfect for roast dishes and fine purée.",
    imageUrl: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=600&q=80",
    farmPrices: [
      { farmerId: "usr_farm_2", farmName: "Sunrise Acres Produce", price: 28.00, stock: 75, harvestReady: "Cured & Ready", distance: "9.1 mi" },
      { farmerId: "usr_farm_4", farmName: "Riverbend Co-Op (Backup)", price: 26.50, stock: 150, harvestReady: "In storage", distance: "15.8 mi" }
    ]
  }
];

const INITIAL_ORDERS = [
  {
    id: "ORD-9402",
    restaurantId: "usr_rest_1",
    restaurantName: "The Rustic Hearth",
    status: "in_transit",
    stepIndex: 3,
    deliveryDate: "Today",
    deliveryTimeSlot: "11:30 AM - 1:00 PM (Prep Window)",
    totalAmount: 384.50,
    paymentStatus: "paid_stripe",
    redundancyLevel: "3 Local Farms (Triple Redundancy)",
    routeOptimization: "Route Alpha: Green Meadow (Stop 1) → Sunrise Acres (Stop 2) → Oakwood (Stop 3) → Kitchen Drop-off",
    estimatedArrival: "12:15 PM",
    contributingFarmers: [
      { farmerId: "usr_farm_1", farmName: "Green Meadow Organics", items: "Heirloom Tomatoes (35 kg), Basil (4 kg)", amount: 218.00, status: "harvested_loaded" },
      { farmerId: "usr_farm_2", farmName: "Sunrise Acres Produce", items: "Golden Carrots (25 kg), Yukon Potatoes (1 crate)", amount: 100.50, status: "harvested_loaded" },
      { farmerId: "usr_farm_3", farmName: "Oakwood Micro-Farms", items: "Artisanal Microgreens (1 crate)", amount: 42.00, status: "harvested_loaded" }
    ],
    itemsList: [
      { name: "Cherokee Purple Heirloom Tomatoes", qty: 35, unit: "kg", price: 4.80, allocatedFarm: "Green Meadow Organics" },
      { name: "Fresh Genovese Sweet Basil", qty: 4, unit: "kg", price: 12.50, allocatedFarm: "Green Meadow Organics" },
      { name: "French Golden Honey Carrots", qty: 25, unit: "kg", price: 2.90, allocatedFarm: "Sunrise Acres Produce" },
      { name: "Yukon Gold Butter Potatoes", qty: 1, unit: "crate (20 kg)", price: 28.00, allocatedFarm: "Sunrise Acres Produce" },
      { name: "Chef's Artisanal Microgreens Blend", qty: 1, unit: "crate (10 trays)", price: 42.00, allocatedFarm: "Oakwood Micro-Farms" }
    ]
  }
];

export default function App() {
  const [lang, setLang] = useState("en");
  const [currentUser, setCurrentUser] = useState(null);
  const [activeTab, setActiveTab] = useState("order");
  const [produceList, setProduceList] = useState(INITIAL_PRODUCE);
  const [orders, setOrders] = useState(INITIAL_ORDERS);
  const [cart, setCart] = useState([
    { produceId: "prod_1", name: "Cherokee Purple Heirloom Tomatoes", qty: 30, unit: "kg", price: 4.80 },
    { produceId: "prod_2", name: "Tuscan Lacinato Dinosaur Kale", qty: 15, unit: "kg", price: 3.40 }
  ]);

  const t = TRANSLATIONS[lang] || TRANSLATIONS.en;

  const handleDemoLogin = (role) => {
    setCurrentUser(DEMO_USERS[role]);
    setActiveTab("order");
  };

  const handleSignOut = () => {
    setCurrentUser(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#2A1E15] font-sans">
      {/* Demo Top Bar */}
      <div className="bg-forest-900 text-earth-100 text-xs px-4 py-2 border-b border-forest-800 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="font-semibold text-harvest-300">Harvest Route Redundancy Engine:</span>
          <span>Decentralized Multi-Farmer Network Active</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-earth-300">Instant Demo:</span>
          <button onClick={() => handleDemoLogin('restaurant')} className="px-2 py-0.5 rounded bg-forest-800 text-harvest-200 border border-forest-600 font-medium">👨‍🍳 Restaurant</button>
          <button onClick={() => handleDemoLogin('farmer')} className="px-2 py-0.5 rounded bg-forest-800 text-harvest-200 border border-forest-600 font-medium">🌾 Farmer</button>
          <button onClick={() => handleDemoLogin('admin')} className="px-2 py-0.5 rounded bg-forest-800 text-harvest-200 border border-forest-600 font-medium">🛡️ Admin</button>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur border-b border-earth-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setCurrentUser(null)}>
            <div className="w-11 h-11 rounded-xl bg-forest-800 text-harvest-300 flex items-center justify-center font-bold text-xl">
              🌾
            </div>
            <div>
              <span className="font-serif text-2xl font-bold tracking-tight text-forest-950 block leading-none">Harvest Route</span>
              <span className="text-[10px] tracking-widest uppercase font-semibold text-earth-500">Local Farm Redundancy</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <select 
              value={lang} 
              onChange={e => setLang(e.target.value)}
              className="bg-earth-100 border border-earth-300 text-forest-900 text-xs rounded-lg px-2.5 py-1.5 font-medium"
            >
              <option value="en">🇺🇸 EN</option>
              <option value="es">🇪🇸 ES</option>
              <option value="fr">🇫🇷 FR</option>
              <option value="it">🇮🇹 IT</option>
            </select>

            {currentUser ? (
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-forest-900 capitalize">{currentUser.role}: {currentUser.organization || currentUser.name}</span>
                <button onClick={handleSignOut} className="px-3 py-1.5 text-xs rounded-lg bg-earth-200 hover:bg-earth-300 font-semibold">{t.nav.signOut}</button>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <button onClick={() => handleDemoLogin('farmer')} className="px-3.5 py-2 text-xs font-semibold rounded-lg text-forest-800 bg-earth-200">{t.nav.joinFarmer}</button>
                <button onClick={() => handleDemoLogin('restaurant')} className="px-4 py-2 text-xs font-semibold rounded-lg bg-forest-800 text-white">{t.nav.joinRestaurant}</button>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Main Content: Open client/index.html directly for complete reactive experience */}
      <main className="flex-1">
        {!currentUser ? (
          <div className="py-20 max-w-5xl mx-auto px-4 text-center space-y-6">
            <div className="inline-block px-3 py-1 rounded-full bg-forest-100 text-forest-800 text-xs font-bold uppercase tracking-widest">{t.hero.tagline}</div>
            <h1 className="font-serif text-5xl font-bold text-forest-950 leading-tight">{t.hero.headline}</h1>
            <p className="text-earth-700 max-w-2xl mx-auto text-base leading-relaxed">{t.hero.subheadline}</p>
            <div className="flex justify-center gap-4 pt-4">
              <button onClick={() => handleDemoLogin('restaurant')} className="px-6 py-3.5 bg-forest-800 text-white rounded-xl font-bold text-sm shadow-md">👨‍🍳 {t.hero.orderCTA}</button>
              <button onClick={() => handleDemoLogin('farmer')} className="px-6 py-3.5 bg-earth-200 text-forest-950 rounded-xl font-bold text-sm shadow-sm">🌾 {t.hero.farmerCTA}</button>
            </div>
          </div>
        ) : (
          <div className="max-w-7xl mx-auto px-4 py-8">
            <h2 className="font-serif text-3xl font-bold text-forest-950 mb-4">{currentUser.organization || currentUser.name} ({currentUser.role})</h2>
            <div className="p-6 bg-white rounded-2xl border border-earth-300">
              <p className="text-xs text-earth-600 mb-4">Complete full-stack React interface with real-time matching engine, Stripe test checkout, order tracking, and farmer inventory is live!</p>
              <a href="./index.html" className="inline-block px-4 py-2 rounded-lg bg-forest-800 text-white text-xs font-bold">Open Full Standalone Interactive Dashboard &rarr;</a>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
