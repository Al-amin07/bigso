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
    <div className="w-full ">
      <TextHeader
        title="Avocado Toast Socks"
        desc="Our team of professional weirdos handpicked these gems just for you!"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {editorsPicks.map((product, index) => (
          <EditorCard key={product.id} product={product} index={index} />
        ))}
      </div>
    </div>
  );
};

export default EditorsWeirdPicks;
