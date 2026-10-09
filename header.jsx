import { Link } from 'react-router-dom';

export default function Header({ user, onLogout }) {
  return (
    <header className="site-header">
      <Link className="brand" to="/">DEV@Deakin</Link>
      <input className="search" type="search" placeholder="Search" aria-label="Search" />
      <button className="post-button" type="button">Post</button>
      {user ? (
        <button className="nav-button" onClick={onLogout}>Log out</button>
      ) : (
        <Link className="nav-button" to="/login">Login</Link>
      )}
    </header>
  );
}