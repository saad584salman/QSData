import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect } from 'react';
export const Modal = ({ isOpen, onClose, title, children, size = 'md', }) => {
    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };
        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);
    if (!isOpen)
        return null;
    const sizeClasses = {
        sm: 'max-w-sm',
        md: 'max-w-md',
        lg: 'max-w-lg',
        xl: 'max-w-xl',
    }[size];
    return (_jsxs(_Fragment, { children: [_jsx("div", { className: "modal-backdrop fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40", onClick: onClose }), _jsx("div", { className: "modal-content fixed inset-0 z-50 flex items-center justify-center p-4", children: _jsxs("div", { className: `modal-panel bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-h-[90vh] overflow-y-auto ${sizeClasses}`, children: [_jsxs("div", { className: "flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700", children: [_jsx("h2", { className: "text-lg font-semibold text-gray-900 dark:text-gray-100", children: title }), _jsx("button", { onClick: onClose, className: "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200", children: _jsx("svg", { className: "w-6 h-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }) }) })] }), _jsx("div", { className: "p-6", children: children })] }) })] }));
};
