const { schema, model } = require("mongoose");
const mongoose = require("mongoose");
// const { required } = require("../validators/auth-validators");

const contactSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
});

// create collection for contact
// const Contact = new model("Contact",contactSchema);
const Contact = new mongoose.model("Contact",contactSchema);
module.exports = Contact;  