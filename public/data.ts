export const siteConfig = {
  name: "Bismillah Auto",
  tagline: "Trusted Motolock GPS in Chapainawabganj",
  description: "চাঁপাইনবাবগঞ্জের বিশ্বস্ত Motolock GPS ট্র্যাকার সেবা। MotoLock GPS v4.0 দিয়ে আপনার বাইকের নিরাপত্তা নিশ্চিত করুন। Real-time tracking, engine lock, free installation।",
  phone: process.env.NEXT_PUBLIC_PHONE || "+8801766-894978",
  address: {
    street: "Jhilim Road, Nayagola Hat",
    city: "Chapainawabganj Sadar",
    state: "Rajshahi",
    zip: "6300",
    country: "Bangladesh"
  },
  coordinates: {
    lat: 24.613016,
    lng: 88.294515
  },
  businessHours: {
    weekdays: "9:00 AM - 8:00 PM",
    friday: "Closed",
    weekend: "9:00 AM - 8:00 PM"
  },
  social: {
    whatsapp: "8801766894978"
  }
};

export const productData = {
  motolock: {
    id: "motolock-gps-v4",
    name: "MotoLock GPS Tracker v4.0",
    shortName: "MotoLock GPS",
    price: 1299,
    originalPrice: 4500,
    currency: "BDT",
    sku: "MOTO-GPS-V4",
    brand: "MotoLock",
    warranty: "1 Year Replacement Warranty",
    installation: "Free Professional Installation",
    //     https://i.ibb.co.com/Sw0nL9V5/mtg5.jpg
    // https://i.ibb.co.com/VcNp3HdP/mtg6.jpg
    // https://i.ibb.co.com/CpbDtZnN/mtg2.jpg
    // https://i.ibb.co.com/HLrrdLC4/mtg3.jpg
    // https://i.ibb.co.com/JwTWDZSN/mtgps1.jpg
    // https://i.ibb.co.com/WN9n2C33/mtg4.jpg
    images: [
      {
        url: "https://i.ibb.co.com/Sw0nL9V5/mtg5.jpg",
        alt: "MotoLock GPS Tracker v4.0 - Main Product Image",
        title: "Advanced GPS Tracking Device for Motorcycles",
      },
      {
        url: "https://i.ibb.co.com/VcNp3HdP/mtg6.jpg",
        alt: "MotoLock GPS Installation Process",
        title: "Professional GPS Tracker Installation",
      },
      {
        url: "https://i.ibb.co.com/CpbDtZnN/mtg2.jpg",
        alt: "MotoLock GPS Mobile App Interface",
        title: "Real-time Tracking Mobile Application",
      },
      {
        url: "https://i.ibb.co.com/HLrrdLC4/mtg3.jpg",
        alt: "MotoLock GPS Device Components",
        title: "GPS Tracker Hardware Components",
      },
      {
        url: "https://i.ibb.co.com/JwTWDZSN/mtgps1.jpg",
        alt: "Motorcycle Security with GPS Tracker",
        title: "Enhanced Motorcycle Security System",
      },
    ],
    description:
      "আপনার বাইকের স্মার্ট সিকিউরিটি সঙ্গী! Anti-theft protection, real-time tracking, এবং remote engine control সবকিছু এক ডিভাইসে।",
    longDescription:
      "MotoLock GPS v4.0 হল বাংলাদেশের সবচেয়ে উন্নত মোটরসাইকেল GPS ট্র্যাকিং সিস্টেম। এটি শুধুমাত্র একটি জিপিএস ট্র্যাকার নয়, বরং একটি সম্পূর্ণ স্মার্ট সিকিউরিটি সিস্টেম যা চোর, ছিনতাই ও অনাকাঙ্ক্ষিত পরিস্থিতি থেকে আপনার বাইককে রক্ষা করবে।",
    keyFeatures: [
      {
        title: "Real-time Tracking",
        description:
          "বিশ্বের যেকোনো স্থান থেকে আপনার বাইকের সঠিক অবস্থান জানুন। Live location এবং complete journey history পাবেন।",
        icon: "MapPin",
      },
      {
        title: "Remote Engine Control",
        description:
          "মোবাইল অ্যাপ দিয়ে যেকোনো সময় ইঞ্জিন lock/unlock করুন। চোর বাইক নিয়ে পালানোর আগেই ইঞ্জিন বন্ধ করে দিন।",
        icon: "Lock",
      },
      {
        title: "Smart Alerts & Geo-fence",
        description:
          "অবৈধ চাবি অন, over-speed, নির্দিষ্ট এলাকার বাইরে যাওয়া - সব কিছুর জন্য instant call alert পাবেন।",
        icon: "Bell",
      },
      {
        title: "Anti-theft Protection",
        description:
          "চোর detection, SOS button, hidden installation এবং tamper alerts দিয়ে সর্বোচ্চ নিরাপত্তা।",
        icon: "Shield",
      },
      {
        title: "Speed Monitoring",
        description:
          "Over-speed alerts এবং maximum speed limit setting করে নিরাপদ ড্রাইভিং নিশ্চিত করুন।",
        icon: "Gauge",
      },
      {
        title: "Mobile App Control",
        description:
          "Android ও iOS অ্যাপ দিয়ে সব ফিচার control করুন। Multi-user access সুবিধা।",
        icon: "Smartphone",
      },
    ],
    specifications: {
      build: [
        "IP66 water-proof casing - বৃষ্টি, ধুলা, মাটি প্রতিরোধী",
        "High-grade plastic body with shock resistance",
        "Operating temperature: -20°C to +70°C",
        "Compact size: 8cm x 5cm x 2cm",
      ],
      power: [
        "Built-in rechargeable lithium battery",
        "24-48 hours backup after main power cut",
        "Low voltage alert system",
        "Smart power management for extended life",
      ],
      connectivity: [
        "Android & iOS mobile apps",
        "Web dashboard access from computer",
        "SMS command support",
        "Multi-user access (up to 5 phones)",
      ],
      cost: [
        "Grameenphone/Robi: Tk 200-300/month",
        "Banglalink/Airtel: Tk 300-500/month",
        "No additional server charges",
        "Prepaid recharge system - no monthly bills",
      ],
    },
    faqs: [
      {
        question: "GPS ট্র্যাকার ইনস্টল করতে কত খরচ?",
        answer:
          "আমাদের পক্ষ থেকে ইনস্টলেশন সম্পূর্ণ ফ্রি। শুধুমাত্র মিস্ত্রিকে আলাদা বকশিশ দিতে হবে (সাধারণত ১০০-২০০ টাকা)।",
      },
      {
        question: "মাসিক কত টাকা খরচ হবে?",
        answer:
          "শুধুমাত্র সিমের ডাটা প্যাক কিনতে হবে। GP/Robi তে ২০০-৩০০ টাকা, Banglalink/Airtel এ ৩০০-৫০০ টাকা মাসিক। কোনো সার্ভার চার্জ নেই।",
      },
      {
        question: "ওয়ারেন্টি কতদিনের?",
        answer:
          "১ বছরের সম্পূর্ণ রিপ্লেসমেন্ট ওয়ারেন্টি। কোনো সমস্যা হলে নতুন ডিভাইস দিয়ে দেওয়া হবে।",
      },
      {
        question: "বৃষ্টিতে বা পানিতে ভিজলে কি সমস্যা হবে?",
        answer:
          "না, IP66 water-proof casing থাকায় বৃষ্টি, ধুলা, মাটি কোনো সমস্যা হবে না। সম্পূর্ণ weather-resistant ডিজাইন।",
      },
      {
        question: "কয়টি ফোন থেকে control করা যাবে?",
        answer:
          "একসাথে ৫টি মোবাইল নাম্বার add করে রাখতে পারবেন। সবাই alert পাবে এবং control করতে পারবে।",
      },
    ],
  },
};

export const servicesData = [
  {
    id: "oil-change",
    title: "Oil Change & Maintenance",
    description: "নিয়মিত তেল পরিবর্তন এবং মোটরসাইকেল রক্ষণাবেক্ষণ সেবা। আমরা genuine oil এবং filter ব্যবহার করি যা আপনার বাইকের ইঞ্জিনের আয়ু বৃদ্ধি করে।",
    price: "৳৫০০-১২০০",
    duration: "৩০-৬০ মিনিট",
    icon: "Settings"
  },
  {
    id: "engine-repair",
    title: "Engine Overhaul & Repair",
    description: "ইঞ্জিনের যাবতীয় সমস্যার সমাধান এবং complete overhaul সেবা। Piston, cylinder, valve, carburetor cleaning and replacement।",
    price: "৳২০০০-৮০০০",
    duration: "২-৫ ঘন্টা",
    icon: "Wrench"
  },
  {
    id: "electrical",
    title: "Electrical Wiring & Components",
    description: "বাইকের সমস্ত ইলেকট্রিক্যাল সমস্যার সমাধান। Battery, alternator, starter motor, lighting system repair এবং replacement।",
    price: "৳৩০০-২৫০০",
    duration: "১-৩ ঘন্টা",
    icon: "Zap"
  },
  {
    id: "gps-installation",
    title: "GPS Tracker & Custom Installation",
    description: "Professional GPS tracker installation এবং customization সেবা। Motolock GPS এর পাশাপাশি অন্যান্য security accessories install করি।",
    price: "৳৫০০-১৫০০",
    duration: "১-২ ঘন্টা",
    icon: "Shield"
  }
];

export const testimonialsData = [
  {
    id: 1,
    name: "রহিম উদ্দিন",
    location: "চাঁপাইনবাবগঞ্জ সদর",
    text: "২ মাস আগে আমার বাইক চুরি হওয়ার চেষ্টা হয়েছিল। Motolock এর alert পেয়ে সাথে সাথে পুলিশকে জানিয়ে বাইক উদ্ধার করতে পেরেছি। সত্যিই দারুণ সিস্টেম!",
    rating: 5,
    bike: "Honda CB Shine"
  },
  {
    id: 2,
    name: "করিম আহমেদ",
    location: "নাচোল, চাঁপাইনবাবগঞ্জ",
    text: "আমার ছেলে কলেজে যায় বাইক নিয়ে। এখন GPS এর মাধ্যমে সে কোথায় আছে, কত স্পিডে চলছে সব জানতে পারি। মন শান্তি পেয়েছি।",
    rating: 5,
    bike: "Yamaha FZ"
  },
  {
    id: 3,
    name: "সালাহউদ্দিন মিয়া",
    location: "গোমস্তাপুর, চাঁপাইনবাবগঞ্জ",
    text: "দোকানে রাখা বাইকের security নিয়ে চিন্তিত থাকতাম। এখন GPS থাকায় রাতে নিশ্চিন্তে ঘুমাতে পারি। Bismillah Auto এর সার্ভিসও অসাধারণ।",
    rating: 5,
    bike: "Hero Splendor"
  }
];

export const statsData = [
  { number: 400, label: "Trackers Installed", suffix: "+" },
  { number: 98, label: "Customer Satisfaction", suffix: "%" },
  { number: 12, label: "Months Experience", suffix: "+" },
  { number: 24, label: "Support Hours", suffix: "/7" }
];

export const seoKeywords = {
  primary: "Motolock GPS tracker in Chapainawabganj",
  secondary: [
    "Motolock GPS tracker Bangladesh",
    "MotoLock GPS Chapainawabganj",
    "বাইক GPS ট্র্যাকার",
    "motorcycle security Chapainawabganj",
    "জিপিএস ট্র্যাকার চাঁপাইনবাবগঞ্জ",
    "bike tracker installation",
    "real time tracking Bangladesh",
    "engine lock system",
    "anti theft GPS device",
    "Bismillah Auto GPS"
  ]
};