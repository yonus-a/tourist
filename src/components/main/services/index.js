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
          <div
            className="card wow fadeInUp animate__animated animate__fadeInUp delay1"
            data-wow-delay="0.1s"
          >
            <FontAwesomeIcon className="icon" icon={faGlobe} />
            <h3 className="title">WorldWide Tours</h3>
            <p className="text">
              Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet
              diam
            </p>
          </div>
          <div
            className="card wow fadeInUp animate__animated animate__fadeInUp delay2"
            data-wow-delay="0.3s"
          >
            <FontAwesomeIcon className="icon" icon={faHotel} />
            <h3 className="title">Hotel Reservation</h3>
            <p className="text">
              Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet
              diam
            </p>
          </div>
          <div
            className="card wow fadeInUp animate__animated animate__fadeInUp delay3"
            data-wow-delay="0.5s"
          >
            <FontAwesomeIcon className="icon" icon={faUser} />
            <h3 className="title">Travel Guides</h3>
            <p className="text">
              Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet
              diam
            </p>
          </div>
          <div
            className="card wow fadeInUp animate__animated animate__fadeInUp delay4"
            data-wow-delay="0.7s"
          >
            <FontAwesomeIcon className="icon" icon={faCog} />
            <h3 className="title">Event Management</h3>
            <p className="text">
              Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet
              diam
            </p>
          </div>
          <div
            className="card wow fadeInUp animate__animated animate__fadeInUp delay1"
            data-wow-delay="0.1s"
          >
            <FontAwesomeIcon className="icon" icon={faGlobe} />
            <h3 className="title">WorldWide Tours</h3>
            <p className="text">
              Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet
              diam
            </p>
          </div>
          <div
            className="card wow fadeInUp animate__animated animate__fadeInUp delay2"
            data-wow-delay="0.3s"
          >
            <FontAwesomeIcon className="icon" icon={faHotel} />
            <h3 className="title">Hotel Reservation</h3>
            <p className="text">
              Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet
              diam
            </p>
          </div>
          <div
            className="card wow fadeInUp animate__animated animate__fadeInUp delay3"
            data-wow-delay="0.5s"
          >
            <FontAwesomeIcon className="icon" icon={faUser} />
            <h3 className="title">Travel Guides</h3>
            <p className="text">
              Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet
              diam
            </p>
          </div>
          <div
            className="card wow fadeInUp animate__animated animate__fadeInUp delay4"
            data-wow-delay="0.7s"
          >
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
