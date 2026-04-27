import ArticleList from "@/components/ArticleList";
import BannerSlider from "@/components/BannerSlider";
import { articles } from "@/data/articles";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-content">
          <h1>
            Wujudkan Rumah Impian<br />Bersama <span>Homelink</span>
          </h1>
          <p>
            Temukan berbagai artikel inspiratif, tips cerdas membeli properti, dan ide dekorasi kekinian untuk menciptakan hunian yang nyaman dan menawan.
          </p>
          <a href="#artikel" className="btn-primary">Jelajahi Artikel</a>
        </div>
      </section>

      <section className="container" style={{ marginTop: '-5rem', position: 'relative', zIndex: 10, marginBottom: '2rem' }}>
        <BannerSlider />
      </section>

      <section id="artikel" className="articles-section">
        <div className="container">
          <div className="section-header">
            <div>
              <h2 className="section-title">Artikel Terbaru</h2>
              <p className="section-subtitle">Pembaruan terkini seputar dunia properti dan hunian.</p>
            </div>
            <Link href="/kategori/tips-beli-rumah" className="view-all">
              Lihat Semua Artikel 
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>

          <ArticleList initialArticles={articles} />
        </div>
      </section>
    </>
  );
}
