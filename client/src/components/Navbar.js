import { Link } from 'react-router-dom';

function Navbar({ user, setUser }) {
  const logout = () => {
    localStorage.removeItem('token');
    setUser({});
  };

  return (
    <nav
      class="navbar navbar-expand-lg bg-body-tertiary bg-dark "
      data-bs-theme="dark"
    >
      <div class="container-fluid ">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="user-auth">
            {user ? (
              <>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/posts">Posts</Link>
                </li>
                <b><li style={{ color: 'Red' }}>Welcome {user}!</li></b>
                <li onClick={logout}>
                  <Link to="/login">Logout</Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/posts">Posts</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/register">Register</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
