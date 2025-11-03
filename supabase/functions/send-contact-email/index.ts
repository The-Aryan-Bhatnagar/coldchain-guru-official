import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const MAILJET_API_KEY = Deno.env.get("MAILJET_API_KEY");
const MAILJET_SECRET_KEY = Deno.env.get("MAILJET_SECRET_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  company?: string;
  message: string;
  formType: "contact" | "offer";
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, subject, company, message, formType }: ContactEmailRequest = await req.json();

    console.log("Processing email request:", { name, email, formType });

    // Email to admin
    const adminEmailHtml = formType === "offer" 
      ? `
        <h2>New Consultancy Offer Claim</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Company:</strong> ${company || "Not provided"}</p>
        <p><strong>Message:</strong></p>
        <p>${message || "No message provided"}</p>
        <hr>
        <p style="color: #666; font-size: 12px;">This is an automated email from Temperature Guru website.</p>
      `
      : `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Subject:</strong> ${subject || "No subject"}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <hr>
        <p style="color: #666; font-size: 12px;">This is an automated email from Temperature Guru website.</p>
      `;

    // Send email to admin using Mailjet
    const adminResponse = await fetch("https://api.mailjet.com/v3.1/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Basic ${btoa(`${MAILJET_API_KEY}:${MAILJET_SECRET_KEY}`)}`,
      },
      body: JSON.stringify({
        Messages: [{
          From: {
            Email: "noreply@temperatureguru.com",
            Name: "Temperature Guru"
          },
          To: [{
            Email: "temperatureguru@gmail.com",
            Name: "Temperature Guru Admin"
          }],
          Subject: formType === "offer" 
            ? `New Consultancy Offer Claim - ${name}` 
            : `Contact Form: ${subject || "New Inquiry"} - ${name}`,
          HTMLPart: adminEmailHtml
        }]
      })
    });

    const adminData = await adminResponse.json();
    console.log("Admin email sent:", adminData);

    // Confirmation email to user
    const userEmailHtml = formType === "offer"
      ? `
        <h2>Thank You for Your Interest!</h2>
        <p>Dear ${name},</p>
        <p>We have received your request to claim our special consultancy offer. Our team will review your requirements and get back to you within 24 hours.</p>
        <p><strong>Offer Details:</strong></p>
        <ul>
          <li>Special Price: ₹18,000 (Save ₹7,000)</li>
          <li>Valid till: 1st Jan 2026</li>
          <li>Expert cold storage consultation</li>
          <li>Humidity control solutions</li>
          <li>35+ years of industry expertise</li>
        </ul>
        <p>If you have any urgent questions, feel free to call us at +91 9837493412 or +91 7351712217.</p>
        <p>Best regards,<br>Temperature Guru Team</p>
      `
      : `
        <h2>Thank You for Contacting Us!</h2>
        <p>Dear ${name},</p>
        <p>We have received your message and will get back to you as soon as possible.</p>
        <p>Our team typically responds within 24 hours during business hours (Mon-Sat, 9 AM - 6 PM IST).</p>
        <p>If you need immediate assistance, please call us at +91 9837493412 or +91 7351712217.</p>
        <p>Best regards,<br>Temperature Guru Team</p>
      `;

    // Send confirmation email to user using Mailjet
    const userResponse = await fetch("https://api.mailjet.com/v3.1/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Basic ${btoa(`${MAILJET_API_KEY}:${MAILJET_SECRET_KEY}`)}`,
      },
      body: JSON.stringify({
        Messages: [{
          From: {
            Email: "noreply@temperatureguru.com",
            Name: "Temperature Guru"
          },
          To: [{
            Email: email,
            Name: name
          }],
          Subject: formType === "offer" 
            ? "Thank You for Claiming Our Special Offer!" 
            : "We Received Your Message - Temperature Guru",
          HTMLPart: userEmailHtml
        }]
      })
    });

    const userData = await userResponse.json();
    console.log("User confirmation email sent:", userData);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Emails sent successfully"
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ 
        success: false,
        error: error.message 
      }),
      {
        status: 500,
        headers: { 
          "Content-Type": "application/json", 
          ...corsHeaders 
        },
      }
    );
  }
};

serve(handler);
