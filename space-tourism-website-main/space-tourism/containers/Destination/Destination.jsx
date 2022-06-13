import React, { useEffect } from "react";
import useStyle from "../../hooks/useStyle";
import styles from "./Destination.module.scss";
function Destination({ destinations }) {
  const cx = useStyle(styles);
  console.log(cx("destination-images"));
  return (
    <section className={cx("destination")}>
      <div className={cx("destination-address")}>
        <div className={cx("destination-numbers")}>
          {destinations.map((destination, index) => (
            <span key={index} className={cx("destination-number")}>
              0{index + 1}
            </span>
          ))}
        </div>

        <span className={cx("destination-line")}>PICK YOUR DESTINATION</span>
      </div>

      <div className={cx("destination-images")}>
        {destinations.map((destination, index) => (
          <img
            key={index}
            src={`/assets/destination/${destination.images.png}`}
            alt=""
          />
        ))}
      </div>

      <div className={cx("destination-nav")}>
        {destinations.map((destination, index) => (
          <button className={cx("nav-item")}>{destination.name}</button>
        ))}
      </div>

      <div className={cx("destination-infos")}>
        {destinations.map((destination, index) => (
          <div key={index} className={cx("destination-info")}>
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
          <div className={cx("stat-value-wrapper")}>
            {destinations.map((destination, index) => (
              <span key={index} className={cx("stat-value")}>
                {destination.distance}
              </span>
            ))}
          </div>
        </div>

        <div className={cx("destination-stat")}>
          <span className={cx("stat-name")}>Est. travel time</span>
          <div className={cx("stat-value-wrapper")}>
            {destinations.map((destination, index) => (
              <span key={index} className={cx("stat-value")}>
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
