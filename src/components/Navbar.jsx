import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner container">
        <Link to="/" className="navbar-brand">
          <span className="brand-icon">🍃</span>
          <span className="brand-name">Billu's Blogs</span>
        </Link>
        <nav className="navbar-links" aria-label="Main navigation">
          <NavLink to="/" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Home
          </NavLink>
          <NavLink to="/stories" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Stories
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            About
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
