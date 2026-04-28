import { articles } from '@/data/articles';

export async function GET() {
  const baseUrl = 'https://homelink.co.id';
  
  const itemsXml = articles.map(article => `
    <item>
      <title><![CDATA[${article.title}]]></title>
      <link>${baseUrl}/artikel/${article.slug}</link>
      <guid>${baseUrl}/artikel/${article.slug}</guid>
      <pubDate>${new Date(article.date).toUTCString()}</pubDate>
      <description><![CDATA[${article.excerpt}]]></description>
    </item>
  `).join('');

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Homelink | Inspirasi & Tips Properti Terbaik</title>
    <link>${baseUrl}</link>
    <description>Temukan artikel, tips membeli rumah, ide dekorasi, dan inspirasi desain interior terbaik di Homelink. Wujudkan rumah impian Anda bersama kami.</description>
    <language>id</language>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml" />
    ${itemsXml}
  </channel>
</rss>
`;

  return new Response(rssFeed, {
    headers: {
      'Content-Type': 'text/xml',
      'Cache-Control': 's-maxage=86400, stale-while-revalidate',
    },
  });
}
