"use client";

import React from "react";
import { experiences } from "../../constants";
import SectionHeading from "../Common/SectionHeading";
import styles from "./Experience.module.scss";

export default function Experience() {
  return (
    <section id="experience" className={styles.experienceSection}>
      <SectionHeading
        badge="Career Path"
        title="Professional"
        highlight="Experience"
        subtitle="My journey across engineering roles and collaborative projects delivering robust web applications and intuitive interfaces."
      />

      <div className={styles.timelineContainer}>
        {experiences.map((exp) => (
          <div key={exp.id} className={styles.timelineItem}>
            {/* Timeline Node Logo */}
            <div className={styles.timelineNode}>
              <img
                src={exp.img?.src || exp.img}
                alt={exp.company || exp.role}
                width={32}
                height={32}
                loading="lazy"
              />
            </div>

            {/* Timeline Content Card */}
            <div className={styles.cardWrapper}>
              <div className={styles.experienceCard}>
                <div className={styles.cardHeader}>
                  <div>
                    <h3 className={styles.roleTitle}>{exp.role}</h3>
                    {exp.company && (
                      <h4 className={styles.companyName}>{exp.company}</h4>
                    )}
                  </div>
                  {exp.date && (
                    <span className={styles.dateBadge}>{exp.date}</span>
                  )}
                </div>

                <p className={styles.description}>{exp.desc}</p>

                {exp.skills && (
                  <ul className={styles.skillsList}>
                    {exp.skills.map((skill, index) => (
                      <li key={index} className={styles.skillBadge}>
                        {skill}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
