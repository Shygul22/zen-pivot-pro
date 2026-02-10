import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";
import { fetchWPPosts, isWordPressConfigured, BlogPost } from "@/lib/wordpress";
import { toast } from "sonner";

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    if (!isWordPressConfigured()) {
      setLoading(false);
      return;
    }

    try {
      const data = await fetchWPPosts();
      setPosts(data);
    } catch (error: any) {
      toast.error("Failed to load blog posts");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <main className="pt-24 pb-16 flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading blog posts...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center space-y-4 mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-primary">
              Our Blog
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Insights, strategies, and stories to help you balance your time and elevate your life
            </p>
          </div>

          {/* Configuration Notice */}
          {!isWordPressConfigured() && (
            <div className="text-center py-16 bg-card/50 rounded-lg border border-border/50">
              <h2 className="text-2xl font-bold text-foreground mb-4">WordPress Integration Ready</h2>
              <p className="text-muted-foreground max-w-md mx-auto mb-6">
                To display blog posts, configure your WordPress site URL in <code className="bg-muted px-2 py-1 rounded">src/lib/wordpress.ts</code>
              </p>
              <p className="text-sm text-muted-foreground">
                Example: <code className="bg-muted px-2 py-1 rounded">export const WORDPRESS_API_URL = 'https://yoursite.com';</code>
              </p>
            </div>
          )}

          {/* Blog Posts Grid */}
          {isWordPressConfigured() && posts.length === 0 && !loading && (
            <div className="text-center py-16 col-span-full">
              <p className="text-muted-foreground">No blog posts found.</p>
            </div>
          )}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <Link 
                key={post.id} 
                to={`/blog/${post.id}`}
                className="group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Card className="h-full p-6 hover:shadow-[var(--shadow-elegant)] transition-all duration-300 hover:-translate-y-2 border-primary/10 bg-card/80 backdrop-blur-sm animate-fade-in">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">{post.category}</Badge>
                    </div>
                    
                    <h2 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    
                    <p className="text-muted-foreground line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground pt-4 border-t border-border/50">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.read_time}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
