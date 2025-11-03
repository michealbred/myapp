'use client';

'use client';

import { useEffect } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Global error:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-gray-900 text-white">
      <div className="text-center max-w-md">
        <div className="mb-8">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-red-500/20 rounded-full">
              <AlertTriangle className="h-12 w-12 text-red-400" />
            </div>
          </div>

          <h1 className="text-3xl font-bold text-white mb-4">
            Something went wrong!
          </h1>

          <p className="text-neutral-300 leading-relaxed mb-6">
            We're sorry, but an unexpected error occurred. Our team has been notified and is working to fix the issue.
          </p>

          {error.digest && (
            <p className="text-sm text-neutral-400 mb-6 font-mono bg-gray-800 p-2 rounded">
              Error ID: {error.digest}
            </p>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-medium rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/25"
          >
            <RefreshCw className="h-4 w-4" />
            Try Again
          </button>

          <button
            onClick={() => window.location.href = '/'}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/20 hover:bg-white/20 text-white font-medium rounded-lg transition-all duration-300 hover:scale-105"
          >
            <Home className="h-4 w-4" />
            Go Home
          </button>
        </div>

        <div className="mt-8 text-neutral-400">
          <p className="text-sm">
            If this problem persists, please{' '}
            <button
              onClick={() => window.location.href = '/contact'}
              className="text-blue-400 hover:text-blue-300 underline cursor-pointer"
            >
              contact support
            </button>
          </p>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-red-500/5 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-orange-500/5 rounded-full blur-xl animate-pulse delay-1000" />
      </div>
    </div>
  );
}
