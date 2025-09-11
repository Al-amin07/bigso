// import CommonWrapper from "@/common/CommonWrapper";
import WrapperBackground from "@/components/WrapperBackground";
import { useRef } from "react";
import { FaDownload } from "react-icons/fa";

export default function PrivacyPolicyScroll() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleExport = () => {
    alert("Export clicked! (You can implement PDF/Doc export here)");
  };

  return (
    <WrapperBackground>
      <div className=" relative mt-[80px] ">
        <div className="  p-6 overflow-hidden">
          {/* Scrollable Content */}
          <div
            ref={scrollRef}
            className="max-h-[450px] overflow-y-scroll pr-4 scrollbar-thin scrollbar-thumb-fuchsia-600 scrollbar-track-transparent"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-brand)] mb-6">
              Privacy Policy
            </h1>

            <p className="mb-6 text-2xl font-medium">
              Because Privacy Isn’t Just for Ninjas 🥷
            </p>

            <p className="mb-6">
              We love weirdness, but not when it comes to your data. Your
              secrets stay safe—scouts honor!
            </p>

            <h2 className="font-semibold mt-4 mb-2">
              1. Information We Collect
            </h2>
            <p className="mb-2">
              When you sign up for our newsletter, we collect your email address
              (a.k.a. your “weird-email”).
            </p>
            <p className="mb-2">
              If you make a purchase through our links, we may collect basic
              info needed to process it (nothing creepy, promise).
            </p>
            <p className="mb-4">
              Like most websites, we may collect non-personal info such as
              browser type, device, and general usage patterns.
            </p>

            <h2 className="font-semibold mt-4 mb-2">
              2. How We Use Your Information
            </h2>
            <p className="mb-2">
              To send you the weirdest emails, latest bizarre finds, and
              exclusive deals.
            </p>
            <p className="mb-2">
              To send you the weirdest emails, latest bizarre finds, and
              exclusive deals.
            </p>
            <p className="mb-2">
              To send you the weirdest emails, latest bizarre finds, and
              exclusive deals.
            </p>
            <h2 className="font-semibold mt-4 mb-2">
              3. How We Use Your Information
            </h2>
            <p className="mb-2">
              To send you the weirdest emails, latest bizarre finds, and
              exclusive deals.
            </p>
            <p className="mb-2">
              To send you the weirdest emails, latest bizarre finds, and
              exclusive deals.
            </p>
            <p className="mb-2">
              To send you the weirdest emails, latest bizarre finds, and
              exclusive deals.
            </p>
          </div>
          <button
            onClick={handleExport}
            className="absolute -bottom-12 right-6 bg-[#A60195] cursor-pointer hover:bg-fuchsia-700 text-white px-4 py-2 rounded-md flex items-center gap-2 shadow-md"
          >
            Export <FaDownload />
          </button>
        </div>
        {/* Export Button */}
      </div>
    </WrapperBackground>
  );
}
