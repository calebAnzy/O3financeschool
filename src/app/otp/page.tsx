"use client";

// import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"; // 👈 Supabase client
import { useState } from "react";
import Link from "next/link";

export default function OtpPage() {
const [showPassword, setShowPassword] = useState(false);
// const supabase = createClientComponentClient();

// Google Sign-in handler
// const handleGoogleSignIn = async () => {
// await supabase.auth.signInWithOAuth({
// provider: "google",
// options: {
// redirectTo: `${window.location.origin}/dashboard`, // 👈 where to redirect after login
// },
// });
// };

return (
<div className="flex h-screen p-3">
    {/* Right column (form) */}
    <div className="w-full md flex items-center justify-center p-8">
        <div className="w-full max-w-md">
            {/* Step badge */}
            <div className="flex justify-center mb-6">
                <div
                    className="w-12 h-12 text-2xl flex items-center justify-center rounded-full bg-[#006AF2] text-white font-bold">
                    3
                </div>
            </div>
            <h2 className="font-semibold mb-1 text-center">Enter 6-digit code sent to</h2>
            <p className="mb-2 text-center">caleb1475@gmail.com</p>

            <form className="space-y-4">
                {/* Otp */}
                <input type="text" placeholder="Code" className="w-full border rounded-md p-3" />

                {/* Submit button */}
                <button type="submit" className="w-full bg-[#006AF2] text-white py-3 rounded-md">
                    Sign In
                </button>
                <p className="mb-3 text-center">Didn't get OTP?<Link href="../login"
                        className="text-sm text-blue-600 hover:underline p-2">
                        Resend.
                    </Link></p>

            </form>
        </div>
    </div>
</div>
);
}