import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { ArrowRight, ExternalLink, Search, TrendingUp, Eye, Heart } from "lucide-react"
import Link from "next/link"
import { createClient } from "@/lib/supabase/server"

async function getPortfolioProjects() {
  const supabase = createClient()
  const { data: projects } = await supabase
    .from("portfolio_projects")
    .select("*")
    .order("created_at", { ascending: false })

  return projects || []
}

const categories = ["All", "Social Media Strategy", "Content Creation", "Influencer Marketing", "Community Management"]

const additionalProjects = [
  {
    id: "4",
    title: "Fitness App Launch Campaign",
    client_name: "FitLife Pro",
    category: "Content Creation",
    description:
      "Multi-platform launch campaign featuring workout videos, nutrition tips, and user testimonials that drove 100K+ app downloads.",
    image_url: "/placeholder.svg?height=400&width=600",
    results_metrics: { app_downloads: "100K+", engagement_rate: "8.5%", video_views: "5M+" },
    featured: false,
  },
  {
    id: "5",
    title: "Restaurant Chain Rebranding",
    client_name: "Urban Bites",
    category: "Social Media Strategy",
    description:
      "Complete social media rebrand with new visual identity, content strategy, and community engagement approach.",
    image_url: "/placeholder.svg?height=400&width=600",
    results_metrics: { follower_growth: "180%", engagement_increase: "220%", store_visits: "+35%" },
    featured: false,
  },
  {
    id: "6",
    title: "Beauty Brand Influencer Campaign",
    client_name: "Glow Cosmetics",
    category: "Influencer Marketing",
    description:
      "Coordinated campaign with 50+ beauty influencers resulting in viral product launches and significant sales growth.",
    image_url: "/placeholder.svg?height=400&width=600",
    results_metrics: { influencers: "50+", reach: "10M+", sales_increase: "400%" },
    featured: false,
  },
  {
    id: "7",
    title: "Tech Startup Community Building",
    client_name: "InnovateTech",
    category: "Community Management",
    description: "Built engaged developer community from scratch, fostering discussions and driving product adoption.",
    image_url: "/placeholder.svg?height=400&width=600",
    results_metrics: { community_size: "25K+", daily_engagement: "500+", product_signups: "15K+" },
    featured: false,
  },
  {
    id: "8",
    title: "E-commerce Holiday Campaign",
    client_name: "StyleHub",
    category: "Content Creation",
    description:
      "Comprehensive holiday marketing campaign with gift guides, styling videos, and user-generated content.",
    image_url: "/placeholder.svg?height=400&width=600",
    results_metrics: { holiday_sales: "+300%", ugc_posts: "1K+", video_views: "8M+" },
    featured: false,
  },
  {
    id: "9",
    title: "Non-Profit Awareness Campaign",
    client_name: "Ocean Guardians",
    category: "Social Media Strategy",
    description: "Awareness campaign about ocean conservation that reached millions and drove significant donations.",
    image_url: "/placeholder.svg?height=400&width=600",
    results_metrics: { reach: "15M+", donations: "$250K+", volunteers: "2K+" },
    featured: false,
  },
]

export default async function PortfolioPage() {
  const databaseProjects = await getPortfolioProjects()
  const allProjects = [...databaseProjects, ...additionalProjects]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="font-bold text-xl text-white">
              CreativeFlow
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                Services
              </Link>
              <Link href="/portfolio" className="text-white">
                Portfolio
              </Link>
              <Link href="/#about" className="text-gray-300 hover:text-white transition-colors">
                About
              </Link>
              <Link href="/#contact" className="text-gray-300 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0">
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Badge className="mb-6 bg-purple-600/20 text-purple-300 border-purple-500/30">
            <TrendingUp className="w-4 h-4 mr-2" />
            Success Stories & Case Studies
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Our
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {" "}
              Portfolio
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Explore our collection of successful campaigns that have transformed brands and driven exceptional results
            across all social media platforms.
          </p>
        </div>
      </section>

      {/* Filter and Search */}
      <section className="pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === "All" ? "default" : "outline"}
                  className={
                    category === "All"
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0"
                      : "border-white/20 text-white hover:bg-white/10 bg-transparent"
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search projects..."
                className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-gray-400 w-64"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProjects.map((project) => (
              <Card
                key={project.id}
                className="bg-white/5 border-white/10 backdrop-blur-sm overflow-hidden group hover:bg-white/10 transition-all duration-300 cursor-pointer"
              >
                <div className="aspect-video bg-gradient-to-br from-purple-600/20 to-pink-600/20 relative overflow-hidden">
                  <img
                    src={project.image_url || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button
                      size="sm"
                      className="bg-white/20 backdrop-blur-sm text-white border-white/20 hover:bg-white/30"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Case Study
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge className="bg-purple-600/20 text-purple-300 border-purple-500/30">{project.category}</Badge>
                    {project.featured && (
                      <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0 text-xs">
                        Featured
                      </Badge>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-400 mb-3">{project.client_name}</p>
                  <p className="text-gray-300 mb-4 text-sm line-clamp-3">{project.description}</p>

                  {/* Results Metrics */}
                  <div className="space-y-2 mb-4">
                    {Object.entries(project.results_metrics || {})
                      .slice(0, 3)
                      .map(([key, value]) => (
                        <div key={key} className="flex items-center justify-between text-sm">
                          <span className="text-gray-400 capitalize">{key.replace("_", " ")}</span>
                          <span className="text-white font-semibold">{value}</span>
                        </div>
                      ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <div className="flex items-center">
                        <Eye className="w-4 h-4 mr-1" />
                        {Math.floor(Math.random() * 1000) + 500}
                      </div>
                      <div className="flex items-center">
                        <Heart className="w-4 h-4 mr-1" />
                        {Math.floor(Math.random() * 100) + 50}
                      </div>
                    </div>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-purple-400 hover:text-purple-300 hover:bg-purple-600/10 p-2"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Portfolio Impact</h2>
            <p className="text-xl text-gray-300">The numbers speak for themselves</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">150+</div>
              <div className="text-gray-400">Successful Campaigns</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">2B+</div>
              <div className="text-gray-400">Total Impressions</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">350%</div>
              <div className="text-gray-400">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">98%</div>
              <div className="text-gray-400">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Join Our Success Stories?</h2>
          <p className="text-xl text-gray-300 mb-8">Let's create a campaign that becomes your next case study.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 px-8 py-6 text-lg"
            >
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg bg-transparent"
            >
              <Link href="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="font-bold text-xl text-white mb-4">CreativeFlow</div>
              <p className="text-gray-400 text-sm">
                Transforming brands through strategic social media marketing and creative excellence.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/services">Social Media Strategy</Link>
                </li>
                <li>
                  <Link href="/services">Content Creation</Link>
                </li>
                <li>
                  <Link href="/services">Community Management</Link>
                </li>
                <li>
                  <Link href="/services">Influencer Marketing</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/">About Us</Link>
                </li>
                <li>
                  <Link href="/portfolio">Portfolio</Link>
                </li>
                <li>Case Studies</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibent text-white mb-4">Connect</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>hello@creativeflow.com</li>
                <li>+1 (555) 123-4567</li>
                <li>LinkedIn</li>
                <li>Twitter</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-gray-400">
            © 2024 CreativeFlow. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
