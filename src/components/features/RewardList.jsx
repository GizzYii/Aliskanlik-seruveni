import React from 'react';
import { Trophy, Trash2 } from 'lucide-react';

const RewardList = ({ rewards, totalPoints, onClaim, onDelete }) => {
    return (
        <div className="space-y-4">
            <h2 className="px-2 font-black text-purple-600 flex items-center gap-2 italic uppercase tracking-tighter">
                <Trophy className="w-5 h-5" /> Ödüller
            </h2>
            <div className="grid gap-4">
                {rewards.length === 0 && (
                    <div className="text-center py-12 text-slate-400 text-sm font-bold">
                        Ödül yok. <br /> Harika hedefler belirle!
                    </div>
                )}
                {rewards.map(reward => (
                    <div key={reward.id} className={`p-5 rounded-[35px] border-4 transition-all flex items-center justify-between ${reward.isClaimed ? 'bg-slate-100 grayscale opacity-40' : 'bg-white dark:bg-slate-800 border-transparent shadow-xl'}`}>
                        <div className="flex items-center gap-4">
                            <div className="text-4xl bg-purple-50 dark:bg-purple-900/20 w-16 h-16 rounded-3xl flex items-center justify-center">
                                {reward.icon}
                            </div>
                            <div>
                                <h3 className="font-black text-lg uppercase tracking-tight dark:text-white">{reward.title}</h3>
                                <p className={`text-sm font-black ${totalPoints >= reward.cost ? 'text-green-500' : 'text-red-400'}`}>
                                    {reward.cost} Yıldız
                                </p>
                            </div>
                        </div>
                        {!reward.isClaimed && (
                            <button
                                disabled={totalPoints < reward.cost}
                                onClick={() => onClaim(reward)}
                                className={`px-8 py-3 rounded-2xl font-black shadow-lg transition-all ${totalPoints >= reward.cost ? 'bg-purple-600 text-white hover:scale-105' : 'bg-slate-100 text-slate-400 dark:bg-slate-700'}`}
                            >
                                AL
                            </button>
                        )}
                        <button
                            onClick={() => onDelete(reward.id)}
                            className="p-2 opacity-5 hover:opacity-100 text-red-500 transition-opacity"
                        >
                            <Trash2 className="w-5 h-5" />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RewardList;
