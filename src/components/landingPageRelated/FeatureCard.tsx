import { motion } from "framer-motion";
import { useState } from "react";
import { FeatureModal } from "./FeatureModal";

type FeatureCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
  detailedContent?: {
    subtitle: string;
    features: string[];
    benefits: string[];
    ctaText: string;
  };
};

export const FeatureCard = ({
  title,
  description,
  icon,
  delay,
  detailedContent,
}: FeatureCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = () => {
    if (detailedContent) {
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay }}
        whileHover={{ scale: 1.05 }}
        onClick={handleCardClick}
        className={`bg-slate-800/50 border border-slate-700 rounded-2xl p-8 ${
          detailedContent ? "cursor-pointer" : "cursor-default"
        }`}
      >
        <div className="w-14 h-14 bg-blue-600/20 rounded-xl flex items-center justify-center mb-6  ">
          {icon}
        </div>
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-slate-400">{description}</p>

        {detailedContent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4 text-blue-400 text-sm font-medium"
          >
            Click to learn more →
          </motion.div>
        )}
      </motion.div>

      {detailedContent && (
        <FeatureModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title={title}
          description={description}
          icon={icon}
          detailedContent={detailedContent}
        />
      )}
    </>
  );
};
