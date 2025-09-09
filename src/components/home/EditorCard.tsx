import { ShoppingCart, Star } from "lucide-react";
export interface Product {
  id: number;
  title: string;
  description: string;
  price: string;
  image: string;
  rating: number;
  reviewCount: number;
  badge?: "Best Seller" | "New" | "Sale";
  badgeColor?: "purple" | "yellow" | "cyan" | "green" | "red";
}
const EditorCard: React.FC<{ product: Product; index: number }> = ({
  product,
  index,
}) => {
  const getButtonStyles = (color: string = "purple") => {
    const styles = {
      purple: "bg-purple-500 hover:bg-purple-600 text-white",
      yellow: "bg-yellow-400 hover:bg-yellow-500 text-black",
      cyan: "bg-cyan-400 hover:bg-cyan-500 text-white",
      green: "bg-green-500 hover:bg-green-600 text-white",
      red: "bg-red-500 hover:bg-red-600 text-white",
    };
    return styles[color as keyof typeof styles] || styles.purple;
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "text-orange-400 fill-orange-400" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div
      className={` rounded-2xl shadow-lg overflow-hidden  hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] ${
        index === 0
          ? "bg-[#FCF3FA]"
          : index === 1
          ? "bg-[#FFF9EC]"
          : "bg-[#EEF9FF]"
      }`}
    >
      {/* Product Image Section */}
      <div className=" p-5">
        {/* Badge */}

        {/* Product Image */}
        <div className="flex relative justify-center items-center ">
          <img
            src={product.image}
            alt={product.title}
            className="w-full max-h-[282px] object-contain rounded-lg"
          />
          {product.badge && (
            <div className="absolute top-4 right-4 z-10">
              <div
                className={`${
                  index === 0
                    ? "bg-[var(--color-brand)] text-white"
                    : index === 1
                    ? "bg-[#FFFF00] text-[var(--color-brand)]"
                    : "bg-[#06B6D4] text-white"
                } px-3 py-1 rounded-full text-xl  font-semibold shadow-md`}
              >
                {product.badge}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Content Section */}
      <div className="px-5 py-5">
        {/* Title */}
        <h3 className="text-3xl font-bold text-[var(--color-brand)] mb-5">
          {product.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-xl leading-relaxed mb-4 line-clamp-3">
          {product.description}
        </p>

        {/* Price and Rating */}
        <div className="flex items-center justify-between mb-4">
          <div className="text-2xl font-bold text-[var(--color-brand)]">
            {product.price}
          </div>
          <div className="flex items-center gap-1">
            <div className="flex">{renderStars(product.rating)}</div>
            <span className="text-lg text-gray-500 ml-1">
              ({product.reviewCount} Review
              {product.reviewCount !== 1 ? "s" : ""})
            </span>
          </div>
        </div>

        {/* CTA Button */}
        <button
          className={`w-full ${
            index === 0
              ? "bg-[var(--color-brand)] text-white"
              : index === 1
              ? "bg-[#FFFF00] text-[var(--color-brand)]"
              : "bg-[#06B6D4] text-white"
          } font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-md hover:shadow-lg`}
        >
          <ShoppingCart className="w-5 h-5" />
          Check it out
        </button>
      </div>
    </div>
  );
};

export default EditorCard;
