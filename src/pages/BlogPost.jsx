import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { blogPosts } from '../data/blogPosts';
import BlogCard from '../components/blog/BlogCard';
import CTABanner from '../components/layout/CTABanner';

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="pt-40 text-center min-h-screen bg-beige font-body">
        <h2 className="text-2xl font-bold mb-4">Article not found</h2>
        <Link to="/blog" className="text-green underline underline-offset-4">Back to Blog</Link>
      </div>
    );
  }

  // Get 2 related articles (excluding current)
  const relatedPosts = blogPosts.filter(p => p.id !== post.id).slice(0, 2);

  // Format content to include headers and lists
  const formattedContent = post.content.split('\n').filter(p => p.trim() !== '').map((line, index) => {
    // Treat H2
    if (line.startsWith('## ')) {
      return (
        <h2 key={index} className="font-heading font-black text-3xl text-deep-green mt-16 mb-8">
          {line.replace('## ', '')}
        </h2>
      );
    }
    // Treat H3
    if (line.startsWith('### ')) {
      return (
        <h3 key={index} className="font-heading font-bold text-2xl text-deep-green mt-12 mb-6">
          {line.replace('### ', '')}
        </h3>
      );
    }
    // Treat horizontal rules
    if (line.startsWith('---')) {
      return <hr key={index} className="border-t-2 border-mustard/10 my-16" />;
    }
    // Treat lists
    if (line.startsWith('* ')) {
      return (
        <div key={index} className="flex gap-4 mb-4 pl-2">
          <span className="w-1.5 h-1.5 rounded-full bg-mustard mt-3 shrink-0"></span>
          <p className="font-body text-deep-green/80 text-lg leading-relaxed">{line.replace('* ', '')}</p>
        </div>
      );
    }
    
    return <p key={index} className="font-body text-lg text-deep-green/80 leading-relaxed mb-8">{line}</p>;
  });

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }} 
      transition={{ duration: 0.4 }}
      className="bg-beige text-deep-green min-h-screen pt-32 pb-20 relative overflow-hidden"
    >
      {/* Dynamic Background Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-green/5 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-[20%] right-[-10%] w-[400px] h-[400px] bg-mustard/5 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
          <Link to="/blog" className="group inline-flex items-center gap-3 font-body font-bold text-sm text-deep-green/40 hover:text-green transition-all">
            <span className="material-symbols-outlined transition-transform group-hover:-translate-x-1">arrow_back</span>
            Back to Blog
          </Link>

          <div className="self-start md:self-auto px-6 py-2 bg-mustard text-white font-body font-black text-xs tracking-widest uppercase rounded-full shadow-lg shadow-mustard/20">
            {post.category}
          </div>
        </div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-heading font-black text-4xl md:text-5xl text-deep-green mb-8 leading-[1.15]"
        >
          {post.title}
        </motion.h1>

        <div className="flex items-center gap-4 font-body text-sm text-deep-green/40 mb-12">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-lg">schedule</span>
            {post.readTime}
          </div>
          <span className="w-1 h-1 rounded-full bg-deep-green/20"></span>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-lg">calendar_today</span>
            {post.date}
          </div>
        </div>

        <div className="w-full h-[2px] bg-gradient-to-r from-mustard/20 via-mustard/10 to-transparent mb-16"></div>

        <div className="prose prose-lg max-w-none">
          {formattedContent}
        </div>
      </div>

      {/* Related Articles */}
      <section className="bg-white/40 backdrop-blur-xl border-t border-white mt-32 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading font-black text-4xl text-deep-green">Related Articles</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {relatedPosts.map(p => (
              <BlogCard key={p.id} {...p} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </motion.div>
  );
};

export default BlogPost;
