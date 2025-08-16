import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Clock, MessageSquare, Send } from "lucide-react"
import Link from "next/link"
import ContactForm from "@/components/contact-form"

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    details: "hello@creativeflow.com",
    description: "Send us an email anytime",
  },
  {
    icon: Phone,
    title: "Call Us",
    details: "+1 (555) 123-4567",
    description: "Mon-Fri from 8am to 6pm",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    details: "123 Creative Street, Design District, NY 10001",
    description: "Come say hello at our office",
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: "Mon-Fri: 8am-6pm EST",
    description: "Weekend support available",
  },
]

const faqs = [
  {
    question: "How long does it take to see results?",
    answer:
      "Most clients see initial engagement improvements within 2-4 weeks, with significant growth typically occurring within 2-3 months of consistent strategy implementation.",
  },
  {
    question: "Do you work with small businesses?",
    answer:
      "We work with businesses of all sizes, from startups to Fortune 500 companies. Our strategies are tailored to fit your budget and goals.",
  },
  {
    question: "What platforms do you specialize in?",
    answer:
      "We specialize in all major social media platforms including Instagram, TikTok, Facebook, LinkedIn, Twitter, YouTube, and emerging platforms.",
  },
  {
    question: "Can you help with content creation?",
    answer:
      "Yes! We offer full-service content creation including video production, graphic design, photography, copywriting, and animation.",
  },
]

export default function ContactPage() {
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
              <Link href="/portfolio" className="text-gray-300 hover:text-white transition-colors">
                Portfolio
              </Link>
              <Link href="/#about" className="text-gray-300 hover:text-white transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-white">
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
            <MessageSquare className="w-4 h-4 mr-2" />
            Let's Start a Conversation
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Get In
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Touch</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your social media presence? Let's discuss your goals and create a strategy that drives
            real results.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl text-white mb-2">Send us a message</CardTitle>
                  <p className="text-gray-300">Fill out the form below and we'll get back to you within 24 hours.</p>
                </CardHeader>
                <CardContent>
                  <ContactForm />
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Contact Information</h2>
                <p className="text-gray-300 mb-8">
                  We're here to help you succeed. Reach out through any of these channels and let's start building
                  something amazing together.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon
                  return (
                    <Card key={index} className="bg-white/5 border-white/10 backdrop-blur-sm">
                      <CardContent className="p-6">
                        <IconComponent className="w-8 h-8 text-purple-400 mb-3" />
                        <h3 className="font-semibold text-white mb-2">{info.title}</h3>
                        <p className="text-gray-300 font-medium mb-1">{info.details}</p>
                        <p className="text-sm text-gray-400">{info.description}</p>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>

              {/* Map Placeholder */}
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-purple-600/20 to-pink-600/20 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-purple-400 mx-auto mb-3" />
                      <p className="text-white font-semibold">Our Office Location</p>
                      <p className="text-gray-300 text-sm">123 Creative Street, Design District</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-300">Quick answers to common questions about our services</p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Book a free consultation call to discuss your social media goals and how we can help achieve them.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 px-8 py-6 text-lg"
          >
            Schedule Free Consultation
            <Send className="ml-2 w-5 h-5" />
          </Button>
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
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
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
