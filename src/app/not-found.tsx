'use client';

import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-screen text-white dark:text-neutral-100 relative transition-colors duration-300 flex items-center justify-center">
      <div className="text-center px-6">
        <div className="mb-8">
          <h1 className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-purple-600 mb-4">
            404
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-white dark:text-neutral-100 mb-4">
            Page Not Found
          </h2>
          <p className="text-xl text-neutral-300 dark:text-neutral-200 max-w-md mx-auto leading-relaxed">
            Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-medium rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/25"
          >
            <Home className="h-4 w-4" />
            Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/20 hover:bg-white/20 text-white font-medium rounded-lg transition-all duration-300 hover:scale-105"
          >
            <ArrowLeft className="h-4 w-4" />
            Go Back
          </button>
        </div>

        <div className="mt-12 text-neutral-400 dark:text-neutral-300">
          <p className="text-sm">
            If you believe this is an error, please{' '}
            <Link href="/contact" className="text-blue-400 hover:text-blue-300 underline">
              contact support
            </Link>
          </p>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-green-500/10 rounded-full blur-xl animate-pulse delay-500" />
      </div>
    </main>
  );
}
