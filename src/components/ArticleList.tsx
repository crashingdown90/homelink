'use client';
import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Article } from '@/data/articles';

export default function ArticleList({ initialArticles }: { initialArticles: Article[] }) {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('Semua');

  const categories = ['Semua', ...Array.from(new Set(initialArticles.map(a => a.category)))];

  const filteredArticles = useMemo(() => {
    return initialArticles.filter((article) => {
      const matchSearch = article.title.toLowerCase().includes(search.toLowerCase()) || 
                          article.excerpt.toLowerCase().includes(search.toLowerCase());
      const matchCategory = category === 'Semua' || article.category === category;
      return matchSearch && matchCategory;
    });
  }, [search, category, initialArticles]);

  return (
    <>
      <div className="filter-container">
        <input 
          type="text" 
          placeholder="Cari tips atau inspirasi properti..." 
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-input"
        />
        <div className="category-pills">
          {categories.map(c => (
            <button 
              key={c} 
              onClick={() => setCategory(c)}
              className={`category-pill ${category === c ? 'active' : ''}`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="grid">
        {filteredArticles.length > 0 ? (
          filteredArticles.map((article) => (
            <Link href={`/artikel/${article.slug}`} key={article.id} className="card">
              <div className="card-img-container">
                <Image 
                  src={article.image} 
                  alt={article.title}
                  fill
                  className="card-img"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="card-content">
                <span className="card-tag">{article.category}</span>
                <h3 className="card-title">{article.title}</h3>
                <p className="card-excerpt">{article.excerpt}</p>
                <div className="card-meta">
                  <div className="author-info">
                    <div className="author-avatar"></div>
                    <span>{article.author}</span>
                  </div>
                  <span>{article.date}</span>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div className="no-results">
            <p>Maaf, artikel yang Anda cari tidak ditemukan.</p>
          </div>
        )}
      </div>
    </>
  );
}
