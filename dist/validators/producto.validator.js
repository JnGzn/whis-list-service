"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.schemaProductoDelete = exports.schemaProductoPut = exports.schemaProductoPost = exports.schemaProductoGet = void 0;
const joi_1 = __importDefault(require("joi"));
// define esquema producto Get
exports.schemaProductoGet = joi_1.default.object().keys({
    id: joi_1.default.number().required()
});
// define esquema producto Post
exports.schemaProductoPost = joi_1.default.object().keys({
    userId: joi_1.default.number().required(),
    title: joi_1.default.string().required(),
    completed: joi_1.default.boolean().default(false)
});
// define esquema producto Put
exports.schemaProductoPut = joi_1.default.object().keys({
    id: joi_1.default.number().required(),
    userId: joi_1.default.number().required(),
    title: joi_1.default.string().required(),
    completed: joi_1.default.boolean().required()
});
// define esquema producto Delete
exports.schemaProductoDelete = joi_1.default.object().keys({
    id: joi_1.default.number().required()
});
//# sourceMappingURL=producto.validator.js.map