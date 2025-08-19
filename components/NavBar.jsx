"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <section className="header">
      <Image src="/images/image-logo.png" alt="" className="image-logo" width={64} height={64} priority />
      <Link href="/" className="logo">Rose Heavenly Salon and Spa</Link>
      <nav className={`navbar${menuOpen ? " active" : ""}`}>
        <Link href="/about" className={pathname === "/about" ? "active" : ""}>About us</Link>
        <Link href="/package" className={pathname === "/package" ? "active" : ""}>Services</Link>
        <Link href="/calendar" className={pathname === "/calendar" ? "active" : ""}>Calendar</Link>
        <Link href="/schedule" className={pathname === "/schedule" ? "active" : ""}>Schedule</Link>
        <Link href="/login" className={pathname === "/login" ? "active" : ""}>Sign In</Link>
      </nav>
      <button id="menu-btn" aria-expanded={menuOpen} onClick={() => setMenuOpen((v) => !v)} className="fas fa-bars" />
    </section>
  );
}


