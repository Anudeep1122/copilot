import { useEffect, useState } from 'react';

export default function Workouts() {
  const [workouts, setWorkouts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const codespaceName = import.meta.env.VITE_CODESPACE_NAME;
    const endpoint = '/api/workouts';
    const apiUrl = codespaceName
      ? `https://${codespaceName}-8000.app.github.dev${endpoint}`
      : `http://localhost:8000${endpoint}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setWorkouts(Array.isArray(data) ? data : data.results || []))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <section className="card">
      <h2>Workouts</h2>
      {error ? <p className="text-danger">{error}</p> : null}
      <ul>
        {workouts.map((workout) => (
          <li key={workout._id || workout.id}>
            {workout.title} — {workout.duration}
          </li>
        ))}
      </ul>
    </section>
  );
}
