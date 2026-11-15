"use client";

import { authClient } from "@/component/lib/auth-client";

const ProfilePage = () => {
  const { data: session, isPending } = authClient.useSession();

  const user = session?.user;

  const handleProfileUpdate = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const name = formData.get("name")?.toString().trim();
    const image = formData.get("image")?.toString().trim();

    const newUserData: {
      name?: string;
      image?: string;
    } = {};

    if (name) {
      newUserData.name = name;
    }

    if (image) {
      newUserData.image = image;
    }

    await authClient.updateUser(newUserData);
  };

  const handleLogout = async () => {
    await authClient.signOut();
    // callback = "/";
  };

  if (isPending) {
    return (
      <div className="min-h-screen bg-[#f1f6f2] p-10 text-center">
        Loading profile...
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-[#f1f6f2] p-10 text-center">
        Please sign in to view your profile.
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#f1f6f2] px-4 py-12">
      <div className="mx-auto max-w-3xl">
        <div className="mb-5 mt-5">
          <h1 className="text-xl font-bold text-gray-800">আমার প্রোফাইল</h1>

          <p className="mt-1 text-xs text-gray-500">
            আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
          </p>
        </div>

        <div className="mb-4 flex flex-col items-center justify-between gap-4 rounded-xl border border-gray-200 bg-white/80 p-4 sm:flex-row">
          <div className="flex items-center gap-3">
            {typeof user.image === "string" && user.image.trim() !== "" && (
              <img
                src={user.image}
                alt="User profile"
                width={42}
                height={42}
                className="h-10 w-10 rounded-lg object-cover"
              />
            )}

            {/* User Name and Email */}
            <div>
              <h2 className="text-sm font-semibold text-gray-800">
                {user.name}
              </h2>

              <p className="text-xs text-gray-500">{user.email}</p>
            </div>
          </div>

          <button
            type="button"
            onClick={handleLogout}
            className="rounded-md border border-red-400 px-3 py-2 text-xs font-medium text-red-500 transition hover:bg-red-50"
          >
            ↪ সাইন আউট
          </button>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white/80 p-5">
          <h2 className="mb-5 text-sm font-semibold text-gray-800">তথ্য</h2>

          <form onSubmit={handleProfileUpdate}>
            <label
              htmlFor="name"
              className="mb-2 block text-xs font-medium text-gray-700"
            >
              নাম
            </label>

            <input
              id="name"
              name="name"
              type="text"
              defaultValue={user.name || ""}
              placeholder="আপনার নাম লিখুন"
              className="h-9 w-full rounded-md border border-gray-200 bg-transparent px-3 text-sm text-gray-800 outline-none transition focus:border-green-600 focus:ring-1 focus:ring-green-600"
            />

            <label
              htmlFor="image"
              className="mb-1.5 mt-4 block text-sm font-medium text-gray-700"
            >
              Image
            </label>

            <input
              id="image"
              name="image"
              type="url"
              defaultValue={typeof user.image === "string" ? user.image : ""}
              placeholder="যেমন: https://example.com/image.jpg"
              className="w-full rounded-lg border border-[#dce6de] bg-transparent px-3 py-2.5 text-sm outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
            />

            <button
              type="submit"
              className="mt-4 h-9 w-full rounded-md bg-green-700 text-xs font-semibold text-white shadow-sm transition hover:bg-green-800"
            >
              আপডেট
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default ProfilePage;
