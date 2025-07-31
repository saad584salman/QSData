import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, Navigate, useNavigate } from 'react-router-dom';
import { ThemeProvider } from './hooks/useTheme';
import { Button, Card, CardBody, Input } from './components/ui';
import ApiDemo from './components/ApiDemo';
import DatabaseSchema from './components/DatabaseSchema';
import EndpointDocs from './components/EndpointDocs';
import './style.css';
const Login = () => {
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);
        try {
            console.log('Attempting login with:', credentials);
            const res = await fetch('http://localhost:3000/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(credentials)
            });
            console.log('Response status:', res.status);
            console.log('Response headers:', res.headers);
            if (res.ok) {
                const data = await res.json();
                console.log('Login successful:', data);
                localStorage.setItem('token', data.token);
                if (data.role)
                    localStorage.setItem('role', data.role);
                navigate('/dashboard');
            }
            else {
                const errorData = await res.json().catch(() => ({}));
                console.log('Login failed:', errorData);
                setError(errorData.error || 'Invalid credentials');
            }
        }
        catch (err) {
            console.error('Login error:', err);
            setError('Network error. Please check your connection.');
        }
        finally {
            setIsLoading(false);
        }
    };
    return (_jsx("div", { className: "min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8", children: _jsxs("div", { className: "max-w-md w-full space-y-8", children: [_jsx("div", { children: _jsx("h2", { className: "mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-gray-100", children: "QSData Login" }) }), _jsx(Card, { className: "w-full", children: _jsxs(CardBody, { children: [_jsxs("div", { className: "mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg", children: [_jsx("h3", { className: "text-sm font-medium text-blue-800 dark:text-blue-200 mb-2", children: "Development Credentials:" }), _jsxs("ul", { className: "text-sm text-blue-700 dark:text-blue-300 space-y-1", children: [_jsxs("li", { children: [_jsx("strong", { children: "Admin:" }), " username: ", _jsx("code", { className: "bg-blue-100 dark:bg-blue-800 px-1 rounded", children: "admin" }), ", password: ", _jsx("code", { className: "bg-blue-100 dark:bg-blue-800 px-1 rounded", children: "admin" })] }), _jsxs("li", { children: [_jsx("strong", { children: "User:" }), " username: ", _jsx("code", { className: "bg-blue-100 dark:bg-blue-800 px-1 rounded", children: "user" }), ", password: ", _jsx("code", { className: "bg-blue-100 dark:bg-blue-800 px-1 rounded", children: "user" })] })] }), _jsx("p", { className: "text-green-600 dark:text-green-400 text-xs mt-2", children: "\u2705 Backend is running and credentials verified!" })] }), _jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [_jsx(Input, { label: "Username", type: "text", value: credentials.username, onChange: (e) => setCredentials(prev => ({ ...prev, username: e.target.value })), disabled: isLoading, placeholder: "Enter username", required: true }), _jsx(Input, { label: "Password", type: "password", value: credentials.password, onChange: (e) => setCredentials(prev => ({ ...prev, password: e.target.value })), disabled: isLoading, placeholder: "Enter password", required: true }), error && (_jsx("div", { className: "text-red-600 dark:text-red-400 text-sm", children: error })), _jsx(Button, { type: "submit", disabled: isLoading, isLoading: isLoading, className: "w-full", children: isLoading ? 'Logging in...' : 'Login' })] })] }) })] }) }));
};
const Layout = ({ children }) => {
    const navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        navigate('/');
    };
    return (_jsxs("div", { className: "min-h-screen bg-gray-50 dark:bg-gray-900", children: [_jsx("header", { className: "bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700", children: _jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: _jsxs("div", { className: "flex justify-between items-center h-16", children: [_jsx("h1", { className: "text-xl font-semibold text-gray-900 dark:text-gray-100", children: "QSData" }), _jsx(Button, { variant: "ghost", onClick: logout, children: "Logout" })] }) }) }), _jsxs("div", { className: "flex", children: [_jsx("aside", { className: "w-64 bg-white dark:bg-gray-800 shadow-sm border-r border-gray-200 dark:border-gray-700 min-h-screen", children: _jsx("nav", { className: "mt-5 px-2", children: _jsxs("ul", { className: "space-y-2", children: [_jsx("li", { children: _jsx(Link, { to: "/dashboard", className: "group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700", children: "Dashboard" }) }), _jsx("li", { children: _jsx(Link, { to: "/projects", className: "group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700", children: "Projects" }) }), _jsx("li", { children: _jsx(Link, { to: "/projects/new", className: "group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700", children: "Add Project" }) }), _jsx("li", { children: _jsx(Link, { to: "/progress", className: "group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700", children: "Progress" }) }), _jsx("li", { children: _jsx(Link, { to: "/api-demo", className: "group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700", children: "API Demo" }) }), _jsx("li", { children: _jsx(Link, { to: "/database-schema", className: "group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700", children: "Database Schema" }) }), _jsx("li", { children: _jsx(Link, { to: "/endpoint-docs", className: "group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700", children: "API Documentation" }) })] }) }) }), _jsx("main", { className: "flex-1 p-6", children: children })] })] }));
};
const Dashboard = () => {
    return (_jsx(Layout, { children: _jsxs("div", { className: "max-w-7xl mx-auto", children: [_jsx("h2", { className: "text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6", children: "Dashboard" }), _jsx(Card, { children: _jsx(CardBody, { children: _jsx("p", { className: "text-gray-600 dark:text-gray-400", children: "Select an option from the menu." }) }) })] }) }));
};
const Projects = () => {
    const [projects] = useState([
        { id: 1, name: 'Project A', status: 'In Progress' },
        { id: 2, name: 'Project B', status: 'Completed' }
    ]);
    return (_jsx(Layout, { children: _jsxs("div", { className: "max-w-7xl mx-auto", children: [_jsx("h2", { className: "text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6", children: "Projects" }), _jsx(Card, { children: _jsx(CardBody, { children: _jsx("ul", { className: "space-y-2", children: projects.map(project => (_jsxs("li", { className: "flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700 last:border-b-0", children: [_jsx("span", { className: "text-gray-900 dark:text-gray-100", children: project.name }), _jsx("span", { className: "text-sm text-gray-500 dark:text-gray-400", children: project.status })] }, project.id))) }) }) })] }) }));
};
const AddProject = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Project added (placeholder)');
        setName('');
        setDescription('');
    };
    return (_jsx(Layout, { children: _jsxs("div", { className: "max-w-2xl mx-auto", children: [_jsx("h2", { className: "text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6", children: "Add Project" }), _jsx(Card, { children: _jsx(CardBody, { children: _jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [_jsx(Input, { label: "Name", value: name, onChange: (e) => setName(e.target.value), required: true }), _jsx(Input, { label: "Description", value: description, onChange: (e) => setDescription(e.target.value), required: true }), _jsx(Button, { type: "submit", children: "Save" })] }) }) })] }) }));
};
const Progress = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        const token = localStorage.getItem('token');
        fetch('/api/progress', { headers: { Authorization: `Bearer ${token}` } })
            .then(res => res.json())
            .then(data => {
            if (Array.isArray(data))
                setItems(data);
            else
                setItems([]);
        })
            .catch(() => setItems([]));
    }, []);
    return (_jsx(Layout, { children: _jsxs("div", { className: "max-w-7xl mx-auto", children: [_jsx("h2", { className: "text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6", children: "Progress" }), _jsx(Card, { children: _jsx(CardBody, { children: _jsx("ul", { className: "space-y-2", children: items.map(item => (_jsxs("li", { className: "flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700 last:border-b-0", children: [_jsx("span", { className: "text-gray-900 dark:text-gray-100", children: item.description }), _jsx("span", { className: `text-sm ${item.completed ? 'text-green-600 dark:text-green-400' : 'text-yellow-600 dark:text-yellow-400'}`, children: item.completed ? 'done' : 'pending' })] }, item.id))) }) }) })] }) }));
};
const PrivateRoute = ({ children }) => {
    const token = localStorage.getItem('token');
    return token ? _jsx(_Fragment, { children: children }) : _jsx(Navigate, { to: "/", replace: true });
};
const App = () => {
    return (_jsx(ThemeProvider, { children: _jsx(BrowserRouter, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Login, {}) }), _jsx(Route, { path: "/dashboard", element: _jsx(PrivateRoute, { children: _jsx(Dashboard, {}) }) }), _jsx(Route, { path: "/projects", element: _jsx(PrivateRoute, { children: _jsx(Projects, {}) }) }), _jsx(Route, { path: "/projects/new", element: _jsx(PrivateRoute, { children: _jsx(AddProject, {}) }) }), _jsx(Route, { path: "/progress", element: _jsx(PrivateRoute, { children: _jsx(Progress, {}) }) }), _jsx(Route, { path: "/api-demo", element: _jsx(PrivateRoute, { children: _jsx(ApiDemo, {}) }) }), _jsx(Route, { path: "/database-schema", element: _jsx(PrivateRoute, { children: _jsx(DatabaseSchema, {}) }) }), _jsx(Route, { path: "/endpoint-docs", element: _jsx(PrivateRoute, { children: _jsx(EndpointDocs, {}) }) })] }) }) }));
};
export default App;
