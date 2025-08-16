-- Create tables for social media creative agency

-- Client inquiries table
CREATE TABLE IF NOT EXISTS inquiries (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  company VARCHAR(255),
  phone VARCHAR(20),
  service_type VARCHAR(100) NOT NULL,
  budget_range VARCHAR(50),
  project_description TEXT NOT NULL,
  timeline VARCHAR(100),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  status VARCHAR(50) DEFAULT 'new'
);

-- Portfolio projects table
CREATE TABLE IF NOT EXISTS portfolio_projects (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  client_name VARCHAR(255) NOT NULL,
  category VARCHAR(100) NOT NULL,
  description TEXT NOT NULL,
  image_url TEXT,
  project_url TEXT,
  results_metrics JSONB,
  featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Testimonials table
CREATE TABLE IF NOT EXISTS testimonials (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  client_name VARCHAR(255) NOT NULL,
  client_title VARCHAR(255),
  company VARCHAR(255) NOT NULL,
  testimonial TEXT NOT NULL,
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  image_url TEXT,
  featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert sample portfolio projects
INSERT INTO portfolio_projects (title, client_name, category, description, image_url, results_metrics, featured) VALUES
('Brand Revolution Campaign', 'TechStart Inc', 'Social Media Strategy', 'Complete social media transformation that increased engagement by 400% and generated 50+ qualified leads monthly.', '/placeholder.svg?height=400&width=600', '{"engagement_increase": "400%", "leads_monthly": "50+", "follower_growth": "250%"}', true),
('Viral Product Launch', 'EcoLife Products', 'Content Creation', 'Created viral TikTok campaign that reached 2M+ views and drove $100K in sales within the first month.', '/placeholder.svg?height=400&width=600', '{"views": "2M+", "sales": "$100K", "engagement_rate": "12.5%"}', true),
('Influencer Partnership Program', 'Fashion Forward', 'Influencer Marketing', 'Managed 25+ influencer partnerships resulting in 300% ROI and 1M+ brand impressions.', '/placeholder.svg?height=400&width=600', '{"roi": "300%", "impressions": "1M+", "partnerships": "25+"}', true);

-- Insert sample testimonials
INSERT INTO testimonials (client_name, client_title, company, testimonial, rating, featured) VALUES
('Sarah Johnson', 'Marketing Director', 'TechStart Inc', 'The team transformed our social media presence completely. Our engagement rates skyrocketed and we finally started seeing real ROI from our social media efforts.', 5, true),
('Mike Chen', 'Founder', 'EcoLife Products', 'Their creative approach to our product launch was incredible. The viral campaign they created exceeded all our expectations and drove massive sales growth.', 5, true),
('Emma Rodriguez', 'Brand Manager', 'Fashion Forward', 'Professional, creative, and results-driven. They understand social media trends better than anyone and deliver campaigns that actually convert.', 5, true);
