import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faCogs, faChartBar, faBrain } from '@fortawesome/free-solid-svg-icons';
import '../Styles/Services.css';

const services = [
  {
    icon: faCode,
    title: 'Web Design',
    desc: 'Visually appealing and user-friendly website designs that enhance the user experience.',
    link: '/web-design',
  },
  {
    icon: faCogs,
    title: 'Web Development',
    desc: 'Robust and scalable web applications using the latest technologies and best practices.',
    link: '/web-development',
  },
  {
    icon: faChartBar,
    title: 'Power BI',
    desc: 'Data visualization and business intelligence solutions using Power BI to make informed decisions.',
    link: '/power-bi',
  },
  {
    icon: faBrain,
    title: 'Artificial Intelligence',
    desc: 'Building intelligent systems that automate tasks, make predictions, and improve decision-making using AI.',
    link: '/artificial-intelligence',
  },
];

const Services = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            const cards = entry.target.querySelectorAll('.service-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('fade-in');
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="services" className="animate-in" ref={sectionRef} aria-label="Services">
      <div className="container">
        <h1 className="sub-title gradient-text">My Services</h1>
        <div className="services-list">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="icon-container">
                <FontAwesomeIcon icon={service.icon} className="service-icon" aria-hidden="true" />
              </div>
              <h2>{service.title}</h2>
              <p>{service.desc}</p>
              <a href={service.link} className="service-btn">
                Learn More <span className="btn-arrow">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
