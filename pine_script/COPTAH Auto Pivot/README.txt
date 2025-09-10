================================================================================
    COP TAH AUTO PIVOT - V3 FINAL (UNTIL 5 LEVEL)
    For Gold & All Asset Classes
================================================================================

ENGLISH VERSION:
----------------

OVERVIEW:
---------
This TradingView indicator provides comprehensive pivot point analysis with 
multiple calculation methods. Suitable for Gold and all other asset classes 
including forex, stocks, commodities, and cryptocurrencies.

FEATURES:
---------
┌─────────────────────────────────────────────────────────────────────────────┐
│ ● Multiple Pivot Types:                                                    │
│   - COP TAH (Custom Formula)                                               │
│   - Fibonacci                                                              │
│   - Fibonacci Extended                                                     │
│   - Woodie                                                                 │
│   - Classic                                                                │
│   - Demark                                                                 │
│   - Camarilla                                                              │
│                                                                             │
│ ● Triple Pivot Sets:                                                       │
│   - Set A, B, C with independent configurations                            │
│   - Each set can use different timeframes                                  │
│   - Each set can use different pivot calculation methods                   │
│                                                                             │
│ ● Timeframe Options:                                                       │
│   - 1H, 2H, 3H, 4H, 6H, 12H                                               │
│   - 1D, 5D, 1W                                                            │
│   - 1M, 3M, 6M, 1Y                                                        │
│                                                                             │
│ ● Customizable Support/Resistance Levels:                                  │
│   - Up to 5 support levels                                                 │
│   - Up to 5 resistance levels                                              │
│   - Adjustable per pivot set                                               │
│                                                                             │
│ ● Visual Customization:                                                    │
│   - Line styles: Solid, Dotted, Dashed                                     │
│   - Color customization for S/R levels                                     │
│   - Optional price labels                                                  │
│   - Dynamic line width based on level importance                           │
└─────────────────────────────────────────────────────────────────────────────┘

PIVOT CALCULATIONS:
-------------------
COP TAH Formula (Exclusive):
  PP = (PrevOpen + PrevHigh + PrevLow + CurrOpen + (CurrOpen - 0.01)) / 5
  S1 = (PP * 2) - PrevHigh
  R1 = (PP * 2) - PrevLow
  [Additional levels calculated with progressive multipliers]

Other standard pivot formulas are included as documented by TradingView.

USAGE INSTRUCTIONS:
-------------------
1. Add indicator to your chart
2. Configure Pivot Set A (default: enabled)
3. Optionally enable Pivot Set B and C for multi-timeframe analysis
4. Adjust support/resistance level count (0-5 each)
5. Customize colors and line styles as needed
6. Enable price labels if desired

CONFIGURATION GUIDE:
--------------------
Set A Settings:
- Timeframe: Select from dropdown
- Show Pivots: Enable/disable this set
- S# and R#: Number of support/resistance levels (0-5)
- Pivot Type: Choose calculation method

Repeat for Sets B and C as needed.

BEST PRACTICES:
---------------
- Use different timeframes for each set (e.g., 1D, 1W, 1M)
- Start with 2-3 levels for cleaner charts
- COP TAH method works well for Gold trading
- Classic/Fibonacci suitable for most other assets
- Enable price labels for precise level identification

TECHNICAL NOTES:
----------------
- Uses security() function for multi-timeframe data
- Automatically updates on timeframe changes
- Optimized for performance with array-based calculations
- Compatible with all TradingView chart types

SUPPORT:
--------
Original TradingView Script:
https://www.tradingview.com/script/2IL2N7zG-For-Gold-COP-TAH-AUTO-PIVOT-V3-FINAL-UNTIL-5-LEVEL/

Credits:
- Original source code: JayRogers
- Modified by: adiyatcoto
- COP TAH formula: Raffa Jetndrya (RushArt House of Gold)

================================================================================

VERSI INDONESIA:
----------------

RINGKASAN:
----------
Indikator TradingView ini menyediakan analisis pivot point yang komprehensif 
dengan berbagai metode perhitungan. Cocok untuk Gold dan semua kelas aset 
lainnya termasuk forex, saham, komoditas, dan cryptocurrency.

FITUR:
------
┌─────────────────────────────────────────────────────────────────────────────┐
│ ● Berbagai Jenis Pivot:                                                    │
│   - COP TAH (Formula Khusus)                                               │
│   - Fibonacci                                                              │
│   - Fibonacci Extended                                                     │
│   - Woodie                                                                 │
│   - Classic                                                                │
│   - Demark                                                                 │
│   - Camarilla                                                              │
│                                                                             │
│ ● Tiga Set Pivot:                                                          │
│   - Set A, B, C dengan konfigurasi independen                              │
│   - Setiap set dapat menggunakan timeframe berbeda                         │
│   - Setiap set dapat menggunakan metode perhitungan berbeda                │
│                                                                             │
│ ● Pilihan Timeframe:                                                       │
│   - 1J, 2J, 3J, 4J, 6J, 12J                                               │
│   - 1H, 5H, 1M (minggu)                                                   │
│   - 1B, 3B, 6B, 1T (bulan/tahun)                                          │
│                                                                             │
│ ● Level Support/Resistance yang Dapat Disesuaikan:                         │
│   - Hingga 5 level support                                                 │
│   - Hingga 5 level resistance                                              │
│   - Dapat disesuaikan per set pivot                                        │
│                                                                             │
│ ● Kustomisasi Visual:                                                      │
│   - Gaya garis: Solid, Dotted, Dashed                                      │
│   - Kustomisasi warna untuk level S/R                                      │
│   - Label harga opsional                                                   │
│   - Ketebalan garis dinamis berdasarkan tingkat kepentingan                │
└─────────────────────────────────────────────────────────────────────────────┘

PERHITUNGAN PIVOT:
------------------
Formula COP TAH (Eksklusif):
  PP = (PrevOpen + PrevHigh + PrevLow + CurrOpen + (CurrOpen - 0.01)) / 5
  S1 = (PP * 2) - PrevHigh
  R1 = (PP * 2) - PrevLow
  [Level tambahan dihitung dengan multiplier progresif]

Formula pivot standar lainnya termasuk sesuai dokumentasi TradingView.

PETUNJUK PENGGUNAAN:
--------------------
1. Tambahkan indikator ke chart Anda
2. Konfigurasi Pivot Set A (default: aktif)
3. Opsional aktifkan Pivot Set B dan C untuk analisis multi-timeframe
4. Atur jumlah level support/resistance (0-5 masing-masing)
5. Sesuaikan warna dan gaya garis sesuai kebutuhan
6. Aktifkan label harga jika diperlukan

PANDUAN KONFIGURASI:
--------------------
Pengaturan Set A:
- Timeframe: Pilih dari dropdown
- Show Pivots: Aktifkan/nonaktifkan set ini
- S# dan R#: Jumlah level support/resistance (0-5)
- Pivot Type: Pilih metode perhitungan

Ulangi untuk Set B dan C sesuai kebutuhan.

PRAKTIK TERBAIK:
----------------
- Gunakan timeframe berbeda untuk setiap set (misal: 1D, 1W, 1M)
- Mulai dengan 2-3 level untuk chart yang lebih bersih
- Metode COP TAH cocok untuk trading Gold
- Classic/Fibonacci cocok untuk sebagian besar aset lainnya
- Aktifkan label harga untuk identifikasi level yang tepat

CATATAN TEKNIS:
---------------
- Menggunakan fungsi security() untuk data multi-timeframe
- Otomatis update saat timeframe berubah
- Dioptimalkan untuk performa dengan perhitungan berbasis array
- Kompatibel dengan semua jenis chart TradingView

DUKUNGAN:
---------
Script TradingView Asli:
https://www.tradingview.com/script/2IL2N7zG-For-Gold-COP-TAH-AUTO-PIVOT-V3-FINAL-UNTIL-5-LEVEL/

Kredit:
- Sumber kode asli: JayRogers
- Dimodifikasi oleh: adiyatcoto
- Formula COP TAH: Raffa Jetndrya (RushArt House of Gold)

================================================================================
Licensed under Mozilla Public License 2.0
https://mozilla.org/MPL/2.0/
================================================================================