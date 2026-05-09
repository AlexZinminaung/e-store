
const popularProducts = [
  {
    id: 1,
    imgUrl: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
    category: "mobile",
    badge: "New",
    title: "iPhone 17 Pro Max",
    price: 1299
  },
  {
    id: 2,
    imgUrl: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80",
    category: "mobile",
    badge: "Hot",
    title: "Samsung Galaxy Ultra",
    price: 1199
  },
  {
    id: 3,
    imgUrl: "https://images.unsplash.com/photo-1637329589604-4485001b3605?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "laptop",
    badge: "New",
    title: "MacBook Pro M6",
    price: 2199
  },
  {
    id: 4,
    imgUrl: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80",
    category: "laptop",
    badge: "Sale",
    title: "Dell XPS 15",
    price: 1699
  },
  {
    id: 5,
    imgUrl: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80",
    category: "audio",
    badge: "New",
    title: "AirPods Max 2",
    price: 599
  },
  {
    id: 6,
    imgUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
    category: "audio",
    badge: "Popular",
    title: "Sony WH-1000XM7",
    price: 449
  },
  {
    id: 7,
    imgUrl: "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=800&q=80",
    category: "accessories",
    badge: "Sale",
    title: "MagSafe Charger",
    price: 49
  },
  {
    id: 8,
    imgUrl: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80",
    category: "accessories",
    badge: "New",
    title: "Mechanical Keyboard Pro",
    price: 149
  }
]

const trendingProducts = [
  {
    id: 9,
    imgUrl:
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=800&q=80",
    category: "wearables",
    badge: "Trending",
    title: "Apple Watch Ultra X",
    price: 899
  },
  {
    id: 10,
    imgUrl:
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80",
    category: "tablet",
    badge: "Hot",
    title: "iPad Pro M5",
    price: 1399
  },
  {
    id: 11,
    imgUrl:
      "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=800&q=80",
    category: "gaming",
    badge: "Popular",
    title: "PlayStation 6",
    price: 699
  },
  {
    id: 12,
    imgUrl:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80",
    category: "camera",
    badge: "New",
    title: "Canon EOS R7",
    price: 1899
  },
  {
    id: 13,
    imgUrl:
      "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=800&q=80",
    category: "gaming",
    badge: "Sale",
    title: "Gaming RGB Mouse",
    price: 79
  },
  {
    id: 14,
    imgUrl:
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80",
    category: "monitor",
    badge: "Trending",
    title: "LG UltraWide 5K",
    price: 1299
  },
  {
    id: 15,
    imgUrl:
      "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&w=800&q=80",
    category: "accessories",
    badge: "Hot",
    title: "Wireless Gaming Keyboard",
    price: 199
  },
  {
    id: 16,
    imgUrl:
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80",
    category: "mobile",
    badge: "New",
    title: "Google Pixel Ultra",
    price: 1099
  },
  {
    id: 17,
    imgUrl:
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80",
    category: "audio",
    badge: "Popular",
    title: "JBL PartyBox Mini",
    price: 349
  }
];

const productDetail = [
  {
    id: 1,
    imgUrl:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
    category: "mobile",
    badge: "New",
    title: "iPhone 17 Pro Max",
    price: 1299,
    description:
      "Apple flagship smartphone with advanced camera system and ultra fast performance.",
    specs: {
      display: "6.9-inch OLED",
      ram: "8GB",
      camera: "50MP Triple Camera",
      cpu: "Apple Bionic A19"
    }
  },

  {
    id: 2,
    imgUrl:
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80",
    category: "mobile",
    badge: "Hot",
    title: "Samsung Galaxy Ultra",
    price: 1199,
    description:
      "Premium Android smartphone with smooth AMOLED display and professional camera.",
    specs: {
      display: "6.8-inch AMOLED",
      ram: "12GB",
      camera: "200MP",
      cpu: "Snapdragon 8 Gen 4"
    }
  },

  {
    id: 3,
    imgUrl:
      "https://images.unsplash.com/photo-1637329589604-4485001b3605?q=80&w=1740&auto=format&fit=crop",
    category: "laptop",
    badge: "New",
    title: "MacBook Pro M6",
    price: 2199,
    description:
      "Professional laptop built for developers and creative workloads.",
    specs: {
      display: "16-inch Retina",
      cpu: "Apple M6",
      gpu: "16-Core GPU",
      ram: "32GB"
    }
  },

  {
    id: 4,
    imgUrl:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80",
    category: "laptop",
    badge: "Sale",
    title: "Dell XPS 15",
    price: 1699,
    description:
      "Slim premium Windows laptop with strong battery life and performance.",
    specs: {
      display: "15-inch 4K",
      cpu: "Intel i7",
      gpu: "RTX 4060",
      os: "Windows 11"
    }
  },

  {
    id: 5,
    imgUrl:
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80",
    category: "audio",
    badge: "New",
    title: "AirPods Max 2",
    price: 599,
    description:
      "Premium wireless headphones with immersive spatial audio.",
    specs: {
      type: "Over-ear",
      battery: "30 Hours",
      connectivity: "Bluetooth 5.3",
      noiseCanceling: "Yes"
    }
  },

  {
    id: 6,
    imgUrl:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
    category: "audio",
    badge: "Popular",
    title: "Sony WH-1000XM7",
    price: 449,
    description:
      "Industry-leading wireless headphones with adaptive noise canceling.",
    specs: {
      type: "Over-ear",
      battery: "40 Hours",
      connectivity: "Bluetooth 5.4",
      noiseCanceling: "Adaptive ANC"
    }
  },

  {
    id: 7,
    imgUrl:
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=800&q=80",
    category: "accessories",
    badge: "Sale",
    title: "MagSafe Charger",
    price: 49,
    description:
      "Fast magnetic wireless charger compatible with modern smartphones.",
    specs: {
      power: "25W",
      cableLength: "1m",
      compatibility: "MagSafe Devices"
    }
  },

  {
    id: 8,
    imgUrl:
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80",
    category: "accessories",
    badge: "New",
    title: "Mechanical Keyboard Pro",
    price: 149,
    description:
      "Mechanical gaming keyboard with RGB lighting and premium switches.",
    specs: {
      switch: "Blue Switch",
      layout: "TKL",
      connectivity: "USB-C",
      rgb: "Yes"
    }
  },

  {
    id: 9,
    imgUrl:
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=800&q=80",
    category: "wearables",
    badge: "Trending",
    title: "Apple Watch Ultra X",
    price: 899,
    description:
      "Advanced smartwatch for fitness tracking and outdoor activities.",
    specs: {
      display: "2-inch OLED",
      battery: "72 Hours",
      waterproof: "100m",
      sensors: "GPS + Heart Rate"
    }
  },

  {
    id: 10,
    imgUrl:
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80",
    category: "tablet",
    badge: "Hot",
    title: "iPad Pro M5",
    price: 1399,
    description:
      "High performance tablet designed for productivity and creativity.",
    specs: {
      display: "13-inch Retina",
      cpu: "Apple M5",
      storage: "512GB",
      ram: "16GB"
    }
  },

  {
    id: 11,
    imgUrl:
      "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=800&q=80",
    category: "gaming",
    badge: "Popular",
    title: "PlayStation 6",
    price: 699,
    description:
      "Next generation gaming console with ultra realistic graphics.",
    specs: {
      cpu: "AMD Zen 5",
      gpu: "RDNA 4",
      storage: "2TB SSD",
      resolution: "8K"
    }
  },

  {
    id: 12,
    imgUrl:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80",
    category: "camera",
    badge: "New",
    title: "Canon EOS R7",
    price: 1899,
    description:
      "Professional mirrorless camera with advanced autofocus system.",
    specs: {
      sensor: "32MP APS-C",
      video: "4K 60FPS",
      stabilization: "IBIS",
      lensMount: "RF"
    }
  },

  {
    id: 13,
    imgUrl:
      "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=800&q=80",
    category: "gaming",
    badge: "Sale",
    title: "Gaming RGB Mouse",
    price: 79,
    description:
      "Lightweight gaming mouse with customizable RGB lighting.",
    specs: {
      dpi: "26000 DPI",
      connectivity: "Wireless",
      weight: "59g",
      rgb: "Yes"
    }
  },

  {
    id: 14,
    imgUrl:
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80",
    category: "monitor",
    badge: "Trending",
    title: "LG UltraWide 5K",
    price: 1299,
    description:
      "Ultra wide monitor ideal for productivity and content creation.",
    specs: {
      resolution: "5K",
      refreshRate: "144Hz",
      panel: "IPS",
      size: "34-inch"
    }
  },

  {
    id: 15,
    imgUrl:
      "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&w=800&q=80",
    category: "accessories",
    badge: "Hot",
    title: "Wireless Gaming Keyboard",
    price: 199,
    description:
      "Wireless gaming keyboard with low latency and RGB lighting.",
    specs: {
      switch: "Red Switch",
      battery: "80 Hours",
      rgb: "Yes",
      connectivity: "Wireless"
    }
  },

  {
    id: 16,
    imgUrl:
      "https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80",
    category: "mobile",
    badge: "New",
    title: "Google Pixel Ultra",
    price: 1099,
    description:
      "Google flagship smartphone with advanced AI camera features.",
    specs: {
      display: "6.7-inch OLED",
      ram: "12GB",
      camera: "64MP",
      cpu: "Tensor G5"
    }
  },

  {
    id: 17,
    imgUrl:
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80",
    category: "audio",
    badge: "Popular",
    title: "JBL PartyBox Mini",
    price: 349,
    description:
      "Portable Bluetooth speaker with deep bass and party lighting.",
    specs: {
      battery: "18 Hours",
      connectivity: "Bluetooth 5.2",
      waterproof: "IPX4",
      power: "160W"
    }
  }
];

export { popularProducts, trendingProducts, productDetail }