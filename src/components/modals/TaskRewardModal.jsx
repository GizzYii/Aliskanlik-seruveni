import React, { useState } from 'react';
import { X } from 'lucide-react';

const TaskRewardModal = ({ isOpen, type, onClose, onAdd }) => {
    // type: 'task' or 'reward'
    const [taskForm, setTaskForm] = useState({ title: '', icon: '🌟', points: 10, category: 'everyday' });
    const [rewardForm, setRewardForm] = useState({ title: '', icon: '🎁', cost: 100 });

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (type === 'task') {
            onAdd(taskForm);
            setTaskForm({ title: '', icon: '🌟', points: 10, category: 'everyday' });
        } else {
            onAdd(rewardForm);
            setRewardForm({ title: '', icon: '🎁', cost: 100 });
        }
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-md z-50 flex items-center justify-center p-6">
            <div className="glass p-8 rounded-[3rem] w-full max-w-md shadow-2xl animate-in zoom-in-95 border-none relative">
                <button
                    onClick={onClose}
                    type="button"
                    className="absolute top-6 right-6 p-2 bg-white/20 rounded-full hover:bg-red-500/20 hover:text-red-500 transition-colors z-50 cursor-pointer"
                >
                    <X className="w-5 h-5" />
                </button>
                <h2 className="text-2xl font-black mb-6 uppercase text-center italic tracking-tight dark:text-white drop-shadow-sm">
                    {type === 'task' ? 'Yeni Görev' : 'Yeni Ödül'}
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        className="w-full p-5 bg-indigo-50/50 dark:bg-slate-700/50 rounded-[2rem] font-bold dark:text-white outline-none text-center border-2 border-transparent focus:border-indigo-400 focus:bg-white transition-all"
                        placeholder={type === 'task' ? "Görev Adı" : "Ödül Adı"}
                        value={type === 'task' ? taskForm.title : rewardForm.title}
                        onChange={e => type === 'task' ? setTaskForm({ ...taskForm, title: e.target.value }) : setRewardForm({ ...rewardForm, title: e.target.value })}
                        required
                    />
                    <div className="flex gap-4">
                        <input
                            className="w-1/3 p-4 bg-slate-50 dark:bg-slate-700 rounded-2xl text-center text-2xl outline-none dark:text-white"
                            value={type === 'task' ? taskForm.icon : rewardForm.icon}
                            onChange={e => type === 'task' ? setTaskForm({ ...taskForm, icon: e.target.value }) : setRewardForm({ ...rewardForm, icon: e.target.value })}
                        />
                        <input
                            type="number"
                            min="1"
                            className="flex-1 p-4 bg-slate-50 dark:bg-slate-700 rounded-2xl font-bold dark:text-white outline-none text-center"
                            placeholder={type === 'task' ? "Puan" : "Maliyet"}
                            value={type === 'task' ? taskForm.points : rewardForm.cost}
                            onChange={e => type === 'task' ? setTaskForm({ ...taskForm, points: parseInt(e.target.value) }) : setRewardForm({ ...rewardForm, cost: parseInt(e.target.value) })}
                            required
                        />
                    </div>
                    {type === 'task' && (
                        <div className="flex gap-2">
                            <button
                                type="button"
                                onClick={() => setTaskForm({ ...taskForm, category: 'everyday' })}
                                className={`flex-1 p-2 rounded-xl text-xs font-bold ${taskForm.category === 'everyday' ? 'bg-indigo-500 text-white' : 'bg-slate-100 dark:bg-slate-700 dark:text-slate-300'}`}
                            >
                                Her Gün
                            </button>
                            <button
                                type="button"
                                onClick={() => setTaskForm({ ...taskForm, category: 'weekday' })}
                                className={`flex-1 p-2 rounded-xl text-xs font-bold ${taskForm.category === 'weekday' ? 'bg-indigo-500 text-white' : 'bg-slate-100 dark:bg-slate-700 dark:text-slate-300'}`}
                            >
                                Hafta İçi
                            </button>
                            <button
                                type="button"
                                onClick={() => setTaskForm({ ...taskForm, category: 'weekend' })}
                                className={`flex-1 p-2 rounded-xl text-xs font-bold ${taskForm.category === 'weekend' ? 'bg-indigo-500 text-white' : 'bg-slate-100 dark:bg-slate-700 dark:text-slate-300'}`}
                            >
                                Hafta Sonu
                            </button>
                        </div>
                    )}
                    <button type="submit" className="w-full p-5 bg-indigo-600 text-white rounded-3xl font-black shadow-xl uppercase text-xs tracking-widest hover:scale-105 transition-transform">
                        KAYDET
                    </button>
                </form>
            </div>
        </div>
    );
};

export default TaskRewardModal;
