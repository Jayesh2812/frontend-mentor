import React, { useRef } from "react";
import { Image, Link } from "next";
import styles from "./Navbar.module.scss";
import useStyle from "../../hooks/useStyle";
function Navbar() {
  const [cx] = useStyle(styles);
  const mobileNavRef = useRef()
  
  const openMenu = () =>{
    mobileNavRef.current.classList.add(cx('active'))
  }
  const closeMenu = () =>{
    mobileNavRef.current.classList.remove(cx('active'))

  }
  return (
    <nav className={cx('navbar')}>
      <img src="/assets/shared/logo.svg" alt="site-logo" />
      <button onClick={openMenu} className={cx("open-menu-btn")}>
        <img className={cx('open-menu-icon')} src="/assets/shared/icon-hamburger.svg" alt="open-menu" />
      </button>

      <div ref={mobileNavRef} className={cx("mobile-nav")}>
        <button onClick={closeMenu} className={cx("close-menu-btn")}>
          <img
            className={cx("close-menu-icon")}
            src="/assets/shared/icon-close.svg"
            alt="close-menu"
          />
        </button>

        <ul className={cx("nav-items")}>
          <li>
            <a className={cx("nav-item")} href="/">
              <span className={cx("nav-item-number")}>00</span> 
              <span className="nav-item-text">HOME</span> 
            </a>
          </li>
          <li>
            <a className={cx("nav-item")} href="/destination">
              <span className={cx("nav-item-number")}>01</span> 
              <span className="nav-item-text">DESTINATION</span> 
            </a>
          </li>
          <li>
            <a className={cx("nav-item")} href="/crew">
              <span className={cx("nav-item-number")}>02</span> 
              <span className="nav-item-text">CREW</span> 
            </a>
          </li>
          <li>
            <a className={cx("nav-item")} href="/technology">
              <span className={cx("nav-item-number")}>03</span> 
              <span className="nav-item-text">TECHNOLOGY</span> 
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
