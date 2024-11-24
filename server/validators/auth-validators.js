const {z} = require("zod");


const loginSchema = z.object({
    email: z.string({required_error:"Email is required"})
    .trim()
    .min(3, {message:"Email must be atleast 3 character"})
    .max(255,{message:"Email should not be more than 255 charester"}),
    
    password: z.string({required_error:"password is required"})
    .trim()
    .min(3, {message:"password must be atleast 3 character"})
    .max(255,{message:"password should not be more than 255 charester"}),

});


//creating an obj schema
const signupSchema = loginSchema.extend({
    username: z.string({required_error:"Name is required"})
    .trim()
    .min(3, {message:"Name must be atleast 3 character"})
    .max(255,{message:"Name should not be more than 255 charester"}),
    
    email: z.string({required_error:"Email is required"})
    .trim()
    .min(3, {message:"Emmail must be atleast 3 character"})
    .max(255,{message:"Email should not be more than 255 charester"}),
    
    phone: z.string({required_error:"Phone no. is required"})
    .trim()
    .min(10, {message:"phone no. must be atleast 10 digits"})
    .max(10,{message:"phone should not be more than 10 charester"}),
    
    password: z.string({required_error:"password is required"})
    .trim()
    .min(3, {message:"password must be atleast 3 character"})
    .max(255,{message:"password should not be more than 255 charester"}),

});

// const loginSchema = z.object({
//     email: z.string({required_error:"Email is required"})
//     .trim()
//     .min(3, {message:"Emmail must be atleast 3 character"})
//     .max(255,{message:"Email should not be more than 255 charester"}),

//     password: z.string({required_error:"password is required"})
//     .trim()
//     .min(3, {message:"password must be atleast 3 character"})
//     .max(255,{message:"password should not be more than 255 charester"}),
// });


module.exports = {signupSchema, loginSchema};
// module.exports = loginSchema;


//Zod for schema field validation  note