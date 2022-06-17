import React, { useEffect, useState } from "react";
import useStyle from "../../hooks/useStyle";
import styles from "./Technology.module.scss";
import Image from "next/image";
import { useRouter } from "next/router";
function Technology({ technology: technologies }) {
  const [cx, g] = useStyle(styles);
  const [activeTechnology, setActiveTechnology] = useState(0);
  function getScrollParent(element) {
    if (element.nodeName === "IMG") {
      return element.parentElement.parentElement;
    }
    return element.parentElement;
  }
  const handleChange = (index) => () => {
    setActiveTechnology(index);
  };
  const bringInView = () => {
    let elements = document.querySelectorAll(
      `[data-technology-key="${activeTechnology}"]`
    );
    elements.forEach((element) => {
      getScrollParent(element).scrollTo({
        top: 0,
        left: activeTechnology * element.clientWidth,
        behavior: "smooth",
      });
    });
  };
  useEffect(() => {
    bringInView();
  }, [activeTechnology]);
  
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setActiveTechnology(
  //       (activeTechnology) => (activeTechnology + 1) % technologies.length
  //     );
  //   }, [1000]);

  //   return () => {
  //     window.clearInterval(interval);
  //   };
  // }, []);
  return (
    <section className={cx("technology")}>
      <div className={cx("technology-address")}>
        <span className={cx("technology-number")}>03</span>

        <span className={cx("technology-line")}>SPACE LAUNCH 101</span>
      </div>
      <div className={cx("technology-images", g`scroll-snap`)}>
        {technologies.map((technology, index) => (
          <Image
            width={"375"}
            height={"100%"}
            key={index}
            data-technology-key={index}
            src={`/assets/technology/${technology.images.landscape}`}
            alt=""
          />
        ))}
      </div>
      <hr />
      <div className={cx("technology-nav")}>
        {technologies.map((technology, index) => (
          <>
            <input
              type="radio"
              value={index}
              onChange={handleChange(index)}
              id={`technology${index}`}
              name="technology"
              key={`technology${index}`}
              checked={index === activeTechnology}
            />
            <label
              key={index}
              className={cx("nav-item")}
              htmlFor={`technology${index}`}
            >
              <span>{index + 1}</span>
            </label>
          </>
        ))}
      </div>
      <p className="technology-info-address">THE TERMINOLOGY…</p>
      <div className={cx("technology-infos", g`scroll-snap`)}>
        {technologies.map((technology, index) => (
          <div
            key={index}
            data-technology-key={index}
            className={cx("technology-info")}
          >
            <h1 className={cx("technology-name")}>{technology.name}</h1>
            <p className={cx("technology-description")}>
              {technology.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Technology;