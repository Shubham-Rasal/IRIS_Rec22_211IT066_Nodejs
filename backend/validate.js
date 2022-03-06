
const Joi=require("@hapi/joi");

const validateSchema=Joi.object({
    username:Joi.string().min(6),
    email:Joi.string().min(6).email(),
    password:Joi.string().min(6),
    date:Joi.date(),
});


module.exports = validateSchema;