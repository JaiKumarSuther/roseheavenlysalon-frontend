"use client";
import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import useAuthStore from '../lib/auth-store';

// Routes that require authentication
const PROTECTED_ROUTES = ['/account', '/schedule', '/calendar'];

// Routes that should redirect to account if already authenticated
const AUTH_ROUTES = ['/login', '/signup', '/user-otp'];

export default function AuthMiddleware({ children }) {
  const { isAuthenticated, initialize, user, token } = useAuthStore();
  const router = useRouter();
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize auth store from localStorage
    initialize();
    setIsLoading(false);
  }, [initialize]);

  useEffect(() => {
    if (isLoading) return;

    const isProtectedRoute = PROTECTED_ROUTES.some(route => pathname.startsWith(route));
    const isAuthRoute = AUTH_ROUTES.some(route => pathname.startsWith(route));

    if (isProtectedRoute && !isAuthenticated) {
      // Redirect to login if trying to access protected route without auth
      router.push('/login');
      return;
    }

    if (isAuthRoute && isAuthenticated) {
      // Redirect to account if trying to access auth routes while authenticated
      router.push('/account');
      return;
    }
  }, [isAuthenticated, pathname, router, isLoading]);

  // Show loading spinner while checking authentication
  if (isLoading) {
    return (
                <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 flex items-center justify-center">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-500 mx-auto"></div>
              <p className="text-gray-600 mt-4">Loading...</p>
            </div>
          </div>
    );
  }

  return children;
}
