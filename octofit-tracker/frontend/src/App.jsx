import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';

function App() {
  return (
    <div className="app-shell">
      <header className="hero-card">
        <p className="eyebrow">Octofit Tracker</p>
        <h1>Stay active, compete with friends, and grow stronger.</h1>
        <p className="lead">
          Track workouts, join teams, and climb the leaderboard with a fun fitness experience.
        </p>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/users">Users</Link>
          <Link to="/teams">Teams</Link>
          <Link to="/activities">Activities</Link>
          <Link to="/leaderboard">Leaderboard</Link>
          <Link to="/workouts">Workouts</Link>
        </nav>
      </header>

      <main className="content-grid">
        <Routes>
          <Route path="/" element={
            <>
              <section className="card">
                <h2>Daily focus</h2>
                <p>Log a run, a walk, or a strength session in seconds.</p>
              </section>
              <section className="card">
                <h2>Community motivation</h2>
                <p>Invite classmates to a team challenge and keep each other accountable.</p>
              </section>
            </>
          } />
          <Route path="/users" element={<Users />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/workouts" element={<Workouts />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
