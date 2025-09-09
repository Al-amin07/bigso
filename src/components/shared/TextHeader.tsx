export default function TextHeader({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <div className="text-center mb-12">
      <h1 className="text-5xl font-bold text-[var(--color-brand)] mb-6">
        {/* 🎪 Today's Weird Finds */}
        {title}
      </h1>
      <p className="text-2xl text-gray-600">{desc}</p>
    </div>
  );
}
