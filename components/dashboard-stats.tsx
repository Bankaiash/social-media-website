import type React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, TrendingDown, Minus } from "lucide-react"

interface StatsProps {
  title: string
  value: string | number
  change?: number
  icon: React.ReactNode
}

function StatCard({ title, value, change, icon }: StatsProps) {
  const getTrendIcon = () => {
    if (!change) return <Minus className="w-4 h-4 text-gray-400" />
    if (change > 0) return <TrendingUp className="w-4 h-4 text-green-400" />
    return <TrendingDown className="w-4 h-4 text-red-400" />
  }

  const getTrendColor = () => {
    if (!change) return "text-gray-400"
    if (change > 0) return "text-green-400"
    return "text-red-400"
  }

  return (
    <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-400 mb-1">{title}</p>
            <p className="text-2xl font-bold text-white">{value}</p>
            {change !== undefined && (
              <div className={`flex items-center mt-2 text-sm ${getTrendColor()}`}>
                {getTrendIcon()}
                <span className="ml-1">
                  {change > 0 ? "+" : ""}
                  {change}% from last month
                </span>
              </div>
            )}
          </div>
          <div className="text-purple-400">{icon}</div>
        </div>
      </CardContent>
    </Card>
  )
}

export default function DashboardStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Stats cards would be rendered here */}
    </div>
  )
}
