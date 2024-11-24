const mongoose =require("mongoose");
const uri =  "mongodb://127.0.0.1:27017/mern_admin";
// const uri =  "mongodb+srv://admin:pass123@cluster0.szkma73.mongodb.net/admin?retryWrites=true&w=majority&appName=Cluster0";
// const uri =  "mongodb+srv://admin:pass123@cluster0.szkma73.mongodb.net/admin1?retryWrites=true&w=majority&appName=Cluster0";
// mongoose.connect(uri);

const connectDb = async() =>{
    try {
        await mongoose.connect(uri);
        console.log("db connected sucessfully..");
    } catch (error) {
        console.log("Database connection fail..");
        process.exit(0);
    }
};

module.exports = connectDb;