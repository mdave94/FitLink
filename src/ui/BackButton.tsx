import { ArrowLeft } from "lucide-react";

type BackButtonProps = {
  onBack?: () => void;
};

export const BackButton = ({ onBack }: BackButtonProps) => {
  return (
    <button
      onClick={onBack}
      className="flex gap-2items-center space-x-2 text-slate-300 hover:text-white transition-colors duration-200"
    >
      <ArrowLeft size={20} />
      <p> Back</p>
    </button>
  );
};
