import { Card } from "@/components/ui/card";

import { Button } from "../ui/button";
import { FaShoppingCart } from "react-icons/fa";

export default function WeirdFindCard({ product }: { product: any }) {
  return (
    <Card
      key={product.id}
      className="bg-white py-0 border-0 rounded-lg shadow-md overflow-hidden relative"
    >
      {/* Price Badge */}
      <div className="absolute top-3 left-3 z-10">
        <span className="bg-[#FFFF00] text-[var(--color-brand)] font-bold px-3 py-1 rounded-md text-sm">
          {product.price}
        </span>
      </div>

      {/* Product Image */}
      <div className=" overflow-hidden">
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.title}
          className="w-full h-[230px] object-cover"
        />
      </div>

      {/* Product Info */}
      <div className="p-4  mb-0">
        <h3 className="text-2xl font-bold  text-[var(--color-brand)] mb-4">
          {product.title}
        </h3>
        <p className="text-gray-600 text-lg font-medium mb-5 leading-relaxed">
          {product.description}
        </p>

        {/* Check it out Button */}
        <Button className="w-full bg-[var(--color-brand)] text-xl cursor-pointer hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-md flex items-center justify-center gap-2">
          {/* <ShoppingCart size={26} /> */}
          <FaShoppingCart />
          Check it out
        </Button>
      </div>
    </Card>
  );
}
