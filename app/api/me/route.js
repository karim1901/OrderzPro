// app/api/me/route.js
import { NextResponse } from "next/server";
import { verify } from "jsonwebtoken";
import User from "@/models/user";

export async function GET(req) {
  const token = req.cookies.get("token")?.value;

  console.log("token", token)

  if (!token) return NextResponse.json({ user: null }, { status: 401 });

  try {
    const decoded = verify(token, process.env.JWT_SECRET);

    const userComplet = await User.findById(decoded.id).select("-password");
    return NextResponse.json({
      user: {
        _id: userComplet._id,
        username: userComplet.username,
        fullname: userComplet.fullname,
        email: userComplet.email,
        isVerified: userComplet.isVerified,
        isApi: userComplet.isApi,
        createdAt:userComplet.createdAt
      }
    });
  } catch (err) {
    return NextResponse.json({ user: null }, { status: 401 });
  }
}