"use client";

import React from "react";
import SectionHeading from "../Common/SectionHeading";
import { FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import styles from "./Contact.module.scss";

export default function Contact() {
  return (
    <section id="contact" className={styles.contactSection}>
      <SectionHeading
        badge="Get In Touch"
        title="Let's Build Something"
        highlight="Exceptional"
        subtitle="Have a project in mind, an opportunity, or want to connect? Reach out through any of the channels below."
      />

      <div className={styles.contactContainer}>
        <div className={styles.infoCard}>
          <div className={styles.cardHeader}>
            <h3 className={styles.infoTitle}>
              Connect With <span>Devendra</span>
            </h3>
            <p className={styles.infoText}>
              I am open to full-time engineering roles, high-impact freelance projects,
              and technical discussions around modern full-stack development.
            </p>
          </div>

          <div className={styles.contactCardsList}>
            {/* Email Card */}
            <a
              href="mailto:devendrasinghrana508@gmail.com"
              className={styles.contactCard}
            >
              <div className={styles.cardIcon}>
                <FiMail />
              </div>
              <div className={styles.cardDetails}>
                <span className={styles.cardLabel}>Direct Email</span>
                <span className={styles.cardValue}>Send an Email</span>
              </div>
            </a>

            {/* LinkedIn Card */}
            <a
              href="https://www.linkedin.com/in/devendra-rana-44b274300"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactCard}
            >
              <div className={styles.cardIcon}>
                <FaLinkedin />
              </div>
              <div className={styles.cardDetails}>
                <span className={styles.cardLabel}>Professional Network</span>
                <span className={styles.cardValue}>LinkedIn Profile</span>
              </div>
            </a>

            {/* GitHub Card */}
            <a
              href="https://github.com/devendra-508"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactCard}
            >
              <div className={styles.cardIcon}>
                <FaGithub />
              </div>
              <div className={styles.cardDetails}>
                <span className={styles.cardLabel}>Open Source & Code</span>
                <span className={styles.cardValue}>GitHub Profile</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
