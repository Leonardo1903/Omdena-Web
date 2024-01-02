import { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Project1 from "../assets/Project-1.png";
import Project2 from "../assets/Project-2.png";

function Project({ project }) {
  return (
    <div className="w-full flex-shrink-0 flex flex-col-reverse sm:flex-row items-center">
      <div className="w-full sm:w-1/2 p-4">
        <h3 className="text-xl font-semibold text-[#343ab2] mb-2">
          {project.title}
        </h3>
        <p className="text-gray-600">{project.description}</p>
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#343ab2] hover:underline"
          >
            GitHub Link
          </a>
        )}
      </div>
      <div className="w-full sm:w-1/2 p-4">
        <img
          src={project.image}
          loading="lazy"
          alt={project.title}
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>
    </div>
  );
}

Project.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    github: PropTypes.string, // GitHub link
  }).isRequired,
};

const projectsData = [
  {
    title: "Water Quality Monitoring",
    description:
      "In the 1980s, the Bhopal region suffered a devastating industrial disaster due to toxic chemical release, impacting the water quality of its lakes. Subsequent environmental challenges revealed the persistent presence of hazardous pollutants, causing health issues and disabilities among residents. A project spanning from 2014 to 2023 used GIS techniques and satellite imagery to assess the enduring impact of the Bhopal Gas Tragedy. The analysis uncovered elevated levels of harmful chemicals like chloroform and carbon tetrachloride in the lakes. The study aimed to address the alarming situation in Bhopal, often called 'The City of Lakes,' by employing advanced technologies such as Google Earth Engine and Geographic Information System (GIS) techniques to comprehensively monitor and manage water quality.",
    image: Project1,
    github:
      "https://github.com/OmdenaAI/omdena-bhopal-water-quality-monitoring", // GitHub link for Project 1
  },
  {
    title: "AI Road Inspection",
    description:
      "The project aims to revolutionize road inspections, traditionally time-consuming and labor-intensive, by employing machine learning and advanced technology. The system, equipped with HD cameras, captures live video streams from roads, allowing for comprehensive data acquisition. Utilizing the Matlab machine learning toolbox, it trains and tests a network to accurately detect various road defects and damages, such as cracks and rutting. The system not only streamlines inspections but also provides municipalities with recommended actions for prompt defect correction. A user-friendly dashboard facilitates real-time visualization and reporting of road issues, enhancing efficiency, resource allocation, and overall road safety and maintenance. This innovative road inspection system promises to bring about positive changes and improve transportation infrastructure and community well-being.",
    image: Project2,
    github: "https://github.com/OmdenaAI/bhopal-mexico-ai-road-inspection", // GitHub link for Project 2
  },
  // Add more projects as needed
];

function Projects() {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const nextProject = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === projectsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevProject = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="bg-[#fefeff] py-24 sm:py-32" id="projects">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#343ab2] text-center mb-6">
          Our Projects
        </h2>
        <div className="relative bg-white">
          <div className="flex">
            <button
              onClick={prevProject}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-2 bg-white bg-opacity-50 p-2 rounded-full text-gray-700 hover:text-gray-900 focus:outline-none z-10"
              style={{ zIndex: 10 }}
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <div className="w-full overflow-hidden">
              <div
                className="flex transition-transform duration-300"
                style={{
                  transform: `translateX(-${currentProjectIndex * 100}%)`,
                }}
              >
                {projectsData.map((project, index) => (
                  <Project key={index} project={project} />
                ))}
              </div>
            </div>

            <button
              onClick={nextProject}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 -translate-x-2 bg-white bg-opacity-50 p-2 rounded-full text-gray-700 hover:text-gray-900 focus:outline-none z-10"
              style={{ zIndex: 10 }}
            >
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
