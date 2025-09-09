import newsLetter from "@/assets/news-letter.jpg";
import joker from "@/assets/joker.png";
import { FaYenSign } from "react-icons/fa";
const NewsLetter = () => {
  return (
    <div className="relative bg-gradient-to-b from-purple-100 to-white  flex items-center justify-center">
      <div className="absolute inset-0  bg-black/20">
        <img src={newsLetter} className="w-full h-full object-cover" alt="" />
      </div>
      <div className="relative z-10 text-center text-white  pt-2 pb-14">
        <div className="flex mb-16 justify-center items-center mx-auto w-18   h-18 bg-white rounded-full">
          <img
            src={joker}
            alt="Weirdness Logo"
            className="mx-auto w-16   h-16 "
          />
        </div>

        <h1 className="text-5xl  font-bold  mb-3.5">Get More Weirdness!</h1>
        <p className="text-2xl  mb-15 max-w-4xl mx-auto text-center">
          Join 50,000+ fellow weirdos and get the latest bizarre finds delivered
          to your inbox. Prepare to be filled with joy! 😄
        </p>
        <div className="bg-white py-6 px-9 rounded-lg shadow-lg max-w-xl mx-auto">
          <div className="flex items-center gap-5">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2.5 border-[var(--color-brand)] border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button className="w-full bg-gradient-to-l from-[#9D4DC8] to-[#EA489A] text-white p-3 text-xl rounded-lg hover:bg-purple-700 transition duration-300">
              Join the madness!
            </button>
          </div>
          <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
            {[
              "Weekly weird finds",
              "Exclusive deals",
              "No spam (just weirdness)",
            ].map((el) => (
              <li className="list-none text-base"> ✔️ {el}</li>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-black/10"></div>
    </div>
  );
};

export default NewsLetter;
