import { useState } from "react";
import Image1 from "../assets/Image-1.png";
import Image2 from "../assets/Image-2.png";
import Image3 from "../assets/Image-3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Background() {
  const images = [Image1, Image2, Image3];

  const imageDescriptions = [
    "Visualizing Pathologies in Ultrasound usng Computer vison",
    "Crop Yield Prediction App using Satellite Imagery and Jupyter",
    "Fighting Fake News and Misinformation using NLP",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="overflow-hidden bg-[#fefeff] py-24 sm:py-32" id="omdena">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 sm:items-center ">
        <div className="flex flex-col lg:flex-row">
          {/* Image Slider */}
          <div className="w-full h-[512px]">
            <div className="relative">
              <img
                src={images[currentImageIndex]}
                alt="Slider Image"
                className="w-full h-auto rounded-lg "
                loading="lazy"
              />
              <button
                onClick={prevImage}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full text-gray-700 hover:text-gray-900 focus:outline-none"
              >
                <FontAwesomeIcon icon={faArrowLeft} />{" "}
              </button>
              <button
                onClick={nextImage}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full text-gray-700 hover:text-gray-900 focus:outline-none"
              >
                <FontAwesomeIcon icon={faArrowRight} />{" "}
              </button>
            </div>
            <p className="text-lg text-center text-[#8e9298]">
              {imageDescriptions[currentImageIndex]}
            </p>
          </div>

          {/* Text Content */}
          <div className="w-full  px-6 items-center ">
            <div className="lg:max-w-lg lg:text-right text-center ">
              <p className="mt-2 text-3xl font-bold tracking-tight text-[#343ab2] sm:text-4xl">
                What is Omdena?
              </p>
              <p className="mt-6 text-lg leading-8 text-[#8e9298]">
                Omdena is a global platform that unites people from diverse
                backgrounds, including data scientists and domain experts, to
                collaborate remotely on AI projects tackling real-world issues
                in areas like healthcare and environmental sustainability. Their
                approach involves forming multi-disciplinary teams to create
                practical and context-specific AI solutions, with the aim of
                making a positive social impact. Omdena promotes a culture of
                openness, knowledge sharing, and community engagement, making AI
                accessible and beneficial to communities worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Background;
