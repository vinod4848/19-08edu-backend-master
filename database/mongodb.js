const mongoose = require("mongoose");

const connectToMongoDB = async () => {
  try {
    const MONGODB_URI =
      process.env.MONGODB_URI ||
      "mongodb+srv://ngeduwizer:CQCn1FKdSiePzBdL@eduwizer.luvcjts.mongodb.net/eduwizer";
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connection successful");
  } catch (error) {
    console.error("MongoDB Connection Error:", error);
    setTimeout(connectToMongoDB, 5000);
  }
};

connectToMongoDB();

module.exports = connectToMongoDB;

