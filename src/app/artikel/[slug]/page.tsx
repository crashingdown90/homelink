import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getArticleBySlug, articles } from '@/data/articles';

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const article = getArticleBySlug(resolvedParams.slug);
  if (!article) return { title: 'Artikel Tidak Ditemukan' };

  return {
    title: `${article.title} | Homelink`,
    description: article.metaDescription,
    keywords: article.keywords,
    openGraph: {
      title: article.title,
      description: article.metaDescription,
      images: [article.image],
      type: 'article',
      publishedTime: new Date(article.date).toISOString(),
      authors: [article.author],
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const resolvedParams = await params;
  const article = getArticleBySlug(resolvedParams.slug);
  
  if (!article) {
    notFound();
  }

  // Schema Markup untuk SEO yang tinggi sesuai standar Google (E-E-A-T)
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    image: [article.image],
    author: {
      '@type': 'Person',
      name: article.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Homelink',
      logo: {
        '@type': 'ImageObject',
        url: 'https://homelink.vercel.app/house-exterior.png',
      },
    },
    datePublished: new Date(article.date).toISOString(),
    dateModified: new Date(article.date).toISOString(),
    description: article.metaDescription,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://homelink.vercel.app/artikel/${article.slug}`
    }
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Beranda',
        item: 'https://homelink.vercel.app/'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: article.category,
        item: `https://homelink.vercel.app/kategori/${article.category.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: article.title,
        item: `https://homelink.vercel.app/artikel/${article.slug}`
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([articleJsonLd, breadcrumbJsonLd]) }}
      />
      
      <article className="article-layout">
        <header className="article-header">
          <div className="container article-container">
            <div className="breadcrumb" style={{ marginBottom: '2rem', fontSize: '0.9rem', color: '#64748b' }}>
              <a href="/" style={{ color: '#0284c7' }}>Beranda</a> 
              <span style={{ margin: '0 0.5rem' }}>›</span> 
              <a href={`/kategori/${article.category.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`} style={{ color: '#0284c7' }}>
                {article.category}
              </a> 
              <span style={{ margin: '0 0.5rem' }}>›</span> 
              <span style={{ color: '#0f172a' }}>{article.title}</span>
            </div>
            
            <span className="card-tag">{article.category}</span>
            <h1 className="article-title">{article.title}</h1>
            <div className="article-meta-large">
              <div className="author-info">
                <div className="author-avatar"></div>
                <span>Ditulis oleh <strong>{article.author}</strong></span>
              </div>
              <span>Diterbitkan: {article.date}</span>
            </div>
          </div>
        </header>

        <div className="article-hero-img-container">
          <Image 
            src={article.image} 
            alt={`Hero image untuk ${article.title}`} 
            fill 
            className="article-hero-img"
            priority 
          />
        </div>

        <div className="container article-container">
          <div 
            className="prose"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          <div className="share-section">
            <h3>Bagikan artikel ini ke teman Anda:</h3>
            <div className="share-buttons">
              <a href={`https://api.whatsapp.com/send?text=${encodeURIComponent(article.title + ' - Baca selengkapnya di: https://homelink.vercel.app/artikel/' + article.slug)}`} target="_blank" rel="noopener noreferrer" className="btn-share whatsapp">WhatsApp</a>
              <a href={`https://www.facebook.com/sharer/sharer.php?u=https://homelink.vercel.app/artikel/${article.slug}`} target="_blank" rel="noopener noreferrer" className="btn-share facebook">Facebook</a>
              <a href={`https://twitter.com/intent/tweet?url=https://homelink.vercel.app/artikel/${article.slug}&text=${encodeURIComponent(article.title)}`} target="_blank" rel="noopener noreferrer" className="btn-share twitter">X (Twitter)</a>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
