import { useEffect, useState } from 'react';
import { fetchApiData } from '../utils/api';

export default function Users() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchApiData('users')
      .then((data) => setUsers(data))
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
