// src/components/Skills/Skills.jsx
import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => (
  <section
    id="skills"
    className="w-full py-20 sm:py-24 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 font-sans bg-skills-gradient clip-path-custom overflow-hidden"
  >
    {/* Section Title */}
    <div className="text-center mb-8 max-w-4xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold text-white">
        SKILLS
      </h2>

      <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>

      <p className="text-gray-400 mt-4 text-sm sm:text-base md:text-lg font-semibold leading-relaxed">
        A collection of my technical skills and expertise honed through
        various projects and experiences
      </p>
    </div>

    {/* Skill Categories */}
    <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6 py-8 sm:py-10">
      {SkillsInfo.map((category) => (
        <div
          key={category.title}
          className="w-full min-w-0 bg-gray-900/90 backdrop-blur-md px-4 sm:px-6 md:px-8 py-6 sm:py-8 rounded-2xl border border-white shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]"
        >
          {/* Category Title */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-400 mb-5 text-center">
            {category.title}
          </h3>

          {/* Tilt */}
          <Tilt
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            perspective={1000}
            scale={1.02}
            transitionSpeed={1000}
            gyroscope={true}
          >
            {/* Skill Items */}
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 w-full">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="min-w-0 flex items-center justify-center gap-2 bg-transparent border-2 border-gray-700 rounded-3xl py-2 px-2 sm:px-3 text-center"
                >
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="w-6 h-6 sm:w-7 sm:h-7 object-contain flex-shrink-0"
                  />

                  <span className="text-xs sm:text-sm text-gray-300 truncate">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </Tilt>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;