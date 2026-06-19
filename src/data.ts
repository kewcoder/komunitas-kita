import { CategoryInfo, Community, Review } from "./types";

export const CATEGORIES: CategoryInfo[] = [
  {
    slug: "ai-automation",
    name: "AI & Automation",
    icon: "Sparkles",
    tagline: "Eksplorasi AI Engineering, Prompt Engineering, Tools bertenaga AI, dan otomatisasi.",
    seoDescription: `Temukan direktori Komunitas AI & Otomatisasi terbaik di Indonesia. Di era revolusi kecerdasan buatan saat ini, pemahaman mendalam tentang ekosistem AI tidak lagi bersifat opsional. Generasi baru profesional, indie hacker, dan pebisnis aktif menggunakan teknologi ini untuk melipatgandakan produktivitas.\n\nLintar komunitas di kategori ini dirancang khusus untuk mewadahi kelompok diskusi seputar rekayasa kecerdasan buatan (Prompt Engineering, instansi LLM, integrasi API, sistem multi-agen), kreasi konten digital bertenaga AI, hingga strategi monetisasi (AI monetization).\n\nPelajari rahasia rekayasa instruksi, otomatisasi tugas harian, pembuatan asisten virtual mandiri, dan jalin kolaborasi bersama praktisi machine learning serta pembuat produk kreatif digital terdepan di tanah air.`,
    subcategories: [
      "AI Engineering (LLM, RAG, agents)",
      "AI Content Creation (image/video/audio)",
      "Prompt Engineering",
      "AI Tools & Productivity",
      "AI Startup / AI Monetization"
    ]
  },
  {
    slug: "software-development",
    name: "Software & Development",
    icon: "Code",
    tagline: "Wadah belajar coding, arsitektur sistem, awan DevOps, open source, dan indie dev.",
    seoDescription: `Eksplorasi dunia rekayasa perangkat lunak, pemrograman komputer, dan administrasi sistem di direktori forum developer Indonesia. Belajar coding otodidak maupun terstruktur menjadi lebih terarah dengan dukungan sesama praktisi IT.\n\nKomunitas dalam kategori ini mencakup kelompok bahas bahasa pemrograman web (React, Vue, Laravel), pengembangan aplikasi mobile (Flutter, SwiftUI), perancangan backend, arsitektur microservices, otomatisasi cloud DevOps, hingga gerakan indie hackers mandiri.\n\nDapatkan bantuan pencarian bug harian, review baris kode (code review) dari engineer senior, info lowongan kerja teknologi nasional maupun remote internasional, serta diskusi teknologi terkini secara sehat.`,
    subcategories: [
      "Web Development",
      "Mobile Development",
      "Backend / System Design",
      "DevOps / Cloud / Infra",
      "Open Source & Indie Dev"
    ]
  },
  {
    slug: "creative-design",
    name: "Creative & Design",
    icon: "Palette",
    tagline: "Inspirasi UI/UX, desain grafis, animasi / motion, aset gratis, 3D, dan branding.",
    seoDescription: `Hubungkan produktivitas visual Anda dengan lingkaran desainer kreatif dan ilustrator terpopuler di Indonesia. Desain berkualitas lahir dari kombinasi kepekaan estetika, analisis fungsionalitas, serta feedback berkala.\n\nTingkatkan jam terbang Anda dengan mempelajari rahasia tools desain (Figma, Adobe Creative Suite, Blender 3D), kembangkan keterampilan perancangan visual antarmuka pengguna (UI/UX), pelajari seni motion graphics, hingga pembuatan aset game 3D modern.\n\nSaling berbagi ulasan portfolio desain, bagikan karya harian untuk mendapatkan masukan jujur, temukan aset visual gratis siap pakai, serta telusuri peluang kerja lepas (freelance) prospektif dari dalam dan luar negeri.`,
    subcategories: [
      "UI/UX Design",
      "Graphic Design",
      "Motion / Animation",
      "3D / Game Art",
      "Branding / Visual Identity"
    ]
  },
  {
    slug: "business-growth",
    name: "Business & Growth",
    icon: "Briefcase",
    tagline: "Jaringan rintisan startup, digital marketing, taktik sales, copywriting, dan e-commerce.",
    seoDescription: `Akselerasikan pertumbuhan usaha Anda dan jalin kolaborasi bisnis yang kokoh melalui direktori Komunitas Bisnis & Pertumbuhan Indonesia. Memulai usaha membutuhkan keberanian, namun menjaga kelangsungannya menuntut adaptasi taktik pemasaran secara dinamis.\n\nForum bisnis di bawah ini berisi jajaran pendiri startup rintisan, pelaku UMKM, profesional pemasaran digital, dan praktisi penjualan yang aktif berdiskusi seputar taktik growth hacking, psikologi penulisan iklan (copywriting), e-commerce, dropshipping, dan strategi eksekusi bisnis.\n\nDapatkan sesi mentoring rutin, evaluasi model bisnis, data kelayakan pasar, hingga jaringan pertemanan solid yang siap membantu memitigasi risiko operasional usaha baru Anda.`,
    subcategories: [
      "Startup / Entrepreneurship",
      "Digital Marketing",
      "Sales & Copywriting",
      "Growth Hacking",
      "E-commerce / Dropshipping"
    ]
  },
  {
    slug: "career-freelance",
    name: "Career & Freelance",
    icon: "UserCheck",
    tagline: "Panduan remote work internasional, portofolio freelance, job prep, dan personal brand.",
    seoDescription: `Persiapkan transisi karir profesional Anda secara gemilang atau capai kebebasan finansial sebagai pekerja mandiri (freelancer) global. Karir yang sukses dibangun melalui keunikan personal branding, portofolio ciamik, serta kesiapan wawancara kerja yang matang.\n\nTemukan informasi eksklusif seputar lowongan kerja remote luar negeri, panduan mengoptimalkan profil platform lepas (Upwork, Fiverr, Lemon.io), trik bernegosiasi paket kompensasi & gaji (salary negotiation), serta strategi manajemen stres harian.\n\nBelajar langsung dari mentor profesional senior dan sesama freelancer berpengalaman tentang kiat-kiat membangun jejaring bisnis, pelaporan keuangan mandiri, dan perencanaan pengembangan keahlian berkelanjutan.`,
    subcategories: [
      "Remote Work",
      "Freelancing",
      "Personal Branding",
      "Job Search / Interview Prep",
      "Skill Development"
    ]
  },
  {
    slug: "entertainment-community",
    name: "Entertainment & Community",
    icon: "Gamepad2",
    tagline: "Teman mabar push rank, kumpul pecinta anime pop culture, film, musik, dan obrolan santai.",
    seoDescription: `Keseimbangan hidup terbangun saat Anda meluangkan waktu untuk mengekspresikan hobi, menikmati hiburan, dan tertawa bersama lingkar sosial baru. Selamat datang di direktori Komunitas Hiburan dan Hobi terpopuler.\n\nCari rekan bermain game (mabar) push-rank anti-toxic untuk game legendaris (Valorant, Mobile Legends, Genshin Impact), diskusikan rilis episode anime favorit, bagikan review film & rekomendasi musik bergizi harian, atau sekadar nikmati meme-meme humor lokal penghapus penat.\n\nKomunitas dalam kategori ini menawarkan ruang obrolan audio kualitas tinggi non-stop serta kegiatan diskusi kasual seru yang akan menemani waktu bersantai Anda selepas lelah bekerja harian.`,
    subcategories: [
      "Gaming / Esports",
      "Anime / Pop Culture",
      "Music / Film Discussion",
      "Meme / Social Community",
      "Streaming / Content Fans"
    ]
  }
];

export const COMMUNITIES: Community[] = [
  {
    id: "1",
    name: "AI Engineering Indonesia",
    slug: "ai-engineering-indonesia",
    description: "Komunitas pengembang kecerdasan buatan, arsitektur RAG, fine-tuning LLM, dan rekayasa multi-agent system.",
    category: "ai-automation",
    subcategory: "AI Engineering (LLM, RAG, agents)",
    platform: "discord",
    type: "free",
    invite_link: "https://discord.gg/ai_eng_id_example",
    is_vip: true,
    member_count: "8,450+",
    languages: ["Indonesia", "English"],
    features: ["Tutorial API OpenAI/Gemini", "Showcase Agent AI harian", "Sesi live coding mingguan", "Loker AI Engineer"],
    long_description: "AI Engineering Indonesia (AIEI) adalah wadah kolaboratif utama bagi software engineer, ML practitioner, dan data professional yang ingin naik kelas ke ekosistem AI modern. Kami fokus membedah arsitektur Retrieval-Augmented Generation (RAG), teknik optimasi prompt terstruktur, implementasi kerangka kerja LangChain/LlamaIndex, hingga orkestrasi multi-agent mandiri. Temukan meetup belajar virtual harian dan perluas portofolio inovasi teknologi terpintar Anda."
  },
  {
    id: "2",
    name: "Indonesia Prompt Geeks",
    slug: "indonesia-prompt-geeks",
    description: "Grup diskusi optimasi penulisan prompt ChatGPT, Claude, Midjourney, dan otomatisasi produktivitas digital.",
    category: "ai-automation",
    subcategory: "Prompt Engineering",
    platform: "whatsapp",
    type: "free",
    invite_link: "https://chat.whatsapp.com/prompt_geeks_example",
    is_vip: false,
    member_count: "4,120+",
    languages: ["Indonesia"],
    features: ["Buku Panduan Prompt Gratis", "Review Prompt Bulanan", "Trik Otomatisasi Make/Zapier", "Tips AI Content Creation"],
    long_description: "Indonesia Prompt Geeks menyatukan kreator konten, penulis, pemasar, dan pekerja lepas yang ingin memanfaatkan AI Generatif untuk mempercepat pekerjaan harian mereka. Di grup ini, anggota saling berbagi formula prompt yang terbukti melahirkan hasil presisi, template instruksi, trik bypass limitasi model bahasa, hingga integrasi workflow tanpa koding menggunakan Make dan Zapier. Sangat ramah bagi pemula yang penasaran dengan pemanfaatan AI harian."
  },
  {
    id: "3",
    name: "React Developers ID",
    slug: "react-developers-id",
    description: "Komunitas developer React, Next.js, React Native terbesar di Indonesia. Tempat diskusi bug, framework, dan loker.",
    category: "software-development",
    subcategory: "Web Development",
    platform: "discord",
    type: "free",
    invite_link: "https://discord.gg/react_id_example",
    is_vip: true,
    member_count: "21,300+",
    languages: ["Indonesia", "English"],
    features: ["Saluran bantuan kode", "Info loker software engineer", "Diskusi trend framework", "Showcase proyek mandiri"],
    long_description: "React Developers Indonesia (ReactID) adalah jantungnya komunitas React di tanah air. Dengan lebih dari 20 ribu anggota terdaftar, forum ini sangat aktif mengulas perkembangan ekosistem React, Next.js, Remix, Tailwind CSS, hingga React Native untuk platform mobile. Kami menyediakan wadah tanya-jawab ramah bagi junior developer, sesi kritik dan saran kode, serta jembatan informasi bagi rekruter yang mencari talenta software engineering berkualitas."
  },
  {
    id: "4",
    name: "DevOps & Cloud Indonesia",
    slug: "devops-cloud-indonesia",
    description: "Sharing seputar Docker, Kubernetes, CI/CD pipelines, AWS, GCP, Cloudflare, dan system administration.",
    category: "software-development",
    subcategory: "DevOps / Cloud / Infra",
    platform: "telegram",
    type: "free",
    invite_link: "https://t.me/devops_cloud_id_example",
    is_vip: false,
    member_count: "10,250+",
    languages: ["Indonesia", "English"],
    features: ["Guide setup server VPS", "Diskusi scaling infrastruktur", "Tantangan coding Terraform", "Sharing insiden downtime"],
    long_description: "DevOps & Cloud Indonesia adalah lingkaran diskusi tepercaya bagi para system administrator, DevOps engineer, dan site reliability engineer (SRE) tanah air. Kami mengulas secara komprehensif implementasi infrastruktur modern, otomatisasi deployment pipa CI/CD menggunakan Jenkins atau GitHub Actions, manajemen kluster Kubernetes, hingga optimalisasi tagihan cloud computing bulanan. Sangat komunikatif dan fokus pada solusi praktis."
  },
  {
    id: "5",
    name: "Design UI/UX Indonesia",
    slug: "design-uiux-indonesia",
    description: "Ruang berbagi inspirasi desain antarmuka, ulasan portfolio Figma, tren micro-interaction, dan riset UX.",
    category: "creative-design",
    subcategory: "UI/UX Design",
    platform: "telegram",
    type: "free",
    invite_link: "https://t.me/designuiux_id_example",
    is_vip: true,
    member_count: "15,800+",
    languages: ["Indonesia"],
    features: ["Figma UI Kits gratis", "Sesi bedah portfolio gratis", "Tantangan desain mingguan", "Info magang agensi kreatif"],
    long_description: "Design UI/UX Indonesia adalah wadah ramah bagi desainer visual pemula, desainer berpengalaman, serta peneliti pengalaman pengguna (UX researchers) untuk melatih ketajaman visual dan kegunaan riset produk digital. Forum ini diisi dengan rutinitas ulasan portofolio yang interaktif, perbincangan mendalam seputar desain sistem, tips mengoptimalkan workflow Figma, serta informasi lowongan pekerjaan desain dari berbagai perusahaan rintisan terkemuka."
  },
  {
    id: "6",
    name: "Indie Motion ID",
    slug: "indie-motion-id",
    description: "Grup belajar efek visual After Effects, editing video Premiere/CapCut, motion design, dan portofolio 3D.",
    category: "creative-design",
    subcategory: "Motion / Animation",
    platform: "discord",
    type: "free",
    invite_link: "https://discord.gg/indie_motion_example",
    is_vip: false,
    member_count: "6,900+",
    languages: ["Indonesia"],
    features: ["Free Sound Effects Pack", "After Effects Templates", "Kritik video montase", "Info freelance editing"],
    long_description: "Indie Motion ID adalah rumah kreatif bernuansa santai bagi motion designer, animator 2D & 3D, serta video editor independen di seluruh nusantara. Komunitas ini aktif mendiskusikan rahasia animasi halus, manipulasi efek visual (VFX) memikat, tips pemakaian CapCut/Premiere Pro/After Effects secara optimal, serta cara menjangkau klien agensi luar negeri berbayaran mentereng secara berkelanjutan."
  },
  {
    id: "7",
    name: "Startup Founders Network",
    slug: "startup-founders-network",
    description: "Wadah eksklusif bagi pembuat startup digital, UMKM scaleup, berbagi taktik pitching, pendanaan, dan kolaborasi produk.",
    category: "business-growth",
    subcategory: "Startup / Entrepreneurship",
    platform: "whatsapp",
    type: "paid",
    invite_link: "https://chat.whatsapp.com/startupfounders_id_example",
    is_vip: true,
    member_count: "1,200+",
    languages: ["Indonesia"],
    features: ["Networking bulanan offline", "Akses database investor", "Materi pitching deck", "Konsultasi hukum gratis"],
    long_description: "Startup Founders Network (SFN) adalah lingkaran profesional berbayar yang mengumpulkan para eksekutif, co-founder, serta pemilik bisnis UMKM modern untuk mendiskusikan strategi pertumbuhan. Berlandaskan prinsip kolaborasi mutualisme, anggota rutin berbagi wawasan berharga tentang pendanaan awal (fundraising), taktik pertumbuhan produk (growth hacking), kemitraan strategis, hingga manajemen krisis bisnis. Keanggotaan tervalidasi menjamin obrolan zero-spam dan sangat berbobot."
  },
  {
    id: "8",
    name: "Growth & Copywriting Lab",
    slug: "growth-copywriting-lab",
    description: "Bedah formula copywriting landing page, optimasi traffic organic/ads, dan taktik growth hacking bisnis digital.",
    category: "business-growth",
    subcategory: "Sales & Copywriting",
    platform: "telegram",
    type: "free",
    invite_link: "https://t.me/growth_copy_lab_example",
    is_vip: false,
    member_count: "8,700+",
    languages: ["Indonesia"],
    features: ["Kritik Headline Landing Page", "Pusat Studi Kasus Marketing", "Tips Email Marketing", "Strategi Meta & TikTok Ads"],
    long_description: "Growth & Copywriting Lab didirikan untuk menjembatani digital marketer, copywriter, dan dropshipper yang ingin meningkatkan konversi penjualan digital secara masif. Di sini Anda belajar merancang taktik penulisan iklan persuasif berdasar neuro-marketing, membaca data analitik iklan Facebook/TikTok Ads secara mendalam, serta merancang corong pemasaran (funneling) otomatis agar omzet meningkat tajam."
  },
  {
    id: "9",
    name: "Freelance Success Indonesia",
    slug: "freelance-success-indonesia",
    description: "Komunitas pekerja mandiri lintas industri. Bagikan tips taktis dapat klien asing, tarif jasa, dan kelola invoice pajak.",
    category: "career-freelance",
    subcategory: "Freelancing",
    platform: "whatsapp",
    type: "free",
    invite_link: "https://chat.whatsapp.com/freelancesuccess_id_example",
    is_vip: false,
    member_count: "7,400+",
    languages: ["Indonesia", "English"],
    features: ["Tips profil Upwork & Fiverr", "Panduan hitung tarif jasa", "Contoh draf kontrak kerja", "Edukasi pelaporan pajak"],
    long_description: "Freelance Success Indonesia berkomitmen melahirkan pekerja lepas profesional yang mandiri secara finansial dan berdaya saing global. Melalui diskusi grup harian, kami mengupas kiat-kiat jitu menembus pasar internasional, menyusun porto yang memikat klien asing, cara menghindari scammer pekerjaan, serta teknik mengelola stres akibat ritme kerja tidak menentu. Tempat belajar terbaik bagi pekerja mandiri yang ingin naik kelas."
  },
  {
    id: "10",
    name: "Remote Tech Jobs ID",
    slug: "remote-tech-jobs-id",
    description: "Lingkar persiapan karir remote global, konsultasi resume ATS bahasa Inggris, dan sharing interview technis.",
    category: "career-freelance",
    subcategory: "Remote Work",
    platform: "discord",
    type: "free",
    invite_link: "https://discord.gg/remote_tech_jobs_example",
    is_vip: true,
    member_count: "9,600+",
    languages: ["English", "Indonesia"],
    features: ["Review CV Bahasa Inggris", "Latihan Mock Interview", "Tabel Gaji Remote Engineer", "Rujukan Bank Klien Tepercaya"],
    long_description: "Remote Tech Jobs ID adalah katalis bagi talenta teknologi Indonesia yang mendambakan karir global tanpa perlu keluar negeri. Fokus kami adalah membekali anggota dengan template resume standar internasional yang lolos sistem pelacak pelamar (ATS), teknik menceritakan pengalaman dalam tes verbal bahasa Inggris, hingga latihan coding interview tersinkronisasi. Lingkungan diskusi didesain 100% suportif."
  },
  {
    id: "11",
    name: "Indo Gamers Alliance",
    slug: "indo-gamers-alliance",
    description: "Server mabar asyik, event kompetisi antar-anggota, diskusi konsol & PC, serta review game bersahabat.",
    category: "entertainment-community",
    subcategory: "Gaming / Esports",
    platform: "discord",
    type: "free",
    invite_link: "https://discord.gg/indogamers_example",
    is_vip: false,
    member_count: "30,000+",
    languages: ["Indonesia"],
    features: ["Voice channel 24/7", "Turnamen bulanan MLBB/Valorant", "Bot musik kualitas tinggi", "Fasilitas giveaway bulanan"],
    long_description: "Indo Gamers Alliance (IGA) adalah pusat hiburan ramah bagi seluruh pencinta game di Indonesia. Baik Anda gamer kasual yang butuh teman mengobrol selepas pulang sekolah atau pro-player yang mencari tim mabar andal, IGA menyediakan lingkungan inklusif anti-toxic. Dilengkapi struktur pengawasan administrator yang ketat, aktivitas bincang-bincang dan koordinasi strategi bermain Anda terjamin berjalan asyik dan damai."
  },
  {
    id: "12",
    name: "Wibu Santai ID",
    slug: "wibu-santai-id",
    description: "Grup diskusi rilis anime mingguan, bedah alur cerita manga terkini, info gathering, dan sharing fandom pop culture.",
    category: "entertainment-community",
    subcategory: "Anime / Pop Culture",
    platform: "telegram",
    type: "free",
    invite_link: "https://t.me/wibu_santai_id_example",
    is_vip: false,
    member_count: "12,300+",
    languages: ["Indonesia"],
    features: ["Rekomendasi Anime Musiman", "Kompilasi Fan Art Keren", "Info Tiket Event Cosplay", "Kuis Trivia Berhadiah"],
    long_description: "Wibu Santai ID adalah ruang obrolan asyik bagi penikmat pop culture Jepang di Indonesia. Diskusi di grup ini berjalan kasual mengulas petualangan One Piece terupdate, rilis serial drakor terbaru, berbagi lagu-lagu ost anime ikonis, hingga mengatur jadwal pertemuan (kopdar) di event-event jejepangan terdekat. Menjunjung tinggi nilai kesopanan tanpa perang antarfandom."
  }
];

export const MOCK_REVIEWS: Review[] = [
  {
    id: "r1",
    communitySlug: "ai-engineering-indonesia",
    reviewerName: "Rian Hidayat",
    rating: 5,
    reviewText: "Kurasi materi RAG dan rekayasa multi-agen di Discord-nya sangat canggih dan tidak ada tandingan di Indonesia. Adminnya praktisi ril di bidang kecerdasan buatan.",
    timestamp: "2 hari lalu",
    isVerifiedMember: true
  },
  {
    id: "r2",
    communitySlug: "indonesia-prompt-geeks",
    reviewerName: "Siti Rahma",
    rating: 4,
    reviewText: "Grup WA-nya aktif banget sharing trik rekayasa prompt. Sangat berguna buat saya yang bekerja sebagai pembuat salinan (copywriter) agar hemat waktu kerja.",
    timestamp: "1 minggu lalu",
    isVerifiedMember: true
  },
  {
    id: "r3",
    communitySlug: "react-developers-id",
    reviewerName: "Budi Santoso",
    rating: 5,
    reviewText: "Komunitas React terbesar di Indonesia yang nggak pelit ilmu. Beberapa kali dapet solusi runtime error Next.js dari sesama member di sini dalam hitungan menit.",
    timestamp: "4 hari lalu",
    isVerifiedMember: true
  },
  {
    id: "r4",
    communitySlug: "devops-cloud-indonesia",
    reviewerName: "Deden Kurnia",
    rating: 5,
    reviewText: "Diskusi seputar Kubernetes di grup Telegram ini sangat berbobot harian. Berhasil membantu tim kami menghindari downtime parah minggu lalu.",
    timestamp: "2 minggu lalu",
    isVerifiedMember: true
  },
  {
    id: "r5",
    communitySlug: "design-uiux-indonesia",
    reviewerName: "Fajar Prasetyo",
    rating: 5,
    reviewText: "Portfolio review mingguan di Telegram dapet banyak insight positif mengenai spacing dan konsitensi typography. Figma UI Kits gratisnya mantap.",
    timestamp: "1 hari lalu",
    isVerifiedMember: true
  },
  {
    id: "r6",
    communitySlug: "indie-motion-id",
    reviewerName: "Aulia Putri",
    rating: 4,
    reviewText: "Sangat membantu buat cari info loker Premiere/AE senior. Selalu ada update trend editing montase dan pembagian aset sound effects berkualitas harian.",
    timestamp: "3 hari lalu",
    isVerifiedMember: false
  },
  {
    id: "r7",
    communitySlug: "startup-founders-network",
    reviewerName: "Hendra Wijaya",
    rating: 5,
    reviewText: "Walaupun berbayar, tapi sepadan banget sama database investor dan relasi sesama founder yang didapat. Tidak ada perkumpulan dropshipper bodong.",
    timestamp: "5 hari lalu",
    isVerifiedMember: true
  },
  {
    id: "r8",
    communitySlug: "growth-copywriting-lab",
    reviewerName: "Kartika Sari",
    rating: 5,
    reviewText: "Formula penulisan landing page persuasif yang dibagikan disini meroketkan konversi jualan produk kecantikan saya hingga naik 300%. Mantap!",
    timestamp: "3 minggu lalu",
    isVerifiedMember: true
  },
  {
    id: "r9",
    communitySlug: "freelance-success-indonesia",
    reviewerName: "Rian Aditama",
    rating: 5,
    reviewText: "Dapat kiat tembus Upwork pertama dari sini. Sangat terbantu dengan template kontrak kerja lepas yang dibagikan secara cuma-cuma oleh founder grup.",
    timestamp: "6 hari lalu",
    isVerifiedMember: true
  },
  {
    id: "r10",
    communitySlug: "remote-tech-jobs-id",
    reviewerName: "Nadia Utami",
    rating: 5,
    reviewText: " CV ATS-friendly hasil koreksi komunitas ini langsung dilirik rekruter dari perusahaan Jerman. Jembatan karir remote nomor satu tanah air!",
    timestamp: "12 hari lalu",
    isVerifiedMember: true
  },
  {
    id: "r11",
    communitySlug: "indo-gamers-alliance",
    reviewerName: "Tommy Pratama",
    rating: 5,
    reviewText: "Server mabar terbaik! Dilengkapi dengan perlindungan sensor bot toxic sehingga ramah untuk mabar push-rank santai malam hari pasca pulang kantor.",
    timestamp: "5 hari lalu",
    isVerifiedMember: false
  },
  {
    id: "r12",
    communitySlug: "wibu-santai-id",
    reviewerName: "Diana Rosadi",
    rating: 4,
    reviewText: "Obrolan seputar One Piece dan teori konspirasi jujutsu kaisen-nya seru parah. Event kopi darat regionalnya asyik dan panitianya tertib.",
    timestamp: "1 minggu lalu",
    isVerifiedMember: true
  }
];
