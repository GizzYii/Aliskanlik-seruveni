import React from 'react';
import { X } from 'lucide-react';
import { themes } from '../../constants/themes';

const ThemeModal = ({ isOpen, onClose, currentTheme, onSelect, profile }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-slate-900/80 backdrop-blur-xl z-[60] flex items-center justify-center p-6">
            <div className="bg-white dark:bg-slate-800 w-full max-w-sm rounded-[40px] p-8 animate-in zoom-in-95">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-black uppercase italic tracking-tighter dark:text-white">Tema</h2>
                    <button onClick={onClose} className="dark:text-white"><X className="w-5 h-5" /></button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    {Object.entries(themes).filter(([_, t]) => t.for === 'all' || t.for === profile.gender).map(([key, theme]) => (
                        <button
                            key={key}
                            onClick={() => onSelect(key)}
                            className={`p-4 rounded-3xl border-4 transition-all flex flex-col items-center gap-2 ${currentTheme === key ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20' : 'border-slate-50 dark:border-slate-700'}`}
                        >
                            <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${theme.gradient}`}></div>
                            <span className="font-black text-[9px] uppercase dark:text-slate-300">{theme.name}</span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ThemeModal;
