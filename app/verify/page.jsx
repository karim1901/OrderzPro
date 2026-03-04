"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function VerifyPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const token = searchParams.get("token");

  const [status, setStatus] = useState("loading");

  useEffect(() => {
    if (!token) {
      setStatus("error");
      return;
    }

    const verifyEmail = async () => {
      try {
        const res = await fetch(`/api/verify?token=${token}`);
        if (res.ok) {
          setStatus("success");

          setTimeout(() => {
            router.push("/en/login");
          }, 3000);
        } else {
          setStatus("error");
        }
      } catch (err) {
        setStatus("error");
      }
    };

    verifyEmail();
  }, [token, router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md text-center">

        {status === "loading" && (
          <>
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-6"></div>
            <h2 className="text-xl font-semibold text-gray-800">
              Verifying your email...
            </h2>
          </>
        )}

        {status === "success" && (
          <>
            <div className="text-green-500 text-5xl mb-4">✓</div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Email Verified Successfully!
            </h2>
            <p className="text-gray-500">
              Redirecting you to login page...
            </p>
          </>
        )}

        {status === "error" && (
          <>
            <div className="text-red-500 text-5xl mb-4">✕</div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Invalid or Expired Token
            </h2>
            <button
              onClick={() => router.push("/en/login")}
              className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Go to Login
            </button>
          </>
        )}

      </div>
    </div>
  );
}
