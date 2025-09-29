import React from "react";
import { AlertTriangle, Check, X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
  icon?: React.ReactNode;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
  confirmButtonColor?: "green" | "red" | "blue";
  iconColor?: string;
}

export default function Modal({
  isOpen,
  onClose,
  title,
  message,
  icon,
  confirmText = "Confirm",
  cancelText = "Cancel",
  onConfirm,
  confirmButtonColor = "green",
  iconColor = "text-yellow-400",
}: ModalProps) {
  if (!isOpen) return null;

  const getConfirmButtonClass = () => {
    switch (confirmButtonColor) {
      case "red":
        return "bg-red-600 hover:bg-red-700";
      case "blue":
        return "bg-blue-600 hover:bg-blue-700";
      case "green":
      default:
        return "bg-green-600 hover:bg-green-700";
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 max-w-md w-full mx-4">
        <div className="flex items-center space-x-2 mb-4">
          {icon || <AlertTriangle size={24} className={iconColor} />}
          <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>

        <p className="text-slate-300 mb-6">{message}</p>

        <div className="flex space-x-3">
          <button
            onClick={onConfirm}
            className={`flex-1 ${getConfirmButtonClass()} text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2`}
          >
            <Check size={20} />
            <span>{confirmText}</span>
          </button>
          <button
            onClick={onClose}
            className="flex-1 bg-slate-600 hover:bg-slate-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
          >
            <X size={20} />
            <span>{cancelText}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
