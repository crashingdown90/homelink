import KalkulatorPajak from '@/components/KalkulatorPajak';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kalkulator Pajak Pembeli & Biaya Balik Nama (BPHTB) | Homelink',
  description: 'Hitung estimasi pajak pembeli (BPHTB) dan biaya tambahan lainnya seperti biaya notaris saat membeli rumah.',
};

export default function KalkulatorPajakPage() {
  return (
    <div className="article-layout">
      <section className="hero" style={{ padding: "6rem 0 3rem" }}>
        <div className="container hero-content">
          <h1>
            Kalkulator <span>Pajak BPHTB</span>
          </h1>
          <p>
            Banyak pembeli rumah lupa menyiapkan dana ekstra untuk pajak dan notaris. Hitung estimasi kewajiban pajak Anda (BPHTB) secara akurat di sini.
          </p>
        </div>
      </section>

      <div className="container">
        <KalkulatorPajak />
        
        <div className="prose" style={{ marginTop: '4rem', maxWidth: '800px', margin: '4rem auto 0' }}>
          <h2>Apa itu BPHTB?</h2>
          <p>
            BPHTB (Bea Perolehan Hak atas Tanah dan Bangunan) adalah pajak yang dikenakan atas perolehan hak atas tanah dan atau bangunan. 
            Dalam transaksi jual beli rumah, <strong>pembeli</strong> adalah pihak yang wajib membayar BPHTB.
          </p>
          <h3>Cara Menghitung BPHTB</h3>
          <p>Rumusnya adalah: <code>5% x (Harga Jual - NPOPTKP)</code></p>
          <p>
            NPOPTKP (Nilai Perolehan Objek Pajak Tidak Kena Pajak) adalah nilai pengurangan standar yang ditetapkan pemerintah daerah. Besarnya berbeda-beda tiap daerah, namun umumnya berkisar antara Rp60.000.000 hingga Rp80.000.000.
          </p>
        </div>
      </div>
    </div>
  );
}
