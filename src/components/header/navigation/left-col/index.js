import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import useMenu from "../../../../hooks/useMenu";
import "./style.scss";

export default function LeftCol() {
  useMenu();

  return (
    <div className="nav-left-col">
      <ul
        id="Menubar"
        role="menubar"
        aria-label="main Navigation"
        className="menubar"
      >
        <li role="none">
          <a href="#" role="menuitem" className="active">
            Home
          </a>
        </li>
        <li role="none">
          <a href="#" role="menuitem">
            About
          </a>
        </li>
        <li role="none">
          <a href="#" role="menuitem">
            Services
          </a>
        </li>
        <li role="none">
          <a href="#" role="menuitem">
            Packages
          </a>
        </li>
        <li role="none">
          <a href="#" role="menuitem" aria-expanded="true" aria-haspopup="true">
            Pages
            <FontAwesomeIcon icon={faChevronDown} className="chevron-down" />
          </a>
          <ul role="menu" aria-label="All Pages" className="hidden">
            <li role="none">
              <a role="menuitem">Destination</a>
            </li>
            <li role="none">
              <a role="menuitem">Booking</a>
            </li>
            <li role="none">
              <a role="menuitem">Travel Guides</a>
            </li>
            <li role="none">
              <a role="menuitem">Testimonial</a>
            </li>
            <li role="none">
              <a role="menuitem">404 Page</a>
            </li>
          </ul>
        </li>
        <li role="none">
          <a href="#" role="menuitem">
            Contact
          </a>
        </li>
      </ul>
      <a href="#" className="register">
        Register
      </a>
    </div>
  );
}
