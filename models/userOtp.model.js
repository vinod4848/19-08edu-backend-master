const mongoose = require("mongoose");

const usersVerificationCodeSchema = new mongoose.Schema(
  {
    userId: { type: String, required: false },
    verificationCode: { type: Number, required: true, default: 0 },
    emailId: { type: String, required: true, default: "NA" },
  },
  {
    timestamps: {
      createdAt: "createdTimestamp",
      updatedAt: false,
    },
  }
);

const UserVerificationCode = mongoose.model("UserVerificationCode", usersVerificationCodeSchema);

const models = {
  dbAddUserOtp: async function (userData) {
    try {
      const userOtpObj = new UserVerificationCode(userData);
      const data = await userOtpObj.save();
      return data;
    } catch (error) {
      throw error;
    }
  },
  getUserData: async function (find, select, sort) {
    try {
      const data = await UserVerificationCode.findOne(find).select(select).sort(sort);
      return data;
    } catch (error) {
      throw error;
    }
  },
};

module.exports = models;
