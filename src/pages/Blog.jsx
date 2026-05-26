import { useState } from 'react';
import { motion } from 'framer-motion';
import BlogCard from '../components/blog/BlogCard';
import CTABanner from '../components/layout/CTABanner';
import { blogPosts } from '../data/blogPosts';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'GST & Taxes', 'Budgeting', 'Gift Etiquette', 'Legal Tips'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }} 
      transition={{ duration: 0.4 }}
      className="bg-beige text-deep-green min-h-screen pt-48 pb-20 overflow-hidden relative"
    >
      {/* Dynamic Background Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-green/10 rounded-full blur-[100px] -z-10 animate-blob"></div>
      <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-mustard/10 rounded-full blur-[100px] -z-10 animate-blob" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10 mb-32">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading font-black text-5xl md:text-7xl text-deep-green mb-8 tracking-tighter"
          >
            Wedding Finance Resources
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-body text-xl text-deep-green/60 max-w-2xl mx-auto leading-relaxed"
          >
            Free guides on GST, budgeting, and smart wedding planning for Indian families.
          </motion.p>
        </div>

        {/* Search and Filters - Apple Glass Style Sync */}
        <div className="max-w-3xl mx-auto mb-20 space-y-10">
          <div className="relative group overflow-hidden rounded-full p-[2px] bg-gradient-to-r from-green/20 via-mustard/20 to-green/20 shadow-2xl transition-all hover:shadow-green/10">
            <div className="relative flex items-center bg-white/60 backdrop-blur-3xl border border-white/40 rounded-full h-20 shadow-inner">
              <span className="material-symbols-outlined absolute left-8 text-green/40" style={{ fontSize: '24px' }}>search</span>
              <input 
                type="text" 
                placeholder="Search articles, guides, and tips..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-transparent pl-20 pr-8 rounded-full font-body text-lg text-deep-green placeholder:text-green/20 focus:outline-none"
              />
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full font-body font-bold text-sm transition-all shadow-sm ${
                  activeCategory === cat 
                  ? 'bg-mustard text-white shadow-lg shadow-mustard/20 scale-105' 
                  : 'bg-white text-deep-green/60 border border-green/5 hover:border-green/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post, index) => (
              <motion.div 
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <BlogCard {...post} />
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center py-32 opacity-30">
              <span className="material-symbols-outlined text-6xl mb-4">sentiment_dissatisfied</span>
              <p className="font-body text-xl font-bold tracking-tight">No articles found matching your search.</p>
            </div>
          )}
        </div>
      </div>

      <CTABanner />
    </motion.div>
  );
};

export default Blog;
