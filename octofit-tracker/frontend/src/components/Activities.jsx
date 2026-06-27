import { useEffect, useState } from 'react';

export default function Activities() {
  const [activities, setActivities] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const codespaceName = import.meta.env.VITE_CODESPACE_NAME;
    const endpoint = '/api/activities';
    const apiUrl = codespaceName
      ? `https://${codespaceName}-8000.app.github.dev${endpoint}`
      : `http://localhost:8000${endpoint}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setActivities(Array.isArray(data) ? data : data.results || []))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <section className="card">
      <h2>Activities</h2>
      {error ? <p className="text-danger">{error}</p> : null}
      <ul>
        {activities.map((activity) => (
          <li key={activity._id || activity.id}>
            {activity.name} — {activity.points} pts
          </li>
        ))}
      </ul>
    </section>
  );
}
