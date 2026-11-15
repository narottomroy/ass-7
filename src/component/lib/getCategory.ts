// import { ICategory } from "@/types/category";

import { ICategory } from "../types/category";
const getCategory = async (slug: string): Promise<ICategory> => {
  const res = await fetch(
    `https://api.api-store.workers.dev/api/bazardor/categories/${slug}`,
  );

  if (!res.ok) {
    throw new Error("Failed to fetch category");
  }

  const category: ICategory = await res.json();
  return category;
};

export default getCategory;
