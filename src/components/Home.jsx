import Welcome from "../assets/Welcome.png";

function Home() {
  return (
    <div className="overflow-hidden bg-[#fefeff] sm:py-20" id="home">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 items-center">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-3xl font-bold tracking-tight text-[#343ab2] sm:text-4xl">
                Welcome to the Omdena Local Chapter at VIT Bhopal!
              </p>
              <p className="mt-6 text-lg leading-8 text-[#8e9298]">
                As part of the global Omdena community, our chapter is dedicated
                to leveraging the power of AI to address real-world challenges.
                With a focus on collaboration, compassion, curiosity, and
                consciousness, we work together to develop innovative solutions
                that make a positive impact..
                <br />
                <br />
                Join us as we continue to grow and create a better future
                through the application of AI. Together, we can make a
                difference!
              </p>
            </div>
          </div>
          <div className="lg:pl-8">
            <img
              src={Welcome}
              alt="Image"
              loading="lazy"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
