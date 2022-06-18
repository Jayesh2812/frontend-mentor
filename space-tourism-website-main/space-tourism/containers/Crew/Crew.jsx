import React, { useEffect, useState } from "react";
import useStyle from "../../hooks/useStyle";
import useHorizontalSwipe from "../../hooks/useHorizontalSwipe";
import useBringIntoView from "../../hooks/useBringIntoView";
import styles from "./Crew.module.scss";
import Image from "next/image";
import { useRouter } from "next/router";

function Crew({ crew, name }) {
  const [activeCrewMember, setActiveCrewMember] = useState(0);
  const swipeRef = useHorizontalSwipe({
    onLeftSwipe: () => {
      setActiveCrewMember(
        (activeCrewMember - 1 + 2 * crew.length) % crew.length
      );
    },
    onRightSwipe: () => {
      setActiveCrewMember(
        (activeCrewMember + 1) % crew.length
      );
    },
  });
  const [cx, g] = useStyle(styles);
  const bringIntoView = useBringIntoView(activeCrewMember, 'crew')
  const handleChange = (index) => () => {
    setActiveCrewMember(index);
  };

  useEffect(() => {
    bringIntoView();
  }, [activeCrewMember]);
  return (
    <section className={cx("crew")}>
      <div className={cx("crew-address")}>
        <span className={cx("crew-number")}>02</span>
        <span className={cx("crew-line")}>MEET YOUR CREW</span>
      </div>
      <div ref={swipeRef} className={cx("crew-images", g`scroll-snap`)}>
        {crew.map((crewMember, index) => (
          <Image
            priority
            width={"226"}
            height={"100%"}
            key={index}
            data-crew-key={index}
            src={`/assets/crew/${crewMember.images.png}`}
            alt=""
          />
        ))}
      </div>
      <hr />
      <div className={cx("crew-nav")}>
        {crew.map((crewMember, index) => (
          <>
            <input
              type="radio"
              value={index}
              onChange={handleChange(index)}
              id={`crew${index}`}
              name="crew"
              key={`crew${index}`}
              checked={index === activeCrewMember}
            />
            <label
              key={index}
              className={cx("nav-item")}
              htmlFor={`crew${index}`}
            ></label>
          </>
        ))}
      </div>

      <div className={cx("crew-infos", g`scroll-snap`)}>
        {crew.map((crewMember, index) => (
          <div key={index} data-crew-key={index} className={cx("crew-info")}>
            <h2 className={cx("crew-role")}>{crewMember.role}</h2>
            <h1 className={cx("crew-name")}>{crewMember.name}</h1>
            <p className={cx("crew-description")}>{crewMember.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Crew;
