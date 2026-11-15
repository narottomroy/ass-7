// import { IProduct } from "@/types/product";
import ProductCard from "../home/ProductCard";
import { IProduct } from "../types/product";

interface ICategoryProductsProps {
  products: IProduct[];
}

const CategoryProducts = ({ products }: ICategoryProductsProps) => {
  return (
    <section className="mt-6">
      <div className="mb-4">
        <p className="text-xs text-gray-500">
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

export default CategoryProducts;
