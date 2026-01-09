import React from 'react';
import { Compass, CheckCircle2, Trash2 } from 'lucide-react';
import { themes } from '../../constants/themes';

const TaskList = ({ tasks, profile, selectedDate, onComplete, onDelete }) => {
    const currentTheme = themes[profile?.theme || 'galaxy'] || themes.galaxy;

    // Filter logic needs to be robust
    // "everyday" -> always show
    // "boy" / "girl" specific logic from original code? Original code filtered by category: 'everyday' or (isWeekend ? 'weekend' : 'weekday')
    // Original filteredTasks:
    // const isW = [0, 6].includes(selectedDate.getDay());
    // return tasks.filter(t => t.category === 'everyday' || t.category === (isW ? 'weekend' : 'weekday'));

    const isWeekend = [0, 6].includes(selectedDate.getDay());
    const filteredTasks = tasks.filter(t => t.category === 'everyday' || t.category === (isWeekend ? 'weekend' : 'weekday'));

    const dateStr = selectedDate.toISOString().split('T')[0];

    return (
        <div className="space-y-4">
            <div className="flex items-center gap-2 px-2 text-slate-400 font-black text-[9px] uppercase italic tracking-widest">
                <Compass className="w-4 h-4" /> BUGÜNKÜ GÖREVLER
            </div>
            <div className="grid gap-4">
                {filteredTasks.length === 0 && (
                    <div className="text-center py-12 text-slate-400 text-sm font-bold">
                        Liste boş. <br /> "+" butonuyla görev ekle!
                    </div>
                )}
                {filteredTasks.map(task => {
                    const isDone = task.completedDates?.includes(dateStr);
                    return (
                        <div key={task.id} className={`p-5 rounded-[2rem] border-4 transition-all flex items-center justify-between group hover:scale-[1.02] duration-300 ${isDone ? `${currentTheme.light} ${currentTheme.border}` : 'glass-card border-transparent bg-white/60'}`}>
                            <div className="flex items-center gap-4">
                                <div className="text-4xl bg-white/50 backdrop-blur-sm dark:bg-slate-700 w-16 h-16 rounded-[1.5rem] flex items-center justify-center group-hover:rotate-12 transition-transform">
                                    {task.icon}
                                </div>
                                <div>
                                    <h3 className={`font-black text-lg uppercase tracking-tight dark:text-white ${isDone ? 'line-through opacity-40' : ''}`}>
                                        {task.title}
                                    </h3>
                                    <span className="text-[9px] font-black bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-full uppercase">
                                        +{task.points} Yıldız
                                    </span>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => onComplete(task)}
                                    disabled={isDone}
                                    className={`p-4 rounded-2xl shadow-lg transition-all active:scale-90 ${isDone ? 'bg-green-500 text-white' : 'bg-white dark:bg-slate-700 border-2 border-slate-100 dark:border-slate-600 text-slate-200'}`}
                                >
                                    <CheckCircle2 className="w-7 h-7" />
                                </button>
                                <button
                                    onClick={() => onDelete(task.id)}
                                    className="p-2 opacity-0 group-hover:opacity-100 text-red-500 transition-opacity"
                                >
                                    <Trash2 className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default TaskList;
