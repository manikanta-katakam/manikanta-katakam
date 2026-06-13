import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const projects = [
  {
    title: "SmartShield AI",
    category: "Real-Time AI Insurance Platform",
    description: "An AI platform for real-time risk detection and automated insurance payouts. Integrated a voice-supported chatbot, worker heatmap tracking using Google Maps, and predictive analytics dashboard.",
    tools: "AI, Google Maps, Heatmap Visualization, Predictive Risk Analytics",
    image: "/images/smartshield_ai.png",
    video: "/videos/smartshield.mp4",
  },
  {
    title: "AI Food Waste Reduction",
    category: "Smart Sustainability Web App",
    description: "Predicts optimal food prep quantities using Linear Regression to minimize waste. Features analytics dashboards, Chart.js trends, role-based JWT auth, and image detection module.",
    tools: "React, Node.js, Express, SQLite, FastAPI, Scikit-learn, Tailwind CSS, Chart.js",
    image: "/images/food_waste_reduction.png",
  },
  {
    title: "Pothole Detection",
    category: "Computer Vision & Deep Learning",
    description: "An automated road pothole identification system using YOLOv8 segmentation and OpenCV, performing video inference frame-by-frame with annotated output video generation.",
    tools: "Python, Ultralytics YOLOv8, OpenCV, Google Colab, FFmpeg",
    image: "/images/pothole_detection.png",
  },
];

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
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

    // Clean up (optional, good practice)
    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
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
              </div>
              <WorkImage image={project.image} alt={project.title} video={project.video} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
