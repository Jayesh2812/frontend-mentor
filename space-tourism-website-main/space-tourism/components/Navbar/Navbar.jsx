import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.scss";
import useStyle from "../../hooks/useStyle";
function Navbar() {
  const [cx] = useStyle(styles);
  const mobileNavRef = useRef();

  const openMenu = () => {
    mobileNavRef.current.classList.add(cx("active"));
  };
  const closeMenu = () => {
    mobileNavRef.current.classList.remove(cx("active"));
  };
  return (
    <nav className={cx("navbar")}>
      <Link href="/">
        <Image
          width={48}
          height={48}
          className={cx("logo")}
          src="/assets/shared/logo.svg"
          alt="site-logo"
        />
      </Link>
      <button onClick={openMenu} className={cx("open-menu-btn")}>
        <Image
          width={24}
          height={21}
          className={cx("open-menu-icon")}
          src="/assets/shared/icon-hamburger.svg"
          alt="open-menu"
        />
      </button>

      <div ref={mobileNavRef} className={cx("mobile-nav")}>
        <button onClick={closeMenu} className={cx("close-menu-btn")}>
          <Image
            width={19}
            height={19}
            className={cx("close-menu-icon")}
            src="/assets/shared/icon-close.svg"
            alt="close-menu"
          />
        </button>

        <ul className={cx("nav-items")}>
          <li>
            <Link href="/">
              <a className={cx("nav-item")}>
                <span className={cx("nav-item-number")}>00</span>
                <span className="nav-item-text">HOME</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/destination">
              <a className={cx("nav-item")}>
                <span className={cx("nav-item-number")}>01</span>
                <span className="nav-item-text">DESTINATION</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/crew">
              <a className={cx("nav-item")}>
                <span className={cx("nav-item-number")}>02</span>
                <span className="nav-item-text">CREW</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/technology">
              <a className={cx("nav-item")}>
                <span className={cx("nav-item-number")}>03</span>
                <span className="nav-item-text">TECHNOLOGY</span>
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
