import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Penafian (Disclaimer) | Homelink',
  description: 'Penafian medis, keuangan, dan profesional dari konten yang dipublikasikan di situs Homelink.',
};

export default function Disclaimer() {
  return (
    <article className="article-layout">
      <header className="article-header">
        <div className="container article-container">
          <h1 className="article-title">Penafian (Disclaimer)</h1>
        </div>
      </header>

      <div className="container article-container">
        <div className="prose">
          <p>
            Semua informasi yang ada di website <strong>Homelink</strong> diterbitkan dengan itikad baik dan untuk tujuan informasi serta edukasi umum saja. Homelink tidak memberikan jaminan apa pun tentang kelengkapan, keandalan, dan keakuratan informasi ini.
          </p>

          <h2>Tanggung Jawab Pembaca</h2>
          <p>
            Tindakan apa pun yang Anda lakukan atas informasi yang Anda temukan di situs web ini (Homelink), sepenuhnya merupakan risiko Anda sendiri. Homelink tidak akan bertanggung jawab atas kerugian dan/atau kerusakan apa pun sehubungan dengan penggunaan situs web kami.
          </p>

          <h2>Bukan Nasihat Finansial / Hukum Profesional</h2>
          <p>
            Artikel yang membahas tentang KPR, investasi properti, estimasi harga rumah, dan aspek hukum kepemilikan tanah adalah pendapat pribadi penulis berdasarkan riset umum dan bukan merupakan nasihat finansial maupun nasihat hukum resmi. 
            Kami sangat menyarankan Anda untuk selalu berkonsultasi dengan <strong>Konsultan Keuangan Tersertifikasi</strong>, <strong>Agen Properti Resmi</strong>, atau <strong>Notaris/PPAT</strong> sebelum mengambil keputusan finansial dalam jumlah besar.
          </p>

          <h2>Tautan Keluar (External Links)</h2>
          <p>
            Dari situs web kami, Anda dapat mengunjungi situs web lain dengan mengikuti <em>hyperlink</em> ke situs eksternal tersebut. Meskipun kami berusaha hanya menyediakan tautan yang berkualitas ke situs web yang berguna dan etis, kami tidak memiliki kontrol atas konten dan sifat situs tersebut. Pemilik situs dan konten dapat berubah tanpa pemberitahuan dan dapat terjadi sebelum kami memiliki kesempatan untuk menghapus tautan yang mungkin sudah tidak relevan atau rusak.
          </p>

          <h2>Persetujuan</h2>
          <p>
            Dengan menggunakan situs web kami, Anda dengan ini menyetujui penafian (disclaimer) kami dan menyetujui semua ketentuannya.
          </p>
        </div>
      </div>
    </article>
  );
}
