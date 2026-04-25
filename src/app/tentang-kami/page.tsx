import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tentang Kami | Homelink',
  description: 'Pelajari lebih lanjut tentang Homelink, misi, visi, dan tim di balik portal informasi properti terpercaya untuk keluarga Indonesia.',
};

export default function TentangKami() {
  return (
    <article className="article-layout">
      <header className="article-header">
        <div className="container article-container">
          <h1 className="article-title">Tentang Kami</h1>
        </div>
      </header>

      <div className="container article-container">
        <div className="prose">
          <h2>Selamat Datang di Homelink</h2>
          <p>
            Homelink adalah portal informasi dan edukasi properti terdepan di Indonesia. Kami berdedikasi untuk memberikan panduan komprehensif, inspirasi desain, dan tips praktis bagi Anda yang sedang merencanakan, membeli, atau mendekorasi rumah impian.
          </p>

          <h2>Misi Kami</h2>
          <p>
            Misi kami sederhana: <strong>Membuat perjalanan kepemilikan rumah Anda menjadi lebih transparan, mudah, dan inspiratif.</strong> Kami memahami bahwa membeli rumah merupakan keputusan finansial terbesar bagi sebagian besar orang. Oleh karena itu, kami menyajikan informasi yang akurat, kredibel, dan mudah dipahami.
          </p>

          <h2>Apa yang Kami Tawarkan?</h2>
          <ul>
            <li><strong>Panduan Properti:</strong> Artikel mendalam mengenai cara memilih rumah, mengajukan KPR, dan menghitung estimasi biaya tak terduga.</li>
            <li><strong>Inspirasi Dekorasi:</strong> Ide desain interior modern minimalis, penataan ruang sempit, dan gaya hidup fungsional.</li>
            <li><strong>Transparansi Pasar:</strong> Edukasi mengenai legalitas, investasi properti, dan trik bernegosiasi yang aman.</li>
          </ul>

          <h2>Tim Kami</h2>
          <p>
            Homelink dibangun oleh gabungan para ahli properti, desainer interior, dan penulis yang memiliki hasrat (<em>passion</em>) tinggi untuk memajukan literasi properti di Indonesia. Kami selalu mengedepankan riset mendalam sebelum menyajikan artikel kepada pembaca setia kami.
          </p>

          <p>Terima kasih telah menjadikan Homelink sebagai mitra terpercaya Anda dalam mewujudkan rumah impian!</p>
        </div>
      </div>
    </article>
  );
}
