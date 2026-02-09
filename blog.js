// db/blog.js
export const blogPosts = [
  {
    id: 1,
    title: "Why Swift UI Should Be on the Radar of Every Mobile Developer",
    category: "inspiration",
    author: "Themadbrains",
    date: "November 15, 2023",
    readTime: "8 min read",
    views: 291232,
    excerpt: "Discover why SwiftUI is revolutionizing mobile development and why every developer should learn it.",
    content: `UpLearn is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.
    
    UpLearn is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place. UpLearn is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.
    
    TOTC is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place. TOTC is a platform that allows educators to create online classes whereby they can store the course materials online; manage`,
    tags: ["affordable", "stunning", "making", "madbrawns"],
    image: "/Blog.png",
    authorImage: "/lina.png",
    authorName: "Lina",
    authorBio: "Senior iOS Developer at Apple, 8+ years experience in mobile development",
    
    // Related posts
    relatedPosts: [2, 3]
  },
  {
    id: 2,
    title: "Clas adds $30 million to its balance sheet for a Zoom-friendly edtech solution",
    category: "education",
    author: "TechCrunch",
    date: "October 28, 2023",
    readTime: "6 min read",
    views: 189456,
    excerpt: "Clas, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...",
    content: "Detailed content about Clas funding and edtech solutions...",
    tags: ["edtech", "funding", "zoom", "education"],
    image: "/home2-1.png",
    authorImage: "/instructors/alex.jpg",
    authorName: "Michael Chen",
    authorBio: "EdTech Analyst and Writer",
    relatedPosts: [1, 4]
  },
  {
    id: 3,
    title: "The Future of Remote Learning Platforms",
    category: "technology",
    author: "EdTech Review",
    date: "November 5, 2023",
    readTime: "10 min read",
    views: 156789,
    excerpt: "Exploring how remote learning platforms are evolving post-pandemic...",
    content: "Detailed analysis of remote learning platforms...",
    tags: ["remote", "learning", "future", "platforms"],
    image: "/Blog2.png",
    authorImage: "/instructors/emma.jpg",
    authorName: "Emma Wilson",
    authorBio: "UI/UX Designer specializing in educational platforms",
    relatedPosts: [1, 5]
  },
  {
    id: 4,
    title: "AWS Certified Solutions Architect: Complete Guide 2023",
    category: "certification",
    author: "Cloud Experts",
    date: "September 20, 2023",
    readTime: "12 min read",
    views: 345678,
    excerpt: "Everything you need to know to pass the AWS Solutions Architect exam...",
    content: "Detailed guide for AWS certification...",
    tags: ["aws", "cloud", "certification", "guide"],
    image: "/blog3.png",
    authorImage: "/instructors/alex.jpg",
    authorName: "Alex Johnson",
    authorBio: "AWS Solutions Architect with 5+ years experience",
    relatedPosts: [5, 6]
  },
  {
    id: 5,
    title: "React vs Angular: Which Framework to Choose in 2023",
    category: "development",
    author: "Web Dev Weekly",
    date: "October 10, 2023",
    readTime: "7 min read",
    views: 234567,
    excerpt: "Comprehensive comparison of React and Angular for modern web development...",
    content: "Detailed comparison of React and Angular...",
    tags: ["react", "angular", "framework", "comparison"],
    image: "/React.png",
    authorImage: "/instructors/michael.jpg",
    authorName: "Michael Rodriguez",
    authorBio: "Full-stack developer and framework expert",
    relatedPosts: [3, 4]
  },
  {
    id: 6,
    title: "UI/UX Design Principles for Educational Platforms",
    category: "design",
    author: "Design Matters",
    date: "August 15, 2023",
    readTime: "9 min read",
    views: 178912,
    excerpt: "Essential design principles for creating effective learning experiences...",
    content: "Design principles for educational platforms...",
    tags: ["design", "ui", "ux", "education"],
    image: "/UI.png",
    authorImage: "/instructors/emma.jpg",
    authorName: "Emma Wilson",
    authorBio: "UI/UX Designer specializing in educational platforms",
    relatedPosts: [2, 7]
  },
  {
    id: 7,
    title: "PHP 8.3: New Features and Performance Improvements",
    category: "backend",
    author: "PHP Masters",
    date: "November 1, 2023",
    readTime: "5 min read",
    views: 123456,
    excerpt: "Exploring the latest features in PHP 8.3 and performance benchmarks...",
    content: "PHP 8.3 features and improvements...",
    tags: ["php", "backend", "performance", "features"],
    image: "/PHP.png",
    authorImage: "/instructors/sarah.jpg",
    authorName: "Dr. Sarah Chen",
    authorBio: "Backend Developer and PHP Contributor",
    relatedPosts: [6, 8]
  },
  {
    id: 8,
    title: "JavaScript ES2023 Features You Should Know",
    category: "javascript",
    author: "JS Daily",
    date: "October 25, 2023",
    readTime: "6 min read",
    views: 198765,
    excerpt: "Latest JavaScript features that will change how you write code...",
    content: "JavaScript ES2023 features...",
    tags: ["javascript", "es2023", "features", "web"],
    image: "/JS.png",
    authorImage: "/instructors/alex.jpg",
    authorName: "Alex Johnson",
    authorBio: "JavaScript expert and educator",
    relatedPosts: [5, 7]
  },
  {
    id: 9,
    title: "Digital Marketing Trends for 2024",
    category: "marketing",
    author: "Marketing Pro",
    date: "November 8, 2023",
    readTime: "11 min read",
    views: 156432,
    excerpt: "Top digital marketing trends to watch out for in the coming year...",
    content: "Digital marketing trends analysis...",
    tags: ["marketing", "trends", "2024", "digital"],
    image: "/blog4.png",
    authorImage: "/instructors/david.jpg",
    authorName: "David Kim",
    authorBio: "Digital Marketing Strategist",
    relatedPosts: [10, 4]
  },
  {
    id: 10,
    title: "Data Science Career Path: From Beginner to Expert",
    category: "career",
    author: "Data Science Weekly",
    date: "September 30, 2023",
    readTime: "14 min read",
    views: 287654,
    excerpt: "Complete roadmap for building a successful career in data science...",
    content: "Data science career roadmap...",
    tags: ["data science", "career", "roadmap", "expert"],
    image: "/blog5.png",
    authorImage: "/instructors/sarah.jpg",
    authorName: "Dr. Sarah Chen",
    authorBio: "Data Science Educator and Researcher",
    relatedPosts: [9, 4]
  }
];

// Blog categories for filtering
export const blogCategories = [
  { id: 1, name: "inspiration", count: 12 },
  { id: 2, name: "technology", count: 24 },
  { id: 3, name: "design", count: 18 },
  { id: 4, name: "development", count: 32 },
  { id: 5, name: "marketing", count: 15 },
  { id: 6, name: "education", count: 21 },
  { id: 7, name: "career", count: 14 },
  { id: 8, name: "certification", count: 9 }
];

// Function to get blog post by ID
export const getBlogPostById = (id) => {
  return blogPosts.find(post => post.id === id);
};

// Function to get related posts
export const getRelatedPosts = (currentPostId, limit = 2) => {
  const currentPost = getBlogPostById(currentPostId);
  if (!currentPost || !currentPost.relatedPosts) return [];
  
  return currentPost.relatedPosts
    .map(id => getBlogPostById(id))
    .filter(post => post)
    .slice(0, limit);
};

// Function to get latest posts
export const getLatestPosts = (limit = 4) => {
  return [...blogPosts]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, limit);
};

// Function to get posts by category
export const getPostsByCategory = (category, limit = 4) => {
  return blogPosts
    .filter(post => post.category === category)
    .slice(0, limit);
};

// Function to get popular posts
export const getPopularPosts = (limit = 4) => {
  return [...blogPosts]
    .sort((a, b) => b.views - a.views)
    .slice(0, limit);
};