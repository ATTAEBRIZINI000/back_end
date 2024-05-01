const jwt = require("jwt");
require("dotenv").config();


module.exports = (req , res , next) => {
    try {
        const token = req.heasers.authorization.split(" ")[1];
        const decoded = jwt.verify(token , process.env.SECRET_TOKEN);
        req.userData = decoded ; 
        console.log(req.userData);
        next()
    }
    catch (error) {
        console.log(error);
        return res.status(401).json({
            message : "Auth failed"
        })
    }
};