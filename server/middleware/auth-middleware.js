// to verfy jwt token to get get User data nad pass this data to req.user
const jwt =require("jsonwebtoken");
const User = require("../model/user-model");

const authMiddleware = async (req,res,next) =>{       //in middleware u have pass one extra parameter next to pss it to suer rout in router
        const token = req.header('Autherization');                      // get to token from FE

    if(!token){
        return res.status(401).json({message:"Unautherise HTTP , Token not prvided"});
    }
    console.log("token form auth middleware",token);

    const jwtToken = token.replace('Bearer',"").trim();
    console.log("Token from auth middleware",jwtToken);

    try {
        const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET);
        const userData = await User.findOne({email:isVerified.email});
        Selection({
            password: 0,
        });
        console.log(userData);

        req.user = userData;
        req.token = token;
        req.userID  =userData._id;
        next();
    } catch (error) {
        return res.status(401).json({message:"Unautherise HTTP , Token not prvided"});

    };

    
};