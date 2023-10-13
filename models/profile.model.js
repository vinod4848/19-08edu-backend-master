const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema(
  {
    availableForHire: {
      type: Boolean,
      default: false,
    },
    firstName: {
      type: String,
      maxlength: 25,
    },
    firstNameShowOnProfile: {
      type: Boolean,
      default: false,
    },
    lastName: {
      type: String,
      maxlength: 25,
    },
    lastNameShowOnProfile: {
      type: Boolean,
      default: false,
    },
    userName: {
      type: String,
      maxlength: 25,
    },
    userNameShowOnProfile: {
      type: Boolean,
      default: false,
    },
    password: {
      type: String,
    },
    url: {
      type: String,
    },
    type: {
      type: String,
    },
    phone: {
      type: Number,
    },
    contactShowOnProfile: {
      type: Boolean,
      default: false,
    },
    whatsapp: {
      type: Number,
    },
    whatsappShowOnProfile: {
      type: Boolean,
      default: false,
    },
    emailShowOnProfile: {
      type: Boolean,
      default: false,
    },
    address: {
      type: String,
      maxlength: 100,
    },
    addressShowOnProfile: {
      type: Boolean,
      default: false,
    },
    experience: {
      type: Number,
    },
    experienceCondition: {
      type: Boolean,
      default: false,
    },
    city: {
      type: String,
    },
    aboutMe: {
      type: String,
      maxlength: 1000,
    },
    aboutMeShowOnProfile: {
      type: Boolean,
      default: false,
    },
    cityShowOnProfile: {
      type: String,
    },
    education: {
      type: String,
    },
    educationShowOnProfile: {
      type: Boolean,
      default: false,
    },
    educationBoard: {
      type: String,
      enum: ["icse", "cbse", "igse", "state board", "ib"],
      default: "state board",
    },
    educationBoardShowOnProfile: {
      type: Boolean,
      default: false,
    },
    ctc: {
      type: String,
      enum: [
        "1to3lpa",
        "3to5lpa",
        "5to10lpa",
        "10to15pa",
        "15to25lpa",
        "25+lpa",
      ],
      default: "state board",
    },
    ctcShowOnProfile: {
      type: Boolean,
      default: false,
    },
    expectedCtc: {
      type: String,
      enum: [
        "1to3lpa",
        "3to5lpa",
        "5to10lpa",
        "10to15pa",
        "15to25lpa",
        "25+lpa",
      ],
      default: "state board",
    },
    expectedCtcShowOnProfile: {
      type: Boolean,
      default: false,
    },
    boardCondition: {
      type: Boolean,
      default: false,
    },
    preference: {
      type: String,
      enum: ["school", "college", "private institutions"],
      default: "school",
    },
    skills: {
      type: String,
    },
    skillsShowOnProfile: {
      type: Boolean,
      default: false,
    },
    languages: {
      type: String,
    },
    languagesShowOnProfile: {
      type: Boolean,
      default: false,
    },
    awardsAndRecognition: {
      type: String,
    },
    awardsAndRecognitionShowOnProfile: {
      type: Boolean,
      default: false,
    },
    country: {
      type: String,
    },
    countryShowOnProfile: {
      type: Boolean,
      default: false,
    },
    experienceShowOnProfile: {
      type: Boolean,
      default: false,
    },
    resumeURL: {
      type: String,
    },
  },
  { strict: false }
);
let User;
try {
  User = mongoose.model("User");
} catch (e) {
  User = mongoose.model("User", usersSchema);
}

const models = {
  dbUpdateUser: async (userId, updatedFields) => {
    try {
      return await User.findByIdAndUpdate(userId, updatedFields, {
        new: true,
        upsert: true,
      });
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
  dbGetUsersData: async (find, select, sort, skip, limit) => {
    try {
      return await User.find(find)
        .select(select)
        .sort(sort)
        .skip(skip)
        .limit(limit);
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  },
  dbDeleteUserData: async (find) => {
    try {
      return await User.deleteOne(find);
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  },
};

module.exports = models;

