import { Check, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export const PricingSection = () => {
  const plans = [
    {
      name: "Starter",
      price: "10",
      period: "month",
      description:
        "Perfect for individual trainers starting their fitness coaching journey",
      features: [
        "Up to 10 active clients",
        "Basic progress tracking",
        "Session scheduling",
        "Email support",
        "Mobile app access",
      ],
      unavailable: ["Advanced analytics", "Custom branding"],
      buttonText: "Get Started",
      buttonStyle:
        "border-2 border-slate-700 hover:border-slate-600 bg-transparent",
      popular: false,
    },
    {
      name: "Professional",
      price: "7",
      period: "month",
      description:
        "Advanced tools and higher limits for growing fitness businesses",
      features: [
        "Unlimited clients",
        "Advanced analytics dashboard",
        "Custom workout plans",
        "Priority support 24/7",
        "Custom branding",
        "Payment processing",
        "Client mobile app",
      ],
      unavailable: [],
      buttonText: "Start Free Trial",
      buttonStyle: "bg-blue-600 hover:bg-blue-700",
      popular: true,
      badge: "30 days free trial",
    },
    {
      name: "Enterprise",
      price: "5",
      period: "month",
      description:
        "For large-scale operations with custom solutions and premium support",
      features: [
        "Everything in Professional",
        "Dedicated account manager",
        "Custom integrations",
        "White-label solution",
        "Advanced API access",
        "Team collaboration tools",
        "Custom reporting",
      ],
      unavailable: [],
      buttonText: "Contact Sales",
      buttonStyle:
        "border-2 border-slate-700 hover:border-slate-600 bg-transparent",
      popular: false,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="pricing" className="py-20 px-6 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Choose Your Plan
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Select the perfect plan for your fitness coaching business. All
            plans include core features to help you succeed.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className={`relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 border-2 transition-all ${
                plan.popular
                  ? "border-blue-500 shadow-2xl shadow-blue-500/20"
                  : "border-slate-700 hover:border-slate-600"
              }`}
            >
              {plan.popular && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                >
                  <div className="bg-blue-600 text-white px-4 py-1.5 rounded-full text-sm font-semibold flex items-center gap-1.5 shadow-lg">
                    <Sparkles size={14} />
                    {plan.badge}
                  </div>
                </motion.div>
              )}

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-slate-400 text-sm">{plan.description}</p>
                </div>

                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-white">
                    ${plan.price}
                  </span>
                  <span className="text-slate-400">/ {plan.period}</span>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 px-6 rounded-xl font-semibold text-white transition-colors ${plan.buttonStyle}`}
                >
                  {plan.buttonText}
                </motion.button>

                <div className="pt-6 space-y-4">
                  <div className="text-sm font-semibold text-slate-300 uppercase tracking-wider">
                    What's Included:
                  </div>
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <div className="mt-0.5 flex-shrink-0">
                          <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                            <Check size={14} className="text-green-500" />
                          </div>
                        </div>
                        <span className="text-slate-300 text-sm">
                          {feature}
                        </span>
                      </li>
                    ))}
                    {plan.unavailable.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 opacity-50"
                      >
                        <div className="mt-0.5 flex-shrink-0">
                          <div className="w-5 h-5 rounded-full bg-slate-700 flex items-center justify-center">
                            <div className="w-2.5 h-0.5 bg-slate-500 rounded"></div>
                          </div>
                        </div>
                        <span className="text-slate-500 text-sm">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-slate-400">
            All plans include a 30-day money-back guarantee. No credit card
            required for trial.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
