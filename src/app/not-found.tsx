import Link from "next/link";

const NotFound = () => {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <p className="text-7xl font-black text-green-700">404</p>

        <div className="mt-4 text-5xl">🛒</div>

        <h1 className="mt-4 text-2xl font-bold text-gray-900 sm:text-3xl">
          পেজটি পাওয়া যায়নি
        </h1>

        <p className="mt-3 text-sm leading-6 text-gray-500">
          দুঃখিত, আপনি যে পেজটি খুঁজছেন সেটি পাওয়া যায়নি। URL ঠিক আছে কিনা
          পরীক্ষা করুন অথবা হোম পেজে ফিরে যান।
        </p>

        <Link
          href="/"
          className="mt-6 inline-flex items-center gap-2 rounded-lg bg-green-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-green-800"
        >
          <span>←</span>
          <span>হোম পেজে ফিরে যান</span>
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
