import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Camera, Music2, AtSign, Hash, Heart, MessageCircle, Share2 } from 'lucide-react';

const socialPosts = [
  { platform: 'instagram', likes: '12.4K', comments: '892', gradient: 'from-purple-500 to-pink-500' },
  { platform: 'tiktok', likes: '45.2K', comments: '3.2K', gradient: 'from-cyan-400 to-blue-500' },
  { platform: 'instagram', likes: '8.7K', comments: '456', gradient: 'from-amber-500 to-crimson' },
  { platform: 'tiktok', likes: '89.1K', comments: '5.6K', gradient: 'from-green-400 to-cyan-500' },
  { platform: 'instagram', likes: '15.3K', comments: '1.1K', gradient: 'from-crimson to-purple-600' },
  { platform: 'tiktok', likes: '67.8K', comments: '4.3K', gradient: 'from-gold to-amber' },
];

const challenges = [
  { tag: '#BailingMoments', posts: '45.2K posts', desc: 'Share your boldest moments with Bailing' },
  { tag: '#FuelTheNight', posts: '28.7K posts', desc: 'Show us how you own the night' },
  { tag: '#BailingChallenge', posts: '92.1K posts', desc: 'Join the viral taste challenge' },
];

export default function SocialSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="relative py-24 lg:py-32 bg-black overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-crimson/80 font-medium">Community</span>
          <h2 className="font-space font-bold text-4xl sm:text-5xl lg:text-6xl mt-3 mb-4">
            Join the <span className="gradient-text">Movement</span>
          </h2>
          <p className="text-white/40 max-w-xl mx-auto text-lg">
            Over 500K people sharing their Bailing moments across social platforms.
          </p>
        </motion.div>

        {/* Social Stats */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {[
            { icon: Camera, label: 'Instagram', followers: '245K', color: 'text-pink-400' },
            { icon: Music2, label: 'TikTok', followers: '580K', color: 'text-cyan-400' },
            { icon: AtSign, label: 'X / Twitter', followers: '120K', color: 'text-blue-400' },
          ].map((social, i) => (
            <motion.a
              key={social.label}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl px-8 py-5 flex items-center gap-4 border border-white/5 hover:border-white/15 transition-all duration-500 hover:-translate-y-1 group"
            >
              <social.icon className={`w-7 h-7 ${social.color} group-hover:scale-110 transition-transform`} />
              <div>
                <div className="font-space font-bold text-lg">{social.followers}</div>
                <div className="text-xs text-white/40">{social.label}</div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* UGC Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-16">
          {socialPosts.map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
              className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer"
            >
              {/* Gradient placeholder */}
              <div className={`absolute inset-0 bg-gradient-to-br ${post.gradient} opacity-60`} />
              <div className="absolute inset-0 bg-black/20" />

              {/* Platform icon */}
              <div className="absolute top-3 left-3">
                {post.platform === 'instagram' ? (
                  <Camera size={14} className="text-white/70" />
                ) : (
                  <Music2 size={14} className="text-white/70" />
                )}
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Heart size={14} className="text-crimson fill-crimson" />
                    <span className="text-xs font-medium">{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle size={14} className="text-white/60" />
                    <span className="text-xs font-medium">{post.comments}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Challenges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-center font-space font-bold text-2xl mb-8">
            Trending <span className="gradient-text">Challenges</span>
          </h3>
          <div className="grid sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {challenges.map((challenge) => (
              <div
                key={challenge.tag}
                className="glass rounded-2xl p-5 border border-white/5 hover:border-crimson/20 transition-all duration-500 hover:-translate-y-1 group cursor-pointer text-center"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-crimson/20 to-gold/20 flex items-center justify-center mx-auto mb-3">
                  <Hash size={18} className="text-crimson" />
                </div>
                <h4 className="font-space font-semibold text-base mb-1 group-hover:text-crimson transition-colors">{challenge.tag}</h4>
                <p className="text-xs text-white/40 mb-2">{challenge.posts}</p>
                <p className="text-xs text-white/30">{challenge.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Share CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <button className="btn-primary px-8 py-4 rounded-full text-sm font-semibold tracking-wider uppercase text-white inline-flex items-center gap-2">
            <Share2 size={16} />
            Share Your Moment
          </button>
        </motion.div>
      </div>
    </section>
  );
}
