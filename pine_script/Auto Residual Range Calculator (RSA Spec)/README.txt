```
╔═══════════════════════════════════════════════════════════════════════════════╗
║                    COPTAH Auto Residual Range Calculator                     ║
║                              (RSA Spec)                                      ║
║                    For All Asset Classes - Pine Script                       ║
╚═══════════════════════════════════════════════════════════════════════════════╝
```

# COPTAH Auto Residual Range Calculator (RSA Spec)
## README - Bahasa Indonesia & English

**TradingView Script Link:** https://www.tradingview.com/script/AhB1Q17G-For-All-Asset-Class-COP-TAH-Auto-Residual-Range-Calculator/

---

## BAHASA INDONESIA

### Deskripsi
Auto Residual Range Calculator adalah indikator Pine Script yang dirancang untuk menghitung level support dan resistance berdasarkan range residual dari pivot point historis. Indikator ini cocok untuk semua kelas aset dan menyediakan proyeksi masa depan untuk membantu analisis trading.

### Fitur Utama

#### 1. Timeframe Pivot yang Fleksibel
```
┌─────────────────────────────────────────────────────────────┐
│ Auto         │ Otomatis menyesuaikan berdasarkan timeframe  │
│ Daily        │ Pivot harian                                │
│ Weekly       │ Pivot mingguan                              │
│ Monthly      │ Pivot bulanan                               │
│ Quarterly    │ Pivot kuartalan                             │
│ Semester     │ Pivot 6 bulan                               │
│ Yearly       │ Pivot tahunan                               │
│ Multi-year   │ 2Y, 4Y, 8Y, 16Y, 32Y                       │
└─────────────────────────────────────────────────────────────┘
```

#### 2. Level Support & Resistance
```
┌─────────────────────────────────────────────────────────────┐
│ Level yang tersedia:                                        │
├─────────────────────────────────────────────────────────────┤
│ H1/L1 (50%)  │ Level pertama dengan 50% dari range         │
│ H2/L2 (75%)  │ Level kedua dengan 75% dari range           │
│ H3/L3 (100%) │ Level ketiga dengan 100% dari range         │
│ H4/L4 (125%) │ Level keempat dengan 125% dari range        │
│ H5/L5 (150%) │ Level kelima dengan 150% dari range         │
│ H6/L6 (200%) │ Level keenam dengan 200% dari range         │
└─────────────────────────────────────────────────────────────┘
```

#### 3. Dynamic Equilibrium (EQ)
- Garis keseimbangan dinamis yang menunjukkan titik tengah antara high dan low
- Dapat disesuaikan jumlah periode lookback-nya
- Style line yang dapat dikustomisasi

#### 4. Future Projection
- Proyeksi level masa depan berdasarkan range saat ini
- Offset horizontal yang dapat disesuaikan
- Warna dan style yang dapat dikustomisasi

#### 5. Kustomisasi Visual
```
┌─────────────────────────────────────────────────────────────┐
│ Fitur Kustomisasi:                                          │
├─────────────────────────────────────────────────────────────┤
│ ✓ Warna untuk setiap level                                  │
│ ✓ Lebar dan style garis                                     │
│ ✓ Posisi label (kiri/kanan)                                 │
│ ✓ Tampilan harga pada label                                 │
│ ✓ Kontrol visibilitas per level                             │
└─────────────────────────────────────────────────────────────┘
```

### Pengaturan Khusus

#### Manual Start Year
Untuk timeframe yearly dan multi-year, tersedia opsi untuk mengatur tahun mulai manual. Berguna untuk:
- Menyesuaikan siklus dengan event khusus (contoh: Bitcoin Halving)
- Analisis berdasarkan periode ekonomi tertentu

#### Lookback Settings
- **Number of Pivots Back**: Jumlah periode pivot yang ditampilkan
- **Number of EQ Back**: Jumlah periode EQ yang ditampilkan

### Cara Penggunaan

```
╔═══════════════════════════════════════════════════════════════════════════════╗
║                              PANDUAN PENGGUNAAN                              ║
╠═══════════════════════════════════════════════════════════════════════════════╣
║ 1. │ Pilih Timeframe Pivot yang sesuai dengan strategi trading Anda          ║
║ 2. │ Atur jumlah lookback sesuai kebutuhan analisis                          ║
║ 3. │ Aktifkan/nonaktifkan level yang diperlukan                              ║
║ 4. │ Gunakan Future Projection untuk antisipasi pergerakan harga             ║
║ 5. │ Sesuaikan visual agar mudah dibaca di chart                             ║
╚═══════════════════════════════════════════════════════════════════════════════╝
```

### Perhitungan Teknis

```
┌─────────────────────────────────────────────────────────────┐
│                    FORMULA PERHITUNGAN                     │
├─────────────────────────────────────────────────────────────┤
│ Vu (Volatility Unit):                                      │
│ Vu = High_Previous - Low_Previous                          │
│                                                            │
│ Level Calculation:                                         │
│ Resistance (H) = Low_Current + (Percentage × Vu)          │
│ Support (L) = High_Current - (Percentage × Vu)            │
│                                                            │
│ Dynamic Equilibrium:                                       │
│ EQ = (High_Current + Low_Current) / 2                      │
└─────────────────────────────────────────────────────────────┘
```

---

## ENGLISH

### Description
Auto Residual Range Calculator is a Pine Script indicator designed to calculate support and resistance levels based on residual range from historical pivot points. This indicator works for all asset classes and provides future projections to assist trading analysis.

### Key Features

#### 1. Flexible Pivot Timeframes
```
┌─────────────────────────────────────────────────────────────┐
│ Auto         │ Automatically adjusts based on chart TF     │
│ Daily        │ Daily pivots                               │
│ Weekly       │ Weekly pivots                              │
│ Monthly      │ Monthly pivots                             │
│ Quarterly    │ Quarterly pivots                           │
│ Semester     │ 6-month pivots                             │
│ Yearly       │ Annual pivots                              │
│ Multi-year   │ 2Y, 4Y, 8Y, 16Y, 32Y                       │
└─────────────────────────────────────────────────────────────┘
```

#### 2. Support & Resistance Levels
```
┌─────────────────────────────────────────────────────────────┐
│ Available levels:                                           │
├─────────────────────────────────────────────────────────────┤
│ H1/L1 (50%)  │ First level with 50% of range              │
│ H2/L2 (75%)  │ Second level with 75% of range             │
│ H3/L3 (100%) │ Third level with 100% of range             │
│ H4/L4 (125%) │ Fourth level with 125% of range            │
│ H5/L5 (150%) │ Fifth level with 150% of range             │
│ H6/L6 (200%) │ Sixth level with 200% of range             │
└─────────────────────────────────────────────────────────────┘
```

#### 3. Dynamic Equilibrium (EQ)
- Dynamic equilibrium line showing midpoint between high and low
- Customizable lookback period count
- Customizable line style

#### 4. Future Projection
- Future level projections based on current range
- Adjustable horizontal offset
- Customizable colors and styles

#### 5. Visual Customization
```
┌─────────────────────────────────────────────────────────────┐
│ Customization Features:                                     │
├─────────────────────────────────────────────────────────────┤
│ ✓ Colors for each level                                     │
│ ✓ Line width and style                                      │
│ ✓ Label position (left/right)                               │
│ ✓ Price display on labels                                   │
│ ✓ Visibility control per level                              │
└─────────────────────────────────────────────────────────────┘
```

### Special Settings

#### Manual Start Year
For yearly and multi-year timeframes, manual start year option is available. Useful for:
- Aligning cycles with special events (e.g., Bitcoin Halving)
- Analysis based on specific economic periods

#### Lookback Settings
- **Number of Pivots Back**: Number of pivot periods to display
- **Number of EQ Back**: Number of EQ periods to display

### How to Use

```
╔═══════════════════════════════════════════════════════════════════════════════╗
║                               USAGE GUIDE                                    ║
╠═══════════════════════════════════════════════════════════════════════════════╣
║ 1. │ Select Pivot Timeframe that matches your trading strategy               ║
║ 2. │ Set lookback count according to analysis needs                          ║
║ 3. │ Enable/disable levels as required                                       ║
║ 4. │ Use Future Projection for price movement anticipation                   ║
║ 5. │ Adjust visuals for easy chart reading                                   ║
╚═══════════════════════════════════════════════════════════════════════════════╝
```

### Technical Calculations

```
┌─────────────────────────────────────────────────────────────┐
│                    CALCULATION FORMULAS                    │
├─────────────────────────────────────────────────────────────┤
│ Vu (Volatility Unit):                                      │
│ Vu = High_Previous - Low_Previous                          │
│                                                            │
│ Level Calculation:                                         │
│ Resistance (H) = Low_Current + (Percentage × Vu)          │
│ Support (L) = High_Current - (Percentage × Vu)            │
│                                                            │
│ Dynamic Equilibrium:                                       │
│ EQ = (High_Current + Low_Current) / 2                      │
└─────────────────────────────────────────────────────────────┘
```

---

## Installation & Setup / Instalasi & Pengaturan

```
╔═══════════════════════════════════════════════════════════════════════════════╗
║                          INSTALLATION GUIDE                                  ║
╠═══════════════════════════════════════════════════════════════════════════════╣
║ English:                                                                     ║
║ 1. │ Copy the Pine Script code to TradingView                                ║
║ 2. │ Add to chart as indicator                                               ║
║ 3. │ Configure settings based on your trading style                          ║
║ 4. │ Adjust colors and visibility as needed                                  ║
║                                                                              ║
║ Indonesia:                                                                   ║
║ 1. │ Salin kode Pine Script ke TradingView                                   ║
║ 2. │ Tambahkan ke chart sebagai indikator                                    ║
║ 3. │ Konfigurasi pengaturan sesuai gaya trading Anda                         ║
║ 4. │ Sesuaikan warna dan visibilitas sesuai kebutuhan                        ║
╚═══════════════════════════════════════════════════════════════════════════════╝
```

---

## Technical Specifications / Spesifikasi Teknis

```
┌─────────────────────────────────────────────────────────────┐
│                    TECHNICAL SPECS                         │
├─────────────────────────────────────────────────────────────┤
│ Version          │ Pine Script v5                          │
│ Max Lines        │ 500                                     │
│ Max Labels       │ 500                                     │
│ Overlay          │ true                                    │
│ Asset Classes    │ All (Stocks, Forex, Crypto,            │
│                  │ Commodities, Indices)                   │
└─────────────────────────────────────────────────────────────┘
```

---

**TradingView Profile:** Check the script page for updates and discussions
**TradingView Profile:** Cek halaman script untuk update dan diskusi

---

```
╔═══════════════════════════════════════════════════════════════════════════════╗
║                    Developed for educational and analytical purposes         ║
║                    Dikembangkan untuk tujuan edukasi dan analisis            ║
╚═══════════════════════════════════════════════════════════════════════════════╝
```

**Disclaimer:** This indicator is for educational purposes only. Always do your own research and risk management before making trading decisions.

**Disclaimer:** Indikator ini hanya untuk tujuan edukasi. Selalu lakukan riset dan manajemen risiko sendiri sebelum membuat keputusan trading.