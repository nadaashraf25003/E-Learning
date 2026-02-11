import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import { 
  blogPosts, 
  getLatestPosts, 
  getPopularPosts,
  getPostsByCategory 
} from "../../blog";

const Blog = () => {
  // Get featured post (first one in array)
  const featuredPost = blogPosts[0];
  
  // Get latest posts
  const latestPosts = getLatestPosts(4);
  
  // Get popular marketing articles
  const marketingPosts = getPostsByCategory("marketing", 4);
  
  // Get popular posts for related section
  const popularPosts = getPopularPosts(2);

  return (
    <section className="min-h-screen bg-white">
      <NavBar />
      
      {/* Featured Blog Post */}
      <div className="container mx-auto max-w-screen-xl flex flex-col lg:flex-row items-center justify-between px-6 lg:px-10 py-12 mt-12 bg-[#9DCCFF]/30 rounded-md">
        <div className="w-full lg:w-1/2 space-y-4 mb-8 lg:mb-0">
          <p className="text-black font-semibold text-lg md:text-xl">
            By <span className="text-[#49BBBD]">{featuredPost.author}</span> in{" "}
            <span className="text-[#49BBBD]">{featuredPost.category}</span>
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2F327D] max-w-xl leading-snug">
            {featuredPost.title}
          </h2>
          <p className="text-[#696984] text-base md:text-lg lg:text-xl max-w-xl">
            {featuredPost.excerpt}
          </p>
          <Link 
            to={`/BlogDetail/${featuredPost.id}`}
            className="inline-block bg-teal-500 text-white px-5 md:px-6 py-2 md:py-3 rounded-full hover:bg-teal-600 hover:scale-105 transition"
          >
            Start reading now
          </Link>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <img
            src={featuredPost.image}
            alt={featuredPost.title}
            className="rounded-lg w-3/4 md:w-2/3 lg:w-full object-contain"
          />
        </div>
      </div>

      {/* Latest Blog Posts */}
      <section className="container mx-auto max-w-screen-xl py-10 px-6 lg:px-10">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-8">
          Latest blog posts
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {latestPosts.map((post) => (
            <Link 
              key={post.id} 
              to={`/BlogDetail/${post.id}`}
              className="rounded-xl overflow-hidden hover:scale-105 transition bg-white flex items-center justify-center cursor-pointer"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 md:h-64 object-contain"
              />
            </Link>
          ))}
        </div>
      </section>

      {/* Related Blog Section */}
      <section className="bg-[#9DCCFF]/30 py-12">
        <div className="container mx-auto max-w-screen-xl px-6 lg:px-10">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-semibold text-gray-800">Popular Articles</h2>
            <Link 
              to="/Blog" 
              className="text-lg font-semibold text-[#49BBBD] cursor-pointer hover:underline hover:text-[#2F327D] hover:scale-105"
            >
              See all
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {popularPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:scale-105 transition">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-60 object-cover" 
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">
                    {post.title}
                  </h3>
                  <div className="flex items-center mb-3">
                    <span className="text-sm text-gray-600 mr-3">{post.date}</span>
                    <span className="text-sm text-gray-600">{post.readTime}</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex justify-between items-center">
                    <Link 
                      to={`/BlogDetail/${post.id}`} 
                      className="text-[#49BBBD] text-sm cursor-pointer hover:underline"
                    >
                      Read more
                    </Link>
                    <div className="flex items-center text-sm text-gray-500">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path
                          fillRule="evenodd"
                          d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {post.views.toLocaleString()}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marketing Articles */}
      <section className="py-12">
        <div className="container mx-auto max-w-screen-xl px-6 lg:px-10">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-semibold text-gray-800">Marketing Articles</h2>
            <Link 
              to="/blog/category/marketing"
              className="text-lg font-semibold text-[#49BBBD] cursor-pointer hover:underline hover:text-[#2F327D] hover:scale-105"
            >
              See all
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketingPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-32 object-cover" 
                />
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded capitalize">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500">{post.readTime}</span>
                  </div>
                  <h3 className="text-sm font-semibold text-gray-800 mb-2">
                    {post.title}
                  </h3>
                  <p className="text-xs text-gray-600 mb-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-6 h-6 bg-gray-300 rounded-full mr-2 overflow-hidden">
                        <img 
                          src={post.authorImage} 
                          alt={post.authorName}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="text-xs text-gray-600">{post.authorName}</span>
                    </div>
                    <div className="text-right">
                      <span className="flex items-center text-xs text-gray-500">
                        <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                          <path
                            fillRule="evenodd"
                            d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {Math.floor(post.views / 1000)}k
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer/>
    </section>
  );
};

export default Blog;