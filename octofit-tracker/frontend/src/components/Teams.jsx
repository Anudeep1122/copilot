import { useEffect, useState } from 'react';

export default function Teams() {
  const [teams, setTeams] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const codespaceName = import.meta.env.VITE_CODESPACE_NAME;
    const endpoint = '/api/teams';
    const apiUrl = codespaceName
      ? `https://${codespaceName}-8000.app.github.dev${endpoint}`
      : `http://localhost:8000${endpoint}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setTeams(Array.isArray(data) ? data : data.results || []))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <section className="card">
      <h2>Teams</h2>
      {error ? <p className="text-danger">{error}</p> : null}
      <ul>
        {teams.map((team) => (
          <li key={team._id || team.id}>
            {team.name} — {team.members?.length || 0} members
          </li>
        ))}
      </ul>
    </section>
  );
}
