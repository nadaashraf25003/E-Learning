export const Coursers = [
 {
    id: 1,
    courseDetainID: 101,
    name: "Web Development Bootcamp",
    courseImg: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    description: "Master HTML, CSS, JavaScript and React from scratch. Build real-world projects.",
    detailedDescription: "This comprehensive bootcamp takes you from zero to hero in web development. You'll learn HTML5, CSS3, modern JavaScript (ES6+), React.js, Node.js, and MongoDB. By the end, you'll build 10+ real-world projects including a full-stack e-commerce application and a social media platform.",
    duration: "4 Months",
    category: "Development",
    instructor: "Alex Johnson",
    instructorImg: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    instructorBio: "Senior Software Engineer with 8+ years of experience. Former Google engineer and startup founder. Taught over 50,000 students worldwide.",
    rating: 4.8,
    reviews: 1250,
    students: 12500,
    oldPrice: "$199",
    newPrice: "$149",
    level: "Beginner",
    lectures: 48,
    quizzes: 24,
    assignments: 15,
    certificate: true,
    language: "English",
    subtitles: ["English", "Spanish", "French"],
    lastUpdated: "November 2023",
    
    // Course curriculum
    curriculum: [
      {
        module: 1,
        title: "HTML & CSS Fundamentals",
        lessons: 12,
        topics: ["HTML5 Structure", "CSS3 Styling", "Responsive Design", "Flexbox & Grid"]
      },
      {
        module: 2,
        title: "JavaScript Mastery",
        lessons: 16,
        topics: ["ES6+ Features", "DOM Manipulation", "Async JavaScript", "API Integration"]
      },
      {
        module: 3,
        title: "React & Modern Frontend",
        lessons: 14,
        topics: ["React Components", "State Management", "Hooks", "Context API"]
      },
      {
        module: 4,
        title: "Backend with Node.js",
        lessons: 6,
        topics: ["Express.js", "MongoDB", "Authentication", "REST APIs"]
      }
    ],
    
    // Requirements
    requirements: [
      "Basic computer knowledge",
      "No programming experience needed",
      "A computer with internet access",
      "Willingness to learn and practice"
    ],
    
    // What you'll learn
    learningOutcomes: [
      "Build responsive websites with HTML & CSS",
      "Master JavaScript fundamentals and advanced concepts",
      "Create interactive web applications with React",
      "Develop RESTful APIs with Node.js and Express",
      "Deploy applications to cloud platforms",
      "Work with databases and authentication"
    ],
    
    // Reviews
    reviewsList: [
      {
        id: 1,
        reviewer: "Sarah M.",
        rating: 5,
        date: "2 weeks ago",
        comment: "Excellent course! The instructor explains complex concepts in a very simple way. The projects were challenging but rewarding.",
        reviewerImg: "https://images.unsplash.com/photo-1494790108755-2616b786d4d5"
      },
      {
        id: 2,
        reviewer: "Michael T.",
        rating: 4,
        date: "1 month ago",
        comment: "Great content, but some sections could use more examples. Overall, very valuable course for beginners.",
        reviewerImg: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
      },
      {
        id: 3,
        reviewer: "Emma R.",
        rating: 5,
        date: "3 months ago",
        comment: "This course helped me land my first web developer job! The portfolio projects were exactly what employers were looking for.",
        reviewerImg: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e"
      }
    ]
  },
  {
    id: 2,
    courseDetainID: 102,
    name: "Data Science Fundamentals",
    courseImg: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    description: "Learn Python, Pandas, NumPy and Machine Learning basics for data analysis.",
    duration: "6 Months",
    category: "Data Science",
    instructor: "Dr. Sarah Chen",
    instructorImg: "https://images.unsplash.com/photo-1494790108755-2616b786d4d5",
    rating: 4.9,
    students: 8900,
    oldPrice: "$299",
    newPrice: "$249",
    level: "Intermediate"
  },
  {
    id: 3,
    courseDetainID: 103,
    name: "Mobile App Development with Flutter",
    courseImg: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
    description: "Build cross-platform iOS and Android apps using Flutter and Dart.",
    duration: "3 Months",
    category: "Mobile Development",
    instructor: "Michael Rodriguez",
    instructorImg: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    rating: 4.7,
    students: 7600,
    oldPrice: "$179",
    newPrice: "$129",
    level: "Intermediate"
  },
  {
    id: 4,
    courseDetainID: 104,
    name: "UI/UX Design Masterclass",
    courseImg: "https://images.unsplash.com/photo-1561070791-2526d30994b5",
    description: "Learn user-centered design, wireframing, prototyping and Figma skills.",
    duration: "3 Months",
    category: "Design",
    instructor: "Emma Wilson",
    instructorImg: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e",
    rating: 4.8,
    students: 11200,
    oldPrice: "$189",
    newPrice: "$139",
    level: "Beginner"
  },
  {
    id: 5,
    courseDetainID: 105,
    name: "Digital Marketing Strategy",
    courseImg: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    description: "Master SEO, social media marketing, Google Ads and content strategy.",
    duration: "2 Months",
    category: "Marketing",
    instructor: "David Kim",
    instructorImg: "https://images.unsplash.com/photo-1507591064344-4c6ce005-128",
    rating: 4.6,
    students: 6800,
    oldPrice: "$159",
    newPrice: "$119",
    level: "Beginner"
  },
  {
    id: 6,
    courseDetainID: 106,
    name: "Cybersecurity Essentials",
    courseImg: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
    description: "Learn network security, encryption, ethical hacking and threat analysis.",
    duration: "5 Months",
    category: "Security",
    instructor: "Robert Miller",
    instructorImg: "https://images.unsplash.com/photo-1506919258185-6078bba55d2a",
    rating: 4.9,
    students: 5400,
    oldPrice: "$279",
    newPrice: "$229",
    level: "Advanced"
  },
  {
    id: 7,
    courseDetainID: 107,
    name: "Python for AI and Machine Learning",
    courseImg: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
    description: "Advanced Python programming for artificial intelligence applications.",
    duration: "4 Months",
    category: "AI/ML",
    instructor: "Dr. Lisa Wang",
    instructorImg: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
    rating: 4.9,
    students: 9500,
    oldPrice: "$249",
    newPrice: "$199",
    level: "Intermediate"
  },
  {
    id: 8,
    courseDetainID: 108,
    name: "Business Analytics with Excel & Power BI",
    courseImg: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    description: "Data visualization, dashboard creation and business intelligence tools.",
    duration: "2 Months",
    category: "Business",
    instructor: "James Wilson",
    instructorImg: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    rating: 4.7,
    students: 7200,
    oldPrice: "$149",
    newPrice: "$99",
    level: "Beginner"
  },
  {
    id: 9,
    courseDetainID: 109,
    name: "iOS Development with Swift",
    courseImg: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
    description: "Build native iOS applications using Swift and SwiftUI frameworks.",
    duration: "4 Months",
    category: "Mobile Development",
    instructor: "Sophia Lee",
    instructorImg: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    rating: 4.8,
    students: 6100,
    oldPrice: "$219",
    newPrice: "$179",
    level: "Intermediate"
  },
  {
    id: 10,
    courseDetainID: 110,
    name: "Blockchain Development",
    courseImg: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb",
    description: "Learn Solidity, smart contracts, and build decentralized applications.",
    duration: "5 Months",
    category: "Blockchain",
    instructor: "Carlos Martinez",
    instructorImg: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    rating: 4.8,
    students: 4200,
    oldPrice: "$299",
    newPrice: "$249",
    level: "Advanced"
  }
];

export const creators = [
  {
    id: 1,
    name: "Dr. Sarah Chen",
    courseImg: "https://images.unsplash.com/photo-1494790108755-2616b786d4d5",
    description: "Data Science expert with 10+ years in AI research and teaching.",
    courses: 15,
    students: 45000,
    rating: 4.9
  },
  {
    id: 2,
    name: "Alex Johnson",
    courseImg: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    description: "Full-stack developer specializing in modern web technologies.",
    courses: 12,
    students: 68000,
    rating: 4.8
  },
  {
    id: 3,
    name: "Emma Wilson",
    courseImg: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e",
    description: "Award-winning UI/UX designer with Fortune 500 company experience.",
    courses: 8,
    students: 52000,
    rating: 4.9
  },
  {
    id: 4,
    name: "Michael Rodriguez",
    courseImg: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    description: "Mobile app developer creating popular apps with millions of downloads.",
    courses: 10,
    students: 38000,
    rating: 4.7
  },
  {
    id: 5,
    name: "Dr. Lisa Wang",
    courseImg: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
    description: "AI researcher and professor specializing in machine learning algorithms.",
    courses: 7,
    students: 29000,
    rating: 4.9
  },
  {
    id: 6,
    name: "David Kim",
    courseImg: "https://images.unsplash.com/photo-1507591064344-4c6ce005-128",
    description: "Digital marketing strategist helping businesses grow online.",
    courses: 14,
    students: 56000,
    rating: 4.6
  }
];

export const literaturecourse = [
  {
    id: 1,
    courseDetainID: 201,
    courseImg: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c",
    description: "Explore the complete works of William Shakespeare",
    newPrice: "$89",
    duration: "8 weeks",
    instructor: "Prof. Elizabeth Bennett"
  },
  {
    id: 2,
    courseDetainID: 202,
    courseImg: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6",
    description: "American Literature from colonial times to postmodernism",
    newPrice: "$99",
    duration: "10 weeks",
    instructor: "Dr. Henry Thoreau"
  },
  {
    id: 3,
    courseDetainID: 203,
    courseImg: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    description: "Modern poetry analysis and creative writing workshop",
    newPrice: "$79",
    duration: "6 weeks",
    instructor: "Maya Angelou"
  },
  {
    id: 4,
    courseDetainID: 204,
    courseImg: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
    description: "World literature classics from different cultures",
    newPrice: "$109",
    duration: "12 weeks",
    instructor: "Prof. Carlos Fuentes"
  },
  {
    id: 5,
    courseDetainID: 205,
    courseImg: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570",
    description: "Science fiction literature and futurism studies",
    newPrice: "$94",
    duration: "8 weeks",
    instructor: "Arthur Clarke"
  },
  {
    id: 6,
    courseDetainID: 206,
    courseImg: "https://images.unsplash.com/photo-1545239351-ef35f43d514b",
    description: "Fiction and non-fiction creative writing techniques",
    newPrice: "$119",
    duration: "10 weeks",
    instructor: "Stephen King"
  },
  // Add more courses to test pagination
  {
    id: 7,
    courseDetainID: 207,
    courseImg: "https://images.unsplash.com/photo-1519692933481-e162a57d6721",
    description: "Victorian Literature and Social Context",
    newPrice: "$95",
    duration: "9 weeks",
    instructor: "Prof. Victoria Bennett"
  },
  {
    id: 8,
    courseDetainID: 208,
    courseImg: "https://images.unsplash.com/photo-1532012197267-da84d127e765",
    description: "Romantic Poetry and Nature",
    newPrice: "$85",
    duration: "7 weeks",
    instructor: "William Wordsworth"
  },
  {
    id: 9,
    courseDetainID: 209,
    courseImg: "https://images.unsplash.com/photo-1524578271613-d550eacf6090",
    description: "Mythology in Modern Literature",
    newPrice: "$110",
    duration: "10 weeks",
    instructor: "Dr. Joseph Campbell"
  },
  {
    id: 10,
    courseDetainID: 210,
    courseImg: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0",
    description: "Postcolonial Literature Studies",
    newPrice: "$120",
    duration: "12 weeks",
    instructor: "Prof. Chinua Achebe"
  },
  {
    id: 11,
    courseDetainID: 211,
    courseImg: "https://images.unsplash.com/photo-1519682337058-a94d519337bc",
    description: "Latin American Boom Literature",
    newPrice: "$105",
    duration: "11 weeks",
    instructor: "Gabriel Garcia Marquez"
  },
  {
    id: 12,
    courseDetainID: 212,
    courseImg: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
    description: "Classical Greek Tragedy",
    newPrice: "$98",
    duration: "8 weeks",
    instructor: "Prof. Aristotle"
  },
  {
    id: 13,
    courseDetainID: 213,
    courseImg: "https://images.unsplash.com/photo-1485322551133-3a4c27a9d925",
    description: "Medieval Literature and Chaucer",
    newPrice: "$88",
    duration: "8 weeks",
    instructor: "Geoffrey Chaucer"
  },
  {
    id: 14,
    courseDetainID: 214,
    courseImg: "https://images.unsplash.com/photo-1516979187457-637abb4f9353",
    description: "African American Literature",
    newPrice: "$115",
    duration: "10 weeks",
    instructor: "Toni Morrison"
  },
  {
    id: 15,
    courseDetainID: 215,
    courseImg: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
    description: "Russian Literature Classics",
    newPrice: "$125",
    duration: "12 weeks",
    instructor: "Leo Tolstoy"
  }
];

export const nextlesson = [
  {
    id: 1,
    courseDetainID: 101,
    name: "Web Development Bootcamp",
    courseImg: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    instructor: "Alex Johnson",
    instructorImg: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    lessonsCompleted: 8,
    totalLessons: 48,
    progress: 17,
    nextLesson: "JavaScript Functions",
    dueDate: "Tomorrow"
  },
  {
    id: 2,
    courseDetainID: 104,
    name: "UI/UX Design Masterclass",
    courseImg: "https://images.unsplash.com/photo-1561070791-2526d30994b5",
    instructor: "Emma Wilson",
    instructorImg: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e",
    lessonsCompleted: 12,
    totalLessons: 36,
    progress: 33,
    nextLesson: "Figma Prototyping",
    dueDate: "In 2 days"
  },
  {
    id: 3,
    courseDetainID: 105,
    name: "Digital Marketing Strategy",
    courseImg: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    instructor: "David Kim",
    instructorImg: "https://images.unsplash.com/photo-1507591064344-4c6ce005-128",
    lessonsCompleted: 5,
    totalLessons: 24,
    progress: 21,
    nextLesson: "SEO Best Practices",
    dueDate: "Today"
  },
  {
    id: 4,
    courseDetainID: 107,
    name: "Python for AI and Machine Learning",
    courseImg: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
    instructor: "Dr. Lisa Wang",
    instructorImg: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
    lessonsCompleted: 6,
    totalLessons: 24,
    progress: 25,
    nextLesson: "Composition Rules",
    dueDate: "In 3 days"
  }
];

export const category = [
  {
    id: 1,
    name: "Development",
    icon: "fa-solid fa-code",
    bg: "#2563EB",
    description: "Programming, web development, mobile apps, and software engineering",
    courseCount: 245
  },
  {
    id: 2,
    name: "Design",
    icon: "fa-solid fa-pen-ruler",
    bg: "#7C3AED",
    description: "UI/UX, graphic design, illustration, and creative software",
    courseCount: 189
  },
  {
    id: 3,
    name: "Business",
    icon: "fa-solid fa-chart-line",
    bg: "#059669",
    description: "Management, entrepreneurship, finance, and business strategy",
    courseCount: 312
  },
  {
    id: 4,
    name: "Marketing",
    icon: "fa-solid fa-bullhorn",
    bg: "#DC2626",
    description: "Digital marketing, SEO, social media, and advertising",
    courseCount: 178
  },
  {
    id: 5,
    name: "Data Science",
    icon: "fa-solid fa-database",
    bg: "#EA580C",
    description: "Data analysis, machine learning, statistics, and visualization",
    courseCount: 156
  },
  {
    id: 6,
    name: "Photography",
    icon: "fa-solid fa-camera",
    bg: "#0EA5E9",
    description: "Digital photography, editing, lighting, and composition",
    courseCount: 98
  },
  {
    id: 7,
    name: "Music",
    icon: "fa-solid fa-music",
    bg: "#9333EA",
    description: "Music production, instruments, theory, and audio engineering",
    courseCount: 87
  },
  {
    id: 8,
    name: "Health & Fitness",
    icon: "fa-solid fa-heart-pulse",
    bg: "#16A34A",
    description: "Exercise, nutrition, wellness, and mental health",
    courseCount: 134
  }
];

// Function to get course by ID
export const getCourseById = (id) => {
  return Coursers.find(course => course.id === id || course.courseDetainID === id);
};

// Function to get courses by category
export const getCoursesByCategory = (category) => {
  return Coursers.filter(course => course.category === category);
};