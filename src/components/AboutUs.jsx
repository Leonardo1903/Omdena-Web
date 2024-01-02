const features = [
  {
    name: "Promoting Real-World AI:",
    description:
      "We are dedicated to harnessing AI for social impact by uniting diverse talents to tackle local challenges in healthcare, education, and more, aiming to create a fairer society and improve lives.",
  },
  {
    name: "Open-Source Projects:",
    description:
      "We prioritize open-source development, inviting everyone to participate, learn, and collaborate in the AI field. This approach enhances project impact, promotes knowledge sharing, and empowers our community.",
  },
  {
    name: "Learning and Growth:",
    description:
      "Our mission centers on fostering continuous learning and growth in AI through workshops, networking, and mentorship, enabling members to enhance their skills, expand networks, and stay updated on advancements in the field.",
  },
  {
    name: "Community Engagement:",
    description:
      "Community engagement is integral to our approach as we co-create projects with local experts and actively involve community input to ensure contextually relevant and impactful solutions, promoting a sense of ownership and sustainability.",
  },
  {
    name: "Creating a Local AI Ecosystem:",
    description:
      "Our goal is to build a thriving local AI ecosystem that harnesses technology for positive change, fostering collaboration and innovation in the community to maximize AI's potential for social good.",
  },
];

function AboutUs() {
  return (
    <div className="bg-white py-24 sm:py-32" id="about-us">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-[#343ab2] sm:text-4xl text-center">
            Our Mission
          </p>
          <p className="mt-6 text-lg leading-8 text-[#8e9298] text-center">
            At Omdena Local Chapter, our mission is to harness the power of
            artificial intelligence (AI) to create a positive and lasting impact
            on our local community.
            <br />
            <br />
            We are a dynamic community of individuals with diverse backgrounds
            and skill sets, united by a common goal of promoting real-world AI
            solutions. As an initiative of Omdena, a global community connecting
            data scientists, engineers, and experts worldwide, we strive to
            leverage our collective knowledge and expertise to tackle pressing
            social challenges through open-source projects.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16 sm: ">
            {features.map((features, index) => (
              <div
                key={features.name}
                className={`relative pl-16 ${
                  index === 4 ? "lg:col-span-2 lg:text-center" : ""
                }`}
              >
                <dt className="text-base font-semibold leading-7 text-[#343ab2]">
                  {features.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {features.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
export default AboutUs;
