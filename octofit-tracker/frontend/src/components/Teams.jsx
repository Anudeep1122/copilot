import { useEffect, useState } from 'react';
import { fetchApiData } from '../utils/api';

export default function Teams() {
  const [teams, setTeams] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchApiData('teams')
      .then((data) => setTeams(data))
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
