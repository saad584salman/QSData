import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const Input = ({ label, error, helperText, leftIcon, rightIcon, size = 'md', className = '', id, ...props }) => {
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
    const baseClasses = 'form-input w-full transition-colors duration-200';
    const sizeClasses = {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-3 py-2 text-base',
        lg: 'px-4 py-3 text-lg',
    }[size];
    const errorClasses = error ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : '';
    const iconClasses = leftIcon ? 'pl-10' : rightIcon ? 'pr-10' : '';
    const combinedClasses = `${baseClasses} ${sizeClasses} ${iconClasses} ${errorClasses} ${className}`.trim();
    return (_jsxs("div", { className: "w-full", children: [label && (_jsx("label", { htmlFor: inputId, className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1", children: label })), _jsxs("div", { className: "relative", children: [leftIcon && (_jsx("div", { className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none", children: _jsx("span", { className: "text-gray-400 dark:text-gray-500", children: leftIcon }) })), _jsx("input", { id: inputId, className: combinedClasses, ...props }), rightIcon && (_jsx("div", { className: "absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none", children: _jsx("span", { className: "text-gray-400 dark:text-gray-500", children: rightIcon }) }))] }), error && (_jsx("p", { className: "mt-1 text-sm text-red-600 dark:text-red-400", children: error })), helperText && !error && (_jsx("p", { className: "mt-1 text-sm text-gray-500 dark:text-gray-400", children: helperText }))] }));
};
