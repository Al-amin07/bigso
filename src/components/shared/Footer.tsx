import footerImage from "@/assets/footer.png";
import { Link } from "react-router-dom";
import joker from "@/assets/joker.png";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  const links = [
    { name: "About Us", link: "/about" },
    { name: "Contact", link: "/contact" },
    { name: "FAQ", link: "/faq" },
    { name: "Privacy Policy", link: "/privacy-policy" },
    { name: "Terms of Service", link: "/terms-of-service" },
    { name: "Language", link: "/language" },
  ];
  const links2 = [
    { name: "Odd Gadgets", link: "#" },
    { name: "Funny Gifts", link: "#" },
    { name: "Weird Home", link: "#" },
    { name: "Useless Toys", link: "#" },
  ];

  return (
    <footer className="bg-gray-900 text-white py-16">
      {/* Container with responsive grid/flex */}
      <div className="max-w-[1340px] mx-auto grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 items-start px-6 lg:px-0">
        {/* Left Section */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="bg-[#FECB00] rounded-full flex items-center justify-center">
              <img
                src={joker}
                alt="Joker Image"
                className="w-[54px] h-[54px]"
              />
            </div>
            <button className="bg-[#FE7F00] text-white px-4 py-1.5 rounded-full flex items-center space-x-2">
              <span>Welcome to Bagi Land!</span>
            </button>
          </div>
          <p className="text-lg max-w-sm">
            Your one-stop shop for the weirdest, most unnecessary, and
            absolutely hilarious products on Earth! 🌍
          </p>
          <div className="flex space-x-4">
            <Facebook className="text-xl" />
            <Instagram className="text-xl" />
            <Youtube className="text-xl" />
            <Linkedin className="text-xl" />
          </div>
        </div>

        {/* Quick links 1 */}
        <div className="space-y-2">
          <h3 className="font-semibold text-lg mb-7">Quick link</h3>
          <div className="flex flex-col gap-3">
            {links.map((link, index) => (
              <Link
                key={index}
                to={link.link}
                className="block text-sm text-[#FFFFFF] hover:text-gray-300"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Quick links 2 */}
        <div className="space-y-2">
          <h3 className="font-semibold text-lg mb-7">Quick link</h3>
          <div className="flex flex-col gap-3">
            {links2.map((link, index) => (
              <Link
                key={index}
                to={link.link}
                className="block text-sm text-[#FFFFFF] hover:text-gray-300"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center lg:justify-end">
          <img
            className="max-w-[220px] md:max-w-[260px] lg:max-w-[320px]"
            src={footerImage}
            alt=""
          />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex justify-center px-4">
        <button className="bg-gradient-to-r from-[#9D4DC8] to-[#EA489A] text-sm md:text-lg text-white px-4 py-2 rounded-full mt-6 text-center">
          Note: We get a commission for selling the products.
        </button>
      </div>
    </footer>
  );
};

export default Footer;
