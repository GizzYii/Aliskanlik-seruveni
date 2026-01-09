const KEYS = {
    PROFILE: 'app_user_profile',
    TASKS: 'app_tasks',
    REWARDS: 'app_rewards',
    SETTINGS: 'app_settings'
};

export const getProfile = () => {
    try {
        const data = localStorage.getItem(KEYS.PROFILE);
        return data ? JSON.parse(data) : null;
    } catch (e) {
        console.error('Error reading profile', e);
        return null;
    }
};

export const saveProfile = (profile) => {
    localStorage.setItem(KEYS.PROFILE, JSON.stringify(profile));
};

export const deleteProfile = () => {
    localStorage.removeItem(KEYS.PROFILE);
    localStorage.removeItem(KEYS.TASKS);
    localStorage.removeItem(KEYS.REWARDS);
};

export const getTasks = () => {
    const data = localStorage.getItem(KEYS.TASKS);
    return data ? JSON.parse(data) : [];
};

export const saveTasks = (tasks) => {
    localStorage.setItem(KEYS.TASKS, JSON.stringify(tasks));
};

export const getRewards = () => {
    const data = localStorage.getItem(KEYS.REWARDS);
    return data ? JSON.parse(data) : [];
};

export const saveRewards = (rewards) => {
    localStorage.setItem(KEYS.REWARDS, JSON.stringify(rewards));
};

export const getSettings = () => {
    const data = localStorage.getItem(KEYS.SETTINGS);
    return data ? JSON.parse(data) : { theme: 'galaxy' };
};

export const saveSettings = (settings) => {
    localStorage.setItem(KEYS.SETTINGS, JSON.stringify(settings));
};
