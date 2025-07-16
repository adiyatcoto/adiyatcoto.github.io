Coto COP TAH - Multi-Timeframe Bias Analyzer
===============================================================================
                    Multi-Timeframe Bias Analyzer                             
                         Pine Script for TradingView                          
===============================================================================
TradingView Script Link: https://www.tradingview.com/script/Bp4ls8mK-Coto-COP-TAH-Multi-Timeframe-Bias-Analyzer/
-------------------------------------------------------------------------------
                              BAHASA INDONESIA                                 
-------------------------------------------------------------------------------
Deskripsi
Indikator Pine Script untuk TradingView yang membantu menganalisis bias pasar di berbagai timeframe secara bersamaan menggunakan konsep "Open to Open". Indikator ini menampilkan informasi bias, pola, fase siklus, dan proyeksi untuk setiap timeframe dalam bentuk tabel yang mudah dibaca.
Fitur Utama

Multi-Timeframe Analysis: Analisis bias dari 15 menit hingga tahunan
Open to Open Concept: Menentukan bias berdasarkan perbandingan open saat ini dengan open sebelumnya
Pattern Recognition: Deteksi pola seperti Normal Bull/Bear, Breakout, Sideways, dan Anomaly
Cycle Phase Tracking: Menunjukkan fase siklus (Early, Mid, Late, Final) dengan persentase progress
Projected Bias: Proyeksi bias berdasarkan posisi harga current terhadap open
Range Analysis: Analisis range dibanding periode sebelumnya dan rata-rata historis
Customizable Display: Pengaturan posisi tabel dan ukuran yang fleksibel

Timeframe yang Didukung
┌─────────────┬─────────────┬─────────────┬─────────────┐
│ 15 Menit    │ 30 Menit    │ 1 Jam       │ 4 Jam       │
├─────────────┼─────────────┼─────────────┼─────────────┤
│ Harian      │ Mingguan    │ Bulanan     │ Kuartalan   │
├─────────────┼─────────────┼─────────────┼─────────────┤
│ 6 Bulan     │ Tahunan     │             │             │
└─────────────┴─────────────┴─────────────┴─────────────┘
Kolom Tabel & Penjelasan
┌─────────────┬─────────────────────────────────────────────────────────────┐
│ Kolom       │ Penjelasan                                                  │
├─────────────┼─────────────────────────────────────────────────────────────┤
│ Timeframe   │ Periode waktu yang dianalisis                               │
│ Bias        │ Bullish/Bearish/Neutral berdasarkan open to open           │
│ Pattern     │ Jenis pola: Normal Bull/Bear, Breakout, Sideways, Anomaly   │
│ % Imbalance │ Persentase perubahan harga dalam timeframe                  │
│ Cycle Phase │ Fase siklus dengan deskripsi aktivitas                      │
│ % Complete  │ Persentase kelengkapan siklus timeframe                     │
│ Projected   │ Proyeksi bias berdasarkan posisi harga vs open             │
│ Actual Range│ Persentase range vs periode sebelumnya                      │
│ Avg Range   │ Persentase range vs rata-rata 4 periode                    │
└─────────────┴─────────────────────────────────────────────────────────────┘
Cara Menggunakan

Instalasi: Tambahkan indikator ke chart TradingView
Pengaturan: Pilih timeframe yang ingin ditampilkan
Posisi: Atur posisi tabel (Top/Bottom + Left/Center/Right)
Ukuran: Sesuaikan ukuran tabel (100%, 75%, 50%)
Analisis: Baca bias di berbagai timeframe untuk konfirmasi

Interpretasi Bias
┌─────────────┬─────────────┬─────────────────────────────────────────────────┐
│ Bias        │ Warna       │ Kondisi                                         │
├─────────────┼─────────────┼─────────────────────────────────────────────────┤
│ Bullish     │ Hijau       │ Current Open > Previous Open                    │
│ Bearish     │ Merah       │ Current Open < Previous Open                    │
│ Neutral     │ Abu-abu     │ Current Open = Previous Open                    │
└─────────────┴─────────────┴─────────────────────────────────────────────────┘
Jenis Pattern
┌─────────────────┬─────────────────────────────────────────────────────────┐
│ Pattern         │ Karakteristik                                           │
├─────────────────┼─────────────────────────────────────────────────────────┤
│ Normal Bull     │ Higher High + Higher Low (bias bullish)                │
│ Normal Bear     │ Lower High + Lower Low (bias bearish)                  │
│ Breakout Bull   │ Higher High + Lower Low (bias bullish)                 │
│ Breakout Bear   │ Higher High + Lower Low (bias bearish)                 │
│ Sideways        │ Lower High + Higher Low                                 │
│ Anomaly         │ Pola yang tidak sesuai dengan bias                     │
└─────────────────┴─────────────────────────────────────────────────────────┘
Fase Siklus
┌─────────────┬─────────────┬─────────────────────────────────────────────────┐
│ Fase        │ % Progress  │ Aktivitas Bullish / Bearish                     │
├─────────────┼─────────────┼─────────────────────────────────────────────────┤
│ Early       │ 0-25%       │ Seeking Low / Seeking High                      │
│ Mid         │ 25-50%      │ Ready to Pump / Ready to Dump                   │
│ Late        │ 50-75%      │ Pump in Process / Dump in Process               │
│ Final       │ 75-100%     │ Final Pump / Final Dump                         │
└─────────────┴─────────────┴─────────────────────────────────────────────────┘
Proyeksi Bias
┌─────────────────────┬─────────────────────────────────────────────────────┐
│ Proyeksi            │ Kondisi                                             │
├─────────────────────┼─────────────────────────────────────────────────────┤
│ Still Bullish       │ Bias bullish + Close >= Open                       │
│ Still Bearish       │ Bias bearish + Close <= Open                       │
│ Potential Bullish   │ Bias bearish + Close > Open                        │
│ Potential Bearish   │ Bias bullish + Close < Open                        │
└─────────────────────┴─────────────────────────────────────────────────────┘
Analisis Range

Actual Range: Persentase range saat ini vs periode sebelumnya
Average Range: Persentase range saat ini vs rata-rata 4 periode
Hijau: Range >= 100% (range lebih besar)
Merah: Range < 100% (range lebih kecil)

Strategi Trading

Konfirmasi Multi-Timeframe: Cari alignment bias di beberapa timeframe
Entry Timing: Gunakan timeframe kecil untuk entry, besar untuk direction
Pattern Recognition: Perhatikan pola untuk prediksi pergerakan
Cycle Phase: Manfaatkan fase siklus untuk timing
Range Analysis: Gunakan analisis range untuk volatility expectation

Tips Penggunaan

Timeframe besar untuk trend direction
Timeframe kecil untuk entry dan exit timing
Perhatikan anomaly pattern sebagai warning signal
Gunakan projected bias untuk anticipation
Kombinasikan dengan analisis teknikal lainnya

Catatan Penting

Indikator ini adalah alat bantu analisis, bukan sinyal trading
Selalu gunakan risk management yang tepat
Backtest terlebih dahulu sebelum live trading
Pertimbangkan faktor fundamental dan news events
Tidak cocok untuk semua kondisi pasar

-------------------------------------------------------------------------------
                                 ENGLISH                                      
-------------------------------------------------------------------------------
Description
Pine Script indicator for TradingView that helps analyze market bias across multiple timeframes simultaneously using "Open to Open" concept. This indicator displays bias information, patterns, cycle phases, and projections for each timeframe in an easy-to-read table format.
Main Features

Multi-Timeframe Analysis: Bias analysis from 15 minutes to yearly
Open to Open Concept: Determines bias based on current open vs previous open comparison
Pattern Recognition: Detects patterns like Normal Bull/Bear, Breakout, Sideways, and Anomaly
Cycle Phase Tracking: Shows cycle phases (Early, Mid, Late, Final) with progress percentage
Projected Bias: Bias projection based on current price position vs open
Range Analysis: Range analysis compared to previous period and historical average
Customizable Display: Flexible table position and size settings

Supported Timeframes
┌─────────────┬─────────────┬─────────────┬─────────────┐
│ 15 Minutes  │ 30 Minutes  │ 1 Hour      │ 4 Hours     │
├─────────────┼─────────────┼─────────────┼─────────────┤
│ Daily       │ Weekly      │ Monthly     │ Quarterly   │
├─────────────┼─────────────┼─────────────┼─────────────┤
│ 6 Months    │ Yearly      │             │             │
└─────────────┴─────────────┴─────────────┴─────────────┘
Table Columns & Explanations
┌─────────────┬─────────────────────────────────────────────────────────────┐
│ Column      │ Explanation                                                 │
├─────────────┼─────────────────────────────────────────────────────────────┤
│ Timeframe   │ Time period being analyzed                                  │
│ Bias        │ Bullish/Bearish/Neutral based on open to open              │
│ Pattern     │ Pattern type: Normal Bull/Bear, Breakout, Sideways, Anomaly │
│ % Imbalance │ Percentage price change within timeframe                    │
│ Cycle Phase │ Cycle phase with activity description                       │
│ % Complete  │ Percentage completion of timeframe cycle                    │
│ Projected   │ Bias projection based on price position vs open            │
│ Actual Range│ Range percentage vs previous period                         │
│ Avg Range   │ Range percentage vs average of 4 periods                   │
└─────────────┴─────────────────────────────────────────────────────────────┘
How to Use

Installation: Add the indicator to your TradingView chart
Settings: Select timeframes you want to display
Position: Set table position (Top/Bottom + Left/Center/Right)
Size: Adjust table size (100%, 75%, 50%)
Analysis: Read bias across multiple timeframes for confirmation

Bias Interpretation
┌─────────────┬─────────────┬─────────────────────────────────────────────────┐
│ Bias        │ Color       │ Condition                                       │
├─────────────┼─────────────┼─────────────────────────────────────────────────┤
│ Bullish     │ Green       │ Current Open > Previous Open                    │
│ Bearish     │ Red         │ Current Open < Previous Open                    │
│ Neutral     │ Gray        │ Current Open = Previous Open                    │
└─────────────┴─────────────┴─────────────────────────────────────────────────┘
Pattern Types
┌─────────────────┬─────────────────────────────────────────────────────────┐
│ Pattern         │ Characteristics                                         │
├─────────────────┼─────────────────────────────────────────────────────────┤
│ Normal Bull     │ Higher High + Higher Low (bullish bias)                │
│ Normal Bear     │ Lower High + Lower Low (bearish bias)                  │
│ Breakout Bull   │ Higher High + Lower Low (bullish bias)                 │
│ Breakout Bear   │ Higher High + Lower Low (bearish bias)                 │
│ Sideways        │ Lower High + Higher Low                                 │
│ Anomaly         │ Pattern inconsistent with bias                         │
└─────────────────┴─────────────────────────────────────────────────────────┘
Cycle Phases
┌─────────────┬─────────────┬─────────────────────────────────────────────────┐
│ Phase       │ % Progress  │ Bullish / Bearish Activity                      │
├─────────────┼─────────────┼─────────────────────────────────────────────────┤
│ Early       │ 0-25%       │ Seeking Low / Seeking High                      │
│ Mid         │ 25-50%      │ Ready to Pump / Ready to Dump                   │
│ Late        │ 50-75%      │ Pump in Process / Dump in Process               │
│ Final       │ 75-100%     │ Final Pump / Final Dump                         │
└─────────────┴─────────────┴─────────────────────────────────────────────────┘
Projected Bias
┌─────────────────────┬─────────────────────────────────────────────────────┐
│ Projection          │ Condition                                           │
├─────────────────────┼─────────────────────────────────────────────────────┤
│ Still Bullish       │ Bullish bias + Close >= Open                       │
│ Still Bearish       │ Bearish bias + Close <= Open                       │
│ Potential Bullish   │ Bearish bias + Close > Open                        │
│ Potential Bearish   │ Bullish bias + Close < Open                        │
└─────────────────────┴─────────────────────────────────────────────────────┘
Range Analysis

Actual Range: Current range percentage vs previous period
Average Range: Current range percentage vs average of 4 periods
Green: Range >= 100% (larger range)
Red: Range < 100% (smaller range)

Trading Strategy

Multi-Timeframe Confirmation: Look for bias alignment across timeframes
Entry Timing: Use smaller timeframes for entry, larger for direction
Pattern Recognition: Watch patterns for movement prediction
Cycle Phase: Utilize cycle phases for timing
Range Analysis: Use range analysis for volatility expectation

Usage Tips

Use larger timeframes for trend direction
Use smaller timeframes for entry and exit timing
Pay attention to anomaly patterns as warning signals
Use projected bias for anticipation
Combine with other technical analysis

Important Notes

This indicator is an analysis tool, not a trading signal
Always use proper risk management
Backtest before live trading
Consider fundamental factors and news events
Not suitable for all market conditions

===============================================================================
                         TECHNICAL SPECIFICATIONS                            
===============================================================================
Input Parameters

Timeframe selection toggles (15m, 30m, 1h, 4h, Daily, Weekly, Monthly, etc.)
Table position options (6 positions available)
Table size options (100%, 75%, 50%)

Calculations

Bias: Comparison between current and previous open prices
Pattern: High/Low relationships combined with bias
Range: Current range vs previous and average ranges
Time Progress: Elapsed time percentage within timeframe cycle

Performance

Uses request.security() calls efficiently
Optimized for multiple timeframe analysis
Minimal lag with real-time updates

Compatibility

TradingView Pine Script v5
Works on all asset classes
Compatible with all chart types

===============================================================================
                              CHANGELOG                                       
===============================================================================
Version History

v1.0: Initial release with basic multi-timeframe bias analysis
v1.1: Added 30-minute and 6-month timeframes
v1.2: Enhanced pattern recognition and cycle phase tracking
v1.3: Added range analysis and projected bias features
v1.4: Improved table customization and performance optimization

===============================================================================
                              DISCLAIMER                                      
===============================================================================
BAHASA INDONESIA
Indikator ini hanya untuk tujuan edukasi dan analisis. Penggunaan untuk trading adalah risiko pengguna sendiri. Penulis tidak bertanggung jawab atas kerugian trading yang mungkin terjadi. Selalu lakukan riset mandiri dan gunakan risk management yang tepat.
ENGLISH
This indicator is for educational and analysis purposes only. Usage for trading is at user's own risk. The author is not responsible for any trading losses that may occur. Always do your own research and use proper risk management.
===============================================================================
                          © 2025 Coto COP TAH                      
===============================================================================
Contact & Support

TradingView Profile: Check the script link for updates
For questions: Use TradingView comment section
Bug reports: Please report via TradingView platform

===============================================================================
                              END OF README                                   
===============================================================================