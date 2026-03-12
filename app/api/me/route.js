// app/api/me/route.js
import { NextResponse } from "next/server";
import { verify } from "jsonwebtoken";
import User from "@/models/user";
import Employee from "@/models/employee";

export async function GET(req) {
  const token = req.cookies.get("token")?.value;

  console.log("token", token)

  if (!token) return NextResponse.json({ user: null }, { status: 401 });

  try {
    const decoded = verify(token, process.env.JWT_SECRET);

    const userComplet = await User.findById(decoded.id).select("-password");

    // console.log(userComplet)

    if(userComplet == null){
      const employeeComplet = await Employee.findById(decoded.id).select("-password");

      if(employeeComplet == null){
        return NextResponse.json({message:"user null "},{status:401})
      }

      return NextResponse.json({
        user: {
          _id: employeeComplet._id,
          username: employeeComplet.username,
          fullname: employeeComplet.fullname,
          email: employeeComplet.email,
          isVerified: employeeComplet.isVerified,
          isApi: employeeComplet.isApi,
          role:employeeComplet.role,
          createdAt:employeeComplet.createdAt
        }
      });

    }


    return NextResponse.json({
      user: {
        _id: userComplet._id,
        username: userComplet.username,
        fullname: userComplet.fullname,
        email: userComplet.email,
        isVerified: userComplet.isVerified,
        isApi: userComplet.isApi,
        role:userComplet.role,
        createdAt:userComplet.createdAt
      }
    });
  } catch (err) {
    console.log("error token : " , err.message)
    return NextResponse.json({ user: null }, { status: 401 });
  }
}