"use client";

import React from "react";
import profileImage from "../../assets/pro1.png";
import { FiDownload, FiCheckCircle, FiServer, FiLayout, FiDatabase } from "react-icons/fi";
import styles from "./About.module.scss";

const highlights = [
  {
    icon: <FiServer />,
    title: "Full Stack Mastery",
    desc: "End-to-end web apps with Node.js, Express, React, and Next.js.",
  },
  {
    icon: <FiLayout />,
    title: "Responsive UI/UX",
    desc: "Mobile-first, accessible, and high-performance interfaces with Tailwind.",
  },
  {
    icon: <FiDatabase />,
    title: "Database Architecture",
    desc: "Proficient with SQL (MySQL) and NoSQL (MongoDB, Firebase).",
  },
  {
    icon: <FiCheckCircle />,
    title: "MCA Background",
    desc: "Strong computer science foundations in Data Structures & Software Engineering.",
  },
];

export default function About() {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.aboutGrid}>
        {/* Left: Framed Profile Photo with Gradient Overlay */}
        <div className={styles.photoWrapper}>
          <div className={styles.photoCard}>
            <img
              src={profileImage?.src || profileImage}
              alt="Devendra Singh Rana - Professional Overview"
              width={400}
              height={480}
              loading="lazy"
            />
            <div className={styles.photoCardOverlay}>
              <span className={styles.overlayName}>Devendra Singh Rana</span>
              <span className={styles.overlayTitle}>MCA • Full Stack Developer</span>
            </div>
          </div>
        </div>

        {/* Right: Detailed Summary & Capabilities */}
        <div className={styles.contentColumn}>
          <div className={styles.headingWrapper}>
            <span className={styles.badge}>About Me</span>
            <h2 className={styles.mainTitle}>
              Crafting Digital Solutions Through <span>Code & Creativity</span>
            </h2>
          </div>

          <p className={styles.bioParagraph}>
            I am a full-stack engineer with hands-on experience designing and
            implementing production-ready applications. My expertise spans both frontend
            and backend development, specializing in modern JavaScript ecosystems,
            responsive user interfaces, and robust REST APIs.
          </p>

          <p className={styles.bioParagraph}>
            With an academic background pursuing a Master of Computer Applications (MCA)
            at GBPIET and prior experience as an engineer and frontend intern, I bring
            systematic problem solving, clean architectural practices, and modern UI
            standards to every team and project I contribute to.
          </p>

          {/* Core Highlights Grid */}
          <div className={styles.highlightsGrid}>
            {highlights.map((item, index) => (
              <div key={index} className={styles.highlightCard}>
                <div className={styles.highlightIconBox}>{item.icon}</div>
                <div className={styles.highlightInfo}>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Action Row */}
          <div className={styles.actionRow}>
            <a
              href="https://drive.google.com/file/d/1CKK-uoK4nPooYw4725OVXK2-icDYeM-X/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.downloadCvBtn}
            >
              <FiDownload size={18} />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
