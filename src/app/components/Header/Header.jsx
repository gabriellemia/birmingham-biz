"use client";
import styles from "./Header.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";

export default function Header() {
  const searchRef = useRef();
  const navRef = useRef();

  const showSearchBox = () => {
    searchRef.current.classList.toggle(styles.responsive_search);
  };

  const showNavbar = () => {
    navRef.current.classList.toggle(styles.responsive_nav);
  };

  return (
    <>
      <div className={styles.headerBackground}></div>
      <header className={styles.header}>
        <Image
          className={styles.logoBB}
          src="/BBLogo.png"
          width={147}
          height={150}
          alt="Birmingham Business logo"
        />
        <nav className={styles.topNavBar} aria-label="Main navigation">
          <h1 className={styles.birmingham}>Birmingham</h1>
          <ul className={styles.navBarContainer} ref={navRef}>
            <li>
              <a className={styles.navLinks} href="/">
                Home
              </a>
            </li>
            <li>
              <a className={styles.navLinks} href="/news">
                News
              </a>
            </li>
            <li>
              <a className={styles.navLinks} href="/features">
                Features and Analysis
              </a>
            </li>
            <li>
              <a className={styles.navLinks} href="/five-minutes">
                Five Minutes With
              </a>
            </li>
            <li>
              <a className={styles.navLinks} href="/insights">
                Insights
              </a>
            </li>
            <li>
              <a className={styles.navLinks} href="/archive">
                Magazine Archive
              </a>
            </li>
            <li>
              <button
              className={`${styles.navBtn} ${styles.navCloseBtn} ${styles.navCross}`}
              onClick={showNavbar}
              aria-label="close navigation"
            >
              <FaTimes />
            </button>
            </li>
            
          </ul>
          <section className={styles.buttonsContainer}>
            <button
              className={`${styles.magContainer} ${styles.searchBtn} ${styles.searchCloseBtn}`}
              onClick={showSearchBox}
              aria-label="toggle search box"
            >
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className={styles.magIcon}
              />
            </button>

            <button
              className={`${styles.navBtn} ${styles.navCloseBtn} ${styles.burgerIcon}`}
              onClick={showNavbar}
              aria-label="open navigation"
            >
              <FaBars />
            </button>
          </section>
        </nav>

        <nav className={styles.bottomNavBar} aria-label="Bottom navigation">
          <h1 className={styles.business}>Business</h1>
          <form className={styles.searchContainer} role="search">
            <input
              className={`${styles.searchBox} ${styles.responsive_search}`}
              ref={searchRef}
              type="search"
              id="search"
              placeholder=" Search"
              aria-label="Search story"
            ></input>
          </form>
        </nav>
      </header>
    </>
  );
}
