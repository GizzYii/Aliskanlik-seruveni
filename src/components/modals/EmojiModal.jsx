import React from 'react';
import { X } from 'lucide-react';
import { EMOJI_LIST } from '../../constants/data';

const EmojiModal = ({ isOpen, onClose, currentAvatar, onSelect }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-slate-900/80 backdrop-blur-xl z-[60] flex items-center justify-center p-6">
            <div className="bg-white dark:bg-slate-800 w-full max-w-sm rounded-[40px] p-8 animate-in zoom-in-95">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-black uppercase italic tracking-tighter dark:text-white">Profil</h2>
                    <button onClick={onClose} className="dark:text-white"><X className="w-5 h-5" /></button>
                </div>
                <div className="grid grid-cols-4 gap-4 h-64 overflow-y-auto pr-2">
                    {EMOJI_LIST.map(emoji => (
                        <button
                            key={emoji}
                            onClick={() => onSelect(emoji)}
                            className={`text-3xl p-3 rounded-2xl transition-all ${currentAvatar === emoji ? 'bg-indigo-500 scale-110 shadow-lg text-white' : 'bg-slate-50 dark:bg-slate-700'}`}
                        >
                            {emoji}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default EmojiModal;
