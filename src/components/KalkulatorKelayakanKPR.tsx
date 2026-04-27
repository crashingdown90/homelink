'use client';

import { useState } from 'react';

export default function KalkulatorKelayakanKPR() {
  const [gajiBulanan, setGajiBulanan] = useState<number>(15000000);
  const [cicilanLain, setCicilanLain] = useState<number>(2000000);
  const [sukuBunga, setSukuBunga] = useState<number>(7.5);
  const [tenorTahun, setTenorTahun] = useState<number>(15);
  const [dpPersen, setDpPersen] = useState<number>(20);

  const formatRupiah = (angka: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(angka);
  };

  // Logika Kelayakan
  // Bank umumnya membatasi DSR (Debt Service Ratio) maksimal 30-40% dari Gaji Bersih.
  // Di sini kita pakai 35%
  const maxCicilanTotal = gajiBulanan * 0.35;
  const sisaKemampuanMencicil = Math.max(0, maxCicilanTotal - cicilanLain);

  // Menghitung mundur (Reverse PMT) untuk mencari Pokok Pinjaman Maksimal
  // Pokok = Cicilan * ((1 - (1 + r)^-n) / r)
  const bungaBulan = sukuBunga / 100 / 12;
  const totalBulan = tenorTahun * 12;

  let pokokMaksimal = 0;
  if (bungaBulan > 0) {
    const x = Math.pow(1 + bungaBulan, -totalBulan);
    pokokMaksimal = sisaKemampuanMencicil * ((1 - x) / bungaBulan);
  } else {
    pokokMaksimal = sisaKemampuanMencicil * totalBulan;
  }

  // Jika pokok maksimal adalah (100% - DP%), maka Harga Rumah = Pokok / (1 - DP)
  const hargaRumahMaksimal = pokokMaksimal / (1 - (dpPersen / 100));
  const dpYangDibutuhkan = hargaRumahMaksimal * (dpPersen / 100);

  return (
    <div className="kalkulator-container">
      <div className="kalkulator-grid">
        <div className="kalkulator-form">
          <div className="form-group">
            <label>Penghasilan Bersih Gabungan (Per Bulan)</label>
            <input 
              type="number" 
              value={gajiBulanan} 
              onChange={(e) => setGajiBulanan(Number(e.target.value))}
              className="kalkulator-input"
            />
            <div className="range-slider">
              <input 
                type="range" min="5000000" max="100000000" step="1000000"
                value={gajiBulanan} onChange={(e) => setGajiBulanan(Number(e.target.value))}
              />
            </div>
            <span className="value-display">{formatRupiah(gajiBulanan)}</span>
          </div>

          <div className="form-group">
            <label>Cicilan Lain per Bulan (Kartu Kredit, Paylater, dll)</label>
            <input 
              type="number" 
              value={cicilanLain} 
              onChange={(e) => setCicilanLain(Number(e.target.value))}
              className="kalkulator-input"
            />
            <div className="range-slider">
              <input 
                type="range" min="0" max="50000000" step="500000"
                value={cicilanLain} onChange={(e) => setCicilanLain(Number(e.target.value))}
              />
            </div>
            <span className="value-display">{formatRupiah(cicilanLain)}</span>
          </div>

          <div className="form-group">
            <label>Suku Bunga KPR (%)</label>
            <input 
              type="number" value={sukuBunga} onChange={(e) => setSukuBunga(Number(e.target.value))}
              className="kalkulator-input" step="0.1"
            />
          </div>

          <div className="form-group">
            <label>Tenor yang Diinginkan (Tahun)</label>
            <input 
              type="number" value={tenorTahun} onChange={(e) => setTenorTahun(Number(e.target.value))}
              className="kalkulator-input"
            />
          </div>

          <div className="form-group">
            <label>Rencana Uang Muka / DP (%)</label>
            <input 
              type="number" value={dpPersen} onChange={(e) => setDpPersen(Number(e.target.value))}
              className="kalkulator-input"
            />
          </div>
        </div>

        <div className="kalkulator-result">
          <div className="result-card">
            <h3>Batas Harga Rumah Maksimal</h3>
            <div className="cicilan-amount">{formatRupiah(hargaRumahMaksimal)}</div>
            
            <div className="result-details">
              <div className="detail-row">
                <span>Kemampuan Mencicil KPR</span>
                <span style={{color: '#10b981'}}>{formatRupiah(sisaKemampuanMencicil)} / bln</span>
              </div>
              <div className="detail-row">
                <span>Pokok Pinjaman (Plafon) Maksimal</span>
                <span>{formatRupiah(pokokMaksimal)}</span>
              </div>
              <div className="detail-row total">
                <span>Dana DP yang Harus Disiapkan</span>
                <span>{formatRupiah(dpYangDibutuhkan)}</span>
              </div>
            </div>
            
            <div className="disclaimer-text">
              *Asumsi Debt Service Ratio (DSR) maksimal 35% dari gaji. Gunakan alat ini hanya sebagai referensi awal.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
