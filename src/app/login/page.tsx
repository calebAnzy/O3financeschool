"use client";

// import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"; // 👈 Supabase client
import { supabase } from "@/lib/supabaseClient";
import Image from "next/image";
import { useState } from "react";
import AuthSlider from "@/components/AuthSlider";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
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

const handleSignIn = async (e) => {
  e.preventDefault();
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    console.error(error.message);
  } else {
    console.log("User logged in:", data);
  }
};

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
            <h2 className="text-3xl font-semibold mb-1">Welcome back</h2>
            <p className="mb-2">Sign in to access your course and certificate</p>

            <form className="space-y-4">
                {/* Email */}
                <input type="email" name="email" placeholder="Email" className="w-full border rounded-md p-3" />

                {/* Password with toggle */}
                <div className="relative">
                    <input type={showPassword ? "text" : "password" } placeholder="Password"
                        className="w-full border rounded-md p-3 pr-10" />
                    <button type="button" className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                        onClick={()=> setShowPassword((prev) => !prev)}
                        >
                        {showPassword ?
                        <EyeOff size={20} /> :
                        <Eye size={20} />}
                    </button>
                </div>

                {/* Forgot password link */}
                <div className="flex justify-end">
                    <a href="#" className="text-sm text-blue-600 hover:underline">
                        Forgot password?
                    </a>
                </div>

                {/* Submit button */}
                <button type="submit" className="w-full bg-[#006AF2] text-white py-3 rounded-md">
                    Sign In
                </button>
                <p className="mb-3 text-center">Don't have an account?<Link href="../register"
                        className="text-sm text-blue-600 hover:underline p-2">
                        Sign up.
                    </Link></p>

            </form>

            {/* Divider */}
            <div className="flex items-center my-6">
                <div className="flex-grow h-px bg-gray-300" />
                <span className="px-2 text-gray-500 text-sm">or</span>
                <div className="flex-grow h-px bg-gray-300" />
            </div>

            {/* Google Sign-in Button */}
            <button // onClick={handleGoogleSignIn}
                className="w-full flex items-center justify-center border border-gray-300 py-3 rounded-md hover:bg-gray-50 transition">
                <Image src="/images/google.png" alt="Google Logo" width={20} height={20} className="mr-2" />
                <span className="text-gray-700 font-medium">
                    Sign up with Google
                </span>
            </button>
        </div>
    </div>
</div>
);
}