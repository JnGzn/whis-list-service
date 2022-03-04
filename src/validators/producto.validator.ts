import joi from "joi";

// define esquema producto Get
export const schemaProductoGet = joi.object().keys({
    id: joi.number().required()
})

// define esquema producto Post
export const schemaProductoPost = joi.object().keys({
    userId: joi.number().required(),
    title: joi.string().required(),
    completed: joi.boolean().default(false)
})

// define esquema producto Put
export const schemaProductoPut = joi.object().keys({
    id: joi.number().required(),
    userId: joi.number().required(),
    title: joi.string().required(),
    completed: joi.boolean().required()
})

// define esquema producto Delete
export const schemaProductoDelete = joi.object().keys({
    id: joi.number().required()
})
