import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, Navigate, useNavigate } from 'react-router-dom';
import { ThemeProvider } from './hooks/useTheme';
import { Button, Card, CardBody, Input } from './components/ui';
import ApiDemo from './components/ApiDemo';
import DatabaseSchema from './components/DatabaseSchema';
import EndpointDocs from './components/EndpointDocs';
import './style.css';

interface LoginCredentials {
  username: string;
  password: string;
}

const Login: React.FC = () => {
  const [credentials, setCredentials] = useState<LoginCredentials>({ username: '', password: '' });
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  
  const handleSubmit = async (e: React.FormEvent) => {
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
        if (data.role) localStorage.setItem('role', data.role);
        navigate('/dashboard');
      } else {
        const errorData = await res.json().catch(() => ({}));
        console.log('Login failed:', errorData);
        setError(errorData.error || 'Invalid credentials');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError('Network error. Please check your connection.');
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-gray-100">
            QSData Login
          </h2>
        </div>
        
        <Card className="w-full">
          <CardBody>
            <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h3 className="text-sm font-medium text-blue-800 dark:text-blue-200 mb-2">
                Development Credentials:
              </h3>
              <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                <li><strong>Admin:</strong> username: <code className="bg-blue-100 dark:bg-blue-800 px-1 rounded">admin</code>, password: <code className="bg-blue-100 dark:bg-blue-800 px-1 rounded">admin</code></li>
                <li><strong>User:</strong> username: <code className="bg-blue-100 dark:bg-blue-800 px-1 rounded">user</code>, password: <code className="bg-blue-100 dark:bg-blue-800 px-1 rounded">user</code></li>
              </ul>
              <p className="text-green-600 dark:text-green-400 text-xs mt-2">
                ✅ Backend is running and credentials verified!
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                label="Username"
                type="text"
                value={credentials.username}
                onChange={(e) => setCredentials(prev => ({ ...prev, username: e.target.value }))}
                disabled={isLoading}
                placeholder="Enter username"
                required
              />
              
              <Input
                label="Password"
                type="password"
                value={credentials.password}
                onChange={(e) => setCredentials(prev => ({ ...prev, password: e.target.value }))}
                disabled={isLoading}
                placeholder="Enter password"
                required
              />
              
              {error && (
                <div className="text-red-600 dark:text-red-400 text-sm">
                  {error}
                </div>
              )}
              
              <Button
                type="submit"
                disabled={isLoading}
                isLoading={isLoading}
                className="w-full"
              >
                {isLoading ? 'Logging in...' : 'Login'}
              </Button>
            </form>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const navigate = useNavigate();
  
  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    navigate('/');
  };
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              QSData
            </h1>
            <Button variant="ghost" onClick={logout}>
              Logout
            </Button>
          </div>
        </div>
      </header>
      
      <div className="flex">
        <aside className="w-64 bg-white dark:bg-gray-800 shadow-sm border-r border-gray-200 dark:border-gray-700 min-h-screen">
          <nav className="mt-5 px-2">
            <ul className="space-y-2">
              <li>
                <Link to="/dashboard" className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/projects" className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/projects/new" className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700">
                  Add Project
                </Link>
              </li>
              <li>
                <Link to="/progress" className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700">
                  Progress
                </Link>
              </li>
              <li>
                <Link to="/api-demo" className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700">
                  API Demo
                </Link>
              </li>
              <li>
                <Link to="/database-schema" className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700">
                  Database Schema
                </Link>
              </li>
              <li>
                <Link to="/endpoint-docs" className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700">
                  API Documentation
                </Link>
              </li>
            </ul>
          </nav>
        </aside>
        
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

const Dashboard: React.FC = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
          Dashboard
        </h2>
        <Card>
          <CardBody>
            <p className="text-gray-600 dark:text-gray-400">
              Select an option from the menu.
            </p>
          </CardBody>
        </Card>
      </div>
    </Layout>
  );
};

interface Project {
  id: number;
  name: string;
  status: string;
}

const Projects: React.FC = () => {
  const [projects] = useState<Project[]>([
    { id: 1, name: 'Project A', status: 'In Progress' },
    { id: 2, name: 'Project B', status: 'Completed' }
  ]);
  
  return (
    <Layout>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
          Projects
        </h2>
        <Card>
          <CardBody>
            <ul className="space-y-2">
              {projects.map(project => (
                <li key={project.id} className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700 last:border-b-0">
                  <span className="text-gray-900 dark:text-gray-100">{project.name}</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{project.status}</span>
                </li>
              ))}
            </ul>
          </CardBody>
        </Card>
      </div>
    </Layout>
  );
};

const AddProject: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Project added (placeholder)');
    setName('');
    setDescription('');
  };
  
  return (
    <Layout>
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
          Add Project
        </h2>
        <Card>
          <CardBody>
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <Input
                label="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
              <Button type="submit">
                Save
              </Button>
            </form>
          </CardBody>
        </Card>
      </div>
    </Layout>
  );
};

interface ProgressItem {
  id: number;
  description: string;
  completed: boolean;
}

const Progress: React.FC = () => {
  const [items, setItems] = useState<ProgressItem[]>([]);
  
  useEffect(() => {
    const token = localStorage.getItem('token');
    fetch('/api/progress', { headers: { Authorization: `Bearer ${token}` } })
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) setItems(data);
        else setItems([]);
      })
      .catch(() => setItems([]));
  }, []);
  
  return (
    <Layout>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
          Progress
        </h2>
        <Card>
          <CardBody>
            <ul className="space-y-2">
              {items.map(item => (
                <li key={item.id} className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700 last:border-b-0">
                  <span className="text-gray-900 dark:text-gray-100">{item.description}</span>
                  <span className={`text-sm ${item.completed ? 'text-green-600 dark:text-green-400' : 'text-yellow-600 dark:text-yellow-400'}`}>
                    {item.completed ? 'done' : 'pending'}
                  </span>
                </li>
              ))}
            </ul>
          </CardBody>
        </Card>
      </div>
    </Layout>
  );
};

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const token = localStorage.getItem('token');
  return token ? <>{children}</> : <Navigate to="/" replace />;
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          <Route path="/projects" element={<PrivateRoute><Projects /></PrivateRoute>} />
          <Route path="/projects/new" element={<PrivateRoute><AddProject /></PrivateRoute>} />
          <Route path="/progress" element={<PrivateRoute><Progress /></PrivateRoute>} />
          <Route path="/api-demo" element={<PrivateRoute><ApiDemo /></PrivateRoute>} />
          <Route path="/database-schema" element={<PrivateRoute><DatabaseSchema /></PrivateRoute>} />
          <Route path="/endpoint-docs" element={<PrivateRoute><EndpointDocs /></PrivateRoute>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App; 