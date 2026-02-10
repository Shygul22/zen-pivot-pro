import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowLeft, User } from "lucide-react";
import { supabase } from "@/integrations/supabase";
import { toast } from "sonner";
import NotFound from "./NotFound";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: string;
  read_time: string;
}

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPost();
  }, [id]);

  const fetchPost = async () => {
    if (!id) return;

    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('id', id)
        .single();

      if (error) throw error;
      setPost(data);
    } catch (error: any) {
      toast.error("Failed to load blog post");
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
            <p className="text-muted-foreground">Loading post...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!post) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24 pb-16">
        <article className="container mx-auto px-4 max-w-4xl">
          {/* Back Button */}
          <Link to="/blog" className="inline-block mb-8">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Button>
          </Link>

          {/* Article Header */}
          <header className="space-y-6 mb-12 animate-fade-in">
            <Badge variant="secondary">{post.category}</Badge>
            
            <h1 className="text-4xl md:text-5xl font-bold text-primary leading-tight">
              {post.title}
            </h1>
            
            <p className="text-xl text-muted-foreground">
              {post.excerpt}
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground pt-4 border-t border-border/50">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.read_time}</span>
              </div>
            </div>
          </header>

          {/* Article Content */}
          <div 
            className="prose prose-lg max-w-none
              prose-headings:text-foreground prose-headings:font-bold
              prose-h1:text-4xl prose-h1:text-primary prose-h1:mb-6
              prose-h2:text-3xl prose-h2:text-primary prose-h2:mt-12 prose-h2:mb-4
              prose-h3:text-2xl prose-h3:text-foreground prose-h3:mt-8 prose-h3:mb-3
              prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-4
              prose-strong:text-foreground prose-strong:font-semibold
              prose-ul:text-muted-foreground prose-ul:my-6
              prose-ol:text-muted-foreground prose-ol:my-6
              prose-li:my-2
              animate-fade-in"
            style={{ animationDelay: '200ms' }}
          >
            {post.content.split('\n').map((paragraph, index) => {
              // Handle headings
              if (paragraph.startsWith('# ')) {
                return <h1 key={index}>{paragraph.substring(2)}</h1>;
              }
              if (paragraph.startsWith('## ')) {
                return <h2 key={index}>{paragraph.substring(3)}</h2>;
              }
              if (paragraph.startsWith('### ')) {
                return <h3 key={index}>{paragraph.substring(4)}</h3>;
              }
              // Handle list items
              if (paragraph.startsWith('- ')) {
                return <li key={index}>{paragraph.substring(2)}</li>;
              }
              if (/^\d+\.\s/.test(paragraph)) {
                return <li key={index}>{paragraph.replace(/^\d+\.\s/, '')}</li>;
              }
              // Handle bold text
              if (paragraph.includes('**')) {
                const parts = paragraph.split('**');
                return (
                  <p key={index}>
                    {parts.map((part, i) => 
                      i % 2 === 1 ? <strong key={i}>{part}</strong> : part
                    )}
                  </p>
                );
              }
              // Regular paragraphs
              if (paragraph.trim()) {
                return <p key={index}>{paragraph}</p>;
              }
              return null;
            })}
          </div>

          {/* Call to Action */}
          <div className="mt-16 p-8 bg-card border border-border/50 rounded-lg text-center space-y-4">
            <h3 className="text-2xl font-bold text-foreground">
              Ready to Transform Your Business?
            </h3>
            <p className="text-muted-foreground">
              Let's start your journey towards better work-life balance and business success.
            </p>
            <Button variant="hero" size="lg">
              Get Started Today
            </Button>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
