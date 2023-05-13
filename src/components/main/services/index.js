import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PrimaryTitle from "../../primary-title";
import {
  faCog,
  faGlobe,
  faHotel,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Container from "../../container";
import "./style.scss";

export default function Services() {
  return (
    <section className="services" aria-label="services">
      <Container>
        <PrimaryTitle className="primary-title">SERVICES</PrimaryTitle>
        <h2 className="secondary-title">Our Services</h2>
        <div class="wrapper">
          <div className="card">
            <FontAwesomeIcon className="icon" icon={faGlobe} />
            <h3 className="title">WorldWide Tours</h3>
            <p className="text">
              Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet
              diam
            </p>
          </div>
          <div className="card">
            <FontAwesomeIcon className="icon" icon={faHotel} />
            <h3 className="title">Hotel Reservation</h3>
            <p className="text">
              Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet
              diam
            </p>
          </div>
          <div className="card">
            <FontAwesomeIcon className="icon" icon={faUser} />
            <h3 className="title">Travel Guides</h3>
            <p className="text">
              Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet
              diam
            </p>
          </div>
          <div className="card">
            <FontAwesomeIcon className="icon" icon={faCog} />
            <h3 className="title">Event Management</h3>
            <p className="text">
              Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet
              diam
            </p>
          </div>
          <div className="card">
            <FontAwesomeIcon className="icon" icon={faGlobe} />
            <h3 className="title">WorldWide Tours</h3>
            <p className="text">
              Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet
              diam
            </p>
          </div>
          <div className="card">
            <FontAwesomeIcon className="icon" icon={faHotel} />
            <h3 className="title">Hotel Reservation</h3>
            <p className="text">
              Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet
              diam
            </p>
          </div>
          <div className="card">
            <FontAwesomeIcon className="icon" icon={faUser} />
            <h3 className="title">Travel Guides</h3>
            <p className="text">
              Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet
              diam
            </p>
          </div>
          <div className="card">
            <FontAwesomeIcon className="icon" icon={faCog} />
            <h3 className="title">Event Management</h3>
            <p className="text">
              Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet
              diam
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
