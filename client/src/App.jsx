import React from 'react';
import { BrowserRouter, Routes, Route, Link, Navigate, useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const navigate = useNavigate();
  const submit = async e => {
    e.preventDefault();
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });
    if (res.ok) {
      const data = await res.json();
      localStorage.setItem('token', data.token);
      if (data.role) localStorage.setItem('role', data.role);
      navigate('/dashboard');
    } else {
      alert('Invalid credentials');
    }
  };
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={submit}>
        <label>Username</label>
        <input value={username} onChange={e => setUsername(e.target.value)} />
        <label>Password</label>
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        <button type="submit">Login</button>
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
      </Routes>
    </BrowserRouter>
  );
}
