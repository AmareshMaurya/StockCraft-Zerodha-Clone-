// const mongoose = require("mongoose");
// const bcrypt = require("bcryptjs");

// const userSchema = new mongoose.Schema({
//   email: {
//     type: String,
//     required: [true, "Your email address is required"],
//     unique: true,
//   },
//   username: {
//     type: String,
//     required: [true, "Your username is required"],
//   },
//   password: {
//     type: String,
//     required: [true, "Your password is required"],
//   },
//   createdAt: {
//     type: Date,
//     default: new Date(),
//   },
// });

// userSchema.pre("save", async function () {
//   this.password = await bcrypt.hash(this.password, 12);
// });

// module.exports = mongoose.model("User", userSchema);


// const mongoose = require("mongoose");
// const bcrypt = require("bcryptjs");

// const userSchema = new mongoose.Schema({
//   email: {
//     type: String,
//     required: [true, "Your email address is required"],
//     unique: true,
//     lowercase: true,
//     trim: true,
//   },
//   username: {
//     type: String,
//     required: [true, "Your username is required"],
//     trim: true,
//   },
//   password: {
//     type: String,
//     required: [true, "Your password is required"],
//     minlength: 6,
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
// });

// /* -------- HASH PASSWORD -------- */
// userSchema.pre("save", async function (next) {
//   if (!this.isModified("password")) return next();
//   this.password = await bcrypt.hash(this.password, 12);
//   next();
// });

// /* -------- COMPARE PASSWORD -------- */
// userSchema.methods.comparePassword = async function (enteredPassword) {
//   return await bcrypt.compare(enteredPassword, this.password);
// };

// module.exports = mongoose.model("User", userSchema);


const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Your email address is required"],
    unique: true,
    lowercase: true,
    trim: true,
  },
  username: {
    type: String,
    required: [true, "Your username is required"],
    trim: true,
  },
  password: {
    type: String,
    required: [true, "Your password is required"],
    minlength: 6,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

/* ✅ CORRECT PRE-SAVE HOOK (NO next()) */
userSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  this.password = await bcrypt.hash(this.password, 12);
});

module.exports = mongoose.model("User", userSchema);
