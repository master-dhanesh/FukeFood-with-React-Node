const Joi = require('joi');

exports.RecipeValidator = (body) => {

    const joiSchema = Joi.object({
        dish: Joi.string().min(4).required().messages({
            'string.base': `{#key} should be a type of 'text'`,
            'string.empty': `{#key} cannot be an empty field`,
            'string.min': `{#key} should have a minimum length of {#limit}`,
            'any.required': `{#key} is a required field`
          }),
        chef: Joi.string().min(4).required(),
        image: Joi.string().required(),
        description: Joi.string().min(8).required(),
        ingredientsArray: Joi.required(),
      })
    //   .unknown();
      return joiSchema.validate(body, { abortEarly: false });
}


/**
 * .messages({
            'string.base': `[#key] should be a type of 'text'`,
            'string.empty': `[#key] cannot be an empty field`,
            'string.min': `[#key] should have a minimum length of {#limit}`,
            'any.required': `[#key] is a required field`
          })
 */
