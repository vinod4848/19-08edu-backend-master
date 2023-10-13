const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: false },
    lastName: { type: String, required: false },
    userName: { type: String, required: false },
    url: { type: String, required: false },
    fileType: { type: String, required: false },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    age: { type: Number, required: true },
    experience: { type: Number, required: true },
    pincode: { type: Number, required: true },
    city: { type: String, required: true },
    board: { type: String, required: true },
    preference: { type: String, required: true },
    userType: { type: String, required: true },
    phone: { type: Number, required: true },
    phoneVerified: { type: Number, required: false, default: 0 },
    emailVerified: { type: Number, required: false, default: 0 },
  },
  {
    timestamps: { createdAt: "createdTimestamp", updatedAt: false },
  }
);

const User = mongoose.model("User", usersSchema);

const models = {
  dbAddUser: async function (userData) {
    try {
      const user = new User(userData);
      const data = await user.save();
      return data;
    } catch (error) {
      throw error;
    }
  },
  getuserData: async function (find, select) {
    try {
      const data = await User.findOne(find, select);
      return data;
    } catch (error) {
      throw error;
    }
  },
  updateUserData: async function (filter, update, options) {
    try {
      const data = await User.findOneAndUpdate(filter, update, options);
      return data;
    } catch (error) {
      throw error;
    }
  },
};

module.exports = models;
