import React, { useState } from "react";

const INTERESTS = ["Design & Branding", "Web Development", "Consulting"];
const BUDGETS = [
  "Select your budget",
  "< ₹5000",
  "₹5000 - ₹10,000",
  "₹10,000 - ₹20,000",
  "> ₹20,000",
];
const FREELANCE_TYPES = [
  "Short-term project",
  "Long-term contract",
  "Consultation",
  "Maintenance",
];

export default function ContactPage() {
  const [mode, setMode] = useState("Contact");
  const [form, setForm] = useState({
    name: "",
    email: "",
    interest: "",
    budget: "",
    freelanceType: "",
    message: "",
  });

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-2 font-main">
      <div className="flex gap-2">
        <button
          className={`px-6 py-2 rounded-l-full font-semibold border transition ${
            mode === "Contact" ? "bg-white text-[#11071F]" : "bg-[#11071F] text-white"
          }`}
          onClick={() => setMode("Contact")}
        >
          Contact
        </button>
        <button
          className={`px-6 py-2 rounded-r-full font-semibold border transition ${
            mode === "Freelancing"
              ? "bg-white text-[#11071F]"
              : "bg-[#11071F] text-white"
          }`}
          onClick={() => setMode("Freelancing")}
        >
          Freelancing
        </button>
      </div>

      {/* Heading */}
      <h2 className="mt-10 mb-2 text-3xl font-bold text-center text-white font-main">
        {mode === "Contact"
          ? <>Love to hear from you,<br />Get in touch</>
          : <>Hire Me For Freelancing!<br />Get started</>}
      </h2>

      {/* Form */}
      <form className="max-w-2xl w-full mt-10 flex flex-col gap-6">
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
                  What you are interested
                </label>
                <select
                  name="interest"
                  value={form.interest}
                  onChange={e => setForm({ ...form, interest: e.target.value })}
                  className="w-full border rounded-md px-4 py-2 bg-gray-50"
                >
                  <option value="">Select interest</option>
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

        {/* Button */}
        <button
          type="submit"
          className="w-full py-3 rounded-md bg-white text-[#11071F] font-semibold text-lg flex justify-center items-center gap-2 hover:bg-gray-500 transition"
        >
          Fell Free to Send <span className="ml-2">↗</span>
        </button>
      </form>
    </div>
  );
}
