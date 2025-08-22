"use client";

import { useQuery } from '@tanstack/react-query';

export default function TestPage() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['test'],
    queryFn: () => Promise.resolve({ message: 'React Query is working!' }),
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Test Page</h1>
        <p className="text-gray-600">{data?.message}</p>
        <p className="text-sm text-gray-500 mt-4">If you can see this, React Query is working correctly!</p>
      </div>
    </div>
  );
}
