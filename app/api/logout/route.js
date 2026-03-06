import { NextResponse } from "next/server";

export async function POST() {
    try {
        const response = NextResponse.json({
            message: "Logged out successfully"
        });

        response.cookies.set("token", "", {
            httpOnly: true,
            expires: new Date(0), // حذف الكوكي
            path: "/",
        });

        return response;
    } catch (error) {
        return NextResponse.json({message:error.message},{status:401})
    }


}