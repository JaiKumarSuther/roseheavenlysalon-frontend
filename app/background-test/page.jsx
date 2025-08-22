"use client";
import Image from "next/image";

export default function BackgroundTest() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Background Image Test</h1>
        
        {/* Test different background image methods */}
        <div className="space-y-8">
          
          {/* Method 1: CSS Background Images */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">CSS Background Images</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-hero-pattern h-64 rounded-lg shadow-md relative">
                <div className="absolute inset-0 bg-black/30 rounded-lg"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold">Hero Pattern</h3>
                  <p className="text-sm">chairs.jpg</p>
                </div>
              </div>
              
              <div className="bg-salon-bg h-64 rounded-lg shadow-md relative">
                <div className="absolute inset-0 bg-black/30 rounded-lg"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold">Salon Background</h3>
                  <p className="text-sm">spatable2.jpeg</p>
                </div>
              </div>
              
              <div className="bg-header-bg-1 h-64 rounded-lg shadow-md relative">
                <div className="absolute inset-0 bg-black/30 rounded-lg"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold">Header BG 1</h3>
                  <p className="text-sm">header-bg-1.png</p>
                </div>
              </div>
              
              <div className="bg-header-bg-2 h-64 rounded-lg shadow-md relative">
                <div className="absolute inset-0 bg-black/30 rounded-lg"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold">Header BG 2</h3>
                  <p className="text-sm">header-bg-2.png</p>
                </div>
              </div>
              
              <div className="bg-header-bg-3 h-64 rounded-lg shadow-md relative">
                <div className="absolute inset-0 bg-black/30 rounded-lg"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold">Header BG 3</h3>
                  <p className="text-sm">header-bg-3.png</p>
                </div>
              </div>
            </div>
          </div>

          {/* Method 2: Tailwind Background Images */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">Tailwind Background Images</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-hero-pattern h-64 rounded-lg shadow-md relative">
                <div className="absolute inset-0 bg-black/30 rounded-lg"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold">Hero Pattern</h3>
                  <p className="text-sm">Tailwind bg-hero-pattern</p>
                </div>
              </div>
              
              <div className="bg-salon-bg h-64 rounded-lg shadow-md relative">
                <div className="absolute inset-0 bg-black/30 rounded-lg"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold">Salon Background</h3>
                  <p className="text-sm">Tailwind bg-salon-bg</p>
                </div>
              </div>
              
              <div className="bg-header-bg-1 h-64 rounded-lg shadow-md relative">
                <div className="absolute inset-0 bg-black/30 rounded-lg"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold">Header BG 1</h3>
                  <p className="text-sm">Tailwind bg-header-bg-1</p>
                </div>
              </div>
            </div>
          </div>

          {/* Method 3: Inline Background Images */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">Inline Background Images</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div 
                className="h-64 rounded-lg shadow-md relative"
                style={{
                  backgroundImage: "url('/images/chairs.jpg')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                <div className="absolute inset-0 bg-black/30 rounded-lg"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold">Chairs</h3>
                  <p className="text-sm">Inline style</p>
                </div>
              </div>
              
              <div 
                className="h-64 rounded-lg shadow-md relative"
                style={{
                  backgroundImage: "url('/images/spatable2.jpeg')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                <div className="absolute inset-0 bg-black/30 rounded-lg"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold">Spa Table</h3>
                  <p className="text-sm">Inline style</p>
                </div>
              </div>
              
              <div 
                className="h-64 rounded-lg shadow-md relative"
                style={{
                  backgroundImage: "url('/images/header-bg-1.png')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                <div className="absolute inset-0 bg-black/30 rounded-lg"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold">Header BG 1</h3>
                  <p className="text-sm">Inline style</p>
                </div>
              </div>
            </div>
          </div>

          {/* Method 4: Next.js Image as Background */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">Next.js Image as Background</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="h-64 rounded-lg shadow-md relative overflow-hidden">
                <Image
                  src="/images/chairs.jpg"
                  alt="Chairs"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold">Chairs</h3>
                  <p className="text-sm">Next.js Image</p>
                </div>
              </div>
              
              <div className="h-64 rounded-lg shadow-md relative overflow-hidden">
                <Image
                  src="/images/spatable2.jpeg"
                  alt="Spa Table"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold">Spa Table</h3>
                  <p className="text-sm">Next.js Image</p>
                </div>
              </div>
              
              <div className="h-64 rounded-lg shadow-md relative overflow-hidden">
                <Image
                  src="/images/header-bg-1.png"
                  alt="Header Background"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold">Header BG 1</h3>
                  <p className="text-sm">Next.js Image</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="mt-12 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Background Image Methods Summary</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h3 className="font-semibold text-gray-800">CSS Classes</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• bg-hero-pattern</li>
                <li>• bg-salon-bg</li>
                <li>• bg-header-bg-1/2/3</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-gray-800">Tailwind Classes</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• bg-hero-pattern</li>
                <li>• bg-salon-bg</li>
                <li>• bg-header-bg-1/2/3</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

