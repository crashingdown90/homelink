import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kontak Kami | Homelink',
  description: 'Hubungi tim Homelink untuk pertanyaan, kerja sama, masukan, atau permintaan artikel seputar properti.',
};

export default function Kontak() {
  return (
    <article className="article-layout">
      <header className="article-header">
        <div className="container article-container">
          <h1 className="article-title">Hubungi Kami</h1>
        </div>
      </header>

      <div className="container article-container">
        <div className="prose">
          <p>
            Kami selalu senang mendengar dari Anda! Apakah Anda memiliki pertanyaan seputar artikel properti, tawaran kerja sama, masukan, atau masalah teknis terkait website? Tim Homelink siap membantu Anda.
          </p>

          <h2>Informasi Kontak</h2>
          <ul>
            <li><strong>Email:</strong> <a href="mailto:info@homelink.id" style={{ color: "var(--primary)", textDecoration: "underline" }}>info@homelink.id</a></li>
            <li><strong>Telepon:</strong> +62 811-0000-0000 (Hanya pesan WhatsApp/Teks)</li>
            <li><strong>Alamat Kantor:</strong> Gedung Homelink Tower, Lantai 12, Jl. Properti Sudirman No. 1, Jakarta Selatan, 12190, Indonesia</li>
          </ul>

          <h2>Jam Operasional</h2>
          <p>
            Tim dukungan kami beroperasi pada waktu berikut (WIB):
          </p>
          <ul>
            <li>Senin - Jumat: 09:00 - 17:00</li>
            <li>Sabtu - Minggu: Libur (Pesan akan direspon pada hari kerja berikutnya)</li>
          </ul>

          <h2>Kerja Sama & Iklan</h2>
          <p>
            Jika Anda merupakan agensi, developer properti, atau <em>brand</em> interior yang ingin menjalin kemitraan, mengiklankan produk (Sponsored Post), silakan kirimkan proposal Anda melalui email kami dengan subjek <strong>[Kemitraan/Iklan]</strong>.
          </p>

          <p><em>Catatan: Kami menanggapi setiap email secara serius. Mohon berikan kami waktu maksimal 2x24 jam untuk membalas pesan Anda.</em></p>
        </div>
      </div>
    </article>
  );
}
