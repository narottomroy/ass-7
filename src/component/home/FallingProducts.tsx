import { IProduct } from "../types/product";
import ProductCard from "./ProductCard";

interface IFallingProductsProps {
  products: IProduct[];
}

const FallingProducts = ({ products }: IFallingProductsProps) => {
  const fallingProducts = products
    .filter((product) => product.change.dir === "down")
    .sort((a, b) => b.change.pct - a.change.pct)
    .slice(0, 6);

  return (
    <section className="mx-auto mt-8 max-w-7xl px-4">
      <div className="mb-3 flex items-center gap-2">
        <span className="text-sm font-bold text-green-600">▼</span>

        <h2 className="text-lg font-bold text-gray-900">আজ দাম কমেছে</h2>
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {fallingProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default FallingProducts;
