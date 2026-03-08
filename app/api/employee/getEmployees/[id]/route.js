import Employee from "@/models/employee";
import { NextResponse } from "next/server";




export async function GET(req , {params}){
    try {

        const {id} = await params

        const employees = await Employee.find({user:id}).select("-password")

        return NextResponse.json(employees)
        
    } catch (error) {
        console.log(error.message)
        return NextResponse.json({message:error.message},{status:401})
    }
}