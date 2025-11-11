'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold text-neutral-900 mb-4">500</h1>
        <h2 className="text-2xl font-semibold text-neutral-700 mb-4">
          Something went wrong
        </h2>
        <p className="text-neutral-600 mb-8 max-w-md mx-auto">
          We encountered an unexpected error. Please try again.
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={reset}
            className="px-6 py-3 bg-neutral-900 text-white rounded-xl hover:bg-neutral-800 transition-colors"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="px-6 py-3 border border-neutral-300 text-neutral-700 rounded-xl hover:bg-neutral-100 transition-colors"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}


