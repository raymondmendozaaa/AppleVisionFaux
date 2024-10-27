import { Outlet, Link } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>&nbsp;&nbsp;
          </li>
          <li>
            <Link to="/insertques">Insert Question</Link>&nbsp;&nbsp;
          </li>
          <li>
            <Link to="/login">Sign out</Link>&nbsp;&nbsp;
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
};
export default Layout;