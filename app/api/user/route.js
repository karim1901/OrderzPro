import User from "@/models/user";
import { connectDB } from "@/utils/connectDB";
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import crypto from "crypto";

connectDB()


export async function POST(req) {
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





        await sendVerificationEmail(email, token)

        return NextResponse.json("seccessfully")

    } catch (error) {
        console.log("error server :", error.message)
        return NextResponse.json({ errorMessage: error.message }, { status: 500 })
    }
}













export async function sendVerificationEmail(email, token) {
    try {
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });
  
      const verificationLink = `https://orderzpro.vercel.app/verify?token=${token}`;
  
      console.log("API CALLED");
  
      const info = await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject: "Verify your email",
        html: `<h1>Test Email</h1>`
      });
  
      console.log("EMAIL SENT:", info.response);
  
    } catch (error) {
      console.error("EMAIL ERROR:", error);
    }
  }