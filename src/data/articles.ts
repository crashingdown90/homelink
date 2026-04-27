import { articlesPart1 } from './art1';
import { articlesPart2 } from './art2';
import { art3 } from './art3';
import { art4 } from './art4';
import { art5 } from './art5';
import { art6 } from './art6';
import { art7 } from './art7';

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  author: string;
  date: string;
  content: string;
  metaDescription: string;
  keywords: string;
}

export const articles: Article[] = [
  ...art7,
  ...articlesPart1, 
  ...articlesPart2, 
  ...art3, 
  ...art4,
  ...art5,
  ...art6
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}
