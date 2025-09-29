import React, { useState, useRef } from "react";
import {
  Mail,
  User,
  MessageSquare,
  Send,
  AlertCircle,
  CheckCircle,
} from "lucide-react";
import ReCaptcha from "../helper/Recaptcha";
import { submitContactForm } from "../api/contact";

interface ContactFormProps {
  onSuccess?: () => void;
}

export default function ContactForm({ onSuccess }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const recaptchaRef = useRef<any>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear any previous status when user starts typing
    if (submitStatus !== "idle") {
      setSubmitStatus("idle");
      setErrorMessage("");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage("Please fill in all required fields");
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage("Please enter a valid email address");
      setIsSubmitting(false);
      return;
    }

    // reCAPTCHA validation
    if (!recaptchaToken) {
      setErrorMessage("Please complete the security verification");
      setIsSubmitting(false);
      return;
    }

    try {
      // Submit the contact form
      const result = await submitContactForm({
        ...formData,
        recaptchaToken,
      });

      if (result.success) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setRecaptchaToken(null);
        if (recaptchaRef.current?.reset) {
          recaptchaRef.current.reset();
        }
        if (onSuccess) onSuccess();
      } else {
        setSubmitStatus("error");
        setErrorMessage(
          result.message || "Failed to send message. Please try again."
        );
      }
    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-slate-900 border border-slate-700 rounded-xl p-6 md:p-8">
      <div className="text-center mb-8">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
          Get in Touch
        </h3>
        <p className="text-slate-400">
          Have questions about FitLink? We'd love to hear from you.
        </p>
      </div>

      {/* Status Messages */}
      {submitStatus === "success" && (
        <div className="mb-6 p-4 bg-green-900/30 border border-green-500 rounded-lg">
          <div className="flex items-center space-x-3">
            <CheckCircle size={20} className="text-green-400" />
            <p className="text-green-300">
              Thank you! Your message has been sent successfully. We'll get back
              to you soon.
            </p>
          </div>
        </div>
      )}

      {submitStatus === "error" && (
        <div className="mb-6 p-4 bg-red-900/30 border border-red-500 rounded-lg">
          <div className="flex items-center space-x-3">
            <AlertCircle size={20} className="text-red-400" />
            <p className="text-red-300">
              {errorMessage || "Something went wrong. Please try again."}
            </p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Field */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-slate-300 mb-2"
          >
            Full Name *
          </label>
          <div className="relative">
            <User
              size={20}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400"
            />
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              placeholder="Enter your full name"
            />
          </div>
        </div>

        {/* Email Field */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-slate-300 mb-2"
          >
            Email Address *
          </label>
          <div className="relative">
            <Mail
              size={20}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400"
            />
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              placeholder="Enter your email address"
            />
          </div>
        </div>

        {/* Subject Field */}
        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-slate-300 mb-2"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            placeholder="What's this about?"
          />
        </div>

        {/* Message Field */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-slate-300 mb-2"
          >
            Message *
          </label>
          <div className="relative">
            <MessageSquare
              size={20}
              className="absolute left-3 top-4 text-slate-400"
            />
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows={5}
              className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
              placeholder="Tell us how we can help you..."
            />
          </div>
        </div>

        {/* reCAPTCHA */}
        <div className="flex justify-center">
          <ReCaptcha
            siteKey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" // Test key - replace with your actual site key
            onVerify={(token) => setRecaptchaToken(token)}
            onExpire={() => setRecaptchaToken(null)}
            onError={() => setRecaptchaToken(null)}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2"
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>Sending...</span>
            </>
          ) : (
            <>
              <Send size={20} />
              <span>Send Message</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
}
