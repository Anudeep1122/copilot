import { useEffect, useState } from 'react';

export default function Users() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const codespaceName = import.meta.env.VITE_CODESPACE_NAME;
    const endpoint = '/api/users';
    const apiUrl = codespaceName
      ? `https://${codespaceName}-8000.app.github.dev${endpoint}`
      : `http://localhost:8000${endpoint}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setUsers(Array.isArray(data) ? data : data.results || []))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <section className="card">
      <h2>Users</h2>
      {error ? <p className="text-danger">{error}</p> : null}
      <ul>
        {users.map((user) => (
          <li key={user._id || user.id}>
            {user.name} — {user.role}
          </li>
        ))}
      </ul>
    </section>
  );
}
