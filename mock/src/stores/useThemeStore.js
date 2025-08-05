import {create} from 'zustand';

export const useThemeStore = create((set) => ({
    theme : localStorage.getItem('local-theme') || 'light',

    toggleTheme: () => set((state) => {
        const newTheme = state.theme === 'light' ? 'dark' : 'light';
        localStorage.setItem('local-theme', newTheme);
        set({theme: newTheme});
    }),

}));