import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kebijakan Privasi | Homelink',
  description: 'Kebijakan privasi Homelink mengenai cara kami mengumpulkan, menggunakan, dan melindungi data pribadi pengunjung website.',
};

export default function KebijakanPrivasi() {
  return (
    <article className="article-layout">
      <header className="article-header">
        <div className="container article-container">
          <h1 className="article-title">Kebijakan Privasi</h1>
          <p style={{ textAlign: "center", color: "var(--text-muted)" }}>Terakhir diperbarui: {new Date().toLocaleDateString('id-ID')}</p>
        </div>
      </header>

      <div className="container article-container">
        <div className="prose">
          <p>
            Di <strong>Homelink</strong> (dapat diakses dari homelink.vercel.app), privasi pengunjung kami adalah prioritas utama. Dokumen Kebijakan Privasi ini berisi jenis informasi yang dikumpulkan dan dicatat oleh Homelink serta bagaimana kami menggunakannya.
          </p>

          <h2>File Log</h2>
          <p>
            Homelink mengikuti prosedur standar menggunakan file log. File-file ini mencatat pengunjung ketika mereka mengunjungi situs web. Semua perusahaan hosting melakukan ini dan merupakan bagian dari analitik layanan hosting. Informasi yang dikumpulkan oleh file log termasuk alamat protokol internet (IP), jenis browser, Internet Service Provider (ISP), tanggal dan waktu, halaman rujukan/keluar, dan mungkin jumlah klik. Data ini tidak terkait dengan informasi pribadi apa pun.
          </p>

          <h2>Cookie dan Web Beacon</h2>
          <p>
            Seperti situs web lainnya, Homelink menggunakan 'cookie'. Cookie digunakan untuk menyimpan informasi termasuk preferensi pengunjung, dan halaman di situs web yang diakses pengunjung. Informasi tersebut digunakan untuk mengoptimalkan pengalaman pengguna dengan menyesuaikan konten halaman web kami.
          </p>

          <h2>Google DoubleClick DART Cookie</h2>
          <p>
            Google adalah salah satu vendor pihak ketiga di situs kami. Google juga menggunakan cookie, yang dikenal sebagai DART cookie, untuk menayangkan iklan kepada pengunjung situs kami berdasarkan kunjungan mereka ke situs kami dan situs lain di internet. Namun, pengunjung dapat memilih untuk menolak penggunaan cookie DART dengan mengunjungi Kebijakan Privasi jaringan iklan dan konten Google di URL berikut – <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" style={{ color: "var(--primary)" }}>https://policies.google.com/technologies/ads</a>
          </p>

          <h2>Mitra Iklan Kami</h2>
          <p>
            Beberapa pengiklan di situs kami (seperti Google AdSense) mungkin menggunakan cookie dan web beacon. Setiap mitra iklan kami memiliki Kebijakan Privasi mereka sendiri atas kebijakan data pengguna mereka.
          </p>

          <h2>Perlindungan Data Anak</h2>
          <p>
            Prioritas kami yang lain adalah menambahkan perlindungan bagi anak-anak saat menggunakan internet. Kami tidak dengan sengaja mengumpulkan Informasi Identitas Pribadi apa pun dari anak-anak di bawah 13 tahun.
          </p>

          <h2>Persetujuan</h2>
          <p>
            Dengan menggunakan situs web kami, Anda dengan ini menyetujui Kebijakan Privasi kami dan menyetujui syarat-syaratnya.
          </p>
        </div>
      </div>
    </article>
  );
}
