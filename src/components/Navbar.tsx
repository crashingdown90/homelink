"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header-content">
        <Link href="/" className="logo">
          Home<span className="logo-accent">link</span>
        </Link>
        <nav className={`nav-links ${isOpen ? "active" : ""}`}>
          <Link href="/" className="nav-link" onClick={() => setIsOpen(false)}>Beranda</Link>
          <Link href="/#artikel" className="nav-link" onClick={() => setIsOpen(false)}>Artikel</Link>
          <Link href="/tentang-kami" className="nav-link" onClick={() => setIsOpen(false)}>Tentang Kami</Link>
          <Link href="/kontak" className="nav-link" onClick={() => setIsOpen(false)}>Kontak</Link>
        </nav>
        <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          <div className={`hamburger ${isOpen ? "open" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>
    </header>
  );
}
