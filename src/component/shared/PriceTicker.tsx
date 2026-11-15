"use client";

import { useEffect, useState } from "react";
import MarqueeText from "react-marquee-text";

interface IProduct {
  id: number;
  nameBn: string;
  image: string;
  today: number;
  unit: string;
  change: {
    dir: string;
    pct: number;
  };
}

const PriceTicker = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch(
          "https://openapi.programming-hero.com/api/bazardor/products",
        );

        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }

        const data: IProduct[] = await res.json();
        setProducts(data.slice(0, 8));
      } catch (error) {
        return;
      }
    };

    getProducts();
  }, []);

  if (products.length === 0) {
    return null;
  }

  return (
    <div className="w-full overflow-hidden border-b border-gray-200 bg-white text-black">
      <MarqueeText>
        {products
          .map((product) => {
            return `${product.image} ${product.nameBn} ${product.today} টাকা/${product.unit} ${
              product.change.dir === "up"
                ? "▲"
                : product.change.dir === "down"
                  ? "▼"
                  : "—"
            } ${product.change.pct}%`;
          })
          .join("     |     ")}
      </MarqueeText>
    </div>
  );
};

export default PriceTicker;
