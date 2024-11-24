const express = require('express');
const router  = express.Router();
const authControllers = require("../controller/auth-controller.JS"); //#3
const {signupSchema, loginSchema} = require("../validators/auth-validators");
const validate = require("../middleware/validate-middlewares");
const authMiddleware = require("../middleware/auth-middleware");
//const loginSchema = require('../validators/auth-validators');

// const register = require("../controller/auth-controller");
// router.get("/", (req,res) => {
//     res
//     .status(200)
//     .send("This is router..");
// });


// for home rout router

// router.route("/").get((req,res) =>{
//     res.status(200).send("This is home with router.!");
// });

// router.route("/register").get((req,res) =>{
//     res.status(200).send("This is register with router.!");
// });
// ----------------------------------------------

// for home route controller
router.route("/").get(authControllers.home);

router.route("/register").post(validate(signupSchema),authControllers.register);//validate signupschema for validation
   //to add something in db use POST
router.route("/login").post(validate(loginSchema),authControllers.login); //to add something in db use POST
// http://localhost:3000/api/auth/register

router.route("/user").get( authControllers.user);
 // to get data from user  //to get surrent login data 
                                                // to check auser has token or not
module.exports = router;
