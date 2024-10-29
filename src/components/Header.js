import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <h1>Wesley Vane: ATS</h1>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/register">Create Account</Link>
          </li>
          <li>
            <Link to="/login">Log In</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
