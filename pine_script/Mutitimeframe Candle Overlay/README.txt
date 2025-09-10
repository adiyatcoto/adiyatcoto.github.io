================================================================================
                   COTOS COP TAH MULTITIMEFRAME CANDLE OVERLAY
================================================================================

TradingView Script Link: 
https://www.tradingview.com/script/aJXqPcUg-For-All-Asset-Class-Cotos-COP-TAH-Mutitimeframe-Candle-Overlay/

================================================================================
                                 DESCRIPTION
================================================================================

[ID] Deskripsi
--------------
Indikator Pine Script untuk TradingView yang menampilkan candle dari timeframe
yang lebih tinggi (HTF) secara overlay pada chart timeframe saat ini. Mendukung
hingga 5 timeframe berbeda dengan opsi candle standar atau Heikin Ashi.

[EN] Description
----------------
A Pine Script indicator for TradingView that displays Higher Timeframe (HTF)
candles as overlay on the current chart timeframe. Supports up to 5 different
timeframes with standard or Heikin Ashi candle options.

================================================================================
                               MAIN FEATURES
================================================================================

┌─────────────────────────────────────────────────────────────────────────────┐
│                            HTF CANDLE OVERLAY                               │
├─────────────────────────────────────────────────────────────────────────────┤
│ • Tampilkan hingga 5 timeframe berbeda secara bersamaan                    │
│ • Pilihan candle: Standar atau Heikin Ashi                                 │
│ • Kustomisasi warna untuk candle bullish dan bearish                       │
│ • Pengaturan transparansi candle                                           │
│ • Otomatis menyesuaikan dengan timeframe chart                             │
│                                                                             │
│ • Display up to 5 different timeframes simultaneously                      │
│ • Candle options: Standard or Heikin Ashi                                  │
│ • Customizable colors for bullish and bearish candles                      │
│ • Candle transparency settings                                             │
│ • Automatically adjusts to chart timeframe                                 │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│                              MINI CHART                                     │
├─────────────────────────────────────────────────────────────────────────────┤
│ • Tampilkan mini candle di sebelah kanan chart                             │
│ • Hingga 5 bar history untuk setiap timeframe                              │
│ • Tooltip dengan informasi detail candle                                   │
│ • Horizontal offset yang dapat disesuaikan                                 │
│ • Deteksi volatilitas tinggi berdasarkan ATR                               │
│                                                                             │
│ • Display mini candles on the right side of chart                          │
│ • Up to 5 bars history for each timeframe                                  │
│ • Tooltip with detailed candle information                                 │
│ • Adjustable horizontal offset                                             │
│ • High volatility detection based on ATR                                   │
└─────────────────────────────────────────────────────────────────────────────┘

================================================================================
                            SUPPORTED TIMEFRAMES
================================================================================

┌─────────────────────┬─────────────────────┬─────────────────────┬───────────┐
│     INTRADAY        │       DAILY         │       WEEKLY        │  MONTHLY  │
├─────────────────────┼─────────────────────┼─────────────────────┼───────────┤
│ • 3 Minutes         │ • 1 Day             │ • 1 Week            │ • 1 Month │
│ • 5 Minutes         │                     │                     │ • 3 Month │
│ • 10 Minutes        │                     │                     │ • 6 Month │
│ • 15 Minutes        │                     │                     │ • 1 Year  │
│ • 30 Minutes        │                     │                     │           │
│ • 45 Minutes        │                     │                     │           │
│ • 1 Hour            │                     │                     │           │
│ • 2 Hours           │                     │                     │           │
│ • 3 Hours           │                     │                     │           │
│ • 4 Hours           │                     │                     │           │
└─────────────────────┴─────────────────────┴─────────────────────┴───────────┘

================================================================================
                             TOOLTIP INFORMATION
================================================================================

[ID] Informasi Tooltip
----------------------
Setiap mini candle dilengkapi dengan tooltip yang menampilkan:
• Persentase perubahan harga
• Nilai ATR (Average True Range)
• Deteksi volatilitas tinggi
• Range candle (High - Low)
• OHLC values (Open, High, Low, Close)

[EN] Tooltip Information
------------------------
Each mini candle includes tooltip showing:
• Price change percentage
• ATR (Average True Range) value
• High volatility detection
• Candle range (High - Low)
• OHLC values (Open, High, Low, Close)

================================================================================
                              CONFIGURATION
================================================================================

┌─────────────────────────────────────────────────────────────────────────────┐
│                        HTF CANDLE SETTINGS                                  │
├─────────────────────────────────────────────────────────────────────────────┤
│ ┌─ 1st HTF Candle ──────────────────────────────────────────────────────┐   │
│ │ • Enable/Disable: [✓] 1st HTF Candle                                 │   │
│ │ • Candle Type: Standard / Heikin Ashi                                │   │
│ │ • Timeframe: 1 Week (default)                                        │   │
│ └───────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
│ ┌─ 2nd HTF Candle ──────────────────────────────────────────────────────┐   │
│ │ • Enable/Disable: [ ] 2nd HTF Candle                                 │   │
│ │ • Candle Type: Standard / Heikin Ashi                                │   │
│ │ • Timeframe: 1 Month (default)                                       │   │
│ └───────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
│ ┌─ 3rd, 4th, 5th HTF Candles ──────────────────────────────────────────┐   │
│ │ • Similar configuration for additional timeframes                     │   │
│ │ • Default: 3 Months, 6 Months, 1 Year                                │   │
│ └───────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
│ ┌─ Color Settings ──────────────────────────────────────────────────────┐   │
│ │ • Bull Candle: Green (#26a69a)                                       │   │
│ │ • Bear Candle: Red (#ef5350)                                         │   │
│ │ • Transparency: 85% (adjustable 65-95%)                              │   │
│ └───────────────────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│                        MINI CHART SETTINGS                                  │
├─────────────────────────────────────────────────────────────────────────────┤
│ • Enable Mini Chart: [✓] Enable HTF Mini Chart(s) Display                  │
│ • Number of Bars: 1-5 bars for each timeframe                              │
│ • Horizontal Offset: -3 to +25 (default: 0)                                │
│ • Disable HTF Candles: Option to show only mini charts                     │
└─────────────────────────────────────────────────────────────────────────────┘

================================================================================
                                 USAGE GUIDE
================================================================================

[ID] Panduan Penggunaan
-----------------------
1. Tambahkan indikator ke chart TradingView Anda
2. Pilih timeframe yang ingin ditampilkan (1st-5th HTF)
3. Pilih jenis candle (Standard atau Heikin Ashi)
4. Sesuaikan warna dan transparansi sesuai preferensi
5. Aktifkan mini chart untuk melihat history candle
6. Hover mouse di mini candle untuk melihat detail informasi

[EN] Usage Guide
----------------
1. Add the indicator to your TradingView chart
2. Select timeframes to display (1st-5th HTF)
3. Choose candle type (Standard or Heikin Ashi)
4. Adjust colors and transparency as preferred
5. Enable mini chart to see candle history
6. Hover mouse over mini candles for detailed information

================================================================================
                              ALERT SYSTEM
================================================================================

[ID] Sistem Alert
-----------------
• Alert otomatis saat candle HTF terbentuk
• Informasi ticker dan harga terkini
• Frekuensi alert dapat disesuaikan
• Mendukung alert untuk semua timeframe

[EN] Alert System
-----------------
• Automatic alerts when HTF candles form
• Current ticker and price information
• Adjustable alert frequency
• Supports alerts for all timeframes

================================================================================
                             TECHNICAL NOTES
================================================================================

┌─────────────────────────────────────────────────────────────────────────────┐
│                           SCRIPT LIMITATIONS                                │
├─────────────────────────────────────────────────────────────────────────────┤
│ • Maximum 500 boxes, lines, and labels                                     │
│ • Maximum 4999 bars lookback                                               │
│ • Compatible with standard charts only                                     │
│ • Timeframe must be supported by current chart timeframe                   │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│                            PERFORMANCE TIPS                                 │
├─────────────────────────────────────────────────────────────────────────────┤
│ • Gunakan hanya timeframe yang diperlukan                                  │
│ • Sesuaikan transparansi untuk mengurangi visual clutter                   │
│ • Disable candle overlay jika hanya butuh mini chart                       │
│                                                                             │
│ • Use only necessary timeframes                                             │
│ • Adjust transparency to reduce visual clutter                             │
│ • Disable candle overlay if only mini chart is needed                      │
└─────────────────────────────────────────────────────────────────────────────┘

================================================================================
                                 CHANGELOG
================================================================================

Version History:
────────────────
• July 16, 2025: Added 3rd, 4th, and 5th HTF Candle options
• July 16, 2025: Cleaned version - removed unnecessary features
• Original: Multi-timeframe candle overlay with mini charts

================================================================================
                            AUTHOR & CREDITS
================================================================================

Original Author: dgtrd
Modified by: Adiyat Coto
Script Type: Pine Script v5
Asset Class: All (Forex, Stocks, Crypto, Commodities, Indices)

================================================================================
                               DISCLAIMER
================================================================================

[ID] Disclaimer
---------------
Indikator ini hanya untuk tujuan edukasi dan analisis teknikal. Tidak 
merupakan saran investasi atau trading. Pengguna bertanggung jawab penuh 
atas keputusan trading yang dibuat berdasarkan informasi dari indikator ini.

[EN] Disclaimer
---------------
This indicator is for educational and technical analysis purposes only. It is
not investment or trading advice. Users are fully responsible for trading
decisions made based on information from this indicator.

================================================================================

For latest updates and support, visit:
https://www.tradingview.com/script/aJXqPcUg-For-All-Asset-Class-Cotos-COP-TAH-Mutitimeframe-Candle-Overlay/

================================================================================