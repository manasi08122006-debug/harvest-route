/**
 * Harvest Route - Seed Data
 * Initial realistic records for local farmers, restaurants, produce, orders, and logistics.
 */

export const INITIAL_DATA = {
  users: [
    {
      id: "usr_rest_1",
      email: "chef@rustichearth.com",
      role: "restaurant",
      name: "Chef Marcus Vance",
      organization: "The Rustic Hearth",
      phone: "+1 (555) 234-8901",
      address: "442 Market Street, Downtown",
      lat: 40.7128,
      lng: -74.0060,
      cuisine: "Farm-to-Table Contemporary / Bistro",
      volume: "60-80 crates/week",
      rating: 4.9
    },
    {
      id: "usr_farm_1",
      email: "elena@greenmeadow.com",
      role: "farmer",
      name: "Elena Rostova",
      organization: "Green Meadow Organics",
      phone: "+1 (555) 872-4310",
      address: "1280 County Road 4, Maple Ridge (6.2 miles)",
      lat: 40.7328,
      lng: -74.0260,
      capacity: "1,200 kg/week",
      crops: ["Heirloom Tomatoes", "Organic Kale", "Baby Spinach", "Genovese Basil", "Sweet Peppers"],
      onTimeRate: 99.4,
      qualityRating: 4.95,
      completedOrders: 184,
      totalEarnings: 24650.00,
      stripeConnected: true
    },
    {
      id: "usr_farm_2",
      email: "sam@sunriseacres.com",
      role: "farmer",
      name: "Samuel O'Connor",
      organization: "Sunrise Acres Produce",
      phone: "+1 (555) 912-7744",
      address: "450 Valley View Hwy, Cedar Glen (9.1 miles)",
      lat: 40.6928,
      lng: -74.0460,
      capacity: "1,800 kg/week",
      crops: ["Golden Carrots", "Yukon Gold Potatoes", "Red Onions", "Romaine Lettuce", "Zucchini"],
      onTimeRate: 97.8,
      qualityRating: 4.82,
      completedOrders: 142,
      totalEarnings: 19820.00,
      stripeConnected: true
    },
    {
      id: "usr_farm_3",
      email: "clara@oakwoodfarms.com",
      role: "farmer",
      name: "Clara Tremblay",
      organization: "Oakwood Micro-Farms",
      phone: "+1 (555) 674-1299",
      address: "88 Ridgecrest Road, Highland (12.4 miles)",
      lat: 40.7528,
      lng: -73.9860,
      capacity: "950 kg/week",
      crops: ["Microgreens Assortment", "Wild Arugula", "Butterhead Lettuce", "Rainbow Chard"],
      onTimeRate: 98.7,
      qualityRating: 4.91,
      completedOrders: 119,
      totalEarnings: 16400.00,
      stripeConnected: true
    },
    {
      id: "usr_farm_4",
      email: "dan@riverbendcoop.com",
      role: "farmer",
      name: "Dan Miller",
      organization: "Riverbend Co-Op (Designated Standby)",
      phone: "+1 (555) 438-9022",
      address: "2100 River Road, Riverdale (15.8 miles)",
      lat: 40.6728,
      lng: -74.0860,
      capacity: "3,500 kg/week",
      crops: ["Heirloom Tomatoes", "Organic Kale", "Carrots", "Potatoes", "Mixed Salad Greens"],
      onTimeRate: 95.2,
      qualityRating: 4.65,
      completedOrders: 98,
      totalEarnings: 12900.00,
      stripeConnected: true
    },
    {
      id: "usr_admin_1",
      email: "admin@harvestroute.com",
      role: "admin",
      name: "Platform Dispatcher",
      organization: "Harvest Route Central Operations",
      phone: "+1 (800) 555-FARM",
      address: "Logistics Hub 1, Terminal Way"
    }
  ],

  produceCatalog: [
    {
      id: "prod_1",
      name: "Cherokee Purple Heirloom Tomatoes",
      category: "Vine Produce",
      unit: "kg",
      description: "Rich, complex sweetness with earthy undertones. Picked at optimal ripeness.",
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
      description: "Deep emerald crinkled leaves with tender stems. Organic pesticide-free.",
      imageUrl: "https://images.unsplash.com/photo-1524179091875-bf99a9a6fa57?auto=format&fit=crop&w=600&q=80",
      farmPrices: [
        { farmerId: "usr_farm_1", farmName: "Green Meadow Organics", price: 3.40, stock: 95, harvestReady: "Today", distance: "6.2 mi" },
        { farmerId: "usr_farm_3", farmName: "Oakwood Micro-Farms", price: 3.60, stock: 110, harvestReady: "Today (Morning Dew)", distance: "12.4 mi" },
        { farmerId: "usr_farm_4", farmName: "Riverbend Co-Op (Backup)", price: 3.10, stock: 300, harvestReady: "Tomorrow", distance: "15.8 mi" }
      ]
    },
    {
      id: "prod_3",
      name: "French Golden Honey Carrots",
      category: "Root Vegetables",
      unit: "kg",
      description: "Tender, high brix sugar content, crisp crunch. Bunched with vibrant tops.",
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
      description: "Pea shoots, red radish, cilantro, and amaranth. Intensely aromatic garnish.",
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
      description: "Unbruised aromatic whole leaves. Perfect for house-made pestos and plating.",
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
      description: "Creamy texture, thin skins, uniform grading for roasting and mash puree.",
      imageUrl: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=600&q=80",
      farmPrices: [
        { farmerId: "usr_farm_2", farmName: "Sunrise Acres Produce", price: 28.00, stock: 75, harvestReady: "Cured & Ready", distance: "9.1 mi" },
        { farmerId: "usr_farm_4", farmName: "Riverbend Co-Op (Backup)", price: 26.50, stock: 150, harvestReady: "In storage", distance: "15.8 mi" }
      ]
    }
  ],

  orders: [
    {
      id: "ORD-9402",
      restaurantId: "usr_rest_1",
      restaurantName: "The Rustic Hearth",
      status: "in_transit", // confirmed -> harvesting -> in_transit -> delivered
      stepIndex: 3, // 1: Confirmed, 2: Harvesting, 3: In Transit, 4: Delivered
      orderDate: "2026-10-07T08:15:00Z",
      deliveryDate: "2026-10-07",
      deliveryTimeSlot: "11:30 AM - 1:00 PM (Lunch Prep Window)",
      deliveryAddress: "442 Market Street, Downtown",
      totalAmount: 384.50,
      paymentStatus: "paid_stripe",
      redundancyLevel: "3 Local Farms (Triple Redundancy)",
      routeOptimization: "Route Alpha: Green Meadow (Stop 1) → Sunrise Acres (Stop 2) → Oakwood (Stop 3) → Kitchen Drop-off",
      estimatedArrival: "12:15 PM",
      isRecurring: false,
      contributingFarmers: [
        {
          farmerId: "usr_farm_1",
          farmName: "Green Meadow Organics",
          items: "Cherokee Heirloom Tomatoes (35 kg), Basil (4 kg)",
          amount: 218.00,
          status: "harvested_loaded",
          harvestTimestamp: "07:30 AM"
        },
        {
          farmerId: "usr_farm_2",
          farmName: "Sunrise Acres Produce",
          items: "Golden Carrots (25 kg), Yukon Potatoes (1 crate)",
          amount: 100.50,
          status: "harvested_loaded",
          harvestTimestamp: "08:10 AM"
        },
        {
          farmerId: "usr_farm_3",
          farmName: "Oakwood Micro-Farms",
          items: "Artisanal Microgreens (1 crate)",
          amount: 42.00,
          status: "harvested_loaded",
          harvestTimestamp: "08:45 AM"
        }
      ],
      itemsList: [
        { name: "Cherokee Purple Heirloom Tomatoes", qty: 35, unit: "kg", price: 4.80, allocatedFarm: "Green Meadow Organics" },
        { name: "Fresh Genovese Sweet Basil", qty: 4, unit: "kg", price: 12.50, allocatedFarm: "Green Meadow Organics" },
        { name: "French Golden Honey Carrots", qty: 25, unit: "kg", price: 2.90, allocatedFarm: "Sunrise Acres Produce" },
        { name: "Yukon Gold Butter Potatoes", qty: 1, unit: "crate (20 kg)", price: 28.00, allocatedFarm: "Sunrise Acres Produce" },
        { name: "Chef's Artisanal Microgreens Blend", qty: 1, unit: "crate (10 trays)", price: 42.00, allocatedFarm: "Oakwood Micro-Farms" }
      ]
    },
    {
      id: "ORD-9388",
      restaurantId: "usr_rest_1",
      restaurantName: "The Rustic Hearth",
      status: "delivered",
      stepIndex: 4,
      orderDate: "2026-10-05T07:00:00Z",
      deliveryDate: "2026-10-05",
      deliveryTimeSlot: "11:00 AM",
      deliveryAddress: "442 Market Street, Downtown",
      totalAmount: 295.00,
      paymentStatus: "paid_stripe",
      redundancyLevel: "2 Local Farms",
      routeOptimization: "Consolidated Eco Van #4 (18.2 miles total)",
      estimatedArrival: "Delivered 11:12 AM",
      isRecurring: true,
      hasReviewed: true,
      contributingFarmers: [
        { farmerId: "usr_farm_1", farmName: "Green Meadow Organics", items: "Lacinato Kale (40 kg)", amount: 136.00, status: "delivered" },
        { farmerId: "usr_farm_2", farmName: "Sunrise Acres Produce", items: "Potatoes & Carrots", amount: 159.00, status: "delivered" }
      ],
      itemsList: [
        { name: "Tuscan Lacinato Dinosaur Kale", qty: 40, unit: "kg", price: 3.40, allocatedFarm: "Green Meadow Organics" },
        { name: "French Golden Honey Carrots", qty: 30, unit: "kg", price: 2.90, allocatedFarm: "Sunrise Acres Produce" },
        { name: "Yukon Gold Butter Potatoes", qty: 2.5, unit: "crate", price: 28.00, allocatedFarm: "Sunrise Acres Produce" }
      ]
    }
  ],

  recurringOrders: [
    {
      id: "REC-101",
      restaurantId: "usr_rest_1",
      title: "Tuesday & Friday Morning Pantry Staples",
      frequency: "weekly",
      deliveryDays: ["Tuesday", "Friday"],
      timeSlot: "10:30 AM",
      items: [
        { produceId: "prod_1", name: "Cherokee Purple Heirloom Tomatoes", qty: 30, unit: "kg" },
        { produceId: "prod_2", name: "Tuscan Lacinato Dinosaur Kale", qty: 20, unit: "kg" },
        { produceId: "prod_5", name: "Fresh Genovese Sweet Basil", qty: 3, unit: "kg" }
      ],
      active: true,
      nextFulfillment: "2026-10-09"
    }
  ],

  reviews: [
    {
      id: "rev_1",
      orderId: "ORD-9388",
      restaurantName: "The Rustic Hearth",
      farmerId: "usr_farm_1",
      farmName: "Green Meadow Organics",
      rating: 5,
      comment: "Incredible dew-fresh kale! Zero leaf damage, stems tender and crisp. Our braised kale special sold out in 2 hours.",
      date: "2026-10-05"
    },
    {
      id: "rev_2",
      orderId: "ORD-9388",
      restaurantName: "The Rustic Hearth",
      farmerId: "usr_farm_2",
      farmName: "Sunrise Acres Produce",
      rating: 5,
      comment: "Uniformly graded Yukon golds and super sweet carrots. Pristine root quality.",
      date: "2026-10-05"
    }
  ],

  notifications: [
    {
      id: "notif_1",
      userId: "usr_rest_1",
      role: "restaurant",
      title: "Van Out For Delivery",
      message: "Order #ORD-9402 consolidated van has departed Oakwood Micro-Farms. ETA: 12:15 PM.",
      timestamp: "10 mins ago",
      type: "transit",
      channel: "SMS & In-App",
      read: false
    },
    {
      id: "notif_2",
      userId: "usr_farm_1",
      role: "farmer",
      title: "New Matched Harvest Request",
      message: "Order #ORD-9402 allocated 35 kg Heirloom Tomatoes & 4 kg Basil. Confirmed & scheduled.",
      timestamp: "1 hour ago",
      type: "order_assigned",
      channel: "Email & In-App",
      read: true
    },
    {
      id: "notif_3",
      userId: "usr_farm_1",
      role: "farmer",
      title: "Automatic Payout Processed",
      message: "$218.00 split payout for Order #ORD-9402 transferred to Stripe Connected Account.",
      timestamp: "2 hours ago",
      type: "payout",
      channel: "In-App",
      read: true
    }
  ],

  disputes: [
    {
      id: "DISP-101",
      orderId: "ORD-9340",
      restaurantName: "Botanica Kitchen",
      farmerName: "Riverbend Co-Op",
      issue: "Minor crate shortfall (-5 kg Squash)",
      status: "resolved_auto",
      resolution: "Auto-reassigned to Oakwood Micro-Farms without delivery delay.",
      timestamp: "2026-10-04"
    }
  ]
};
