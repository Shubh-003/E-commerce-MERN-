const User = require("../model/user-model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// home page
const home = async (req,res) => {
    try {
        res.status(200).send("Welcome to hme page of controller");
    } catch (error) {
        console.log(err);
    }
};

// register controller   #1 use to save data in db
const register = async(req,res) => {
    try {
        console.log(req.body);

        const {username,email,phone,password} = req.body;//get data form registraion page
        
        const userExist = await User.findOne({email}); // user already exits or not
        
        if(userExist){
            return res.status(400).json({message:"User already exists"});
        }

        // hash password
        // const saltRound= 10;
        // const hash_password = await bcrypt.hash(password,saltRound);

        const userCreated = await User.create(
            {
                username,
                email,
                phone,
                password,
            }); // new user in created db   password:hash_password

        res.status(201).json({
            msg:"REGISTRATION SUCCESSFULL..." ,   // :userCreated
            token: await userCreated.generateToken(),
            userId:userCreated._id.toString() ,
        }); //display new user
    } catch (error) {
        console.log(req.body); 
       // res.status(400).json({msg:"Internal server Error"});
       next(error); //error middleware
    }
}



// User Login 
const login = async (req,res) => {
    try {
        const {email , password } = req.body;
        const userExist = await User.findOne({email});
        console.log(userExist);
        if (!userExist){
            return res.status(400).json({message:"Invalid credintial..."});
        }

        // const user = await bcrypt.compare(password,userExist.password);
        const user = await userExist.comparePassword(password);
        

        if(user){
            res.status(200).json(
                {   msg:"login successful" , 
                    token:await userExist.generateToken(),
                    userId:userExist._id.toString() ,
                }); //display new user
        }else{
           res.status(401).json({message:"Invalid password"});
          // next(error);
        }

    } catch (error) {
       res.status(500).json("Internaal server error login");
       //next(error);
    }
}

// user Logic - to send user data
const user = async(req,res)=>{
    try {
        const userData = req.user;
        console.log(userData);
        return res.status(200).json({userData});
    } catch (error) {
        console.log("Error from user rout ${error} ");
    }
};

module.exports = { home ,register ,login ,user };  // #2 add all rout  here
// module.exports = { register };
// to pass home page to server
