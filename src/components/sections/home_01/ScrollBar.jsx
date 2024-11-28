import React, { useEffect, useState } from "react";
import styled from "styled-components";

const FloatingNav = () => {
    const [activeSection, setActiveSection] = useState(""); // Track the currently visible section

    // Function to scroll to a specific section
    const scrollToSection = (id) => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    };
  
    // Monitor sections in view
    useEffect(() => {
      const sections = document.querySelectorAll(".section");
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id); // Update active section
            }
          });
        },
        { threshold: 0.5 } // Trigger when 50% of the section is visible
      );
  
      sections.forEach((section) => observer.observe(section));
      return () => observer.disconnect();
    }, []);

    return (
        <StyledWrapper>
            <div className="floating-nav-container z-10">
                <div className="floating-nav">
                    <input
                        className="tab tab--1"
                        id="tab1"
                        name="tab"
                        type="radio"
                        onChange={() => scrollToSection("proposito")}
                    />
                    <label htmlFor="tab1" className="tab-label">
                        Propósito
                    </label>

                    <input
                        className="tab tab--2"
                        id="tab2"
                        name="tab"
                        type="radio"
                        onChange={() => scrollToSection("distincao")}
                    />
                    <label htmlFor="tab2" className="tab-label">
                        O que nos distingue
                    </label>

                    <input
                        className="tab tab--3"
                        id="tab3"
                        name="tab"
                        type="radio"
                        onChange={() => scrollToSection("metodologia")}
                    />
                    <label htmlFor="tab3" className="tab-label">
                        Metodologia
                    </label>

                    <input
                        className="tab tab--4"
                        id="tab4"
                        name="tab"
                        type="radio"
                        onChange={() => scrollToSection("porque")}
                    />
                    <label htmlFor="tab4" className="tab-label">
                        Porquê
                    </label>

                    <div className="indicator" />
                    <div className="scroller" />
                </div>
            </div>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
  .floating-nav-container {
    position: fixed;
    top: 35%;
    right: 20px;
  }

  .floating-nav {
    display: flex;
    flex-direction: column;
    padding: 10px;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 8px;
  }

  .tab {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    z-index: -1;
  }

  .tab-label {
    width: 120px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: right;
    font-size: 0.7rem;
    font-weight: bold;
    cursor: pointer;
  }

  .tab-label:hover {
    color: #8104d4;
  }
    
  .scroller {
    content: "";
    width: 15px;
    height: 155px;
    opacity: 0.4;
    background: #888;
    position: absolute;
    top: 10px;
    right: -17px;
    border: 0.5px solid rgba(0, 0, 0, 0.04);
    border-radius: 7px;
  }

  .indicator {
    width: 10px;
    height: 30px;
    background: #8104d4;
    position: absolute;
    right: -15px;
    top: 14px;
    z-index: 1;
    border-radius: 7px;
    transition: top 0.3s ease-in-out;
  }

  .tab--1:checked ~ .indicator {
    top: 14px;
  }

  .tab--2:checked ~ .indicator {
    top: calc(34px + 20px);
  }

  .tab--3:checked ~ .indicator {
    top: calc((34px + 13px) * 2);
  }

  .tab--4:checked ~ .indicator {
    top: calc((34px + 10px) * 3);
  }
`;

export default FloatingNav;
