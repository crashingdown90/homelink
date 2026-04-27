'use client';

import { useState, useEffect } from 'react';

export default function KalkulatorKPR() {
  const [hargaRumah, setHargaRumah] = useState<number>(500000000);
  const [uangMukaPersen, setUangMukaPersen] = useState<number>(20);
  const [sukuBunga, setSukuBunga] = useState<number>(7.5);
  const [tenorTahun, setTenorTahun] = useState<number>(15);

  const [cicilan, setCicilan] = useState<number>(0);

  useEffect(() => {
    // Perhitungan KPR (Metode Anuitas / Flat untuk simplifikasi)
    const uangMuka = (hargaRumah * uangMukaPersen) / 100;
    const pokokPinjaman = hargaRumah - uangMuka;
    
    // Bunga per bulan
    const bungaBulan = sukuBunga / 100 / 12;
    // Total bulan
    const totalBulan = tenorTahun * 12;

    if (bungaBulan === 0) {
      setCicilan(pokokPinjaman / totalBulan);
    } else {
      const x = Math.pow(1 + bungaBulan, totalBulan);
      const cicilanBulan = (pokokPinjaman * bungaBulan * x) / (x - 1);
      setCicilan(cicilanBulan);
    }
  }, [hargaRumah, uangMukaPersen, sukuBunga, tenorTahun]);

  const formatRupiah = (angka: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(angka);
  };

  const pokokPinjaman = hargaRumah - (hargaRumah * uangMukaPersen) / 100;

  return (
    <div className="kalkulator-container">
      <div className="kalkulator-grid">
        <div className="kalkulator-form">
          <div className="form-group">
            <label>Harga Rumah (Rp)</label>
            <input 
              type="number" 
              value={hargaRumah} 
              onChange={(e) => setHargaRumah(Number(e.target.value))}
              className="kalkulator-input"
            />
            <div className="range-slider">
              <input 
                type="range" 
                min="100000000" 
                max="5000000000" 
                step="50000000"
                value={hargaRumah} 
                onChange={(e) => setHargaRumah(Number(e.target.value))}
              />
            </div>
            <span className="value-display">{formatRupiah(hargaRumah)}</span>
          </div>

          <div className="form-group">
            <label>Uang Muka / DP (%)</label>
            <input 
              type="number" 
              value={uangMukaPersen} 
              onChange={(e) => setUangMukaPersen(Number(e.target.value))}
              className="kalkulator-input"
            />
            <div className="range-slider">
              <input 
                type="range" 
                min="0" 
                max="100" 
                step="5"
                value={uangMukaPersen} 
                onChange={(e) => setUangMukaPersen(Number(e.target.value))}
              />
            </div>
            <span className="value-display">{uangMukaPersen}% ({formatRupiah((hargaRumah * uangMukaPersen) / 100)})</span>
          </div>

          <div className="form-group">
            <label>Suku Bunga per Tahun (%)</label>
            <input 
              type="number" 
              value={sukuBunga} 
              onChange={(e) => setSukuBunga(Number(e.target.value))}
              className="kalkulator-input"
              step="0.1"
            />
            <div className="range-slider">
              <input 
                type="range" 
                min="1" 
                max="15" 
                step="0.1"
                value={sukuBunga} 
                onChange={(e) => setSukuBunga(Number(e.target.value))}
              />
            </div>
            <span className="value-display">{sukuBunga}%</span>
          </div>

          <div className="form-group">
            <label>Tenor (Tahun)</label>
            <input 
              type="number" 
              value={tenorTahun} 
              onChange={(e) => setTenorTahun(Number(e.target.value))}
              className="kalkulator-input"
            />
            <div className="range-slider">
              <input 
                type="range" 
                min="1" 
                max="30" 
                step="1"
                value={tenorTahun} 
                onChange={(e) => setTenorTahun(Number(e.target.value))}
              />
            </div>
            <span className="value-display">{tenorTahun} Tahun</span>
          </div>
        </div>

        <div className="kalkulator-result">
          <div className="result-card">
            <h3>Estimasi Cicilan Bulanan</h3>
            <div className="cicilan-amount">{formatRupiah(cicilan)}</div>
            
            <div className="result-details">
              <div className="detail-row">
                <span>Pokok Pinjaman</span>
                <span>{formatRupiah(pokokPinjaman)}</span>
              </div>
              <div className="detail-row">
                <span>Total Bunga ({tenorTahun} Tahun)</span>
                <span>{formatRupiah((cicilan * tenorTahun * 12) - pokokPinjaman)}</span>
              </div>
              <div className="detail-row total">
                <span>Total Pembayaran</span>
                <span>{formatRupiah(cicilan * tenorTahun * 12)}</span>
              </div>
            </div>
            
            <div className="disclaimer-text">
              *Perhitungan ini adalah estimasi (metode anuitas). Suku bunga bank dan ketentuan lainnya dapat berbeda.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
