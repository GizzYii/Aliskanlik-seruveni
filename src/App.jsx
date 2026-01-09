import React, { useState, useEffect } from 'react';
import { Plus, Gift } from 'lucide-react';
import { getProfile, saveProfile, deleteProfile, getTasks, saveTasks, getRewards, saveRewards, getSettings, saveSettings } from './lib/storage';
import { themes } from './constants/themes';
import SetupProfile from './components/auth/SetupProfile';
import Header from './components/layout/Header';
import AIPanel from './components/features/AIPanel';
import TaskList from './components/features/TaskList';
import RewardList from './components/features/RewardList';
import ThemeModal from './components/modals/ThemeModal';
import EmojiModal from './components/modals/EmojiModal';
import TaskRewardModal from './components/modals/TaskRewardModal';

const App = () => {
  const [profile, setProfile] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [rewards, setRewards] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const [activeTab, setActiveTab] = useState('tasks');
  const [showThemeModal, setShowThemeModal] = useState(false);
  const [showEmojiModal, setShowEmojiModal] = useState(false);
  const [showAIPanel, setShowAIPanel] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showRewardModal, setShowRewardModal] = useState(false);

  // Load initial data
  useEffect(() => {
    const p = getProfile();
    const t = getTasks();
    const r = getRewards();
    const s = getSettings();
    if (p) setProfile(p);
    if (t) setTasks(t);
    if (r) setRewards(r);
    if (s.darkMode) setDarkMode(s.darkMode);
  }, []);

  // Persistence effects
  useEffect(() => {
    if (profile) saveProfile(profile);
  }, [profile]);

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  useEffect(() => {
    saveRewards(rewards);
  }, [rewards]);

  useEffect(() => {
    saveSettings({ darkMode });
    if (darkMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [darkMode]);

  // Derived state
  const totalEarned = tasks.reduce((acc, curr) => acc + (curr.totalEarned || 0), 0);
  const totalSpent = rewards.reduce((acc, curr) => acc + (curr.spentPoints || 0), 0);
  const totalPoints = totalEarned - totalSpent;

  const currentTheme = themes[profile?.theme || 'galaxy'] || themes.galaxy;

  // Handlers
  const handleSetup = (data) => {
    setProfile(data);
  };

  const handleLogout = () => {
    deleteProfile();
    setProfile(null);
    setTasks([]);
    setRewards([]);
  };

  const handleAddTask = (newTask) => {
    const task = {
      id: Date.now().toString(),
      ...newTask,
      completedDates: [],
      totalEarned: 0
    };
    setTasks(prev => [...prev, task]);
  };

  const handleAddReward = (newReward) => {
    const reward = {
      id: Date.now().toString(),
      ...newReward,
      isClaimed: false,
      spentPoints: 0
    };
    setRewards(prev => [...prev, reward]);
  };

  const handleCompleteTask = (task) => {
    const dateStr = selectedDate.toISOString().split('T')[0];
    if (task.completedDates?.includes(dateStr)) return;

    const updatedTasks = tasks.map(t => {
      if (t.id === task.id) {
        return {
          ...t,
          completedDates: [...(t.completedDates || []), dateStr],
          totalEarned: (t.totalEarned || 0) + t.points
        };
      }
      return t;
    });
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (id) => {
    setTasks(prev => prev.filter(t => t.id !== id));
  };

  const handleClaimReward = (reward) => {
    if (totalPoints < reward.cost) return;
    const updatedRewards = rewards.map(r => {
      if (r.id === reward.id) {
        return { ...r, isClaimed: true, spentPoints: r.cost };
      }
      return r;
    });
    setRewards(updatedRewards);
  };

  const handleDeleteReward = (id) => {
    setRewards(prev => prev.filter(r => r.id !== id));
  };

  if (!profile) return <SetupProfile onComplete={handleSetup} darkMode={darkMode} />;

  return (
    <div className={`min-h-screen relative overflow-hidden ${darkMode ? 'bg-slate-900 text-white' : 'bg-slate-50 text-slate-800'} pb-32 transition-colors duration-500`}>
      <Header
        profile={profile}
        totalPoints={totalPoints}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        setShowThemeModal={setShowThemeModal}
        setShowAIPanel={setShowAIPanel}
        showAIPanel={showAIPanel}
        setShowEmojiModal={setShowEmojiModal}
        onLogout={handleLogout}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {showAIPanel && (
        <AIPanel
          onClose={() => setShowAIPanel(false)}
          profile={profile}
          tasks={tasks}
          selectedDate={selectedDate}
          onAddTask={handleAddTask}
        />
      )}

      <main className="p-6 max-w-2xl mx-auto relative z-10">
        {activeTab === 'tasks' ? (
          <TaskList
            tasks={tasks}
            profile={profile}
            selectedDate={selectedDate}
            onComplete={handleCompleteTask}
            onDelete={handleDeleteTask}
          />
        ) : (
          <RewardList
            rewards={rewards}
            totalPoints={totalPoints}
            onClaim={handleClaimReward}
            onDelete={handleDeleteReward}
          />
        )}
      </main>

      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex gap-4 z-40 p-3 glass rounded-[3rem] border border-white/50">
        <button onClick={() => { setShowAddModal(true); setActiveTab('tasks'); }} className={`${currentTheme.primary} text-white px-8 py-4 rounded-[2rem] font-black text-[10px] flex items-center gap-2 hover:scale-110 active:scale-95 transition-all uppercase shadow-lg shadow-indigo-500/30`}>
          <Plus className="w-4 h-4" /> EKLE
        </button>
        <button onClick={() => { setShowRewardModal(true); setActiveTab('rewards'); }} className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-[2rem] font-black text-[10px] flex items-center gap-2 hover:scale-110 active:scale-95 transition-all uppercase shadow-lg shadow-purple-500/30">
          <Gift className="w-4 h-4" /> ÖDÜL
        </button>
      </div>

      <ThemeModal
        isOpen={showThemeModal}
        onClose={() => setShowThemeModal(false)}
        currentTheme={profile.theme}
        profile={profile}
        onSelect={(theme) => setProfile(p => ({ ...p, theme }))}
      />

      <EmojiModal
        isOpen={showEmojiModal}
        onClose={() => setShowEmojiModal(false)}
        currentAvatar={profile.avatar}
        onSelect={(avatar) => setProfile(p => ({ ...p, avatar }))}
      />

      <TaskRewardModal
        isOpen={showAddModal || showRewardModal}
        type={showAddModal ? 'task' : 'reward'}
        onClose={() => { setShowAddModal(false); setShowRewardModal(false); }}
        onAdd={showAddModal ? handleAddTask : handleAddReward}
      />
    </div>
  );
};

export default App;
