import Container from "../../container";
import "./style.scss";

export default function Booking() {
  return (
    <section className="booking" aria-label="Booking">
      <Container>
        <div className="col left-col">
          <h2 className="title">BOOKING</h2>
          <p className="subtitle">Online Booking</p>
          <p>
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos. Clita erat ipsum et lorem et sit.
          </p>
          <p>
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
            lorem sit clita duo justo magna dolore erat amet
          </p>
          <a href="#" className="cta">
            Read More
          </a>
        </div>
        <div className="col right-col">
          <h2 className="title">Book A Tour</h2>
          <form>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <input type="date" placeholder="Date & Time" />
            <select>
              <option value="destination1">Destination 1</option>
              <option value="destination2">Destination 2</option>
              <option value="destination3">Destination 3</option>
            </select>
            <textarea placeholder="Special Request" />
            <button className="cta">Book Now</button>
          </form>
        </div>
      </Container>
    </section>
  );
}
