"use client";

import { useQuery, useMutation } from '@tanstack/react-query';
import { authAPI } from '../../lib/api';
import { useState } from 'react';
import toast from 'react-hot-toast';

export default function TestApiPage() {
  const [testData, setTestData] = useState({
    email: 'test@example.com',
    phone: '1234567890',
    password: 'password123'
  });

  // Test health endpoint
  const { data: healthData, isLoading: healthLoading, error: healthError } = useQuery({
    queryKey: ['health'],
    queryFn: async () => {
      const response = await fetch('http://localhost:4000/health');
      return response.json();
    },
  });

  // Test signup endpoint
  const signupMutation = useMutation({
    mutationFn: (data) => authAPI.signup(data),
    onSuccess: (data) => {
      toast.success('Signup test successful!');
      console.log('Signup response:', data);
    },
    onError: (error) => {
      toast.error(`Signup test failed: ${error.message}`);
      console.error('Signup error:', error);
    },
  });

  const handleTestSignup = () => {
    signupMutation.mutate(testData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">API Integration Test</h1>
        
        {/* Health Check */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Backend Health Check</h2>
          {healthLoading && (
            <div className="flex items-center space-x-2">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-rose-500"></div>
              <span>Checking backend connection...</span>
            </div>
          )}
          {healthError && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h3 className="text-red-800 font-semibold">Connection Failed</h3>
              <p className="text-red-600 text-sm">{healthError.message}</p>
            </div>
          )}
          {healthData && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="text-green-800 font-semibold">Connection Successful</h3>
              <p className="text-green-600 text-sm">Status: {healthData.status}</p>
              <p className="text-green-600 text-sm">Database: {healthData.db}</p>
            </div>
          )}
        </div>

        {/* Signup Test */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Signup API Test</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                value={testData.email}
                onChange={(e) => setTestData({...testData, email: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
              <input
                type="text"
                value={testData.phone}
                onChange={(e) => setTestData({...testData, phone: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                type="password"
                value={testData.password}
                onChange={(e) => setTestData({...testData, password: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
              />
            </div>
            <button
              onClick={handleTestSignup}
              disabled={signupMutation.isPending}
              className="w-full bg-gradient-to-r from-rose-500 to-pink-500 text-white py-2 px-4 rounded-md hover:from-rose-600 hover:to-pink-600 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {signupMutation.isPending ? 'Testing...' : 'Test Signup API'}
            </button>
          </div>
          {signupMutation.isError && (
            <div className="mt-4 bg-red-50 border border-red-200 rounded-lg p-4">
              <h3 className="text-red-800 font-semibold">Signup Test Failed</h3>
              <p className="text-red-600 text-sm">{signupMutation.error.message}</p>
            </div>
          )}
          {signupMutation.isSuccess && (
            <div className="mt-4 bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="text-green-800 font-semibold">Signup Test Successful</h3>
              <p className="text-green-600 text-sm">Check console for response details</p>
            </div>
          )}
        </div>

        {/* Instructions */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-blue-800 mb-4">Test Instructions</h2>
          <ol className="text-blue-700 space-y-2">
            <li>1. Check if the backend health check shows "Connection Successful"</li>
            <li>2. If health check fails, make sure the backend is running on port 4000</li>
            <li>3. Try the signup test to verify CORS and API integration</li>
            <li>4. Check the browser console for detailed error messages</li>
            <li>5. If CORS errors persist, check the backend CORS configuration</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
