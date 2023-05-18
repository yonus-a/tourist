import "./style.scss";
import Hero from "./hero";
import About from "./about";
import Services from "./services";
import Destinations from "./destinations";
import Packages from "./packages";

export default function Main() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Destinations />
      <Packages />
    </main>
  );
}
