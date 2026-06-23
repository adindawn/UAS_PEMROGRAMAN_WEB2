export default {
    template: `
        <div class="min-h-screen w-full flex items-center justify-center p-6 bg-slate-50/50 font-sans relative overflow-hidden">
            
            <div class="absolute inset-0 overflow-hidden pointer-events-none">
                <div class="absolute -top-40 -right-40 w-[500px] h-[500px] bg-violet-200/30 rounded-full blur-[120px]"></div>
                <div class="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-purple-200/30 rounded-full blur-[120px]"></div>
            </div>

            <div class="relative z-10 w-full max-w-md bg-white p-10 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-violet-100/40 space-y-8 animate-in fade-in zoom-in-95 duration-500">
                
                <div class="flex flex-col items-center space-y-4">
                    <div class="relative group">
                        <div class="w-20 h-20 bg-gradient-to-br from-violet-400 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg shadow-violet-200/80 transition-transform group-hover:scale-105 duration-300 transform rotate-3">
                            <span class="text-3xl transform -rotate-3">📖</span>
                        </div>
                        <div class="absolute -bottom-1 -right-1 w-6 h-6 bg-white rounded-full border-2 border-violet-100 flex items-center justify-center text-xs shadow-sm"></div>
                    </div>
                    <div class="text-center space-y-1">
                        <h2 class="text-2xl font-black text-slate-800 tracking-tight">BookFlow Library</h2>
                        <p class="text-[10px] font-black text-violet-400 uppercase tracking-widest">Sistem Akses Dashboard</p>
                    </div>
                </div>

                <form @submit.prevent="submitLogin" class="space-y-5">
                    <div class="space-y-1.5">
                        <label class="block text-xs font-black text-slate-500 uppercase tracking-wider">Username Admin</label>
                        <div class="relative">
                            <span class="absolute inset-y-0 left-0 pl-4 flex items-center text-slate-400 select-none pointer-events-none">👤</span>
                            <input v-model="username" type="text" 
                                   class="w-full pl-11 pr-4 py-3.5 bg-slate-50/80 border border-slate-200/80 rounded-xl font-bold text-sm text-slate-700 placeholder:text-slate-400 focus:bg-white focus:border-violet-400 focus:ring-2 focus:ring-violet-100 outline-none transition-all shadow-inner" 
                                   placeholder="Masukkan username..." required>
                        </div>
                    </div>
                    
                    <div class="space-y-1.5">
                        <label class="block text-xs font-black text-slate-500 uppercase tracking-wider">Kata Sandi</label>
                        <div class="relative">
                            <span class="absolute inset-y-0 left-0 pl-4 flex items-center text-slate-400 select-none pointer-events-none">🔒</span>
                            <input v-model="password" type="password" 
                                   class="w-full pl-11 pr-4 py-3.5 bg-slate-50/80 border border-slate-200/80 rounded-xl font-bold text-sm text-slate-700 placeholder:text-slate-400 focus:bg-white focus:border-violet-400 focus:ring-2 focus:ring-violet-100 outline-none transition-all shadow-inner" 
                                   placeholder="••••••••" required>
                        </div>
                    </div>
                    
                    <button type="submit" 
                            class="w-full py-4 mt-2 bg-purple-300 hover:bg-purple-400 text-white font-black text-xs rounded-xl shadow-lg shadow-purple-100 transition-all active:scale-95 uppercase tracking-widest">
                        Masuk Aplikasi
                    </button>
                </form>

                <div class="text-center">
                    <p class="text-[10px] font-bold text-slate-400 uppercase tracking-wider">© 2026 Universitas Pelita Bangsa</p>
                </div>
            </div>
        </div>
    `,
    data() { 
        return { 
            username: '', 
            password: '' 
        } 
    },
    methods: {
        submitLogin() {
            if (this.username === 'admin' && this.password === 'admin_12345') {
                
                localStorage.setItem('isLoggedIn', 'true');
                localStorage.setItem('token', 'KODETOKENSUPERAMANADMIN');
                
                if (this.$root && this.$root.$data) {
                    this.$root.isLoggedIn = true;
                }

                alert('Login Berhasil! Selamat datang admin. ✨');
                this.$router.push('/dashboard');
            } else {
                alert('Kombinasi Username & Password salah.');
            }
        }
    }
}