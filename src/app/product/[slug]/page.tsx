import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";

import getProduct from "@/component/lib/getProducts";

interface IProductDetailsPageProps {
  params: Promise<{
    slug: string;
  }>;
}
const ProductDetails = async ({ params }: IProductDetailsPageProps) => {
  const { slug } = await params;

  const products = await getProduct(slug);

  if (!products?.length) {
    notFound();
  }

  const product = products[10];

  const priceChange = product.today - product.yesterday;

  const priceChangePercent =
    product.yesterday > 0
      ? ((priceChange / product.yesterday) * 100).toFixed(1)
      : "0";

  return (
    <main className="min-h-screen bg-[#f1f6f2] px-3 py-5 sm:px-5 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-4">
        <section className="rounded-xl bg-white p-4 shadow-sm sm:p-5">
          <div className="flex items-center justify-between gap-4">
            {/* Product information */}
            <div className="flex min-w-0 items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#f3f7f3]">
                <span className="text-2xl">{product.image}</span>
              </div>

              <div>
                <h1 className="text-base font-bold text-gray-800 sm:text-lg">
                  {product.nameBn}
                </h1>

                <p className="mt-1 text-[10px] text-gray-500 sm:text-xs">
                  প্রতি {product.unit} - {product.categoryNameBn}
                </p>

                <p className="mt-1 text-[9px] text-gray-400 sm:text-[10px]">
                  বাজারভেদে দামের কিছুটা পার্থক্য হতে পারে
                </p>
              </div>
            </div>

            <div className="shrink-0 rounded-xl bg-[#f3f7f3] px-4 py-2 text-center">
              <p className="text-[9px] text-gray-500">আজকের দাম</p>

              <p className="text-xl font-bold text-gray-800 sm:text-2xl">
                ৳{product.today}
              </p>

              <p
                className={`text-[10px] font-medium ${
                  priceChange > 0
                    ? "text-red-500"
                    : priceChange < 0
                      ? "text-green-600"
                      : "text-gray-500"
                }`}
              >
                {priceChange > 0 ? "▲" : priceChange < 0 ? "▼" : "—"}{" "}
                {Math.abs(Number(priceChangePercent))}%
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-2 text-xs font-semibold text-gray-700">
            দামের সারসংক্ষেপ
          </h2>

          <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
            <div className="rounded-xl border border-[#dce7df] bg-white p-3">
              <p className="text-[9px] text-gray-500">আজ</p>

              <p className="mt-1 text-sm font-bold text-green-600">
                ৳{product.today} / {product.unit}
              </p>

              <p className="mt-1 text-[8px] text-gray-400">বর্তমান বাজারদর</p>
            </div>

            <div className="rounded-xl border border-[#dce7df] bg-white p-3">
              <p className="text-[9px] text-gray-500">গতকাল</p>

              <p className="mt-1 text-sm font-bold text-red-500">
                ৳{product.yesterday} / {product.unit}
              </p>

              <p className="mt-1 text-[8px] text-gray-400">গতকালের বাজারদর</p>
            </div>
            <div className="rounded-xl border border-[#dce7df] bg-white p-3">
              <p className="text-[9px] text-gray-500">গত সপ্তাহ</p>

              <p className="mt-1 text-sm font-bold text-green-600">
                ৳{product.lastWeek} / {product.unit}
              </p>

              <p className="mt-1 text-[8px] text-gray-400">
                গত সপ্তাহের বাজারদর
              </p>
            </div>
          </div>
        </section>

        <section className="overflow-hidden rounded-xl bg-white">
          <div className="p-3 sm:p-4">
            <h2 className="text-xs font-semibold text-gray-700">
              বাজারভিত্তিক আজকের দাম
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px] border-collapse text-left">
              <thead>
                <tr className="border-y border-[#dce3de] bg-[#f7f9f7]">
                  <th className="px-3 py-2 text-[10px] font-medium text-gray-500">
                    বাজার
                  </th>

                  <th className="px-3 py-2 text-[10px] font-medium text-gray-500">
                    এলাকা
                  </th>

                  <th className="px-3 py-2 text-[10px] font-medium text-gray-500">
                    বর্তমান
                  </th>

                  <th className="px-3 py-2 text-[10px] font-medium text-gray-500">
                    গতকাল
                  </th>

                  <th className="px-3 py-2 text-[10px] font-medium text-gray-500">
                    গত সপ্তাহ
                  </th>
                </tr>
              </thead>

              <tbody>
                {product.markets.map((market, index) => {
                  return (
                    <tr
                      key={`${market.market}-${index}`}
                      className="border-b border-[#dce3de] last:border-b-0"
                    >
                      <td className="px-3 py-2 text-[10px] font-medium text-gray-700">
                        {market.market}
                      </td>

                      <td className="px-3 py-2 text-[10px] text-gray-500">
                        {market.division}
                      </td>

                      <td className="px-3 py-2 text-[10px] font-semibold text-green-600">
                        ৳{market.min}
                      </td>

                      <td className="px-3 py-2 text-[10px] font-semibold text-red-500">
                        ৳{market.max}
                      </td>

                      <td className="px-3 py-2 text-[10px] text-gray-600">
                        ৳{market.min} - ৳{market.max}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>

        <div>
          <Link
            href="/"
            className="inline-flex rounded-lg bg-green-700 px-4 py-2 text-xs font-medium text-white transition hover:bg-green-800"
          >
            ← হোমে ফিরে যান
          </Link>
        </div>
      </div>
    </main>
  );
};

const ProductLoading = () => {
  return (
    <main className="min-h-screen bg-[#f1f6f2] px-3 py-5 sm:px-5 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-4">
        <div className="animate-pulse rounded-xl bg-white p-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="h-14 w-14 rounded-xl bg-gray-200" />

              <div>
                <div className="h-5 w-40 rounded bg-gray-200" />
                <div className="mt-2 h-3 w-24 rounded bg-gray-200" />
              </div>
            </div>

            <div className="h-20 w-24 rounded-xl bg-gray-200" />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
          <div className="h-24 animate-pulse rounded-xl bg-gray-200" />
          <div className="h-24 animate-pulse rounded-xl bg-gray-200" />
          <div className="h-24 animate-pulse rounded-xl bg-gray-200" />
        </div>

        <div className="h-80 animate-pulse rounded-xl bg-gray-200" />
      </div>
    </main>
  );
};

const ProductDetailsPage = ({ params }: IProductDetailsPageProps) => {
  return (
    <Suspense fallback={<ProductLoading />}>
      <ProductDetails params={params} />
    </Suspense>
  );
};

export default ProductDetailsPage;
