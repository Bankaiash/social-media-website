"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Eye, Mail, Phone, Calendar } from "lucide-react"
import { useState } from "react"

interface Inquiry {
  id: string
  name: string
  email: string
  company?: string
  phone?: string
  service_type: string
  budget_range?: string
  timeline?: string
  project_description: string
  status: string
  created_at: string
}

interface InquiriesTableProps {
  inquiries: Inquiry[]
}

const statusColors = {
  new: "bg-blue-600/20 text-blue-300 border-blue-500/30",
  contacted: "bg-yellow-600/20 text-yellow-300 border-yellow-500/30",
  qualified: "bg-green-600/20 text-green-300 border-green-500/30",
  proposal_sent: "bg-purple-600/20 text-purple-300 border-purple-500/30",
  won: "bg-emerald-600/20 text-emerald-300 border-emerald-500/30",
  lost: "bg-red-600/20 text-red-300 border-red-500/30",
  on_hold: "bg-gray-600/20 text-gray-300 border-gray-500/30",
}

export default function InquiriesTable({ inquiries }: InquiriesTableProps) {
  const [selectedInquiry, setSelectedInquiry] = useState<Inquiry | null>(null)

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    })
  }

  const formatServiceType = (serviceType: string) => {
    return serviceType
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  }

  if (inquiries.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-400">No inquiries yet</p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {inquiries.map((inquiry) => (
        <Card
          key={inquiry.id}
          className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors cursor-pointer"
          onClick={() => setSelectedInquiry(inquiry)}
        >
          <CardContent className="p-4">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className="font-semibold text-white">{inquiry.name}</h3>
                  <Badge className={statusColors[inquiry.status as keyof typeof statusColors] || statusColors.new}>
                    {inquiry.status.replace("_", " ")}
                  </Badge>
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-400 mb-2">
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 mr-1" />
                    {inquiry.email}
                  </div>
                  {inquiry.company && (
                    <div className="flex items-center">
                      <span>{inquiry.company}</span>
                    </div>
                  )}
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {formatDate(inquiry.created_at)}
                  </div>
                </div>
                <div className="flex items-center space-x-4 text-sm">
                  <Badge variant="outline" className="border-white/20 text-white">
                    {formatServiceType(inquiry.service_type)}
                  </Badge>
                  {inquiry.budget_range && (
                    <Badge variant="outline" className="border-white/20 text-white">
                      {inquiry.budget_range}
                    </Badge>
                  )}
                </div>
              </div>
              <Button
                size="sm"
                variant="ghost"
                className="text-purple-400 hover:text-purple-300 hover:bg-purple-600/10"
              >
                <Eye className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}

      {/* Inquiry Detail Modal */}
      {selectedInquiry && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <Card className="bg-slate-800 border-white/10 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">{selectedInquiry.name}</h2>
                  <Badge
                    className={statusColors[selectedInquiry.status as keyof typeof statusColors] || statusColors.new}
                  >
                    {selectedInquiry.status.replace("_", " ")}
                  </Badge>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedInquiry(null)}
                  className="text-gray-400 hover:text-white"
                >
                  ✕
                </Button>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-gray-400">Email</label>
                    <p className="text-white">{selectedInquiry.email}</p>
                  </div>
                  {selectedInquiry.phone && (
                    <div>
                      <label className="text-sm text-gray-400">Phone</label>
                      <p className="text-white">{selectedInquiry.phone}</p>
                    </div>
                  )}
                  {selectedInquiry.company && (
                    <div>
                      <label className="text-sm text-gray-400">Company</label>
                      <p className="text-white">{selectedInquiry.company}</p>
                    </div>
                  )}
                  <div>
                    <label className="text-sm text-gray-400">Service Interest</label>
                    <p className="text-white">{formatServiceType(selectedInquiry.service_type)}</p>
                  </div>
                  {selectedInquiry.budget_range && (
                    <div>
                      <label className="text-sm text-gray-400">Budget Range</label>
                      <p className="text-white">{selectedInquiry.budget_range}</p>
                    </div>
                  )}
                  {selectedInquiry.timeline && (
                    <div>
                      <label className="text-sm text-gray-400">Timeline</label>
                      <p className="text-white">{selectedInquiry.timeline}</p>
                    </div>
                  )}
                </div>

                <div>
                  <label className="text-sm text-gray-400">Project Description</label>
                  <p className="text-white mt-1">{selectedInquiry.project_description}</p>
                </div>

                <div>
                  <label className="text-sm text-gray-400">Submitted</label>
                  <p className="text-white">{formatDate(selectedInquiry.created_at)}</p>
                </div>
              </div>

              <div className="flex space-x-3 mt-6">
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0">
                  <Mail className="w-4 h-4 mr-2" />
                  Send Email
                </Button>
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 bg-transparent">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Client
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
