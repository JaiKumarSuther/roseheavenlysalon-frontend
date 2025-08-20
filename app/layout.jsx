import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rose Heavenly Salon - Beauty & Wellness Services",
  description: "Your premier destination for beauty and wellness services in Tarlac. Professional hair, nail, facial, and massage services.",
  keywords: "salon, beauty, hair, nail, facial, massage, Tarlac, Philippines",
  authors: [{ name: "Rose Heavenly Salon" }],
  openGraph: {
    title: "Rose Heavenly Salon - Beauty & Wellness Services",
    description: "Your premier destination for beauty and wellness services in Tarlac.",
    url: "https://roseheavenlysalon.com",
    siteName: "Rose Heavenly Salon",
    images: [
      {
        url: "/images/image-logo.png",
        width: 1200,
        height: 630,
        alt: "Rose Heavenly Salon",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rose Heavenly Salon - Beauty & Wellness Services",
    description: "Your premier destination for beauty and wellness services in Tarlac.",
    images: ["/images/image-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#ec4899" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <div className="flex flex-col min-h-screen">
          <NavBar />
          <main className="flex-1 pt-20">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}


