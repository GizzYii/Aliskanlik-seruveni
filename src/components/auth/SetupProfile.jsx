import React, { useState } from 'react';
import { Rocket, Sparkles } from 'lucide-react';

const SetupProfile = ({ onComplete, darkMode }) => {
    const [form, setForm] = useState({ name: '', age: '', gender: 'boy', avatar: '🧑‍🚀', theme: 'galaxy' });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.name || !form.age) return;
        onComplete({ ...form, age: parseInt(form.age) });
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-6 bg-slate-900 relative overflow-hidden">
            {/* Starry Background */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute bg-white rounded-full animate-pulse"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            width: `${Math.random() * 3 + 1}px`,
                            height: `${Math.random() * 3 + 1}px`,
                            opacity: Math.random() * 0.7 + 0.3,
                            animationDelay: `${Math.random() * 2}s`,
                            animationDuration: `${Math.random() * 3 + 2}s`
                        }}
                    ></div>
                ))}
            </div>

            <div className="glass p-8 rounded-[3rem] w-full max-w-md border-4 border-white/50 relative z-10 animate-in zoom-in-95 duration-500">
                <div className="flex justify-center mb-6 relative">
                    <div className="bg-gradient-to-tr from-indigo-400 to-purple-500 p-6 rounded-full shadow-lg shadow-indigo-500/30 transform hover:rotate-12 transition-transform duration-300">
                        <Rocket className="w-16 h-16 text-white animate-bounce" />
                    </div>
                    <Sparkles className="absolute -top-2 right-20 w-8 h-8 text-yellow-400 animate-spin-slow" />
                </div>

                <h1 className="text-3xl font-black text-center mb-8 text-slate-800 dark:text-white uppercase tracking-tight leading-tight drop-shadow-sm">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">Yıldız Yolculuğu</span>
                    <br />
                    <span className="text-xl opacity-80 font-bold text-slate-600 dark:text-slate-300">Alışkanlık Serüveni</span>
                </h1>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-4">
                        <div className="relative group">
                            <input
                                placeholder="Kahramanın Adı?"
                                className="w-full p-5 bg-indigo-50/50 dark:bg-slate-700/50 border-2 border-indigo-100 dark:border-slate-600 rounded-[2rem] outline-none font-bold text-center text-lg dark:text-white placeholder:text-indigo-300 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100 transition-all"
                                onChange={e => setForm({ ...form, name: e.target.value })}
                                required
                            />
                        </div>
                        <input
                            type="number"
                            placeholder="Yaşı"
                            min="0"
                            max="15"
                            className="w-full p-5 bg-indigo-50/50 dark:bg-slate-700/50 border-2 border-indigo-100 dark:border-slate-600 rounded-[2rem] outline-none font-bold text-center text-lg dark:text-white placeholder:text-indigo-300 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100 transition-all"
                            onChange={e => setForm({ ...form, age: e.target.value })}
                            required
                        />
                    </div>

                    <div className="flex gap-4">
                        <button
                            type="button"
                            onClick={() => setForm({ ...form, gender: 'boy', avatar: '🧑‍🚀' })}
                            className={`flex-1 p-4 rounded-[2rem] font-black flex flex-col items-center gap-1 transition-all duration-300 ${form.gender === 'boy' ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/30 scale-105 transform' : 'bg-slate-100 text-slate-400 hover:bg-slate-200'}`}
                        >
                            <span className="text-3xl">👦</span>
                            <span className="text-xs tracking-widest uppercase">Erkek</span>
                        </button>
                        <button
                            type="button"
                            onClick={() => setForm({ ...form, gender: 'girl', avatar: '👸' })}
                            className={`flex-1 p-4 rounded-[2rem] font-black flex flex-col items-center gap-1 transition-all duration-300 ${form.gender === 'girl' ? 'bg-pink-500 text-white shadow-lg shadow-pink-500/30 scale-105 transform' : 'bg-slate-100 text-slate-400 hover:bg-slate-200'}`}
                        >
                            <span className="text-3xl">👧</span>
                            <span className="text-xs tracking-widest uppercase">Kız</span>
                        </button>
                    </div>

                    <button
                        type="submit"
                        className="w-full p-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-[2rem] font-black shadow-xl shadow-indigo-500/30 uppercase text-sm tracking-widest hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 group"
                    >
                        Serüvene Başla <Rocket className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SetupProfile;
