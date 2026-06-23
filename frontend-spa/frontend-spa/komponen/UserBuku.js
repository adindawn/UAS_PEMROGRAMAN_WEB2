export default {
    template: `
        <div class="min-h-screen bg-violet-50/30">
            <div class="space-y-12 max-w-7xl mx-auto mt-10 px-6 pb-20 animate-in fade-in duration-700">
                
                <div class="relative overflow-hidden bg-gradient-to-r from-violet-500 to-indigo-500 p-12 rounded-[2.5rem] text-white shadow-2xl shadow-violet-300/50">
                    <h2 class="text-5xl font-black tracking-tighter mb-3">📚 BookFlow E-Library</h2>
                    <p class="text-violet-50 text-lg font-medium opacity-90 max-w-lg">
                        Jelajahi koleksi novel & buku eksklusif kami. Pinjam dengan mudah dan nikmati tanpa batas.
                    </p>
                </div>

                <div class="max-w-full px-1">
                    <div class="relative bg-white rounded-2xl border-2 border-violet-100 shadow-md shadow-violet-100/60 focus-within:border-violet-400 focus-within:ring-4 focus-within:ring-violet-100 transition-all duration-300">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none text-xl drop-shadow-sm">
                            🔍
                        </div>
                        <input 
                            v-model="searchQuery" 
                            type="text" 
                            placeholder="Cari novel atau penulis favoritmu di sini..." 
                            class="w-full pl-14 pr-12 py-4 bg-transparent text-slate-700 placeholder-violet-300 font-bold rounded-2xl outline-none text-base"
                        />
                        <button 
                            v-if="searchQuery" 
                            @click="searchQuery = ''" 
                            class="absolute inset-y-0 right-0 flex items-center pr-5 text-violet-400 hover:text-violet-600 transition-colors font-black text-lg"
                        >
                            ✕
                        </button>
                    </div>
                </div>

                <div v-if="filteredBuku.length > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div v-for="buku in filteredBuku" :key="buku.id" 
                         class="group bg-white p-7 rounded-[2rem] border border-violet-50 shadow-lg shadow-violet-100/30 hover:shadow-2xl hover:shadow-violet-200/50 transition-all duration-500 flex flex-col justify-between hover:-translate-y-2">
                        
                        <div>
                            <div class="w-16 h-16 bg-violet-50 text-violet-500 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-inner">📖</div>
                            <h3 class="font-bold text-slate-800 text-xl mb-1 leading-tight">{{ buku.judul }}</h3>
                            <p class="text-violet-500 text-sm font-bold mb-6">{{ buku.penulis }}</p>
                        </div>

                        <div>
                            <div class="flex justify-between items-center mb-6 text-[11px] font-black uppercase tracking-wider">
                                <span :class="parseInt(buku.stok) > 0 ? 'text-violet-600 bg-violet-100 px-3 py-1 rounded-full' : 'text-rose-500 bg-rose-50 px-3 py-1 rounded-full'">
                                    {{ parseInt(buku.stok) > 0 ? '● Tersedia' : '● Habis' }}
                                </span>
                                <span class="text-slate-400">{{ buku.stok }} Unit</span>
                            </div>

                            <button @click="pinjamBuku(buku)" 
                                    :disabled="parseInt(buku.stok) <= 0"
                                    class="w-full py-3.5 rounded-2xl font-bold text-sm transition-all duration-300 shadow-md active:scale-95"
                                    :class="parseInt(buku.stok) > 0 ? 'bg-violet-400 hover:bg-violet-500 text-white' : 'bg-slate-100 text-slate-400 cursor-not-allowed'">
                                {{ parseInt(buku.stok) > 0 ? 'Pinjam Sekarang' : 'Stok Kosong' }}
                            </button>
                        </div>
                    </div>
                </div>

                <div v-else-if="listBuku.length > 0" class="text-center py-16 bg-white rounded-[2rem] border border-dashed border-violet-200 max-w-md mx-auto p-8">
                    <p class="text-4xl animate-bounce">❌</p>
                    <h4 class="font-bold text-slate-700 text-lg mt-3">Buku Tidak Ditemukan</h4>
                    <p class="text-sm text-slate-400 mt-1">Tidak ada koleksi novel bernama "{{ searchQuery }}".</p>
                </div>
            </div>
        </div>
    `,
    data() { 
        return { 
            listBuku: [],
            searchQuery: '' 
        } 
    },
    computed: {
        // Fitur Filter Pencarian Otomatis Berdasarkan Judul & Penulis
        filteredBuku() {
            const query = this.searchQuery.toLowerCase().trim();
            if (!query) return this.listBuku;
            return this.listBuku.filter(buku => {
                const judul = buku.judul ? buku.judul.toLowerCase() : '';
                const penulis = buku.penulis ? buku.penulis.toLowerCase() : '';
                return judul.includes(query) || penulis.includes(query);
            });
        }
    },
    methods: {
        async fetchBuku() {
            try {
                const response = await axios.get('http://localhost:8080/api/buku');
                this.listBuku = response.data;
            } catch (error) { 
                console.error("Gagal memuat katalog buku:", error); 
            }
        },
        pinjamBuku(buku) {
            const nama = prompt("Masukkan nama lengkap Anda:");
            if (!nama || nama.trim() === "") return;

            const token = localStorage.getItem('token'); 

            axios.post('http://localhost:8080/api/peminjaman', 
                { 
                    buku_id: buku.id, 
                    nama_peminjam: nama 
                }, 
                {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                }
            )
            .then(() => { 
                alert("Sukses meminjam novel!"); 
                buku.stok = parseInt(buku.stok) - 1; 
            })
            .catch((error) => {
                if (error.response && error.response.status === 401) {
                    alert("Gagal meminjam: Sesi Anda tidak valid atau telah berakhir. Silakan login kembali.");
                } else {
                    alert("Gagal meminjam. Terjadi kesalahan pada server.");
                }
                console.error(error);
            });
        }
    },
    mounted() { 
        this.fetchBuku(); 
    }
};