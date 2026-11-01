"use client";

import React, { useState, useEffect } from "react";
import profileImage from "../../assets/pro6.png";
import { FiArrowRight, FiMail, FiCode, FiLayers } from "react-icons/fi";
import styles from "./Hero.module.scss";

const roles = [
  "Full Stack Developer",
  "MERN Stack Specialist",
  "Next.js Developer",
  "UI/UX Enthusiast",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting && displayedText !== currentRole) {
      // Typing forward
      timeout = setTimeout(() => {
        setDisplayedText(currentRole.slice(0, displayedText.length + 1));
      }, 90);
    } else if (!isDeleting && displayedText === currentRole) {
      // Pause at full word
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayedText !== "") {
      // Deleting
      timeout = setTimeout(() => {
        setDisplayedText(currentRole.slice(0, displayedText.length - 1));
      }, 45);
    } else if (isDeleting && displayedText === "") {
      // Switch to next word
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, roleIndex]);

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className={styles.heroSection}>
      {/* Ambient Lighting Gradients */}
      <div className={styles.ambientGlowPrimary} aria-hidden="true" />
      <div className={styles.ambientGlowSecondary} aria-hidden="true" />

      <div className={styles.heroContent}>
        {/* Left Column: Heading & Introduction */}
        <div className={styles.textColumn}>
          {/* Status Badge */}
          <div className={styles.statusBadge}>
            <span className={styles.pulseDot} />
            <span>Available for New Opportunities</span>
          </div>

          <div className={styles.greeting}>Hello, I am</div>

          <h1 className={styles.nameHeading}>
            Devendra <span className={styles.gradientText}>Singh Rana</span>
          </h1>

          <div className={styles.rolesWrapper}>
            <span>I build as a </span>
            <span className={styles.roleHighlight}>{displayedText}</span>
            <span className={styles.cursor}>|</span>
          </div>

          <p className={styles.bio}>
            Passionate Full Stack Engineer specializing in the MERN stack and Next.js.
            I craft scalable web applications, performant backend architectures, and
            immersive digital user experiences built with engineering precision.
          </p>

          <div className={styles.ctaGroup}>
            <button
              type="button"
              className={styles.primaryBtn}
              onClick={() => handleScrollTo("projects")}
            >
              <span>Explore Projects</span>
              <FiArrowRight />
            </button>
            <button
              type="button"
              className={styles.secondaryBtn}
              onClick={() => handleScrollTo("contact")}
            >
              <FiMail />
              <span>Contact Me</span>
            </button>
          </div>
        </div>

        {/* Right Column: Visual Composition with Profile Photo */}
        <div className={styles.visualColumn}>
          <div className={styles.visualFrame}>
            <div className={styles.haloRing} aria-hidden="true" />
            
            <div className={styles.imageContainer}>
              <img
                src={profileImage?.src || profileImage}
                alt="Devendra Singh Rana - Full Stack Developer"
                width={420}
                height={420}
                loading="eager"
              />
            </div>

            {/* Floating Achievement / Specialization Badges */}
            <div className={styles.floatingBadgeTop}>
              <FiCode className={styles.badgeIcon} />
              <span>Full Stack Architect</span>
            </div>

            <div className={styles.floatingBadgeBottom}>
              <FiLayers className={styles.badgeIcon} />
              <span>MERN & Next.js Core</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
