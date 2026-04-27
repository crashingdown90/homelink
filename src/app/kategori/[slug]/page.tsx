import ArticleList from "@/components/ArticleList";
import { articles } from "@/data/articles";
import { Metadata } from "next";

// Helper function to map slug to category name
const slugToCategory: Record<string, string> = {
  "tips-beli-rumah": "Tips Beli Rumah",
  "dekorasi": "Dekorasi",
  "inspirasi-ruangan": "Inspirasi Ruangan",
  "teknologi-gaya-hidup": "Teknologi & Gaya Hidup",
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const categoryName = slugToCategory[params.slug] || "Kategori";
  return {
    title: `${categoryName} | Homelink`,
    description: `Temukan berbagai artikel menarik dan inspiratif tentang ${categoryName} hanya di Homelink.`,
  };
}

export function generateStaticParams() {
  return Object.keys(slugToCategory).map((slug) => ({
    slug,
  }));
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const categoryName = slugToCategory[params.slug];
  
  if (!categoryName) {
    return (
      <div className="container" style={{ padding: "8rem 2rem", textAlign: "center" }}>
        <h1>Kategori Tidak Ditemukan</h1>
        <p>Maaf, kategori yang Anda cari tidak tersedia.</p>
      </div>
    );
  }

  // Filter articles based on category
  const filteredArticles = articles.filter(
    (article) => article.category === categoryName
  );

  return (
    <>
      <section className="hero" style={{ padding: "6rem 0 3rem" }}>
        <div className="container hero-content">
          <h1>
            Kategori: <span>{categoryName}</span>
          </h1>
          <p>
            Temukan semua artikel terbaik kami seputar {categoryName.toLowerCase()}.
          </p>
        </div>
      </section>

      <section className="articles-section">
        <div className="container">
          <ArticleList initialArticles={filteredArticles} />
        </div>
      </section>
    </>
  );
}
