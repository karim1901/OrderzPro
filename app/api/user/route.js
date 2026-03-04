import User from "@/models/user";
import { connectDB } from "@/utils/connectDB";
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import crypto from "crypto";

connectDB()


export async function  POST(req) {
    try {

        // const adduser = await User.create(data)

        const { fullname, username, email, password } = await req.json();


        const token = crypto.randomBytes(32).toString("hex");

        const user = await User.create({
          fullname,
          username,
          email,
          password,
          verificationToken: token,
          verificationTokenExpires: Date.now() + 1000 * 60 * 60, // 1 hour
        });

        

        sendVerificationEmail(email ,token )

        return NextResponse.json("succe")

    } catch (error) {
        console.log("error server :" ,error.message )
        return NextResponse.json({errorMessage:error.message},{status:500})
    }
}














export async function sendVerificationEmail(email, token) {

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const verificationLink = `http://orderzpro.vercel.app/api/verify?token=${token}`;

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Verify your email",
    html: `
    <div style="margin:0;padding:0;background-color:#f4f6f8;font-family:Arial,sans-serif;">
      <table align="center" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin:auto;background:#ffffff;border-radius:8px;overflow:hidden;">
        
        <!-- Header -->
        <tr>
          <td style="background-color:#111827;padding:30px;text-align:center;">
            <img src="https://orderzpro.vercel.app/logo/logo.png" alt="Logo" width="120" style="display:block;margin:auto;" />
          </td>
        </tr>
  
        <!-- Body -->
        <tr>
          <td style="padding:40px 30px;text-align:center;">
            <h2 style="color:#111827;margin-bottom:20px;">Confirm your account</h2>
            <p style="color:#6b7280;font-size:16px;margin-bottom:30px;">
              Thank you for signing up. Please confirm your email address to activate your account.
            </p>
  
            <a href="${verificationLink}" 
               style="display:inline-block;padding:14px 28px;background-color:#2563eb;color:#ffffff;
                      text-decoration:none;border-radius:6px;font-weight:bold;font-size:16px;">
               Verify Email
            </a>
  
            <p style="margin-top:30px;color:#9ca3af;font-size:14px;">
              If you didn’t create an account, you can safely ignore this email.
            </p>
          </td>
        </tr>
  
        <!-- Footer -->
        <tr>
          <td style="background:#f9fafb;padding:20px;text-align:center;font-size:12px;color:#9ca3af;">
            © ${new Date().getFullYear()} Your Company. All rights reserved.
          </td>
        </tr>
  
      </table>
    </div>
  `
  });
}