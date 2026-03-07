import OzonApi from "@/models/ozonapi"
import User from "@/models/user"
import { connectDB } from "@/utils/connectDB"
import { NextResponse } from "next/server"



connectDB()



export async function POST(req) {
    try {

        const data = await req.json()

        console.log("data api ozon : ",data)

        const ozonpai = await OzonApi.create(data)

        const updateIsApiUser = await User.updateOne({_id:data.user},{isApi:true})

        return NextResponse.json({message:"create api successfully ."})
        
    } catch (error) {
        console.log("ozonpai", error.message )
        return NextResponse.json({error:error.message},{status:401})
    }
}