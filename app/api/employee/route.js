import { connectDB } from "@/utils/connectDB";
import { NextResponse } from "next/server";
import crypto from "crypto";
import bcrypt from "bcryptjs";
import Employee from "@/models/employee";

connectDB()


export async function POST(req) {
    try {


        const { fullname, username , password ,commission , gender , apikey ,user } = await req.json();

        const hashedPassword = await bcrypt.hash(password, 10);




        const employee = await Employee.create({
            fullname,
            username,
            password:hashedPassword,
            gender,
            apikey,
            idOrder:"10000",
            user,
            commission
        });

        return NextResponse.json({message:"seccessfully" })

    } catch (error) {
        console.log("error server :", error.message)
        return NextResponse.json({ errorMessage: error.message }, { status: 500 })
    }
}


