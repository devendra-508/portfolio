"use client";

import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FiArrowUp } from "react-icons/fi";
import styles from "./Footer.module.scss";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Experience", id: "experience" },
  { name: "Projects", id: "projects" },
  { name: "Education", id: "education" },
  { name: "Contact", id: "contact" },
];

export default function Footer() {
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Brand & Mission */}
        <div className={styles.brand}>
          <div className={styles.brandName}>
            Devendra Singh Rana<span>.</span>
          </div>
          <p className={styles.tagline}>
            Full Stack Developer • Engineering Scalable Web Architectures
          </p>
        </div>

        {/* Quick Nav Links */}
        <ul className={styles.navLinks}>
          {navLinks.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => handleScroll(item.id)}
                className={styles.navBtn}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className={styles.socialRow}>
          <a
            href="https://github.com/devendra-508"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className={styles.socialIcon}
          >
            <FaGithub size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/devendra-rana-44b274300"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className={styles.socialIcon}
          >
            <FaLinkedin size={18} />
          </a>
          <a
            href="https://www.instagram.com/iamfromdevbhoomi?igsh=MWN2dnQ1bWIyaXI4MQ=="
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Profile"
            className={styles.socialIcon}
          >
            <FaInstagram size={18} />
          </a>
        </div>

        <div className={styles.divider} aria-hidden="true" />

        {/* Bottom Details & Back to Top */}
        <div className={styles.bottomRow}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Devendra Singh Rana (DSR). All rights reserved.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className={styles.backToTopBtn}
            aria-label="Scroll back to top of page"
          >
            <span>Back to Top</span>
            <FiArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
