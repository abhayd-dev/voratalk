/* ============================================================
   AstroTalkz by vorabion — Mock Data Layer
   All data matches reference WhatsApp design screenshots exactly
   ============================================================ */

const DATA = {

  /* ── Current User ─────────────────────────────────────────── */
  currentUser: {
    id: "USR-001",
    name: "Priya Sharma",
    phone: "+91 98765 43210",
    email: "priya.sharma@gmail.com",
    dob: "24 May 1995",
    birthTime: "10:30 AM",
    birthPlace: "Jaipur, Rajasthan",
    zodiac: "Gemini",
    moonSign: "Scorpio",
    nakshatra: "Mrigashira",
    gender: "Female",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    walletBalance: 1250,
    points: 1250,
    level: 3,
    coupons: 3,
    favourites: 12,
    notificationsCount: 2
  },

  /* ── Current Astrologer (for astrologer role) ─────────────── */
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

  /* ── Astrologers ───────────────────────────────────────────── */
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
      expertise: ["Love & Relationship", "Career", "Finance", "Marriage", "Education", "Health", "Family"],
      chatPrice: 20, chatRate: 20, callRate: 30, videoRate: 40,
      status: "online", isOnline: true,
      verified: true,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80",
      bio: "Astro Arjun Sharma is a trusted name in Vedic Astrology and Numerology with 8+ years of experience. He specializes in Love, Career, Finance, Marriage and Health related solutions."
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
      expertise: ["Love", "Relationship", "Career", "Health"],
      chatPrice: 18, chatRate: 18, callRate: 28, videoRate: 38,
      status: "online", isOnline: true,
      verified: true,
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&auto=format&fit=crop&q=80",
      bio: "Astro Meera Iyer is a certified Tarot reader and Vedic astrologer with a unique approach combining ancient wisdom with modern clarity."
    },
    {
      id: "AST-003",
      name: "Astro Devdutt Ji",
      title: "Vastu • Vedic Astrology • KP Astrology",
      experience: "20+ Years Exp.",
      rating: 4.7,
      reviews: 76,
      totalConsultations: "18K+",
      languages: ["Hindi", "English"],
      expertise: ["Career", "Finance", "Health", "Vastu"],
      chatPrice: 25, chatRate: 25, callRate: 35, videoRate: 45,
      status: "offline", isOnline: false,
      verified: true,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&auto=format&fit=crop&q=80",
      bio: "Senior Vedic astrologer from Varanasi with 20+ years of experience in Vastu Shastra, Vedic Astrology, and KP Astrology."
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
      expertise: ["Love", "Marriage", "Education"],
      chatPrice: 22, chatRate: 22, callRate: 32, videoRate: 42,
      status: "online", isOnline: true,
      verified: true,
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&auto=format&fit=crop&q=80",
      bio: "Expert palmist and numerologist specializing in love, marriage compatibility, and education guidance."
    },
    {
      id: "AST-005",
      name: "Astro Raghav Verma",
      title: "Vedic Astrology",
      experience: "5 Years Exp.",
      rating: 4.6,
      reviews: 55,
      totalConsultations: "5.2K+",
      languages: ["Hindi", "English"],
      expertise: ["Career", "Finance"],
      chatPrice: 15, chatRate: 15, callRate: 22, videoRate: 30,
      status: "online", isOnline: true,
      verified: false,
      avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=300&auto=format&fit=crop&q=80",
      bio: "Young and dynamic Vedic astrologer focusing on career and financial guidance for millennials."
    }
  ],

  /* ── Bookings ──────────────────────────────────────────────── */
  bookings: [
    {
      id: "BK123456",
      astrologerId: "AST-001",
      astrologerName: "Astro Arjun Sharma",
      astrologerTitle: "Vedic Astrology • Numerology",
      astrologerAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
      type: "Audio Call",
      date: "24 May 2024, Fri",
      time: "10:30 AM",
      duration: "30 Minutes",
      amount: 600,
      ratePerMin: 20,
      topic: "Career Guidance",
      userNote: "I need guidance regarding career in data science and future opportunities.",
      status: "upcoming",
      paymentStatus: "Paid",
      bookedOn: "20 May 2024, 10:15 AM",
      paymentConfirmed: "20 May 2024, 10:16 AM",
      reminderSent: "24 May 2024, 09:00 AM"
    },
    {
      id: "BK123390",
      astrologerId: "AST-002",
      astrologerName: "Astro Meera Iyer",
      astrologerTitle: "Tarot • Vedic • Numerology",
      astrologerAvatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
      type: "Chat",
      date: "18 May 2024, Sat",
      time: "04:00 PM",
      duration: "20 Minutes",
      amount: 500,
      ratePerMin: 18,
      topic: "Love & Relationship",
      status: "completed",
      rating: 4.8
    },
    {
      id: "BK123210",
      astrologerId: "AST-003",
      astrologerName: "Astro Devdutt Ji",
      astrologerTitle: "Vastu • Vedic Astrology",
      astrologerAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80",
      type: "Audio Call",
      date: "10 May 2024, Fri",
      time: "11:00 AM",
      duration: "25 Minutes",
      amount: 400,
      ratePerMin: 25,
      topic: "General Astrology",
      status: "completed",
      rating: 4.7
    },
    {
      id: "BK123100",
      astrologerId: "AST-004",
      astrologerName: "Astro Neha Kapoor",
      astrologerTitle: "Palmistry • Numerology",
      astrologerAvatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
      type: "Chat",
      date: "02 May 2024, Thu",
      time: "07:30 PM",
      duration: "15 Minutes",
      amount: 400,
      ratePerMin: 22,
      topic: "Marriage",
      status: "completed",
      rating: 4.9
    },
    {
      id: "BK123050",
      astrologerId: "AST-005",
      astrologerName: "Astro Raghav Verma",
      astrologerTitle: "Vedic Astrology",
      astrologerAvatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80",
      type: "Audio Call",
      date: "05 May 2024, Sun",
      time: "09:00 AM",
      duration: "20 Minutes",
      amount: 200,
      status: "cancelled"
    }
  ],

  /* ── Transactions ──────────────────────────────────────────── */
  transactions: [
    { id: "TXN-001", date: "22 May 2025", time: "10:30 AM", type: "topup", method: "UPI", title: "Wallet Top Up", amount: 1000, isCredit: true, status: "Success" },
    { id: "TXN-002", date: "22 May 2025", time: "09:15 AM", type: "chat", title: "Chat Consultation", amount: 300, isCredit: false, status: "Completed" },
    { id: "TXN-003", date: "22 May 2025", time: "08:20 AM", type: "call", title: "Audio Call Consultation", amount: 600, isCredit: false, status: "Completed" },
    { id: "TXN-004", date: "21 May 2025", time: "06:45 PM", type: "topup", method: "UPI", title: "Wallet Top Up", amount: 500, isCredit: true, status: "Success" },
    { id: "TXN-005", date: "21 May 2025", time: "05:10 PM", type: "chat", title: "Chat Consultation", amount: 250, isCredit: false, status: "Completed" },
    { id: "TXN-006", date: "20 May 2025", time: "11:30 AM", type: "topup", method: "Card", title: "Wallet Top Up", amount: 750, isCredit: true, status: "Success" },
    { id: "TXN-007", date: "20 May 2025", time: "10:00 AM", type: "call", title: "Audio Call Consultation", amount: 500, isCredit: false, status: "Completed" },
    { id: "TXN-008", date: "19 May 2025", time: "07:40 AM", type: "chat", title: "Chat Consultation", amount: 200, isCredit: false, status: "Completed" }
  ],

  /* ── Daily Horoscope ───────────────────────────────────────── */
  horoscopes: {
    Aries:       { symbol: "♈", dates: "March 21 - April 19", overall: 78, love: 4, career: 4, money: 2.5, health: 4, luckyNumber: 9, luckyColor: "Red", luckyTime: "10:30 AM", luckyGemstone: "Ruby", prediction: "Your energy is high and motivation is strong. It's a great time to start new projects or take bold steps in your career. In relationships, communication will bring you closer to your loved ones. Take care of your health by balancing work and rest.", positiveDay: "A positive day ahead!", summary: "Today brings opportunities for growth and meaningful connections. Stay confident and focus on your goals.", remedies: ["Offer water to the Sun God in the morning.", "Chant \"Om Surya Namah\" 11 times daily.", "Donate red lentils on Tuesday."] },
    Taurus:      { symbol: "♉", dates: "April 20 - May 20", overall: 82, love: 4.5, career: 3.5, money: 4, health: 3.5, luckyNumber: 6, luckyColor: "Green", luckyTime: "02:00 PM", luckyGemstone: "Emerald", prediction: "Financial matters look promising today. Venus blesses your relationships with warmth and affection. A good day to plan for the future and make important decisions.", positiveDay: "A prosperous day ahead!", summary: "Financial blessings and romantic warmth define your day. Trust your instincts.", remedies: ["Wear green on Friday.", "Donate white sweets on Friday.", "Chant \"Om Shukraya Namah\" 108 times."] },
    Gemini:      { symbol: "♊", dates: "May 21 - June 20", overall: 75, love: 3.5, career: 4.5, money: 3, health: 4, luckyNumber: 5, luckyColor: "Yellow", luckyTime: "11:00 AM", luckyGemstone: "Citrine", prediction: "Mercury's favorable position boosts your communication skills. Great day for networking, presentations, and intellectual pursuits. Be careful with finances — avoid impulsive spending.", positiveDay: "A communicative day ahead!", summary: "Your wit and charm are at their peak. Use them wisely in professional settings.", remedies: ["Read or write something creative.", "Wear yellow clothes on Wednesday.", "Donate green vegetables on Wednesday."] },
    Cancer:      { symbol: "♋", dates: "June 21 - July 22", overall: 80, love: 4.5, career: 3, money: 3.5, health: 4.5, luckyNumber: 2, luckyColor: "Silver", luckyTime: "07:30 PM", luckyGemstone: "Pearl", prediction: "Emotional intelligence guides you today. Family matters take center stage. Your intuition is sharp — trust it when making decisions. Home and personal life bring joy.", positiveDay: "A nurturing day ahead!", summary: "Family bonds strengthen today. Your sensitivity is your greatest asset.", remedies: ["Offer milk to Lord Shiva.", "Wear white or silver on Monday.", "Donate rice on Monday."] },
    Leo:         { symbol: "♌", dates: "July 23 - August 22", overall: 88, love: 4, career: 5, money: 4.5, health: 3.5, luckyNumber: 1, luckyColor: "Gold", luckyTime: "12:00 PM", luckyGemstone: "Ruby", prediction: "The Sun shines brightly on you today. Leadership opportunities arise and recognition is on the way. Your confidence inspires others. Financial gains likely through creative pursuits.", positiveDay: "A magnificent day ahead!", summary: "This is your moment to shine. Step into leadership with confidence.", remedies: ["Offer red flowers to the Sun.", "Wear gold or saffron on Sunday.", "Donate wheat and jaggery on Sunday."] },
    Virgo:       { symbol: "♍", dates: "August 23 - September 22", overall: 72, love: 3, career: 4, money: 3.5, health: 5, luckyNumber: 5, luckyColor: "Navy Blue", luckyTime: "09:00 AM", luckyGemstone: "Jade", prediction: "Focus on health and daily routines today. Mercury helps you organize and optimize. Be detail-oriented at work. Relationships require patience — avoid overthinking.", positiveDay: "A productive day ahead!", summary: "Organization and precision lead to success today. Your analytical mind is your superpower.", remedies: ["Practice yoga or meditation.", "Donate green moong dal on Wednesday.", "Keep your workspace clean and organized."] },
    Libra:       { symbol: "♎", dates: "September 23 - October 22", overall: 85, love: 5, career: 3.5, money: 4, health: 3.5, luckyNumber: 6, luckyColor: "Pink", luckyTime: "06:00 PM", luckyGemstone: "Opal", prediction: "Venus blesses your relationships today. A perfect day for romance, social events, and creative projects. Balance is key — don't neglect work while enjoying life's pleasures.", positiveDay: "A harmonious day ahead!", summary: "Love and beauty surround you. Create harmony in all your relationships today.", remedies: ["Wear pink or white on Friday.", "Offer white flowers to Goddess Lakshmi.", "Donate white sweets on Friday."] },
    Scorpio:     { symbol: "♏", dates: "October 23 - November 21", overall: 76, love: 3.5, career: 4.5, money: 4, health: 3, luckyNumber: 8, luckyColor: "Dark Red", luckyTime: "08:00 PM", luckyGemstone: "Coral", prediction: "Deep transformation is underway. Your investigative nature helps uncover hidden truths. Professional opportunities arise from unexpected sources. Be cautious in emotional matters.", positiveDay: "A transformative day ahead!", summary: "Depth and intensity drive your day. Trust the process of change.", remedies: ["Offer water to the Peepal tree on Tuesday.", "Chant \"Om Namah Shivaya\" 108 times.", "Wear dark red on Tuesday."] },
    Sagittarius: { symbol: "♐", dates: "November 22 - December 21", overall: 90, love: 4, career: 4.5, money: 5, health: 4, luckyNumber: 3, luckyColor: "Purple", luckyTime: "03:00 PM", luckyGemstone: "Yellow Sapphire", prediction: "Jupiter's blessings make this an excellent day. Opportunities for growth in career and finances are plentiful. Your optimism and adventurous spirit attract good luck. Excellent day for spiritual pursuits.", positiveDay: "An auspicious day ahead!", summary: "Fortune favors the bold today. Expand your horizons without hesitation.", remedies: ["Offer yellow flowers to Lord Vishnu.", "Wear yellow on Thursday.", "Donate yellow gram on Thursday."] },
    Capricorn:   { symbol: "♑", dates: "December 22 - January 19", overall: 73, love: 3, career: 5, money: 4, health: 3.5, luckyNumber: 8, luckyColor: "Brown", luckyTime: "10:00 AM", luckyGemstone: "Blue Sapphire", prediction: "Saturn rewards your disciplined efforts today. Career achievements are possible through hard work. Financial prudence is advised. Emotional support from family helps maintain balance.", positiveDay: "A steady day ahead!", summary: "Your dedication and perseverance pay off. Stay focused on long-term goals.", remedies: ["Light sesame oil lamp on Saturday.", "Donate black sesame on Saturday.", "Wear blue or black on Saturday."] },
    Aquarius:    { symbol: "♒", dates: "January 20 - February 18", overall: 81, love: 4, career: 4, money: 3.5, health: 4.5, luckyNumber: 7, luckyColor: "Electric Blue", luckyTime: "07:00 PM", luckyGemstone: "Amethyst", prediction: "Innovative ideas flow freely today. Your humanitarian spirit connects you with like-minded people. Technology and modern solutions work in your favor. Social causes bring fulfillment.", positiveDay: "An innovative day ahead!", summary: "Think outside the box today. Your unique perspective inspires those around you.", remedies: ["Donate blue clothes to the needy.", "Practice mindfulness or breathwork.", "Wear blue on Saturday."] },
    Pisces:      { symbol: "♓", dates: "February 19 - March 20", overall: 84, love: 5, career: 3, money: 3.5, health: 4, luckyNumber: 7, luckyColor: "Sea Green", luckyTime: "05:00 PM", luckyGemstone: "Aquamarine", prediction: "Your intuition and creativity are heightened today. Artistic and spiritual pursuits bring joy. Be careful in financial matters — emotions may cloud judgment. Love and compassion guide your interactions.", positiveDay: "A dreamy day ahead!", summary: "Go with the flow of your intuition. Creative expression brings you peace today.", remedies: ["Offer flowers to flowing water.", "Wear sea green or yellow on Thursday.", "Meditate near water for clarity."] }
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
      { name: "Sun",     symbol: "Su", house: 9,  sign: "Capricorn",  degree: "14°32'" },
      { name: "Moon",    symbol: "Mo", house: 10, sign: "Aquarius",   degree: "08°17'" },
      { name: "Mars",    symbol: "Ma", house: 8,  sign: "Sagittarius", degree: "22°05'" },
      { name: "Mercury", symbol: "Me", house: 9,  sign: "Capricorn",  degree: "28°41'" },
      { name: "Jupiter", symbol: "Ju", house: 7,  sign: "Scorpio",    degree: "03°19'" },
      { name: "Venus",   symbol: "Ve", house: 10, sign: "Aquarius",   degree: "17°52'" },
      { name: "Saturn",  symbol: "Sa", house: 6,  sign: "Libra",      degree: "09°38'" },
      { name: "Rahu",    symbol: "Ra", house: 2,  sign: "Gemini",     degree: "11°27'" },
      { name: "Ketu",    symbol: "Ke", house: 8,  sign: "Sagittarius", degree: "11°27'" }
    ],
    houses: [
      { num: 1, sign: "Virgo",       lord: "Mercury" },
      { num: 2, sign: "Libra",       lord: "Venus" },
      { num: 3, sign: "Scorpio",     lord: "Mars" },
      { num: 4, sign: "Sagittarius", lord: "Jupiter" },
      { num: 5, sign: "Capricorn",   lord: "Saturn" },
      { num: 6, sign: "Aquarius",    lord: "Saturn" },
      { num: 7, sign: "Pisces",      lord: "Jupiter" },
      { num: 8, sign: "Aries",       lord: "Mars" },
      { num: 9, sign: "Taurus",      lord: "Venus" },
      { num: 10, sign: "Gemini",     lord: "Mercury" },
      { num: 11, sign: "Cancer",     lord: "Moon" },
      { num: 12, sign: "Leo",        lord: "Sun" }
    ],
    /* North Indian Kundli grid — planetary positions per house cell */
    northChart: {
      1: ["La"], 2: ["Ra"], 3: [], 4: [], 5: ["Su","Me"], 6: ["Mo","Ve"],
      7: [], 8: ["Sa"], 9: ["Ju"], 10: [], 11: ["Ma","Ke"], 12: []
    },
    doshas: [
      { name: "Mangal Dosha", present: false, severity: null, description: "No Mangal Dosha detected in your birth chart. You are free from Mars-related marital afflictions." },
      { name: "Kaal Sarp Dosha", present: true, severity: "Partial", description: "Partial Kaal Sarp Dosha detected. All planets are partially between Rahu-Ketu axis. Minor obstacles in life path but manageable with remedies." },
      { name: "Pitra Dosha", present: false, severity: null, description: "No Pitra Dosha detected. Ancestral blessings are favorable for your life journey." }
    ],
    currentDasha: {
      mahadasha: { planet: "Jupiter", startDate: "15 Mar 2019", endDate: "15 Mar 2035" },
      antardasha: { planet: "Saturn", startDate: "12 Aug 2023", endDate: "18 Jun 2026" },
      pratiantardasha: { planet: "Mercury", startDate: "01 Jan 2025", endDate: "18 Jun 2025" }
    }
  },

  /* ── Products / Astrology Store ────────────────────────────── */
  products: [
    {
      id: "PRD-001",
      name: "Natural Amethyst Crystal Bracelet",
      category: "Bracelets",
      subcategory: "Gemstone Bracelets",
      price: 1299,
      originalPrice: 2499,
      discount: "48% OFF",
      rating: 4.8,
      reviews: 342,
      sold: "2.3K",
      significance: "Enhances intuition, promotes peace, and balances chakras. Ideal for Aquarius and Pisces.",
      material: "Natural Amethyst, Elastic Cord",
      sizes: ["Small (6mm)", "Medium (8mm)", "Large (10mm)"],
      stock: true,
      images: [
        "https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?w=400&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&auto=format&fit=crop&q=80"
      ],
      tags: ["Amethyst", "Healing", "Aquarius", "Pisces"]
    },
    {
      id: "PRD-002",
      name: "5 Mukhi Rudraksha Mala (108 Beads)",
      category: "Rudraksha",
      subcategory: "Rudraksha Mala",
      price: 2199,
      originalPrice: 3999,
      discount: "45% OFF",
      rating: 4.9,
      reviews: 821,
      sold: "5.6K",
      significance: "5 Mukhi Rudraksha is ruled by Lord Shiva. Brings peace of mind, health and liberation. Suitable for all zodiac signs.",
      material: "Natural Nepal Rudraksha, Silk Thread",
      sizes: ["Standard"],
      stock: true,
      images: [
        "https://images.unsplash.com/photo-1611591437268-b0bc4a39c2e5?w=400&auto=format&fit=crop&q=80"
      ],
      tags: ["Rudraksha", "Shiva", "Peace", "All Signs"]
    },
    {
      id: "PRD-003",
      name: "Navratna Gold-Plated Ring",
      category: "Rings",
      subcategory: "Navratna Rings",
      price: 3499,
      originalPrice: 6999,
      discount: "50% OFF",
      rating: 4.7,
      reviews: 156,
      sold: "987",
      significance: "Nine gemstones representing nine planets. Neutralizes malefic effects of all planets and brings all-round prosperity.",
      material: "Gold-Plated 925 Silver, 9 Natural Gemstones",
      sizes: ["Size 6", "Size 7", "Size 8", "Size 9", "Size 10", "Size 11", "Size 12"],
      stock: true,
      images: [
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&auto=format&fit=crop&q=80"
      ],
      tags: ["Navratna", "All Planets", "Prosperity", "Gold"]
    },
    {
      id: "PRD-004",
      name: "Sri Yantra Copper Plate",
      category: "Yantra",
      subcategory: "Yantra",
      price: 899,
      originalPrice: 1799,
      discount: "50% OFF",
      rating: 4.9,
      reviews: 634,
      sold: "4.1K",
      significance: "Sri Yantra is the most powerful Yantra for attracting wealth, success, and positive energy. Place in puja room facing East.",
      material: "Pure Copper, Hand-Engraved",
      sizes: ["3x3 inch", "6x6 inch", "9x9 inch"],
      stock: true,
      images: [
        "https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?w=400&auto=format&fit=crop&q=80"
      ],
      tags: ["Yantra", "Wealth", "Lakshmi", "Copper"]
    },
    {
      id: "PRD-005",
      name: "Emerald (Panna) Gemstone Ring",
      category: "Rings",
      subcategory: "Gemstone Rings",
      price: 4999,
      originalPrice: 9999,
      discount: "50% OFF",
      rating: 4.8,
      reviews: 289,
      sold: "1.2K",
      significance: "Emerald enhances Mercury's power. Ideal for Gemini and Virgo. Improves intelligence, business acumen and communication.",
      material: "Natural Emerald, 925 Silver",
      sizes: ["Size 6", "Size 7", "Size 8", "Size 9", "Size 10", "Size 11"],
      stock: true,
      images: [
        "https://images.unsplash.com/photo-1611591437268-b0bc4a39c2e5?w=400&auto=format&fit=crop&q=80"
      ],
      tags: ["Emerald", "Mercury", "Gemini", "Virgo"]
    },
    {
      id: "PRD-006",
      name: "Gemstone Kada — Tiger's Eye",
      category: "Kada",
      subcategory: "Gemstone Kada",
      price: 1599,
      originalPrice: 2999,
      discount: "47% OFF",
      rating: 4.6,
      reviews: 98,
      sold: "678",
      significance: "Tiger's Eye Kada protects from evil eye and negative energies. Boosts confidence, courage and willpower. Good for Leo and Capricorn.",
      material: "Natural Tiger's Eye, Stainless Steel",
      sizes: ["Small", "Medium", "Large"],
      stock: true,
      images: [
        "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&auto=format&fit=crop&q=80"
      ],
      tags: ["Tiger Eye", "Protection", "Leo", "Capricorn"]
    }
  ],

  /* ── Cart ──────────────────────────────────────────────────── */
  cart: [],

  /* ── Orders ────────────────────────────────────────────────── */
  orders: [
    {
      id: "ORD-7841",
      date: "18 May 2025",
      item: "Natural Amethyst Crystal Bracelet",
      image: "https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?w=100&auto=format&fit=crop&q=80",
      amount: 1299,
      status: "delivered",
      paymentStatus: "Paid",
      deliveryDate: "21 May 2025",
      trackingId: "DTDC123456789"
    },
    {
      id: "ORD-7652",
      date: "10 May 2025",
      item: "Sri Yantra Copper Plate",
      image: "https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?w=100&auto=format&fit=crop&q=80",
      amount: 899,
      status: "in_transit",
      paymentStatus: "Paid",
      expectedDelivery: "25 May 2025",
      trackingId: "BLUEDART98765"
    },
    {
      id: "ORD-7401",
      date: "28 Apr 2025",
      item: "5 Mukhi Rudraksha Mala",
      image: "https://images.unsplash.com/photo-1611591437268-b0bc4a39c2e5?w=100&auto=format&fit=crop&q=80",
      amount: 2199,
      status: "delivered",
      paymentStatus: "Paid",
      deliveryDate: "03 May 2025",
      trackingId: "DTDC789456123"
    }
  ],

  /* ── Astrologer Consultations (for astrologer side) ────────── */
  astroConsultations: [
    {
      id: "CONS-12548",
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
      clientQuestion: "I am facing confusion in my career. Will I get a good job opportunity this year? Also tell me about my financial stability and future.",
      type: "Chat",
      date: "22 May 2025",
      time: "12:30 PM",
      duration: "30 Minutes",
      amount: 250,
      status: "upcoming",
      startsIn: "00:42:15",
      astroNotes: "Focus on career and finance. Check dasha periods. Provide remedies for mental peace."
    },
    {
      id: "CONS-12547",
      clientName: "Amit Malhotra",
      clientAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
      clientType: "New User",
      clientDob: "03 Sep 1988",
      clientBirthTime: "07:15 AM",
      clientBirthPlace: "Mumbai, India",
      clientLanguages: ["Hindi"],
      type: "Audio Call",
      date: "22 May 2025",
      time: "02:00 PM",
      duration: "30 Minutes",
      amount: 500,
      status: "upcoming",
      astroNotes: ""
    },
    {
      id: "CONS-12546",
      clientName: "Neha Joshi",
      clientAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&auto=format&fit=crop&q=80",
      clientType: "New User",
      clientDob: "19 Feb 1998",
      clientBirthTime: "02:30 PM",
      clientBirthPlace: "Pune, India",
      clientLanguages: ["Hindi"],
      type: "Audio Call",
      date: "22 May 2025",
      time: "04:30 PM",
      duration: "30 Minutes",
      amount: 700,
      status: "upcoming",
      astroNotes: ""
    },
    {
      id: "CONS-12540",
      clientName: "Karan Mehta",
      clientAvatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=150&auto=format&fit=crop&q=80",
      clientType: "Returning User",
      type: "Chat",
      date: "Yesterday",
      time: "06:30 PM",
      duration: "20 Minutes",
      amount: 250,
      status: "completed",
      clientRating: 5.0
    },
    {
      id: "CONS-12535",
      clientName: "Pooja Desai",
      clientAvatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80",
      clientType: "Returning User",
      type: "Audio Call",
      date: "20 May 2025",
      time: "08:00 PM",
      duration: "25 Minutes",
      amount: 500,
      status: "completed",
      clientRating: 5.0
    }
  ],

  /* ── Astro AI Hardcoded Responses ──────────────────────────── */
  astroAIResponses: {
    career: {
      question: "How will my career be this year?",
      response: "Based on your birth chart, Jupiter transiting your 10th house creates exceptional career opportunities in 2025. The period from August to November looks particularly promising for promotions or job changes. Your 10th house lord is strong, indicating recognition from superiors. I recommend avoiding major career shifts before June. Focus on upskilling during this period — it will pay dividends in the second half of the year. Lucky days for professional meetings: Monday and Thursday."
    },
    love: {
      question: "What about my love life?",
      response: "Venus, your relationship planet, is very favorable in your 7th house right now. Singles may meet a significant person between May and August 2025 — likely through work or social circles. For those in relationships, this is an excellent period to deepen commitment. The month of October brings a romantic high point. Be cautious of misunderstandings during Mercury retrograde in September. Your soulmate connection is stronger when you are authentic and open-hearted."
    },
    finance: {
      question: "Is this a good time to invest money?",
      response: "Your 2nd and 11th houses show favorable planetary positions for financial gains in mid-2025. Jupiter's aspect on your income house suggests unexpected monetary gains. However, Saturn advises caution — avoid speculative investments or cryptocurrency until October 2025. Real estate looks favorable from July onwards. Mutual funds and fixed deposits are your best bets right now. Keep 20% of your income as emergency savings. Avoid lending money in the next 3 months."
    },
    marriage: {
      question: "When will I get married?",
      response: "Your 7th house lord Venus is currently in a beneficial position. The planetary combinations suggest marriage prospects are strong between late 2025 and early 2026. Jupiter's transit activates your marriage house from October 2025, creating ideal conditions for a union. If you are already in a relationship, this period is auspicious to take the next step. Family introductions or matchmaking events in August-September 2025 could lead to your partner. Chant \"Om Katyayani\" mantra to accelerate this blessing."
    },
    moon: {
      question: "What does my Moon sign mean?",
      response: "Your Moon is placed in Scorpio, making you deeply intuitive, emotionally intense, and highly perceptive. Scorpio Moon people have an extraordinary ability to read people's true motives and hidden feelings. You process emotions deeply and privately — you rarely show vulnerability to the outside world. Your loyalty is fierce and your love is transformative. Challenges arise from jealousy and a tendency to hold grudges. Meditation and journaling help you process the emotional depth you carry. Your greatest strength is resilience — you rise from every setback stronger."
    },
    strengths: {
      question: "What are my strengths and weaknesses?",
      response: "Strengths from your chart: Your Virgo Lagna gives you exceptional analytical ability, attention to detail, and service orientation. Jupiter in your 7th house blesses you with wisdom in relationships and diplomacy. Mercury's strength makes you an excellent communicator and problem-solver. Weaknesses to work on: Perfectionism can lead to procrastination. Overthinking, especially in emotional matters, can create unnecessary anxiety. Saturn's position suggests you are too self-critical. Practice self-compassion. Your greatest gift is your intelligence — use it to build, not to doubt yourself."
    }
  },

  /* ── Saved Astrologers (for user profile) ──────────────────── */
  savedAstrologers: ["AST-001", "AST-002", "AST-003", "AST-004"],

  /* ── Store Categories ──────────────────────────────────────── */
  storeCategories: [
    { id: "all",       label: "All",        icon: "bi-grid-fill" },
    { id: "rings",     label: "Rings",      icon: "bi-circle" },
    { id: "bracelets", label: "Bracelets",  icon: "bi-link-45deg" },
    { id: "rudraksha", label: "Rudraksha",  icon: "bi-flower2" },
    { id: "yantra",    label: "Yantra",     icon: "bi-hexagon-fill" },
    { id: "kada",      label: "Kada",       icon: "bi-shield-fill" }
  ]
};

/* ── State ─────────────────────────────────────────────────── */
const STATE = {
  role: "user",               // "user" | "astrologer"
  currentScreen: "splash",
  currentAstrologerId: null,
  currentProductId: null,
  currentBookingId: null,
  currentConsultId: null,
  selectedTopup: 500,
  selectedHoroscopeSign: "Aries",
  chatMessages: [],
  astroAIMessages: [],
  liveConsultMessages: [],
  cartItems: [...DATA.cart],
  callActive: false,
  callSeconds: 0,
  callTimer: null,
  onboardingStep: 0,
  astroOnboardingStep: 0,
  storeCategory: "all",
  walletBalance: DATA.currentUser.walletBalance
};
