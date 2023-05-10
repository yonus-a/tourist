import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import "./style.scss";
import Container from "../../container";
import useNav from "../../../hooks/useNav";
import Button from "../../button";
import LeftCol from "./left-col";
import useHeaderSticky from "../../../hooks/useHeaderSticky";

export default function Navigation() {
  var headerRef = useHeaderSticky();
  useNav();

  return (
    <nav className="main-nav" ref={headerRef}>
      <Container>
        <div class="group">
          <a href="#" className="logo">
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            Tourist
          </a>
          <Button
            className="mobile-cta"
            aria-controls="Menubar"
            aria-expanded="false"
            aria-label="Open Navigation"
          >
            <FontAwesomeIcon icon={faBars} />
          </Button>
        </div>
        <LeftCol />
      </Container>
    </nav>
  );
}
