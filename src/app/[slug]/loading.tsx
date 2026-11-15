const CategoryLoading = () => {
  return (
    <main className="mx-auto min-h-[70vh] max-w-7xl px-4 py-8">
      {/* Category header skeleton */}
      <section className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-7">
        <div className="flex items-center gap-4">
          {/* Icon skeleton */}
          <div className="h-14 w-14 animate-pulse rounded-xl bg-gray-200" />

          <div className="space-y-2">
            {/* Small text skeleton */}
            <div className="h-3 w-20 animate-pulse rounded bg-gray-200" />

            {/* Title skeleton */}
            <div className="h-7 w-32 animate-pulse rounded bg-gray-200" />

            {/* Description skeleton */}
            <div className="h-3 w-40 animate-pulse rounded bg-gray-200" />
          </div>
        </div>
      </section>

      {/* Products skeleton */}
      <section className="mt-6">
        <div className="mb-4">
          <div className="h-4 w-32 animate-pulse rounded bg-gray-200" />
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="rounded-xl border border-gray-200 bg-white p-4"
            >
              {/* Product top */}
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 animate-pulse rounded-lg bg-gray-200" />

                <div className="flex-1 space-y-2">
                  <div className="h-4 w-24 animate-pulse rounded bg-gray-200" />

                  <div className="h-3 w-14 animate-pulse rounded bg-gray-200" />
                </div>
              </div>

              {/* Product bottom */}
              <div className="mt-5 flex items-end justify-between">
                <div className="space-y-2">
                  <div className="h-3 w-16 animate-pulse rounded bg-gray-200" />

                  <div className="h-5 w-24 animate-pulse rounded bg-gray-200" />
                </div>

                <div className="h-6 w-14 animate-pulse rounded-full bg-gray-200" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default CategoryLoading;
