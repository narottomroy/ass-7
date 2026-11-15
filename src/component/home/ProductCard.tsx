import Link from "next/link";
import { IProduct } from "../types/product";

interface IProductCardProps {
  product: IProduct;
}

const ProductCard = ({ product }: IProductCardProps) => {
  const isUp = product.change?.dir === "up";
  const isDown = product.change?.dir === "down";

  return (
    <Link
      href={`/product/${product.slug}`}
      className="group block rounded-xl border border-gray-200 bg-white p-4 transition duration-200 hover:-translate-y-1 hover:shadow-md"
    >
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#f1f6f2] text-2xl">
          {product.image}
        </div>

        <div className="min-w-0">
          <h3 className="truncate text-sm font-bold text-gray-800">
            {product.nameBn}
          </h3>

          <p className="mt-0.5 text-[11px] text-gray-500">{product.unit}</p>
        </div>
      </div>

      <div className="mt-5 flex items-end justify-between gap-3">
        <div>
          <p className="text-[10px] text-gray-500">আজকের দাম aa</p>

          <p className="mt-0.5 text-lg font-bold text-gray-900">
            {product.today} <span className="text-xs font-medium">টাকা</span>
          </p>
        </div>

        <span
          className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${
            isUp
              ? "bg-red-50 text-red-500"
              : isDown
                ? "bg-green-50 text-green-600"
                : "bg-gray-100 text-gray-600"
          }`}
        >
          {isUp ? "▲" : isDown ? "▼" : "—"} {product.change?.pct ?? 0}%
        </span>
      </div>
    </Link>
  );
};

export default ProductCard;
