import { Link } from 'react-router-dom';
import SkyScene from '../components/SkyScene';
import PostCard from '../components/PostCard';
import { getRecentPosts } from '../data/posts';
import './Home.css';

const recent = getRecentPosts(3);

export default function Home() {
  return (
    <div className="home-page">
      {/* ===== Hero ===== */}
      <SkyScene>
        <p className="hero-kicker">Welcome to a quiet corner ✦</p>
        <h1 className="hero-title">
          Stories that breathe,<br />
          <em>words that linger</em>
        </h1>
        <p className="hero-sub">
          Billu's Blogs is a gentle place for reflections, wanderings,
          and the small things that make life feel alive.
        </p>
        <Link to="/stories" className="hero-btn">
          Wander through stories
        </Link>
      </SkyScene>

      {/* ===== Recent Posts ===== */}
      <section className="recent-section container">
        <div className="section-header">
          <h2 className="section-title">Latest whispers</h2>
          <span className="section-line" aria-hidden="true" />
        </div>
        <div className="posts-grid">
          {recent.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
        <div className="see-all-wrap">
          <Link to="/stories" className="see-all-link">
            See all stories →
          </Link>
        </div>
      </section>

      {/* ===== Invitation Banner ===== */}
      <section className="invitation-section">
        <div className="invitation-inner container">
          <span className="invitation-leaf" aria-hidden="true">🌿</span>
          <div>
            <h3 className="invitation-title">Slow down a little.</h3>
            <p className="invitation-text">
              There is no rush here. Pour yourself something warm and stay a while.
              Each story is a window left open on a quiet day.
            </p>
          </div>
          <span className="invitation-leaf invitation-leaf--right" aria-hidden="true">🍃</span>
        </div>
      </section>
    </div>
  );
}
