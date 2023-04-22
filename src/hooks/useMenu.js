import { useEffect } from "react";

export default function useMenu() {
  useEffect(() => {
    const trigger = document.querySelector("[aria-haspopup]");
    const container = trigger.parentElement;
    const menu = trigger.nextElementSibling;

    function mediaQeuery(x) {
      if (x.matches) {
        container.removeEventListener("mouseover", handleMouseover);
        container.removeEventListener("mouseleave", handleMouseleave);
        trigger.addEventListener("click", handleClick);
      } else {
        trigger.removeEventListener("click", handleClick);
        container.addEventListener("mouseover", handleMouseover);
        container.addEventListener("mouseleave", handleMouseleave);
      }
    }

    function handleClick() {
      menu.classList.toggle("hidden");
      var isExpanded = trigger.getAttribute("aria-expanded");
      if (isExpanded) trigger.setAttribute("aria-expanded", "false");
      else trigger.setAttribute("aria-expanded", "true");
    }

    function handleMouseover() {
      menu.classList.remove("hidden");
      trigger.setAttribute("aria-expanded", "true");
    }

    function handleMouseleave() {
      menu.classList.add("hidden");
      trigger.setAttribute("aria-expanded", "false");
    }

    var x = window.matchMedia("(max-width: 992px)");
    mediaQeuery(x);
    x.addEventListener("change", mediaQeuery);
  });
}
