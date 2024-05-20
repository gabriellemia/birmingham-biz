"use client";
import styles from "./Header.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FaBars, FaTimes, faBars, faTimes } from "react-icons/fa";
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
				<nav className={styles.topNavBar}>
					<h1 className={styles.birmingham}>Birmingham</h1>
					<ul className={styles.navBarContainer} ref={navRef}>
						<li>
							<a className={styles.navLinks} href="/">
								Home
							</a>
						</li>
						<li>
							<a className={styles.navLinks} href="/story">
								News
							</a>
						</li>
						<li>
							<a className={styles.navLinks} href="/story">
								Features and Analysis
							</a>
						</li>
						<li>
							<a className={styles.navLinks} href="/story">
								Five Minutes With
							</a>
						</li>
						<li>
							<a className={styles.navLinks} href="/story">
								Insights
							</a>
						</li>
						<li>
							<a className={styles.navLinks} href="/story">
								Magazine Archive
							</a>
						</li>
						<button
							className={`${styles.navBtn} ${styles.navCloseBtn} ${styles.navCross}`}
							onClick={showNavbar}
						>
							<FaTimes />
						</button>
					</ul>
					<div className={styles.buttonsContainer}>
						<button
							className={`${styles.magContainer} ${styles.searchBtn} ${styles.searchCloseBtn}`}
							onClick={showSearchBox}
						>
							<FontAwesomeIcon
								icon={faMagnifyingGlass}
								className={styles.magIcon}
							/>
						</button>

						<button
							className={`${styles.navBtn} ${styles.navCloseBtn} ${styles.burgerIcon}`}
							onClick={showNavbar}
						>
							<FaBars />
						</button>
					</div>
				</nav>

				<nav className={styles.bottomNavBar}>
					<h1 className={styles.business}>Business</h1>
					<div className={styles.searchContainer}>
						<input ref={searchRef} type="text"></input>
						{/* <button
							className={`${styles.searchBtn} ${styles.searchCloseBtn} ${styles.searchCross}`}
							onClick={showSearchBox}
						>
							<FaTimes />
						</button> */}
					</div>
				</nav>
			</header>
		</>
	);
}
