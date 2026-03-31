import { Link } from 'react-router-dom';
import './PostCard.css';

export default function PostCard({ post }) {
  return (
    <article
      className="post-card"
      style={{ '--card-bg': post.color }}
    >
      <div className="post-card-tag">{post.tag}</div>
      <h2 className="post-card-title">
        <Link to={`/stories/${post.slug}`}>{post.title}</Link>
      </h2>
      <p className="post-card-excerpt">{post.excerpt}</p>
      <div className="post-card-footer">
        <span className="post-card-meta">{post.date} · {post.readTime} read</span>
        <Link to={`/stories/${post.slug}`} className="post-card-read">
          Read on →
        </Link>
      </div>
    </article>
  );
}
