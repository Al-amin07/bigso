import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import { Search } from "lucide-react";
export default function Navbar() {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
    { name: "FAQ", href: "/faq" },
  ];
  return (
    <div className="absolute top-2 left-1/2 -translate-x-1/2 z-20">
      {/* Logo */}
      <div className="flex justify-center">
        <img src={logo} alt="Bagi Land Logo" className="w-[240px]  " />
      </div>

      {/* Navbar */}
      <div className="flex items-center gap-4">
        <nav className="bg-[#FFFCFF26]   shadow-sm drop-shadow-2xl shadow-[#0000001A] backdrop-blur-3xl rounded-full px-8 py-3.5 flex items-center gap-6  ">
          {navLinks?.map((el) => (
            <Link className="text-xl whitespace-nowrap " to={el.href}>
              {el.name}
            </Link>
          ))}
        </nav>
        <button className=" p-4 bg-[#FFFCFF26]   shadow-sm drop-shadow-2xl shadow-[#0000001A] backdrop-blur-3xl   rounded-full hover:bg-gray-200">
          <Search className="h-6 w-6  font-light" />
        </button>
      </div>
    </div>
  );
}
