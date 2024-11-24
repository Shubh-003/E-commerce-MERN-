const Service = require("../model/service-model");
const services = async(req,res) =>{
    try {
        const responce = await Service.find();

        if(!responce){
            res.status(200).json({ msg: "No service found"});
            return;
        }
        res.status(200).json({ msg: responce});
    } catch (error) {
        console.log('error from service : ${error}');
    }
};

module.exports = services;


// to create new collection 
// 1. define Collection in db
// 2. create module with schema 
// 3. create route for /service
// 4. router.route('/service').get(Service);  // to "get" data
// 5. write function for services in controller
// 6. then define this route in server.js