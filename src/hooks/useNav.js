import { useEffect } from "react";

export default function useNav() {
  useEffect(() => {
    const mobile_cta = document.querySelector(".mobile-cta");
    var container = document.querySelector(".main-nav .left-col");

    mobile_cta.addEventListener("click", () => {
      container.classList.toggle("open");
      var isExpanded = mobile_cta.getAttribute("aria-expanded") === "true";
      if (isExpanded) mobile_cta.setAttribute("aria-expanded", "false");
      else mobile_cta.setAttribute("aria-expanded", "true");
    });
  });
}
