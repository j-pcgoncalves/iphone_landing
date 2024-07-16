import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { yellowImg } from "../utils";
import { animateWithGsapTimeline } from "../utils/animations";

const Model = () => {
    const [size, setSize] = useState("small");
    const [model, setModel] = useState({
        title: "iPhone 15 Pro in Natural Titanium",
        color: ["#8F8A81", "#FFE7B9", "#6F6C64"],
        img: yellowImg,
    });

    // Camera control for the model view
    const cameraControlSmall = useRef();
    const cameraControlLarge = useRef();

    // Model
    const small = useRef(new THREE.Group());
    const large = useRef(new THREE.Group());

    // Rotation
    const [smallRotation, setSmallRotation] = useState(0);
    const [largeRotation, setLargeRotation] = useState(0);

    const tl = gsap.timeline();

    useEffect(() => {
        if(size === "large") {
            animateWithGsapTimeline(tl, small, smallRotation, "#view1", "#view2", {
                transform: "translateX(-100%)",
                duration: 2
            })
        }

        if (size === "small") {
            animateWithGsapTimeline(tl, large, largeRotation, "#view2", "#view1", {
                transform: "translate(0)",
                duration: 2
            })
        }
    }, [size]);

    useGSAP(() => {
        gsap.to("#heading", { y: 0, opacity: 1 })
    }, []);

    return (
        <section className="common-padding">
            <div className="screen-max-width">
                <h1 id="heading" className="section-heading">
                    Take a closer look.
                </h1>

                <div className="flex flex-col items-center mt-5">
                    <div className="w-full h-[75vh] md:h-[90vh] overflow-hidden relative">

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Model;