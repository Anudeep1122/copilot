import { useEffect, useState } from 'react';
import { fetchApiData } from '../utils/api';

export default function Activities() {
  const [activities, setActivities] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchApiData('activities')
      .then((data) => setActivities(data))
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
