import { jsx as _jsx } from "react/jsx-runtime";
import { useThemeStyles } from '@/hooks/useTheme';
export const Card = ({ variant = 'default', children, className = '', }) => {
    const styles = useThemeStyles();
    const baseClasses = 'rounded-lg border transition-all duration-200';
    const variantClasses = styles.card(variant);
    const combinedClasses = `${baseClasses} ${variantClasses} ${className}`.trim();
    return (_jsx("div", { className: combinedClasses, children: children }));
};
export const CardHeader = ({ children, className = '', }) => {
    return (_jsx("div", { className: `px-6 py-4 border-b border-gray-200 dark:border-gray-700 ${className}`, children: children }));
};
export const CardBody = ({ children, className = '', }) => {
    return (_jsx("div", { className: `px-6 py-4 ${className}`, children: children }));
};
export const CardFooter = ({ children, className = '', }) => {
    return (_jsx("div", { className: `px-6 py-4 border-t border-gray-200 dark:border-gray-700 ${className}`, children: children }));
};
