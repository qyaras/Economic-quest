/* ============================================================
   DATA: Materi, Bank Soal, Skin
   Semua konten ada di sini supaya mudah diedit/dikembangkan.
   ============================================================ */

const SUBS = {
  A: { id: 'A', short: 'Konsep Kerja Sama Ekonomi Internasional', title: 'Konsep Kerja Sama Ekonomi Internasional', icon: '🧺', color: '#ef476f' },
  B: { id: 'B', short: 'Bentuk Kerja Sama Ekonomi Internasional', title: 'Bentuk Kerja Sama Ekonomi Internasional', icon: '⛏️', color: '#ff8c1a' },
  C: { id: 'C', short: 'Bidang Kerja Sama Ekonomi Antarnegara', title: 'Bidang Kerja Sama Ekonomi Antarnegara', icon: '📦', color: '#1b9aaa' },
  D: { id: 'D', short: 'Lembaga Kerja Sama Ekonomi Antarnegara', title: 'Lembaga Kerja Sama Ekonomi Antarnegara', icon: '⚖️', color: '#7b5cff' },
};

const SKINS = [
  { id: 'basic', name: 'Student Uniform', price: 0, desc: 'Seragam pelajar standar. Gratis untuk semua petualang.' },
  { id: 'exec',  name: 'Executive Wear', price: 50, desc: 'Jas rapi + koper bisnis. Tampil seperti calon CEO.' },
  { id: 'hero',  name: 'Golden Economy Armor', price: 150, desc: 'Zirah emas legendaris dengan jubah, aura, dan percikan cahaya.' },
];

const MATERI = [
  /* ------------------------------ P: Pengantar & Peta Konsep ------------------------------ */
  {
    id: 'P',
    meta: { short: 'Pengantar & Peta Konsep', title: 'Pengantar & Peta Konsep Bab 2', icon: '🧭', color: '#10324a' },
    intro: 'Bab 2: Kerja Sama Ekonomi Internasional. Mulai dari sini agar kamu punya gambaran besarnya.',
    sections: [
      {
        h: 'Kata Pengantar dari Guru',
        html: `
<div class="quote">"Halo, para calon ekonom muda! Pernahkah kalian memperhatikan mengapa banyak produk luar negeri dijual di Indonesia? Atau mengapa Indonesia menjalin hubungan ekonomi dengan negara lain?<b>Hal tersebut merupakan bagian dari kerja sama ekonomi internasional. Setiap negara memiliki kebutuhan dan potensi ekonomi yang berbeda, sehingga kerja sama menjadi salah satu cara untuk mencapai kesejahteraan bersama</b>Yuk, pelajari bagaimana negara-negara di dunia saling terhubung dan apa peran Indonesia di dalamnya. Selamat belajar!" 🎓</div>`
      },
      {
        h: 'Peta Konsep / Alur Materi Ekonomi Internasional',
        html: `
<div class="flow vertical">
  <div class="step"><b>1️⃣ Konsep Kerja Sama Ekonomi Internasional</b><span>Pengertian, Manfaat, dan Tujuan</span></div>
  <div class="arrow down">⬇</div>
  <div class="step"><b>2️⃣ Bentuk Kerja Sama Ekonomi Internasional</b><span>Bilateral, Regional, Subregional, Antarregional, dan Multilateral</span></div>
  <div class="arrow down">⬇ <small>tetapi jumlahnya…</small></div>
  <div class="step c-red"><b>3️⃣ Bidang Kerja Sama Ekonomi Antarnegara</b><span>Kerja Sama Perdagangan, Kerja Sama Produsen, Kerja Sama Keuangan, Kerja Sama Pasar Bersama, dan Kerja Sama Ketenagakerjaan</span></div>
  <div class="arrow down">⬇</div>
  <div class="step"><b>4️⃣ Lembaga Kerja Sama Ekonomi Antarnegara</b><span>Lembaga atau Badan Kerja Sama Ekonomi Regional dan Internasional</span></div>
  <div class="arrow down">⬇
  </div>
</div>`
      }
    ],
    recap: [
       'Kerja sama ekonomi internasional dilakukan oleh dua negara atau lebih untuk mencapai kepentingan dan keuntungan bersama.', 'Baca sub-bab A sampai D secara berurutan, lalu tutup dengan Rumus & Catatan Guru.',
       'Bentuk kerja sama ekonomi internasional meliputi bilateral, regional, subregional, antarregional, dan multilateral.',
       'Bidang kerja sama ekonomi antarnegara meliputi perdagangan, produsen, keuangan, pasar bersama, dan ketenagakerjaan.',
       'Lembaga kerja sama ekonomi antarnegara terdiri atas lembaga regional dan lembaga internasional.',
       'Kerja sama ekonomi internasional memberikan peluang sekaligus tantangan bagi perekonomian Indonesia.'
    ]
  },

  /* ------------------------------ A ------------------------------ */
  {
    id: 'A',
    intro: 'Kerja sama ekonomi internasional menjadi upaya negara-negara untuk meningkatkan kesejahteraan bersama melalui perdagangan, investasi, dan pertukaran sumber daya.',
    sections: [
      {
        h: 'Kerja Sama Ekonomi Internasional',
        html: `
<p><b>Kerja sama ekonomi internasional</b> merupakan upaya kolaboratif antara negara-negara untuk memfasilitasi perdagangan, investasi, dan pertukaran sumber daya secara lintas batas guna meningkatkan kesejahteraan bersama.</p>

<p>Kerja sama ekonomi internasional membuka peluang bagi negara-negara untuk saling memperkuat sektor ekonomi melalui pertukaran ilmu pengetahuan dan teknologi.</p>

<p>Pada era globalisasi saat ini, kerja sama ekonomi internasional menjadi suatu keharusan bagi negara-negara untuk mengoptimalkan potensi ekonomi dan mencapai tujuan pembangunan berkelanjutan secara bersama-sama.</p>`
      },
      {
        h: 'Konsep Kerja Sama Ekonomi Internasional',
        html: `
<p><b>Kerja sama ekonomi internasional</b> merupakan bentuk kerja sama yang melibatkan dua atau lebih negara dalam bidang ekonomi.</p>

<p>Bagi suatu negara, kerja sama ekonomi internasional diperlukan untuk mendukung kepentingan ideologi, hukum, politik, serta pertahanan dan keamanan negara bersangkutan.</p>

<p>Kerja sama ekonomi internasional bermanfaat untuk memenuhi kebutuhan di dalam negeri. Akan tetapi, masyarakat harus bersikap bijak dalam membeli produk impor.</p>

<p>Meskipun produk impor berharga murah, masyarakat sebaiknya tidak mengonsumsi produk impor untuk memenuhi kebutuhan sehari-hari. Perilaku ini dimaksudkan agar negara tidak tergantung produk impor.</p>

<p>Jika negara tergantung dengan produk impor, produksi dalam negeri akan melemah. Dampaknya, banyak perusahaan dalam negeri mengalami gulung tikar. Kondisi demikian akan menimbulkan pemutusan hubungan kerja (PHK) sehingga jumlah pengangguran bertambah.</p>

<div class="callout"><b>💡 Hal penting:</b> Kerja sama ekonomi internasional membantu memenuhi kebutuhan dalam negeri, tetapi masyarakat juga perlu mendukung produk dalam negeri agar perekonomian nasional tetap kuat.</div>`
      }
    ],
    recap: [
      'Kerja sama ekonomi internasional merupakan kerja sama dua negara atau lebih dalam bidang ekonomi.',
      'Kerja sama ekonomi internasional memfasilitasi perdagangan, investasi, dan pertukaran sumber daya lintas negara.',
      'Kerja sama internasional dapat memperkuat sektor ekonomi melalui pertukaran ilmu pengetahuan dan teknologi.',
      'Kerja sama ekonomi internasional diperlukan untuk mendukung kepentingan ideologi, hukum, politik, pertahanan, dan keamanan.',
      'Masyarakat perlu bijak dalam membeli produk impor dan tetap mendukung produk dalam negeri.',
      'Ketergantungan terhadap produk impor dapat melemahkan produksi dalam negeri, menyebabkan perusahaan gulung tikar, dan meningkatkan pengangguran.'
    ]
  },

  /* ------------------------------ B ------------------------------ */
  {
    id: 'B',
    intro: 'Kerja sama ekonomi internasional memiliki beberapa bentuk berdasarkan jumlah negara dan kawasan yang terlibat',
    sections: [
      {
        h: 'Bentuk Kerja Sama Ekonomi Internasional',
        html: `
<p><b>Secara umum, bentuk kerja sama ekonomi internasional</b> meliputi kerja sama bilateral, regional, subregional, antarregional, dan multilateral. Perbedaannya terletak pada jumlah negara serta kawasan yang terlibat.</p>`
      },
      {
        h: 'Kerja Sama Bilateral',
        html: `
<p><b>Kerja sama bilateral</b> adalah kerja sama yang hanya melibatkan dua negara dan bersifat saling menguntungkan.</p>
<p>Contoh: Indonesia menjalin kerja sama dengan Jepang.</p>
<p>Dalam hubungan bilateral terdapat tiga motif:</p>
<ul>
<li>Memelihara kepentingan nasional.</li>
<li>Memelihara perdamaian dunia.</li>
<li>Meningkatkan kesejahteraan ekonomi.</li>
</ul>`
      },
      {
        h: 'Kerja Sama Regional',
        html: `
<p><b>Kerja sama regional</b> adalah kerja sama negara-negara yang berada dalam kawasan tertentu dan biasanya berdekatan.</p>
<p>Tujuannya untuk memajukan negara-negara dalam satu kawasan sesuai kepentingan masing-masing.</p>
<p>Contoh: <b>ASEAN</b> (Association of Southeast Asian Nations), yang dibentuk oleh negara-negara Asia Tenggara.</p>
<p>Faktor yang memengaruhi kerja sama regional:</p>
<ul>
<li>Kesamaan latar belakang sejarah (historis).</li>
<li>Letak geografis.</li>
<li>Teknik pemasaran.</li>
</ul>
<p>Melalui kerja sama ini diharapkan perekonomian di kawasan Asia Tenggara semakin meningkat.</p>`
      },
      {
        h: 'Kerja Sama Subregional',
        html: `
<p><b>Kerja sama subregional</b> merupakan bentuk kerja sama beberapa negara di subkawasan yang letaknya berdekatan secara geografis.</p>
<p>Contoh kerja sama subregional:</p>
<div class="grid2">
  <div class="mini"><h4>BIMP-EAGA</h4><p>Brunei-Indonesia-Malaysia-Philippines East ASEAN Growth Area.</p></div>
  <div class="mini"><h4>IMT-GT</h4><P>Indonesia-Malaysia-Thailand Growth Triangle. Kerja sama ini penting karena populasi dan tenaga kerja di Asia Tenggara sangat besar.</p></div>
  <div class="mini"><h4>Benelux</h4><p>Kerja sama yang dibentuk Belgia, Belanda (Netherlands), dan Luksemburg di kawasan Eropa bagian barat.</p></div>
</div>`
     },
     {
      h: 'Kerja Sama Antarregional',
        html: `
<p><b>Kerja sama antarregional</b> melibatkan beberapa negara dalam satu kawasan dengan negara-negara lain di kawasan berbeda.</p>
<p>Contohnya adalah kerja sama negara-negara ASEAN (ASEAN Member States/AMS) dengan negara-negara mitra dagang (ASEAN Foreign Partners/AFP), meliputi:</p>
<div class="grid2">
  <div class="mini"><h4>Australia</h4></div>
  <div class="mini"><h4>Tiongkok</h4></div>
  <div class="mini"><h4>India</h4></div>
  <div class="mini"><h4>Jepang</h4></div>
  <div class="mini"><h4>Korea Selatan</h4></div>
  <div class="mini"><h4>Selandia Baru</h4></div>
</div>
<p>Contoh lainnya adalah kerja sama negara-negara ASEAN dengan negara-negara Uni Eropa.</p>`
  },
      {
        h: 'Kerja Sama Multilateral',
        html: `
<p><b>Kerja sama multilateral</b> semakin berkembang karena pengaruh arus globalisasi ekonomi. Globalisasi ekonomi memungkinkan terjalinnya konektivitas antarruang dan waktu di dunia.</p>
<p>Kerja sama ini melibatkan banyak negara tanpa memandang batasan wilayah tertentu.</p>
<div class="callout"><b>Contoh:</b> World Trade Organization (WTO), yaitu organisasi perdagangan dunia yang diikuti hampir seluruh negara di dunia.</div>`
      }
],
recap: [
   'Bentuk kerja sama ekonomi internasional meliputi bilateral, regional, subregional, antarregional, dan multilateral.',
   'Bilateral melibatkan dua negara. Contohnya Indonesia dan Jepang.',
   'Regional melibatkan negara-negara dalam satu lawasan. Contohnya ASEAN.',
   'Subregional melibatkan beberapa negara dalam subkawasan yang berdekatan. Contohnya BIMP-EAGA, IMT-GT, dan Banelux.',
   'Antarregional melibatkan banyak negara tanpa batasan wilayah tertentu. Contohnya WTO.'
]
},
  /* ------------------------------ C ------------------------------ */
  {
    id: 'C',
    intro: 'Kerja sama ekonomi antarnegara berlangsung dalam berbagai bidang, mulai dari perdagangan hingga ketenagakerjaan.',
    sections: [
      {
        h: 'Bidang Kerja Sama Ekonomi Antarnegara',
        html: `
<p>Kerja sama ekonomi antarnegara dapat ditemukan melalui impor yang beredar di pasar dalam negeri, lembaga keuangan asing yang beroperasi di Indonesia, serta tenaga ahli asing yang bekerja di Indonesia.</p>
<p>Bidang kerja sama ekonomi antarnegara meliputi:</p>
<div class="grid3">
  <div class="mini c-red"><h4>📈 Perdagangan</h4><p>Memajukan dan memperlancar kegiatan perdagangan antarnegara.</p></div>
  <div class="mini c-orange"><h4>🛒 Produsen</h4><p>Kerja sama negara-negara penghasil produk tertentu.</p></div>
  <div class="mini c-purple"><h4>💰 Keuangan</h4><p>Memberikan bantuan keuangan bagi negara anggota.</p></div>
  <div class="mini c-green"><h4>🤝 Pasar Bersama</h4><p>Menciptakan perdagangan bebas antarnegara.</p></div>
  <div class="mini"><h4>🧑‍⚕️ Ketenagakerjaan</h4><p>Kerja sama dalam pertukaran serta perlindungan tenaga kerja</p></div>
</div>`
      },
      {
       h: 'Kerja Sama Perdagangan',
      html: `
<p><b>Kerja sama perdagangan</b> merupakan forum kerja sama antarnegara yang berkaitan dengan kegiatan perdagangan.</p>
<p>Negara-negara yang terlibat memiliki kesepakatan untuk memajukan dan memperlancar perdagangan serta menghilangkan faktor-faktor yang menghambat perdagangan antarnegara.</p>
<p>Melalui kerja sama ini, penduduk di negara anggota dapat mengonsumsi produk impor tanpa harus pergi ke luar negeri.</p>
<div class="callout"><b>Contoh dalam kehidupan sehari-hari:</b> Penduduk Indonesia dapat membeli produk impor yang tersedia di pasar dalam negeri.</div>`
    },
    {
        h: 'Kerja Sama Produsen',
      html: `
<p><b>Kerja sama produsen</b> merupakan forum kerja sama antarnegara produsen atau penghasil produk tertentu. Kerja sama ini dibentuk untuk menentukan kebijakan terkait tingkat harga dan jumlah produk yang dihasilkan.</p>
<div class="grid2">
  <div class="mini c-orange">
    <h4>OPEC</h4>
    <p><b>Organization of the Petroleum Exporting Countries</b> merupakan forum kerja sama negara-negara produsen minyak dunia.</p>
  </div>
  <div class="mini c-green">
    <h4>ANRPC</h4>
    <p><b>Association of Natural Rubber Producing Countries</b> atau Asosiasi Negara Produsen Karet Alam. Beranggotakan sebelas negara termasuk Indonesia.</p>
  </div>
</div>`
    },
    {
        h: 'Kerja Sama Keuangan',
      html: `
<p><b>Kerja sama keuangan</b> dibentuk untuk memberikan bantuan keuangan bagi negara-negara anggota.</p>
<p>Bantuan diperlukan untuk mendukung pembangunan, perdagangan, ataupun pembayaran utang.</p>
<div class="grid3">
  <div class="mini"><h4>ADB</h4><p>Asian Development Bank.</p></div>
  <div class="mini"><h4>IsDB</h4><p>Islamic Development Bank.</p></div>
  <div class="mini"><h4>IMF</h4><p>International Monetary Fund.</p></div>
</div>`
    },
    {
       h: 'Kerja Sama Pasar Bersama',
      html: `
<p><b>Kerja sama pasar bersama</b> dimaksudkan untuk menciptakan perdagangan bebas antarnegara tanpa hambatan kebijakan perdagangan yang bersifat merugikan.</p>
<p>Melalui kerja sama ini, negara-negara anggota bebas memindahkan faktor dan hasil produksi dari satu negara ke negara lain.</p>
<div class="grid3">
  <div class="mini c-green"><h4>AFTA</h4><p>ASEAN Free Trade Area, kerja sama perdagangan bebas di kawasan Asia Tenggara.</p></div>
  <div class="mini c-orange"><h4>AEC / MEA</h4><p>ASEAN Economic Community atau Masyarakat Ekonomi ASEAN.</p></div>
  <div class="mini c-purple"><h4>NAFTA</h4><p>North American Free Trade Agreement, kerja sama pasar bersama di kawasan Amerika Utara.</p></div>
</div>`
    },
    {
       h: 'Kerja Sama Ketenagakerjaan',
      html: `
<p><b>Kerja sama ketenagakerjaan</b> merupakan kerja sama antarnegara yang berkaitan dengan pertukaran tenaga kerja.</p>
<p>Tenaga kerja asing dapat bekerja di Indonesia dalam berbagai bidang, seperti keuangan, perbankan, telekomunikasi, olahraga, industri, dan pertambangan. Sebaliknya, tenaga kerja Indonesia juga bekerja di beberapa negara.</p>
<p>Kerja sama ini hendaknya memberikan jaminan dan perlindungan terhadap tenaga kerja terkait hak dan kewajibannya.</p>
<div class="callout"><b>Contoh:</b> International Labour Organization (ILO).</div>`
    }
  ],
    recap: [
    'Bidang kerja sama ekonomi antarnegara meliputi perdagangan, produsen, keuangan, pasar bersama, dan ketenagakerjaan.',
    'Kerja sama perdagangan bertujuan memajukan dan memperlancar kegiatan perdagangan serta menghilangkan hambatan perdagangan.',
    'Kerja sama produsen bertujuan menentukan kebijakan harga dan jumlah produksi. Contohnya OPEC dan ANRPC.',
    'Kerja sama keuangan memberikan bantuan keuangan kepada negara anggota. Contohnya ADB, IsDB, dan IMF.',
    'Kerja sama pasar bersama bertujuan menciptakan perdagangan bebas. Contohnya AFTA, AEC/MEA, dan NAFTA.',
    'Kerja sama ketenagakerjaan berkaitan dengan pertukaran tenaga kerja serta perlindungan hak dan kewajibannya. Contohnya ILO.'
  ]
},
  /* ------------------------------ D ------------------------------ */
  {
     id: 'D',
     intro: 'Lembaga kerja sama ekonomi antarnegara membantu negara-negara di dunia mengatasi masalah ekonomi dan mendukung pembangunan.',
     sections: [
    {
      h: 'Lembaga Kerja Sama Ekonomi Antarnegara',
      html: `
<p>Lembaga kerja sama ekonomi internasional menjadi landasan penting dalam memahami dinamika perekonomian global. Lembaga ini berperan penting dalam mengatasi masalah ekonomi global dan membantu negara-negara berkembang.</p>
<p>Lembaga kerja sama ekonomi antarnegara dibedakan menjadi dua, yaitu:</p>
<div class="grid2">
  <div class="mini c-orange"><h4>Regional</h4><p>Lembaga kerja sama ekonomi yang melibatkan negara-negara dalam satu kawasan tertentu.</p></div>
  <div class="mini c-purple"><h4>Internasional</h4><p>Lembaga kerja sama ekonomi yang melibatkan negara-negara dari berbagai kawasan di dunia.</p></div>
</div>`
    },
    {
      h: 'Lembaga Kerja Sama Ekonomi Regional',
      html: `
<p>Globalisasi ekonomi memungkinkan negara-negara di satu kawasan (region) untuk terlibat dalam kerja sama ekonomi.</p>
<p>Indonesia terlibat aktif dalam kerja sama ekonomi regional, baik sebagai anggota maupun dalam pembentukan badan kerja sama ekonomi regional.</p>`
    },
    {
      h: '1. ASEAN',
      html: `
<p><b>Association of Southeast Asian Nations (ASEAN)</b> merupakan badan kerja sama bangsa-bangsa di kawasan Asia Tenggara.</p>
<p>ASEAN dibentuk pada <b>8 Agustus 1967</b> di Bangkok, Thailand, yang diprakarsai oleh Indonesia, Malaysia, Singapura, Filipina, dan Thailand.</p>
<h4 class="sub">Isi Deklarasi Bangkok</h4>
<ul class="dots">
  <li>Mempercepat pertumbuhan ekonomi, kemajuan sosial, dan perkembangan kebudayaan di kawasan Asia Tenggara.</li>
  <li>Meningkatkan perdamaian dan stabilitas regional.</li>
  <li>Meningkatkan kerja sama dan saling membantu dalam bidang ekonomi, sosial, teknik, ilmu pengetahuan, dan administrasi.</li>
  <li>Memelihara kerja sama yang erat di tengah-tengah organisasi regional dan internasional.</li>
  <li>Meningkatkan kerja sama untuk memajukan pendidikan, latihan, dan penelitian di kawasan Asia Tenggara.</li>
</ul>
<h4 class="sub">Tujuan ASEAN</h4>
<p>Mengadakan kerja sama antara negara-negara anggota ASEAN di bidang ekonomi, sosial, dan budaya.</p>
<p>Pada perkembangannya, Brunei Darussalam, Kamboja, Laos, Myanmar, dan Vietnam ikut bergabung dalam ASEAN.</p>
<p>ASEAN juga mengatur penurunan tarif bersama melalui <b>The Common Effective Preferential Tariff (CEPT)</b> dan membentuk kawasan perdagangan bebas ASEAN (AFTA).</p>
<p>Negara-negara ASEAN juga mengikrarkan pembentukan Masyarakat ASEAN melalui Bali Concord II pada 2003 dengan pilar komunitas politik, keamanan, ekonomi, dan sosial budaya.</p>`
    },
    {
      h: '2. ASEAN Free Trade Area (AFTA)',
      html: `
<p><b>ASEAN Free Trade Area (AFTA)</b> merupakan kerja sama perdagangan bebas di kawasan Asia Tenggara.</p>
<p>AFTA berawal dari pertemuan negara anggota pada KTT IV ASEAN di Singapura pada Januari 1992.</p>
<h4 class="sub">Tujuan AFTA</h4>
<ul class="dots">
  <li>Meningkatkan daya saing ekonomi ASEAN di pasar global.</li>
  <li>Menarik investasi asing (Foreign Direct Investment/FDI).</li>
  <li>Meningkatkan perdagangan antarnegara anggota ASEAN.</li>
  <li>Menurunkan tarif perdagangan antarnegara ASEAN.</li>
</ul>
<div class="grid2">
  <div class="mini c-green"><h4>Dampak Positif</h4><p>Pengusaha kecil dan menengah dalam negeri berpeluang melakukan ekspor sehingga dapat memperluas pasar.</p></div>
  <div class="mini c-red"><h4>Dampak Negatif</h4><p>Barang impor lebih mudah masuk ke pasar dalam negeri dan dapat menurunkan produksi barang dalam negeri.</p></div>
</div>`
    },
    {
      h: '3. Masyarakat Ekonomi ASEAN (MEA)',
      html: `
<p><b>Masyarakat Ekonomi ASEAN (MEA)</b> atau <b>ASEAN Economic Community (AEC)</b> dibentuk untuk mewujudkan integrasi ekonomi negara-negara anggota ASEAN.</p>
<p>MEA bertujuan mengentaskan kemiskinan serta meningkatkan pertumbuhan ekonomi guna mencapai kemakmuran secara merata dan berkelanjutan.</p>
<h4 class="sub">Karakteristik MEA</h4>
<ul class="dots">
  <li>Pasar tunggal dan basis produksi.</li>
  <li>Kawasan ekonomi berdaya saing tinggi.</li>
  <li>Kawasan dengan pembangunan ekonomi merata.</li>
  <li>Kawasan yang terintegrasi penuh dengan ekonomi global.</li>
</ul>
<h4 class="sub">Empat Pilar MEA</h4>
<div class="grid2">
  <div class="mini"><h4>1. Pasar Tunggal</h4><p>Menjadi kawasan kesatuan pasar dan basis produksi dengan arus barang, investasi, modal, jasa, dan tenaga profesional antarnegara.</p></div>
  <div class="mini"><h4>2. Daya Saing Tinggi</h4><p>Membentuk kawasan ekonomi yang berdaya saing tinggi, memberikan perlindungan konsumen, dan menciptakan kondisi ekonomi yang adil.</p></div>
  <div class="mini"><h4>3. Pembangunan Merata</h4><p>Menumbuhkan UMKM yang berdaya saing tinggi serta didukung kemudahan memperoleh modal.</p></div>
  <div class="mini"><h4>4. Integrasi Global</h4><p>Mengintegrasikan perekonomian ASEAN dengan perekonomian global agar memiliki jangkauan pasar lebih luas.</p></div>
</div>`
    },
    {
      h: '4. Asian Development Bank (ADB)',
      html: `
<p><b>Asian Development Bank (ADB)</b> dibentuk oleh negara-negara Asia pada <b>22 Agustus 1966</b> untuk memfasilitasi perkembangan sosial dan ekonomi di kawasan Asia.</p>
<h4 class="sub">Fungsi ADB</h4>
<ul class="dots">
  <li>Memberi pinjaman dan modal untuk kemajuan ekonomi dan sosial.</li>
  <li>Memberi bantuan teknik dan jasa konsultasi pembangunan.</li>
  <li>Mendorong investasi swasta asing dan pembangunan.</li>
  <li>Menanggapi permintaan bantuan dari negara anggota.</li>
</ul>`
    },
    {
      h: '5. Asia Pacific Economic Cooperation (APEC)',
      html: `
<p><b>Asia Pacific Economic Cooperation (APEC)</b> merupakan forum kerja sama negara-negara di kawasan Asia Pasifik.</p>
<p>APEC dibentuk pada <b>November 1989</b> di Canberra, Australia.</p>
<h4 class="sub">Tujuan APEC</h4>
<ul class="dots">
  <li>Menjalin kerja sama di bidang perdagangan, investasi, dan pariwisata.</li>
  <li>Memperkuat perdagangan internasional negara-negara di Asia Pasifik dan negara lain.</li>
  <li>Mengurangi hambatan perdagangan internasional.</li>
  <li>Meningkatkan kualitas sumber daya manusia.</li>
</ul>
<p>APEC diarahkan pada pembentukan kawasan perdagangan bebas di kawasan Asia Pasifik.</p>
<p>Indonesia menjadi anggota APEC dan pernah menjadi tuan rumah KTT II APEC pada <b>5 November 1994</b> di Bogor. Pertemuan tersebut menghasilkan Deklarasi Bogor.</p>
<p>Pada 2003, Indonesia kembali menjadi tuan rumah pertemuan APEC dengan tema <i>Resilient Asia Pacific, Engine of Global Growth</i>.</p>`
    },
    {
      h: '6. Uni Eropa (European Union)',
      html: `
<p><b>Uni Eropa (European Union/EU)</b> merupakan lembaga kerja sama ekonomi dan sosial negara-negara di Eropa.</p>
<p>Pembentukan Uni Eropa diawali adanya kesepakatan Traktat Roma pada <b>1957</b> di Roma, Italia.</p>
<h4 class="sub">Tujuan Uni Eropa</h4>
<ul class="dots">
  <li>Menghilangkan hambatan perdagangan bebas.</li>
  <li>Memajukan kehidupan ekonomi dan sosial masyarakat Eropa.</li>
  <li>Memobilisasi potensi ekonomi.</li>
  <li>Menyatukan perekonomian ke wilayah pemasaran bersama.</li>
  <li>Meningkatkan daya saing negara-negara anggota terhadap perekonomian internasional.</li>
</ul>`
    },
    {
      h: '7. South Asian Association for Regional Cooperation (SAARC)',
      html: `
<p><b>South Asian Association for Regional Cooperation (SAARC)</b> merupakan forum kerja sama negara-negara di kawasan Asia Selatan.</p>
<p>SAARC dibentuk pada <b>8 Desember 1985</b> dengan negara pendiri Bangladesh, Bhutan, India, Maladewa, Nepal, Pakistan, dan Sri Lanka.</p>
<p>SAARC bertujuan mendorong pertumbuhan ekonomi negara-negara di kawasan Asia Selatan.</p>
<p>Pada KTT VIII SAARC di New Delhi, India, negara-negara anggota menyepakati pembentukan <b>South Asia Preferential Trade Agreement (SAPTA)</b>. Kesepakatan ini menjadi dasar pembentukan Kawasan Perdagangan Bebas Asia Selatan atau <b>South Asia Free Trade Area (SAFTA)</b>.</p>`
    },
    {
      h: 'Lembaga Kerja Sama Ekonomi Internasional',
      html: `
<p>Dalam lingkup makro, negara-negara di dunia juga menjalin kerja sama ekonomi internasional yang didukung oleh berbagai lembaga atau badan kerja sama ekonomi internasional.</p>`
    },
    {
      h: '1. Bank Dunia (World Bank)',
      html: `
<p><b>Bank Dunia (World Bank)</b> secara formal merupakan badan khusus PBB di bawah naungan Economic and Social Council (ECOSOC).</p>
<h4 class="sub">Tujuan Bank Dunia</h4>
<ul class="dots">
  <li>Membantu rekonstruksi dan pembangunan negara anggota melalui fasilitas investasi produktif.</li>
  <li>Memberikan pinjaman investasi swasta.</li>
  <li>Mendorong perkembangan jangka panjang dalam perdagangan antarnegara.</li>
  <li>Memengaruhi investasi internasional.</li>
  <li>Menyusun pinjaman yang dijamin terkait pinjaman internasional melalui sumber lain.</li>
</ul>
<p>Untuk mencapai tujuannya, Bank Dunia dibantu beberapa lembaga berikut.</p>
<div class="grid2">
  <div class="mini">
    <h4>IBRD</h4>
    <p><b>International Bank for Reconstruction and Development</b> dibentuk pada 27 Desember 1945 dan mulai beroperasi pada 6 Juni 1946.</p>
    <p>Berperan membantu pembangunan negara anggota melalui penanaman modal produktif, mendukung investasi swasta, meningkatkan perdagangan antarnegara, serta mengatur dan menjamin pinjaman.</p>
  </div>
  <div class="mini">
    <h4>IDA</h4>
    <p><b>International Development Association</b> berdiri pada 15 September 1960.</p>
    <p>Bertujuan membantu pembangunan negara berkembang melalui pinjaman dengan syarat longgar dan bunga ringan serta pemberian hibah bagi negara miskin.</p>
  </div>
  <div class="mini">
    <h4>IFC</h4>
    <p><b>International Finance Corporation</b> dibentuk pada 1956.</p>
    <p>Membantu dan memberikan dana kepada sektor swasta di negara berkembang, membiayai investasi swasta, serta menyediakan bantuan teknik dan analisis.</p>
  </div>
  <div class="mini">
    <h4>MIGA</h4>
    <p><b>Multilateral Investment Guarantee Agency</b> dibentuk pada 1985.</p>
    <p>Menjamin dan mempromosikan penanaman modal langsung bagi negara berkembang untuk mendukung pembangunan dan kesejahteraan.</p>
  </div>
  <div class="mini">
    <h4>ICSID</h4>
    <p><b>International Centre for Settlement of Investment Disputes</b> dibentuk pada 1966.</p>
    <p>Bertugas menyediakan fasilitas penyelesaian perselisihan investasi antara pemerintah dan investor asing.</p>
  </div>
  <div class="mini">
    <h4>IMF</h4>
    <p><b>International Monetary Fund</b> berperan mengawasi sistem keuangan internasional, membantu stabilisasi nilai tukar, dan membantu negara anggota mengatasi kesulitan neraca pembayaran melalui kredit jangka pendek dan cadangan devisa.</p>
  </div>
  <div class="mini">
    <h4>IsDB</h4>
    <p><b>Islamic Development Bank</b> dibentuk oleh Organisasi Konferensi Islam (OKI) pada 24 Juli 1975.</p>
    <p>Bertujuan meningkatkan kualitas kehidupan sosial ekonomi negara anggota dan masyarakat muslim di negara bukan anggota berdasarkan prinsip syariah.</p>
  </div>
</div>`
    },
    {
      h: '2. United Nations Industrial Development Organization (UNIDO)',
      html: `
<p><b>United Nations Industrial Development Organization (UNIDO)</b> dibentuk pada 24 Juli 1967 untuk menangani masalah pembangunan industri di negara berkembang.</p>
<p>UNIDO berfokus pada upaya mengentaskan kemiskinan melalui kegiatan industri sektor UMKM, meningkatkan kapasitas perdagangan, serta meningkatkan kepedulian terhadap lingkungan hidup dan pemanfaatan energi.</p>
<p>UNIDO memberikan bantuan teknis, program latihan, penelitian, dan penyediaan informasi. Organisasi ini juga mempromosikan tenaga kerja produktif, daya saing ekonomi, dan keamanan lingkungan.</p>`
    },
    {
      h: '3. Organization of the Petroleum Exporting Countries (OPEC)',
      html: `
<p><b>Organization of the Petroleum Exporting Countries (OPEC)</b> merupakan organisasi negara-negara penghasil minyak bumi di dunia.</p>
<p>OPEC berdiri pada <b>14 September 1960</b> di Bagdad, Irak. Kantor sekretariat OPEC kemudian dipindahkan ke Vienna, Austria, pada 1 September 1965.</p>
<h4 class="sub">Tujuan OPEC</h4>
<ul class="dots">
  <li>Mengatur produksi dan pemasaran minyak untuk menghindari persaingan usaha tidak sehat.</li>
  <li>Memelihara kestabilan harga minyak mentah.</li>
  <li>Mengefisienkan produksi minyak untuk memenuhi kebutuhan dunia.</li>
</ul>
<p>Indonesia pernah menjadi anggota OPEC, menyatakan keluar pada 2008, kembali menjadi anggota pada 2014, kemudian keluar lagi pada 30 November 2016.</p>`
    },
    {
      h: '4. World Trade Organization (WTO)',
      html: `
<p><b>World Trade Organization (WTO)</b> merupakan badan yang mengatur masalah perdagangan antarnegara.</p>
<p>Pelaksanaan tugas WTO berdasarkan perjanjian yang dinegosiasikan dan disepakati oleh sebagian besar negara di dunia. Hasil negosiasi kemudian diratifikasi melalui parlemen.</p>
<p>Tujuan perjanjian WTO adalah membantu produsen barang dan/atau jasa, eksportir, serta importir dalam melaksanakan kegiatannya.</p>
<h4 class="sub">Tugas WTO</h4>
<ul class="dots">
  <li>Memantau penyelenggaraan perdagangan antarnegara.</li>
  <li>Mengevaluasi kebijakan perdagangan nasional anggota.</li>
  <li>Menjadi forum negosiasi perdagangan dan menangani perselisihan perdagangan antarnegara.</li>
  <li>Memberikan bantuan teknik dan pelatihan bagi negara-negara berkembang.</li>
  <li>Melakukan kerja sama dengan organisasi internasional lain.</li>
</ul>`
    },
    {
      h: '5. Economic and Social Council (ECOSOC)',
      html: `
<p><b>Economic and Social Council (ECOSOC)</b> adalah badan dunia yang menangani masalah ekonomi dan sosial.</p>
<h4 class="sub">Tugas ECOSOC</h4>
<ul class="dots">
  <li>Mengoordinasi kegiatan ekonomi dan sosial PBB.</li>
  <li>Menampung isu-isu tentang hak asasi manusia (HAM).</li>
  <li>Memfasilitasi kerja sama budaya dan pendidikan internasional.</li>
</ul>
<p>ECOSOC membawahi badan khusus dunia, seperti:</p>
<div class="grid2">
  <div class="mini"><h4>WHO</h4><p>World Health Organization.</p></div>
  <div class="mini"><h4>ILO</h4><p>International Labour Organization.</p></div>
  <div class="mini"><h4>FAO</h4><p>Food and Agriculture Organization.</p></div>
  <div class="mini"><h4>UNESCO</h4><p>United Nations Educational, Scientific and Cultural Organization.</p></div>
</div>
<p>Lembaga-lembaga tersebut merupakan wujud nyata kerja sama antarnegara yang didasari kesamaan tujuan, saling menguntungkan, dan mengakomodasi perbedaan karakteristik serta keunggulan masing-masing negara.</p>`
    }
  ],
  recap: [
    'Lembaga kerja sama ekonomi antarnegara terdiri atas lembaga regional dan internasional.',
    'ASEAN dibentuk pada 8 Agustus 1967 di Bangkok, Thailand, melalui Deklarasi Bangkok.',
    'AFTA merupakan kerja sama perdagangan bebas di Asia Tenggara untuk meningkatkan daya saing, investasi, dan perdagangan antarnegara anggota.',
    'MEA atau AEC bertujuan mewujudkan integrasi ekonomi ASEAN melalui empat pilar: pasar tunggal, daya saing tinggi, pembangunan merata, dan integrasi global.',
    'ADB membantu perkembangan sosial dan ekonomi di kawasan Asia.',
    'APEC merupakan forum kerja sama negara-negara Asia Pasifik.',
    'Uni Eropa merupakan lembaga kerja sama ekonomi dan sosial negara-negara Eropa.',
    'SAARC merupakan forum kerja sama negara-negara Asia Selatan.',
    'Bank Dunia memiliki lembaga pendukung, yaitu IBRD, IDA, IFC, MIGA, dan ICSID.',
    'IMF membantu mengawasi sistem keuangan internasional dan mengatasi kesulitan neraca pembayaran.',
    'IsDB membantu meningkatkan kehidupan sosial ekonomi berdasarkan prinsip syariah.',
    'UNIDO menangani pembangunan industri di negara berkembang.',
    'OPEC merupakan organisasi negara-negara penghasil minyak bumi.',
    'WTO mengatur perdagangan antarnegara dan menangani perselisihan perdagangan.',
    'ECOSOC menangani masalah ekonomi dan sosial serta membawahi badan khusus seperti WHO, ILO, FAO, dan UNESCO.'
  ]
  },
  /* ------------------------------ Z: Rumus & Catatan Guru ------------------------------ */
  {
    id: 'Z',
    meta: { short: 'Rangkuman & Catatan Guru', title: 'Rangkuman & Catatan Guru', icon: '🎓', color: '#e0a800' },
    intro: 'Bagian penutup untuk mengingat kembali materi Ekonomi Internasional sebelum ujian.',
    sections: [
      {
      h: 'Rangkuman Materi Ekonomi Internasional',
      html: `
<div class="formula">Bentuk Kerja Sama = <b>Bilateral + Regional + Subregional + Antarregional + Multilateral</b></div>
<div class="formula">Bidang Kerja Sama = <b>Perdagangan + Produsen + Keuangan + Pasar Bersama + Ketenagakerjaan</b></div>
<div class="formula">Lembaga Kerja Sama = <b>Regional + Internasional</b></div>
<h4 class="sub">Lembaga Regional</h4>
<ul class="dots">
  <li>ASEAN: kerja sama bangsa-bangsa di kawasan Asia Tenggara.</li>
  <li>AFTA: perdagangan bebas di kawasan Asia Tenggara.</li>
  <li>MEA: integrasi ekonomi negara-negara ASEAN.</li>
  <li>ADB: membantu perkembangan sosial dan ekonomi kawasan Asia.</li>
  <li>APEC: forum kerja sama kawasan Asia Pasifik.</li>
  <li>Uni Eropa: kerja sama ekonomi dan sosial negara-negara Eropa.</li>
  <li>SAARC: kerja sama negara-negara kawasan Asia Selatan.</li>
</ul>
<h4 class="sub">Lembaga Internasional</h4>
<ul class="dots">
  <li>World Bank: membantu rekonstruksi dan pembangunan negara anggota.</li>
  <li>IBRD: membantu pembangunan melalui penanaman modal produktif.</li>
  <li>IDA: memberikan pinjaman dan hibah bagi negara berkembang.</li>
  <li>IFC: membantu sektor swasta di negara berkembang.</li>
  <li>MIGA: menjamin dan mempromosikan investasi langsung.</li>
  <li>ICSID: menyelesaikan perselisihan investasi.</li>
  <li>IMF: mengawasi sistem keuangan internasional.</li>
  <li>IsDB: membantu pembangunan berdasarkan prinsip syariah.</li>
  <li>UNIDO: menangani pembangunan industri.</li>
  <li>OPEC: mengatur produksi dan pemasaran minyak.</li>
  <li>WTO: mengatur perdagangan antarnegara.</li>
  <li>ECOSOC: menangani masalah ekonomi dan sosial PBB.</li>
</ul>`
    },
    {
      h: 'Catatan Guru: Hal Penting untuk Diingat',
      html: `
<ul class="dots">
  <li><b>Kenali lima bentuk kerja sama ekonomi internasional.</b> Perhatikan perbedaan jumlah negara dan wilayah yang terlibat.</li>
  <li><b>Bedakan lima bidang kerja sama ekonomi antarnegara.</b> Pelajari tujuan dan contoh masing-masing bidang.</li>
  <li><b>Hafalkan nama lembaga dan tugasnya.</b> Jangan hanya menghafalkan singkatan, tetapi pahami peran setiap lembaga.</li>
  <li><b>Pahami peran Indonesia.</b> Indonesia terlibat dalam berbagai kerja sama ekonomi regional maupun internasional.</li>
  <li><b>Perhatikan dampak kerja sama.</b> Kerja sama dapat memberikan peluang perdagangan, investasi, dan pembangunan, tetapi juga menghadirkan tantangan bagi perekonomian dalam negeri.</li>
</ul>
<div class="quote">"Kerja sama ekonomi internasional menunjukkan bahwa setiap negara saling membutuhkan. Dengan memahami peran dan manfaatnya, kita dapat menjadi generasi yang lebih siap menghadapi perekonomian global." 🌟</div>`
    }
  ],
  recap: [
    'Pelajari lima bentuk kerja sama ekonomi internasional.',
    'Pahami lima bidang kerja sama ekonomi antarnegara beserta contohnya.',
    'Kenali lembaga kerja sama ekonomi regional dan internasional beserta tugasnya.',
    'Pahami peran Indonesia serta dampak positif dan tantangan dari kerja sama ekonomi internasional.'
  ]
}
];

/* ============================================================
   BANK SOAL EKONOMI INTERNASIONAL
   Jawaban benar SELALU ditulis pertama di array `o`;
   urutan opsi diacak otomatis saat game berjalan.
   ============================================================ */
const BANK = [
  /* ---- A: Konsep Kerja Sama Ekonomi Internasional ---- */

  { s:'A', q:'Kerja sama ekonomi internasional adalah kerja sama yang dilakukan oleh …', o:['Dua negara atau lebih dalam bidang ekonomi','Individu dalam satu daerah','Perusahaan dalam satu kota','Masyarakat dalam satu keluarga'] },
  { s:'A', q:'Salah satu tujuan kerja sama ekonomi internasional adalah …', o:['Meningkatkan kesejahteraan negara anggota','Membatasi hubungan antarnegara','Mengurangi kegiatan perdagangan','Menghentikan kegiatan ekspor'] },
  { s:'A', q:'Indonesia berperan aktif dalam kerja sama ekonomi internasional. Salah satu manfaatnya adalah …', o:['Meningkatkan kinerja ekspor dan impor','Menguasai perekonomian negara lain','Menghentikan perdagangan internasional','Mengurangi kegiatan produksi'] },
  { s:'A', q:'Pesatnya globalisasi memungkinkan negara berkembang bekerja sama dengan negara maju. Salah satu dampaknya adalah …', o:['Terjadinya transfer ilmu pengetahuan dan teknologi','Terhentinya perdagangan antarnegara','Berkurangnya hubungan ekonomi','Menurunnya kegiatan produksi'] },
  { s:'A', q:'Hubungan kerja sama perdagangan dapat menimbulkan dampak negatif bagi Indonesia, yaitu …', o:['Minat masyarakat terhadap produk lokal berkurang','Produksi dalam negeri selalu meningkat','Jumlah pengangguran pasti menurun','Produk lokal semakin banyak diminati'] },
  { s:'A', q:'Perdagangan internasional memiliki hubungan dengan kerja sama ekonomi internasional karena …', o:['Kerja sama ekonomi antarnegara dapat dilakukan melalui perdagangan internasional','Perdagangan internasional menghilangkan kebutuhan kerja sama','Kerja sama ekonomi hanya dilakukan dalam satu negara','Perdagangan internasional tidak melibatkan negara lain'] },

  /* ---- B: Bentuk Kerja Sama Ekonomi Internasional ---- */

  { s:'B', q:'Kerja sama ekonomi antara dua negara disebut …', o:['Bilateral','Multilateral','Regional','Interregional'] },
  { s:'B', q:'Contoh kerja sama bilateral Indonesia adalah kerja sama dengan …', o:['Jepang','Seluruh negara ASEAN','Uni Eropa','Seluruh negara di dunia'] },
  { s:'B', q:'Kerja sama ekonomi yang dilakukan oleh beberapa negara dalam satu kawasan disebut …', o:['Regional','Bilateral','Nasional','Individual'] },
  { s:'B', q:'AFTA merupakan bentuk kerja sama ekonomi di kawasan …', o:['Asia Tenggara','Eropa','Afrika','Amerika'] },
  { s:'B', q:'MEA merupakan singkatan dari …', o:['Masyarakat Ekonomi ASEAN','Manajemen Ekonomi Asia','Mitra Ekonomi Antarnegara','Masyarakat Ekspor Asia'] },
  { s:'B', q:'Salah satu dampak MEA bagi Indonesia adalah …', o:['Kemudahan memindahkan faktor produksi dan hasil produksi','Adanya ketentuan harga semua produk minyak','Terhentinya kegiatan ekspor','Dilarangnya tenaga kerja bekerja di negara ASEAN'] },
  { s:'B', q:'Untuk menghadapi AFTA, pemerintah Indonesia perlu …', o:['Melakukan promosi dan terobosan ke pasar internasional','Menghentikan kegiatan ekspor','Mengurangi kualitas produk dalam negeri','Membatasi seluruh kegiatan perdagangan'] },

  /* ---- C: Bidang Kerja Sama Ekonomi Antarnegara ---- */

  { s:'C', q:'Kegiatan menjual barang ke luar negeri disebut …', o:['Ekspor','Impor','Konsumsi','Distribusi'] },
  { s:'C', q:'Kegiatan membeli barang dari luar negeri disebut …', o:['Impor','Ekspor','Produksi','Investasi'] },
  { s:'C', q:'Salah satu manfaat ekspor bagi Indonesia adalah …', o:['Memperoleh devisa negara','Mengurangi pendapatan negara','Menghentikan produksi dalam negeri','Meningkatkan ketergantungan impor'] },
  { s:'C', q:'Kerja sama ekonomi di bidang perdagangan bertujuan untuk …', o:['Memperlancar kegiatan jual beli antarnegara','Menghentikan hubungan ekonomi','Membatasi produksi masyarakat','Mengurangi jumlah pasar'] },
  { s:'C', q:'Indonesia dan Jepang membangun pabrik perakitan kendaraan bermotor di Indonesia. Kerja sama tersebut dapat dimanfaatkan untuk …', o:['Menarik kepercayaan investor asing','Memonopoli kegiatan ekonomi negara lain','Mengurangi kegiatan produksi dalam negeri','Meningkatkan jumlah impor kendaraan'] },
  { s:'C', q:'Dampak positif kerja sama pembangunan infrastruktur dan transportasi bagi negara yang menawarkan kereta listrik adalah …', o:['Kegiatan ekspor dan impor meningkat','Neraca perdagangan selalu tetap','Kualitas tenaga kerja pasti menurun','Kegiatan perdagangan dihentikan'] },
  { s:'C', q:'Negara yang memiliki hasil hutan melimpah bergabung dalam kerja sama produsen hasil hutan. Manfaatnya adalah …', o:['Menetapkan harga barang di pasar internasional agar memperoleh laba optimal','Menghentikan produksi hasil hutan','Melarang negara lain menjual hasil hutan','Mengurangi hubungan perdagangan antarnegara'] },
  { s:'C', q:'Upaya pemerintah Indonesia agar tenaga kerja tidak dirugikan dalam kerja sama dengan Singapura adalah …', o:['Memberikan jaminan dan perlindungan terhadap tenaga kerja','Meminta bantuan untuk seluruh keluarga tenaga kerja','Mengurangi hak tenaga kerja','Membatasi kesempatan tenaga kerja untuk bekerja'] },
  { s:'C', q:'Salah satu dampak positif penghapusan tarif impor oleh WTO bagi Indonesia adalah …', o:['Semakin luasnya pangsa pasar komoditas negara anggota WTO','Semakin sulitnya produk Indonesia memasuki pasar luar negeri','Terhentinya kegiatan ekspor Indonesia','Berkurangnya kesempatan perdagangan antarnegara'] },
  { s:'C', q:'Komoditas ekspor unggulan Indonesia antara lain kopi, karet, kelapa sawit, dan tekstil. Keuntungan kegiatan ekspor tersebut adalah …', o:['Memperoleh devisa sebagai sumber penerimaan negara','Mengurangi kesempatan kerja','Menghentikan kegiatan produksi','Meningkatkan ketergantungan impor'] },
  { s:'C', q:'Upaya yang dapat dilakukan pelaku UMKM agar mampu bersaing di pasar internasional adalah …', o:['Mengembangkan sistem informasi pemasaran yang efektif dan efisien','Mengurangi kualitas produk','Menghentikan kegiatan pemasaran','Membatasi penjualan produk'] },

  /* ---- D: Lembaga Kerja Sama Ekonomi Antarnegara ---- */

  { s:'D', q:'ASEAN merupakan organisasi kerja sama negara-negara di kawasan …', o:['Asia Tenggara','Asia Timur','Asia Selatan','Eropa Barat'] },
  { s:'D', q:'WTO merupakan organisasi internasional yang mengatur bidang …', o:['Perdagangan dunia','Kesehatan dunia','Pendidikan','Kebudayaan'] },
  { s:'D', q:'IMF merupakan lembaga internasional yang bergerak dalam bidang …', o:['Keuangan','Kesehatan','Pendidikan','Lingkungan'] },
  { s:'D', q:'Salah satu peran World Bank adalah …', o:['Memberikan dukungan pembiayaan pembangunan','Mengatur kegiatan olahraga dunia','Mengatur sistem pendidikan setiap negara','Mengawasi kegiatan pariwisata'] },
  { s:'D', q:'WHO melakukan penelitian dan pengembangan vaksin untuk mencegah penularan penyakit. Peran WHO adalah …', o:['Membantu melakukan pembatasan terhadap penyakit menular','Mengatur perdagangan internasional','Memberikan pinjaman untuk pembangunan infrastruktur','Menetapkan tarif ekspor dan impor'] },
  { s:'D', q:'Asian Development Bank (ADB) dan IBRD memiliki tujuan kerja sama, yaitu …', o:['Membiayai pembangunan ekonomi dan sosial negara anggota','Mengatur jumlah produksi barang','Mewujudkan pasar bersama di satu kawasan','Mengatur tarif perdagangan antarnegara'] },
];
