import { useEffect, useState } from 'react';
import { getApiUrl } from '../utils/api';

export default function Workouts() {
  const [workouts, setWorkouts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(getApiUrl('/api/workouts'))
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
