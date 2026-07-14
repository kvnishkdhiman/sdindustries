import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message, product, spamHoney } = body;

    // Honeypot validation
    if (spamHoney) {
      return NextResponse.json(
        { success: false, message: "Spam detected" },
        { status: 400 }
      );
    }

    // Basic validation
    if (!name || !email || !phone || !message || !product) {
      return NextResponse.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      );
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: "Invalid email format" },
        { status: 400 }
      );
    }

    // TODO: Integrate with email service (Resend, SendGrid, Nodemailer, etc.)
    // TODO: Add rate limiting (e.g., using Upstash Redis)
    // TODO: Add reCAPTCHA/hCaptcha verification
    // TODO: Store in database for lead tracking
    // TODO: Send notification to sales team

    console.log("Product inquiry submission:", { name, email, phone, message, product });

    // Simulate email sending delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    return NextResponse.json({
      success: true,
      message: "Your product inquiry has been received. Our sales engineering team will contact you shortly.",
    });
  } catch {
    return NextResponse.json(
      { success: false, message: "Failed to process request" },
      { status: 500 }
    );
  }
}