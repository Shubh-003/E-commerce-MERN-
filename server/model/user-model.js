const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// definining schema for registration
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    phone:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
});

// compare password
userSchema.methods.comparePassword = async function(password) {
    return bcrypt.compare(password,this.password);
}
// secure the password using bcrypt
userSchema.pre("save", async function(next){
    // console.log("pre method",this);
    const user= this;

    if(!user.isModified("password")){
        next(); //goto store data to db
    }
    try {
        const saltRound= await bcrypt.genSalt(10);
        const hash_password = await bcrypt.hash(user.password,saltRound);
        user.password = hash_password;
    } catch (error) {
        next(error);
    }
});

// json Web Token
userSchema.methods.generateToken = async function() {
    try {
        return jwt.sign({
            uesrId: this._id.toString(),
            email:this.email,
            isAdmin:this.isAdmin,
        },
        process.env.JWT_SECRET,
        {
            expiresIn:"30d",
        }
    );
    } catch (error) {
        console.error(error);
    }
};


// define model or collection name
const User = new mongoose.model("User",userSchema);
module.exports = User; //error : model.exports

