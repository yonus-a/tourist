import Header from "./components/header";
import { ReactComponent as Svgs } from "./svg-sprite.svg";
import "./app.scss";
import { useEffect } from "react";
import Main from "./components/main";
import "animate.css";
import WOW from "wowjs";

export default function App() {
  useEffect(() => {
    var loader = document.querySelector(".loader");
    document.body.removeChild(loader);

    new WOW.WOW({
      boxClass: "animate__animated",
    }).init();
  }, []);

  return (
    <>
      <Header />
      <Main />
      <div className="svg-sprite">
        <Svgs />
      </div>
    </>
  );
}
