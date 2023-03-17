const cloudinary = require('cloudinary').v2;


// Configuration 
cloudinary.config({
  cloud_name: "dprxebwil",
  api_key: "145417815256521",
  api_secret: "PckML-KZ-JVs3gIM_cW64L5FGew"
});


module.exports = { cloudinary };