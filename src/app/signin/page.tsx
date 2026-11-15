"use client";

import { authClient } from "@/component/lib/auth-client";
import Link from "next/link";
import { useState } from "react";

const SignInPage = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    setErrorMessage("");

    const formData = new FormData(e.currentTarget);

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    // Sign in
    const { data, error } = await authClient.signIn.email({
      email,
      password,
      callbackURL: "/",
    });

    if (error) {
      setErrorMessage(error.message || "সাইন ইন করা যায়নি।");
      return;
    }

    if (data) {
      setErrorMessage("");
    }
  };

  const handleGoogleSignIn = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });
  };

  const handleGithubSignIn = async () => {
    await authClient.signIn.social({
      provider: "github",
      callbackURL: "/",
    });
  };

  return (
    <section className="min-h-screen bg-[#f0f5f1] px-4 py-8">
      <div className="mx-auto max-w-md">
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold text-[#25332a]">সাইন ইন করুন</h1>

          <p className="mt-1 text-sm text-gray-500">
            বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।
          </p>
        </div>

        <div className="rounded-2xl border border-[#dce6de] bg-[#fbfdfb] p-5 sm:p-6">
          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-700">
                ইমেইল
              </label>

              <input
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="w-full rounded-lg border border-[#dce6de] bg-transparent px-3 py-2.5 text-sm outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-700">
                পাসওয়ার্ড
              </label>

              <input
                name="password"
                type="password"
                required
                placeholder="কমপক্ষে ৮ অক্ষর"
                className="w-full rounded-lg border border-[#dce6de] bg-transparent px-3 py-2.5 text-sm outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
              />
            </div>
            {errorMessage && (
              <div className="rounded-lg border border-red-200 bg-red-50 px-3 py-2.5 text-sm text-red-600">
                {errorMessage}
              </div>
            )}

            <button
              type="submit"
              className="w-full rounded-lg bg-[#078c43] py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#067538] active:scale-[0.99]"
            >
              সাইন ইন
            </button>
          </form>

          <div className="my-5 flex items-center gap-3">
            <div className="h-px flex-1 bg-gray-200" />

            <span className="text-xs text-gray-500">অথবা</span>

            <div className="h-px flex-1 bg-gray-200" />
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            <button
              onClick={handleGoogleSignIn}
              type="button"
              className="flex items-center justify-center gap-2 rounded-lg border border-[#dce6de] py-2.5 text-xs font-semibold text-gray-700 transition hover:bg-gray-50 sm:text-sm"
            >
              <span className="text-base font-bold text-[#4285F4]">G</span>
              Google দিয়ে চালিয়ে যান
            </button>

            <button
              onClick={handleGithubSignIn}
              type="button"
              className="flex items-center justify-center gap-2 rounded-lg border border-[#dce6de] py-2.5 text-xs font-semibold text-gray-700 transition hover:bg-gray-50 sm:text-sm"
            >
              <span className="text-base text-gray-800">●</span>
              GitHub দিয়ে চালিয়ে যান
            </button>
          </div>

          <p className="mt-5 text-center text-sm text-gray-600">
            অ্যাকাউন্ট নেই?{" "}
            <Link
              href="/signup"
              className="font-medium text-[#078c43] hover:underline"
            >
              অ্যাকাউন্ট তৈরি করুন
            </Link>
          </p>
        </div>

        <div className="mt-5 text-center">
          <Link
            href="/"
            className="text-sm text-gray-500 transition hover:text-green-700"
          >
            ← হোম পেজে ফিরে যান
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SignInPage;
