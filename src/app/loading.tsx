const HomeLoading = () => {
  return (
    <main className="min-h-screen bg-[#f8faf8]">
      {/* Hero skeleton */}
      <section className="mx-auto max-w-7xl px-4 pt-6">
        <div className="flex min-h-[220px] items-center justify-between overflow-hidden rounded-2xl border border-gray-200 bg-white px-6 py-8 sm:px-10">
          <div className="w-full max-w-2xl space-y-4">
            {/* Small badge */}
            <div className="h-6 w-40 animate-pulse rounded-full bg-gray-200" />

            {/* Heading */}
            <div className="h-9 w-3/4 animate-pulse rounded-lg bg-gray-200" />

            {/* Description */}
            <div className="space-y-2">
              <div className="h-4 w-full animate-pulse rounded bg-gray-200" />

              <div className="h-4 w-5/6 animate-pulse rounded bg-gray-200" />
            </div>

            {/* Button */}
            <div className="h-10 w-32 animate-pulse rounded-lg bg-gray-200" />
          </div>

          {/* Hero image skeleton */}
          <div className="hidden h-32 w-40 animate-pulse rounded-xl bg-gray-200 sm:block" />
        </div>
      </section>

      {/* Rising products skeleton */}
      <ProductSectionSkeleton />

      {/* Falling products skeleton */}
      <ProductSectionSkeleton />

      {/* All products skeleton */}
      <section className="mx-auto mt-10 max-w-7xl px-4 pb-12">
        <div className="mb-4 space-y-2">
          <div className="h-5 w-24 animate-pulse rounded bg-gray-200" />

          <div className="h-3 w-40 animate-pulse rounded bg-gray-200" />
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <ProductCardSkeleton key={index} />
          ))}
        </div>
      </section>
    </main>
  );
};

/*
  দাম বেড়েছে / কমেছে section-এর
  loading skeleton।

  একই design দুই জায়গায় ব্যবহার করছি,
  তাই আলাদা করে দুইবার code লিখতে হচ্ছে না।
*/
const ProductSectionSkeleton = () => {
  return (
    <section className="mx-auto mt-8 max-w-7xl px-4">
      {/* Section heading */}
      <div className="mb-3 flex items-center gap-2">
        <div className="h-4 w-4 animate-pulse rounded bg-gray-200" />

        <div className="h-5 w-32 animate-pulse rounded bg-gray-200" />
      </div>

      {/* Product cards */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <ProductCardSkeleton key={index} />
        ))}
      </div>
    </section>
  );
};

/*
  একটি product card-এর skeleton।
*/
const ProductCardSkeleton = () => {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4">
      {/* Product name */}
      <div className="flex items-center gap-3">
        <div className="h-11 w-11 animate-pulse rounded-lg bg-gray-200" />

        <div className="flex-1 space-y-2">
          <div className="h-4 w-28 animate-pulse rounded bg-gray-200" />

          <div className="h-3 w-16 animate-pulse rounded bg-gray-200" />
        </div>
      </div>

      {/* Price */}
      <div className="mt-5 flex items-end justify-between">
        <div className="space-y-2">
          <div className="h-3 w-16 animate-pulse rounded bg-gray-200" />

          <div className="h-5 w-24 animate-pulse rounded bg-gray-200" />
        </div>

        {/* Change badge */}
        <div className="h-6 w-14 animate-pulse rounded-full bg-gray-200" />
      </div>
    </div>
  );
};

export default HomeLoading;
