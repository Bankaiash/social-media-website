import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Play, Star, TrendingUp, Users, Zap } from "lucide-react"
import Link from "next/link"

const portfolioProjects = [
  {
    id: 1,
    title: "TechStart Social Revolution",
    description:
      "Transformed a B2B startup's social presence, achieving 300% follower growth and 150% engagement increase.",
    category: "B2B Marketing",
    image_url: "/placeholder.svg?height=300&width=400",
    results_metrics: { "300% Growth": "Followers", "150% Increase": "Engagement", "50+ Leads": "Generated" },
  },
  {
    id: 2,
    title: "Fashion Brand Viral Campaign",
    description: "Created a viral TikTok campaign that generated 2M+ views and drove 40% increase in online sales.",
    category: "Fashion & Lifestyle",
    image_url: "/placeholder.svg?height=300&width=400",
    results_metrics: { "2M+ Views": "TikTok", "40% Increase": "Sales", "500K": "Impressions" },
  },
  {
    id: 3,
    title: "Restaurant Chain Growth",
    description: "Boosted local restaurant chain's social presence across 15 locations with unified brand strategy.",
    category: "Food & Beverage",
    image_url: "/placeholder.svg?height=300&width=400",
    results_metrics: { "15 Locations": "Unified", "200% Growth": "Followers", "25% Increase": "Foot Traffic" },
  },
]

const testimonials = [
  {
    id: 1,
    testimonial:
      "CreativeFlow transformed our social media presence completely. Our engagement rates increased by 250% and we're seeing real business results.",
    client_name: "Sarah Johnson",
    client_title: "Marketing Director",
    company: "TechStart Inc.",
    rating: 5,
  },
  {
    id: 2,
    testimonial:
      "The team's creativity and strategic approach helped us go viral multiple times. Our brand awareness has never been higher.",
    client_name: "Mike Chen",
    client_title: "Founder",
    company: "Fashion Forward",
    rating: 5,
  },
  {
    id: 3,
    testimonial:
      "Professional, creative, and results-driven. They understand social media marketing like no other agency we've worked with.",
    client_name: "Lisa Rodriguez",
    client_title: "CMO",
    company: "Gourmet Bistro Chain",
    rating: 5,
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="font-bold text-xl text-white">CreativeFlow</div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                Services
              </Link>
              <Link href="/portfolio" className="text-gray-300 hover:text-white transition-colors">
                Portfolio
              </Link>
              <Link href="/#about" className="text-gray-300 hover:text-white transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-purple-600/20 text-purple-300 border-purple-500/30">
              <Zap className="w-4 h-4 mr-2" />
              Award-Winning Creative Agency
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Transform Your
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {" "}
                Social Presence
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              We create viral campaigns, build engaged communities, and drive real business results through strategic
              social media marketing that converts followers into customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 px-8 py-6 text-lg"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg bg-transparent"
              >
                <Play className="mr-2 w-5 h-5" />
                Watch Our Work
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">500M+</div>
              <div className="text-gray-400">Total Impressions Generated</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">250%</div>
              <div className="text-gray-400">Average ROI Increase</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">100+</div>
              <div className="text-gray-400">Successful Campaigns</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive social media solutions that drive engagement and growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardContent className="p-8">
                <TrendingUp className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Social Media Strategy</h3>
                <p className="text-gray-300 mb-4">
                  Data-driven strategies that align with your business goals and target audience behavior.
                </p>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li>• Platform-specific strategies</li>
                  <li>• Audience research & targeting</li>
                  <li>• Content calendar planning</li>
                  <li>• Performance analytics</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardContent className="p-8">
                <Zap className="w-12 h-12 text-pink-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Content Creation</h3>
                <p className="text-gray-300 mb-4">
                  Viral-worthy content that stops the scroll and drives engagement across all platforms.
                </p>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li>• Video production & editing</li>
                  <li>• Graphic design & animation</li>
                  <li>• Copywriting & storytelling</li>
                  <li>• Trend-based content</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardContent className="p-8">
                <Users className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Community Management</h3>
                <p className="text-gray-300 mb-4">
                  Build and nurture engaged communities that become loyal brand advocates.
                </p>
                <ul className="text-sm text-gray-400 space-y-2">
                  <li>• 24/7 community monitoring</li>
                  <li>• Engagement optimization</li>
                  <li>• Crisis management</li>
                  <li>• Influencer partnerships</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Recent Success Stories</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              See how we've helped brands achieve remarkable growth through strategic social media
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolioProjects.map((project) => (
              <Card
                key={project.id}
                className="bg-white/5 border-white/10 backdrop-blur-sm overflow-hidden group hover:bg-white/10 transition-all duration-300"
              >
                <div className="aspect-video bg-gradient-to-br from-purple-600/20 to-pink-600/20 relative overflow-hidden">
                  <img
                    src={project.image_url || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <Badge className="mb-3 bg-purple-600/20 text-purple-300 border-purple-500/30">
                    {project.category}
                  </Badge>
                  <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {Object.entries(project.results_metrics).map(([key, value]) => (
                      <Badge key={key} variant="outline" className="border-white/20 text-white text-xs">
                        {key}: {value}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Don't just take our word for it - hear from the brands we've helped grow
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.testimonial}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.client_name}</div>
                    <div className="text-sm text-gray-400">{testimonial.client_title}</div>
                    <div className="text-sm text-purple-400">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600/20 to-pink-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Social Media?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's create campaigns that don't just get likes - they drive real business results.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 px-8 py-6 text-lg"
            >
              Start Your Project Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
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
                <li>Social Media Strategy</li>
                <li>Content Creation</li>
                <li>Community Management</li>
                <li>Influencer Marketing</li>
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
              <h4 className="font-semibold text-white mb-4">Connect</h4>
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
