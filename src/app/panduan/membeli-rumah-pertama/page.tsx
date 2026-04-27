import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Panduan Lengkap Membeli Rumah Pertama (Edisi 2026) | Homelink',
  description: 'Pillar page panduan paling komprehensif dari A-Z untuk milenial dan gen z dalam merencanakan, mensurvei, dan membeli rumah pertama.',
};

export default function PanduanMembeliRumahPage() {
  return (
    <div className="article-layout">
      <section className="hero" style={{ padding: "6rem 0 3rem" }}>
        <div className="container hero-content">
          <span className="card-tag" style={{ display: 'inline-block', marginBottom: '1rem', background: '#0ea5e9', color: 'white' }}>Ultimate Guide</span>
          <h1 style={{ fontSize: '3rem', lineHeight: '1.2' }}>
            Panduan Lengkap Membeli <span>Rumah Pertama</span> (Edisi 2026)
          </h1>
          <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.2rem' }}>
            Langkah demi langkah dari menyiapkan mental, menabung DP, survei developer bodong, hingga akad kredit KPR. 
            Semuanya dibahas tuntas di sini.
          </p>
        </div>
      </section>

      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '4rem', alignItems: 'start', paddingBottom: '4rem' }}>
        <article className="prose" style={{ maxWidth: '100%' }}>
          <h2>Daftar Isi</h2>
          <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '12px', marginBottom: '2rem', border: '1px solid #e2e8f0' }}>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '0.5rem' }}><a href="#bab-1" style={{ textDecoration: 'none', color: '#0ea5e9', fontWeight: '600' }}>Bab 1: Menyiapkan Pondasi Keuangan</a></li>
              <li style={{ marginBottom: '0.5rem' }}><a href="#bab-2" style={{ textDecoration: 'none', color: '#0ea5e9', fontWeight: '600' }}>Bab 2: Memilih Properti yang Tepat</a></li>
              <li style={{ marginBottom: '0.5rem' }}><a href="#bab-3" style={{ textDecoration: 'none', color: '#0ea5e9', fontWeight: '600' }}>Bab 3: Legalitas & Trik Menghindari Penipuan</a></li>
              <li style={{ marginBottom: '0.5rem' }}><a href="#bab-4" style={{ textDecoration: 'none', color: '#0ea5e9', fontWeight: '600' }}>Bab 4: Pengajuan KPR & Akad Kredit</a></li>
            </ul>
          </div>

          <h2 id="bab-1">Bab 1: Menyiapkan Pondasi Keuangan</h2>
          <p>
            Membeli rumah adalah komitmen jangka panjang. Kesalahan terbesar para pembeli pertama adalah hanya menghitung harga rumah, tanpa menyadari adanya **Biaya Tersembunyi**.
          </p>
          <p>Sebelum mulai mensurvei rumah impian, pastikan Anda telah menyiapkan:</p>
          <ul>
            <li><strong>Uang Muka (DP):</strong> Minimal 10-20% dari harga rumah. <Link href="/kalkulator-kelayakan">Hitung kelayakan gaji Anda di sini</Link>.</li>
            <li><strong>Dana Cadangan:</strong> Siapkan dana darurat sebesar 3-6 kali pengeluaran bulanan.</li>
            <li><strong>Biaya BPHTB & Notaris:</strong> Jangan lupakan pajak pembeli. <Link href="/kalkulator-pajak">Cek kalkulator pajak kami</Link>.</li>
          </ul>

          <h2 id="bab-2">Bab 2: Memilih Properti yang Tepat</h2>
          <p>Apakah Anda sebaiknya membeli Rumah Baru (Inden) dari developer, atau Rumah Bekas (Second)?</p>
          <h3>Rumah Baru (Developer)</h3>
          <p>Keunggulannya adalah desain yang modern, fasilitas cluster, dan promo KPR (seperti Free PPN atau Free BPHTB). Namun kekurangannya, rumah belum jadi (inden) dan ada risiko developer gagal bangun.</p>
          
          <h3>Rumah Bekas</h3>
          <p>Keunggulannya adalah rumah sudah berwujud nyata, lingkungan sudah hidup, dan sertifikat sudah pecah per kavling. Kekurangannya, Anda mungkin harus menyiapkan dana renovasi ekstra.</p>

          <h2 id="bab-3">Bab 3: Legalitas & Trik Menghindari Penipuan</h2>
          <p>Dunia properti rawan sengketa. Jangan pernah mentransfer <em>Booking Fee</em> sebelum memastikan hal-hal ini:</p>
          <ol>
            <li><strong>Cek Sertifikat Induk:</strong> Tanyakan apakah sertifikat (SHM/HGB) sudah pecah atau masih diagunkan oleh developer di bank?</li>
            <li><strong>Cek Legalitas Developer:</strong> Pastikan developer terdaftar di SIRENG PUPR.</li>
            <li><strong>Cek Tata Ruang:</strong> Pastikan tanah tidak berada di jalur hijau (SUTET) atau area rawan gusuran.</li>
          </ol>
          <p>Bingung dengan istilah-istilah di atas? Pelajari glosarium lengkapnya di <Link href="/kamus-properti">Kamus Properti Homelink</Link>.</p>

          <h2 id="bab-4">Bab 4: Pengajuan KPR & Akad Kredit</h2>
          <p>Proses KPR (Kredit Pemilikan Rumah) membutuhkan rekam jejak kredit yang bersih. Bank akan mengecek SLIK OJK (dulu BI Checking) Anda.</p>
          <ul>
            <li>Pastikan tidak ada tunggakan Paylater (ShopeePaylater, GoPaylater) atau Pinjaman Online.</li>
            <li>Siapkan dokumen slip gaji 3 bulan terakhir, mutasi rekening, dan NPWP.</li>
            <li>Jika disetujui, Anda akan masuk ke tahap Akad Kredit di depan notaris.</li>
          </ul>
          
          <div style={{ background: '#f8fafc', padding: '2rem', borderRadius: '12px', marginTop: '3rem', textAlign: 'center', border: '1px solid #e2e8f0' }}>
            <h3 style={{ marginTop: 0 }}>Siap Membeli Rumah?</h3>
            <p>Gunakan alat interaktif kami untuk merencanakan keuangan Anda hari ini.</p>
            <Link href="/kalkulator-kpr" className="btn-primary" style={{ display: 'inline-block', marginTop: '1rem' }}>
              Buka Kalkulator KPR
            </Link>
          </div>
        </article>

        <aside style={{ position: 'sticky', top: '100px' }}>
          <div style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
            <h4 style={{ margin: '0 0 1rem 0', color: '#0f172a' }}>Tools Berguna</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <Link href="/kalkulator-kpr" style={{ display: 'block', padding: '0.75rem', background: '#f8fafc', borderRadius: '8px', textDecoration: 'none', color: '#0284c7', fontWeight: '600', fontSize: '0.9rem' }}>
                🧮 Simulasi Cicilan KPR
              </Link>
              <Link href="/kalkulator-kelayakan" style={{ display: 'block', padding: '0.75rem', background: '#f8fafc', borderRadius: '8px', textDecoration: 'none', color: '#0284c7', fontWeight: '600', fontSize: '0.9rem' }}>
                💳 Cek Kelayakan Gaji
              </Link>
              <Link href="/kalkulator-pajak" style={{ display: 'block', padding: '0.75rem', background: '#f8fafc', borderRadius: '8px', textDecoration: 'none', color: '#0284c7', fontWeight: '600', fontSize: '0.9rem' }}>
                🧾 Kalkulator Pajak (BPHTB)
              </Link>
              <Link href="/kamus-properti" style={{ display: 'block', padding: '0.75rem', background: '#f8fafc', borderRadius: '8px', textDecoration: 'none', color: '#0284c7', fontWeight: '600', fontSize: '0.9rem' }}>
                📖 Kamus Istilah Properti
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
