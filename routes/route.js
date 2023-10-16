const authentication = require("../controller/authentication");
const profileController = require("../controller/profile");
const dashBoardCollectionController = require("../controller/dashboard");

// ===================================validator========================
const authenticationValidator = require("../validator/authentication.validator");
const dashboardValidator = require("../validator/dashboard.validation");
const profileValidator = require("../validator/profile.validator");

//===================================Authentication========================
const checkAuthorizationKey = require("../config/jwt.config");

// ================================upload========================
// const  { upload  }= require("../helper/upload")
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
// const { upload } = require("../helper/upload")

module.exports = function (app) {
  //  ========================Authentication======================
  app.get(
    "/eduwizer/contact-messages",
    dashBoardCollectionController.getContactMessages
  );
  app
    .route("/eduwizer/login")
    .post(authenticationValidator.loginValidator, authentication.login);
  app
    .route("/eduwizer/signup")
    .post(authenticationValidator.signUpValidator, authentication.signUp);
  app.route("/eduwizer/loginGoogle").post(authentication.loginFromGoogle);
  app.route("/eduwizer/loginFacebook").post(authentication.loginFromLinkedin);

  // ============================profile ===========================

  app.route("/eduwizer/updateProfile").post(
    checkAuthorizationKey.checkToken,
    // profileValidator.updateProfile,
    profileController.updateProfile
  );

  app
    .route("/eduwizer/getProfile")
    .get(checkAuthorizationKey.checkToken, profileController.getProfile);
  app.route("/eduwizer/searchProfile").post(
    checkAuthorizationKey.checkToken,
    // profileValidator.searchProfile,
    profileController.serachProfile
  );
  app.route("/eduwizer/searchProfile").post(
    checkAuthorizationKey.checkToken,
    // profileValidator.searchProfile,
    profileController.serachProfile
  );

  //callbackurl
  app.route("/auth/google/callback").post(authentication.googleCallBack);
  app.route("/auth/linkedin/callback").post(authentication.linkedinCallBack);

  // otp verfification
  app
    .route("/eduwizer/signup")
    .post(authenticationValidator.signUpValidator, authentication.signUp);
  app
    .route("/eduwizer/send/otp")
    .post(authenticationValidator.sendOtp, authentication.sendOtp);
  app
    .route("/eduwizer/verify/otp")
    .post(authenticationValidator.verifyOtp, authentication.verifyOtp);

  // susbcriber chanel
  app
    .route("/eduwizer/susbcribe")
    .post(
      dashboardValidator.susbcribe,
      dashBoardCollectionController.susbcribe
    );

  app
    .route("/uploadResume")
    .post(upload.single("file"), profileController.uploadResume);

  app
    .route("/eduwizer/getUsers/_Id")
    .get(checkAuthorizationKey.checkToken, profileController.getUsers);
  app
    .route("/eduwizer/getUsers")
    .get(checkAuthorizationKey.checkToken, profileController.getUsers);
  app
    .route("/eduwizer/:userType")
    .get(checkAuthorizationKey.checkToken, profileController.serachProfile);
  app
    .route("/eduwizer/deleteUsers/:emailId")
    .delete(checkAuthorizationKey.checkToken, profileController.deleteUser);
  app
    .route("/eduwizer/uploadResume")
    .post(upload.single("resume"), profileController.uploadResume);

  app.route("/eduwizer/contact-us").post(
    // checkAuthorizationKey.checkToken,
    dashboardValidator.contactUs,
    dashBoardCollectionController.contactUs
  );
};

