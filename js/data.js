/* ============================================================
   AstroTalkz by vorabion — Centralized Data & Storage Layer
   Strictly supports ONLY Chat and Audio Call (NO Video Call).
   ============================================================ */

const DEFAULT_DATA = {
  /* ── Current User ─────────────────────────────────────────── */
  currentUser: {
    id: "USR-001",
    name: "Priya Sharma",
    phone: "+91 98765 43210",
    email: "priya.sharma@gmail.com",
    dob: "1995-05-24",
    birthTime: "10:30",
    birthPlace: "Jaipur, Rajasthan",
    zodiac: "Gemini",
    moonSign: "Scorpio",
    nakshatra: "Mrigashira",
    gender: "Female",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    walletBalance: 1250,
    points: 1250,
    level: 3,
    profileCompleted: true,
    isLoggedIn: true
  },

  /* ── Current Astrologer (Expert Role) ──────────────────────── */
  currentAstrologer: {
    id: "AST-001",
    name: "Arjun",
    fullName: "Astro Arjun Sharma",
    title: "Vedic Astrologer",
    experience: "8+ Years",
    rating: 4.9,
    totalConsultations: "12K+",
    reviews: 125,
    languages: ["Hindi", "English"],
    expertise: ["Vedic Astrology", "Numerology", "Love & Relationship", "Career"],
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    isOnline: true,
    todayStats: {
      total: 12,
      completed: 8,
      upcoming: 2,
      earnings: 9450
    },
    availableHours: "10:00 AM - 08:00 PM",
    availableDays: ["Mon", "Tue", "Wed", "Thu", "Fri"]
  },

  /* ── Astrologers Marketplace ───────────────────────────────── */
  astrologers: [
    {
      id: "AST-001",
      name: "Astro Arjun Sharma",
      title: "Vedic Astrology • Numerology",
      experience: "8 Years Exp.",
      rating: 4.9,
      reviews: 125,
      totalConsultations: "12K+",
      languages: ["Hindi", "English"],
      expertise: ["Love & Relationship", "Career", "Finance", "Marriage", "Health"],
      chatRate: 20,
      callRate: 30,
      status: "online",
      isOnline: true,
      verified: true,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80",
      bio: "Astro Arjun Sharma is a celebrated Vedic Astrologer with 8+ years of dedicated practice in Vedic charts, Numerology, and gemstone consultancy. He has guided over 12,000 clients towards clarity in love, career, and financial growth."
    },
    {
      id: "AST-002",
      name: "Astro Meera Iyer",
      title: "Tarot • Vedic • Numerology",
      experience: "6 Years Exp.",
      rating: 4.8,
      reviews: 98,
      totalConsultations: "9.8K+",
      languages: ["English", "Tamil", "Hindi"],
      expertise: ["Love & Relationship", "Career", "Health", "Marriage"],
      chatRate: 18,
      callRate: 28,
      status: "online",
      isOnline: true,
      verified: true,
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&auto=format&fit=crop&q=80",
      bio: "Astro Meera Iyer blends ancient Vedic wisdom with modern Tarot intuitive spreads. Specialized in relationship healings and career milestones."
    },
    {
      id: "AST-003",
      name: "Astro Devdutt Ji",
      title: "Vastu • Vedic Astrology • KP",
      experience: "20+ Years Exp.",
      rating: 4.7,
      reviews: 76,
      totalConsultations: "18K+",
      languages: ["Hindi", "English"],
      expertise: ["Career", "Finance", "Health", "Vastu"],
      chatRate: 25,
      callRate: 35,
      status: "offline",
      isOnline: false,
      verified: true,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&auto=format&fit=crop&q=80",
      bio: "Senior Vedic Astrologer from Varanasi with 20+ years of deep expertise in Vastu Shastra, Prashna Kundli, and KP planetary positioning."
    },
    {
      id: "AST-004",
      name: "Astro Neha Kapoor",
      title: "Palmistry • Numerology",
      experience: "9 Years Exp.",
      rating: 4.9,
      reviews: 210,
      totalConsultations: "14K+",
      languages: ["Hindi", "English"],
      expertise: ["Love & Relationship", "Marriage", "Education"],
      chatRate: 22,
      callRate: 32,
      status: "online",
      isOnline: true,
      verified: true,
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&auto=format&fit=crop&q=80",
      bio: "Expert palmist and life path numerologist providing uplifting remedies and accurate timing for marriage and education goals."
    },
    {
      id: "AST-005",
      name: "Astro Raghav Verma",
      title: "Vedic Astrology • Finance",
      experience: "5 Years Exp.",
      rating: 4.6,
      reviews: 55,
      totalConsultations: "5.2K+",
      languages: ["Hindi", "English"],
      expertise: ["Career", "Finance", "Family"],
      chatRate: 15,
      callRate: 22,
      status: "online",
      isOnline: true,
      verified: false,
      avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=300&auto=format&fit=crop&q=80",
      bio: "Dynamic and practical Vedic astrologer focusing on career trajectory, investment timings, and financial prosperity."
    }
  ],

  /* ── Favourites (Astrologer IDs) ───────────────────────────── */
  favourites: ["AST-001", "AST-002"],

  /* ── Bookings ──────────────────────────────────────────────── */
  bookings: [
    {
      id: "BK-892401",
      astrologerId: "AST-001",
      astrologerName: "Astro Arjun Sharma",
      astrologerTitle: "Vedic Astrology • Numerology",
      astrologerAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
      type: "Audio Call",
      date: "Today",
      time: "06:30 PM",
      duration: "30 Minutes",
      amount: 600,
      ratePerMin: 20,
      topic: "Career & Promotion Timing",
      userNote: "Need guidance on upcoming promotion and offshore opportunities.",
      status: "upcoming",
      paymentStatus: "Paid",
      bookedOn: "23 Aug 2026, 11:30 AM"
    },
    {
      id: "BK-892390",
      astrologerId: "AST-002",
      astrologerName: "Astro Meera Iyer",
      astrologerTitle: "Tarot • Vedic • Numerology",
      astrologerAvatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
      type: "Chat",
      date: "20 Aug 2026",
      time: "04:00 PM",
      duration: "20 Minutes",
      amount: 360,
      ratePerMin: 18,
      topic: "Relationship Compatibility",
      userNote: "Tarot card reading for marriage timing.",
      status: "completed",
      rating: 5,
      reviewText: "Very insightful and calm session. Highly recommended!"
    },
    {
      id: "BK-892210",
      astrologerId: "AST-003",
      astrologerName: "Astro Devdutt Ji",
      astrologerTitle: "Vastu • Vedic Astrology",
      astrologerAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80",
      type: "Audio Call",
      date: "14 Aug 2026",
      time: "11:00 AM",
      duration: "15 Minutes",
      amount: 375,
      ratePerMin: 25,
      topic: "Home Vastu Guidance",
      userNote: "Main entrance and kitchen direction analysis.",
      status: "completed",
      rating: 4.8
    },
    {
      id: "BK-892050",
      astrologerId: "AST-005",
      astrologerName: "Astro Raghav Verma",
      astrologerTitle: "Vedic Astrology",
      astrologerAvatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80",
      type: "Chat",
      date: "05 Aug 2026",
      time: "09:00 AM",
      duration: "15 Minutes",
      amount: 225,
      status: "cancelled",
      refundStatus: "Refunded to Wallet"
    }
  ],

  /* ── Transactions History ──────────────────────────────────── */
  transactions: [
    { id: "TXN-9041", date: "23 Aug 2026", time: "11:30 AM", type: "call", title: "Audio Call: Astro Arjun", amount: 600, isCredit: false, status: "Success" },
    { id: "TXN-9022", date: "22 Aug 2026", time: "07:15 PM", type: "topup", method: "UPI", title: "Wallet Recharge", amount: 1000, isCredit: true, status: "Success" },
    { id: "TXN-8980", date: "20 Aug 2026", time: "04:20 PM", type: "chat", title: "Chat: Astro Meera", amount: 360, isCredit: false, status: "Success" },
    { id: "TXN-8951", date: "15 Aug 2026", time: "01:45 PM", type: "topup", method: "Card", title: "Wallet Recharge", amount: 500, isCredit: true, status: "Success" },
    { id: "TXN-8910", date: "14 Aug 2026", time: "11:15 AM", type: "call", title: "Audio Call: Astro Devdutt", amount: 375, isCredit: false, status: "Success" },
    { id: "TXN-8840", date: "05 Aug 2026", time: "09:05 AM", type: "refund", method: "Wallet", title: "Cancelled Session Refund", amount: 225, isCredit: true, status: "Success" }
  ],

  /* ── Notifications ─────────────────────────────────────────── */
  notifications: [
    { id: "NOTIF-01", title: "Upcoming Session Alert", message: "Your Audio Call with Astro Arjun Sharma starts today at 06:30 PM.", time: "10 mins ago", read: false, type: "booking" },
    { id: "NOTIF-02", title: "Wallet Recharge Successful", message: "₹1,000 added to your VoraTalk balance via UPI.", time: "Yesterday", read: false, type: "wallet" },
    { id: "NOTIF-03", title: "Auspicious Muhurat Today", message: "Abhijit Muhurat is active from 11:45 AM to 12:35 PM. Great for new ventures!", time: "2 days ago", read: true, type: "system" },
    { id: "NOTIF-04", title: "Special Offer: 50% Off", message: "Use coupon WELCOME50 on your next consultation.", time: "3 days ago", read: true, type: "offer" }
  ],

  /* ── Coupons / Offers ──────────────────────────────────────── */
  offers: [
    { code: "WELCOME50", title: "Flat ₹50 OFF", discount: 50, type: "fixed", minAmount: 100, desc: "Valid on first consultation with verified astrologers" },
    { code: "FIRSTCALL100", title: "Flat ₹100 OFF", discount: 100, type: "fixed", minAmount: 300, desc: "Valid on audio consultations of 15+ minutes" },
    { code: "ASTRO20", title: "20% Discount", discount: 20, type: "percent", minAmount: 200, maxDiscount: 150, desc: "Get 20% off up to ₹150 on any session" }
  ],

  /* ── Chat Messages Store ───────────────────────────────────── */
  chatMessages: {
    "AST-001": [
      { id: 1, sender: "astrologer", text: "Namaste Priya ji! Welcome to AstroTalkz. I am Astro Arjun Sharma. How can I assist you with your career and life path today?", time: "10:30 AM" },
      { id: 2, sender: "user", text: "Namaste Pandit ji, I wanted guidance on my career switch and financial outlook for this year.", time: "10:31 AM" },
      { id: 3, sender: "astrologer", text: "I have examined your Gemini Rashi with Scorpio Moon. Jupiter's current transit over your 10th house indicates great career momentum starting from October. Let us discuss specific remedies.", time: "10:32 AM" }
    ],
    "AST-002": [
      { id: 1, sender: "astrologer", text: "Hello Priya! I'm Astro Meera. Feel free to share what's on your mind regarding relationships or life decisions.", time: "04:00 PM" }
    ]
  },

  /* ── Expert Side Consultations & Requests ─────────────────── */
  astroConsultations: [
    {
      id: "REQ-8901",
      clientName: "Sneha Kapoor",
      clientAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
      clientType: "Returning User",
      clientAge: 28,
      clientDob: "14 Jul 1996",
      clientBirthTime: "11:45 AM",
      clientBirthPlace: "Delhi, India",
      clientLanguages: ["Hindi", "English"],
      clientZodiac: "Cancer",
      clientMoonSign: "Scorpio",
      clientQuestion: "I am facing confusion in career switch. Will I get a good opportunity soon?",
      type: "Chat",
      date: "Today",
      time: "07:00 PM",
      duration: "15 Minutes",
      amount: 300,
      status: "pending"
    },
    {
      id: "REQ-8902",
      clientName: "Amit Malhotra",
      clientAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
      clientType: "New User",
      clientDob: "03 Sep 1988",
      clientBirthTime: "07:15 AM",
      clientBirthPlace: "Mumbai, India",
      clientLanguages: ["Hindi", "English"],
      clientQuestion: "Marriage compatibility and business investment timing.",
      type: "Audio Call",
      date: "Today",
      time: "08:15 PM",
      duration: "30 Minutes",
      amount: 900,
      status: "pending"
    }
  ],

  /* ── Daily Horoscope ───────────────────────────────────────── */
  horoscopes: {
    Aries:       { symbol: "♈", dates: "Mar 21 - Apr 19", overall: 85, love: 88, career: 90, money: 75, health: 80, luckyNumber: 9, luckyColor: "Crimson Red", luckyTime: "10:30 AM", luckyGemstone: "Red Coral", prediction: "Mars energizes your house of ambition. It's an opportune day for bold career negotiations and decisive action.", remedies: ["Offer water with red vermilion to the rising Sun.", "Chant 'Om Bhaumaya Namah' 11 times."] },
    Taurus:      { symbol: "♉", dates: "Apr 20 - May 20", overall: 82, love: 92, career: 78, money: 85, health: 80, luckyNumber: 6, luckyColor: "Emerald Green", luckyTime: "02:15 PM", luckyGemstone: "White Diamond / Opal", prediction: "Venus bestows financial clarity and harmonious domestic conversations. Long-term investments yield fruitful thoughts.", remedies: ["Light a pure cow ghee lamp in evening.", "Wear light pastel green or white."] },
    Gemini:      { symbol: "♊", dates: "May 21 - Jun 20", overall: 88, love: 80, career: 92, money: 85, health: 82, luckyNumber: 5, luckyColor: "Bright Yellow", luckyTime: "11:00 AM", luckyGemstone: "Emerald (Panna)", prediction: "Mercury boosts your analytical prowess and communicative charm. Perfect day for presentations and creative problem solving.", remedies: ["Feed green grass or spinach to a cow.", "Chant 'Om Budhaya Namah' 108 times."] },
    Cancer:      { symbol: "♋", dates: "Jun 21 - Jul 22", overall: 80, love: 95, career: 75, money: 78, health: 86, luckyNumber: 2, luckyColor: "Pearl White", luckyTime: "07:30 PM", luckyGemstone: "Natural Pearl", prediction: "Moon enhances emotional empathy and intuitive perceptions. Trust your inner compass during key family discussions.", remedies: ["Offer raw milk to Lord Shiva.", "Keep a silver coin in your wallet."] },
    Leo:         { symbol: "♌", dates: "Jul 23 - Aug 22", overall: 91, love: 85, career: 95, money: 90, health: 85, luckyNumber: 1, luckyColor: "Royal Gold", luckyTime: "12:00 PM", luckyGemstone: "Ruby (Manik)", prediction: "The Sun radiates authority and charismatic presence. Executive leaders take note of your contributions.", remedies: ["Recite Aditya Hridaya Stotram in the morning.", "Donate wheat or jaggery to the needy."] },
    Virgo:       { symbol: "♍", dates: "Aug 23 - Sep 22", overall: 78, love: 72, career: 88, money: 80, health: 90, luckyNumber: 5, luckyColor: "Navy Blue", luckyTime: "09:15 AM", luckyGemstone: "Jade / Emerald", prediction: "Meticulous organization clears backlog effortlessly. Health routines and clean diets bring immediate vitality.", remedies: ["Practice 15 minutes of Pranayama.", "Wear green or navy blue attire."] },
    Libra:       { symbol: "♎", dates: "Sep 23 - Oct 22", overall: 86, love: 94, career: 82, money: 85, health: 80, luckyNumber: 6, luckyColor: "Blush Pink", luckyTime: "06:00 PM", luckyGemstone: "Diamond / Opal", prediction: "Venus creates aesthetic harmony in social engagements. Collaborative projects move swiftly to completion.", remedies: ["Offer fragrant white flowers to Goddess Lakshmi.", "Apply sandalwood paste on forehead."] },
    Scorpio:     { symbol: "♏", dates: "Oct 23 - Nov 21", overall: 84, love: 80, career: 90, money: 85, health: 82, luckyNumber: 8, luckyColor: "Deep Maroon", luckyTime: "08:45 PM", luckyGemstone: "Red Coral", prediction: "Deep intuition helps you uncover hidden insights in ongoing financial projects. Maintain steady focus.", remedies: ["Chant 'Om Namah Shivaya' 108 times.", "Donate red lentils on Tuesdays."] },
    Sagittarius: { symbol: "♐", dates: "Nov 22 - Dec 21", overall: 94, love: 88, career: 96, money: 92, health: 88, luckyNumber: 3, luckyColor: "Saffron Yellow", luckyTime: "03:30 PM", luckyGemstone: "Yellow Sapphire (Pukhraj)", prediction: "Jupiter's auspicious aspect opens doors for higher learning, travel, and rewarding spiritual endeavors.", remedies: ["Apply saffron tilak on your forehead.", "Offer yellow flowers to Lord Vishnu."] },
    Capricorn:   { symbol: "♑", dates: "Dec 22 - Jan 19", overall: 79, love: 75, career: 92, money: 85, health: 76, luckyNumber: 8, luckyColor: "Charcoal Grey", luckyTime: "10:00 AM", luckyGemstone: "Blue Sapphire", prediction: "Saturn rewards persistence and methodical diligence. Hard work is duly recognized by senior authorities.", remedies: ["Light a mustard oil lamp under a Peepal tree.", "Help an elderly or needy person."] },
    Aquarius:    { symbol: "♒", dates: "Jan 20 - Feb 18", overall: 87, love: 85, career: 90, money: 82, health: 88, luckyNumber: 7, luckyColor: "Electric Cyan", luckyTime: "07:15 PM", luckyGemstone: "Amethyst", prediction: "Innovative solutions flow naturally. Networking with progressive minds leads to exciting future collaborations.", remedies: ["Feed birds with multigrain seeds.", "Practice mindful meditation at sunrise."] },
    Pisces:      { symbol: "♓", dates: "Feb 19 - Mar 20", overall: 89, love: 96, career: 82, money: 85, health: 85, luckyNumber: 7, luckyColor: "Aquamarine", luckyTime: "05:00 PM", luckyGemstone: "Aquamarine / Pukhraj", prediction: "Spiritual peace and artistic inspiration shine today. Compassionate gestures bring immense inner joy.", remedies: ["Offer clean water and flowers to flowing water.", "Chant Gayatri Mantra 21 times."] }
  },

  /* ── Kundli Data ───────────────────────────────────────────── */
  kundliData: {
    name: "Priya Sharma",
    dob: "24 May 1995",
    time: "10:30 AM",
    place: "Jaipur, Rajasthan",
    lagna: "Virgo",
    rashi: "Gemini",
    nakshatra: "Mrigashira",
    navamsaLagna: "Aries",
    planets: [
      { name: "Sun",     symbol: "Su", house: 9,  sign: "Capricorn",   degree: "14°32'" },
      { name: "Moon",    symbol: "Mo", house: 10, sign: "Aquarius",    degree: "08°17'" },
      { name: "Mars",    symbol: "Ma", house: 8,  sign: "Sagittarius", degree: "22°05'" },
      { name: "Mercury", symbol: "Me", house: 9,  sign: "Capricorn",   degree: "28°41'" },
      { name: "Jupiter", symbol: "Ju", house: 7,  sign: "Scorpio",     degree: "03°19'" },
      { name: "Venus",   symbol: "Ve", house: 10, sign: "Aquarius",    degree: "17°52'" },
      { name: "Saturn",  symbol: "Sa", house: 6,  sign: "Libra",       degree: "09°38'" },
      { name: "Rahu",    symbol: "Ra", house: 2,  sign: "Gemini",      degree: "11°27'" },
      { name: "Ketu",    symbol: "Ke", house: 8,  sign: "Sagittarius", degree: "11°27'" }
    ],
    doshas: [
      { name: "Mangal Dosha", present: false, severity: "None", description: "No Manglik affliction detected in Lagna or Chandra Kundli." },
      { name: "Kaal Sarp Dosha", present: true, severity: "Partial", description: "Partial Anant Kaal Sarp. Manageable through simple daily Shiva Pooja." },
      { name: "Pitra Dosha", present: false, severity: "None", description: "Ancestral planetary positions are completely benevolent." }
    ]
  }
};

/* ── Storage Manager Abstraction ───────────────────────────── */
const Storage = {
  KEY: "voratalk_prototype_state_v3",

  getState() {
    try {
      const saved = localStorage.getItem(this.KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        // Merge with default to ensure no missing keys
        return Object.assign({}, JSON.parse(JSON.stringify(DEFAULT_DATA)), parsed);
      }
    } catch (e) {
      console.warn("Could not read localStorage:", e);
    }
    return JSON.parse(JSON.stringify(DEFAULT_DATA));
  },

  saveState(dataToSave) {
    try {
      localStorage.setItem(this.KEY, JSON.stringify(dataToSave || DATA));
    } catch (e) {
      console.error("Could not write to localStorage:", e);
    }
  },

  resetDemo() {
    try {
      localStorage.removeItem(this.KEY);
    } catch (e) {}
    // Reset global DATA in memory
    for (let key in DATA) delete DATA[key];
    Object.assign(DATA, JSON.parse(JSON.stringify(DEFAULT_DATA)));
    STATE.walletBalance = DATA.currentUser.walletBalance;
    STATE.role = "user";
    this.saveState(DATA);
  }
};

/* ── Active DATA Object Initialized from Storage ──────────── */
const DATA = Storage.getState();

/* ── Active Application State ─────────────────────────────── */
const STATE = {
  role: "user", // "user" | "astrologer"
  currentScreen: "user-login",
  selectedAstrologerId: "AST-001",
  selectedConsultationType: "chat", // "chat" | "call" (STRICTLY NO VIDEO)
  selectedDuration: 15, // in minutes
  selectedDate: "Today",
  selectedTime: "10:30 AM",
  selectedBookingTopic: "Career Guidance",
  appliedCoupon: null,
  activeChatTimer: null,
  activeCallTimer: null,
  chatSecondsRemaining: 900,
  callSecondsElapsed: 0,
  isMuted: false,
  isSpeaker: false,
  selectedHoroscopeSign: "Gemini",
  consultSearchQuery: "",
  consultCategoryFilter: "All",
  consultTypeFilter: "All", // "All" | "chat" | "call"
  consultSortBy: "recommended"
};
