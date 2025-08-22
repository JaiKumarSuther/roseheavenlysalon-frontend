import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { authAPI, usersAPI, bookingsAPI, calendarAPI, adminAPI } from './api';
import toast from 'react-hot-toast';

// Auth hooks
export const useLogin = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: authAPI.login,
    onSuccess: (data) => {
      // Store the token and user data
      if (typeof window !== 'undefined') {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
      }
      queryClient.invalidateQueries(['user']);
      toast.success('Login successful!');
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || 'Login failed');
    },
  });
};

export const useSignup = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: authAPI.signup,
    onSuccess: (data) => {
      // Store the token and user data for automatic login
      if (typeof window !== 'undefined') {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
      }
      queryClient.invalidateQueries(['user']);
      toast.success('Account created successfully! You are now logged in.');
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || 'Signup failed');
    },
  });
};



export const useForgotPassword = () => {
  return useMutation({
    mutationFn: authAPI.forgotPassword,
    onSuccess: () => {
      toast.success('Password reset email sent!');
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || 'Failed to send reset email');
    },
  });
};

export const useResetPassword = () => {
  return useMutation({
    mutationFn: authAPI.resetPassword,
    onSuccess: () => {
      toast.success('Password reset successfully!');
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || 'Password reset failed');
    },
  });
};

export const useGetUser = () => {
  return useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      // First try to get user from localStorage
      if (typeof window !== 'undefined') {
        const storedUser = localStorage.getItem('user');
        if (storedUser && storedUser !== 'null' && storedUser !== 'undefined') {
          try {
            const user = JSON.parse(storedUser);
            return user;
          } catch (error) {
            console.error('Error parsing user data from localStorage:', error);
            // Clear invalid data
            localStorage.removeItem('user');
          }
        }
      }
      // Fallback to API call
      const response = await authAPI.me();
      return response.data;
    },
    enabled: typeof window !== 'undefined' && !!localStorage.getItem('token'),
  });
};

// User hooks
export const useUpdateProfile = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: usersAPI.updateMe,
    onSuccess: () => {
      queryClient.invalidateQueries(['user']);
      toast.success('Profile updated successfully!');
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || 'Failed to update profile');
    },
  });
};

// Booking hooks
export const useCreateBooking = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: bookingsAPI.create,
    onSuccess: () => {
      queryClient.invalidateQueries(['bookings']);
      queryClient.invalidateQueries(['calendar']);
      toast.success('Booking created successfully!');
    },
    onError: (error) => {
      console.error('Booking creation error:', error.response?.data);
      if (error.response?.data?.errors) {
        // Handle validation errors
        const errorMessages = Object.values(error.response.data.errors.fieldErrors || {})
          .flat()
          .join(', ');
        toast.error(`Validation error: ${errorMessages}`);
      } else {
        toast.error(error.response?.data?.message || 'Failed to create booking');
      }
    },
  });
};

export const useGetMyBookings = () => {
  return useQuery({
    queryKey: ['bookings', 'my'],
    queryFn: async () => {
      const response = await bookingsAPI.getMyBookings();
      return response.data;
    },
    enabled: typeof window !== 'undefined' && !!localStorage.getItem('token'),
  });
};

export const useCancelBooking = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: bookingsAPI.cancel,
    onSuccess: () => {
      queryClient.invalidateQueries(['bookings']);
      queryClient.invalidateQueries(['calendar']);
      toast.success('Booking cancelled successfully!');
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || 'Failed to cancel booking');
    },
  });
};

export const useGetTodayBookings = () => {
  return useQuery({
    queryKey: ['bookings', 'today'],
    queryFn: async () => {
      const response = await bookingsAPI.getToday();
      return response.data;
    },
    enabled: typeof window !== 'undefined' && !!localStorage.getItem('token'),
  });
};

export const useSearchBookings = (query) => {
  return useQuery({
    queryKey: ['bookings', 'search', query],
    queryFn: async () => {
      const response = await bookingsAPI.search(query);
      return response.data;
    },
    enabled: !!query && query.length > 0,
  });
};

// Calendar hooks
export const useGetCalendarCounts = (year, month) => {
  return useQuery({
    queryKey: ['calendar', 'counts', year, month],
    queryFn: async () => {
      const response = await calendarAPI.getCounts(year, month);
      return response.data;
    },
  });
};

export const useGetCalendarEvents = (date) => {
  return useQuery({
    queryKey: ['calendar', 'events', date],
    queryFn: async () => {
      const response = await calendarAPI.getEvents(date);
      return response.data;
    },
    enabled: !!date,
  });
};

// Admin hooks
export const useGetPromos = () => {
  return useQuery({
    queryKey: ['admin', 'promos'],
    queryFn: async () => {
      const response = await adminAPI.getPromos();
      return response.data;
    },
    enabled: typeof window !== 'undefined' && !!localStorage.getItem('token'),
  });
};

export const useUpdatePromoImage = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: ({ id, imgUrl }) => adminAPI.updatePromoImage(id, imgUrl),
    onSuccess: () => {
      queryClient.invalidateQueries(['admin', 'promos']);
      toast.success('Promo image updated successfully!');
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || 'Failed to update promo image');
    },
  });
};
