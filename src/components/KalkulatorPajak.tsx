'use client';

import { useState } from 'react';

export default function KalkulatorPajak() {
  const [hargaTransaksi, setHargaTransaksi] = useState<number>(500000000);
  const [npoptkp, setNpoptkp] = useState<number>(60000000); // Rata-rata standar (bisa bervariasi per daerah)

  const formatRupiah = (angka: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(angka);
  };

  const dasarPengenaanPajak = Math.max(0, hargaTransaksi - npoptkp);
  const bphtb = dasarPengenaanPajak * 0.05; // Tarif 5%

  const biayaNotaris = hargaTransaksi * 0.01; // Estimasi kasar 1%
  const totalBiayaTambahan = bphtb + biayaNotaris;

  return (
    <div className="kalkulator-container">
      <div className="kalkulator-grid">
        <div className="kalkulator-form">
          <div className="form-group">
            <label>Harga Jual / Transaksi (Rp)</label>
            <input 
              type="number" 
              value={hargaTransaksi} 
              onChange={(e) => setHargaTransaksi(Number(e.target.value))}
              className="kalkulator-input"
            />
            <div className="range-slider">
              <input 
                type="range" min="100000000" max="5000000000" step="50000000"
                value={hargaTransaksi} onChange={(e) => setHargaTransaksi(Number(e.target.value))}
              />
            </div>
            <span className="value-display">{formatRupiah(hargaTransaksi)}</span>
          </div>

          <div className="form-group">
            <label>NPOPTKP (Nilai Perolehan Objek Pajak Tidak Kena Pajak)</label>
            <input 
              type="number" 
              value={npoptkp} 
              onChange={(e) => setNpoptkp(Number(e.target.value))}
              className="kalkulator-input"
            />
            <span className="value-display" style={{ textAlign: 'left', marginTop: '0.5rem' }}>
              *Biasanya Rp60 Juta hingga Rp80 Juta tergantung aturan Pemda setempat.
            </span>
          </div>
        </div>

        <div className="kalkulator-result">
          <div className="result-card">
            <h3>Estimasi Pajak Pembeli (BPHTB)</h3>
            <div className="cicilan-amount">{formatRupiah(bphtb)}</div>
            
            <div className="result-details">
              <div className="detail-row">
                <span>Harga Transaksi</span>
                <span>{formatRupiah(hargaTransaksi)}</span>
              </div>
              <div className="detail-row">
                <span>Pengurang (NPOPTKP)</span>
                <span style={{color: '#ef4444'}}>- {formatRupiah(npoptkp)}</span>
              </div>
              <div className="detail-row">
                <span>Dasar Pengenaan Pajak</span>
                <span>{formatRupiah(dasarPengenaanPajak)}</span>
              </div>
              <div className="detail-row total" style={{marginTop: '1rem', paddingTop: '1rem'}}>
                <span>Estimasi Biaya Notaris/PPAT (~1%)</span>
                <span>{formatRupiah(biayaNotaris)}</span>
              </div>
              <div className="detail-row total" style={{marginTop: '0.5rem', paddingTop: '0.5rem', borderTop: 'none'}}>
                <span>Total Dana Ekstra yang Disiapkan</span>
                <span style={{color: '#eab308'}}>{formatRupiah(totalBiayaTambahan)}</span>
              </div>
            </div>
            
            <div className="disclaimer-text">
              *Pajak BPHTB ditanggung pembeli. Pajak Penghasilan (PPh) 2.5% ditanggung penjual. Biaya notaris bisa dinegosiasikan.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
