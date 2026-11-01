"use client";

import React, { useState } from "react";
import { projects } from "../../constants";
import SectionHeading from "../Common/SectionHeading";
import { FiGithub, FiExternalLink, FiX, FiEye } from "react-icons/fi";
import styles from "./Work.module.scss";

export default function Work() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className={styles.projectsSection}>
      <SectionHeading
        badge="Featured Work"
        title="Featured"
        highlight="Projects"
        subtitle="A selection of full-stack web applications, dynamic user interfaces, and software tools built with performance and clean code."
      />

      <div className={styles.projectsGrid}>
        {projects.map((project, index) => (
          <article
            key={project.id}
            className={styles.projectCard}
            data-spotlight="true"
          >
            {/* Bento Technical Telemetry Header (Awwwards Style) */}
            <div className={styles.bentoHeader}>
              <span className={styles.bentoIndex}>0{index + 1} // PROJ</span>
              <span className={styles.bentoCornerMark}>+</span>
            </div>

            {/* Project Image Preview */}
            <div
              className={styles.imageContainer}
              onClick={() => handleOpenModal(project)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && handleOpenModal(project)}
              aria-label={`View details for ${project.title}`}
              data-cursor="hover"
              data-cursor-text="VIEW"
            >
              <img
                src={project.image?.src || project.image}
                alt={project.title}
                width={400}
                height={200}
                loading="lazy"
              />
              <div className={styles.imageOverlay} />
            </div>

            {/* Card Body */}
            <div className={styles.cardBody}>
              <h3
                className={styles.cardTitle}
                onClick={() => handleOpenModal(project)}
              >
                {project.title}
              </h3>

              <p className={styles.cardDesc}>{project.description}</p>

              {/* Tags */}
              <div className={styles.tagsWrapper}>
                {project.tags.slice(0, 6).map((tag, idx) => (
                  <span key={idx} className={styles.tag}>
                    {tag}
                  </span>
                ))}
                {project.tags.length > 6 && (
                  <span className={styles.tag}>+{project.tags.length - 6}</span>
                )}
              </div>

              {/* Action Buttons */}
              <div className={styles.cardFooter}>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.actionBtn} ${styles.codeBtn}`}
                    aria-label={`View ${project.title} source code`}
                  >
                    <FiGithub size={15} />
                    <span>Code</span>
                  </a>
                )}
                {project.webapp && (
                  <a
                    href={project.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.actionBtn} ${styles.liveBtn}`}
                    aria-label={`View ${project.title} live preview`}
                  >
                    <FiExternalLink size={15} />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Modal View */}
      {selectedProject && (
        <div
          className={styles.modalBackdrop}
          onClick={handleCloseModal}
          role="dialog"
          aria-modal="true"
        >
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className={styles.modalCloseBtn}
              onClick={handleCloseModal}
              aria-label="Close project modal"
            >
              <FiX size={18} />
            </button>

            <div className={styles.modalImageWrapper}>
              <img
                src={selectedProject.image?.src || selectedProject.image}
                alt={selectedProject.title}
                width={720}
                height={280}
              />
            </div>

            <div className={styles.modalBody}>
              <h3>{selectedProject.title}</h3>
              <p>{selectedProject.description}</p>

              <div className={styles.tagsWrapper}>
                {selectedProject.tags.map((tag, index) => (
                  <span key={index} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>

              <div className={styles.modalActions}>
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.actionBtn} ${styles.codeBtn}`}
                  >
                    <FiGithub size={16} />
                    <span>View Repository</span>
                  </a>
                )}
                {selectedProject.webapp && (
                  <a
                    href={selectedProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.actionBtn} ${styles.liveBtn}`}
                  >
                    <FiExternalLink size={16} />
                    <span>Visit Application</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
