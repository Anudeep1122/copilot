import { useEffect, useState } from 'react';
import { fetchApiData } from '../utils/api';

export default function Workouts() {
  const [workouts, setWorkouts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchApiData('workouts')
      .then((data) => setWorkouts(data))
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
