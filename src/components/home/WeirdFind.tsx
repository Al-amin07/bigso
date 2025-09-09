import WeirdFindCard from "./WeirdFindCard";
import p1 from "@/assets/products/1.jpg";
import p2 from "@/assets/products/2.jpg";
import p3 from "@/assets/products/3.jpg";
import p4 from "@/assets/products/4.jpg";
import p5 from "@/assets/products/5.jpg";
import p6 from "@/assets/products/6.jpg";
import p7 from "@/assets/products/7.jpg";
import p8 from "@/assets/products/8.jpg";
import p9 from "@/assets/products/9.jpg";
import p10 from "@/assets/products/10.jpg";
import p11 from "@/assets/products/1.jpg";
import p12 from "@/assets/products/2.jpg";
import TextHeader from "../shared/TextHeader";
// import p1 from "@/assets/products/1.jpg"
const products = [
  {
    id: 1,
    title: "Don't Touch Useless Box",
    description:
      "Drink with a flush! Perfect for your morning coffee ritual ☕",
    price: "$19.99",
    image: p1,
  },
  {
    id: 2,
    title: "Banana Phone",
    description: "Ring ring! It's 1985 calling... literally 🍌📞",
    price: "$19.99",
    image: p2,
  },
  {
    id: 3,
    title: "Cat Unicorn Horn",
    description: "Transform your cat into a mythical creature!",
    price: "$19.99",
    image: p3,
  },
  {
    id: 4,
    title: "Pizza Sleeping Bag",
    description: "Sleep like a pepperoni! Extra cheese dreams included 🍕😴",
    price: "$19.99",
    image: p4,
  },
  {
    id: 5,
    title: "Bee Costume",
    description: "Buzz buzz! Perfect for your next costume party 🐝",
    price: "$19.99",
    image: p5,
  },
  {
    id: 6,
    title: "Toilet Golf",
    description: "Practice your putting while you're... putting 🏌️‍♂️🚽",
    price: "$19.99",
    image: p6,
  },
  {
    id: 7,
    title: "Toothpaste Dispenser",
    description: "Squeeze with ease! No more tube wrestling 🦷",
    price: "$19.99",
    image: p7,
  },
  {
    id: 8,
    title: "Toilet Timer",
    description: "Time your business! Efficiency meets necessity ⏰",
    price: "$19.99",
    image: p8,
  },
  {
    id: 9,
    title: "Bee Costume",
    description: "Buzz buzz! Perfect for your next costume party 🐝",
    price: "$19.99",
    image: p9,
  },
  {
    id: 10,
    title: "Toilet Golf",
    description: "Practice your putting while you're... putting 🏌️‍♂️🚽",
    price: "$19.99",
    image: p10,
  },
  {
    id: 11,
    title: "Toothpaste Dispenser",
    description: "Squeeze with ease! No more tube wrestling 🦷",
    price: "$19.99",
    image: p11,
  },
  {
    id: 12,
    title: "Toilet Timer",
    description: "Time your business! Efficiency meets necessity ⏰",
    price: "$19.99",
    image: p12,
  },
];

export default function WeirdFinds() {
  return (
    <div className="min-h-screen relative   p-8">
      <div className="max-w-7xl relative z-20 mx-auto">
        {/* Header */}
        <TextHeader
          title="🎪 Today's Weird Finds"
          desc="Fresh from the depths of Amazon's strangest corners!"
        />

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map((product) => (
            <WeirdFindCard product={product} key={product?.id} />
          ))}
        </div>
        <div className=" flex justify-center mt-12 cursor-pointer">
          <button className="text-2xl px-5 py-2.5 rounded-xl  bg-gradient-to-r from-[#9D4DC8] to-[#EA489A] text-white">
            🎪 Load More Madness!
          </button>{" "}
        </div>
      </div>
      <div className="absolute inset-0 w-full h-full  backdrop-blur-sm"></div>
    </div>
  );
}
