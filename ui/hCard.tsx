"use client";

import { animate, onScroll, stagger } from "animejs";
import { Button } from "./button";
import { useEffect } from "react";
import { FaArrowDown } from "react-icons/fa6";
import { usePathname } from "next/navigation";

export function Card() {

    const path = usePathname()

    useEffect(() => {
        animate("#navigation-down", {
            y: 100,
            filter: "blur(12px)",
            opacity: 0.2,
            scale: 0.9,
            autoplay: onScroll({
                container: ".container",
                target: ".section",
                axis: "y",
                enter: "top top+=10",
                leave: "top+=10 top+=1000",
                sync: true,
            }),
        });
        animate("#navigation-main", {
            autoplay: onScroll({
                container: "body",
                target: ".section",
                axis: "y",
                enter: "0 100",
                leave: "0 150",
                sync: true,
                onEnterForward: () => {
                    animate("#navigation-main", {
                        duration: 400,
                        display: "block",
                        opacity: 1,
                        y: 0,
                        filter: "blur(0px)",
                    });
                },
                onEnterBackward: () => {
                    animate("#navigation-main", {
                        // display: stagger(["block", "none"]),
                        duration: 400,
                        display: "none",
                        opacity: 0,
                        y: 100,
                        filter: "blur(12px)",
                    });
                },
            }),
        });
    });

    useEffect(() => {
        animate("#path", {
            clipPath: ["inset(0 100% 0 0)", "inset(0 0% 0 0)"],
            x: 48
        })
    }, [path])

    return (
        <a
            className="h-card fixed left-0 top-0 w-screen flex justify-center items-center"
            href="https://zimnicki.co"
        >
            <img src="me-alt.jpg" className="u-photo size-8 mt-8 shadow-stone-100 rounded-xl shadow-xl" />
            <p id="path" className="mt-7 -translate-x-10"> / Design</p>
        </a>
    );
}
