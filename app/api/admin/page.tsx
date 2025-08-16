import InquiriesTable from "@/components/inquiries-table"
import RecentActivity from "@/components/recent-activity"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BarChart3, Users, MessageSquare, TrendingUp, Calendar, Settings } from "lucide-react"
import Link from "next/link"

function getDashboardData() {
  const inquiries = [
    {
      id: 1,
      name: "Sarah Johnson",
      email: "sarah@techstartup.com",
      company: "TechStartup Inc",
      service: "Social Media Management",
      budget: "$5,000-$10,000",
      message: "Looking for comprehensive social media strategy for our B2B SaaS platform.",
      status: "new",
      created_at: "2024-01-15T10:30:00Z",
    },
    {
      id: 2,
      name: "Mike Chen",
      email: "mike@retailbrand.com",
      company: "Retail Brand Co",
      service: "Content Creation",
      budget: "$10,000-$25,000",
      message: "Need creative content for product launches and seasonal campaigns.",
      status: "qualified",
      created_at: "2024-01-14T14:20:00Z",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      email: "emily@healthapp.com",
      company: "HealthApp Solutions",
      service: "Influencer Marketing",
      budget: "$25,000+",
      message: "Seeking influencer partnerships for health and wellness app promotion.",
      status: "in_progress",
      created_at: "2024-01-13T09:15:00Z",
    },
  ]

  const stats = {
    totalInquiries: 47,
    newInquiries: 12,
    qualifiedInquiries: 8,
    totalProjects: 23,
  }

  return { inquiries, stats }
}

export default function AdminDashboard() {
  const { inquiries, stats } = getDashboardData()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="border-b border-white/10 bg-black/20 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <Link href="/" className="font-bold text-xl text-white">
                CreativeFlow
              </Link>
              <Badge className="bg-purple-600/20 text-purple-300 border-purple-500/30">Admin Dashboard</Badge>
            </div>
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                size="sm"
                className="border-white/20 text-white hover:bg-white/10 bg-transparent"
              >
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </Button>
              <Link href="/">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                >
                  Back to Site
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Dashboard Overview</h1>
          <p className="text-gray-300">Monitor your agency's performance and manage client inquiries</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400 mb-1">Total Inquiries</p>
                  <p className="text-2xl font-bold text-white">{stats.totalInquiries}</p>
                </div>
                <MessageSquare className="w-8 h-8 text-purple-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400 mb-1">New Inquiries</p>
                  <p className="text-2xl font-bold text-white">{stats.newInquiries}</p>
                </div>
                <TrendingUp className="w-8 h-8 text-green-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400 mb-1">Qualified Leads</p>
                  <p className="text-2xl font-bold text-white">{stats.qualifiedInquiries}</p>
                </div>
                <Users className="w-8 h-8 text-blue-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-400 mb-1">Active Projects</p>
                  <p className="text-2xl font-bold text-white">{stats.totalProjects}</p>
                </div>
                <BarChart3 className="w-8 h-8 text-pink-400" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Inquiries */}
          <div className="lg:col-span-2">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl text-white flex items-center">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Recent Inquiries
                </CardTitle>
              </CardHeader>
              <CardContent>
                <InquiriesTable inquiries={inquiries} />
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity */}
          <div>
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl text-white flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <RecentActivity inquiries={inquiries} />
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8">
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl text-white">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 justify-start">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  View All Inquiries
                </Button>
                <Button
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 bg-transparent justify-start"
                >
                  <BarChart3 className="w-4 h-4 mr-2" />
                  Analytics Report
                </Button>
                <Button
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 bg-transparent justify-start"
                >
                  <Users className="w-4 h-4 mr-2" />
                  Manage Projects
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
