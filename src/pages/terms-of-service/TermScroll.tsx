import CommonWrapper from "@/common/CommonWrapper";
import { useRef } from "react";
import { FaDownload } from "react-icons/fa";

export default function TermsOfServiceScroll() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleExport = () => {
    alert("Export clicked! (You can implement PDF/Doc export here)");
  };
  const options = [
    {
      title: "YOUR AGREEMENT",
      desc: "By using this Site, you agree to be bound by, and to comply with, these Terms and Conditions. If you do not agree to these Terms and Conditions, please do not use this site",
      note: "PLEASE NOTE: We reserve the right, at our sole discretion, to change, modify or otherwise alter these Terms and Conditions at any time. Unless otherwise indicated, amendments will become effective immediately. Please review these Terms and Conditions periodically. Your continued use of the Site following the posting of changes and/or modifications will constitute your acceptance of the revised Terms and Conditions and the reasonableness of these standards for notice of changes. For your information, this page was last updated as of the date at the top of these terms and conditions",
    },
    {
      title: "PRIVACY",
      desc: "Please review our Privacy Policy, which also governs your visit to this Site, to understand our practices.",
    },
    {
      title: "LINKED SITES",
      desc: `This Site may contain links to other independent third-party Web sites ("Linked Sites”). These Linked Sites are provided solely as a convenience to our visitors. Such Linked Sites are not under our control, and we are not responsible for and does not endorse the content of such Linked Sites, including any information or materials contained on such Linked Sites. You will need to make your own`,
    },
    {
      title: "LINKED SITES",
      desc: `This Site may contain links to other independent third-party Web sites ("Linked Sites”). These Linked Sites are provided solely as a convenience to our visitors. Such Linked Sites are not under our control, and we are not responsible for and does not endorse the content of such Linked Sites, including any information or materials contained on such Linked Sites. You will need to make your own`,
    },
    {
      title: "LINKED SITES",
      desc: `This Site may contain links to other independent third-party Web sites ("Linked Sites”). These Linked Sites are provided solely as a convenience to our visitors. Such Linked Sites are not under our control, and we are not responsible for and does not endorse the content of such Linked Sites, including any information or materials contained on such Linked Sites. You will need to make your own`,
    },
  ];

  return (
    <CommonWrapper>
      <div className=" relative mt-[80px] ">
        <div className="  p-6 overflow-hidden">
          {/* Scrollable Content */}
          <div
            ref={scrollRef}
            className="max-h-[450px] overflow-y-scroll pr-4 scrollbar-thin scrollbar-thumb-fuchsia-600 scrollbar-track-transparent"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-brand)] mb-6">
              Terms and Conditions
            </h1>

            <p className="mb-6 text-2xl font-medium">Your Agreement</p>

            <p>Last Revised: September 02, 2025</p>
            <p className="mb-6">
              Welcome to www.lorem-ipsum.info. This site is provided as a
              service to our visitors and may be used for informational purposes
              only. Because the Terms and Conditions contain legal obligations,
              please read them carefully.
            </p>

            <div>
              {options.map((item, index) => (
                <div className="mb-6" key={index}>
                  <h1 className="text-xl font-medium">
                    {index + 1}. {item.title}
                  </h1>
                  <p className="mb-2">{item.desc}</p>
                  <p className="mb-2">{item.note}</p>
                </div>
              ))}
            </div>
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
    </CommonWrapper>
  );
}
