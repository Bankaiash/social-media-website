"use client"

import { useState } from "react"
import { useFormStatus } from "react-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Loader2, Send, CheckCircle, AlertCircle } from "lucide-react"
import { submitContactForm } from "@/lib/actions/contact"

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <Button
      type="submit"
      disabled={pending}
      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 py-6 text-lg"
    >
      {pending ? (
        <>
          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
          Sending Message...
        </>
      ) : (
        <>
          <Send className="mr-2 h-5 w-5" />
          Send Message
        </>
      )}
    </Button>
  )
}

export default function ContactForm() {
  const [formState, setFormState] = useState<{
    success?: boolean
    error?: string
  } | null>(null)

  async function handleSubmit(formData: FormData) {
    setFormState(null)
    const result = await submitContactForm(formData)
    setFormState(result)
  }

  return (
    <form action={handleSubmit} className="space-y-6">
      {formState?.error && (
        <div className="bg-red-500/10 border border-red-500/50 text-red-300 px-4 py-3 rounded-lg flex items-center">
          <AlertCircle className="w-5 h-5 mr-2 flex-shrink-0" />
          {formState.error}
        </div>
      )}

      {formState?.success && (
        <div className="bg-green-500/10 border border-green-500/50 text-green-300 px-4 py-3 rounded-lg flex items-center">
          <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0" />
          Thank you! We'll get back to you within 24 hours.
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-gray-300">
            Full Name *
          </Label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="John Doe"
            required
            className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-purple-500"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="text-gray-300">
            Email Address *
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="john@company.com"
            required
            className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-purple-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="company" className="text-gray-300">
            Company Name
          </Label>
          <Input
            id="company"
            name="company"
            type="text"
            placeholder="Your Company"
            className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-purple-500"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-gray-300">
            Phone Number
          </Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+1 (555) 123-4567"
            className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-purple-500"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="service_type" className="text-gray-300">
          Service Interest *
        </Label>
        <Select name="service_type" required>
          <SelectTrigger className="bg-white/5 border-white/10 text-white focus:border-purple-500">
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent className="bg-slate-800 border-white/10">
            <SelectItem value="social-media-strategy">Social Media Strategy</SelectItem>
            <SelectItem value="content-creation">Content Creation</SelectItem>
            <SelectItem value="community-management">Community Management</SelectItem>
            <SelectItem value="paid-advertising">Paid Social Advertising</SelectItem>
            <SelectItem value="influencer-marketing">Influencer Marketing</SelectItem>
            <SelectItem value="analytics-reporting">Analytics & Reporting</SelectItem>
            <SelectItem value="full-service">Full Service Package</SelectItem>
            <SelectItem value="consultation">Consultation Only</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="budget_range" className="text-gray-300">
          Monthly Budget Range
        </Label>
        <Select name="budget_range">
          <SelectTrigger className="bg-white/5 border-white/10 text-white focus:border-purple-500">
            <SelectValue placeholder="Select budget range" />
          </SelectTrigger>
          <SelectContent className="bg-slate-800 border-white/10">
            <SelectItem value="under-2500">Under $2,500</SelectItem>
            <SelectItem value="2500-5000">$2,500 - $5,000</SelectItem>
            <SelectItem value="5000-10000">$5,000 - $10,000</SelectItem>
            <SelectItem value="10000-25000">$10,000 - $25,000</SelectItem>
            <SelectItem value="25000-plus">$25,000+</SelectItem>
            <SelectItem value="not-sure">Not sure yet</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="timeline" className="text-gray-300">
          Project Timeline
        </Label>
        <Select name="timeline">
          <SelectTrigger className="bg-white/5 border-white/10 text-white focus:border-purple-500">
            <SelectValue placeholder="When do you want to start?" />
          </SelectTrigger>
          <SelectContent className="bg-slate-800 border-white/10">
            <SelectItem value="asap">ASAP</SelectItem>
            <SelectItem value="within-month">Within a month</SelectItem>
            <SelectItem value="1-3-months">1-3 months</SelectItem>
            <SelectItem value="3-6-months">3-6 months</SelectItem>
            <SelectItem value="just-exploring">Just exploring</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="project_description" className="text-gray-300">
          Project Description *
        </Label>
        <Textarea
          id="project_description"
          name="project_description"
          placeholder="Tell us about your project, goals, current challenges, and what you hope to achieve..."
          required
          rows={5}
          className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-purple-500 resize-none"
        />
      </div>

      <SubmitButton />
    </form>
  )
}
