import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "../components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://homelink.vercel.app'),
  title: "Homelink | Inspirasi & Tips Properti Terbaik",
  description: "Temukan artikel, tips membeli rumah, ide dekorasi, dan inspirasi desain interior terbaik di Homelink. Wujudkan rumah impian Anda bersama kami.",
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
                  <li><a href="#">Tips Membeli Rumah</a></li>
                  <li><a href="#">Ide Dekorasi</a></li>
                  <li><a href="#">Renovasi</a></li>
                  <li><a href="#">Inspirasi Desain</a></li>
                </ul>
              </div>
              <div className="footer-links">
                <h3>Perusahaan</h3>
                <ul>
                  <li><a href="/tentang-kami">Tentang Kami</a></li>
                  <li><a href="/kontak">Kontak Kami</a></li>
                  <li><a href="/kebijakan-privasi">Kebijakan Privasi</a></li>
                  <li><a href="/syarat-ketentuan">Syarat & Ketentuan</a></li>
                  <li><a href="/disclaimer">Penafian (Disclaimer)</a></li>
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
