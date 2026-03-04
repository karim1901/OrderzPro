import User from "@/models/user";
import { NextResponse } from "next/server";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const token = searchParams.get("token");

  const user = await User.findOne({
    verificationToken: token,
    verificationTokenExpires: { $gt: Date.now() },
  });

  if (!user) {
    // إذا التوكن غير صالح، ممكن توجه المستخدم لصفحة error
    return NextResponse.redirect("/verify-error");
  }

  // تأكيد الحساب
  user.isVerified = true;
  user.verificationToken = undefined;
  user.verificationTokenExpires = undefined;
  await user.save();

  // توجيه المستخدم لصفحة login أو dashboard
  return NextResponse.redirect("/login");
}