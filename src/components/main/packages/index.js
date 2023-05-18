import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Container from "../../container";
import PrimaryTitle from "../../primary-title";
import PackagesImage1 from "./images/package-1.jpg";
import PackagesImage2 from "./images/package-2.jpg";
import PackagesImage3 from "./images/package-3.jpg";
import "./style.scss";
import {
  faCalendarAlt,
  faMapMarkerAlt,
  faUserAlt,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

export default function Packages() {
  return (
    <section className="packages" aria-label="Awesome Packages">
      <Container>
        <PrimaryTitle className="primary-title">PACKAGES</PrimaryTitle>
        <h2 className="secondary-title">Awesome Packages</h2>
        <div className="cards">
          <div
            className="card animate__animated animate__fadeInUp"
            data-wow-delay="0.1s"
          >
            <img className="card__image" src={PackagesImage1} alt="" />
            <div className="card__info">
              <span>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                &nbsp;&nbsp;Thailand
              </span>
              <span>
                <FontAwesomeIcon icon={faCalendarAlt} />
                &nbsp;&nbsp;3 days
              </span>
              <span>
                <FontAwesomeIcon icon={faUserAlt} />
                &nbsp;&nbsp;2 Person
              </span>
            </div>
            <div className="card__body">
              <strong className="card__body__price">$149.00</strong>
              <div className="card__body__rate">
                <FontAwesomeIcon icon={faStar} />
                &nbsp;
                <FontAwesomeIcon icon={faStar} />
                &nbsp;
                <FontAwesomeIcon icon={faStar} />
                &nbsp;
                <FontAwesomeIcon icon={faStar} />
                &nbsp;
                <FontAwesomeIcon icon={faStar} />
                &nbsp;
              </div>
              <p className="card__body__desc">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam
                amet diam eos
              </p>
              <div className="card__body__cta">
                <a href="#">Read More</a>
                <a href="#">Book Now</a>
              </div>
            </div>
          </div>
          <div
            className="card animate__animated animate__fadeInUp"
            data-wow-delay="0.3s"
          >
            <img className="card__image" src={PackagesImage2} alt="" />
            <div className="card__info">
              <span>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                &nbsp;&nbsp;Indonesia
              </span>
              <span>
                <FontAwesomeIcon icon={faCalendarAlt} />
                &nbsp;&nbsp;3 days
              </span>
              <span>
                <FontAwesomeIcon icon={faUserAlt} />
                &nbsp;&nbsp;2 Person
              </span>
            </div>
            <div className="card__body">
              <strong className="card__body__price">$139.00</strong>
              <div className="card__body__rate">
                <FontAwesomeIcon icon={faStar} />
                &nbsp;
                <FontAwesomeIcon icon={faStar} />
                &nbsp;
                <FontAwesomeIcon icon={faStar} />
                &nbsp;
                <FontAwesomeIcon icon={faStar} />
                &nbsp;
                <FontAwesomeIcon icon={faStar} />
                &nbsp;
              </div>
              <p className="card__body__desc">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam
                amet diam eos
              </p>
              <div className="card__body__cta">
                <a href="#">Read More</a>
                <a href="#">Book Now</a>
              </div>
            </div>
          </div>
          <div
            className="card animate__animated animate__fadeInUp"
            data-wow-delay="0.5s"
          >
            <img className="card__image" src={PackagesImage3} alt="" />
            <div className="card__info">
              <span>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                &nbsp;&nbsp;Malaysia
              </span>
              <span>
                <FontAwesomeIcon icon={faCalendarAlt} />
                &nbsp;&nbsp;3 days
              </span>
              <span>
                <FontAwesomeIcon icon={faUserAlt} />
                &nbsp;&nbsp;2 Person
              </span>
            </div>
            <div className="card__body">
              <strong className="card__body__price">$189.00</strong>
              <div className="card__body__rate">
                <FontAwesomeIcon icon={faStar} />
                &nbsp;
                <FontAwesomeIcon icon={faStar} />
                &nbsp;
                <FontAwesomeIcon icon={faStar} />
                &nbsp;
                <FontAwesomeIcon icon={faStar} />
                &nbsp;
                <FontAwesomeIcon icon={faStar} />
                &nbsp;
              </div>
              <p className="card__body__desc">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam
                amet diam eos
              </p>
              <div className="card__body__cta">
                <a href="#">Read More</a>
                <a href="#">Book Now</a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
