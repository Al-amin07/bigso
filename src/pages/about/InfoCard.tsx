// Reusable Info Card
const InfoCard = ({
  icon,
  title,
  description,
  bgColor,
  textColor,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  bgColor: string;
  textColor: string;
}) => {
  return (
    <div className={`p-6 rounded-xl ${bgColor}`}>
      <div className={`text-3xl mb-3 ${textColor}`}>{icon}</div>
      <h3 className={`font-semibold text-2xl ${textColor}`}>{title}</h3>
      <p className="text-[var(--color-brand)] text-xl mt-2">{description}</p>
    </div>
  );
};

export default InfoCard;
