"use server"

import { createClient } from "@/lib/supabase/server"
import { revalidatePath } from "next/cache"

async function sendNotificationEmail(formData: {
  name: string
  email: string
  company?: string
  phone?: string
  service_type: string
  budget_range?: string
  timeline?: string
  project_description: string
}) {
  try {
    // Using a simple email service - you can replace this with your preferred email service
    const emailBody = `
New Consultation Request Received!

Client Details:
- Name: ${formData.name}
- Email: ${formData.email}
- Company: ${formData.company || "Not provided"}
- Phone: ${formData.phone || "Not provided"}
- Service Interest: ${formData.service_type}
- Budget Range: ${formData.budget_range || "Not specified"}
- Timeline: ${formData.timeline || "Not specified"}

Project Description:
${formData.project_description}

Please follow up with this client within 24 hours.
    `

    // You can replace this with your preferred email service (Resend, SendGrid, etc.)
    // For now, this is a placeholder that logs the email content
    console.log("Email notification would be sent:", {
      to: "admin@youragency.com", // Replace with your admin email
      subject: `New Consultation Request from ${formData.name}`,
      body: emailBody,
    })

    // If you want to use a real email service, uncomment and configure below:
    /*
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'noreply@youragency.com',
        to: 'admin@youragency.com',
        subject: `New Consultation Request from ${formData.name}`,
        text: emailBody,
      }),
    })
    */

    return true
  } catch (error) {
    console.error("Email sending error:", error)
    return false
  }
}

export async function submitContactForm(formData: FormData) {
  try {
    const name = formData.get("name")?.toString()
    const email = formData.get("email")?.toString()
    const company = formData.get("company")?.toString()
    const phone = formData.get("phone")?.toString()
    const service_type = formData.get("service_type")?.toString()
    const budget_range = formData.get("budget_range")?.toString()
    const timeline = formData.get("timeline")?.toString()
    const project_description = formData.get("project_description")?.toString()

    // Validate required fields
    if (!name || !email || !service_type || !project_description) {
      return { error: "Please fill in all required fields." }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return { error: "Please enter a valid email address." }
    }

    const supabase = createClient()

    // Insert inquiry into database
    const { error } = await supabase.from("inquiries").insert({
      name,
      email,
      company: company || null,
      phone: phone || null,
      service_type,
      budget_range: budget_range || null,
      timeline: timeline || null,
      project_description,
      status: "new",
    })

    if (error) {
      console.error("Database error:", error)
      return { error: "Something went wrong. Please try again later." }
    }

    await sendNotificationEmail({
      name,
      email,
      company: company || undefined,
      phone: phone || undefined,
      service_type,
      budget_range: budget_range || undefined,
      timeline: timeline || undefined,
      project_description,
    })

    // Revalidate any pages that might show inquiry data
    revalidatePath("/admin")

    return { success: true }
  } catch (error) {
    console.error("Contact form error:", error)
    return { error: "Something went wrong. Please try again later." }
  }
}
