import User from "@/models/user";
import { connectDB } from "@/utils/connectDB";

import { NextResponse } from "next/server";

connectDB()

export async function GET(req) {


  const { searchParams } = new URL(req.url);
  const token = searchParams.get("token");

  if (!token) {
    return NextResponse.json(
      { message: "Token is required" },
      { status: 400 }
    );
  }

  const user = await User.findOne({
    verificationToken: token,
    verificationTokenExpires: { $gt: Date.now() },
  });

  if (!user) {
    return NextResponse.json(
      { message: "Invalid or expired token" },
      { status: 400 }
    );
  }

  user.isVerified = true;
  user.verificationToken = undefined;
  user.verificationTokenExpires = undefined;
  await user.save();

  return NextResponse.json(
    { message: "Email verified successfully" },
    { status: 200 }
  );
}