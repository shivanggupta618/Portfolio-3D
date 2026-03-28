import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>HSBC</h4>
                <h5>4 years · Pune</h5>
              </div>
              <h3>2022 - Present</h3>
            </div>
            <p>
              Working as a Full Stack Engineer on the HealthyLife platform, building and scaling end-to-end systems across mobile, web, and backend. Delivered high-impact features like claims and video consultation, focusing on performance, security, and production reliability.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Cloud Engineer Intern</h4>
                <h5>Hitachi </h5>
              </div>
              <h3>2021 - 2021</h3>
            </div>
            <p>
              Worked as a Cloud Engineer Intern, optimizing AWS infrastructure, improving system performance, and implementing scalable solutions with Auto Scaling and serverless technologies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
