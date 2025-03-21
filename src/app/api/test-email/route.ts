import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/lib/email";

// This is a test endpoint to verify email functionality
// Remove or secure this in production
export async function GET(request: NextRequest) {
  try {
    // Only allow in development mode
    if (process.env.NODE_ENV !== "development") {
      return NextResponse.json(
        { error: "This endpoint is only available in development mode" },
        { status: 403 }
      );
    }

    const emailResult = await sendEmail({
      subject: "Test Email from Nodemailer",
      text: "This is a test email to verify that Nodemailer is configured correctly.",
      html: "<h1>Test Email</h1><p>This is a test email to verify that Nodemailer is configured correctly.</p>",
      replyTo: process.env.EMAIL_USER || "",
    });

    if (!emailResult.success) {
      throw new Error(emailResult.error || "Failed to send test email");
    }

    return NextResponse.json({ 
      success: true, 
      message: "Test email sent successfully",
      messageId: emailResult.messageId
    });
  } catch (error) {
    console.error("Test email error:", error);
    return NextResponse.json(
      { error: "Failed to send test email", details: (error as Error).message },
      { status: 500 }
    );
  }
}
