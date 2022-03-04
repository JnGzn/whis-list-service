import joi from "joi";


// define esquema deseo Post
export const schemaDeseoPost = joi.object().keys({
    idProducto: joi.number().required(),
    idCliente: joi.number().default(1),
    descripcion: joi.string().required(),
    esActivo: joi.boolean().default(true),
})

// define esquema deseo Put
export const schemaDeseoPut = joi.object().keys({
    id: joi.number().required(),
    userId: joi.number().required(),
    title: joi.string().required(),
    completed: joi.boolean().required()
})

// define esquema deseo Delete
export const schemaDeseoDelete = joi.object().keys({
    id: joi.number().required()
})
