import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Syarat dan Ketentuan | Homelink',
  description: 'Syarat dan Ketentuan penggunaan layanan dan konten di website Homelink.',
};

export default function SyaratKetentuan() {
  return (
    <article className="article-layout">
      <header className="article-header">
        <div className="container article-container">
          <h1 className="article-title">Syarat dan Ketentuan</h1>
        </div>
      </header>

      <div className="container article-container">
        <div className="prose">
          <h2>Ketentuan Penggunaan</h2>
          <p>
            Dengan mengakses situs web <strong>Homelink</strong>, Anda setuju untuk terikat oleh syarat dan ketentuan penggunaan situs web ini, semua undang-undang dan peraturan yang berlaku, dan setuju bahwa Anda bertanggung jawab untuk mematuhi hukum setempat yang berlaku. Jika Anda tidak setuju dengan ketentuan ini, Anda dilarang menggunakan atau mengakses situs ini.
          </p>

          <h2>Lisensi Penggunaan</h2>
          <p>
            Izin diberikan untuk mengunduh satu salinan materi (informasi atau perangkat lunak) di situs web Homelink hanya untuk tontonan sementara secara pribadi dan non-komersial. Ini adalah pemberian lisensi, bukan transfer hak milik, dan di bawah lisensi ini Anda tidak boleh:
          </p>
          <ul>
            <li>Memodifikasi atau menyalin materi.</li>
            <li>Menggunakan materi untuk tujuan komersial apa pun, atau untuk tampilan publik (komersial atau non-komersial).</li>
            <li>Mencoba mendekompilasi atau melakukan rekayasa balik pada perangkat lunak apa pun yang terkandung dalam situs Homelink.</li>
            <li>Menghapus hak cipta atau notasi kepemilikan lainnya dari materi.</li>
          </ul>

          <h2>Penafian (Disclaimer)</h2>
          <p>
            Materi di situs web Homelink disediakan "sebagaimana adanya". Homelink tidak memberikan jaminan, tersurat maupun tersirat, dan dengan ini melepaskan dan menegasikan semua jaminan lainnya, termasuk tanpa batasan, jaminan atau kondisi tersirat mengenai kelayakan untuk diperdagangkan, kesesuaian untuk tujuan tertentu, atau non-pelanggaran kekayaan intelektual atau pelanggaran hak lainnya.
          </p>

          <h2>Revisi dan Kekeliruan</h2>
          <p>
            Materi yang muncul di situs web Homelink mungkin mencakup kesalahan teknis, tipografi, atau fotografi. Homelink tidak menjamin bahwa semua materi di situs webnya akurat, lengkap, atau mutakhir. Kami dapat membuat perubahan pada materi sewaktu-waktu tanpa pemberitahuan sebelumnya.
          </p>

          <h2>Tautan (Links)</h2>
          <p>
            Homelink belum meninjau semua situs yang ditautkan ke situs webnya dan tidak bertanggung jawab atas konten situs tertaut tersebut. Pencantuman tautan apa pun tidak menyiratkan pengesahan oleh Homelink atas situs tersebut. Penggunaan situs web tertaut semacam itu adalah risiko pengguna sendiri.
          </p>

          <h2>Perubahan Ketentuan Situs</h2>
          <p>
            Homelink dapat merevisi syarat penggunaan untuk situs webnya ini sewaktu-waktu tanpa pemberitahuan sebelumnya. Dengan menggunakan situs ini, Anda setuju untuk terikat oleh versi Syarat dan Ketentuan Penggunaan saat itu.
          </p>
        </div>
      </div>
    </article>
  );
}
