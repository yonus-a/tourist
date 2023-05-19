import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Container from "../../container";
import PrimaryTitle from "../../primary-title";
import "./style.scss";
import {
  faDollarSign,
  faGlobe,
  faPlane,
} from "@fortawesome/free-solid-svg-icons";

export default function Process() {
  return (
    <section className="process" aria-label="process">
      <Container>
        <PrimaryTitle className="primary-title">PROCESS</PrimaryTitle>
        <h2 className="secondary-title">3 Easy Steps</h2>
        <div className="cards">
          <div
            className="card animate__animated animate__fadeInUp"
            data-wow-delay="0.1s"
          >
            <div className="card__image">
              <FontAwesomeIcon icon={faGlobe} />
            </div>
            <h2 className="card__title">Choose A Destination</h2>
            <div className="lines">
              <span></span>
              <span></span>
            </div>
            <p className="card__desc">
              Tempor erat elitr rebum clita dolor diam ipsum sit diam amet diam
              eos erat ipsum et lorem et sit sed stet lorem sit
            </p>
          </div>
          <div
            className="card animate__animated animate__fadeInUp"
            data-wow-delay="0.3s"
          >
            <div className="card__image">
              <FontAwesomeIcon icon={faDollarSign} />
            </div>
            <h2 className="card__title">Pay Online</h2>
            <div className="lines">
              <span></span>
              <span></span>
            </div>
            <p className="card__desc">
              Tempor erat elitr rebum clita dolor diam ipsum sit diam amet diam
              eos erat ipsum et lorem et sit sed stet lorem sit
            </p>
          </div>
          <div
            className="card animate__animated animate__fadeInUp"
            data-wow-delay="0.5s"
          >
            <div className="card__image">
              <FontAwesomeIcon icon={faPlane} />
            </div>
            <h2 className="card__title">Fly Today</h2>
            <div className="lines">
              <span></span>
              <span></span>
            </div>
            <p className="card__desc">
              Tempor erat elitr rebum clita dolor diam ipsum sit diam amet diam
              eos erat ipsum et lorem et sit sed stet lorem sit
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
