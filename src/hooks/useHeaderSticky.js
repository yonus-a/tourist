import { useEffect, useRef } from "react";

export default function useHeaderSticky() {
  var headerRef = useRef();

  useEffect(() => {
    var header = headerRef.current;
    var sticky = header.offsetTop;

    window.onscroll = () => {
      if (
        window.pageYOffset > sticky &&
        window.matchMedia("(min-width: 992px)").matches
      ) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    };
  });

  return headerRef;
}
