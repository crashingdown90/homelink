import KalkulatorKelayakanKPR from '@/components/KalkulatorKelayakanKPR';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kalkulator Kelayakan KPR (Berdasarkan Gaji) | Homelink',
  description: 'Hitung berapa batas harga rumah maksimal yang bisa Anda beli berdasarkan gaji dan pengeluaran cicilan Anda saat ini.',
};

export default function KalkulatorKelayakanPage() {
  return (
    <div className="article-layout">
      <section className="hero" style={{ padding: "6rem 0 3rem" }}>
        <div className="container hero-content">
          <h1>
            Kalkulator <span>Kelayakan Gaji</span>
          </h1>
          <p>
            Berapa batas harga rumah yang aman untuk dibeli berdasarkan penghasilan Anda saat ini? Cek batas maksimal plafon kredit Anda di sini.
          </p>
        </div>
      </section>

      <div className="container">
        <KalkulatorKelayakanKPR />
      </div>
    </div>
  );
}
