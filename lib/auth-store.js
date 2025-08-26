import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useAuthStore = create(
  persist(
    (set, get) => ({
      user: null,
      token: null,
      isAuthenticated: false,
      isLoading: false,

      setUser: (user) => set({ user, isAuthenticated: !!user }),
      setToken: (token) => {
        set({ token, isAuthenticated: !!token });
        if (typeof window !== 'undefined') {
          localStorage.setItem('token', token);
        }
      },
      setLoading: (isLoading) => set({ isLoading }),

      login: (userData, token) => {
        set({
          user: userData,
          token,
          isAuthenticated: true,
        });
        if (typeof window !== 'undefined') {
          localStorage.setItem('token', token);
          localStorage.setItem('user', JSON.stringify(userData));
        }
      },

      logout: () => {
        set({
          user: null,
          token: null,
          isAuthenticated: false,
        });
        if (typeof window !== 'undefined') {
          localStorage.removeItem('token');
          localStorage.removeItem('user');
        }
      },

      updateUser: (userData) => {
        set((state) => ({
          user: { ...state.user, ...userData },
        }));
      },

      // Initialize from localStorage on mount
      initialize: () => {
        if (typeof window !== 'undefined') {
          const token = localStorage.getItem('token');
          const user = localStorage.getItem('user');
          if (token && user && user !== 'null' && user !== 'undefined') {
            try {
              const parsedUser = JSON.parse(user);
              
              // Check if user is admin and redirect to admin portal
              if (parsedUser.user_type === 'admin') {
                // Clear customer auth data
                localStorage.removeItem('user');
                localStorage.removeItem('token');
                set({
                  user: null,
                  token: null,
                  isAuthenticated: false,
                });
                // Redirect to admin portal
                window.location.href = 'http://localhost:3002';
                return;
              }
              
              set({
                token,
                user: parsedUser,
                isAuthenticated: true,
              });
            } catch (error) {
              // Clear invalid data
              localStorage.removeItem('user');
              localStorage.removeItem('token');
              set({
                user: null,
                token: null,
                isAuthenticated: false,
              });
            }
          } else {
            set({
              user: null,
              token: null,
              isAuthenticated: false,
            });
          }
        }
      },
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({
        user: state.user,
        token: state.token,
        isAuthenticated: state.isAuthenticated,
      }),

    }
  )
);

export default useAuthStore;
