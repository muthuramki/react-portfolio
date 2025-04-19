// About.jsx
import React, { useState, useEffect, useRef } from "react";
import "../Styles/About.css";
import profilePic from "../images/pic.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faDownload } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  const [activeTab, setActiveTab] = useState("skills");
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);

  // Skills data with progress percentages
  const skills = [
    { name: "Python", level: 90 },
    { name: "Django", level: 85 },
    { name: "React", level: 80 },
    { name: "JavaScript", level: 80 },
    { name: "HTML/CSS", level: 85 },
    { name: "MySQL", level: 75 },
    { name: "Power BI", level: 70 },
    { name: "Git", level: 80 },
    { name: "Azure DevOps", level: 75 },
    { name: "Machine Learning", level: 70 },
  ];

  // Experience data
  const experiences = [
    {
      company: "SAVIC Technologies",
      position: "Python Developer",
      period: "Sep 2023 to present",
      description:
        "Developed and deployed OCR solutions for invoice extraction. Worked on machine learning models for data analysis and processing. Collaborated with cross-functional teams to implement innovative solutions.",
    },
  ];

  // Education data
  const education = [
    {
      institution: "Dr. Sivanthi Aditanar College of Engineering",
      degree: "BE - Mechanical Engineering",
      period: "2015 - 2019",
      achievements:
        "Graduated with honors. Participated in technical competitions and workshops.",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <section id="about" ref={aboutRef}>
      <div className="container">
        <h1 className="title gradient-text">
          About <span>Me</span>
        </h1>

        <div className={`row ${isVisible ? "visible" : ""}`}>
          <div className="about-col-1">
            <div className="profile-container">
              <img src={profilePic} alt="Profile" className="profile-pic" />
              <div className="social-icons">
                <a
                  href="https://github.com/muthuramki/Ramki_Project"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a
                  href="https://www.linkedin.com/in/ramki-m-0aa85b167/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
                <a href="mailto:muthuramki30598@gmail.com" aria-label="Email">
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
              </div>
            </div>
          </div>

          <div className="about-col-2">
            <div className="about-content">
              <p>
                I am a passionate{" "}
                <strong className="highlight">Python Full Stack Developer</strong> with a
                strong foundation in Python and its libraries. I specialize in
                building dynamic, efficient web applications and automating
                complex tasks with clean, maintainable code.
              </p>
              <p>
                I have hands-on experience in{" "}
                <strong>Full Stack Development</strong> using technologies like{" "}
                <strong>Django</strong>, <strong>React</strong>,{" "}
                <strong>HTML</strong>, <strong>CSS</strong>, and{" "}
                <strong>JavaScript</strong>. My focus is on delivering seamless,
                user-friendly interfaces and robust back-end systems.
              </p>
              <p>
                I'm also deeply interested in{" "}
                <strong className="highlight">Artificial Intelligence</strong>{" "}
                and enjoy applying AI techniques such as machine learning,
                natural language processing, and OCR to real-world challenges.
                I'm continuously exploring new ways to integrate AI into web
                applications to drive smarter, more intuitive user experiences.
              </p>
              <p>
                I’m a curious and self-driven developer who loves learning new
                technologies, contributing to open-source projects, and staying
                up-to-date with the latest trends in tech. I believe in building
                solutions that are not just functional but also scalable and
                impactful.
              </p>
            </div>

            <div className="tabs-container">
              <div className="tab-titles">
                {["skills", "experience", "education"].map((tab) => (
                  <button
                    key={tab}
                    className={`tab-link ${
                      activeTab === tab ? "active-link" : ""
                    }`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>

              <div className="tab-contents">
                <div
                  className={`tab-content ${
                    activeTab === "skills" ? "active-tab" : ""
                  }`}
                >
                  <div className="skills-container">
                    {skills.map((skill, index) => (
                      <div key={index} className="skill-item">
                        <div className="skill-info">
                          <span className="skill-name">{skill.name}</span>
                          <span className="skill-percentage">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="skill-bar">
                          <div
                            className="skill-progress"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div
                  className={`tab-content ${
                    activeTab === "experience" ? "active-tab" : ""
                  }`}
                >
                  {experiences.map((exp, index) => (
                    <div key={index} className="timeline-item">
                      <div className="timeline-dot"></div>
                      <div className="timeline-content">
                        <h3>
                          {exp.position} at {exp.company}
                        </h3>
                        <p className="timeline-period">{exp.period}</p>
                        <p className="timeline-description">
                          {exp.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div
                  className={`tab-content ${
                    activeTab === "education" ? "active-tab" : ""
                  }`}
                >
                  {education.map((edu, index) => (
                    <div key={index} className="timeline-item">
                      <div className="timeline-dot"></div>
                      <div className="timeline-content">
                        <h3>{edu.degree}</h3>
                        <h4>{edu.institution}</h4>
                        <p className="timeline-period">{edu.period}</p>
                        <p className="timeline-description">
                          {edu.achievements}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="download-cv">
          <a
            href="https://drive.google.com/file/d/1rDp_ZUkIxtQoRuSmdRUJbkW8vHfsw6Zl/view?usp=drive_link"
            className="btn"
          >
            Download CV <FontAwesomeIcon icon={faDownload} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
