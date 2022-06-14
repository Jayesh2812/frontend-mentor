import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.scss";
import useStyle from "../../hooks/useStyle";
const navigationData = [
  { path: "/", name: "HOME" },
  { path: "/destination", name: "DESTINATION" },
  { path: "/crew", name: "CREW" },
  { path: "/technology", name: "TECHNOLOGY" },
];
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
        <a>
          <Image
            width={48}
            height={48}
            className={cx("logo")}
            src="/assets/shared/logo.svg"
            alt="site-logo"
          />
        </a>
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
          {navigationData.map((navItem, index) => (
            <li key={index} onClick={closeMenu}>
              <Link href={navItem.path}>
                <a className={cx("nav-item")}>
                  <span className={cx("nav-item-number")}>0{index}</span>
                  <span className="nav-item-text">{navItem.name}</span>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
