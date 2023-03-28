import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineClose } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { logo, profile, sun } from "../../images/images";
import styles from "./styles.module.css";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navItems = [
    { navItem: "Home", to: "/" },
    { navItem: "Staking", to: "/staking" },
    { navItem: "Create IDO", to: "/createIdo" },
    { navItem: "Create Token", to: "/createToken" },
    { navItem: "Docs", to: "/docs" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition >= 90) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up event listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className={`${styles.navbar} ${isScrolled && styles.navBg}`}>
      <div className="container">
        <div className={styles.navs}>
          <div className={styles.logoContainer}>
            <img src={logo} alt="#" className={styles.logo} />
            <p className={styles.logoText}>ArtPanda</p>
          </div>
          <div
            className={`${styles.navItemsAndButtons} ${
              sidebar && styles.sidebar
            }`}
          >
            <div className={`${styles.navItems} `}>
              {navItems.map((el, i) => (
                <NavLink
                  onClick={() => setSidebar((prev) => !prev)}
                  to={el.to}
                  key={i}
                  className={({ isActive }) =>
                    isActive ? styles.navItemActive : styles.navItem
                  }
                >
                  {el.navItem}
                </NavLink>
              ))}
              {sidebar && (
                <MdOutlineClose
                  className={styles.close}
                  onClick={() => setSidebar((prev) => !prev)}
                />
              )}
            </div>
            <div className={styles.buttonContainer}>
              <Link to="/" className={styles.iconContainer}>
                <img src={profile} alt="#" className={styles.icon} />
              </Link>{" "}
              <Link to="/" className={styles.iconContainer}>
                <img src={sun} alt="#" className={styles.icon} />
              </Link>
              <a href="#/" className={styles.button}>
                <span className={styles.buttonText}>connect wallet</span>
              </a>{" "}
            </div>
          </div>{" "}
        </div>
      </div>{" "}
      <RxHamburgerMenu
        className={styles.hamburger}
        onClick={() => setSidebar((prev) => !prev)}
      />
    </section>
  );
};

export default Navbar;
