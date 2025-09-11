import storyImage from "@/assets/story.jpg";
export default function TaleofBagiland() {
  return (
    <div className="max-w-5xl mx-auto w-full    ">
      <div className="text-center mb-12">
        <h1 className="md:text-4xl text-3xl lg:text-5xl  font-bold text-[var(--color-brand)] mb-6">
          The Tale of <span className="text-orange-500">BAGILAND</span>
        </h1>
        <p className="md:text-xl text-lg lg:text-2xl text-gray-600">
          {" "}
          Where imagination meets functionality in the most delightful way
        </p>
      </div>

      <div className="md:flex gap-8 items-center">
        {/* Image + Badge */}
        <div className="relative">
          <span className="absolute lg:top-6 lg:-left-14 text-[var(--color-brand)] bg-white border border-[var(--color-brand)]  px-5 py-2 rounded-lg text-xl">
            Est. 2024
          </span>
          <img
            src={storyImage}
            alt="Bagiland office"
            className="rounded-xl shadow-lg max-w-[480px] "
          />
          <div className="absolute bottom-0 lg:-bottom-12 right-0 bg-white text-gray-600 px-5 py-4 rounded-md shadow">
            <p className="mb-2 text-[#232323]"> Best ratings</p>
            <p className="bg-[#F0F0F0] h-1.5 w-20"></p>
            <p className="bg-[#F0F0F0] h-1.5 w-15 mb-3 mt-2"></p>
            <div className="flex items-center gap-1">
              <span className="text-xl inline-block">😡</span>
              <span className="text-xl inline-block">😟</span>
              <span className="text-xl inline-block">😑</span>
              <span className="text-xl inline-block">😜</span>
              <span className="text-3xl inline-block">😁</span>
            </div>
          </div>
        </div>

        {/* Text */}
        <div className="mt-6 md:mt-0">
          <h3 className="text-2xl md:text-3xl font-semibold text-[var(--color-brand)] mb-3">
            Once Upon a Time...
          </h3>
          <p className="text-gray-700 mb-3 text-lg md:text-xl font-medium mt-2.5">
            It all started when our founder, Sarah, got tired of boring bags
            that looked like they came from a clone factory. She thought,
            <span className="">
              {" "}
              "Why can’t bags be as fun as the people carrying them?"
            </span>{" "}
            And just like that, BAGILAND was born!
          </p>
          <p className="text-gray-700 text-lg md:text-xl font-medium mt-2.5">
            We’re not just another bag shop – we're a wonderland of weird and
            wonderful carriers that make everyday life a little more magical.
            Our mission? To prove that practical doesn’t have to mean boring!
          </p>
        </div>
      </div>
    </div>
  );
}
