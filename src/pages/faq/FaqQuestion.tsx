import { ChevronRight } from "lucide-react";
import { useState } from "react";

const FaqQuestion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is a Payment Gateway?",
      answer:
        "A payment gateway is a service that authorizes and processes credit card or direct payment transactions for e-commerce businesses.",
    },
    {
      question:
        "Do I need to pay to Instapay even when there is no transaction going on in my business?",
      answer:
        "No, you do not need to pay Instapay where there is no transaction happening. With one of the lowest transaction charges in the industry, pay only when you get paid!",
    },
    {
      question: "What platforms does ACME payment gateway support?",
      answer:
        "ACME payment gateway supports major e-commerce platforms like Shopify, WooCommerce, and Magento.",
    },
    {
      question: "Does ACME provide international payments support?",
      answer:
        "Yes, ACME offers international payments support with multi-currency processing.",
    },
    {
      question:
        "Is there any setup fee or annual maintenance fee that I need to pay regularly?",
      answer: "No, ACME does not charge any setup or annual maintenance fees.",
    },
  ];

  return (
    <div className=" max-w-6xl  mx-auto">
      <div className=" ">
        <div className=" mx-auto">
          <h2 className="md:text-4xl text-3xl lg:text-5xl  font-bold text-purple-700 mb-6">
            Frequently Asked Questions
          </h2>
          <div className="flex flex-col lg:flex-row items-center gap-6">
            <div className="bg-white lg:min-w-[680px] lg:max-h-[390px] relative lg:left-16 max-w-[500px] rounded-lg shadow-lg p-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`"border-b  border-gray-200 ${
                    index === openIndex ? "bg-[#FAFBFF]" : "bg-white"
                  }"`}
                >
                  <button
                    className="w-full cursor-pointer text-left py-4 flex justify-between items-center focus:outline-none"
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className={`h-6 min-w-6 max-w-6 rounded-full ${
                          openIndex === index ? "bg-[#5D5FEF]" : "bg-[#A5A6F6]"
                        }`}
                      ></span>
                      <span
                        className={`text-base lg:text-lg ${
                          openIndex === index
                            ? "text-purple-700"
                            : "text-gray-600"
                        }`}
                      >
                        {faq.question}
                      </span>
                    </div>
                    <span>
                      <ChevronRight
                        className={`text-lg ${
                          openIndex === index
                            ? "text-purple-700"
                            : "text-gray-600"
                        }`}
                      />
                    </span>
                  </button>
                </div>
              ))}
            </div>
            <div className="py-12 px-12 lg:px-24 rounded-lg shadow-lg lg:min-w-[640px] lg:h-[470px] bg-[#FAFBFF] ">
              <h1 className="font-bold mb-10">
                {faqs[openIndex as number]?.question}
              </h1>
              <h1>{faqs[openIndex as number]?.answer}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqQuestion;
