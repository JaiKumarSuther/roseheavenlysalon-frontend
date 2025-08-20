"use client";
import Image from "next/image";
import { useState } from "react";

export default function ImageTest() {
  const [imageErrors, setImageErrors] = useState({});

  const images = [
    "/images/image-logo.png",
    "/images/home-slider-2.jpg",
    "/images/home-slider-3.jpg",
    "/images/home-slider-5.jpg",
    "/images/chairs.jpg",
    "/images/spatable2.jpeg",
    "/images/hairservice.jpg",
    "/images/nailservice.jpg",
    "/images/facialservice.jpg",
    "/images/massageservice.jpg",
    "/images/IPLservices.jpg",
    "/images/wartservice.jpg",
    "/images/about-1.jpg",
    "/images/about-2.jpg",
    "/images/about-m.jpg",
    "/images/about-v.jpg",
    "/images/image-1.jpg",
    "/images/image-2.jpg",
    "/images/image-3.jpg",
    "/images/image-4.jpg",
    "/images/image-5.jpg",
    "/images/image-6.jpg",
    "/images/front.jpg",
    "/images/gcash-qr.jpg",
    "/images/haircut.jpg",
    "/images/nails.jpg",
    "/images/nailservices.jpg",
    "/images/spatable.jpg",
    "/images/brush-1.png",
    "/images/brush-2.png",
    "/images/footer-2.png",
    "/images/footer-3.png",
    "/images/header-bg-1.png",
    "/images/header-bg-2.png",
    "/images/header-bg-3.png",
    "/images/icon-1.png",
    "/images/icon-2.png",
    "/images/icon-3.png",
    "/images/icon-4.png",
    "/images/icon-5.png",
    "/images/icon-6.png",
    "/images/promo-1.png",
    "/images/promo-2.png",
  ];

  const handleImageError = (imagePath) => {
    setImageErrors(prev => ({
      ...prev,
      [imagePath]: true
    }));
  };

  const handleImageLoad = (imagePath) => {
    setImageErrors(prev => ({
      ...prev,
      [imagePath]: false
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Image Loading Test</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {images.map((imagePath, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4">
              <div className="relative h-48 mb-4">
                <Image
                  src={imagePath}
                  alt={`Test image ${index + 1}`}
                  fill
                  className="object-cover rounded-lg"
                  onError={() => handleImageError(imagePath)}
                  onLoad={() => handleImageLoad(imagePath)}
                />
                {imageErrors[imagePath] && (
                  <div className="absolute inset-0 bg-red-100 flex items-center justify-center rounded-lg">
                    <span className="text-red-600 font-medium">Failed to load</span>
                  </div>
                )}
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium text-gray-800 truncate">
                  {imagePath.split('/').pop()}
                </p>
                <p className={`text-xs ${imageErrors[imagePath] ? 'text-red-600' : 'text-green-600'}`}>
                  {imageErrors[imagePath] ? '❌ Error loading' : '✅ Loaded successfully'}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Summary</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <p className="text-green-800 font-medium">
                ✅ Successfully loaded: {images.filter(img => !imageErrors[img]).length}
              </p>
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
              <p className="text-red-800 font-medium">
                ❌ Failed to load: {images.filter(img => imageErrors[img]).length}
              </p>
            </div>
          </div>
          
          {Object.keys(imageErrors).filter(key => imageErrors[key]).length > 0 && (
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Failed Images:</h3>
              <ul className="space-y-1">
                {Object.keys(imageErrors)
                  .filter(key => imageErrors[key])
                  .map((imagePath, index) => (
                    <li key={index} className="text-sm text-red-600">
                      {imagePath}
                    </li>
                  ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
