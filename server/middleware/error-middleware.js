// to handle all errors at one place 
// any error passes to client from here only

const errorMiddleware = (err,req,res,next)=>{
    const status = err.status || 500;   //by dfault 500 else status
    const message = err.message || "Backend error";
    const extraDetails = err.extraDetails || "Error from backend";

    return res.status(status).json({ message, extraDetails });


};
module.exports = errorMiddleware;