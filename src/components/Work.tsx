import { useState } from "react";
import "./styles/Work.css";
import "./styles/ProjectModal.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { MdClose } from "react-icons/md";

gsap.registerPlugin(useGSAP);

interface Project {
  title: string;
  category: string;
  description: string;
  tools: string;
  image: string;
  video?: string;
  keyFeatures: string[];
  techList: string[];
  contributions: string[];
  outcomeOrImpact: string;
  roleOrLabel: string;
}

const projects: Project[] = [
  {
    title: "SmartShield AI",
    category: "Real-Time AI Insurance Platform",
    description: "An AI-powered platform for real-time risk detection and automated insurance payouts. Integrated a voice-supported chatbot, worker heatmap tracking using Google Maps, and predictive analytics dashboard.",
    tools: "React, Node.js, Express, Google Maps API, Heatmap Visualization, AI APIs",
    image: "/images/smartshield_ai.png",
    video: "/videos/smartshield.mp4",
    keyFeatures: [
      "Real-time risk detection & automated insurance payouts based on alert triggers",
      "Smart chatbot with voice support and personalized insurance plan recommendations",
      "Live alert system and notifications for industrial workers and field staff",
      "Google Maps-based worker tracking with dynamic heatmap visualization",
      "Admin dashboard with detailed analytics and predictive risk insights"
    ],
    techList: ["React.js", "Node.js", "Express.js", "Google Maps API", "CSS", "Heatmap.js", "AI APIs"],
    contributions: [
      "Designed and developed responsive user interfaces with interactive data visualization widgets",
      "Built backend RESTful APIs with Node.js and Express to process hazard data and trigger alerts",
      "Implemented a real-time worker tracking system with Google Maps API and heatmaps",
      "Designed admin control center with predictive risks dashboard and analytics"
    ],
    outcomeOrImpact: "Automated manual insurance assessment workflows, reducing payout trigger times from days to seconds while improving real-time hazard response for on-site managers.",
    roleOrLabel: "Full-Stack Developer & AI Integrator"
  },
  {
    title: "AI Food Waste Reduction",
    category: "Smart Sustainability Web App",
    description: "Predicts optimal food prep quantities using Linear Regression to minimize waste. Features analytics dashboards, Chart.js trends, role-based JWT auth, and image detection module.",
    tools: "React.js, Tailwind CSS, Chart.js, SQLite, Node.js, Express, FastAPI, Scikit-learn",
    image: "/images/food_waste_reduction.png",
    keyFeatures: [
      "AI-based food quantity prediction using Scikit-learn Linear Regression model",
      "Food waste tracking and analytics dashboard using interactive charts",
      "Role-based access control (RBAC) for Admin, Manager, and Staff roles",
      "Comprehensive food data management and automated reporting system",
      "Food image detection module (sample implementation for Rice, Chicken, and Milk)",
      "Automated operational recommendations to reduce cafeteria/restaurant food waste"
    ],
    techList: ["React.js", "Tailwind CSS", "Chart.js", "Axios", "Node.js", "Express.js", "SQLite", "Python", "FastAPI", "Scikit-learn", "JWT"],
    contributions: [
      "Designed and developed responsive, clean user interfaces using React.js and Tailwind CSS",
      "Built secure backend RESTful APIs with Node.js, Express, and JWT authentication",
      "Integrated SQLite database to store user management, food tracking, and prediction data",
      "Implemented a Scikit-learn Linear Regression model to forecast food consumption patterns",
      "Created dynamic visual dashboards with Chart.js showing waste and savings trends over time"
    ],
    outcomeOrImpact: "Provides data-driven insights that help restaurants optimize food preparation, reduce waste by up to 30%, improve resource utilization, and support sustainable food management.",
    roleOrLabel: "Full-Stack & Machine Learning Developer"
  },
  {
    title: "Pothole Detection",
    category: "Computer Vision & Deep Learning",
    description: "An automated road pothole identification system using YOLOv8 segmentation and OpenCV, performing video inference frame-by-frame with annotated output video generation.",
    tools: "Python, Ultralytics YOLOv8, OpenCV, Google Colab, FFmpeg",
    image: "/images/pothole_detection.png",
    keyFeatures: [
      "Automated road pothole detection and segmentation from video footage",
      "Real-time object detection using pre-trained YOLOv8 segmentation model",
      "Bounding box visualization with confidence score overlays on frame output",
      "Support for multiple video formats (MP4, AVI, MOV, MKV)",
      "Automated output video generation and video rendering using FFmpeg and OpenCV",
      "Cloud-based execution and notebook deployment in Google Colab"
    ],
    techList: ["Python", "Ultralytics YOLOv8", "OpenCV", "Google Colab", "FFmpeg", "Deep Learning", "Computer Vision", "Hugging Face"],
    contributions: [
      "Integrated pre-trained custom YOLOv8 model from Hugging Face into Python scripts",
      "Developed OpenCV frame-by-frame processing pipeline to identify and annotate potholes",
      "Automated the output video compiling flow using FFmpeg for optimal web compression",
      "Utilized cloud AI tools for architecture design, optimization, and code debugging"
    ],
    outcomeOrImpact: "Assists municipal authorities, smart city planning committees, and road departments in identifying damaged road sections, reducing manual inspection efforts, and improving road safety.",
    roleOrLabel: "Computer Vision / Deep Learning Developer"
  },
];

const Work = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useGSAP(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      if (!box.length) return;
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`, // Use actual scroll width
        scrub: true,
        pin: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    // Clean up
    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
    <>
      <div className="work-section" id="work">
        <div className="work-container section-container">
          <h2>
            My <span>Work</span>
          </h2>
          <div className="work-flex">
            {projects.map((project, index) => (
              <div className="work-box" key={index}>
                <div className="work-info">
                  <div className="work-title">
                    <h3>0{index + 1}</h3>

                    <div>
                      <h4>{project.title}</h4>
                      <p>{project.category}</p>
                    </div>
                  </div>
                  <p>{project.description}</p>
                  <h4>Tools and features</h4>
                  <p>{project.tools}</p>
                  
                  <button 
                    className="work-details-trigger"
                    onClick={() => setSelectedProject(project)}
                    data-cursor="disable"
                  >
                    View Details
                  </button>
                </div>
                <WorkImage image={project.image} alt={project.title} video={project.video} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Glassmorphic Project Details Modal */}
      <div 
        className={`project-modal-overlay ${selectedProject ? "active" : ""}`}
        onClick={() => setSelectedProject(null)}
      >
        <div 
          className="project-modal-container"
          onClick={(e) => e.stopPropagation()}
        >
          {selectedProject && (
            <>
              <div className="project-modal-header">
                <div className="project-modal-header-left">
                  <h3>{selectedProject.title}</h3>
                  <p>{selectedProject.category}</p>
                </div>
                <button 
                  className="project-modal-close-btn"
                  onClick={() => setSelectedProject(null)}
                  data-cursor="disable"
                >
                  <MdClose />
                </button>
              </div>

              <div className="project-modal-body">
                <div className="project-modal-desc-section">
                  <h4>Overview</h4>
                  <p>{selectedProject.description}</p>
                </div>

                <div className="project-modal-grid">
                  <div className="project-modal-desc-section">
                    <h4>Key Features</h4>
                    <ul className="project-modal-list">
                      {selectedProject.keyFeatures.map((feat, idx) => (
                        <li key={idx}>{feat}</li>
                      ))}
                    </ul>

                    <h4 style={{ marginTop: "25px" }}>My Contributions</h4>
                    <ul className="project-modal-list">
                      {selectedProject.contributions.map((contr, idx) => (
                        <li key={idx}>{contr}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="project-modal-sidebar">
                    <div className="project-modal-sidebar-card">
                      <h5>My Role</h5>
                      <p>{selectedProject.roleOrLabel}</p>
                    </div>

                    <div className="project-modal-sidebar-card">
                      <h5>Outcome & Impact</h5>
                      <p>{selectedProject.outcomeOrImpact}</p>
                    </div>

                    <div className="project-modal-desc-section">
                      <h4>Technologies Used</h4>
                      <div className="project-modal-tech-list">
                        {selectedProject.techList.map((tech, idx) => (
                          <span className="project-modal-tech-tag" key={idx}>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Work;

