import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api';

// Create axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401 && typeof window !== 'undefined') {
      // Unauthorized - clear token and redirect to login
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// API service functions
export const authAPI = {
  signup: (data) => api.post('/auth/signup', data),
  verifyOtp: (otp) => api.post('/auth/verify-otp', { otp }),
  login: (credentials) => api.post('/auth/login', credentials),
  forgotPassword: (email) => api.post('/auth/forgot-password', { email }),
  resetPassword: (data) => api.post('/auth/reset-password', data),
  me: () => api.get('/auth/me'),
};

export const usersAPI = {
  getMe: () => api.get('/users/me'),
  updateMe: (data) => api.put('/users/me', data),
};

export const bookingsAPI = {
  create: (data) => api.post('/bookings', data),
  getMyBookings: () => api.get('/bookings/me'),
  cancel: (data) => api.post('/bookings/cancel', data),
  getToday: () => api.get('/bookings/today'),
  markDone: (id) => api.post(`/bookings/${id}/done`),
  markCancelled: (id) => api.post(`/bookings/${id}/cancel`),
  markRescheduled: (id) => api.post(`/bookings/${id}/reschedule`),
  search: (query) => api.get(`/bookings/search?q=${query}`),
};

export const calendarAPI = {
  getCounts: (year, month) => api.get(`/calendar?year=${year}&month=${month}`),
  getEvents: (date) => api.get(`/calendar/events?date=${date}`),
};

export const adminAPI = {
  getPromos: () => api.get('/admin/promos'),
  updatePromoImage: (id, imgUrl) => api.put(`/admin/promos/${id}`, { img_url: imgUrl }),
  registerAdmin: (data) => api.post('/admin/register', data),
};

export const uploadsAPI = {
  uploadImage: (formData) => api.post('/uploads/image', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  }),
};

export default api;
