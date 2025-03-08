'use client';

import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white dark:bg-gray-900 shadow">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between items-center">
          <div className="flex">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-semibold text-gray-900 dark:text-white">
                Wellness Resources
              </span>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
      </nav>
    </header>
  );
}
