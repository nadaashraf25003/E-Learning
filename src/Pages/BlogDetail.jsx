import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "../components/Footer.jsx";
import NavBar from "../components/NavBar.jsx";
import { getBlogPostById, getRelatedPosts } from "../../blog";

const BlogDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (id) {
      const postData = getBlogPostById(Number(id));
      setPost(postData);
      
      if (postData) {
        const related = getRelatedPosts(postData.id, 2);
        setRelatedPosts(related);
      }
    }
  }, [id]);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-[#49BBBD] text-2xl">Loading blog post...</div>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-white">
      <NavBar />
      
      {/* Blog Header Image */}
      <img 
        src={post.image} 
        alt={post.title} 
        className="w-xl h-96 object-cover items-center justify-center mx-auto mt-10 rounded-lg shadow-lg"
      />
      
      {/* Blog Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <div className="flex items-center text-sm text-gray-600 mb-4">
            <span className="text-[#49BBBD] font-semibold mr-2">{post.author}</span>
            <span className="mx-2">•</span>
            <span>{post.date}</span>
            <span className="mx-2">•</span>
            <span>{post.readTime}</span>
            <span className="mx-2">•</span>
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path
                  fillRule="evenodd"
                  d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                  clipRule="evenodd"
                />
              </svg>
              {post.views.toLocaleString()} views
            </span>
          </div>
          
          <h1 className="text-[#2F327D] font-bold text-3xl md:text-4xl mb-6">
            {post.title}
          </h1>
          
          <div className="space-y-6 text-[#696984] text-lg">
            {post.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-3 mt-8">
            {post.tags.map((tag, index) => (
              <div 
                key={index} 
                className="px-4 py-2 bg-[#49BBBD]/30 rounded-full text-black/60 text-sm hover:bg-[#49BBBD]/40 transition-colors cursor-pointer"
              >
                {tag}
              </div>
            ))}
          </div>
          
          <hr className="border-t-2 border-gray-300 my-8" />
          
          {/* Author Info */}
          <div className="flex flex-col sm:flex-row items-center justify-between mt-8">
            <div className="flex items-center mb-4 sm:mb-0">
              <img 
                src={post.authorImage} 
                alt={post.authorName} 
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="ml-4">
                <h2 className="text-gray-600 text-sm">Written by</h2>
                <h3 className="text-black text-lg font-semibold">{post.authorName}</h3>
                <p className="text-gray-600 text-sm mt-1">{post.authorBio}</p>
              </div>
            </div>
            
            <button className="w-40 h-10 border border-[#49BBBD] rounded-full cursor-pointer hover:bg-[#49BBBD] hover:text-white hover:scale-105 transition flex items-center justify-center text-black/60">
              Follow
            </button>
          </div>
        </div>
      </div>

      {/* Related Blog Posts */}
      <section className="bg-[#9DCCFF]/30 py-12">
        <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-semibold text-gray-800">Related Articles</h2>
            <Link 
              to="/Blog" 
              className="text-lg font-semibold text-[#49BBBD] cursor-pointer hover:underline hover:text-[#2F327D] hover:scale-105"
            >
              See all
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedPosts.map((relatedPost) => (
              <div key={relatedPost.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:scale-105 transition">
                <img 
                  src={relatedPost.image} 
                  alt={relatedPost.title} 
                  className="w-full h-60 object-cover" 
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">
                    {relatedPost.title}
                  </h3>
                  <div className="flex items-center mb-3">
                    <span className="text-sm text-gray-600 mr-3">{relatedPost.date}</span>
                    <span className="text-sm text-gray-600">{relatedPost.readTime}</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    {relatedPost.excerpt}
                  </p>
                  <div className="flex justify-between items-center">
                    <Link 
                      to={`/BlogDetail/${relatedPost.id}`} 
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
                      {relatedPost.views.toLocaleString()}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </section>
  );
};

export default BlogDetail;