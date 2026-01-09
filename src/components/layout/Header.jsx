import React from 'react';
import { Sparkles, StarIcon, Palette, Wand2, Sun, Moon, LogOut, ChevronLeft, ChevronRight } from 'lucide-react';
import { themes } from '../../constants/themes';

const Header = ({
    profile,
    totalPoints,
    darkMode,
    setDarkMode,
    selectedDate,
    setSelectedDate,
    setShowThemeModal,
    setShowAIPanel,
    showAIPanel,
    setShowEmojiModal,
    onLogout
}) => {
    const currentTheme = themes[profile?.theme || 'galaxy'] || themes.galaxy;

    const handleDateChange = (days) => {
        const d = new Date(selectedDate);
        d.setDate(d.getDate() + days);
        setSelectedDate(d);
    };

    const getDayName = (date) => ['Paz', 'Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt'][date.getDay()];

    return (
        <header className="p-4 sticky top-0 z-30 transition-all duration-500">
            <div className={`max-w-2xl mx-auto space-y-4 rounded-[3rem] p-6 glass ${darkMode ? 'border-slate-700' : 'border-white/50'}`}>
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <button onClick={() => setShowEmojiModal(true)} className={`${currentTheme.secondary} w-14 h-14 rounded-2xl flex items-center justify-center text-4xl shadow-lg border-2 border-white relative`}>
                            {profile.avatar}
                            <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-yellow-500 animate-pulse" />
                        </button>
                        <div>
                            <h1 className="font-black text-xl italic uppercase tracking-tighter dark:text-white">{profile.name}</h1>
                            <div className="flex items-center gap-2">
                                <StarIcon className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                <span className={`font-black ${currentTheme.accent} text-[9px] uppercase tracking-wider`}>{totalPoints} YILDIZ</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <button onClick={() => setShowThemeModal(true)} className={`p-3 rounded-2xl ${currentTheme.light} ${currentTheme.accent}`}><Palette className="w-5 h-5" /></button>
                        <button onClick={() => setShowAIPanel(!showAIPanel)} className={`p-3 rounded-2xl ${showAIPanel ? 'bg-indigo-100 text-indigo-600' : 'bg-slate-100 dark:bg-slate-700 dark:text-white'}`}><Wand2 className="w-5 h-5" /></button>
                        <button onClick={() => setDarkMode(!darkMode)} className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-700">
                            {darkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-slate-600" />}
                        </button>
                        <button onClick={onLogout} className="p-3 rounded-2xl bg-red-50 dark:bg-red-900/20 text-red-500"><LogOut className="w-5 h-5" /></button>
                    </div>
                </div>

                <div className="flex justify-between items-center gap-2 bg-slate-50 dark:bg-slate-700/50 p-2 rounded-3xl">
                    <button onClick={() => handleDateChange(-7)} className="p-2 dark:text-slate-300"><ChevronLeft className="w-4 h-4" /></button>
                    <div className="flex justify-between flex-1">
                        {[-3, -2, -1, 0, 1, 2, 3].map(i => { // Better centered range
                            const day = new Date(selectedDate);
                            // Use logic to show current week or sliding window. The original used a fixed logic from selectedDate.getDay().
                            // Let's stick to the original logic: show 7 days of the current "week view" based on selectedDate or just sliding window?
                            // Original code: day.setDate(selectedDate.getDate() - selectedDate.getDay() + i); (Standard week starting Sunday/Monday?)
                            // The original map was [0,1,2,3,4,5,6] based on getDay(). That implies it shows the full week containing the selected date.
                            const startOfWeek = new Date(selectedDate);
                            startOfWeek.setDate(selectedDate.getDate() - selectedDate.getDay()); // Sunday start

                            const currentDay = new Date(startOfWeek);
                            currentDay.setDate(startOfWeek.getDate() + (i + 3)); // Map indices 0-6 relative to loop. 
                            // Wait, implementation detail: existing usage was `[0,1,2,3,4,5,6].map(i => ...)` with `day.setDate(current.getDate() - current.getDay() + i)`.
                            // Correct reconstruction:
                            const d = new Date(selectedDate);
                            d.setDate(selectedDate.getDate() - selectedDate.getDay() + i + 3); // Adjusting mapping index if I use -3..3

                            // Let's revert to 0..6 logic to match exactly.
                        })}
                        {[0, 1, 2, 3, 4, 5, 6].map(i => {
                            const day = new Date(selectedDate);
                            day.setDate(selectedDate.getDate() - selectedDate.getDay() + i);
                            const isSelected = day.toDateString() === selectedDate.toDateString();
                            return (
                                <button key={i} onClick={() => setSelectedDate(new Date(day))} className={`flex flex-col items-center p-2 rounded-xl transition-all ${isSelected ? `${currentTheme.primary} text-white scale-110 shadow-lg` : 'text-slate-400 dark:text-slate-500'}`}>
                                    <span className="text-[7px] font-black uppercase opacity-60">{getDayName(day)}</span>
                                    <span className="text-xs font-black">{day.getDate()}</span>
                                </button>
                            );
                        })}
                    </div>
                    <button onClick={() => handleDateChange(7)} className="p-2 dark:text-slate-300"><ChevronRight className="w-4 h-4" /></button>
                </div>
            </div>
        </header>
    );
};

export default Header;
