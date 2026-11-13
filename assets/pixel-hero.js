/* pixel-hero.js
 * 1-bit dithered pixel hero. Warna mengikuti `color` teks halaman (light/dark otomatis),
 * "kertas" = transparan, jadi tidak perlu tahu nama variabel CSS.
 *
 * Pakai di halaman:  <div data-pixel-hero="home"></div>
 * Tiap halaman punya scene sendiri: tambahkan di objek `scenes` di bawah.
 */
(function () {
  const BAYER = [0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5];
  const bay = (x, y) => (BAYER[(y & 3) * 4 + (x & 3)] + 0.5) / 16;
  const FONT = { L: '100100100100111', I: '111010010010111', V: '101101101101010', E: '111100110100111' };

  /* ───────── SCENES ───────── */
  const scenes = {};

  // HOME / ABOUT: support engineer -> tiket diselesaikan -> GO LIVE, gelombang siklus pasar di belakang
  scenes.home = {
    h: 60,
    label: 'Ilustrasi pixel: support engineer di meja menyelesaikan tiket yang bergerak di conveyor menuju gerbang GO LIVE, dengan gelombang siklus pasar di latar.',
    draw({ R, t, W, H }) {
      const FY = 56, dX = Math.max(40, Math.round(W * 0.34)), gX = W - 24, mx = dX + 20, x0 = dX - 12;

      // penggaris waktu (atas)
      const sh = Math.floor(t * 4);
      for (let x = 0; x < W; x++) if ((x + sh) % 8 === 0) R(x, 0, 1, (x + sh) % 32 === 0 ? 3 : 2);

      // gelombang siklus bersarang (dithered)
      for (let x = 0; x < W; x++) {
        const w1 = 20 + 7 * Math.sin(x * 0.045 + t * 0.5) + 3 * Math.sin(x * 0.12 - t * 0.8);
        const y1 = Math.round(w1);
        for (let y = y1; y < H - 4; y++) if (0.9 - (y - w1) / 32 > bay(x, y)) R(x, y, 1, 1);
        R(x, y1, 1, 1);
        if (x % 2 === 0) R(x, Math.round(31 + 5 * Math.sin(x * 0.03 + t * 0.3 + 2)), 1, 1);
      }

      // conveyor bergerak ke kanan
      const cs = Math.floor(t * 16);
      for (let x = 0; x < W; x++) if ((((x - cs) % 6) + 6) % 6 < 4) R(x, FY, 1, 1);

      // posisi tiket
      const sp = 36, n = Math.ceil((W + 8) / sp) + 1, per = n * sp, tix = [];
      let flash = false;
      for (let i = 0; i < n; i++) {
        const x = Math.floor((t * 16 + i * sp) % per) - 8;
        tix.push({ i, x, done: x + 3 >= mx });
        if (x >= mx - 2 && x <= mx + 1) flash = true;
      }

      // meja + keyboard
      R(dX, 44, 42, 3); R(dX + 2, 47, 2, 9); R(dX + 38, 47, 2, 9); R(dX + 3, 43, 12, 1);

      // kursi
      R(x0 - 2, 36, 2, 15); R(x0 - 2, 50, 12, 1); R(x0 + 3, 51, 1, 4); R(x0, 55, 7, 1);

      // orang (headset, ngetik, sesekali mengangguk)
      const nod = Math.floor(t * 2) % 5 === 0 ? 1 : 0;
      R(x0 + 2, 26 + nod, 8, 8); R(x0 + 3, 28 + nod, 6, 5, 0);      // kepala + rambut
      R(x0 + 7, 29 + nod, 1, 1); R(x0 + 1, 29 + nod, 2, 3);         // mata, earcup
      R(x0 + 2, 25 + nod, 6, 1); R(x0 + 8, 32 + nod, 3, 1);         // headband, mic
      R(x0 + 5, 34, 3, 1); R(x0 + 1, 35, 9, 12);                    // leher, badan
      R(x0 + 1, 47, 13, 3); R(x0 + 11, 50, 3, 6);                   // paha, betis
      R(x0 + 8, 39, 9, 2); R(dX + 3, 41 + (Math.floor(t * 6) % 2), 4, 2); // lengan, tangan

      // monitor (berkedip invert saat tiket resolved)
      R(mx, 27, 18, 13); R(mx + 1, 28, 16, 11, flash ? 1 : 0);
      const f = flash ? 0 : 1;
      for (let i = 0; i < 4; i++) R(mx + 3, 30 + i * 2, 3 + ((i * 5 + Math.floor(t * 3)) % 10), 1, f);
      if (Math.floor(t * 2) % 2) R(mx + 3, 38, 2, 1, f);
      R(mx + 8, 40, 2, 3); R(mx + 5, 43, 8, 1);

      // tiket: open (kotak kosong) -> resolved (centang) setelah lewat monitor
      const P = (px, py, v) => { if (px >= 0 && px < W && px < gX + 3) R(px, py, 1, 1, v); };
      for (const k of tix) {
        const ty = FY - 5 - (Math.floor(t * 6 + k.i * 1.7) % 4 === 0 ? 1 : 0);
        for (let r = 0; r < 5; r++) for (let c = 0; c < 7; c++) {
          const edge = r === 0 || r === 4 || c === 0 || c === 6;
          let v = k.done ? 1 : (edge || (r === 2 && c === 3) ? 1 : 0);
          if (k.done && ((r === 2 && (c === 2 || c === 4)) || (r === 3 && c === 3) || (r === 1 && c === 5))) v = 0;
          P(k.x + c, ty + r, v);
        }
      }

      // gerbang GO LIVE
      const on = Math.floor(t * 2) % 2 === 0;
      R(gX, 20, 19, 9); R(gX + 1, 21, 17, 7, on ? 1 : 0);
      [...'LIVE'].forEach((ch, k) => {
        for (let i = 0; i < 15; i++) if (FONT[ch][i] === '1') R(gX + 2 + k * 4 + (i % 3), 22 + ((i / 3) | 0), 1, 1, on ? 0 : 1);
      });
      R(gX + 1, 29, 3, 27); R(gX + 15, 29, 3, 27);
      for (let y = 30; y < FY; y++) for (let x = gX + 4; x < gX + 15; x++) if ((x + y) & 1) R(x, y, 1, 1);
    }
  };


  // JOURNAL: penulis mengetik esai di mesin tik -> halaman terbang ke tumpukan arsip,
  // candlestick pasar bergulir di latar, gelembung pikiran: filsafat / uang / siklus
  const JG = { '?': '111001010000010', '$': '011110010011110' };
  scenes.journal = {
    h: 60,
    label: 'Ilustrasi pixel: penulis di meja mengetik esai di mesin tik, halaman yang selesai terbang ke tumpukan arsip, dengan candlestick pasar bergulir di latar.',
    draw({ R, t, W, H }) {
      const FY = 56, dX = Math.max(34, Math.round(W * 0.3)), x0 = dX - 12, mx = dX + 8, sX = W - 30;
      const T = 5, tt = t + 14, cyc = Math.floor(tt / T), ph = (tt % T) / T, nL = cyc % 8;
      const typing = ph < 0.6;
      const off = k => [0, 1, 0, -1][k % 4];

      // penggaris waktu (atas)
      const sh = Math.floor(t * 4);
      for (let x = 0; x < W; x++) if ((x + sh) % 8 === 0) R(x, 0, 1, (x + sh) % 32 === 0 ? 3 : 2);

      // candlestick bergulir (latar)
      const CW = 7, sc = t * 5, pr = i => 15 + 5 * Math.sin(i * 0.31) + 3 * Math.sin(i * 0.83 + 1.3);
      for (let i = Math.floor(sc / CW) - 1; i * CW - sc < W + CW; i++) {
        const cx = Math.round(i * CW - sc), o = pr(i), c = pr(i + 1);
        const top = Math.round(Math.min(o, c)), bot = Math.max(top + 2, Math.round(Math.max(o, c)));
        const hs = (Math.imul(i, 2654435761) >>> 0) % 3;
        const up = top - 1 - hs, dn = Math.min(24, bot + 1 + ((hs + 1) % 3));
        R(cx + 1, up, 1, top - up);
        if (dn > bot) R(cx + 1, bot + 1, 1, dn - bot);
        const bull = c < o;
        for (let yy = top; yy <= bot; yy++) for (let xx = 0; xx < 3; xx++) {
          const edge = yy === top || yy === bot || xx !== 1;
          if (edge || (!bull && ((cx + xx + yy) & 1))) R(cx + xx, yy, 1, 1);
        }
      }

      // lantai
      for (let x = 0; x < W; x += 2) R(x, FY, 1, 1);

      // gelembung pikiran: ? -> $ -> gelombang
      const bx = x0 + 11, by = 8, g = Math.floor(t / 1.5) % 3;
      R(x0 + 8, 19, 6, 6, 0);
      R(x0 + 9, 22, 2, 2); R(x0 + 10, 20, 1, 1);
      R(bx - 1, by - 1, 17, 13, 0);
      R(bx + 1, by, 13, 1); R(bx + 1, by + 10, 13, 1); R(bx, by + 1, 1, 9); R(bx + 14, by + 1, 1, 9);
      if (g < 2) {
        const s = JG['?$'[g]];
        for (let i = 0; i < 15; i++) if (s[i] === '1') R(bx + 6 + (i % 3), by + 3 + ((i / 3) | 0), 1, 1);
      } else {
        for (let k = 0; k < 7; k++) R(bx + 4 + k, by + 5 + Math.round(Math.sin(k * 0.9 + t * 4) * 1.5), 1, 1);
      }

      // meja + cangkir kopi (uap naik)
      R(dX, 44, 32, 3); R(dX + 2, 47, 2, 9); R(dX + 28, 47, 2, 9);
      R(dX + 26, 41, 3, 3); R(dX + 29, 42, 1, 1); R(dX + 27, 38 - (Math.floor(t * 3) % 3), 1, 1);

      // kursi
      R(x0 - 2, 36, 2, 15); R(x0 - 2, 50, 12, 1); R(x0 + 3, 51, 1, 4); R(x0, 55, 7, 1);

      // orang (headset, ngetik, sesekali mengangguk)
      const nod = Math.floor(t * 2) % 5 === 0 ? 1 : 0;
      R(x0 + 2, 26 + nod, 8, 8); R(x0 + 3, 28 + nod, 6, 5, 0);
      R(x0 + 7, 29 + nod, 1, 1); R(x0 + 1, 29 + nod, 2, 3);
      R(x0 + 2, 25 + nod, 6, 1); R(x0 + 8, 32 + nod, 3, 1);
      R(x0 + 5, 34, 3, 1); R(x0 + 1, 35, 9, 12);
      R(x0 + 1, 47, 13, 3); R(x0 + 11, 50, 3, 6);
      R(x0 + 8, 39, 9, 2); R(dX + 4, 40 + (Math.floor(t * 8) % 2), 4, 2);

      // kertas yang keluar dari mesin tik (bertambah baris saat mengetik)
      const hgt = typing ? 4 + Math.floor((ph / 0.6) * 12.99) : 4;
      const px = mx + 3, pt = 36 - hgt;
      R(px - 1, pt - 1, 10, hgt + 1, 0);
      R(px, pt, 8, 1); R(px, pt, 1, hgt); R(px + 7, pt, 1, hgt);
      for (let j = 0, n = Math.floor((hgt - 2) / 2); j < n; j++) {
        R(px + 1, pt + 2 + 2 * j, 2 + ((Math.imul(j + cyc * 5, 2654435761) >>> 0) % 4), 1);
      }

      // mesin tik: roller, badan, tuts (tuts turun saat ditekan)
      R(mx - 1, 36, 16, 2); R(mx, 38, 14, 6); R(mx + 1, 40, 12, 3, 0);
      const pressed = typing ? Math.floor(t * 9) % 6 : -1;
      for (let i = 0; i < 6; i++) R(mx + 2 + i * 2, 41 + (i === pressed ? 1 : 0), 1, 1);

      // tumpukan arsip (kedip lalu reset setelah penuh)
      const n = ph >= 0.85 ? nL + 1 : nL;
      const showN = (cyc > 0 && nL === 0 && ph < 0.15) ? (Math.floor(ph * 40) % 2 ? 0 : 8) : n;
      for (let k = 0; k < showN; k++) {
        const y = FY - 2 * (k + 1), x = sX + off(k);
        R(x, y, 14, 1); R(x, y + 1, 1, 1); R(x + 13, y + 1, 1, 1);
      }

      // halaman terbang melengkung dari mesin tik ke tumpukan
      if (ph >= 0.6 && ph < 0.85) {
        const u = (ph - 0.6) / 0.25, e = u * u * (3 - 2 * u);
        const w = Math.round(8 + 6 * e), h = Math.round(16 - 14 * e);
        const yEnd = FY - 2 * (nL + 1);
        const x = Math.round(px + (sX + off(nL) - px) * e);
        const y = Math.round(20 + (yEnd - 20) * e - 12 * Math.sin(Math.PI * e));
        R(x - 1, y - 1, w + 2, h + 2, 0);
        R(x, y, w, 1); R(x, y + h - 1, w, 1); R(x, y, 1, h); R(x + w - 1, y, 1, h);
        if (h >= 7) for (let yy = y + 2; yy < y + h - 2; yy += 2) R(x + 1, yy, w - 3, 1);
      }
    }
  };


    // PODCAST: host bicara ke mic -> suara menyusuri garis nol, dari batang audio jadi gelombang siklus -> headphone pendengar
  const PG = { R: '110101110101101', E: '111100110100111', C: '111100100100111' };
  scenes.podcast = {
    h: 60,
    label: 'Ilustrasi pixel: host berheadset berbicara ke mikrofon, suaranya bergerak di sepanjang garis nol dan berubah dari batang audio menjadi gelombang siklus pasar sebelum masuk ke headphone pendengar.',
    draw({ R, t, W, H }) {
      const FY = 56, AY = 33, dX = Math.max(34, Math.round(W * 0.26)), x0 = dX - 12, sx = dX + 10, hX = W - 26, V = 45;
      const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
      // envelope suara: ritme bicara dengan jeda
      const sp = tau => {
        const a = Math.abs(Math.sin(tau * 2.3) * Math.sin(tau * 0.9 + 1));
        return Math.min(1, (0.25 + a * 1.1) * (Math.sin(tau * 0.55) > -0.7 ? 1 : 0.12));
      };
      const talk = sp(t) > 0.3;

      // penggaris waktu (atas)
      const sh = Math.floor(t * 4);
      for (let x = 0; x < W; x++) if ((x + sh) % 8 === 0) R(x, 0, 1, (x + sh) % 32 === 0 ? 3 : 2);

      // garis siklus putus-putus (latar atas)
      for (let x = dX + 24; x < W; x++) {
        if (x % 2 === 0) R(x, 17 + Math.round(4 * Math.sin(x * 0.05 + t * 0.3)), 1, 1);
        if (x % 3 === 0) R(x, 11 + Math.round(3 * Math.sin(x * 0.03 + t * 0.2 + 2)), 1, 1);
      }

      // spektrum equalizer di lantai (bereaksi pada suara yang lewat)
      for (let b = 0, x = dX + 34; x < W - 3; b++, x += 3) {
        const e = sp(t - (x - sx) / V);
        const h = 1 + Math.round(e * (6 + 3 * Math.sin(b * 0.9 + t * 7)));
        for (let yy = FY - h; yy < FY; yy++) {
          if (yy === FY - h) R(x, yy, 2, 1);
          else for (let xx = 0; xx < 2; xx++) if ((x + xx + yy) & 1) R(x + xx, yy, 1, 1);
        }
      }

      // lantai
      for (let x = 0; x < W; x += 2) R(x, FY, 1, 1);

      // meja
      R(dX, 44, 26, 3); R(dX + 2, 47, 2, 9); R(dX + 22, 47, 2, 9);

      // kursi
      R(x0 - 2, 36, 2, 15); R(x0 - 2, 50, 12, 1); R(x0 + 3, 51, 1, 4); R(x0, 55, 7, 1);

      // host (headset, mengangguk, mulut bergerak saat bicara, tangan bergestur)
      const nod = Math.floor(t * 2) % 5 === 0 ? 1 : 0;
      R(x0 + 2, 26 + nod, 8, 8); R(x0 + 3, 28 + nod, 6, 5, 0);
      R(x0 + 7, 29 + nod, 1, 1); R(x0 + 1, 29 + nod, 2, 3);
      R(x0 + 2, 25 + nod, 6, 1); R(x0 + 8, 32 + nod, 3, 1);
      if (talk && Math.floor(t * 10) % 2) R(x0 + 10, 31 + nod, 1, 1);
      R(x0 + 5, 34, 3, 1); R(x0 + 1, 35, 9, 12);
      R(x0 + 1, 47, 13, 3); R(x0 + 11, 50, 3, 6);
      R(x0 + 8, 39, 9, 2);
      R(dX + 5, Math.floor(t * 1.2) % 3 === 0 ? 39 : 41, 3, 2);

      // mikrofon + pop filter
      R(dX + 2, 29, 4, 7); R(dX + 3, 31, 2, 1, 0); R(dX + 3, 33, 2, 1, 0);
      R(dX + 3, 36, 1, 7); R(dX + 1, 43, 5, 1);
      for (let y = 27; y < 38; y += 2) R(dX + 7, y, 1, 1);

      // gelombang suara: batang audio di dekat mic -> gelombang siklus halus di dekat headphone
      for (let x = sx; x < hX - 2; x++) {
        const m = clamp((x - sx - 20) / (hX - sx - 30), 0, 1);
        const e = sp(t - (x - sx) / V);
        const hb = Math.round((1 - m) * e * 8 * Math.abs(Math.sin(x * 0.45 - t * 9)));
        if (hb > 0 && x % 2 === 0) R(x, AY - hb, 1, 2 * hb + 1);
        if (m > 0.02) R(x, AY + Math.round(m * 7 * Math.sin(x * 0.11 - t * 1.5)), 1, 1);
        else if (x % 4 === 0) R(x, AY, 1, 1);
      }

      // headphone pendengar (cup terisi saat suara tiba)
      const hy = AY - 7, pulse = sp(t - (hX - sx) / V) > 0.5;
      R(hX + 3, hy, 11, 1); R(hX + 2, hy + 1, 1, 1); R(hX + 14, hy + 1, 1, 1);
      R(hX + 1, hy + 2, 1, 1); R(hX + 15, hy + 2, 1, 1); R(hX, hy + 3, 1, 2); R(hX + 16, hy + 3, 1, 2);
      R(hX - 1, hy + 5, 4, 7); R(hX + 14, hy + 5, 4, 7);
      if (!pulse) { R(hX, hy + 6, 2, 5, 0); R(hX + 15, hy + 6, 2, 5, 0); }

      // papan REC (titik berkedip)
      const sgx = dX - 8;
      R(sgx + 9, 4, 1, 3);
      R(sgx, 7, 19, 9); R(sgx + 1, 8, 17, 7, 0);
      [...'REC'].forEach((ch, k) => {
        for (let i = 0; i < 15; i++) if (PG[ch][i] === '1') R(sgx + 2 + k * 4 + (i % 3), 9 + ((i / 3) | 0), 1, 1);
      });
      if (Math.floor(t * 1.5) % 2 === 0) R(sgx + 14, 10, 2, 2);
    }
  };

  // LAB: peneliti di meja eksperimen -> labu mengeluarkan gelembung data yang mengalir
  // ke jam siklus (sapuan dithered), kurva power law + kanal regresi di latar, tumpukan paper di lantai
  scenes.lab = {
    h: 60,
    label: 'Ilustrasi pixel: peneliti berkacamata lab di meja eksperimen, labu mengeluarkan gelembung data yang mengalir ke jam siklus, dengan kurva power law di latar dan tumpukan paper di lantai.',
    draw({ R, t, W, H }) {
      const FY = 56, dX = Math.max(34, Math.round(W * 0.28)), x0 = dX - 12, fc = dX + 18;
      const cx2 = W - 27, cy2 = 18, sX = W - 30;
      const off = k => [0, 1, 0, -1][k % 4];
      const TAU = Math.PI * 2;

      // penggaris waktu (atas)
      const sh = Math.floor(t * 4);
      for (let x = 0; x < W; x++) if ((x + sh) % 8 === 0) R(x, 0, 1, (x + sh) % 32 === 0 ? 3 : 2);

      // kurva power law + kanal + harga berosilasi di sekitarnya
      for (let x = 0; x < W; x++) {
        const c = 34 - 24 * Math.pow(x / W, 0.6), yc = Math.round(c);
        for (let y = yc; y < H - 4; y++) if (0.85 - (y - c) / 26 > bay(x, y)) R(x, y, 1, 1);
        R(x, yc, 1, 1);
        if (x % 3 === 0) R(x, yc - 8, 1, 1);
        if (x % 2 === 0) R(x, Math.round(c + 3 * Math.sin(x * 0.35 + t * 1.2) + 1.5 * Math.sin(x * 0.9 - t)), 1, 1);
      }
      // penanda harga berjalan di sepanjang kurva
      const mx = Math.floor((t * 9) % W), my = Math.round(34 - 24 * Math.pow(mx / W, 0.6));
      R(mx - 2, my - 2, 5, 5, 0); R(mx - 1, my - 1, 3, 3);

      // lantai
      for (let x = 0; x < W; x += 2) R(x, FY, 1, 1);

      // tumpukan paper (whitepaper) di lantai kanan
      R(sX - 1, FY - 10, 16, 10, 0);
      for (let k = 0; k < 4; k++) {
        const y = FY - 2 * (k + 1) + 1, x = sX + off(k);
        R(x, y, 14, 1); R(x, y + 1, 1, 1); R(x + 13, y + 1, 1, 1);
      }

      // jam siklus: sapuan dithered, jarum berputar, reset tiap putaran penuh
      for (let yy = -10; yy <= 10; yy++) for (let xx = -10; xx <= 10; xx++) if (xx * xx + yy * yy <= 110) R(cx2 + xx, cy2 + yy, 1, 1, 0);
      for (let k = 0; k < 48; k++) { const a = k / 48 * TAU; R(cx2 + Math.round(Math.cos(a) * 9), cy2 + Math.round(Math.sin(a) * 9), 1, 1); }
      for (let k = 0; k < 12; k++) { const a = k / 12 * TAU, r = k % 3 === 0 ? 6 : 7; R(cx2 + Math.round(Math.cos(a) * r), cy2 + Math.round(Math.sin(a) * r), 1, 1); }
      const cur = (t * 0.9) % TAU;
      for (let yy = -5; yy <= 5; yy++) for (let xx = -5; xx <= 5; xx++) {
        if (xx * xx + yy * yy > 30) continue;
        let a = Math.atan2(yy, xx) + Math.PI / 2; if (a < 0) a += TAU;
        if (a < cur && (a / cur) * 0.9 > bay(cx2 + xx, cy2 + yy)) R(cx2 + xx, cy2 + yy, 1, 1);
      }
      const ha = cur - Math.PI / 2;
      for (let r = 0; r <= 7; r++) R(cx2 + Math.round(Math.cos(ha) * r), cy2 + Math.round(Math.sin(ha) * r), 1, 1);
      R(cx2, cy2, 1, 1);

      // aliran gelembung data: dari leher labu naik, lalu ke kanan menuju jam
      const L = 12 + (cx2 - 11 - fc), n = Math.max(2, Math.floor(L / 8));
      for (let i = 0; i < n; i++) {
        const s = (t * 12 + i * 8) % L;
        const px = s < 12 ? fc : fc + Math.round(s - 12), py = s < 12 ? 30 - Math.round(s) : cy2;
        R(px - 1, py - 1, 4, 4, 0); R(px, py, 2, 2);
      }

      // meja
      R(dX, 44, 46, 3); R(dX + 2, 47, 2, 9); R(dX + 41, 47, 2, 9);

      // labu Erlenmeyer + cairan dithered + gelembung naik
      R(fc - 3, 32, 7, 1); R(fc - 2, 33, 1, 5); R(fc + 2, 33, 1, 5);
      for (let r = 0; r < 6; r++) { const hw = 3 + r; R(fc - hw, 38 + r, 1, 1); R(fc + hw, 38 + r, 1, 1); }
      R(fc - 8, 43, 17, 1);
      for (let y = 40; y < 43; y++) for (let x = fc - (3 + y - 38) + 1; x < fc + (3 + y - 38); x++) if ((x + y) & 1) R(x, y, 1, 1);
      for (let k = 0; k < 3; k++) {
        const by = 41 - Math.floor((t * 6 + k * 4) % 11);
        const bx = fc + (by < 38 ? [-1, 0, 1][k] : [-3, 1, 3][k]);
        R(bx, by, 1, 1, by >= 40 ? 0 : 1);
      }

      // monitor kecil: gelombang harga berjalan
      R(dX + 28, 30, 14, 11); R(dX + 29, 31, 12, 9, 0);
      for (let i = 0; i < 12; i++) R(dX + 29 + i, 35 + Math.round(2.5 * Math.sin(i * 0.8 - t * 4)), 1, 1);
      R(dX + 34, 41, 2, 3); R(dX + 31, 43, 8, 1);

      // peneliti berdiri (kacamata lab, jas, mengaduk sambil mengangguk)
      const nod = Math.floor(t * 2) % 5 === 0 ? 1 : 0;
      R(x0 + 2, 26 + nod, 8, 8); R(x0 + 3, 28 + nod, 6, 5, 0);
      R(x0 + 6, 28 + nod, 5, 3); R(x0 + 7, 29 + nod, 3, 1, 0);       // goggles
      R(x0 + 5, 34, 3, 1); R(x0 + 1, 35, 9, 12); R(x0 + 6, 38, 1, 9, 0); // leher, jas, belahan jas
      R(x0 + 2, 47, 3, 9); R(x0 + 6, 47, 3, 9); R(x0 + 2, 55, 4, 1); R(x0 + 6, 55, 6, 1);
      R(x0 + 8, 39, 9, 2); R(dX + 5, 40 + (Math.floor(t * 4) % 2), 2, 2);
    }
  };

  // BOOKS / LIBRARY: pembaca di meja dengan lampu baca membuka buku -> halaman dibalik;
  // tiap siklus buku terbang kembali ke rak (12 buku: 7 filsafat + 5 pasar), buku berikutnya turun ke meja.
  // Latar: gelombang siklus ala Benner, rak punya jam pasir di sisi kanan.
  scenes.books = {
    h: 60,
    label: 'Ilustrasi pixel: pembaca berkacamata di meja dengan lampu baca membolak-balik buku terbuka, sementara buku terbang bergantian antara meja dan rak berisi dua belas buku, dengan gelombang siklus di latar.',
    draw({ R, t, W, H }) {
      const FY = 56, dX = Math.max(34, Math.round(W * 0.26)), x0 = dX - 12, sX = W - 44, bx = dX + 7;
      const T = 8, cyc = Math.floor(t / T), ph = (t % T) / T, s = cyc % 12, s2 = (cyc + 1) % 12;
      const ease = u => u * u * (3 - 2 * u);
      const slot = i => ({ x: sX + 2 + (i < 7 ? i : i - 7) * 5, b: i < 7 ? 24 : 38, h: 7 + ((i * 5) % 4) });
      const empty = ph >= 0.9 ? s2 : s;

      // penggaris waktu (atas)
      const sh = Math.floor(t * 4);
      for (let x = 0; x < W; x++) if ((x + sh) % 8 === 0) R(x, 0, 1, (x + sh) % 32 === 0 ? 3 : 2);

      // gelombang siklus (latar), tiga periode bertumpuk
      for (let x = 0; x < W; x++) {
        const w = 22 + 4 * Math.sin(x * 0.07 + t * 0.4) + 3 * Math.sin(x * 0.031 - t * 0.25 + 1) + 3 * Math.sin(x * 0.015 + t * 0.15 + 2);
        const yw = Math.round(w);
        for (let y = yw; y < H - 4; y++) if (0.6 - (y - w) / 24 > bay(x, y)) R(x, y, 1, 1);
        R(x, yw, 1, 1);
      }

      // lantai
      for (let x = 0; x < W; x += 2) R(x, FY, 1, 1);

      // rak buku: rangka, 12 buku (satu slot kosong), tumpukan buku rebah, jam pasir
      R(sX - 1, 11, 42, 45, 0);
      R(sX, 12, 40, 1); R(sX, 12, 1, 44); R(sX + 39, 12, 1, 44);
      R(sX, 25, 40, 1); R(sX, 39, 40, 1); R(sX, 53, 40, 1);
      for (let i = 0; i < 12; i++) {
        if (i === empty) continue;
        const o = slot(i), y = o.b - o.h + 1, st = i % 4;
        if (st === 1) R(o.x, y, 4, o.h);
        else {
          R(o.x, y, 4, 1); R(o.x, o.b, 4, 1); R(o.x, y, 1, o.h); R(o.x + 3, y, 1, o.h);
          if (st === 2) { for (let yy = y + 1; yy < o.b; yy++) for (let xx = o.x + 1; xx < o.x + 3; xx++) if ((xx + yy) & 1) R(xx, yy, 1, 1); }
          if (st === 3) { R(o.x, y + 2, 4, 1); R(o.x, o.b - 2, 4, 1); }
        }
      }
      R(sX + 3, 52, 16, 1); R(sX + 3, 50, 15, 1); R(sX + 4, 48, 14, 1);
      R(sX + 3, 51, 1, 1); R(sX + 18, 51, 1, 1); R(sX + 17, 49, 1, 1);
      // jam pasir (siklus waktu)
      const hx = sX + 28;
      R(hx, 30, 7, 1); R(hx, 37, 7, 1);
      R(hx + 1, 31, 1, 1); R(hx + 5, 31, 1, 1); R(hx + 2, 32, 1, 1); R(hx + 4, 32, 1, 1); R(hx + 3, 33, 1, 2);
      R(hx + 2, 35, 1, 1); R(hx + 4, 35, 1, 1); R(hx + 1, 36, 1, 1); R(hx + 5, 36, 1, 1);
      if (ph < 0.66) R(hx + 2, 31, 3, 1);
      if (ph < 0.33) R(hx + 3, 32, 1, 1);
      if (ph > 0.33) R(hx + 2, 36, 3, 1);
      if (ph > 0.66) R(hx + 3, 35, 1, 1);
      R(hx + 3, 33 + (Math.floor(t * 6) % 3), 1, 1);

      // meja + lampu baca (kerucut cahaya putus-putus)
      R(dX, 44, 30, 3); R(dX + 2, 47, 2, 9); R(dX + 26, 47, 2, 9);
      R(dX + 25, 43, 5, 1); R(dX + 27, 32, 1, 11); R(dX + 22, 30, 7, 2);
      for (let y = 32; y <= 38; y++) for (let x = dX + 22 - (y - 31) * 2; x <= dX + 24; x++) if (bay(x, y) < 0.3) R(x, y, 1, 1);

      // kursi
      R(x0 - 2, 36, 2, 15); R(x0 - 2, 50, 12, 1); R(x0 + 3, 51, 1, 4); R(x0, 55, 7, 1);

      // pembaca (menunduk, kacamata, tangan membalik halaman)
      const fu = (t % 2.4) / 2.4, flipping = fu < 0.3 && ph < 0.75;
      R(x0 + 2, 27, 8, 8); R(x0 + 3, 29, 6, 5, 0);
      R(x0 + 6, 30, 4, 3); R(x0 + 7, 31, 2, 1, 0);                   // kacamata
      R(x0 + 5, 34, 3, 1); R(x0 + 1, 35, 9, 12);                     // leher, badan
      R(x0 + 1, 47, 13, 3); R(x0 + 11, 50, 3, 6);                    // paha, betis
      R(x0 + 8, 39, 9, 2); R(dX + 4, flipping ? 38 : 41, 3, 2);      // lengan, tangan

      // buku terbuka di meja
      if (ph < 0.75) {
        R(bx, 39, 17, 1); R(bx, 43, 17, 1); R(bx, 39, 1, 5); R(bx + 16, 39, 1, 5); R(bx + 8, 39, 1, 5);
        R(bx + 2, 40, 5, 1); R(bx + 2, 42, 4, 1); R(bx + 10, 40, 5, 1); R(bx + 10, 42, 5, 1);
        if (flipping) {
          const a = Math.PI * fu / 0.3, lift = Math.round(2 * Math.sin(a));
          R(bx + 8 + Math.round(Math.cos(a) * 7), 39 - lift, 1, 5 + lift);
        }
      }

      // buku terbang: meja -> rak (ph 0.75-0.9), rak -> meja (ph 0.9-1)
      if (ph >= 0.75) {
        const back = ph < 0.9, u = back ? (ph - 0.75) / 0.15 : (ph - 0.9) / 0.1;
        const e = back ? 1 - ease(u) : ease(u), o = slot(back ? s : s2), sy = o.b - o.h + 1;
        const w = Math.round(4 + 13 * e), h = Math.round(o.h + (5 - o.h) * e);
        const x = Math.round(o.x + (bx - o.x) * e), y = Math.round(sy + (39 - sy) * e - 12 * Math.sin(Math.PI * e));
        R(x - 1, y - 1, w + 2, h + 2, 0);
        R(x, y, w, 1); R(x, y + h - 1, w, 1); R(x, y, 1, h); R(x + w - 1, y, 1, h);
        if (w >= 9) R(x + (w >> 1), y, 1, h);
      }
    }
  };

  /* ───────── ENGINE ───────── */
  const css = `
.px-hero{margin:2.5rem 0 0}
.px-hero-frame{border:1px solid color-mix(in srgb,currentColor 28%,transparent);line-height:0;overflow:hidden}
.px-hero canvas{display:block;image-rendering:pixelated}
/* hilangkan garis pemisah di bawah hero */
.hero-block:has(.px-hero){border-bottom:0}
.hero-block:has(.px-hero)+.telemetry-row{border-top:0}`;
  const st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);

  function mount(host, name) {
    const scene = scenes[name]; if (!host || !scene) return;
    host.classList.add('px-hero');
    host.innerHTML = `<div class="px-hero-frame"><canvas role="img" aria-label="${scene.label}"></canvas></div>`;
    const frame = host.firstChild, cv = frame.firstChild, ctx = cv.getContext('2d');
    const H = scene.h, FPS = 12, reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    let W = 0, S = 4, curT = reduce ? 3.2 : 0, last = 0, running = false, vis = true, t0 = performance.now();

    function size() {
      const cw = frame.clientWidth || 600;
      S = cw >= 720 ? 4 : 3;
      W = Math.floor(cw / S);
      cv.width = W; cv.height = H;
      cv.style.width = W * S + 'px'; cv.style.height = H * S + 'px';
    }
    function draw(t) {
      curT = t;
      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = getComputedStyle(cv).color;
      const R = (x, y, w, h, v = 1) => { x |= 0; y |= 0; v ? ctx.fillRect(x, y, w, h) : ctx.clearRect(x, y, w, h); };
      scene.draw({ R, t, W, H });
    }
    function tick(now) {
      if (!running) return;
      requestAnimationFrame(tick);
      if (now - last < 1000 / FPS) return;
      last = now; draw((now - t0) / 1000);
    }
    const start = () => { if (!running && !reduce && vis && !document.hidden) { running = true; requestAnimationFrame(tick); } };
    const stop = () => { running = false; };

    size(); draw(curT); start();
    new ResizeObserver(() => { size(); draw(curT); }).observe(frame);
    new IntersectionObserver(e => { vis = e[0].isIntersecting; vis ? start() : stop(); }).observe(host);
    document.addEventListener('visibilitychange', () => (document.hidden ? stop() : start()));
    // ganti tema -> gambar ulang dengan warna baru
    new MutationObserver(() => draw(curT)).observe(document.body, { attributes: true, attributeFilter: ['data-theme', 'class'] });
  }

  window.PixelHero = { mount, scenes };
  const auto = () => document.querySelectorAll('[data-pixel-hero]').forEach(el => mount(el, el.dataset.pixelHero));
  document.readyState === 'loading' ? document.addEventListener('DOMContentLoaded', auto) : auto();
})();
