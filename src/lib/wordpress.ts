// WordPress REST API Configuration
// Replace this URL with your WordPress site URL
export const WORDPRESS_API_URL = '';

export interface WPPost {
  id: number;
  date: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  slug: string;
  _embedded?: {
    author?: Array<{ name: string }>;
    'wp:featuredmedia'?: Array<{ source_url: string }>;
    'wp:term'?: Array<Array<{ name: string }>>;
  };
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: string;
  read_time: string;
  image?: string;
  slug: string;
}

// Calculate read time based on content
const calculateReadTime = (content: string): string => {
  const wordsPerMinute = 200;
  const text = content.replace(/<[^>]*>/g, '');
  const wordCount = text.split(/\s+/).length;
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  return `${minutes} min read`;
};

// Transform WordPress post to our format
export const transformWPPost = (post: WPPost): BlogPost => {
  const author = post._embedded?.author?.[0]?.name || 'Unknown Author';
  const category = post._embedded?.['wp:term']?.[0]?.[0]?.name || 'General';
  const image = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;

  return {
    id: post.slug || post.id.toString(),
    title: post.title.rendered,
    excerpt: post.excerpt.rendered.replace(/<[^>]*>/g, '').trim(),
    content: post.content.rendered,
    date: post.date,
    author,
    category,
    read_time: calculateReadTime(post.content.rendered),
    image,
    slug: post.slug,
  };
};

// Fetch all posts
export const fetchWPPosts = async (): Promise<BlogPost[]> => {
  if (!WORDPRESS_API_URL) {
    console.log('WordPress URL not configured');
    return [];
  }

  try {
    const response = await fetch(
      `${WORDPRESS_API_URL}/wp-json/wp/v2/posts?_embed&per_page=20`
    );
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const posts: WPPost[] = await response.json();
    return posts.map(transformWPPost);
  } catch (error) {
    console.error('Error fetching WordPress posts:', error);
    throw error;
  }
};

// Fetch single post by slug
export const fetchWPPostBySlug = async (slug: string): Promise<BlogPost | null> => {
  if (!WORDPRESS_API_URL) {
    console.log('WordPress URL not configured');
    return null;
  }

  try {
    const response = await fetch(
      `${WORDPRESS_API_URL}/wp-json/wp/v2/posts?slug=${slug}&_embed`
    );
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const posts: WPPost[] = await response.json();
    
    if (posts.length === 0) {
      return null;
    }
    
    return transformWPPost(posts[0]);
  } catch (error) {
    console.error('Error fetching WordPress post:', error);
    throw error;
  }
};

// Check if WordPress is configured
export const isWordPressConfigured = (): boolean => {
  return !!WORDPRESS_API_URL;
};
