'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const banners = [
  {
    id: 1,
    image: '/smart-home.png',
    title: 'Masa Depan Hunian Pintar',
    subtitle: 'Temukan teknologi terbaru untuk kenyamanan ekstra di rumah Anda.',
    link: '/artikel/konsep-smart-home-2026'
  },
  {
    id: 2,
    image: '/house-exterior.png',
    title: 'Investasi Properti Milenial',
    subtitle: 'Panduan lengkap membeli rumah pertama tanpa takut rugi.',
    link: '/artikel/tips-membeli-rumah-pertama'
  },
  {
    id: 3,
    image: '/kitchen.png',
    title: 'Dapur Minimalis Estetik',
    subtitle: 'Ubah jantung rumah Anda menjadi area fungsional kelas atas.',
    link: '/artikel/dapur-minimalis-modern'
  }
];

export default function BannerSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="banner-slider-container">
      {banners.map((banner, index) => (
        <div 
          key={banner.id} 
          className={`banner-slide ${index === current ? 'active' : ''}`}
        >
          <Image 
            src={banner.image} 
            alt={banner.title} 
            fill 
            className="banner-img"
            priority={index === 0}
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
          <div className="banner-overlay">
            <div className="banner-content">
              <h2>{banner.title}</h2>
              <p>{banner.subtitle}</p>
              <Link href={banner.link} className="btn-banner">
                Baca Selengkapnya
              </Link>
            </div>
          </div>
        </div>
      ))}
      
      <div className="banner-indicators">
        {banners.map((_, index) => (
          <button 
            key={index} 
            className={`indicator ${index === current ? 'active' : ''}`}
            onClick={() => setCurrent(index)}
            aria-label={`Pindah ke slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
