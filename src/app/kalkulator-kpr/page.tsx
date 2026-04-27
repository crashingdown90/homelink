import KalkulatorKPR from '@/components/KalkulatorKPR';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kalkulator KPR (Simulasi Cicilan) | Homelink',
  description: 'Gunakan kalkulator KPR Homelink untuk mensimulasikan estimasi cicilan perumahan bulanan Anda dengan mudah dan akurat.',
};

export default function KalkulatorPage() {
  return (
    <div className="article-layout">
      <section className="hero" style={{ padding: "6rem 0 3rem" }}>
        <div className="container hero-content">
          <h1>
            Kalkulator <span>KPR</span>
          </h1>
          <p>
            Rencanakan keuangan Anda dengan matang. Hitung estimasi cicilan bulanan untuk rumah impian Anda dengan kalkulator simulasi KPR interaktif kami.
          </p>
        </div>
      </section>

      <div className="container">
        <KalkulatorKPR />
        
        <div className="prose" style={{ marginTop: '4rem', maxWidth: '800px', margin: '4rem auto 0' }}>
          <h2>Cara Menggunakan Kalkulator KPR</h2>
          <p>
            Kalkulator Kredit Pemilikan Rumah (KPR) ini dirancang untuk memberikan gambaran kasar mengenai cicilan yang harus Anda bayarkan setiap bulannya. Berikut adalah penjelasan untuk setiap kolom yang perlu diisi:
          </p>
          <ul>
            <li><strong>Harga Rumah:</strong> Masukkan total harga properti yang ingin Anda beli.</li>
            <li><strong>Uang Muka (DP):</strong> Minimal DP umumnya 15% - 20% dari harga rumah, tergantung kebijakan bank.</li>
            <li><strong>Suku Bunga:</strong> Rata-rata suku bunga KPR saat ini berkisar antara 5% hingga 10% per tahun (efektif/anuitas).</li>
            <li><strong>Tenor:</strong> Lama waktu pinjaman. Tenor yang lebih lama akan membuat cicilan bulanan lebih kecil, namun total bunga yang dibayarkan akan lebih besar.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
