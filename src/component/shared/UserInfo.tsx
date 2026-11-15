"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { authClient } from "../lib/auth-client";

const UserInfo = () => {
  const router = useRouter();

  const { data: session, isPending } = authClient.useSession();

  const user = session?.user;

  const handleLogout = async () => {
    await authClient.signOut();

    // Logout করার পর Home page-এ যাবে
    router.push("/");
    router.refresh();
  };

  if (isPending) {
    return <div className="h-10 w-32 animate-pulse rounded-lg bg-gray-100" />;
  }

  // Login করা না থাকলে
  if (!user) {
    return (
      <div className="flex items-center gap-2">
        <Link
          href="/signin"
          className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-800 transition hover:bg-gray-100"
        >
          সাইন ইন
        </Link>

        <Link
          href="/signup"
          className="rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-green-700"
        >
          সাইন আপ
        </Link>
      </div>
    );
  }

  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="flex cursor-pointer items-center gap-2 rounded-lg p-2 transition hover:bg-gray-100"
      >
        {user.image ? (
          <img
            src={user.image}
            alt={user.name || "User"}
            className="h-10 w-10 rounded-full object-cover"
          />
        ) : (
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-700 text-sm font-semibold text-white">
            {user.name?.charAt(0).toUpperCase() || "U"}
          </div>
        )}

        <span className="max-w-32 truncate text-sm font-semibold text-gray-800">
          {user.name}
        </span>

        <span className="text-sm text-gray-500">▼</span>
      </div>

      <ul
        tabIndex={0}
        className="dropdown-content menu z-50 mt-3 w-52 rounded-xl border border-gray-100 bg-white p-2 shadow-lg"
      >
        <li>
          <Link href="/profile" className="flex items-center gap-2">
            <img
              src={user.image || "/default-avatar.png"}
              alt={user.name || "Profile"}
              className="h-9 w-9 rounded-full object-cover"
            />

            <span>{user.name}</span>
          </Link>
        </li>

        <li>
          <button type="button" onClick={handleLogout} className="text-red-500">
            <span>↪</span>
            <span>Logout</span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default UserInfo;
