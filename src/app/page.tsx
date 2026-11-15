import AllProducts from "@/component/home/AllProducts";
import FallingProducts from "@/component/home/FallingProducts";
import Hero from "@/component/home/Hero";
import RisingProducts from "@/component/home/RisingProducts";
import getProducts from "@/component/lib/getProducts";

const HomePage = async () => {
  const products = await getProducts("");

  return (
    <main className="min-h-screen bg-[#f8faf8]">
      <Hero />
      <RisingProducts products={products} />
      <FallingProducts products={products} />
      <AllProducts products={products} />
    </main>
  );
};

export default HomePage;
