"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const categories = [
    { name: "Tips Beli Rumah", slug: "tips-beli-rumah" },
    { name: "Dekorasi", slug: "dekorasi" },
    { name: "Inspirasi Ruangan", slug: "inspirasi-ruangan" },
    { name: "Teknologi & Gaya Hidup", slug: "teknologi-gaya-hidup" },
  ];

  return (
    <header className="header">
      <div className="header-top">
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
      </div>
      
      {/* Sub Navbar untuk Kategori (Portal Berita Style) */}
      <div className="sub-navbar">
        <div className="container sub-nav-content">
          <Link 
            href="/#artikel" 
            className={`sub-nav-link ${pathname === '/' ? 'active' : ''}`}
          >
            Terbaru
          </Link>
          {categories.map((cat) => (
            <Link 
              key={cat.slug}
              href={`/kategori/${cat.slug}`} 
              className={`sub-nav-link ${pathname.includes(cat.slug) ? 'active' : ''}`}
            >
              {cat.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
