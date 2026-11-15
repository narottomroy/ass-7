import { IProduct } from "../types/product";

const getProducts = async (slug: string): Promise<IProduct[]> => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/products",
  );

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const products: IProduct[] = await res.json();

  return products;
};

export default getProducts;
