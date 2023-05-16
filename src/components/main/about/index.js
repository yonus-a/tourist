import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Container from "../../container";
import AboutImg from "./about.jpg";
import "./style.scss";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function About() {
  return (
    <section className="about" aria-label="About us">
      <Container>
        <img
          src={AboutImg}
          className="about-img wow animate__animated animate__fadeInUp"
          alt=""
        />
        <div className="group wow animate__animated animate__fadeInUp">
          <p className="primary-title">ABOUT US</p>
          <h2 className="secondary-title">
            Welcome to <span>Tourist</span>
          </h2>
          <p className="about-desc">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos. Clita erat ipsum et lorem et sit.
            <br />
            <br />
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
            lorem sit clita duo justo magna dolore erat amet
          </p>
          <ul className="about-list">
            <li>
              <FontAwesomeIcon icon={faArrowRight} />
              First Class Flights
            </li>
            <li>
              <FontAwesomeIcon icon={faArrowRight} />5 Star Accommodations
            </li>
            <li>
              <FontAwesomeIcon icon={faArrowRight} />
              150 Premium City Tours
            </li>
            <li>
              <FontAwesomeIcon icon={faArrowRight} />
              Handpicked Hotels
            </li>
            <li>
              <FontAwesomeIcon icon={faArrowRight} />
              Latest Model Vehicles
            </li>
            <li>
              <FontAwesomeIcon icon={faArrowRight} />
              24/7 Service
            </li>
          </ul>
          <a href="#" className="about-cta">
            Read More
          </a>
        </div>
      </Container>
    </section>
  );
}
