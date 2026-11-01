"use client";

import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import styles from "./Navbar.module.scss";

const menuItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Section intersection detection
      const scrollPosition = window.scrollY + 200;
      for (const item of menuItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
        <nav className={styles.navContainer} aria-label="Main Navigation">
          {/* Logo / Brand */}
          <div
            className={styles.brand}
            onClick={() => handleMenuItemClick("home")}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && handleMenuItemClick("home")}
            data-cursor="hover"
            data-cursor-text="DSR"
          >
            <span>𝕯</span>
            <span className={styles.brandAccent}>.</span>
            <span>𝓢</span>
            <span className={styles.brandDot}>.</span>
            <span>𝓡</span>
          </div>

          {/* Desktop Menu */}
          <ul className={styles.navLinks}>
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => handleMenuItemClick(item.id)}
                  className={`${styles.navLinkBtn} ${
                    activeSection === item.id ? styles.active : ""
                  }`}
                  data-cursor="hover"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Social Icons */}
          <div className={styles.socialActions}>
            <a
              href="https://github.com/devendra-508"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className={styles.socialIconBtn}
              data-cursor="hover"
              data-cursor-text="GIT"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/devendra-rana-44b274300"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className={styles.socialIconBtn}
              data-cursor="hover"
              data-cursor-text="IN"
            >
              <FaLinkedin size={18} />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            className={styles.mobileToggle}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </nav>
      </header>

      {/* Mobile Drawer */}
      <div className={`${styles.mobileDrawer} ${isOpen ? styles.open : ""}`}>
        {menuItems.map((item) => (
          <button
            key={item.id}
            type="button"
            className={`${styles.mobileNavLink} ${
              activeSection === item.id ? styles.active : ""
            }`}
            onClick={() => handleMenuItemClick(item.id)}
          >
            {item.label}
          </button>
        ))}

        <div className={styles.mobileSocials}>
          <a
            href="https://github.com/devendra-508"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className={styles.socialIconBtn}
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/devendra-rana-44b274300"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className={styles.socialIconBtn}
          >
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>
    </>
  );
}
