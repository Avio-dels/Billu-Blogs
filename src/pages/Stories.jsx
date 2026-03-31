import PostCard from '../components/PostCard';
import { posts } from '../data/posts';
import './Stories.css';

const tags = ['All', ...new Set(posts.map((p) => p.tag))];

export default function Stories() {
  return (
    <div className="stories-page">
      <div className="stories-hero">
        <div className="container">
          <p className="stories-kicker">every story is a door 🚪</p>
          <h1 className="stories-title">All Stories</h1>
          <p className="stories-sub">
            Quiet observations, gentle adventures, and small truths gathered along the way.
          </p>
        </div>
      </div>

      <div className="container stories-content">
        <div className="tag-filter" role="list" aria-label="Filter by tag">
          {tags.map((tag) => (
            <span key={tag} className="tag-chip" role="listitem">{tag}</span>
          ))}
        </div>

        <div className="stories-grid">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
