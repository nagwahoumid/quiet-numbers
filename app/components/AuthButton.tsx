'use client';

import { useUser } from '@auth0/nextjs-auth0/client';
import Link from 'next/link';

export default function AuthButton() {
  const { user, isLoading } = useUser();

  if (isLoading) {
    return (
      <div className="flex flex-col gap-6">
        <p className="text-neutral-400">Loading...</p>
      </div>
    );
  }

  if (user) {
    return (
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-4">
          <div className="flex flex-col gap-1">
            <p className="text-sm text-neutral-500">Welcome back</p>
            <p className="text-xl text-neutral-900 font-medium">
              {user.name || user.email}
            </p>
          </div>
        </div>
        <Link
          href="/api/auth/logout"
          className="inline-flex items-center justify-center w-32 h-11 rounded-md border border-neutral-300 bg-white text-neutral-700 text-sm font-medium transition-colors hover:bg-neutral-50 hover:border-neutral-400"
        >
          Log out
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      <p className="text-neutral-600">
        Sign in to access your financial dashboard.
      </p>
      <Link
        href="/api/auth/login"
        className="inline-flex items-center justify-center w-32 h-11 rounded-md bg-neutral-900 text-white text-sm font-medium transition-colors hover:bg-neutral-800"
      >
        Log in
      </Link>
    </div>
  );
}

