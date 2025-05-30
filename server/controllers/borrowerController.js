const Borrower = require("../models/borrower");

exports.signup = async (req, res) => {
  try {
    const borrower = new Borrower(req.body);
    await borrower.save();
    res
      .status(201)
      .json({ message: "Borrower registered successfully", borrower });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
