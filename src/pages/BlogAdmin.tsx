import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Plus, Edit, Trash2, Save, X, LogOut, Lock } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase";

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

const BlogAdmin = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  
  const [formData, setFormData] = useState<Partial<BlogPost>>({
    title: "",
    excerpt: "",
    content: "",
    category: "",
    author: "Shygul Akbar S",
    read_time: "",
    date: new Date().toISOString().split('T')[0]
  });

  useEffect(() => {
    checkAuth();
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      fetchPosts();
    }
  }, [isAuthenticated]);

  const checkAuth = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    setIsAuthenticated(!!session);
    setLoading(false);
  };

  const fetchPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .order('date', { ascending: false });

      if (error) throw error;

      const formattedPosts = data.map(post => ({
        id: post.id,
        title: post.title,
        excerpt: post.excerpt,
        content: post.content,
        date: post.date,
        author: post.author,
        category: post.category,
        read_time: post.read_time
      }));

      setPosts(formattedPosts);
    } catch (error: any) {
      toast.error("Failed to fetch posts: " + error.message);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      setIsAuthenticated(true);
      toast.success("Login successful");
      setEmail("");
      setPassword("");
    } catch (error: any) {
      toast.error("Login failed: " + error.message);
    }
  };

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      setIsAuthenticated(false);
      toast.success("Logged out successfully");
      navigate('/blog');
    } catch (error: any) {
      toast.error("Logout failed: " + error.message);
    }
  };

  const resetForm = () => {
    setFormData({
      title: "",
      excerpt: "",
      content: "",
      category: "",
      author: "Shygul Akbar S",
      read_time: "",
      date: new Date().toISOString().split('T')[0]
    });
    setEditingPost(null);
    setIsCreating(false);
  };

  const handleEdit = (post: BlogPost) => {
    setEditingPost(post);
    setFormData(post);
    setIsCreating(false);
  };

  const handleCreate = () => {
    resetForm();
    setIsCreating(true);
  };

  const handleSave = async () => {
    if (!formData.title || !formData.excerpt || !formData.content) {
      toast.error("Please fill in all required fields");
      return;
    }

    try {
      if (editingPost) {
        // Update existing post
        const { error } = await supabase
          .from('blog_posts')
          .update({
            title: formData.title,
            excerpt: formData.excerpt,
            content: formData.content,
            date: formData.date,
            author: formData.author,
            category: formData.category,
            read_time: formData.read_time,
            updated_at: new Date().toISOString()
          })
          .eq('id', editingPost.id);

        if (error) throw error;
        toast.success("Blog post updated successfully");
      } else if (isCreating) {
        // Create new post
        const newId = formData.title!.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        const { error } = await supabase
          .from('blog_posts')
          .insert({
            id: newId,
            title: formData.title!,
            excerpt: formData.excerpt!,
            content: formData.content!,
            date: formData.date!,
            author: formData.author!,
            category: formData.category!,
            read_time: formData.read_time!
          });

        if (error) throw error;
        toast.success("Blog post created successfully");
      }
      
      resetForm();
      fetchPosts();
    } catch (error: any) {
      toast.error("Failed to save post: " + error.message);
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      try {
        const { error } = await supabase
          .from('blog_posts')
          .delete()
          .eq('id', id);

        if (error) throw error;

        toast.success("Blog post deleted successfully");
        fetchPosts();
      } catch (error: any) {
        toast.error("Failed to delete post: " + error.message);
      }
    }
  };

  const handleChange = (field: keyof BlogPost, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <main className="pt-24 pb-16">
          <div className="container mx-auto px-4 max-w-md">
            <Card className="p-8">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Lock className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h1 className="text-3xl font-bold text-center mb-2">Admin Login</h1>
              <p className="text-center text-muted-foreground mb-6">
                Sign in with your Lovable Cloud account
              </p>
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  Login
                </Button>
              </form>
            </Card>
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
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold text-primary mb-2">Blog Admin Panel</h1>
              <p className="text-muted-foreground">Manage your blog posts</p>
            </div>
            <div className="flex gap-2">
              <Link to="/blog">
                <Button variant="outline">View Blog</Button>
              </Link>
              <Button variant="outline" onClick={handleLogout} className="gap-2">
                <LogOut className="w-4 h-4" />
                Logout
              </Button>
              {!isCreating && !editingPost && (
                <Button onClick={handleCreate} className="gap-2">
                  <Plus className="w-4 h-4" />
                  New Post
                </Button>
              )}
            </div>
          </div>

          {/* Editor Form */}
          {(isCreating || editingPost) && (
            <Card className="p-6 mb-8 border-primary/20">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-foreground">
                  {editingPost ? "Edit Post" : "Create New Post"}
                </h2>
                <Button variant="ghost" size="icon" onClick={resetForm}>
                  <X className="w-4 h-4" />
                </Button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <Label htmlFor="title">Title *</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => handleChange("title", e.target.value)}
                    placeholder="Enter post title"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="category">Category *</Label>
                    <Input
                      id="category"
                      value={formData.category}
                      onChange={(e) => handleChange("category", e.target.value)}
                      placeholder="e.g., Business Strategy"
                    />
                  </div>
                  <div>
                    <Label htmlFor="readTime">Read Time *</Label>
                    <Input
                      id="readTime"
                      value={formData.read_time}
                      onChange={(e) => handleChange("read_time", e.target.value)}
                      placeholder="e.g., 5 min read"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="author">Author *</Label>
                    <Input
                      id="author"
                      value={formData.author}
                      onChange={(e) => handleChange("author", e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="date">Date *</Label>
                    <Input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) => handleChange("date", e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="excerpt">Excerpt *</Label>
                  <Textarea
                    id="excerpt"
                    value={formData.excerpt}
                    onChange={(e) => handleChange("excerpt", e.target.value)}
                    placeholder="Brief description of the post"
                    rows={3}
                  />
                </div>

                <div>
                  <Label htmlFor="content">Content * (Markdown supported)</Label>
                  <Textarea
                    id="content"
                    value={formData.content}
                    onChange={(e) => handleChange("content", e.target.value)}
                    placeholder="Full post content in markdown format..."
                    rows={15}
                    className="font-mono text-sm"
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Supported: # Heading, ## Sub-heading, **bold**, - list items
                  </p>
                </div>

                <div className="flex gap-2 pt-4">
                  <Button onClick={handleSave} className="gap-2">
                    <Save className="w-4 h-4" />
                    {editingPost ? "Update Post" : "Publish Post"}
                  </Button>
                  <Button variant="outline" onClick={resetForm}>
                    Cancel
                  </Button>
                </div>
              </div>
            </Card>
          )}

          {/* Posts List */}
          {!isCreating && !editingPost && (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                All Posts ({posts.length})
              </h2>
              {posts.map((post) => (
                <Card key={post.id} className="p-6 border-border/50">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary">{post.category}</Badge>
                        <span className="text-sm text-muted-foreground">
                          {new Date(post.date).toLocaleDateString()}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground line-clamp-2 mb-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>{post.author}</span>
                        <span>•</span>
                        <span>{post.read_time}</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleEdit(post)}
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleDelete(post.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}

          {/* Note about Cloud integration */}
          <Card className="mt-8 p-4 bg-primary/10 border-primary/20">
            <p className="text-sm text-foreground">
              <strong>✓ Lovable Cloud Enabled:</strong> All blog posts are securely stored in your Supabase database with real-time synchronization.
            </p>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogAdmin;
