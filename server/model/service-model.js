const { Schema , model, Mongoose, Types, Collection } = require("mongoose");

const serviceSchema = new Schema({
    service:{ type: String, require:true },
    description:{ type: String, require:true },
    price:{ type: String, require:true },
    provider:{ type: String, require:true },
});

const Service = new model("Service",serviceSchema); // ("collection",schema)

module.exports = Service;


// to create new collection 
// 1. define Collection in db
// 2. create module with schema 
// 3. create route for /service
// 4. router.route('/service').get(Service);  // to "get" data
// 5. write function for services in controller
// 6. then define this route in server.js