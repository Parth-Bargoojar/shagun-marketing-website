import { Link } from 'react-router-dom';

const BlogCard = ({ slug, category, title, excerpt, readTime, image }) => {
  return (
    <Link 
      to={`/blog/${slug}`} 
      className="group block bg-white rounded-[2rem] overflow-hidden border border-green/5 shadow-xl hover:-translate-y-2 transition-all duration-500 relative"
    >
      {/* Image Section */}
      <div className="aspect-[16/10] overflow-hidden relative">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep-green/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        
        {/* Category Badge */}
        <div className="absolute top-6 left-6 px-4 py-1.5 bg-mustard text-white font-body font-black text-[10px] tracking-widest uppercase rounded-full shadow-lg shadow-mustard/20 z-10">
          {category}
        </div>
      </div>
      
      {/* Content Section */}
      <div className="p-8 flex flex-col min-h-[240px]">
        <h3 className="font-heading font-black text-xl text-deep-green mb-4 leading-snug group-hover:text-green transition-colors line-clamp-2">
          {title}
        </h3>
        
        <p className="font-body text-sm text-deep-green/60 leading-relaxed mb-8 line-clamp-3">
          {excerpt}
        </p>
        
        {/* Footer */}
        <div className="mt-auto pt-6 border-t border-green/5 flex items-center justify-between">
          <div className="flex items-center gap-4 font-body text-[10px] font-black uppercase tracking-widest text-deep-green/30">
            <span className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-sm">schedule</span>
              {readTime}
            </span>
          </div>
          
          <div className="flex items-center gap-2 font-body font-black text-xs text-green group-hover:text-mustard transition-colors uppercase tracking-widest">
            Read
            <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
