import "../public/css/style.css";
import "../public/css/myAcc-style.css";

export const metadata = {
  title: "Rose Heavenly Salon and Spa",
  description: "Rose Heavenly Salon and Spa",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="https://unpkg.com/swiper@7/swiper-bundle.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
