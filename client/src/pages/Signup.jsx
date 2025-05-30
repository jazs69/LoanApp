import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    residenceType: "",
    monthlyIncome: "",
    previousLoan: false,
    maritalStatus: "",
    numberOfDependency: "",
    city: "",
    state: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/api/borrowers/signup", formData);
      alert("Signup successful");
    } catch (err) {
      alert(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 mx-auto">
      {Object.entries({
        name: "Name",
        email: "Email",
        phone: "Phone",
        residenceType: "Residence Type",
        monthlyIncome: "Monthly Income",
        maritalStatus: "Marital Status",
        numberOfDependency: "Number of Dependency",
        city: "City",
        state: "State",
      }).map(([key, label]) => (
        <div key={key} className="mb-4">
          <label className="block mb-1">{label}</label>
          <input
            type="text"
            name={key}
            value={formData[key]}
            onChange={handleChange}
            className="w-full border px-3 py-2"
            required
          />
        </div>
      ))}
      <div className="mb-4">
        <label className="block mb-1">Previous Loan</label>
        <input
          type="checkbox"
          name="previousLoan"
          checked={formData.previousLoan}
          onChange={handleChange}
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Sign Up
      </button>
    </form>
  );
};

export default Signup;
