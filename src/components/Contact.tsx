"use client";

import { useLangStore } from "@/store/useLangStore";
import { useState, ChangeEvent, FormEvent } from "react";

type FormData = {
  name: string;
  email: string;
  message: string;
};



export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "YOUR_ACCESS_KEY_HERE", // ← حط هنا الـ access key بتاعك من Web3Forms
          ...formData,
        }),
      });

      const result = await response.json();

      if (result.success) {
        alert("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("❌ Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("⚠️ An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };
   const { lang } = useLangStore();

  return (
    <div id="contact" className="max-w-2xl mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-indigo-600 text-center flex items-center justify-center gap-3">
       {lang === "arabic" ?  <span> 📩تواصل معى </span>  :   <span>     📩 Contact Me  </span>}
      </h2>
      
      <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-indigo-100 p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-lg font-semibold mb-3 text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-6 py-4 border-2 border-indigo-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500 transition-all duration-300 text-lg"
              placeholder="Enter your name"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-lg font-semibold mb-3 text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-6 py-4 border-2 border-indigo-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500 transition-all duration-300 text-lg"
              placeholder="Enter your email"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-lg font-semibold mb-3 text-gray-700">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="resize-none w-full px-6 py-4 border-2 border-indigo-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-indigo-100 focus:border-indigo-500 transition-all duration-300 text-lg"
              placeholder="Write your message..."
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-4 rounded-2xl text-white font-bold text-lg transition-all duration-300 transform ${
              isSubmitting
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 hover:scale-105 shadow-lg hover:shadow-xl"
            }`}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
}
