import './About.css';

export default function About() {
  return (
    <div className="about-page">
      <div className="about-hero">
        <div className="about-avatar" aria-hidden="true">
          <span className="about-avatar-emoji">🦔</span>
        </div>
        <h1 className="about-title">Hello, I'm Billu</h1>
        <p className="about-sub">curious wanderer · occasional scribbler · full-time tea drinker</p>
      </div>

      <div className="container about-body">
        <div className="about-card">
          <h2 className="about-section-title">A little about this place</h2>
          <p>
            Billu's Blogs started as a notebook that got out of hand. I kept filling pages with
            observations I didn't want to forget — the way the light changes in the late
            afternoon, a conversation overheard on a train, the peculiar comfort of rain against
            a window — and eventually it seemed a shame to keep them only to myself.
          </p>
          <p>
            This is not a productivity blog, a self-improvement guide, or a how-to of anything.
            It is simply a place where I write about noticing things. If you find something here
            that makes you pause, or smile, or want to look out the window — that's enough.
          </p>
        </div>

        <div className="about-card">
          <h2 className="about-section-title">What you'll find here</h2>
          <ul className="about-list">
            <li>🌿 <strong>Reflections</strong> — thoughts that arrived slowly and stayed</li>
            <li>🚶 <strong>Wanderings</strong> — things discovered while going somewhere else</li>
            <li>🍂 <strong>Seasons</strong> — the world as it changes and what that stirs</li>
            <li>☕ <strong>Daily life</strong> — the extraordinary hidden in the ordinary</li>
            <li>📮 <strong>Memory</strong> — small things kept for reasons only the heart knows</li>
          </ul>
        </div>

        <div className="about-card about-card--closing">
          <p className="about-closing-quote">
            "I believe that if one always looked at the skies, one would end up with wings."
          </p>
          <p className="about-closing-attr">— Gustave Flaubert</p>
          <p className="about-closing-note">
            Thank you for being here. Take your time.
          </p>
        </div>
      </div>
    </div>
  );
}
