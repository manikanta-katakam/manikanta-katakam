import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Education <span>&</span>
          <br /> Journey
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in Computer Science Engineering</h4>
                <h5>KL Deemed to be University (KLEF)</h5>
              </div>
              <h3>2023-27</h3>
            </div>
            <p>
              Specializing in AI Systems for Visual Intelligence. Gaining expertise in software engineering, deep learning, computer vision, data structures, and database systems.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Guidewire DEVTrails Hackathon</h4>
                <h5>Guidewire | EY | National Insurance Academy</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Participated in the Guidewire DEVTrails University Hackathon 2026, working on industry-inspired challenges. Strengthened problem-solving, teamwork, and technical skills while collaborating to build and pitch scalable technology solutions under tight deadlines.
              <br />
              <span style={{ display: "block", marginTop: "10px", fontSize: "14px", color: "var(--accentColor)", fontWeight: 400 }}>
                Key Learnings: Team collaboration & communication, rapid problem-solving, software development lifecycle, innovation & design thinking, technical presentation.
              </span>
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Professional Certifications</h4>
                <h5>Various Institutions</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Certified Automation Anywhere Certified Essentials Developer. Cambridge English Linguaskill General (CEFR B1). Completed professional training in Java programming.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
