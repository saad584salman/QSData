// Define theme types
interface Theme {
  mode: 'light' | 'dark';
  colors: any;
  typography: any;
  spacing: any;
  shadows: any;
  transitions: any;
}

// Color System
const lightColors = {
  primary: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
  },
  neutral: {
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b',
    600: '#475569',
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a',
  },
  success: {
    500: '#22c55e',
    600: '#16a34a',
  },
  warning: {
    500: '#f59e0b',
    600: '#d97706',
  },
  error: {
    500: '#ef4444',
    600: '#dc2626',
  },
  background: {
    primary: '#ffffff',
    secondary: '#f8fafc',
    tertiary: '#f1f5f9',
  },
  text: {
    primary: '#0f172a',
    secondary: '#475569',
    tertiary: '#64748b',
  },
};

const darkColors = {
  primary: lightColors.primary, // Same as light
  neutral: {
    50: '#0f172a',
    100: '#1e293b',
    200: '#334155',
    300: '#475569',
    400: '#64748b',
    500: '#94a3b8',
    600: '#cbd5e1',
    700: '#e2e8f0',
    800: '#f1f5f9',
    900: '#f8fafc',
  },
  success: lightColors.success,
  warning: lightColors.warning,
  error: lightColors.error,
  background: {
    primary: '#0f172a',
    secondary: '#1e293b',
    tertiary: '#334155',
  },
  text: {
    primary: '#f8fafc',
    secondary: '#cbd5e1',
    tertiary: '#94a3b8',
  },
};

// Typography System
const fonts = {
  sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
  mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'Monaco', 'monospace'],
};

const fontSizes = {
  xs: '0.75rem',
  sm: '0.875rem',
  base: '1rem',
  lg: '1.125rem',
  xl: '1.25rem',
  '2xl': '1.5rem',
  '3xl': '1.875rem',
  '4xl': '2.25rem',
};

const typography = {
  fonts,
  fontSizes,
  headings: {
    h1: 'text-4xl font-bold tracking-tight leading-tight',
    h2: 'text-3xl font-semibold tracking-tight leading-tight',
    h3: 'text-2xl font-semibold leading-snug',
    h4: 'text-xl font-medium leading-snug',
  },
  body: {
    large: 'text-lg leading-relaxed',
    medium: 'text-base leading-relaxed',
    small: 'text-sm leading-relaxed',
    caption: 'text-xs leading-relaxed',
  },
};

// Spacing System
const spacing = {
  spacing: {
    0: '0',
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    8: '2rem',
    10: '2.5rem',
    12: '3rem',
  },
  layout: {
    container: {
      sm: 'max-w-screen-sm',
      md: 'max-w-screen-md',
      lg: 'max-w-screen-lg',
      xl: 'max-w-screen-xl',
      '2xl': 'max-w-screen-2xl',
    },
    section: {
      xs: 'py-4',
      sm: 'py-6',
      md: 'py-8',
      lg: 'py-12',
      xl: 'py-16',
    },
  },
};

// Shadow System
const lightShadows = {
  light: {
    none: 'none',
    xs: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    sm: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  },
  dark: {
    none: 'none',
    xs: '0 1px 2px 0 rgba(0, 0, 0, 0.3)',
    sm: '0 1px 3px 0 rgba(0, 0, 0, 0.4), 0 1px 2px 0 rgba(0, 0, 0, 0.3)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -1px rgba(0, 0, 0, 0.3)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.4), 0 4px 6px -2px rgba(0, 0, 0, 0.3)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.4), 0 10px 10px -5px rgba(0, 0, 0, 0.3)',
  },
};

// Transition System
const transitions = {
  duration: {
    fast: '150ms',
    normal: '250ms',
    slow: '350ms',
    slower: '500ms',
  },
  easing: {
    linear: 'linear',
    ease: 'ease',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out',
  },
  common: {
    all: 'all 250ms ease-in-out',
    colors: 'color 250ms ease-in-out, background-color 250ms ease-in-out',
    opacity: 'opacity 250ms ease-in-out',
    transform: 'transform 250ms ease-in-out',
  },
};

// Theme Configuration
export const lightTheme: Theme = {
  mode: 'light',
  colors: lightColors,
  typography,
  spacing,
  shadows: lightShadows,
  transitions,
};

export const darkTheme: Theme = {
  mode: 'dark',
  colors: darkColors,
  typography,
  spacing,
  shadows: lightShadows, // Using same shadow structure
  transitions,
};

// Component Variants
export const buttonVariants = {
  primary: {
    light: 'bg-blue-600 hover:bg-blue-700 text-white shadow-sm hover:shadow-md transition-all duration-200',
    dark: 'bg-blue-500 hover:bg-blue-600 text-white shadow-sm hover:shadow-md transition-all duration-200',
  },
  secondary: {
    light: 'bg-gray-100 hover:bg-gray-200 text-gray-900 border border-gray-300 transition-all duration-200',
    dark: 'bg-gray-700 hover:bg-gray-600 text-gray-100 border border-gray-600 transition-all duration-200',
  },
  ghost: {
    light: 'hover:bg-gray-100 text-gray-700 transition-all duration-200',
    dark: 'hover:bg-gray-700 text-gray-300 transition-all duration-200',
  },
  danger: {
    light: 'bg-red-600 hover:bg-red-700 text-white shadow-sm hover:shadow-md transition-all duration-200',
    dark: 'bg-red-500 hover:bg-red-600 text-white shadow-sm hover:shadow-md transition-all duration-200',
  },
  size: {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  },
};

export const cardVariants = {
  default: {
    light: 'bg-white border border-gray-200 shadow-sm rounded-lg',
    dark: 'bg-gray-800 border border-gray-700 shadow-sm rounded-lg',
  },
  elevated: {
    light: 'bg-white border border-gray-200 shadow-md rounded-lg',
    dark: 'bg-gray-800 border border-gray-700 shadow-md rounded-lg',
  },
  outline: {
    light: 'border border-gray-200 bg-transparent rounded-lg',
    dark: 'border border-gray-700 bg-transparent rounded-lg',
  },
};

export const formVariants = {
  input: {
    light: 'bg-white border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 rounded-md',
    dark: 'bg-gray-700 border border-gray-600 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 rounded-md',
  },
  select: {
    light: 'bg-white border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 rounded-md',
    dark: 'bg-gray-700 border border-gray-600 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 rounded-md',
  },
  textarea: {
    light: 'bg-white border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 rounded-md',
    dark: 'bg-gray-700 border border-gray-600 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 rounded-md',
  },
};

// Breakpoints
export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

// Responsive utilities
export const responsive = {
  container: {
    sm: 'max-w-screen-sm',
    md: 'max-w-screen-md',
    lg: 'max-w-screen-lg',
    xl: 'max-w-screen-xl',
    '2xl': 'max-w-screen-2xl',
  },
  grid: {
    cols: {
      1: 'grid-cols-1',
      2: 'grid-cols-1 md:grid-cols-2',
      3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
      4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
    },
  },
  spacing: {
    section: 'px-4 sm:px-6 lg:px-8',
    container: 'mx-auto px-4 sm:px-6 lg:px-8',
  },
};

// Accessibility
export const accessibility = {
  focus: {
    ring: 'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
    visible: 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500',
  },
  srOnly: 'sr-only',
  highContrast: {
    light: 'contrast-more',
    dark: 'contrast-more',
  },
  reducedMotion: 'motion-reduce:transition-none',
}; 