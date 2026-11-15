import CategoryProducts from "@/component/category/CategoryProducts";
import getCategories from "@/component/lib/getCategories";
import getProducts from "@/component/lib/getProducts";
import Link from "next/link";

interface ICategoryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

const CategoryPage = async ({ params }: ICategoryPageProps) => {
  const { slug } = await params;

  const categories = await getCategories();
  const products = await getProducts(slug);

  const category = categories.find((item) => item.slug === slug);

  if (!category) {
    return (
      <main className="mx-auto flex min-h-[60vh] max-w-7xl items-center justify-center px-4">
        <div className="text-center">
          <div className="text-5xl">😕</div>

          <h1 className="mt-4 text-2xl font-bold text-gray-900">
            ক্যাটাগরি পাওয়া যায়নি
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            আপনি যে ক্যাটাগরিটি খুঁজছেন সেটি পাওয়া যায়নি।
          </p>

          <Link
            href="/"
            className="mt-5 inline-block rounded-lg bg-green-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-green-800"
          >
            হোম পেজে ফিরে যান
          </Link>
        </div>
      </main>
    );
  }

  const categoryProducts = products.filter(
    (product) => product.category === slug,
  );

  return (
    <main className="mx-auto min-h-[70vh] max-w-7xl px-4 py-8">
      <section className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-7">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-green-50 text-3xl">
            {category.icon}
          </div>

          <div>
            <p className="text-xs font-medium text-green-600">ক্যাটাগরি</p>

            <h1 className="mt-1 text-2xl font-bold text-gray-900 sm:text-3xl">
              {category.nameBn}
            </h1>

            <p className="mt-1 text-sm text-gray-500">
              {categoryProducts.length}টি পণ্য পাওয়া গেছে
            </p>
          </div>
        </div>
      </section>

      {categoryProducts.length > 0 ? (
        <CategoryProducts products={categoryProducts} />
      ) : (
        <section className="py-16 text-center">
          <div className="text-5xl">📦</div>

          <h2 className="mt-4 text-xl font-bold text-gray-900">
            কোনো পণ্য পাওয়া যায়নি
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            এই ক্যাটাগরিতে বর্তমানে কোনো পণ্য নেই।
          </p>

          <Link
            href="/"
            className="mt-5 inline-block rounded-lg bg-green-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-green-800"
          >
            হোম পেজে ফিরে যান
          </Link>
        </section>
      )}
    </main>
  );
};

export default CategoryPage;
