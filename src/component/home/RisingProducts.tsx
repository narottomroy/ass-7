// import type { IProduct } from "@/types/productType";
import { IProduct } from "../types/product";
import ProductCard from "./ProductCard";

interface IRisingProductsProps {
  products: IProduct[];
}

const RisingProducts = ({ products }: IRisingProductsProps) => {
  const risingProducts = products
    .filter((product) => product.change.dir === "up")
    .sort((a, b) => b.change.pct - a.change.pct)
    .slice(0, 6);

  return (
    <section className="mx-auto mt-8 max-w-7xl px-4">
      <div className="mb-3 flex items-center gap-2">
        <span className="text-sm font-bold text-red-500">▲</span>

        <h2 className="text-lg font-bold text-gray-900">আজ দাম বেড়েছে</h2>
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {risingProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default RisingProducts;
