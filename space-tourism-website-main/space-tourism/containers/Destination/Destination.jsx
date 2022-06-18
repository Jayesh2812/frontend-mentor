import React, { useEffect, useRef, useState } from "react";
import useStyle from "../../hooks/useStyle";
import styles from "./Destination.module.scss";
import Image from "next/image";
import { useRouter } from "next/router";
import useHorizontalSwipe from "../../hooks/useHorizontalSwipe";
import useBringIntoView from "../../hooks/useBringIntoView";

function Destination({ destinations, name }) {
  const [cx, g] = useStyle(styles);
  const [activeDestination, setActiveDestination] = useState(0);
  const destinationNavRef = useRef();
  const swipeRef = useHorizontalSwipe({
    onLeftSwipe: () => {
      setActiveDestination(
        (activeDestination - 1 + 2 * destinations.length) % destinations.length
      );
    },
    onRightSwipe: () => {
      setActiveDestination((activeDestination + 1) % destinations.length);
    },
  });

  const moveNavLine = () => {
    const btn = document.getElementById(`nav-btn-${activeDestination}`);
    const { x, width } = btn.getBoundingClientRect();
    const { x: parentX, width: W } = destinationNavRef.current.getBoundingClientRect();
    const left = x + width / 2 - parentX + "px";
    destinationNavRef.current.style.setProperty("--left", left);
  };
  const bringIntoView = useBringIntoView(
    activeDestination,
    "destination",
    moveNavLine
  );
  const handleClick = (key) => (e) => {
    setActiveDestination(key);
  };
  useEffect(() => {
    document.fonts.ready.then(function() {
      bringIntoView();
    })
  }, [activeDestination]);

  return (
    <section className={cx("destination")}>
      <div className={cx("destination-address")}>
        <span className={cx("destination-number")}>01</span>

        <span className={cx("destination-line")}>PICK YOUR DESTINATION</span>
      </div>

      <div ref={swipeRef} className={cx("destination-images", g`scroll-snap`)}>
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
