import { NextResponse } from "next/server";
import { verify } from "jsonwebtoken";
import User from "@/models/user";

export async function middleware(req) {

  const token = req.cookies.get("token")?.value;
  const { pathname } = req.nextUrl;

  const authPages = [
    "/en/login",
    "/en/signup",
    "/ar/login",
    "/ar/signup"
  ];

  const publicPages = [
    "/",
    "/en",
    "/ar"
  ];

  console.log("hi login")


  
  // إذا الصفحة login أو signup
  if (authPages.includes(pathname)) {


    if (token) {
      try {

        const decoded = verify(token, process.env.JWT_SECRET);

        const user = await User.findById(decoded._id);
    
        if (!user || user.status === "block") {
          return NextResponse.redirect(new URL("/", req.url));
        }

        const lang = pathname.startsWith("/ar") ? "ar" : "en";

        return NextResponse.redirect(
          new URL(`/${lang}/dashboard`, req.url)
        );
    
      } catch {
        return NextResponse.next();
      }
    }

    return NextResponse.next();
  }


  // إذا صفحة عامة
  if (publicPages.includes(pathname)) {
    return NextResponse.next();
  }

  // باقي الصفحات تحتاج token
  if (!token) {
    return NextResponse.redirect(
      new URL("/en/login", req.url)
    );
  }

  try {

    const decoded = verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded._id);

    if (!user || user.status === "block") {
      return NextResponse.redirect(new URL("/", req.url));
    }

    return NextResponse.next();

  } catch (error) {

    return NextResponse.redirect(
      new URL("/en/login", req.url)
    );


  }

}










export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};