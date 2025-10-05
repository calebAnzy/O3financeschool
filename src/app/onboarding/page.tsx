"use client";

// import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"; // 👈 Supabase client
import Image from "next/image";
import { useState } from "react";
import AuthSlider from "@/components/AuthSlider";
import Link from "next/link";

export default function OnboardingPage() {
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
    {/* Left column (slider/caption) */}
    <AuthSlider />

    {/* Right column (form) */}
    <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
            {/* Step badge */}
            <div className="flex justify-center mb-6">
                <div
                    className="w-12 h-12 text-2xl flex items-center justify-center rounded-full bg-[#006AF2] text-white font-bold">
                    3
                </div>
            </div>
            <h2 className="text-2xl font-semibold mb-1">Tell us a little about you.</h2>
            <p className="mb-2">Set up your account in few steps.</p>

            <form className="space-y-4">
                {/* Name */}
                <input type="text" placeholder="Full Name" className="w-full border rounded-md p-3" />

                {/* Phone */}
                <input type="text" placeholder="Phone Number" className="w-full border rounded-md p-3" />

                {/* Address */}
                <input type="text" placeholder="Residential Address" className="w-full border rounded-md p-3" />

                {/* Preference */}
                <input type="text" placeholder="Learning Preference" className="w-full border rounded-md p-3" />

                {/* Submit button */}
                <button type="submit" className="w-full bg-[#006AF2] text-white py-3 rounded-md">
                    Save & Continue
                </button>
            </form>
        </div>
    </div>
</div>
);
}