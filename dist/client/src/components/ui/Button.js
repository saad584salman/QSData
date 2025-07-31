import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useThemeStyles } from '@/hooks/useTheme';
export const Button = ({ variant = 'primary', size = 'md', isLoading = false, leftIcon, rightIcon, children, className = '', disabled, ...props }) => {
    const styles = useThemeStyles();
    const baseClasses = 'btn inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
    const variantClasses = styles.button(variant);
    const sizeClasses = {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-4 py-2 text-base',
        lg: 'px-6 py-3 text-lg',
    }[size];
    const combinedClasses = `${baseClasses} ${variantClasses} ${sizeClasses} ${className}`.trim();
    return (_jsxs("button", { className: combinedClasses, disabled: disabled || isLoading, ...props, children: [isLoading && (_jsxs("svg", { className: "animate-spin -ml-1 mr-2 h-4 w-4", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", children: [_jsx("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }), _jsx("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" })] })), !isLoading && leftIcon && (_jsx("span", { className: "mr-2", children: leftIcon })), children, !isLoading && rightIcon && (_jsx("span", { className: "ml-2", children: rightIcon }))] }));
};
