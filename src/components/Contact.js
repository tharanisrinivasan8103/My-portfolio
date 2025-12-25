import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      // Using FormSubmit.co (free service, no backend needed)
      // Use the activation token instead of a naked email address.
      // Replace the token below if FormSubmit provided a different one.
      const FORM_SUBMIT_TOKEN = "6ec86e6249d4a5399b9c0d4f194c61fd";
      // Use FormData to match typical form POSTs (some endpoints expect form-encoded data)
      const body = new FormData();
      body.append("name", formData.name);
      body.append("email", formData.email);
      body.append("message", formData.message);

      const response = await fetch(`https://formsubmit.co/ajax/${FORM_SUBMIT_TOKEN}`, {
        method: "POST",
        headers: {
          // Don't set Content-Type for FormData; the browser will set the proper boundary.
          "Accept": "application/json",
        },
        body,
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setError("Failed to send message. Please try again.");
      }
    } catch (err) {
      setError("Error sending message. Please try again or contact directly via email.");
    }
  };

  return (
    <section id="contact" className="py-20 px-10 bg-[#0e0d1b] text-center">
      <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
      <div className="w-24 h-1 mx-auto bg-gradient-to-r from-blue-400 to-purple-500 mb-8"></div>

      <form
        action="https://formsubmit.co/6ec86e6249d4a5399b9c0d4f194c61fd"
        method="POST"
        className="flex flex-col gap-4 max-w-xl mx-auto"
        onSubmit={handleSubmit}
      >
        {/* Non-JS fallback and FormSubmit settings */}
        <input type="hidden" name="_subject" value="New message from portfolio" />
        <input type="hidden" name="_captcha" value="false" />
        {/* Redirect to a simple static thank-you page after non-AJAX submit */}
        <input type="hidden" name="_next" value="http://localhost:3000/thanks.html" />
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="p-3 rounded bg-white bg-opacity-10 text-white placeholder-gray-400"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="p-3 rounded bg-white bg-opacity-10 text-white placeholder-gray-400"
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="p-3 rounded bg-white bg-opacity-10 text-white placeholder-gray-400"
        ></textarea>
        <button
          type="submit"
          className="bg-gradient-to-r from-purple-500 to-indigo-500 py-3 rounded text-white font-semibold hover:opacity-90 transition"
        >
          Send Message
        </button>
      </form>

      {submitted && (
        <p className="mt-4 text-green-400 font-semibold">✓ Message sent successfully!</p>
      )}
      {error && (
        <p className="mt-4 text-red-400 font-semibold">{error}</p>
      )}

      <div className="mt-8 text-gray-400 text-sm">
        <p className="mb-2">
          <FaPhoneAlt className="inline-block mr-2" /> +91 93452 01338
        </p>
        <p>
          <FaEnvelope className="inline-block mr-2" />
          <a href="mailto:tharani.mca2024@adhiyamaan.in" className="hover:text-blue-400">
            tharani.mca2024@adhiyamaan.in
          </a>
        </p>
      </div>
    </section>
  );
}
