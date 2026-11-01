"use client";

import React from "react";
import { SkillsInfo } from "../../constants";
import SectionHeading from "../Common/SectionHeading";
import styles from "./Skills.module.scss";

export default function Skills() {
  return (
    <section id="skills" className={styles.skillsSection}>
      <SectionHeading
        badge="Skills & Competencies"
        title="Technical"
        highlight="Proficiencies"
        subtitle="A categorized overview of the languages, frameworks, databases, and developer tools I utilize to engineer modern web solutions."
      />

      <div className={styles.categoriesGrid}>
        {SkillsInfo.map((category) => (
          <div
            key={category.title}
            className={styles.categoryCard}
            data-spotlight="true"
          >
            <div className={styles.categoryHeader}>
              <h3 className={styles.categoryTitle}>{category.title}</h3>
              <span className={styles.countBadge}>{category.skills.length} Technologies</span>
            </div>

            <div className={styles.skillsList}>
              {category.skills.map((skill) => (
                <div key={skill.name} className={styles.skillItem}>
                  <div className={styles.logoWrapper}>
                    <img
                      src={skill.logo?.src || skill.logo}
                      alt={`${skill.name} logo`}
                      width={24}
                      height={24}
                      loading="lazy"
                    />
                  </div>
                  <span className={styles.skillName}>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
