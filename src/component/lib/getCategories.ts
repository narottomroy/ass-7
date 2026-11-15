import { ICategory } from "../types/category";

const getCategories = async (): Promise<ICategory[]> => {
  const res = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/categories",
  );

  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }

  const categories: ICategory[] = await res.json();
  return categories;
};

export default getCategories;
