import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-inner container">
        <p className="footer-quote">
          <em>"Not all who wander are lost — some are just looking for a quiet place to read."</em>
        </p>
        <p className="footer-copy">
          Made with warmth &amp; tea · Billu's Blogs · {year}
        </p>
      </div>
    </footer>
  );
}
