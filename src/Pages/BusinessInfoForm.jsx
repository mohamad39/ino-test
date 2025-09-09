import { useState } from "react";

export default function LeadForm() {
  const [formData, setFormData] = useState({
    // Section A
    company: "",
    website: "",
    email: "",
    phone: "",
    objective: "",
    budget: "",
    // Section B
    industry: "",
    companySize: "",
    roles: "",
    geography: "",
    ageRange: "",
    gender: "",
    languages: "",
    // Section C
    channels: "",
    activityLevel: "",
    interests: "",
    exclusions: "",
    // Section D
    minBudget: "",
    qualificationQuestions: "",
    followUpTimeline: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agree) {
      alert("You must agree to the Terms and Privacy Policy.");
      return;
    }
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="h-screen w-screen grid md:grid-cols-2">
      {/* Left Side - Form */}
      <div className="flex flex-col justify-start px-10 lg:px-20 py-12 overflow-y-auto">
        <h1 className="text-3xl font-bold mb-4">
          Tell Us About Your Ideal Leads
        </h1>
        <p className="text-gray-600 mb-10">
          Please complete the form below so our AI can find and qualify the
          exact prospects you need. Fields marked with * are required.
        </p>

        <form onSubmit={handleSubmit} className="space-y-8 max-w-lg">
          {/* SECTION A */}
          <div>
            <h2 className="text-xl font-semibold mb-4">
              A. Company & Campaign Details
            </h2>
            {/* Company Name */}
            <div className="mb-4">
              <label className="block font-medium mb-1">
                1. Company Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="company"
                placeholder="Placeholder"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
            </div>
            {/* Website */}
            <div className="mb-4">
              <label className="block font-medium mb-1">
                2. Website / LinkedIn URL<span className="text-red-500">*</span>
              </label>
              <input
                type="url"
                name="website"
                placeholder="Placeholder"
                value={formData.website}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
            </div>
            {/* Email */}
            <div className="mb-4">
              <label className="block font-medium mb-1">
                3. Primary Contact Email<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Placeholder"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
            </div>
            {/* Phone */}
            <div className="mb-4">
              <label className="block font-medium mb-1">
                4. Primary Contact Phone<span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="Placeholder"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
            </div>
            {/* Campaign Objective */}
            <div className="mb-4">
              <label className="block font-medium mb-1">
                5. Campaign Objective<span className="text-red-500">*</span>
              </label>
              <select
                name="objective"
                value={formData.objective}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                required
              >
                <option value="">Placeholder</option>
                <option value="brand">Brand Awareness</option>
                <option value="leads">Lead Generation</option>
                <option value="sales">Sales Conversion</option>
              </select>
            </div>
            {/* Budget */}
            <div>
              <label className="block font-medium mb-1">
                6. Monthly Lead Budget<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="budget"
                placeholder="Placeholder"
                value={formData.budget}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
            </div>
          </div>

          <hr className="my-6" />

          {/* SECTION B */}
          <div>
            <h2 className="text-xl font-semibold mb-4">
              B. Target Audience Profile
            </h2>
            {/* Industry */}
            <div className="mb-4">
              <label className="block font-medium mb-1">
                1. Industry / Vertical<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="industry"
                placeholder="Placeholder"
                value={formData.industry}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
            </div>
            {/* Company Size */}
            <div className="mb-4">
              <label className="block font-medium mb-1">
                2. Company Size<span className="text-red-500">*</span>
              </label>
              <select
                name="companySize"
                value={formData.companySize}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                required
              >
                <option value="">Placeholder</option>
                <option value="small">1-50 employees</option>
                <option value="medium">51-500 employees</option>
                <option value="large">500+ employees</option>
              </select>
            </div>
            {/* Roles */}
            <div className="mb-4">
              <label className="block font-medium mb-1">
                3. Job Titles / Roles<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="roles"
                placeholder="Placeholder"
                value={formData.roles}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
            </div>
            {/* Geography */}
            <div className="mb-4">
              <label className="block font-medium mb-1">
                4. Geography<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="geography"
                placeholder="Placeholder"
                value={formData.geography}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
            </div>
            {/* Age Range */}
            <div className="mb-4">
              <label className="block font-medium mb-1">5. Age Range</label>
              <select
                name="ageRange"
                value={formData.ageRange}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              >
                <option value="">Placeholder</option>
                <option value="18-25">18-25</option>
                <option value="26-35">26-35</option>
                <option value="36-50">36-50</option>
                <option value="50+">50+</option>
              </select>
            </div>
            {/* Gender */}
            <div className="mb-4">
              <label className="block font-medium mb-1">6. Gender</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              >
                <option value="">Placeholder</option>
                <option value="any">Any</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            {/* Languages */}
            <div>
              <label className="block font-medium mb-1">
                7. Languages Spoken
              </label>
              <input
                type="text"
                name="languages"
                placeholder="Placeholder"
                value={formData.languages}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
          </div>

          <hr className="my-6" />

          {/* SECTION C */}
          <div>
            <h2 className="text-xl font-semibold mb-4">
              C. Engagement & Channels
            </h2>
            {/* Channels */}
            <div className="mb-4">
              <label className="block font-medium mb-1">
                1. Preferred Outreach Channels
                <span className="text-red-500">*</span>
              </label>
              <select
                name="channels"
                value={formData.channels}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                required
              >
                <option value="">Placeholder</option>
                <option value="email">Email</option>
                <option value="phone">Phone</option>
                <option value="linkedin">LinkedIn</option>
                <option value="social">Social Media</option>
              </select>
            </div>
            {/* Activity Level */}
            <div className="mb-4">
              <label className="block font-medium mb-1">
                2. Activity Level<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="activityLevel"
                placeholder="Placeholder"
                value={formData.activityLevel}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
            </div>
            {/* Interests */}
            <div className="mb-4">
              <label className="block font-medium mb-1">
                3. Interests / Keywords
              </label>
              <input
                type="text"
                name="interests"
                placeholder="Placeholder"
                value={formData.interests}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            {/* Exclusions */}
            <div>
              <label className="block font-medium mb-1">
                4. Exclusion Criteria
              </label>
              <select
                name="exclusions"
                value={formData.exclusions}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              >
                <option value="">Placeholder</option>
                <option value="competitors">Exclude Competitors</option>
                <option value="current">Exclude Current Customers</option>
              </select>
            </div>
          </div>

          <hr className="my-6" />

          {/* SECTION D */}
          <div>
            <h2 className="text-xl font-semibold mb-4">
              D. Lead Qualification & Follow-Up
            </h2>
            {/* Min Budget */}
            <div className="mb-4">
              <label className="block font-medium mb-1">
                1. Minimum Budget per Lead (if any)
              </label>
              <input
                type="text"
                name="minBudget"
                placeholder="Placeholder"
                value={formData.minBudget}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            {/* Qualification Questions */}
            <div className="mb-4">
              <label className="block font-medium mb-1">
                2. Required Qualification Questions
              </label>
              <input
                type="text"
                name="qualificationQuestions"
                placeholder="Placeholder"
                value={formData.qualificationQuestions}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            {/* Follow-Up Timeline */}
            <div>
              <label className="block font-medium mb-1">
                3. Preferred Follow-Up Timeline
              </label>
              <select
                name="followUpTimeline"
                value={formData.followUpTimeline}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              >
                <option value="">Placeholder</option>
                <option value="immediate">Immediate</option>
                <option value="1week">Within 1 week</option>
                <option value="1month">Within 1 month</option>
              </select>
            </div>
          </div>

          {/* Terms & Conditions */}
          <div className="flex items-start mt-6">
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
              className="mt-1 mr-2"
            />
            <label className="text-sm text-gray-600">
              I agree to InoLeads’{" "}
              <a href="#" className="text-blue-600 underline">
                Terms and Privacy Policy
              </a>
              .
            </label>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition"
          >
            Submit Form
          </button>
        </form>
      </div>

      {/* Right Side - Image */}
      <div className="hidden md:block p-4">
        <img
          src="/FormIllu.webp"
          alt="Technology background"
          className="h-full w-full rounded-3xl object-cover"
        />
      </div>
    </div>
  );
}
