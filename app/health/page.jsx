"use client";

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export default function HealthPage() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['health'],
    queryFn: async () => {
      const response = await axios.get('http://localhost:4000/health');
      return response.data;
    },
  });

  if (isLoading) return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-rose-500 mx-auto"></div>
        <p className="text-gray-600 mt-4">Checking backend connection...</p>
      </div>
    </div>
  );

  if (error) return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-red-600 mb-4">Backend Connection Failed</h1>
        <p className="text-gray-600 mb-4">Error: {error.message}</p>
        <div className="bg-red-50 p-4 rounded-lg">
          <h2 className="font-semibold text-red-800 mb-2">Troubleshooting:</h2>
          <ul className="text-sm text-red-700 space-y-1">
            <li>• Make sure backend is running on port 4000</li>
            <li>• Check if backend server is started</li>
            <li>• Verify CORS configuration</li>
            <li>• Check network connectivity</li>
          </ul>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-green-600 mb-4">Backend Connection Successful!</h1>
        <div className="space-y-2">
          <p className="text-gray-600"><strong>Status:</strong> {data?.status}</p>
          <p className="text-gray-600"><strong>Database:</strong> {data?.db}</p>
        </div>
        <div className="mt-6 bg-green-50 p-4 rounded-lg">
          <p className="text-green-800 text-sm">✅ Backend is running and connected to database</p>
        </div>
      </div>
    </div>
  );
}
