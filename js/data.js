/* ============================================================
   AstroTalkz by vorabion — Centralized Data Layer
   Matches reference screens pixel-by-pixel.
   Strictly supports ONLY Chat and Audio Call (NO Video Call).
   ============================================================ */

const STORAGE_KEY = "voratalk_prototype_state_v4";

const INITIAL_DATA = {
  // Current logged in user (Reference: Priya Sharma)
  currentUser: {
    id: "usr_001",
    name: "Priya Sharma",
    phone: "+91 98765 43210",
    email: "priya.sharma@gmail.com",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80",
    walletBalance: 1250,
    points: 1250,
    level: 3,
    gender: "Female",
    dob: "1996-07-14",
    birthTime: "11:45",
    birthPlace: "Delhi, India",
    zodiac: "Cancer",
    moonSign: "Scorpio",
    isLoggedIn: true,
    hasCompletedOnboarding: true,
    role: "user" // "user" | "astrologer"
  },

  // Astrologers Marketplace (Reference Data)
  astrologers: [
    {
      id: "astro_01",
      name: "Astro Arjun Sharma",
      title: "Vedic Astrologer · Numerology",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
      rating: 4.9,
      reviews: 125,
      experience: "8 Years Exp.",
      consultationsCount: "12K+",
      languages: ["Hindi", "English"],
      expertise: ["Love & Relationship", "Career", "Finance", "Marriage", "Education", "Health", "Family"],
      isOnline: true,
      verified: true,
      chatRate: 20,
      callRate: 30,
      bio: "Astro Arjun Sharma is a trusted name in Vedic Astrology and Numerology with 8+ years of experience. He specializes in Love, Career, Finance, Marriage and Health related solutions.",
      availability: ["Today, 24 May", "Sat, 25 May", "Sun, 26 May", "Mon, 27 May", "Tue, 28 May"]
    },
    {
      id: "astro_02",
      name: "Astro Meera Iyer",
      title: "Tarot · Vedic · Numerology",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
      rating: 4.8,
      reviews: 98,
      experience: "6 Years Exp.",
      consultationsCount: "8.5K+",
      languages: ["English", "Tamil", "Hindi"],
      expertise: ["Love", "Relationship", "Career", "Tarot Reading", "Spiritual Healing"],
      isOnline: true,
      verified: true,
      chatRate: 18,
      callRate: 28,
      bio: "Astro Meera Iyer is a certified Tarot Master and Vedic Astrologer helping clients find emotional balance, relationship clarity, and spiritual direction for over 6 years.",
      availability: ["Today, 24 May", "Sat, 25 May", "Sun, 26 May"]
    },
    {
      id: "astro_03",
      name: "Astro Devdutt Ji",
      title: "Vastu · Vedic Astrology · KP",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
      rating: 4.7,
      reviews: 76,
      experience: "20+ Years Exp.",
      consultationsCount: "25K+",
      languages: ["Hindi", "English", "Sanskrit"],
      expertise: ["Career", "Finance", "Health", "Vastu Shastra", "KP Astrology", "Gemstone"],
      isOnline: false,
      verified: true,
      chatRate: 25,
      callRate: 35,
      bio: "Acharya Devdutt Ji has over two decades of experience in traditional KP Astrology and Vedic Vastu remedies, guiding thousands of families toward harmony and prosperity.",
      availability: ["Sat, 25 May", "Sun, 26 May", "Mon, 27 May"]
    },
    {
      id: "astro_04",
      name: "Astro Neha Kapoor",
      title: "Palmistry · Numerology",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
      rating: 4.9,
      reviews: 142,
      experience: "7 Years Exp.",
      consultationsCount: "10K+",
      languages: ["Hindi", "English", "Punjabi"],
      expertise: ["Love & Relationship", "Marriage", "Palmistry", "Name Correction"],
      isOnline: true,
      verified: true,
      chatRate: 22,
      callRate: 32,
      bio: "Astro Neha Kapoor combines modern psychological counseling with ancient Palmistry and Pythagorean Numerology to deliver practical, life-changing guidance.",
      availability: ["Today, 24 May", "Sat, 25 May", "Mon, 27 May"]
    },
    {
      id: "astro_05",
      name: "Astro Raghav Verma",
      title: "Vedic Astrology · Kundli Expert",
      avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&auto=format&fit=crop&q=80",
      rating: 4.7,
      reviews: 64,
      experience: "10 Years Exp.",
      consultationsCount: "14K+",
      languages: ["Hindi", "English"],
      expertise: ["Career", "Kundli Milan", "Dasha Remedies", "Business Astrology"],
      isOnline: false,
      verified: true,
      chatRate: 20,
      callRate: 30,
      bio: "Pandit Raghav Verma is a hereditary Vedic scholar specializing in Janam Kundli analysis, planetary transit timings, and customized Vedic rituals.",
      availability: ["Sun, 26 May", "Mon, 27 May"]
    }
  ],

  // Expert Astrologer Portal Profile (Reference: Dr. Ananya Sharma)
  currentAstrologer: {
    id: "astro_expert_01",
    fullName: "Dr. Ananya Sharma",
    title: "Verified Astrologer · Top Rated",
    badge: "Top Rated (Among top 10% astrologers)",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    rating: 4.9,
    reviewsCount: 256,
    experience: "8 Years",
    languages: ["Hindi", "English", "Sanskrit"],
    isOnline: true,
    totalConsultations: 1248,
    happyClients: 1032,
    responseTime: "2 min (Very Fast)",
    todayStats: {
      total: 12,
      completed: 8,
      upcoming: 2,
      earnings: 9450
    },
    earningsMonth: 45680,
    earningsWeek: 9850,
    earningsYear: 245680,
    earningsTotal: 875430,
    breakdown: {
      chat: 18750,
      call: 15200,
      other: 11730
    },
        bankDetails: {
      accountHolder: "Dr. Ananya Sharma",
      bankName: "HDFC Bank",
      accountNumberMasked: "•••• •••• •••• 4892",
      ifsc: "HDFC0001248",
      upiId: "ananya.sharma@okhdfcbank",
      status: "Verified & Active",
      lastPayout: "₹ 38,400 on 15 May 2026",
      nextPayout: "₹ 45,680 on 01 Jun 2026"
    },
    kyc: {
      panStatus: "Verified ✓",
      panNumberMasked: "ABCDE••••F",
      aadharStatus: "Verified ✓",
      aadharMasked: "•••• •••• 9012",
      certification: "Vedic Jyotish Acharya (Gold Medalist, BHU)",
      kycBadge: "Verified Expert Partner 🛡️",
      verifiedDate: "12 Jan 2023"
    },
    notificationSettings: {
      newConsultation: true,
      bookingReminder: true,
      earningsAlerts: true,
      promotional: false,
      systemAlerts: true
    },
    workingSchedule: {
      workingDays: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      startTime: "09:00 AM",
      endTime: "09:00 PM",
      slotDuration: 30,
      autoAcceptChat: true,
      autoAcceptCall: true
    },
    reviewsList: [
      { id: "rev_1", clientName: "Priya S.", rating: 5, date: "22 May 2026", type: "Chat", comment: "Dr. Ananya is remarkably accurate! Her career timeline predictions gave me immense confidence. Very calm and polite.", helpful: 14 },
      { id: "rev_2", clientName: "Amitabh R.", rating: 5, date: "21 May 2026", type: "Audio Call", comment: "Highly detailed horoscope analysis. The gemstone and Surya Arghya remedy worked wonders for my health.", helpful: 9 },
      { id: "rev_3", clientName: "Kavita M.", rating: 5, date: "19 May 2026", type: "Chat", comment: "Explained the 7th house dasha clearly. No superstitious fear-mongering, only practical Vedic wisdom. Thank you!", helpful: 12 },
      { id: "rev_4", clientName: "Rohan D.", rating: 4, date: "16 May 2026", type: "Audio Call", comment: "Good consultation on marriage matching and kundli milan. Very satisfied with the guidance.", helpful: 6 }
    ],
    astroNotifications: [
      { id: "anotif_1", title: "New Consultation Request 🔔", message: "Sneha Kapoor requested a 30-min Chat Consultation.", time: "5m ago", read: false, type: "consult" },
      { id: "anotif_2", title: "Weekly Payout Processed 💰", message: "₹ 9,850 credited to your HDFC bank account.", time: "2h ago", read: false, type: "payout" },
      { id: "anotif_3", title: "5-Star Review Received ⭐", message: "Priya S. left a 5-star rating for your chat session.", time: "1d ago", read: true, type: "review" },
      { id: "anotif_4", title: "Platform Maintenance Alert", message: "Scheduled maintenance on Sunday 2:00 AM - 3:00 AM.", time: "2d ago", read: true, type: "system" }
    ],
    expertise: ["Kundli Analysis", "Career Guidance", "Love & Relationship", "Marriage Matching", "Vastu Consultation", "Finance & Wealth"],
    bio: "I have more than 8 years of experience in Vedic Astrology. I specialize in Kundli Analysis, Career Guidance, Marriage, Relationship, and Vastu. My aim is to provide accurate guidance and simple remedies for a better life."
  },

  // Bookings (Matching Reference screens)
  bookings: [
    {
      id: "BK123456",
      astrologerId: "astro_01",
      astrologerName: "Astro Arjun Sharma",
      astrologerAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
      expertise: "Vedic Astrology · Numerology",
      type: "Chat", // "Chat" | "Audio Call" (STRICTLY NO VIDEO)
      date: "24 May 2026, Fri",
      time: "10:30 AM",
      duration: "30 Minutes",
      ratePerMin: 20,
      amount: 600,
      topic: "Career Guidance",
      note: "I need guidance regarding career in data science and future opportunities.",
      status: "upcoming", // "upcoming" | "completed" | "cancelled"
      steps: [
        { label: "Booked", date: "20 May 2026, 10:15 AM", done: true },
        { label: "Payment Confirmed", date: "20 May 2026, 10:16 AM", done: true },
        { label: "Reminder Sent", date: "24 May 2026, 09:00 AM", done: true },
        { label: "Upcoming", date: "24 May 2026, 10:30 AM", done: false }
      ]
    },
    {
      id: "BK123455",
      astrologerId: "astro_02",
      astrologerName: "Astro Meera Iyer",
      astrologerAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
      expertise: "Tarot · Vedic · Numerology",
      type: "Audio Call",
      date: "18 May 2026, Sat",
      time: "04:00 PM",
      duration: "18 Minutes",
      ratePerMin: 28,
      amount: 500,
      topic: "Relationship Clarity",
      note: "Need guidance on marriage timeline and partner compatibility.",
      status: "completed",
      rating: 4.8
    },
    {
      id: "BK123454",
      astrologerId: "astro_03",
      astrologerName: "Astro Devdutt Ji",
      astrologerAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
      expertise: "Vastu · Vedic Astrology",
      type: "Chat",
      date: "10 May 2026, Fri",
      time: "11:00 AM",
      duration: "16 Minutes",
      ratePerMin: 25,
      amount: 400,
      topic: "Home Vastu Directions",
      note: "Consultation regarding entrance and kitchen placement.",
      status: "completed",
      rating: 4.7
    },
    {
      id: "BK123453",
      astrologerId: "astro_04",
      astrologerName: "Astro Neha Kapoor",
      astrologerAvatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
      expertise: "Palmistry · Numerology",
      type: "Audio Call",
      date: "02 May 2026, Thu",
      time: "07:30 PM",
      duration: "15 Minutes",
      ratePerMin: 32,
      amount: 480,
      topic: "Name Correction",
      note: "Business name spelling analysis.",
      status: "completed",
      rating: 4.9
    },
    {
      id: "BK123450",
      astrologerId: "astro_05",
      astrologerName: "Astro Raghav Verma",
      astrologerAvatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&auto=format&fit=crop&q=80",
      expertise: "Vedic Astrology",
      type: "Chat",
      date: "05 May 2026, Sun",
      time: "09:00 AM",
      duration: "15 Minutes",
      ratePerMin: 20,
      amount: 300,
      topic: "Kundli Dasha",
      note: "Rescheduled due to network connectivity.",
      status: "cancelled"
    }
  ],

  // Transactions (Reference: Transaction History screen)
  transactions: [
    {
      id: "tx_01",
      title: "Wallet Top Up",
      method: "UPI",
      date: "22 May 2026",
      time: "10:30 AM",
      amount: 1000,
      isCredit: true,
      status: "Success"
    },
    {
      id: "tx_02",
      title: "Chat Consultation",
      astrologer: "Astro Arjun Sharma",
      date: "22 May 2026",
      time: "09:15 AM",
      amount: 300,
      isCredit: false,
      status: "Completed"
    },
    {
      id: "tx_03",
      title: "Audio Call Consultation",
      astrologer: "Astro Meera Iyer",
      date: "22 May 2026",
      time: "08:20 AM",
      amount: 600,
      isCredit: false,
      status: "Completed"
    },
    {
      id: "tx_04",
      title: "Wallet Top Up",
      method: "UPI",
      date: "21 May 2026",
      time: "06:45 PM",
      amount: 500,
      isCredit: true,
      status: "Success"
    },
    {
      id: "tx_05",
      title: "Chat Consultation",
      astrologer: "Astro Devdutt Ji",
      date: "21 May 2026",
      time: "05:10 PM",
      amount: 250,
      isCredit: false,
      status: "Completed"
    },
    {
      id: "tx_06",
      title: "Wallet Top Up",
      method: "Card",
      date: "20 May 2026",
      time: "11:30 AM",
      amount: 750,
      isCredit: true,
      status: "Success"
    },
    {
      id: "tx_07",
      title: "Audio Call Consultation",
      astrologer: "Astro Neha Kapoor",
      date: "20 May 2026",
      time: "10:00 AM",
      amount: 500,
      isCredit: false,
      status: "Completed"
    },
    {
      id: "tx_08",
      title: "Chat Consultation",
      astrologer: "Astro Raghav Verma",
      date: "19 May 2026",
      time: "07:40 AM",
      amount: 200,
      isCredit: false,
      status: "Completed"
    }
  ],

  // Saved / Favourite Astrologers
  favourites: ["astro_01", "astro_02", "astro_03", "astro_04"],

  // Notifications
  notifications: [
    {
      id: "notif_01",
      title: "Booking Reminder ✦",
      message: "Your Audio Call with Astro Arjun Sharma starts in 15 minutes.",
      time: "10m ago",
      read: false
    },
    {
      id: "notif_02",
      title: "Special Coupon Code 🏷️",
      message: "Use code WELCOME50 for ₹50 off on your next consultation.",
      time: "2h ago",
      read: false
    },
    {
      id: "notif_03",
      title: "Daily Horoscope Ready",
      message: "Aries: A positive and energetic day for career growth.",
      time: "6h ago",
      read: true
    }
  ],

  // Chat Transcripts
  chatMessages: {
    "astro_01": [
      { id: "m1", sender: "user", text: "Namaste! I want to know about my career growth and future opportunities.", time: "09:30 AM" },
      { id: "m2", sender: "astrologer", text: "Namaste! 🙏\nSure, I will analyze your career path and future opportunities. Please share your birth details to get started.", time: "09:31 AM" },
      { id: "m3", sender: "user", text: "14 July 1996\n11:45 AM\nDelhi, India", time: "09:32 AM" },
      { id: "m4", sender: "astrologer", text: "Thank you! Please give me a moment to analyze your chart. I'll share the insights with you shortly.", time: "09:33 AM" },
      { id: "m5", sender: "astrologer", text: "Based on your birth details, I can see that you have strong potential for growth in the next 2–3 years. Major opportunities are visible around mid 2026.", time: "09:36 AM" }
    ]
  },

  // Expert Live Requests & Consultations Queue
  astroConsultations: [
    {
      id: "CONS12548",
      clientName: "Sneha Kapoor",
      clientAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
      clientStatus: "Returning User",
      clientAge: "28 Years",
      clientDob: "14 Jul 1996",
      clientBirthTime: "11:45 AM",
      clientBirthPlace: "Delhi, India",
      clientLanguages: "Hindi, English",
      clientZodiac: "Cancer",
      clientMoonSign: "Scorpio",
      type: "Chat", // "Chat" | "Audio Call" (STRICTLY NO VIDEO)
      date: "22 May 2026",
      time: "12:30 PM",
      duration: "30 Minutes",
      amount: 250,
      clientQuestion: "I am facing confusion in my career. Will I get a good job opportunity this year? Also tell me about my financial stability and future.",
      notes: "Focus on career and finance. Check dasha periods. Provide remedies for mental peace.",
      status: "confirmed"
    },
    {
      id: "CONS12549",
      clientName: "Rahul Verma",
      clientAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
      clientStatus: "New User",
      clientAge: "31 Years",
      clientDob: "22 Aug 1993",
      clientBirthTime: "04:15 PM",
      clientBirthPlace: "Mumbai, India",
      clientLanguages: "Hindi",
      clientZodiac: "Leo",
      clientMoonSign: "Libra",
      type: "Audio Call",
      date: "22 May 2026",
      time: "11:15 AM",
      duration: "15 Minutes",
      amount: 500,
      clientQuestion: "Marriage timing guidance and business partnership compatibility.",
      notes: "Check 7th house lord transit.",
      status: "pending"
    }
  ],

  // Offers & Coupons
  offers: [
    { code: "WELCOME50", discount: 50, minAmount: 100, title: "₹50 Off for New Users" },
    { code: "FIRSTCALL100", discount: 100, minAmount: 300, title: "₹100 Off on Audio Call" },
    { code: "ASTRO20", discount: 0.20, isPercentage: true, minAmount: 200, title: "20% Off Consultation" }
  ],

  // Daily Horoscopes (Reference: Daily Horoscope screen)
  horoscopes: {
    Aries: {
      symbol: "♈",
      dates: "March 21 - April 19",
      overall: 78,
      headline: "A positive day ahead!",
      summary: "Today brings opportunities for growth and meaningful connections. Stay confident and focus on your goals.",
      detailed: "Your energy is high and motivation is strong. It's a great time to start new projects or take bold steps in your career. In relationships, communication will bring you closer to your loved ones. Take care of your health by balancing work and rest.",
      love: 80,
      career: 85,
      money: 70,
      health: 90,
      luckyNumber: "9",
      luckyColor: "Red",
      luckyTime: "10:30 AM",
      luckyGemstone: "Ruby",
      remedies: [
        { icon: "☀️", text: "Offer water to the Sun God in the morning." },
        { icon: "🕉️", text: "Chant \"Om Surya Namah\" 11 times daily." },
        { icon: "🌱", text: "Donate red lentils on Tuesday." }
      ]
    },
    Taurus: {
      symbol: "♉",
      dates: "April 20 - May 20",
      overall: 82,
      headline: "Financial harmony and steady growth.",
      summary: "Venus favors material comfort and creative endeavors today. Patience pays off.",
      detailed: "Financial decisions made today will yield long-term benefits. Express gratitude in family interactions.",
      love: 85, career: 78, money: 88, health: 80,
      luckyNumber: "6", luckyColor: "White", luckyTime: "02:15 PM", luckyGemstone: "Diamond",
      remedies: [{ icon: "🌸", text: "Offer white flowers to Goddess Lakshmi." }]
    },
    Gemini: {
      symbol: "♊",
      dates: "May 21 - June 20",
      overall: 88,
      headline: "Brilliant communication and sharp intellect.",
      summary: "Mercury brings quick resolution to complex discussions and opens new networking avenues.",
      detailed: "Your verbal fluency is at its peak. Ideal time for job interviews, contract signings, or creative writing.",
      love: 82, career: 92, money: 75, health: 85,
      luckyNumber: "5", luckyColor: "Emerald Green", luckyTime: "11:00 AM", luckyGemstone: "Emerald",
      remedies: [{ icon: "🌿", text: "Water a Tulsi plant and chant Vishnu Sahasranama." }]
    },
    Cancer: {
      symbol: "♋",
      dates: "June 21 - July 22",
      overall: 75,
      headline: "Emotional clarity and intuitive insights.",
      summary: "Moon encourages deep family bonding and self-care rituals.",
      detailed: "Trust your inner gut feelings when dealing with colleagues.",
      love: 88, career: 70, money: 72, health: 78,
      luckyNumber: "2", luckyColor: "Silver", luckyTime: "08:30 PM", luckyGemstone: "Pearl",
      remedies: [{ icon: "🌙", text: "Offer raw milk to Shivling on Mondays." }]
    },
    Leo: {
      symbol: "♌",
      dates: "July 23 - August 22",
      overall: 91,
      headline: "Commanding leadership and charismatic presence.",
      summary: "The Sun blesses you with vitality and recognition at the workplace.",
      detailed: "A stellar day to present new proposals. Others will readily follow your guidance.",
      love: 90, career: 95, money: 85, health: 90,
      luckyNumber: "1", luckyColor: "Gold", luckyTime: "09:15 AM", luckyGemstone: "Ruby",
      remedies: [{ icon: "☀️", text: "Recite Aditya Hridaya Stotram at sunrise." }]
    },
    Virgo: {
      symbol: "♍",
      dates: "August 23 - September 22",
      overall: 80,
      headline: "Analytical mastery and meticulous planning.",
      summary: "Great focus on wellness, debt clearance, and routine optimization.",
      detailed: "Your attention to detail saves significant resources.",
      love: 75, career: 88, money: 82, health: 85,
      luckyNumber: "7", luckyColor: "Olive Green", luckyTime: "04:30 PM", luckyGemstone: "Peridot",
      remedies: [{ icon: "🦜", text: "Feed green fodder or spinach to cows." }]
    },
    Libra: {
      symbol: "♎",
      dates: "September 23 - October 22",
      overall: 86,
      headline: "Social elegance and diplomatic success.",
      summary: "Harmonious partnerships and collaborative triumphs.",
      detailed: "A delightful day for romance and artistic pursuits.",
      love: 92, career: 80, money: 84, health: 82,
      luckyNumber: "6", luckyColor: "Pastel Pink", luckyTime: "06:00 PM", luckyGemstone: "Opal",
      remedies: [{ icon: "🪔", text: "Light a fragrant incense stick in your prayer area." }]
    },
    Scorpio: {
      symbol: "♏",
      dates: "October 23 - November 21",
      overall: 84,
      headline: "Transformative power and unwavering focus.",
      summary: "Mars provides the courage to eliminate old roadblocks.",
      detailed: "Deep research will uncover profitable insights.",
      love: 80, career: 88, money: 90, health: 76,
      luckyNumber: "9", luckyColor: "Maroon", luckyTime: "01:45 PM", luckyGemstone: "Red Coral",
      remedies: [{ icon: "🚩", text: "Chant Hanuman Chalisa in the evening." }]
    },
    Sagittarius: {
      symbol: "♐",
      dates: "November 22 - December 21",
      overall: 89,
      headline: "Optimism, higher wisdom and auspicious luck.",
      summary: "Jupiter expands your horizon with unexpected favorable news.",
      detailed: "Travel or scholarly discussions will bring spiritual delight.",
      love: 85, career: 90, money: 88, health: 86,
      luckyNumber: "3", luckyColor: "Yellow", luckyTime: "10:00 AM", luckyGemstone: "Yellow Sapphire",
      remedies: [{ icon: "🍌", text: "Apply saffron tilak on your forehead." }]
    },
    Capricorn: {
      symbol: "♑",
      dates: "December 22 - January 19",
      overall: 83,
      headline: "Disciplined execution and strategic milestone.",
      summary: "Saturn rewards hard work and persistence.",
      detailed: "Senior management appreciates your dedication.",
      love: 70, career: 92, money: 85, health: 80,
      luckyNumber: "8", luckyColor: "Navy Blue", luckyTime: "05:00 PM", luckyGemstone: "Blue Sapphire",
      remedies: [{ icon: "🕯️", text: "Light a mustard oil lamp under a Peepal tree." }]
    },
    Aquarius: {
      symbol: "♒",
      dates: "January 20 - February 18",
      overall: 87,
      headline: "Innovative breakthroughs and community support.",
      summary: "Unconventional thinking creates brilliant solutions today.",
      detailed: "Friends and social circles bring heartwarming encouragement.",
      love: 84, career: 89, money: 82, health: 88,
      luckyNumber: "4", luckyColor: "Electric Violet", luckyTime: "03:30 PM", luckyGemstone: "Amethyst",
      remedies: [{ icon: "🕊️", text: "Feed birds with mixed grains in the morning." }]
    },
    Pisces: {
      symbol: "♓",
      dates: "February 19 - March 20",
      overall: 85,
      headline: "Spiritual tranquility and imaginative inspiration.",
      summary: "Deep empathy and psychic intuition guide your path today.",
      detailed: "Meditative practices will yield profound inner peace.",
      love: 90, career: 78, money: 80, health: 86,
      luckyNumber: "3", luckyColor: "Sea Green", luckyTime: "07:15 PM", luckyGemstone: "Aquamarine",
      remedies: [{ icon: "🌊", text: "Feed fish with wheat dough balls." }]
    }
  }
};

/* ── Central State & LocalStorage Manager ─────────────────── */
const Storage = {
  getState() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.warn("LocalStorage parse error, falling back to default:", e);
    }
    return JSON.parse(JSON.stringify(INITIAL_DATA));
  },

  saveState(state) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.error("LocalStorage save error:", e);
    }
  },

  resetDemo() {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {}
    window.location.reload();
  }
};

// Global reactive DATA instance
let DATA = Storage.getState();

// Transient UI State (Ephemeral)
let STATE = {
  currentRole: "user", // "user" | "astrologer"
  activeScreen: "home",
  selectedAstrologerId: "astro_01",
  selectedConsultationType: "chat", // "chat" | "call" (STRICTLY NO VIDEO)
  selectedDuration: 30, // in minutes
  selectedDate: "Today, 24 May",
  selectedTime: "10:30 AM",
  selectedTopup: 500,
  appliedCoupon: null,
  consultCategoryFilter: "All",
  consultTypeFilter: "All", // "All" | "chat" | "call"
  consultSearchQuery: "",
  consultSortBy: "recommended",
  selectedHoroscopeSign: "Aries",
  selectedHoroscopeTab: "Today",
  activeChatTimer: null,
  activeChatSeconds: 0,
  activeAudioCallTimer: null,
  activeAudioCallSeconds: 0,
  isMuted: false,
  isSpeakerOn: false,
  activeBookingId: "BK123456"
};
