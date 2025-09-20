import React, { useState } from "react";

const INTERESTS = [
  "Software Devlopment",
  "Design & Branding",
  "Web Development",
  "App Devlopment",
  "Consulting",
  "Others",
];

const FREELANCE_TYPES = [
  "Short-term project",
  "Long-term contract",
  "Consultation",
  "Maintenance",
  "Deployment",
];

export default function ContactPage({ innerRef }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState("Contact");
  const [form, setForm] = useState({
    name: "",
    email: "",
    interest: "",
    freelanceType: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (
      !form.name.trim() ||
      !form.email.trim() ||
      !form.message.trim()
    ) {
      alert("Please fill in all the fields before submitting.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/.netlify/functions/submitContact", {
        method: "POST",
        body: JSON.stringify(form),
        headers: { "Content-Type": "application/json" }
      });

      if (!response.ok) {
        const errorText = await response.text();
        alert("Error sending message: " + errorText);
        return;
      }

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        setForm({ name: "", email: "", interest: "", freelanceType: "", message: "" });
      } else {
        alert("Please try again: " + result.error);
      }
    } catch (error) {
      alert("Network or parsing error: " + error.message);
    }

    setLoading(false);
  };


  return (
    <div id="contact" ref={innerRef} className="py-4 flex flex-col items-center justify-center px-2 font-main">
      <div className="flex gap-2">
        <button
          className={`px-6 py-2 rounded-l-full font-semibold border transition ${mode === "Contact" ? "bg-white text-[#11071F]" : "bg-[#11071F] text-white"
            }`}
          onClick={() => setMode("Contact")}
        >
          Contact
        </button>
        <button
          className={`px-6 py-2 rounded-r-full font-semibold border transition ${mode === "Freelancing"
            ? "bg-white text-[#11071F]"
            : "bg-[#11071F] text-white"
            }`}
          onClick={() => setMode("Freelancing")}
        >
          Freelancing
        </button>
      </div>

      {/* Heading */}
      <h2 className="mt-2 mb-7 text-3xl font-bold text-center text-[#a176ff] font-main">
        {mode === "Contact"
          ? <>Love to hear from you.</>
          : <>Looking For Freelancing!</>}
      </h2>

      {/* Form */}
      {!submitted ? (
        <form
          name="contact"
          method="POST"
          netlify="true"
          className="max-w-2xl w-full mt-10 flex flex-col gap-6"
          onSubmit={handleSubmit}
        >
          {/* Row 1: Name and Email */}
          <div className="flex gap-6 flex-col md:flex-row">
            <div className="flex-1">
              <label className="block mb-1 text-sm font-medium text-white">
                Your name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
                className="w-full border rounded-md px-4 py-2 bg-gray-50"
              />
            </div>
            <div className="flex-1">
              <label className="block mb-1 text-sm font-medium text-white">
                Your email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                placeholder="Your email"
                className="w-full border rounded-md px-4 py-2 bg-gray-50"
              />
            </div>
          </div>

          {/* Row 2: Selects */}
          <div className="flex gap-6 flex-col md:flex-row">
            {mode === "Contact" ? (
              <>
                <div className="flex-1">
                  <label className="block mb-1 text-sm font-medium text-white">
                    About your role
                  </label>
                  <select
                    name="interest"
                    value={form.interest}
                    onChange={e => setForm({ ...form, interest: e.target.value })}
                    className="w-full border rounded-md px-4 py-2 bg-gray-50"
                  >
                    <option value="">Select role</option>
                    {INTERESTS.map(interest => (
                      <option key={interest}>{interest}</option>
                    ))}
                  </select>
                </div>
              </>
            ) : (
              <>
                <div className="flex-1">
                  <label className="block mb-1 text-sm font-medium text-white">
                    Freelance Type
                  </label>
                  <select
                    name="freelanceType"
                    value={form.freelanceType}
                    onChange={e =>
                      setForm({ ...form, freelanceType: e.target.value })
                    }
                    className="w-full border rounded-md px-4 py-2 bg-gray-50"
                  >
                    <option value="">Select type</option>
                    {FREELANCE_TYPES.map(type => (
                      <option key={type}>{type}</option>
                    ))}
                  </select>
                </div>
              </>
            )}
          </div>

          {/* Row 3: Message */}
          <div>
            <label className="block mb-1 text-sm font-medium text-white">
              Message
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={e => setForm({ ...form, message: e.target.value })}
              className="w-full border rounded-md px-4 py-2 min-h-[90px] bg-gray-50"
              placeholder={
                mode === "Contact"
                  ? "Let tell us know your project about"
                  : "Describe your freelancing request!"
              }
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-md bg-white text-[#11071F] font-semibold text-lg flex justify-center items-center gap-2 transition ${loading ? "cursor-not-allowed opacity-70 hover:bg-white" : "hover:bg-gray-500"
              }`}
          >
            {loading ? (
              <>
                <svg className="animate-spin h-5 w-5 text-[#11071F]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z"
                  ></path>
                </svg>
                Sending...
              </>
            ) : (
              <>
                Feel Free to Send <span className="ml-2">↗</span>
              </>
            )}
          </button>
        </form>
      ) : (
        <div className="max-w-2xl w-full mt-10 text-center text-white font-main">
          <h3 className="text-2xl font-semibold mb-4">Thank you for your valuable Time!</h3>
          <p>I'll get back to you as soon as possible.</p>
        </div>
      )}
    </div>
  );
}
