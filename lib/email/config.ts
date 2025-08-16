// Email service configuration
// You can use any email service like Resend, SendGrid, Nodemailer, etc.

export const EMAIL_CONFIG = {
  // Replace with your admin email address
  ADMIN_EMAIL: "admin@youragency.com",

  // Replace with your sending email address
  FROM_EMAIL: "noreply@youragency.com",

  // Email templates
  TEMPLATES: {
    NEW_CONSULTATION: {
      subject: (clientName: string) => `New Consultation Request from ${clientName}`,
      getBody: (data: any) => `
New Consultation Request Received!

Client Details:
- Name: ${data.name}
- Email: ${data.email}
- Company: ${data.company || "Not provided"}
- Phone: ${data.phone || "Not provided"}
- Service Interest: ${data.service_type}
- Budget Range: ${data.budget_range || "Not specified"}
- Timeline: ${data.timeline || "Not specified"}

Project Description:
${data.project_description}

Please follow up with this client within 24 hours.

---
This email was automatically generated from your agency website.
      `,
    },
  },
}

// Example integration with Resend (uncomment and configure if you want to use it)
/*
export async function sendEmailWithResend(to: string, subject: string, text: string) {
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: EMAIL_CONFIG.FROM_EMAIL,
      to,
      subject,
      text,
    }),
  })
  
  return response.ok
}
*/
