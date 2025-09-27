import { ShoppingCart } from "lucide-react";

interface MembershipCardProps {
  name: string;
  entries: number;
  colorTheme: "blue" | "green";
  onClick?: () => void;
}

export default function MembershipCard({
  name,
  entries,
  colorTheme,
  onClick,
}: MembershipCardProps) {
  const getColorClasses = () => {
    switch (colorTheme) {
      case "blue":
        return {
          background: "bg-gradient-to-br from-blue-900/40 to-blue-800/40",
          border: "border-blue-600",
          text: "text-blue-200",
          accent: "text-blue-400",
          iconBg: "bg-blue-800/50",
        };
      case "green":
        return {
          background: "bg-gradient-to-br from-green-900/40 to-green-800/40",
          border: "border-green-600",
          text: "text-green-200",
          accent: "text-green-400",
          iconBg: "bg-green-800/50",
        };
      default:
        return {
          background: "bg-gradient-to-br from-gray-800 to-gray-700",
          border: "border-gray-600",
          text: "text-gray-200",
          accent: "text-gray-400",
          iconBg: "bg-gray-700/50",
        };
    }
  };

  const colors = getColorClasses();

  return (
    <div
      onClick={onClick}
      className={`
        ${colors.background}
        ${colors.border}
        border-2 rounded-xl p-6 cursor-pointer hover:shadow-lg transition-all duration-300
        hover:scale-105 transform
      `}
    >
      <div className="text-center">
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className={`${colors.accent} p-3 rounded-full ${colors.iconBg}`}>
            <ShoppingCart size={24} />
          </div>
        </div>

        {/* Membership Name */}
        <h3 className={`text-lg font-bold ${colors.text} mb-2`}>{name}</h3>

        {/* Entries Number */}
        <div className={`text-4xl font-bold ${colors.accent} mb-2`}>
          {entries}
        </div>

        {/* Entries Label */}
        <div className={`text-sm ${colors.text} opacity-80`}>entries</div>
      </div>
    </div>
  );
}
