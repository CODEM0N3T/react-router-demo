import "./AboutUs.css";
import { Link, Outlet } from "react-router-dom";

function AboutUs() {
  return (
    <div className="about-us">
      <ul className="links">
        <li>
          <Link path="site-history">Site History</Link>
        </li>
        <li>
          <Link path="site-mission">Site Mission</Link>
        </li>
      </ul>
      <p>You can find out more information about our site here.</p>
      <Outlet />
    </div>
  );
}

export default AboutUs;
