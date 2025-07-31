import React, { useContext, createContext, useState, useEffect } from 'react';
import { lightTheme, darkTheme, buttonVariants, cardVariants, formVariants } from '../lib/theme';
const ThemeContext = createContext(undefined);
export const ThemeProvider = ({ children }) => {
    const [theme, setThemeState] = useState(lightTheme);
    useEffect(() => {
        // Check for saved theme preference or default to light
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            setThemeState(darkTheme);
            document.documentElement.classList.add('dark');
        }
        else {
            setThemeState(lightTheme);
            document.documentElement.classList.remove('dark');
        }
    }, []);
    const setTheme = (mode) => {
        const newTheme = mode === 'dark' ? darkTheme : lightTheme;
        setThemeState(newTheme);
        localStorage.setItem('theme', mode);
        if (mode === 'dark') {
            document.documentElement.classList.add('dark');
        }
        else {
            document.documentElement.classList.remove('dark');
        }
    };
    const toggleTheme = () => {
        const newMode = theme.mode === 'light' ? 'dark' : 'light';
        setTheme(newMode);
    };
    const value = {
        theme,
        toggleTheme,
        setTheme,
    };
    return React.createElement(ThemeContext.Provider, { value }, children);
};
export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
export const useThemeStyles = () => {
    const { theme } = useTheme();
    const isDark = theme.mode === 'dark';
    return {
        colors: isDark ? darkTheme.colors : lightTheme.colors,
        button: (variant) => {
            const variantObj = buttonVariants[variant];
            if (typeof variantObj === 'object' && 'light' in variantObj && 'dark' in variantObj) {
                return `${variantObj[isDark ? 'dark' : 'light']}`;
            }
            return '';
        },
        card: (variant) => {
            const variantObj = cardVariants[variant];
            if (typeof variantObj === 'object' && 'light' in variantObj && 'dark' in variantObj) {
                return `${variantObj[isDark ? 'dark' : 'light']} p-6`;
            }
            return '';
        },
        input: (variant) => {
            const variantObj = formVariants.input[variant];
            if (typeof variantObj === 'object' && 'light' in variantObj && 'dark' in variantObj) {
                return `${variantObj[isDark ? 'dark' : 'light']} px-3 py-2`;
            }
            return '';
        },
        select: (variant) => {
            const variantObj = formVariants.select[variant];
            if (typeof variantObj === 'object' && 'light' in variantObj && 'dark' in variantObj) {
                return `${variantObj[isDark ? 'dark' : 'light']} px-3 py-2`;
            }
            return '';
        },
        textarea: (variant) => {
            const variantObj = formVariants.textarea[variant];
            if (typeof variantObj === 'object' && 'light' in variantObj && 'dark' in variantObj) {
                return `${variantObj[isDark ? 'dark' : 'light']} px-3 py-2`;
            }
            return '';
        },
        text: {
            primary: isDark ? 'text-gray-100' : 'text-gray-900',
            secondary: isDark ? 'text-gray-300' : 'text-gray-600',
            tertiary: isDark ? 'text-gray-400' : 'text-gray-500',
            inverse: isDark ? 'text-gray-900' : 'text-white',
        },
        bg: {
            primary: isDark ? 'bg-gray-900' : 'bg-white',
            secondary: isDark ? 'bg-gray-800' : 'bg-gray-50',
            tertiary: isDark ? 'bg-gray-700' : 'bg-gray-100',
        },
        border: {
            primary: isDark ? 'border-gray-700' : 'border-gray-200',
            secondary: isDark ? 'border-gray-600' : 'border-gray-300',
        },
        shadow: {
            sm: isDark ? 'shadow-sm' : 'shadow-sm',
            md: isDark ? 'shadow-md' : 'shadow-md',
            lg: isDark ? 'shadow-lg' : 'shadow-lg',
        },
    };
};
