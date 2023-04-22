import Header from "./components/header";
import { ReactComponent as Svgs } from "./svg-sprite.svg";
import "./app.scss";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    var loader = document.querySelector(".loader");
    document.body.removeChild(loader);
  });

  return (
    <>
      <Header />
      <div className="svg-sprite">
        <Svgs />
      </div>
    </>
  );
}
