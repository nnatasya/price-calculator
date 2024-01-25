import React, { useState } from 'react';
import './App.css';

const HargaAkhirCalculator = () => {
  const [hargaPembelian, setHargaPembelian] = useState('');
  const [ppn, setPpn] = useState('');
  const [diskon, setDiskon] = useState('');
  const [hargaAkhir, setHargaAkhir] = useState(0);

  const handleCalculate = () => {
    const hargaPembelianNumber = parseFloat(hargaPembelian);
    const ppnNumber = parseFloat(ppn);
    const diskonNumber = parseFloat(diskon);

    if (isNaN(hargaPembelianNumber) || isNaN(ppnNumber) || isNaN(diskonNumber)) {
      alert('Masukkan angka yang valid untuk harga pembelian, PPN, dan diskon.');
      return;
    }

    const ppnAmount = (hargaPembelianNumber * ppnNumber) / 100;
    const diskonAmount = (hargaPembelianNumber * diskonNumber) / 100;
    const hargaAkhirValue = hargaPembelianNumber + ppnAmount - diskonAmount;

    setHargaAkhir(hargaAkhirValue);
  };

  return (
    <div>
      <h2>Kalkulator Harga Akhir</h2>
      <label>
        Harga Pembelian:
        <input type="text" value={hargaPembelian} onChange={(e) => setHargaPembelian(e.target.value)} />
      </label>
      <br />
      <label>
        PPN (%):
        <input type="text" value={ppn} onChange={(e) => setPpn(e.target.value)} />
      </label>
      <br />
      <label>
        Diskon (%):
        <input type="text" value={diskon} onChange={(e) => setDiskon(e.target.value)} />
      </label>
      <br />
      <button onClick={handleCalculate}>Hitung Harga Akhir</button>
      <br />
      <h3>Hasil:</h3>
      <p>Harga Akhir: {hargaAkhir.toFixed(2)}</p>
    </div>
  );
};

export default HargaAkhirCalculator;
