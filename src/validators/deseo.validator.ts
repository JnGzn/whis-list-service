import joi from "joi";


// define esquema deseo Post
export const schemaDeseoPost = joi.object().keys({
    idProducto: joi.number().required(),
    idCliente: joi.number().default(1),
    descripcion: joi.string().required().allow(''),
    esActivo: joi.boolean().default(true)
})

// define esquema deseo
export const schemaDeseo = joi.object().keys({
    idProducto: joi.number().required(),
    idCliente: joi.number().default(1),
    descripcion: joi.string().required().allow(''),
    esActivo: joi.boolean().default(true),
    id: joi.number().required()
})