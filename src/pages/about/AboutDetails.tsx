// Bagiland Section
const BagilandSection = () => {
  return (
    <div className="max-w-5xl w-full bg-white/70 rounded-2xl shadow-md p-8 border border-purple-200 mt-12">
      <h2 className="text-3xl font-bold text-center text-purple-600 mb-1">
        The Tale of <span className="text-orange-500">BAGILAND</span>
      </h2>
      <p className="text-center text-gray-600 mb-10">
        Where imagination meets functionality in the most delightful way
      </p>

      <div className="md:flex gap-8 items-center">
        {/* Image + Badge */}
        <div className="relative">
          <span className="absolute -top-6 -left-6 bg-purple-600 text-white px-3 py-1 rounded-lg text-sm">
            Est. 2024
          </span>
          <img
            src="https://images.unsplash.com/photo-1553531384-cc64ac80f931?auto=format&fit=crop&w=600&q=80"
            alt="Bagiland office"
            className="rounded-xl shadow-lg"
          />
          <span className="absolute bottom-2 left-2 bg-white text-gray-600 px-3 py-1 text-sm rounded-md shadow">
            ⭐⭐⭐⭐⭐ Best ratings
          </span>
        </div>

        {/* Text */}
        <div className="mt-6 md:mt-0">
          <h3 className="text-2xl font-semibold text-purple-600 mb-4">
            Once Upon a Time...
          </h3>
          <p className="text-gray-700 mb-4">
            It all started when our founder, Sarah, got tired of boring bags
            that looked like they came from a clone factory. She thought,
            <span className="italic">
              {" "}
              "Why can’t bags be as fun as the people carrying them?"
            </span>{" "}
            And just like that, BAGILAND was born!
          </p>
          <p className="text-gray-700">
            We’re not just another bag shop – we're a wonderland of weird and
            wonderful carriers that make everyday life a little more magical.
            Our mission? To prove that practical doesn’t have to mean boring!
          </p>
        </div>
      </div>
    </div>
  );
};

// Main About Page
const AboutDetails = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-yellow-50 to-pink-100 flex flex-col items-center px-6 py-12">
      {/* <StorySection /> */}
      <BagilandSection />
    </div>
  );
};

export default AboutDetails;
