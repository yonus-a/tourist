import Button from "../../button";
import Container from "../../container";
import "./style.scss";

export default function Hero() {
  return (
    <section className="hero" aria-label="hero">
      <Container>
        <h1 className="title animate__animated animate__slideInDown">
          Enjoy Your Vacation With Us
        </h1>
        <p className="sub-title animate__animated animate__slideInDown">
          Tempor erat elitr rebum at clita diam amet diam et eos erat ipsum
          lorem sit
        </p>
        <div className="wrapper">
          <div className="input-group animate__animated animate__slideInDown">
            <input
              type="search"
              className="search"
              placeholder="Eg: Thailand"
            />
            <Button className="search-cta">Search</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
