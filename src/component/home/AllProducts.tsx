import { IProduct } from "../types/product";
import ProductCard from "./ProductCard";

interface IAllProductsProps {
  products: IProduct[];
}

const AllProducts = ({ products }: IAllProductsProps) => {
  return (
    <section id="সব-পণ্য" className="mx-auto mt-10 max-w-7xl px-4 pb-12">
      <div className="mb-4">
        <h2 className="text-lg font-bold text-gray-900">সব পণ্য</h2>

        <p className="mt-1 text-xs text-gray-500">
          মোট {products.length}টি পণ্য দেখানো হচ্ছে
        </p>
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default AllProducts;
