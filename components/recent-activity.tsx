import { Badge } from "@/components/ui/badge"
import { MessageSquare, User, TrendingUp } from "lucide-react"

interface Inquiry {
  id: string
  name: string
  email: string
  company?: string
  service_type: string
  status: string
  created_at: string
}

interface RecentActivityProps {
  inquiries: Inquiry[]
}

export default function RecentActivity({ inquiries }: RecentActivityProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60))

    if (diffInHours < 1) return "Just now"
    if (diffInHours < 24) return `${diffInHours}h ago`
    if (diffInHours < 48) return "Yesterday"
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric" })
  }

  const getActivityIcon = (status: string) => {
    switch (status) {
      case "new":
        return <MessageSquare className="w-4 h-4 text-blue-400" />
      case "qualified":
        return <TrendingUp className="w-4 h-4 text-green-400" />
      default:
        return <User className="w-4 h-4 text-purple-400" />
    }
  }

  const getActivityText = (inquiry: Inquiry) => {
    switch (inquiry.status) {
      case "new":
        return `New inquiry from ${inquiry.name}`
      case "contacted":
        return `Contacted ${inquiry.name}`
      case "qualified":
        return `${inquiry.name} qualified as lead`
      default:
        return `Update on ${inquiry.name}`
    }
  }

  if (inquiries.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-400">No recent activity</p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {inquiries.slice(0, 8).map((inquiry) => (
        <div
          key={inquiry.id}
          className="flex items-start space-x-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
        >
          <div className="flex-shrink-0 mt-1">{getActivityIcon(inquiry.status)}</div>
          <div className="flex-1 min-w-0">
            <p className="text-sm text-white font-medium">{getActivityText(inquiry)}</p>
            <div className="flex items-center space-x-2 mt-1">
              <Badge variant="outline" className="border-white/20 text-gray-400 text-xs">
                {inquiry.service_type.replace("-", " ")}
              </Badge>
              <span className="text-xs text-gray-500">{formatDate(inquiry.created_at)}</span>
            </div>
          </div>
        </div>
      ))}

      <div className="text-center pt-4">
        <button className="text-sm text-purple-400 hover:text-purple-300 transition-colors">View all activity</button>
      </div>
    </div>
  )
}
