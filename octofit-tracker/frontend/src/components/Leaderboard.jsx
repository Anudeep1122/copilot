import { useEffect, useState } from 'react';

export default function Leaderboard() {
  const [entries, setEntries] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const codespaceName = import.meta.env.VITE_CODESPACE_NAME;
    const apiUrl = codespaceName
      ? `https://${codespaceName}-8000.app.github.dev/api/leaderboard`
      : 'http://localhost:8000/api/leaderboard';

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setEntries(Array.isArray(data) ? data : data.results || []))
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
