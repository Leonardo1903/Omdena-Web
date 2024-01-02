function ContactUs() {
  return (
    <div
      className="relative isolate overflow-hidden bg-white py-16 sm:py-24 lg:py-32"
      id="contact-us"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          {/* First Column */}
          <div className=" lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-[#343ab2] sm:text-4xl">
              Subscribe to our newsletter.
            </h2>
            <p className="mt-4 text-lg leading-8 text-[#8e9298]">
              Subscribe to receive and stay updated about events and workshops
              that will be held
            </p>
            <div className="mt-6 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-[#8e9298] shadow-md ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                placeholder="Enter your email"
              />

              <button
                type="submit"
                className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Subscribe
              </button>
            </div>
          </div>

          {/* Second Column */}
          <div>
            <dl className="grid grid-cols-1  lg:pt-2 ">
              <div className="flex flex-col items-end">
                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10"></div>
                <dt className="mt-4 font-semibold text-[#343ab2]">
                  For further information
                </dt>
                <dd className="mt-2 leading-7 text-[#8e9298] text-right">
                  Contact Vaasu Bisht (Vice President Omdena VIT Bhopal)
                  <br />
                  WhatsApp: 9310370781
                  <br />
                  Email at: vaasu.bisht2021@vitbhopal.ac.in
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
