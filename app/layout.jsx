import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "OrderzPro",
  manifest: '/manifest.json',
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} max-h-screen overflow-hidden`}>
        <Toaster />

        {children}
      </body>
    </html>
  );
}
