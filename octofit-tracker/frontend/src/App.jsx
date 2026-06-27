import './App.css'

function App() {
  return (
    <div className="app-shell">
      <header className="hero-card">
        <p className="eyebrow">Octofit Tracker</p>
        <h1>Stay active, compete with friends, and grow stronger.</h1>
        <p className="lead">
          Track workouts, join teams, and climb the leaderboard with a fun fitness experience.
        </p>
        <div className="stats-row">
          <div className="stat-pill">Activity logging</div>
          <div className="stat-pill">Team challenges</div>
          <div className="stat-pill">Leaderboards</div>
        </div>
      </header>

      <main className="content-grid">
        <section className="card">
          <h2>Daily focus</h2>
          <p>Log a run, a walk, or a strength session in seconds.</p>
        </section>
        <section className="card">
          <h2>Community motivation</h2>
          <p>Invite classmates to a team challenge and keep each other accountable.</p>
        </section>
      </main>
    </div>
  )
}

export default App
