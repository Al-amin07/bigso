export default function TextHeader({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <div className="text-center mb-8 md:mb-12">
      <h1 className="md:text-4xl text-3xl lg:text-5xl font-bold text-[var(--color-brand)] mb-6">
        {/* 🎪 Today's Weird Finds */}
        {title}
      </h1>
      <p className="md:text-xl text-lg lg:text-2xl text-gray-600">{desc}</p>
    </div>
  );
}
