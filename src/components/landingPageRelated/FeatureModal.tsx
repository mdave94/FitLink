import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface FeatureModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  icon: React.ReactNode;
  detailedContent: {
    subtitle: string;
    features: string[];
    benefits: string[];
    ctaText: string;
  };
}

const ModalContainer = ({
  onClose,
  title,
  description,
  icon,
  detailedContent,
}: FeatureModalProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8, y: 50 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="bg-slate-900 border border-slate-700 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-64 bg-gradient-to-br from-blue-600/20 to-purple-600/20 overflow-hidden">
          <div className="absolute inset-0 opacity-50">
            <div className="w-full h-full bg-gradient-to-br from-white/5 to-transparent"></div>
          </div>

          <button
            onClick={onClose}
            className="absolute top-4 right-4  bg-black/20 hover:bg-black/40 rounded-full flex items-center justify-center transition-colors z-10"
          >
            <X size={20} className="text-red " />
          </button>

          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", damping: 15 }}
              className="text-center text-white"
            >
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 mx-auto">
                {icon}
              </div>
              <h2 className="text-3xl font-bold mb-2">{title}</h2>
              <p className="text-lg text-blue-100 max-w-md mx-auto">
                {description}
              </p>
            </motion.div>
          </div>
        </div>

        <div className="p-8 overflow-y-auto max-h-[calc(90vh-16rem)]">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                {detailedContent.subtitle}
              </h3>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="grid md:grid-cols-2 gap-6"
            >
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-blue-400 mb-3">
                  Key Features
                </h4>
                {detailedContent.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-slate-300">{feature}</p>
                  </motion.div>
                ))}
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-green-400 mb-3">
                  Benefits
                </h4>
                {detailedContent.benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-slate-300">{benefit}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-center pt-6"
            >
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
                {detailedContent.ctaText}
              </button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export const FeatureModal = ({
  isOpen,
  onClose,
  title,
  description,
  icon,
  detailedContent,
}: FeatureModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <ModalContainer
          isOpen={isOpen}
          onClose={onClose}
          title={title}
          description={description}
          icon={icon}
          detailedContent={detailedContent}
        />
      )}
    </AnimatePresence>
  );
};
