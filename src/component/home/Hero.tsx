import Link from "next/link";
const date = new Date().toLocaleDateString("bn-BD", {
  dateStyle: "full",
});

const Hero = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-6">
      <div className="flex min-h-[220px] items-center justify-between overflow-hidden rounded-2xl border border-gray-200 bg-[#f8fbf8] px-6 py-8 sm:px-10">
        <div className="max-w-2xl">
          <span className="inline-block rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
            {date}
          </span>
          <h1 className="mt-3 text-2xl font-bold leading-tight text-gray-900 sm:text-3xl md:text-4xl">
            আজকের বাজারের দাম এক নজরে
          </h1>

          <p className="mt-3 max-w-xl text-sm leading-6 text-gray-600 sm:text-base">
            চাল, ডাল, তেল, সবজি, মাছ, মাংস ও অন্যান্য পণ্যের আজকের বাজারদর দেখুন
            — সহজভাবে, দ্রুত এবং এক জায়গায়।
          </p>
          <Link
            href="#সব-পণ্য"
            className="mt-5 inline-block rounded-lg bg-green-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-green-800"
          >
            সব পণ্য দেখুন
          </Link>
        </div>
        <div className="hidden text-[90px] sm:block md:text-[120px]">🍎🍊</div>
      </div>
    </section>
  );
};

export default Hero;
