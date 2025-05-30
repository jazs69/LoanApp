const mongoose = require("mongoose");

const borrowerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Please use a valid email address."],
    },
    phone: {
      type: String,
      required: true,
      trim: true,
      match: [/^\d{10,15}$/, "Please use a valid phone number."],
    },
    residenceType: {
      type: String,
      enum: ["Owned", "Rented", "Company Provided", "Other"],
      required: true,
    },
    monthlyIncome: {
      type: Number,
      required: true,
      min: 0,
    },
    previousLoan: {
      type: Boolean,
      required: true,
    },
    maritalStatus: {
      type: String,
      enum: ["Single", "Married", "Divorced", "Widowed"],
      required: true,
    },
    numberOfDependency: {
      type: Number,
      required: true,
      min: 0,
      max: 20,
    },
    city: {
      type: String,
      required: true,
      trim: true,
      maxlength: 50,
    },
    state: {
      type: String,
      required: true,
      trim: true,
      maxlength: 50,
    },
  },
  {
    timestamps: true,
  }
);

borrowerSchema.set("strict", true);

const Borrower = mongoose.model("Borrower", borrowerSchema);

module.exports = Borrower;
