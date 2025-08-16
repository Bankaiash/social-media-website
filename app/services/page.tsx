import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Zap, Users, Target, Camera, BarChart3, Megaphone, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: TrendingUp,
    title: "Social Media Strategy",
    description: "Comprehensive strategies that align with your business goals and drive measurable results.",
    features: [
      "Platform-specific content strategies",
      "Audience research & persona development",
      "Competitive analysis & benchmarking",
      "Content calendar planning",
      "Performance tracking & optimization",
      "ROI measurement & reporting",
    ],
    pricing: "Starting at $2,500/month",
    popular: false,
  },
  {
    icon: Zap,
    title: "Content Creation",
    description: "Viral-worthy content that stops the scroll and drives engagement across all platforms.",
    features: [
      "Video production & editing",
      "Graphic design & animation",
      "Photography & visual assets",
      "Copywriting & storytelling",
      "Trend-based content creation",
      "Brand-consistent templates",
    ],
    pricing: "Starting at $3,500/month",
    popular: true,
  },
  {
    icon: Users,
    title: "Community Management",
    description: "Build and nurture engaged communities that become loyal brand advocates.",
    features: [
      "24/7 community monitoring",
      "Engagement optimization",
      "Customer service integration",
      "Crisis management",
      "User-generated content campaigns",
      "Community growth strategies",
    ],
    pricing: "Starting at $2,000/month",
    popular: false,
  },
  {
    icon: Target,
    title: "Paid Social Advertising",
    description: "Data-driven ad campaigns that maximize ROI and drive conversions.",
    features: [
      "Campaign strategy & setup",
      "Audience targeting & segmentation",
      "Creative development & testing",
      "Budget optimization",
      "Performance monitoring",
      "Conversion tracking & attribution",
    ],
    pricing: "Starting at $4,000/month + ad spend",
    popular: false,
  },
  {
    icon: Camera,
    title: "Influencer Marketing",
    description: "Strategic partnerships with influencers that amplify your brand reach.",
    features: [
      "Influencer identification & vetting",
      "Campaign strategy & planning",
      "Contract negotiation",
      "Content collaboration",
      "Performance tracking",
      "ROI measurement",
    ],
    pricing: "Starting at $5,000/campaign",
    popular: false,
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Comprehensive insights that inform strategy and demonstrate ROI.",
    features: [
      "Custom dashboard creation",
      "Performance analytics",
      "Competitor benchmarking",
      "Audience insights",
      "ROI calculation",
      "Monthly strategy reports",
    ],
    pricing: "Starting at $1,500/month",
    popular: false,
  },
]

const processSteps = [
  {
    step: "01",
    title: "Discovery & Strategy",
    description: "We dive deep into your brand, audience, and goals to create a tailored strategy.",
  },
  {
    step: "02",
    title: "Content Planning",
    description: "Develop a comprehensive content calendar aligned with your brand voice and objectives.",
  },
  {
    step: "03",
    title: "Creation & Production",
    description: "Our creative team produces high-quality content that resonates with your audience.",
  },
  {
    step: "04",
    title: "Launch & Optimize",
    description: "Deploy campaigns and continuously optimize based on performance data.",
  },
]

export default function ServicesPage() {
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
              <Link href="/#services" className="text-gray-300 hover:text-white transition-colors">
                Services
              </Link>
              <Link href="/portfolio" className="text-gray-300 hover:text-white transition-colors">
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
            <Megaphone className="w-4 h-4 mr-2" />
            Full-Service Social Media Solutions
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Services That
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {" "}
              Drive Results
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            From strategy to execution, we provide comprehensive social media services that transform your online
            presence and drive real business growth.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <Card
                  key={index}
                  className={`bg-white/5 border-white/10 backdrop-blur-sm relative overflow-hidden group hover:bg-white/10 transition-all duration-300 ${
                    service.popular ? "ring-2 ring-purple-500/50" : ""
                  }`}
                >
                  {service.popular && (
                    <Badge className="absolute top-4 right-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0">
                      Most Popular
                    </Badge>
                  )}
                  <CardHeader>
                    <IconComponent className="w-12 h-12 text-purple-400 mb-4" />
                    <CardTitle className="text-xl text-white">{service.title}</CardTitle>
                    <p className="text-gray-300">{service.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="border-t border-white/10 pt-4">
                      <div className="text-lg font-semibold text-white mb-4">{service.pricing}</div>
                      <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0">
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Process</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A proven methodology that ensures every campaign delivers exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss which services are right for your brand and create a custom strategy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 px-8 py-6 text-lg"
            >
              Schedule Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg bg-transparent"
            >
              View Portfolio
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
