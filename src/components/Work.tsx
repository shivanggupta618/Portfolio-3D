import "./styles/Work.css";
import WorkImage from "./WorkImage";



const Work = () => {
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Resume</span>
        </h2>

        <div className="resume-display">
          <div className="resume-content">
            <div className="resume-info">
              <div className="resume-details">
                <h4>Full Stack Engineer</h4>
                <p className="resume-category">Experience & Skills</p>
                <div className="resume-description">
                  <p>
                    I build and scale end-to-end systems across mobile, web, and
                    backend, handling high-impact production use cases with a
                    focus on performance, security, and reliability.
                  </p>
                </div>
                <a
                  href="/Shivang_Gupta_Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="resume-download-link"
                  data-cursor="disable"
                >
                  View Full Resume
                </a>
              </div>
            </div>
            <div className="resume-image-wrapper">
              <WorkImage
                image="/images/resume_preview.png"
                alt="Shivang Gupta Resume Preview"
                link="/Shivang_Gupta_Resume.pdf"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
