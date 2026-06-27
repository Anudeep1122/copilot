import { useEffect, useState } from 'react';
import { fetchApiData } from '../utils/api';

export default function Leaderboard() {
  const [entries, setEntries] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchApiData('leaderboard')
      .then((data) => setEntries(data))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <section className="card">
      <h2>Leaderboard</h2>
      {error ? <p className="text-danger">{error}</p> : null}
      <ul>
        {entries.map((entry) => (
          <li key={entry._id || entry.id}>
            {entry.rank}. {entry.userId?.name || entry.name} — {entry.score} pts
          </li>
        ))}
      </ul>
    </section>
  );
}
