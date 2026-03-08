
import OzonApi from "@/models/ozonapi";
import { connectDB } from "@/utils/connectDB";
import { NextResponse } from "next/server";

// export const dynamic = "dynamic-force";

connectDB()

export async function GET(request, {params}) {
  try {

    // const { Promise } = params
    const { id } = await params

    const apikey = await OzonApi.findOne({ user: id })

    return NextResponse.json({
        apikey:apikey._id,
    });

  } catch (error) {
    return NextResponse.json({ message: error.message });
  }
}