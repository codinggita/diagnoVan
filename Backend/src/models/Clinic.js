const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const clinicSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    roleTitle: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    clinicName: {
      type: String,
      required: true,
      trim: true,
    },
    region: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "clinic_owner",
    },
  },
  {
    timestamps: true,
  }
);

// Hash password before saving
clinicSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Match password method
clinicSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const Clinic = mongoose.model("Clinic", clinicSchema);

module.exports = Clinic;
