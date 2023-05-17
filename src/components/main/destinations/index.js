import PrimaryTitle from "../../primary-title";
import Container from "../../container";
import DestinationImage1 from "./images/destination-1.jpg";
import DestinationImage2 from "./images/destination-2.jpg";
import DestinationImage3 from "./images/destination-3.jpg";
import DestinationImage4 from "./images/destination-4.jpg";
import "./style.scss";

export default function Destinations() {
  return (
    <section className="destinations" aria-label="destinations">
      <Container>
        <PrimaryTitle className="primary-title">DESTINATION</PrimaryTitle>
        <h2 className="secondary-title">Popular Destination</h2>
        <div className="flex-container">
          <div className="tile-group">
            <div
              className="tile animate__animated animate__zoomIn thailand"
              data-wow-delay="0.1s"
            >
              <span className="sale-badge">30% OFF</span>
              <img src={DestinationImage1} alt="" />
              <span className="country">Thailand</span>
            </div>
            <div
              className="tile animate__animated animate__zoomIn malaysia"
              data-wow-delay="0.3s"
            >
              <span className="sale-badge">25% OFF</span>
              <img src={DestinationImage2} alt="" />
              <span className="country">Malaysia</span>
            </div>
            <div
              className="tile animate__animated animate__zoomIn australia"
              data-wow-delay="0.5s"
            >
              <span className="sale-badge">35% OFF</span>
              <img src={DestinationImage3} alt="" />
              <span className="country">Australia</span>
            </div>
          </div>
          <div
            className="tile animate__animated animate__zoomIn indonesia"
            data-wow-delay="0.7s"
          >
            <span className="sale-badge">20% OFF</span>
            <img src={DestinationImage4} alt="" />
            <span className="country">Indonesia</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
