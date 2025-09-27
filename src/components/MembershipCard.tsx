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
          background: "bg-gradient-to-br from-blue-100 to-blue-200",
          border: "border-blue-300",
          text: "text-blue-800",
          accent: "text-blue-600",
        };
      case "green":
        return {
          background: "bg-gradient-to-br from-green-100 to-green-200",
          border: "border-green-300",
          text: "text-green-800",
          accent: "text-green-600",
        };
      default:
        return {
          background: "bg-gradient-to-br from-gray-100 to-gray-200",
          border: "border-gray-300",
          text: "text-gray-800",
          accent: "text-gray-600",
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
          <div className={`${colors.accent} p-3 rounded-full bg-white/50`}>
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
