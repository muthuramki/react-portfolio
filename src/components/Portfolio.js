// Portfolio.jsx
import React, { useState, useEffect, useRef } from "react";
import "../Styles/Portfolio.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import ProjectModal from "./ProjectModal";
import work1 from "../images/work-1.png";
import work2 from "../images/7DP4CP6D_output_0.jpeg";
import work3 from "../images/travel.png";

const Portfolio = () => {
  const [activeModal, setActiveModal] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
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

  const toggleModal = (modalId) => {
    setActiveModal(activeModal === modalId ? null : modalId);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <section id="portfolio" className="animate-in" ref={sectionRef}>
      <div className="container">
        <h1 className="sub-title gradient-text">My Work</h1>
        <div className="work-list">
          <div className="work">
            <img src={work1} alt="Work 1" />
            <div className="layer">
              <h3>OCR Extraction</h3>
              <p>
                OCR extraction converts images or scanned documents into
                editable text for computer analysis and manipulation.
              </p>
              <a
                className="toggle-link"
                onClick={() => toggleModal("modal1")}
                style={{ cursor: "pointer", }} 
              >
                <FontAwesomeIcon
                  icon={faExternalLinkAlt}
                  style={{
                    marginRight: "8px",
                    fontSize: "20px",
                    
                  }}
                />
              </a>

              <a
                href="https://savic-ocr-1.azurewebsites.net"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="link">Link</button>
              </a>
            </div>
          </div>

          <div className="work">
            <img src={work2} alt="Work 2" />
            <div className="layer">
              <h3>Sales Prediction Dashboard</h3>
              <p>
                A sales prediction dashboard provides real-time insights and
                forecasts on future sales performance based on historical data
                and analytics.
              </p>
              <a
                className="toggle-link"
                onClick={() => toggleModal("modal2")}
                style={{ cursor: "pointer" }} 
              >
                <FontAwesomeIcon
                  icon={faExternalLinkAlt}
                  style={{
                    marginRight: "8px",
                    fontSize: "20px",
                    
                  }}
                />
              </a>

              <a
                href="https://app.powerbi.com/groups/me/reports/ceea7042-a013-4842-9041-88b5c11a1d3d/ReportSection?ctid=8a50a18b-c135-4d02-b21a-bd6b114c6755&experience=power-bi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="link">Link</button>
              </a>
            </div>
          </div>
          {/* Travel Request Management System */}
          <div className="work">
            <img src={work3} alt="Travel Request Management" />
            <div className="layer">
              <h3>Travel Request Management</h3>
              <p>
                A full-stack web app where users submit travel requests, and
                admins manage approvals with real-time status sync.
              </p>
              <a
                className="toggle-link"
                onClick={() => toggleModal("modal3")}
                style={{ cursor: "pointer" }} 
              >
                <FontAwesomeIcon
                  icon={faExternalLinkAlt}
                  style={{
                    marginRight: "8px",
                    fontSize: "20px",
                    
                  }}
                />
              </a>

              <a href="#" target="_blank" rel="noopener noreferrer">
                <button className="link">Link</button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {activeModal === "modal1" && (
        <ProjectModal
          id="modal1"
          onClose={closeModal}
          content={
            <>
              <p className="para">
                My OCR solutions are designed to extract data from invoices
                accurately, making the data{" "}
                <strong className="highlight">editable</strong> post-extraction.
                Additionally, these solutions support{" "}
                <strong className="highlight">printing</strong> the extracted
                data and{" "}
                <strong className="highlight">
                  pushing it into SAP in JSON format
                </strong>
                , streamlining the data integration process.
              </p>
              <p className="para">
                This service allows you to upload multiple invoices or even a
                folder of invoices at a time. Users can select the type of
                service they need, such as{" "}
                <strong className="highlight">
                  computer-generated invoices
                </strong>{" "}
                or <strong className="highlight">handwritten invoices</strong>.
                The process involves user registration, where personal details
                and the type of service are provided. After registration, users
                receive a unique{" "}
                <strong className="highlight">user ID and password</strong> to
                access and enjoy our services.
              </p>
              <p className="para">
                The system features a{" "}
                <strong className="highlight">dashboard</strong> that displays
                the status of invoices, including how many are still being
                processed and how many have been pushed to SAP. The dashboard
                also shows detailed information such as the total amount,
                invoice number, PO number, and total tax amount for each
                invoice.
              </p>
            </>
          }
        />
      )}

      {activeModal === "modal2" && (
        <ProjectModal
          id="modal2"
          onClose={closeModal}
          content={
            <>
              <p className="para">
                The{" "}
                <strong className="highlight">
                  sales prediction dashboard
                </strong>{" "}
                provides valuable insights into future sales performance by
                leveraging various algorithms such as{" "}
                <strong className="highlight">decision trees</strong>,{" "}
                <strong className="highlight">linear regression</strong>, and{" "}
                <strong className="highlight">random forest</strong>. By
                analyzing historical sales data, these algorithms forecast sales
                trends and patterns, enabling businesses to make informed
                decisions and strategies.
              </p>
              <p className="para">
                One of the key features of this dashboard is its ability to{" "}
                <strong className="highlight">
                  compare predicted sales figures with the average sales
                </strong>{" "}
                from previous months, typically January to November. This
                comparison helps in evaluating the accuracy of the predictions
                and identifying any discrepancies or anomalies in sales
                performance.
              </p>
              <p className="para">
                Additionally, the dashboard offers{" "}
                <strong className="highlight">
                  interactive visualizations
                </strong>{" "}
                and <strong className="highlight">reports</strong> that allow
                users to drill down into specific regions, products, or time
                periods to gain deeper insights. Users can customize the
                dashboard according to their preferences and business needs,
                making it a versatile tool for sales analysis and forecasting.
              </p>
              <p className="para">
                With its user-friendly interface and powerful analytics
                capabilities, the{" "}
                <strong className="highlight">
                  sales prediction dashboard
                </strong>{" "}
                empowers businesses to optimize their sales strategies, identify
                growth opportunities, and stay ahead of the competition in
                today's dynamic market.
              </p>
            </>
          }
        />
      )}
      {/* Modal 3 - Travel Request System */}
      {activeModal === "modal3" && (
        <ProjectModal
          id="modal3"
          onClose={closeModal}
          content={
            <>
              <p className="para">
                The{" "}
                <strong className="highlight">
                  Travel Request Management System
                </strong>{" "}
                is a full-stack application built using{" "}
                <strong className="highlight">Django REST Framework</strong> and{" "}
                <strong className="highlight">React.js</strong>, with{" "}
                <strong className="highlight">JWT authentication</strong> and a{" "}
                <strong className="highlight">MySQL</strong> backend.
              </p>
              <p className="para">
                Users can register, log in, and then create travel requests
                using an interactive form. These requests are saved into the{" "}
                <strong className="highlight">MySQL database</strong> and are
                shown in a table format on the user dashboard along with their
                current status (pending, approved, or rejected).
              </p>
              <p className="para">
                Admins have a dedicated panel where they can view all travel
                requests submitted by users. Admins can open any request for a
                detailed view and either{" "}
                <strong className="highlight">approve</strong> or{" "}
                <strong className="highlight">reject</strong> the request. These
                actions will update the request status in real-time across both
                user and admin dashboards.
              </p>
              <p className="para">
                The system uses MySQL as the database to store all travel
                requests, user information, and the status updates. The database
                integrates seamlessly with the Django backend to handle CRUD
                (Create, Read, Update, Delete) operations. This design ensures
                that requests are stored securely and that data integrity is
                maintained.
              </p>
              <p className="para">
                Additionally, the application supports clean UI/UX with
                role-based access control, ensuring that both users and admins
                have an intuitive and secure experience. The project
                demonstrates secure API design, modular component structure, and
                robust integration with the MySQL database for data storage and
                retrieval.
              </p>
            </>
          }
        />
      )}
    </section>
  );
};

export default Portfolio;
