import React from "react";
import useStyle from "../../hooks/useStyle";
import styles from "./Home.module.scss";
function Home() {
  const cx = useStyle(styles);
  return (
    <section className={cx("home")}>
      <h3 className={cx("home-address")}>SO, YOU WANT TO TRAVEL TO</h3>
      <h1 className={cx("home-heading")}>SPACE</h1>
      <p className={cx("home-description")}>
        Let’s face it; if you want to go to space, you might as well genuinely
        go to outer space and not hover kind of on the edge of it. Well sit
        back, and relax because we’ll give you a truly out of this world
        experience!
      </p>

      <button className={cx("cta-btn")}>
        <h2 className={cx("cta-text")}>EXPLORE</h2>
      </button>
    </section>
  );
}

export default Home;
