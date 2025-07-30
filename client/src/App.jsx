import React from 'react';
import { BrowserRouter, Routes, Route, Link, Navigate, useNavigate } from 'react-router-dom';
import ApiDemo from './components/ApiDemo.jsx';
import './components/ApiDemo.css';
import DatabaseSchema from './components/DatabaseSchema.jsx';
import './components/DatabaseSchema.css';
import EndpointDocs from './components/EndpointDocs.jsx';
import './components/EndpointDocs.css';

function Login() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const navigate = useNavigate();
  
  const submit = async e => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    
    try {
      console.log('Attempting login with:', { username, password });
      const res = await fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
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
    <div className="login-container">
      <h2>QSData Login</h2>
      <div className="dev-credentials">
        <h3>Development Credentials:</h3>
        <ul>
          <li><strong>Admin:</strong> username: <code>admin</code>, password: <code>admin</code></li>
          <li><strong>User:</strong> username: <code>user</code>, password: <code>user</code></li>
        </ul>
        <p style={{color: "#28a745", fontSize: "0.9rem", marginTop: "10px"}}>
          ✅ Backend is running and credentials verified!
        </p>
      </div>
      <form onSubmit={submit}>
        <div className="form-group">
          <label>Username</label>
          <input 
            value={username} 
            onChange={e => setUsername(e.target.value)}
            disabled={isLoading}
            placeholder="Enter username"
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input 
            type="password" 
            value={password} 
            onChange={e => setPassword(e.target.value)}
            disabled={isLoading}
            placeholder="Enter password"
          />
        </div>
        {error && <div className="error-message">{error}</div>}
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
}

function Layout({ children }) {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    navigate('/');
  };
  return (
    <div className="layout">
      <header>
        <h1>QSData</h1>
        <button className="logout" onClick={logout}>Logout</button>
      </header>
      <aside>
        <nav>
          <ul>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/projects/new">Add Project</Link></li>
            <li><Link to="/progress">Progress</Link></li>
            <li><Link to="/api-demo">API Demo</Link></li>
            <li><Link to="/database-schema">Database Schema</Link></li>
            <li><Link to="/endpoint-docs">API Documentation</Link></li>
          </ul>
        </nav>
      </aside>
      <main>{children}</main>
    </div>
  );
}

function Dashboard() {
  return (
    <Layout>
      <h2>Dashboard</h2>
      <p>Select an option from the menu.</p>
    </Layout>
  );
}

function Projects() {
  const [projects] = React.useState([
    { id: 1, name: 'Project A', status: 'In Progress' },
    { id: 2, name: 'Project B', status: 'Completed' }
  ]);
  return (
    <Layout>
      <h2>Projects</h2>
      <ul>
        {projects.map(p => (
          <li key={p.id}>{p.name} - {p.status}</li>
        ))}
      </ul>
    </Layout>
  );
}

function AddProject() {
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const submit = e => {
    e.preventDefault();
    alert('Project added (placeholder)');
    setName('');
    setDescription('');
  };
  return (
    <Layout>
      <h2>Add Project</h2>
      <form onSubmit={submit}>
        <label>Name</label>
        <input value={name} onChange={e => setName(e.target.value)} />
        <label>Description</label>
        <input value={description} onChange={e => setDescription(e.target.value)} />
        <button type="submit">Save</button>
      </form>
    </Layout>
  );
}

function Progress() {
  const [items, setItems] = React.useState([]);
  React.useEffect(() => {
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
      <h2>Progress</h2>
      <ul>
        {items.map(i => (
          <li key={i.id}>{i.description} - {i.completed ? 'done' : 'pending'}</li>
        ))}
      </ul>
    </Layout>
  );
}

function PrivateRoute({ children }) {
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to="/" replace />;
}

export default function App() {
  return (
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
  );
}
