import Link from "next/link";

interface ICategory {
  slug: string;
  nameBn: string;
  icon: string;
}

const getCategories = async () => {
  const res = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/categories",
  );

  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }

  const data: ICategory[] = await res.json();

  return data;
};

const NavLink = async () => {
  const categories = await getCategories();

  return (
    <nav className="overflow-x-auto">
      <div className="flex min-w-max items-center gap-2 py-2">
        {categories.map((category) => (
          <Link
            key={category.slug}
            href={`/${category.slug}`}
            className="flex shrink-0 items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-green-50 hover:text-green-700"
          >
            <span>{category.icon}</span>

            <span>{category.nameBn}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default NavLink;
