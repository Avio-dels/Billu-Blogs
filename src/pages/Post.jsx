import { useParams, Link } from 'react-router-dom';
import { getPostBySlug, posts } from '../data/posts';
import './Post.css';

export default function Post() {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <div className="post-not-found container">
        <h2>This page seems to have drifted away…</h2>
        <p>Perhaps the wind carried it somewhere else.</p>
        <Link to="/stories" className="back-link">← Back to Stories</Link>
      </div>
    );
  }

  const currentIndex = posts.findIndex((p) => p.slug === slug);
  const prev = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;
  const next = currentIndex > 0 ? posts[currentIndex - 1] : null;

  // Split content into paragraphs
  const paragraphs = post.content.split('\n\n').filter(Boolean);

  return (
    <article className="post-page" style={{ '--post-color': post.color }}>
      {/* Header */}
      <header className="post-header">
        <div className="post-header-bg" aria-hidden="true" />
        <div className="post-header-content container">
          <Link to="/stories" className="back-link" aria-label="Back to all stories">
            ← back to stories
          </Link>
          <span className="post-tag">{post.tag}</span>
          <h1 className="post-title">{post.title}</h1>
          <p className="post-meta">{post.date} · {post.readTime} read</p>
        </div>
      </header>

      {/* Body */}
      <div className="post-body container">
        <div className="post-paper">
          {paragraphs.map((para, i) => {
            // Handle italic markdown
            const formatted = para.replace(/\*(.*?)\*/g, '<em>$1</em>');
            return (
              <p
                key={i}
                className="post-para"
                dangerouslySetInnerHTML={{ __html: formatted }}
              />
            );
          })}

          <div className="post-end-flourish" aria-hidden="true">✦</div>
        </div>

        {/* Navigation between posts */}
        <nav className="post-nav" aria-label="Next and previous stories">
          <div className="post-nav-slot">
            {prev && (
              <Link to={`/stories/${prev.slug}`} className="post-nav-link post-nav-link--prev">
                <span className="post-nav-direction">← earlier</span>
                <span className="post-nav-title">{prev.title}</span>
              </Link>
            )}
          </div>
          <div className="post-nav-slot post-nav-slot--right">
            {next && (
              <Link to={`/stories/${next.slug}`} className="post-nav-link post-nav-link--next">
                <span className="post-nav-direction">newer →</span>
                <span className="post-nav-title">{next.title}</span>
              </Link>
            )}
          </div>
        </nav>
      </div>
    </article>
  );
}
