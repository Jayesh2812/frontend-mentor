import React, { useEffect, useRef, useState } from "react";
import useStyle from "../../hooks/useStyle";
import styles from "./Destination.module.scss";
import Image from "next/image";
import { useRouter } from "next/router";

function Destination({ destinations, name }) {
  const [cx, g] = useStyle(styles);
  const [activeDestination, setActiveDestination] = useState(0);
  const destinationNavRef = useRef();
  function getScrollParent(element) {
    if (element.nodeName === "IMG") {
      return element.parentElement.parentElement;
    }
    return element.parentElement;
  }
  function bringInView() {
    let elements = document.querySelectorAll(
      `[data-destination-key="${activeDestination}"]`
    );
    elements.forEach((element) => {
      getScrollParent(element).scrollTo({
        top: 0,
        left: activeDestination * element.clientWidth,
        behavior: "smooth",
      });
    });
    const btn = document.getElementById(`nav-btn-${activeDestination}`);
    const { x, width } = btn.getBoundingClientRect();
    const parentX = destinationNavRef.current.getBoundingClientRect().x;
    const left = x + width / 2 - parentX + "px";
    destinationNavRef.current.style.setProperty("--left", left);
  }
  const handleClick = (key) => (e) => {
    setActiveDestination(key);
  };
  useEffect(() => {
    bringInView();
  }, [activeDestination]);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setActiveDestination(
  //       (activeDestination) => (activeDestination + 1) % destinations.length
  //     );
  //   }, [1000]);

  //   return () => {
  //     window.clearInterval(interval)
  //   }
  // }, []);
  return (
    <section className={cx("destination")}>
      <div className={cx("destination-address")}>
        <span className={cx("destination-number")}>01</span>

        <span className={cx("destination-line")}>PICK YOUR DESTINATION</span>
      </div>

      <div className={cx("destination-images", g`scroll-snap`)}>
        {destinations.map((destination, index) => (
          <Image
            width={"100%"}
            height={"100%"}
            key={index}
            data-destination-key={index}
            src={`/assets/destination/${destination.images.png}`}
            alt=""
          />
        ))}
      </div>

      <div className={cx("destination-nav")} ref={destinationNavRef}>
        {destinations.map((destination, index) => (
          <button
            key={index}
            id={`nav-btn-${index}`}
            className={cx("nav-item")}
            onClick={handleClick(index)}
          >
            {destination.name}
          </button>
        ))}
      </div>

      <div className={cx("destination-infos", g`scroll-snap`)}>
        {destinations.map((destination, index) => (
          <div
            key={index}
            data-destination-key={index}
            className={cx("destination-info")}
          >
            <h1 className={cx("destination-name")}>{destination.name}</h1>
            <p className={cx("destination-description")}>
              {destination.description}
            </p>
          </div>
        ))}
      </div>

      <hr className={cx("hr")} />

      <div className={cx("destination-stats")}>
        <div className={cx("destination-stat")}>
          <span className={cx("stat-name")}>AVG. DISTANCE</span>
          <div className={cx("stat-value-wrapper", g`scroll-snap`)}>
            {destinations.map((destination, index) => (
              <span
                data-destination-key={index}
                key={index}
                className={cx("stat-value")}
              >
                {destination.distance}
              </span>
            ))}
          </div>
        </div>

        <div className={cx("destination-stat")}>
          <span className={cx("stat-name")}>Est. travel time</span>
          <div className={cx("stat-value-wrapper", g`scroll-snap`)}>
            {destinations.map((destination, index) => (
              <span
                data-destination-key={index}
                key={index}
                className={cx("stat-value")}
              >
                {destination.travel}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Destination;
