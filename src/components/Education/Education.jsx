"use client";

import React from "react";
import { education } from "../../constants";
import SectionHeading from "../Common/SectionHeading";
import { FiCalendar } from "react-icons/fi";
import styles from "./Education.module.scss";

export default function Education() {
  return (
    <section id="education" className={styles.educationSection}>
      <SectionHeading
        badge="Academic Background"
        title="Educational"
        highlight="Journey"
        subtitle="A solid computer science foundation spanning my Master's and Bachelor's degrees in Computer Applications and Sciences."
      />

      <div className={styles.timelineGrid}>
        {education.map((edu) => (
          <article key={edu.id} className={styles.educationCard}>
            <div className={styles.cardTop}>
              <div className={styles.institutionLogoWrapper}>
                <img
                  src={edu.img?.src || edu.img}
                  alt={edu.school}
                  width={40}
                  height={40}
                  loading="lazy"
                />
              </div>

              <div className={styles.degreeDetails}>
                <h3 className={styles.degreeTitle}>{edu.degree}</h3>
                <h4 className={styles.schoolName}>{edu.school}</h4>
              </div>
            </div>

            <div className={styles.datePill}>
              <FiCalendar size={13} />
              <span>{edu.date}</span>
            </div>

            <p className={styles.description}>{edu.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
