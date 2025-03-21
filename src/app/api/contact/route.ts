import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { sendEmail } from "@/lib/email";

// Rate limiting map: IP -> { count: number, timestamp: number }
const rateLimit = new Map();

// Rate limit settings
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour
const MAX_REQUESTS = 5; // 5 requests per hour

// Form validation schema
const contactSchema = z.object({
  firstName: z.string().min(1).max(50),
  lastName: z.string().min(1).max(50),
  email: z.string().email(),
  phone: z.string().min(1).max(20),
  message: z.string().min(10).max(1000),
});

export async function POST(request: NextRequest) {
  try {
    // Get client IP
    const ip = request.ip || "anonymous";
    
    // Check rate limit
    const now = Date.now();
    const userRateLimit = rateLimit.get(ip) || { count: 0, timestamp: now };
    
    // Reset rate limit if window has passed
    if (now - userRateLimit.timestamp > RATE_LIMIT_WINDOW) {
      userRateLimit.count = 0;
      userRateLimit.timestamp = now;
    }
    
    // Check if rate limit exceeded
    if (userRateLimit.count >= MAX_REQUESTS) {
      return NextResponse.json(
        { error: "Rate limit exceeded. Please try again later." },
        { status: 429 }
      );
    }

    // Parse and validate request body
    const body = await request.json();
    const validatedData = contactSchema.parse(body);
    
    // Format email content
    const fullName = `${validatedData.firstName} ${validatedData.lastName}`;
    const subject = `New Contact Form Submission from ${fullName}`;
    const text = `
      Name: ${fullName}
      Email: ${validatedData.email}
      Phone: ${validatedData.phone}
      
      Message:
      ${validatedData.message}
    `;
    const html = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${fullName}</p>
      <p><strong>Email:</strong> ${validatedData.email}</p>
      <p><strong>Phone:</strong> ${validatedData.phone}</p>
      <h3>Message:</h3>
      <p>${validatedData.message.replace(/\n/g, '<br>')}</p>
    `;

    // Send email
    const emailResult = await sendEmail({
      subject,
      text,
      html,
      replyTo: validatedData.email,
    });

    if (!emailResult.success) {
      throw new Error(emailResult.error || "Failed to send email");
    }

    // Update rate limit
    userRateLimit.count++;
    rateLimit.set(ip, userRateLimit);

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid form data", details: error.errors },
        { status: 400 }
      );
    }

    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to submit form" },
      { status: 500 }
    );
  }
}
