const Dashboard = {
    template: `
        <div class="min-h-screen bg-gradient-to-tr from-violet-100 via-purple-50 to-indigo-100 relative overflow-hidden font-sans">
            
            <div class="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-purple-300/30 rounded-full blur-[80px] pointer-events-none"></div>
            <div class="absolute bottom-[-5%] right-[-5%] w-[35vw] h-[35vw] bg-indigo-300/30 rounded-full blur-[80px] pointer-events-none"></div>
            <div class="absolute top-[40%] left-[50%] w-[25vw] h-[25vw] bg-violet-300/20 rounded-full blur-[60px] pointer-events-none"></div>

            <div class="space-y-8 max-w-[1600px] mx-auto mt-6 px-4 md:px-6 pb-20 relative z-10 animate-in fade-in duration-700">
                
                <div class="bg-white/40 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/60 shadow-xl shadow-purple-200/40 relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div class="space-y-1 relative z-10">
                        <h2 class="text-2xl md:text-3xl font-black text-slate-800 tracking-tight flex items-center gap-2">
                            Dashboard Utama
                        </h2>
                        <p class="text-xs font-bold text-slate-500/90 tracking-wide">
                            Pantau sirkulasi koleksi e-Library, ketersediaan stok buku, dan log riwayat peminjaman mahasiswa.
                        </p>
                    </div>
                    <button @click="bukaModalTambah" class="px-6 py-3.5 bg-gradient-to-r from-purple-400 to-indigo-400 hover:from-purple-500 hover:to-indigo-500 text-white rounded-2xl font-black text-xs shadow-lg shadow-purple-200/50 border border-white/20 transition-all active:scale-95 flex items-center justify-center gap-2 self-start md:self-auto group">
                        Tambah Buku Baru
                    </button>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div class="bg-white/40 backdrop-blur-xl p-6 rounded-[2.5rem text-slate-800 border border-white/60 shadow-lg shadow-purple-100/30 flex items-center gap-5 relative overflow-hidden group transition-all duration-500 hover:shadow-2xl hover:shadow-purple-300/30 hover:-translate-y-1.5">
                        <div class="absolute top-0 right-0 w-32 h-32 bg-purple-200/30 rounded-full blur-xl -mr-5 -mt-5 transition-all duration-700 group-hover:scale-125"></div>
                        <div class="absolute -right-4 -bottom-4 text-purple-300/10 text-8xl font-black select-none transform rotate-12 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">📚</div>
                        <div class="w-14 h-14 bg-purple-100/80 text-purple-500 rounded-2xl flex items-center justify-center text-2xl backdrop-blur-md shadow-sm border border-white/60 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">📖</div>
                        <div class="relative z-10">
                            <span class="block text-[11px] font-black uppercase tracking-widest text-slate-400/90">Total Judul</span>
                            <span class="block text-2xl font-black mt-0.5 leading-none tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">{{ listBuku.length }} Koleksi</span>
                        </div>
                    </div>

                    <div class="bg-white/40 backdrop-blur-xl p-6 rounded-[2.5rem] text-slate-800 border border-white/60 shadow-lg shadow-purple-100/20 flex items-center gap-5 relative overflow-hidden group transition-all duration-500 hover:shadow-2xl hover:shadow-purple-300/20 hover:-translate-y-1.5">
                        <div class="absolute top-0 right-0 w-32 h-32 bg-emerald-200/20 rounded-full blur-xl -mr-5 -mt-5 transition-all duration-700 group-hover:scale-125"></div>
                        <div class="absolute -right-4 -bottom-4 text-emerald-300/10 text-8xl font-black select-none transform rotate-12 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">📦</div>
                        <div class="w-14 h-14 bg-emerald-100/80 text-emerald-600 rounded-2xl flex items-center justify-center text-2xl backdrop-blur-md shadow-sm border border-white/60 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">📦</div>
                        <div class="relative z-10">
                            <span class="block text-[11px] font-black uppercase tracking-widest text-slate-400/90">Total Stok</span>
                            <span class="block text-2xl font-black mt-0.5 leading-none tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">{{ totalStok }} Buku</span>
                        </div>
                    </div>

                    <div class="bg-white/40 backdrop-blur-xl p-6 rounded-[2.5rem] text-slate-800 border border-white/60 shadow-lg shadow-purple-100/20 flex items-center gap-5 relative overflow-hidden group transition-all duration-500 hover:shadow-2xl hover:shadow-purple-300/20 hover:-translate-y-1.5">
                        <div class="absolute top-0 right-0 w-32 h-32 bg-rose-200/20 rounded-full blur-xl -mr-5 -mt-5 transition-all duration-700 group-hover:scale-125"></div>
                        <div class="absolute -right-4 -bottom-4 text-rose-300/10 text-8xl font-black select-none transform rotate-12 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">⚠️</div>
                        <div class="w-14 h-14 bg-rose-100/80 text-rose-500 rounded-2xl flex items-center justify-center text-2xl backdrop-blur-md shadow-sm border border-white/60 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">⚠️</div>
                        <div class="relative z-10">
                            <span class="block text-[11px] font-black uppercase tracking-widest text-slate-400/90">Stok Kosong</span>
                            <span class="block text-2xl font-black mt-0.5 leading-none tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-pink-600">{{ stokKosong }} Judul</span>
                        </div>
                    </div>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    
                    <div class="bg-white/40 backdrop-blur-xl p-6 rounded-[2.5rem] border border-white/60 shadow-xl shadow-purple-100/30 space-y-5">
                        <div>
                            <h3 class="text-lg font-black text-slate-800 tracking-tight flex items-center gap-2"> Manajemen Koleksi</h3>
                            <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-0.5">Sirkulasi data buku aktif.</p>
                        </div>

                        <div class="overflow-x-auto rounded-[2rem] border border-white/60 shadow-sm bg-white/40">
                            <table class="w-full text-left border-collapse">
                                <thead>
                                    <tr class="bg-white/60 text-slate-500 text-[10px] font-black uppercase tracking-widest border-b border-white/50">
                                        <th class="px-5 py-4.5">Judul Buku</th>
                                        <th class="px-5 py-4.5">Penulis</th>
                                        <th class="px-5 py-4.5">Stok</th>
                                        <th class="px-5 py-4.5 text-center">Aksi</th>
                                    </tr>
                                </thead>
                                <tbody class="divide-y divide-white/40 text-xs font-bold text-slate-700">
                                    <tr v-for="buku in listBuku" :key="buku.id" class="hover:bg-white/60 transition-colors duration-200">
                                        <td class="px-5 py-4.5">
                                            <b class="block text-slate-800 leading-tight hover:text-purple-600 transition-colors">{{ buku.judul }}</b>
                                        </td>
                                        <td class="px-5 py-4.5 text-purple-600 font-extrabold">
                                             {{ buku.penulis }}
                                        </td>
                                        <td class="px-5 py-4.5">
                                            <span :class="parseInt(buku.stok) > 0 ? 'text-emerald-600 bg-emerald-100/70 border border-emerald-200/40 px-2.5 py-1 rounded-xl text-[10px] font-black' : 'text-rose-500 bg-rose-100/70 border border-rose-200/40 px-2.5 py-1 rounded-xl text-[10px] font-black'">
                                                {{ buku.stok }} Buku
                                            </span>
                                        </td>
                                        <td class="px-5 py-4.5">
                                            <div class="flex items-center justify-center gap-1.5">
                                                <button v-if="parseInt(buku.stok) > 0" @click="bukaModalPinjam(buku)" class="px-3 py-1.5 bg-purple-500 hover:bg-purple-600 text-white rounded-xl text-[10px] font-black transition-all shadow-sm active:scale-95" title="Pinjam Buku">🍭 Pinjam</button>
                                                <button @click="editBuku(buku)" class="p-2 bg-amber-100/80 text-amber-600 hover:bg-amber-200 border border-amber-200/40 rounded-xl transition-all shadow-sm active:scale-95" title="Ubah Data">✏️</button>
                                                <button @click="hapusBuku(buku.id)" class="p-2 bg-rose-100/80 text-rose-600 hover:bg-rose-200 border border-rose-200/40 rounded-xl transition-all shadow-sm active:scale-95" title="Hapus Buku">🗑️</button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr v-if="listBuku.length === 0">
                                        <td colspan="4" class="text-center py-12 text-slate-400 font-bold bg-white/10">Data Buku masih kosong (•_•)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="bg-white/40 backdrop-blur-xl p-6 rounded-[2.5rem] border border-white/60 shadow-xl shadow-purple-100/30 space-y-5">
                        <div>
                            <h3 class="text-lg font-black text-slate-800 tracking-tight flex items-center gap-2">Riwayat Peminjaman</h3>
                            <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-0.5">Log sirkulasi mahasiswa.</p>
                        </div>

                        <div class="overflow-x-auto rounded-[2rem] border border-white/60 shadow-sm bg-white/40">
                            <table class="w-full text-left border-collapse">
                                <thead>
                                    <tr class="bg-white/60 text-slate-500 text-[10px] font-black uppercase tracking-widest border-b border-white/50">
                                        <th class="px-5 py-4.5">Peminjam & Buku</th>
                                        <th class="px-5 py-4.5">Status</th>
                                        <th class="px-5 py-4.5 text-center">Respon</th>
                                    </tr>
                                </thead>
                                <tbody class="divide-y divide-white/40 text-xs font-bold text-slate-700">
                                    <tr v-for="log in listPeminjaman" :key="log.id" class="hover:bg-white/60 transition-colors duration-200">
                                        <td class="px-5 py-4.5">
                                            <b class="block text-slate-800 leading-tight">{{ log.nama_peminjam }}</b>
                                            <span class="text-[10px] text-purple-500 font-bold mt-0.5 block pl-4">📘 {{ log.judul_buku || 'Buku Terhapus' }}</span>
                                        </td>
                                        <td class="px-5 py-4.5">
                                            <span class="text-purple-600 bg-purple-100/80 border border-purple-200/40 px-2.5 py-1 rounded-xl text-[9px] uppercase font-black tracking-widest shadow-sm">
                                                Aktif
                                            </span>
                                        </td>
                                        <td class="px-5 py-4.5">
                                            <div class="flex items-center justify-center">
                                                <button @click="kembalikanBuku(log.id)" class="px-4 py-1.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-black text-[10px] transition-all shadow-md shadow-emerald-100 border border-white/10 active:scale-95">🐾 Selesai</button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr v-if="listPeminjaman.length === 0">
                                        <td colspan="3" class="text-center py-12 text-slate-400 font-bold bg-white/10">Tidak ada pinjaman aktif o(〃＾▽＾〃)o</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <div v-if="showModal" class="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/20 backdrop-blur-md p-4">
                <div class="bg-white/90 backdrop-blur-xl w-full max-w-md p-8 rounded-[2rem] border border-white/80 shadow-2xl shadow-purple-200/40 space-y-6 animate-in zoom-in-95 duration-200">
                    <div>
                        <p class="text-[11px] font-extrabold text-slate-400 uppercase tracking-widest">
                            {{ isEditMode ? 'ISI DETAIL KELENGKAPAN KATALOG' : 'ISI DETAIL KELENGKAPAN KATALOG' }}
                        </p>
                    </div>

                    <div class="space-y-5">
                        <div>
                            <label class="block text-[11px] font-extrabold text-slate-500/90 mb-2 uppercase tracking-wider">Judul Buku</label>
                            <input v-model="formData.judul" type="text" placeholder="Masukkan judul buku..." class="w-full px-5 py-3.5 bg-[#F3F5F9] rounded-xl font-semibold text-sm text-slate-800 placeholder-slate-400 focus:bg-white focus:border-purple-400 focus:ring-4 focus:ring-purple-100/50 outline-none transition-all border-2 border-transparent" />
                        </div>
                        <div>
                            <label class="block text-[11px] font-extrabold text-slate-500/90 mb-2 uppercase tracking-wider">Nama Penulis</label>
                            <input v-model="formData.penulis" type="text" placeholder="Masukkan nama penulis..." class="w-full px-5 py-3.5 bg-[#F3F5F9] rounded-xl font-semibold text-sm text-slate-800 placeholder-slate-400 focus:bg-white focus:border-purple-400 focus:ring-4 focus:ring-purple-100/50 outline-none transition-all border-2 border-transparent" />
                        </div>
                        <div>
                            <label class="block text-[11px] font-extrabold text-slate-500/90 mb-2 uppercase tracking-wider">Kategori Buku</label>
                            <select v-model="formData.kategori_id" class="w-full px-5 py-3.5 bg-[#F3F5F9] rounded-xl font-semibold text-sm text-slate-700 focus:bg-white focus:border-purple-400 focus:ring-4 focus:ring-purple-100/50 outline-none transition-all border-2 border-transparent">
                                <option value="" disabled selected>-- Pilih Kategori --</option>
                                <option v-for="kat in listKategori" :key="kat.id" :value="kat.id">
                                    {{ kat.nama_kategori }}
                                </option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-[11px] font-extrabold text-slate-500/90 mb-2 uppercase tracking-wider">Jumlah Stok</label>
                            <input v-model="formData.stok" type="number" placeholder="0" class="w-full px-5 py-3.5 bg-[#F3F5F9] rounded-xl font-semibold text-sm text-slate-800 placeholder-slate-400 focus:bg-white focus:border-purple-400 focus:ring-4 focus:ring-purple-100/50 outline-none transition-all border-2 border-transparent" />
                        </div>
                    </div>

                    <div class="flex gap-4 pt-2">
                        <button @click="tutupModal" class="flex-1 py-3.5 bg-[#F3F5F9] hover:bg-slate-200 text-slate-500 font-extrabold text-xs rounded-xl transition-all uppercase tracking-wider">
                            Batal
                        </button>
                        <button @click="simpanData" class="flex-1 py-3.5 bg-gradient-to-r from-purple-400 to-indigo-400 hover:from-purple-500 hover:to-indigo-500 text-white font-extrabold text-xs rounded-xl shadow-lg shadow-purple-200/50 transition-all uppercase tracking-wider">
                            Simpan
                        </button>
                    </div>
                </div>
            </div>

            <div v-if="showModalPinjam" class="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/20 backdrop-blur-md p-4">
                <div class="bg-white/90 backdrop-blur-xl w-full max-w-md p-8 rounded-[2rem] border border-white/80 shadow-2xl shadow-purple-200/40 space-y-6 animate-in zoom-in-95 duration-200">
                    <div>
                        <h4 class="text-xl font-black text-slate-800 tracking-tight">Formulir Pinjam Buku</h4>
                        <p class="text-[11px] font-black text-slate-400 uppercase tracking-wider mt-0.5">Konfirmasi pencatatan sirkulasi buku.</p>
                    </div>

                    <div class="p-4 bg-purple-100/60 border border-white/80 rounded-2xl space-y-1 backdrop-blur-sm shadow-inner">
                        <span class="block text-[10px] font-black uppercase tracking-wider text-purple-400">Buku yang dipilih:</span>
                        <span class="block text-sm font-black text-slate-800 leading-tight">{{ dataBukuDipilih.judul }}</span>
                        <span class="block text-xs font-bold text-slate-500 mt-0.5 pl-4">Penulis: {{ dataBukuDipilih.penulis }}</span>
                    </div>

                    <div class="space-y-2">
                        <label class="block text-xs font-black text-slate-500 uppercase tracking-wider">Nama Lengkap Peminjam</label>
                        <input v-model="formPinjam.nama_peminjam" type="text" placeholder="Masukkan nama mahasiswa..." class="w-full px-5 py-3.5 bg-[#F3F5F9] rounded-xl font-semibold text-sm text-slate-800 placeholder-slate-400 focus:bg-white focus:border-purple-400 focus:ring-4 focus:ring-purple-100/50 outline-none transition-all border-2 border-transparent" />
                    </div>

                    <div class="flex gap-4 pt-2">
                        <button @click="tutupModalPinjam" class="flex-1 py-3.5 bg-[#F3F5F9] hover:bg-slate-200 text-slate-500 font-extrabold text-xs rounded-xl transition-all uppercase tracking-wider">
                            Batal
                        </button>
                        <button @click="prosesPinjamBuku" class="flex-1 py-3.5 bg-gradient-to-r from-purple-400 to-indigo-400 hover:from-purple-500 hover:to-indigo-500 text-white font-extrabold text-xs rounded-xl shadow-lg shadow-purple-200/50 transition-all uppercase tracking-wider">
                            Konfirmasi
                        </button>
                    </div>
                </div>
            </div>

        </div>
    `,
    data() {
        return {
            listBuku: [],
            listPeminjaman: [],
            listKategori: [], 
            showModal: false,
            isEditMode: false,
            showModalPinjam: false,
            dataBukuDipilih: {},
            formPinjam: { nama_peminjam: '' },
            formData: { id: null, judul: '', penulis: '', kategori_id: '', stok: '' }
        };
    },
    computed: {
        totalStok() {
            return this.listBuku.reduce((acc, buku) => acc + parseInt(buku.stok || 0), 0);
        },
        stokKosong() {
            return this.listBuku.filter(buku => parseInt(buku.stok || 0) === 0).length;
        }
    },
    methods: {
        async fetchAllData() {
            try {
                const resBuku = await axios.get('http://localhost:8080/api/buku');
                this.listBuku = resBuku.data;
                const resPinjam = await axios.get('http://localhost:8080/api/peminjaman');
                this.listPeminjaman = resPinjam.data;
            } catch (err) { console.error("Gagal sirkulasi data API:", err); }
        },
        async fetchKategori() {
            try {
                const response = await axios.get('http://localhost:8080/api/kategori');
                this.listKategori = response.data;
            } catch (err) { console.error("Gagal memuat data kategori:", err); }
        },
        bukaModalTambah() {
            this.isEditMode = false;
            this.formData = { id: null, judul: '', penulis: '', kategori_id: '', stok: '' };
            this.showModal = true;
        },
        editBuku(buku) {
            this.isEditMode = true;
            this.formData = { id: buku.id, judul: buku.judul, penulis: buku.penulis, kategori_id: buku.kategori_id || '', stok: buku.stok };
            this.showModal = true;
        },
        tutupModal() { this.showModal = false; },
        bukaModalPinjam(buku) {
            this.dataBukuDipilih = buku;
            this.formPinjam.nama_peminjam = '';
            this.showModalPinjam = true;
        },
        tutupModalPinjam() {
            this.showModalPinjam = false;
            this.dataBukuDipilih = {};
        },
        prosesPinjamBuku() {
            if (!this.formPinjam.nama_peminjam.trim()) {
                alert("Nama peminjam wajib diisi!");
                return;
            }
            const token = localStorage.getItem('token');
            const configHeaders = { headers: { 'Authorization': `Bearer ${token}` } };
            const payloadPinjam = { buku_id: this.dataBukuDipilih.id, nama_peminjam: this.formPinjam.nama_peminjam };

            axios.post('http://localhost:8080/api/peminjaman', payloadPinjam, configHeaders)
            .then(() => {
                alert(`Berhasil meminjamkan buku "${this.dataBukuDipilih.judul}"!`);
                this.tutupModalPinjam();
                this.fetchAllData();
            })
            .catch((error) => {
                console.error("Error sirkulasi pinjam:", error);
                alert("Gagal memproses peminjaman buku.");
            });
        },
        simpanData() {
            const { id, judul, penulis, kategori_id, stok } = this.formData;
            if (!judul || !penulis || !kategori_id || !stok) {
                let kolomKosong = [];
                if (!judul) kolomKosong.push("Judul Buku");
                if (!penulis) kolomKosong.push("Nama Penulis");
                if (!kategori_id) kolomKosong.push("Kategori Buku");
                if (!stok) kolomKosong.push("Jumlah Stok");
                alert("Harap isi kolom berikut: " + kolomKosong.join(", "));
                return;
            }
            const token = localStorage.getItem('token');

            if (this.isEditMode) {
                const payloadDataWithSpoofing = new URLSearchParams();
                payloadDataWithSpoofing.append('_method', 'PUT');
                payloadDataWithSpoofing.append('judul', judul);
                payloadDataWithSpoofing.append('penulis', penulis);
                payloadDataWithSpoofing.append('stok', parseInt(stok));
                payloadDataWithSpoofing.append('kategori_id', kategori_id); 

                const configHeaders = {
                    headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/x-www-form-urlencoded' }
                };

                axios.post(`http://localhost:8080/api/buku/${id}`, payloadDataWithSpoofing, configHeaders)
                .then(() => {
                    alert("Buku Berhasil Diperbarui!");
                    this.tutupModal();
                    this.fetchAllData();
                })
                .catch((error) => {
                    console.error("Detail Error Perbarui Buku:", error.response);
                    alert("Gagal memperbarui data.");
                });
            } else {
                const payloadData = { judul, penulis, stok: parseInt(stok), kategori_id: parseInt(kategori_id) };
                const configHeaders = { headers: { 'Authorization': `Bearer ${token}` } };

                axios.post('http://localhost:8080/api/buku', payloadData, configHeaders)
                .then(() => {
                    alert("Buku Berhasil Ditambahkan!");
                    this.tutupModal();
                    this.fetchAllData();
                })
                .catch((error) => {
                    console.error(error);
                    alert("Gagal menambah data buku. Pastikan token valid.");
                });
            }
        },
        hapusBuku(id) {
            if (!confirm("Apakah Anda yakin ingin menghapus buku ini dari katalog?")) return;
            const token = localStorage.getItem('token');
            axios.delete(`http://localhost:8080/api/buku/${id}`, {
                headers: { 'Authorization': `Bearer ${token}` }
            })
            .then(() => { alert("Buku Berhasil Dihapus!"); this.fetchAllData(); })
            .catch(() => alert("Gagal menghapus data."));
        },
        kembalikanBuku(id) {
            if (!confirm("Konfirmasi pengembalian buku?")) return;
            const token = localStorage.getItem('token');
            axios.delete(`http://localhost:8080/api/peminjaman/${id}`, {
                headers: { 'Authorization': `Bearer ${token}` }
            })
            .then(() => { alert("Buku Berhasil Dikembalikan!"); this.fetchAllData(); })
            .catch(() => alert("Gagal memproses respon balik."));
        }
    },
    mounted() {
        this.fetchAllData();
        this.fetchKategori(); 
    }
};

export default Dashboard;