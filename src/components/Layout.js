import { Outlet, Link } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/Login" className="nav-links" id="signout">Sign out</Link>&nbsp;&nbsp;
          </li>
          <li>
            <Link to="/Contact" className="nav-links">Contact</Link>&nbsp;&nbsp;
          </li>
          <li>
            <Link to="/insertques" className="nav-links">Insert a Question</Link>&nbsp;&nbsp;
          </li>
          <li>
            <Link to="/" className="nav-links">Home</Link>&nbsp;&nbsp;
          </li>
          <li>
            <Link to="/" className="nav-logo"><a>LOGO</a></Link>&nbsp;&nbsp;
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
};
export default Layout;