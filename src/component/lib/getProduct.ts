import { IProduct } from "../types/product";

const getProduct = async (slug: string): Promise<IProduct | null> => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/products",
  );

  if (!res.ok) {
    return null;
  }

  const products: IProduct[] = await res.json();
  const product = products.find((item) => item.slug === slug);
  return product ?? null;
};

export default getProduct;
