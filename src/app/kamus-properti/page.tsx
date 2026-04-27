import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kamus Properti | Homelink',
  description: 'Panduan lengkap istilah-istilah di dunia properti. Pelajari arti SHM, HGB, KPR, SLIK OJK, dan istilah lainnya dengan bahasa yang mudah dipahami.',
};

const glossaryItems = [
  {
    term: "Agunan",
    definition: "Aset atau properti yang dijaminkan oleh peminjam kepada bank (kreditur) untuk mendapatkan pinjaman KPR."
  },
  {
    term: "Akad Kredit",
    definition: "Perjanjian resmi berupa penandatanganan kesepakatan pembiayaan pinjaman (KPR) antara nasabah dengan pihak bank."
  },
  {
    term: "Appraisal",
    definition: "Proses penaksiran nilai properti yang dilakukan oleh pihak independen atau bank untuk menentukan jumlah pinjaman maksimal yang bisa diberikan."
  },
  {
    term: "BI Checking / SLIK OJK",
    definition: "Sistem Layanan Informasi Keuangan dari OJK yang berisi riwayat kredit seseorang. Bank menggunakan data ini untuk menentukan apakah pengajuan KPR disetujui atau ditolak."
  },
  {
    term: "Booking Fee",
    definition: "Biaya tanda jadi atau uang pemesanan yang dibayarkan pembeli kepada developer untuk mengamankan unit properti agar tidak dijual ke orang lain."
  },
  {
    term: "BPHTB",
    definition: "Bea Perolehan Hak atas Tanah dan Bangunan. Pajak yang dikenakan kepada pembeli saat proses jual beli properti. Besarnya umumnya 5% dari Nilai Jual Objek Pajak (NJOP) dikurangi Nilai Perolehan Objek Pajak Tidak Kena Pajak (NPOPTKP)."
  },
  {
    term: "Cluster",
    definition: "Kawasan perumahan yang memiliki satu desain seragam, tanpa pagar pada tiap rumah, dan dilengkapi satu pintu gerbang utama (one gate system) untuk keamanan."
  },
  {
    term: "Developer / Pengembang",
    definition: "Perusahaan atau perorangan yang membangun suatu kawasan perumahan atau apartemen dari lahan kosong hingga siap huni."
  },
  {
    term: "HGB (Hak Guna Bangunan)",
    definition: "Sertifikat yang memberikan hak untuk mendirikan dan mempunyai bangunan di atas tanah yang bukan miliknya sendiri, dengan jangka waktu tertentu (biasanya 30 tahun) dan dapat diperpanjang."
  },
  {
    term: "KPA (Kredit Pemilikan Apartemen)",
    definition: "Fasilitas pinjaman dari bank untuk membeli apartemen."
  },
  {
    term: "KPR (Kredit Pemilikan Rumah)",
    definition: "Fasilitas kredit atau pinjaman yang diberikan perbankan kepada nasabah perorangan untuk membeli atau merenovasi rumah."
  },
  {
    term: "NJOP (Nilai Jual Objek Pajak)",
    definition: "Harga rata-rata yang diperoleh dari transaksi jual beli yang terjadi secara wajar, ditentukan oleh pemerintah sebagai dasar pengenaan Pajak Bumi dan Bangunan (PBB)."
  },
  {
    term: "SHM (Sertifikat Hak Milik)",
    definition: "Sertifikat tertinggi dan terkuat dalam kepemilikan properti, yang menunjukkan hak kepemilikan penuh tanpa batas waktu atas tanah dan bangunan."
  },
  {
    term: "Tenor",
    definition: "Jangka waktu atau masa pelunasan pinjaman/kredit yang disepakati antara bank dan nasabah (misalnya 10, 15, atau 20 tahun)."
  },
  {
    term: "Turnover (Balik Nama)",
    definition: "Proses membalikkan nama pada sertifikat rumah dari pemilik sebelumnya (atau developer) menjadi nama pembeli baru."
  }
];

export default function KamusPropertiPage() {
  return (
    <div className="article-layout">
      <section className="hero" style={{ padding: "6rem 0 3rem" }}>
        <div className="container hero-content">
          <h1>
            Kamus <span>Properti</span>
          </h1>
          <p>
            Membeli rumah untuk pertama kalinya? Pahami berbagai istilah teknis dalam dunia properti, hukum pertanahan, dan perbankan di sini.
          </p>
        </div>
      </section>

      <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div className="glossary-list">
          {glossaryItems.map((item, idx) => (
            <div key={idx} className="glossary-item">
              <h3 className="glossary-term">{item.term}</h3>
              <p className="glossary-definition">{item.definition}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
