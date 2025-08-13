"use client";

import { animate, onScroll } from "animejs";
import { useEffect } from "react";

export function Navigation() {
  useEffect(() => {
    animate("#navigation-main", {
      y: [120, 0],
      filter: ["blur(12px)", "blur(0px)"],
      opacity: [0.2, 1],
      scale: [0.9, 1],
      duration: 600,
      easing: "ease-out",
      autoplay: onScroll({
        container: ".container",
        target: ".section",
        axis: "y",
        enter: "top+=10 top",
        leave: "top top+=200",
        sync: true,
      }),
    });
  });

  return (
    <nav
      id="navigation-container"
      className="fixed left-0 bottom-0 w-screen flex justify-center"
    >
      <div className="flex justify-center mb-8 w-full h-12">
        <div id="navigation-main" className="absolute">
          <a rel="me" href="mailto:christoph@zimnicki.co">
            <button className="rounded-[18px] hover:bg-black/90 cursor-pointer select-none active:scale-[0.97] duration-200 transition-all text-sm  bg-black text-stone-100 px-3 h-10 flex items-center justify-center">
              Contact
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
}
