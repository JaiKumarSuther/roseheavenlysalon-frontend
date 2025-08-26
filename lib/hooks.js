import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { authAPI, usersAPI, bookingsAPI, calendarAPI, adminAPI } from './api';
import toast from 'react-hot-toast';
import { useState, useEffect } from 'react';

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
      // Redirect to OTP verification page instead of immediate login
      if (typeof window !== 'undefined') {
        window.location.href = `/verify-email?email=${encodeURIComponent(data.email)}`;
      }
      toast.success('Please check your email for verification code!');
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || 'Signup failed');
    },
  });
};

export const useVerifySignupOtp = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: authAPI.verifySignupOtp,
    onSuccess: (data) => {
      // Store the token and user data after successful verification
      if (typeof window !== 'undefined') {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
      }
      queryClient.invalidateQueries(['user']);
      toast.success('Email verified successfully! You are now logged in.');
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || 'OTP verification failed');
    },
  });
};

export const useResendSignupOtp = () => {
  return useMutation({
    mutationFn: authAPI.resendSignupOtp,
    onSuccess: () => {
      toast.success('New verification code sent to your email!');
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || 'Failed to resend verification code');
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

// Booking status notification hook
export const useBookingStatusNotifications = (bookings) => {
  const [previousBookings, setPreviousBookings] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [isInitialized, setIsInitialized] = useState(false);

  // Load notifications from localStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedNotifications = localStorage.getItem('notifications');
      if (storedNotifications) {
        try {
          const parsedNotifications = JSON.parse(storedNotifications);
          setNotifications(parsedNotifications);
        } catch (error) {
          console.error('Error parsing stored notifications:', error);
          localStorage.removeItem('notifications');
        }
      }
    }
  }, []);

  useEffect(() => {
    if (!bookings || bookings.length === 0) {
      setPreviousBookings([]);
      return;
    }

    // Check for status changes and new bookings
    if (isInitialized && previousBookings.length > 0) {
      bookings.forEach((currentBooking) => {
        const previousBooking = previousBookings.find(pb => pb.id === currentBooking.id);
        
        // Check for status changes
        if (previousBooking && previousBooking.status !== currentBooking.status) {
          
          // Status has changed, show notification
          let message = '';
          let type = 'info';
          
          // Ensure we have valid data
          const serviceName = currentBooking.service1 || 'your appointment';
          const date = currentBooking.date ? new Date(currentBooking.date).toLocaleDateString() : 'your scheduled date';
          
          switch (currentBooking.status) {
            case 'confirmed':
              message = `Your booking for ${serviceName} on ${date} has been confirmed!`;
              type = 'success';
              break;
            case 'cancelled':
              message = `Your booking for ${serviceName} on ${date} has been cancelled.`;
              type = 'error';
              break;
            case 'completed':
              message = `Your booking for ${serviceName} on ${date} has been completed. Thank you for choosing us!`;
              type = 'success';
              break;
            default:
              return;
          }
          
          // Show toast notification
          if (type === 'success') {
            toast.success(message);
          } else if (type === 'error') {
            toast.error(message);
          } else {
            toast(message);
          }
          
          // Add to notifications list
          const newNotification = {
            id: Date.now(),
            bookingId: currentBooking.id,
            message,
            type,
            timestamp: new Date().toISOString(),
            read: false
          };
          
          setNotifications(prev => {
            const updatedNotifications = [newNotification, ...prev];
            // Persist to localStorage
            if (typeof window !== 'undefined') {
              localStorage.setItem('notifications', JSON.stringify(updatedNotifications));
            }
            return updatedNotifications;
          });
        }
        
        // Check for new bookings (not in previous list)
        if (!previousBooking) {
          // This is a new booking, add a notification
          const serviceName = currentBooking.service1 || 'your appointment';
          const date = currentBooking.date ? new Date(currentBooking.date).toLocaleDateString() : 'your scheduled date';
          
          const newBookingNotification = {
            id: Date.now(),
            bookingId: currentBooking.id,
            message: `New booking created for ${serviceName} on ${date}. We'll notify you when it's confirmed.`,
            type: 'success',
            timestamp: new Date().toISOString(),
            read: false
          };
          
          setNotifications(prev => {
            const updatedNotifications = [newBookingNotification, ...prev];
            // Persist to localStorage
            if (typeof window !== 'undefined') {
              localStorage.setItem('notifications', JSON.stringify(updatedNotifications));
            }
            return updatedNotifications;
          });
        }
      });
    }
    
    // Update previous bookings and mark as initialized
    setPreviousBookings(bookings);
    if (!isInitialized) {
      setIsInitialized(true);
    }
  }, [bookings, isInitialized]);

  const markNotificationAsRead = (notificationId) => {
    setNotifications(prev => {
      const updatedNotifications = prev.map(notif => 
        notif.id === notificationId 
          ? { ...notif, read: true }
          : notif
      );
      // Persist to localStorage
      if (typeof window !== 'undefined') {
        localStorage.setItem('notifications', JSON.stringify(updatedNotifications));
      }
      return updatedNotifications;
    });
  };

  const clearNotifications = () => {
    setNotifications([]);
    // Clear from localStorage
    if (typeof window !== 'undefined') {
      localStorage.removeItem('notifications');
    }
  };

  const forceRefreshNotifications = () => {
    // Force reload notifications from localStorage
    if (typeof window !== 'undefined') {
      const storedNotifications = localStorage.getItem('notifications');
      if (storedNotifications) {
        try {
          const parsedNotifications = JSON.parse(storedNotifications);
          setNotifications(parsedNotifications);
        } catch (error) {
          console.error('Error parsing stored notifications:', error);
          localStorage.removeItem('notifications');
        }
      }
    }
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return {
    notifications,
    unreadCount,
    markNotificationAsRead,
    clearNotifications,
    forceRefreshNotifications
  };
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
    onSuccess: (data) => {
      queryClient.invalidateQueries(['bookings']);
      queryClient.invalidateQueries(['calendar']);
      
      // Show success toast
      toast.success('Booking created successfully!');
      
      // Add notification for booking creation
      const bookingNotification = {
        id: Date.now(),
        bookingId: data.id || 'new',
        message: `Your booking has been created successfully! We'll notify you when it's confirmed.`,
        type: 'success',
        timestamp: new Date().toISOString(),
        read: false
      };
      
      // Store notification in localStorage for persistence
      if (typeof window !== 'undefined') {
        const existingNotifications = JSON.parse(localStorage.getItem('notifications') || '[]');
        const updatedNotifications = [bookingNotification, ...existingNotifications];
        localStorage.setItem('notifications', JSON.stringify(updatedNotifications));
      }
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
    onSuccess: (data) => {
      queryClient.invalidateQueries(['bookings']);
      queryClient.invalidateQueries(['calendar']);
      
      // Show success toast
      toast.success('Booking cancelled successfully!');
      
      // Add notification for booking cancellation
      const cancelNotification = {
        id: Date.now(),
        bookingId: data.id || 'cancelled',
        message: `Your booking has been cancelled successfully.`,
        type: 'info',
        timestamp: new Date().toISOString(),
        read: false
      };
      
      // Store notification in localStorage for persistence
      if (typeof window !== 'undefined') {
        const existingNotifications = JSON.parse(localStorage.getItem('notifications') || '[]');
        const updatedNotifications = [cancelNotification, ...existingNotifications];
        localStorage.setItem('notifications', JSON.stringify(updatedNotifications));
      }
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
