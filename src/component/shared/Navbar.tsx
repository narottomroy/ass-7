import Link from "next/link";
import { FaCartShopping } from "react-icons/fa6";
import NavLink from "./NavLink";
import PriceTicker from "./PriceTicker";
import UserInfo from "./UserInfo";

const date = new Date().toLocaleDateString("bn-BD", {
  dateStyle: "full",
});

const Navbar = () => {
  return (
    <>
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex h-[42px] items-center justify-between gap-4">
            {/* Logo + Website Info */}
            <Link href="/" className="flex items-center gap-1.5">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-green-700 text-sm">
                <FaCartShopping />
              </div>

              <div>
                <h1 className="text-sm font-bold leading-none text-gray-900">
                  বাজার দর
                </h1>

                <p className="mt-0.5 text-[7px] leading-none text-gray-500">
                  {date}
                </p>
              </div>
            </Link>

            <UserInfo />
          </div>

          <NavLink />
        </div>
      </header>

      <PriceTicker />
    </>
  );
};

export default Navbar;
