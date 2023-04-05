import { Link } from 'react-router-dom';

function Navbar({ user, setUser }) {
  const logout = () => {
    localStorage.removeItem('token');
    setUser({});
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top container-fluid">
      <div className="container-fluid">
        {/* <Link className="navbar-brand" to="/">
          Home
        </Link> */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {user ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/sample">
                    Sample
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/posts">
                    Posts
                  </Link>
                </li>
                <b>
                  <li style={{ color: 'Red' }}>Welcome {user}!</li>
                </b>

                <li onClick={logout}>
                  <Link className="nav-link" to="/login">
                    Logout
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/posts">
                    Posts
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">
                    Register
                  </Link>
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

// import { Link } from 'react-router-dom';

// function Navbar({ user, setUser }) {
//   const logout = () => {
//     localStorage.removeItem('token');
//     setUser({});
//   };

//   return (
//     <nav
//       className="navbar navbar-expand-lg bg-body-tertiary bg-dark "
//       data-bs-theme="dark"
//     >
//       <div className="container-fluid ">
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="user-auth">
//             {user ? (
//               <>
//                 <li>
//                   <Link to="/">Home</Link>
//                 </li>
//                 <li>
//                   <Link to="/posts">Posts</Link>
//                 </li>
//                 <b><li style={{ color: 'Red' }}>Welcome {user}!</li></b>
//                 <li onClick={logout}>
//                   <Link to="/login">Logout</Link>
//                 </li>
//               </>
//             ) : (
//               <>
//                 <li>
//                   <Link to="/posts">Posts</Link>
//                 </li>
//                 <li>
//                   <Link to="/login">Login</Link>
//                 </li>
//                 <li>
//                   <Link to="/register">Register</Link>
//                 </li>
//               </>
//             )}
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
