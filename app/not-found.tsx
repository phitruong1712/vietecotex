import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold text-neutral-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-neutral-700 mb-4">
          Page Not Found
        </h2>
        <p className="text-neutral-600 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-neutral-900 text-white rounded-xl hover:bg-neutral-800 transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}

