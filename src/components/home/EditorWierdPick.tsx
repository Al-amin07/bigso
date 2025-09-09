import React from "react";
import EditorCard from "./EditorCard";
import e1 from "@/assets/products/editor1.png";
import e2 from "@/assets/products/editor2.png";
import e3 from "@/assets/products/editor3.png";
import TextHeader from "../shared/TextHeader";
interface EditorsWeirdPicksProps {
  title?: string;
  subtitle?: string;

  showDimensions?: boolean;
  dimensions?: string;
}

const editorsPicks = [
  {
    id: 1,
    title: "Giant Flamingo Float",
    description:
      "Because regular pool floats are for peasants. This majestic bird will make you the pool party royalty you were born to be! 🦩",
    price: "$79.99",
    rating: 5,
    reviewCount: 7596,
    badge: "Best Seller" as const,
    badgeColor: "purple" as const,
    image: e1,
  },
  {
    id: 2,
    title: "Dinosaur Taco Holder",
    description:
      "Finally! A way to combine your love for extinct reptiles and Mexican cuisine. Your tacos will never be the same! 🦕🌮",
    price: "$79.99",
    rating: 5,
    reviewCount: 7596,
    badge: "Best Seller" as const,
    badgeColor: "yellow" as const,
    image: e2,
  },
  {
    id: 3,
    title: "Avocado Toast Socks",
    description:
      "For millennials who want to wear their financial decisions on their feet. Now you can literally walk on avocado toast! 🥑🍞",
    price: "$79.99",
    rating: 5,
    reviewCount: 7596,
    badge: "Best Seller" as const,
    badgeColor: "cyan" as const,
    image: e3,
  },
];

const EditorsWeirdPicks: React.FC<EditorsWeirdPicksProps> = ({}) => {
  return (
    <div className="w-full  p-8 ">
      {/* Header */}
      <TextHeader
        title="Avocado Toast Socks"
        desc="Our team of professional weirdos handpicked these gems just for you!"
      />
      {/* <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-2 mb-4">
          <ShoppingBag className="w-8 h-8 text-purple-600" />
          <h2 className="text-3xl font-bold text-purple-600">{title}</h2>
        </div>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto">{subtitle}</p>
      </div> */}

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {editorsPicks.map((product, index) => (
          <EditorCard key={product.id} product={product} index={index} />
        ))}
      </div>

      {/* Dimensions Badge */}
      {/* {showDimensions && (
        <div className="flex justify-center">
          <div className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-md">
            {dimensions}
          </div>
        </div>
      )} */}
    </div>
  );
};

export default EditorsWeirdPicks;
