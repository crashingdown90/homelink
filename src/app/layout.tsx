import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import Link from "next/link";
import "./globals.css";
import Navbar from "../components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://homelink.vercel.app'),
  title: "Homelink | Inspirasi & Tips Properti Terbaik",
  description: "Temukan artikel, tips membeli rumah, ide dekorasi, dan inspirasi desain interior terbaik di Homelink. Wujudkan rumah impian Anda bersama kami.",
  verification: {
    google: "pszpmWioePFO02LHe_iRiiynPlb_AQZtjcZM1EKskxg",
  },
  other: {
    "google-adsense-account": "ca-pub-9806436984867634"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={inter.className}>
        {/* Google Analytics GA4 */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>

        {/* Google AdSense */}
        <Script 
          async 
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9806436984867634" 
          crossOrigin="anonymous" 
          strategy="afterInteractive"
        />

        <Navbar />
        <main>{children}</main>
        <footer className="footer">
          <div className="container">
            <div className="footer-content">
              <div className="footer-brand">
                <a href="/" className="logo">
                  Home<span className="logo-accent">link</span>
                </a>
                <p>Panduan terpercaya untuk mewujudkan rumah impian Anda dengan tips properti dan ide dekorasi terbaik.</p>
              </div>
              <div className="footer-links">
                <h3>Kategori</h3>
                <ul>
                  <li><Link href="/kategori/tips-beli-rumah">Tips Beli Rumah</Link></li>
                  <li><Link href="/kategori/dekorasi">Ide Dekorasi</Link></li>
                  <li><Link href="/kategori/renovasi">Renovasi</Link></li>
                  <li><Link href="/kategori/inspirasi-ruangan">Inspirasi Ruangan</Link></li>
                </ul>
              </div>
              <div className="footer-links">
                <h3>Perusahaan</h3>
                <ul>
                  <li><Link href="/tentang-kami">Tentang Kami</Link></li>
                  <li><Link href="/kontak">Kontak Kami</Link></li>
                  <li><Link href="/kebijakan-privasi">Kebijakan Privasi</Link></li>
                  <li><Link href="/syarat-ketentuan">Syarat & Ketentuan</Link></li>
                  <li><Link href="/disclaimer">Penafian (Disclaimer)</Link></li>
                </ul>
              </div>
            </div>
            <div className="footer-bottom">
              <p>&copy; {new Date().getFullYear()} Homelink. Semua Hak Dilindungi.</p>
              <p>Didesain dengan ❤️ untuk keluarga Indonesia.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
