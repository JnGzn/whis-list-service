"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Producto = void 0;
const app_service_1 = require("../app.service");
const todo_model_1 = require("../../models/todo.model");
class Producto extends app_service_1.ServiceTodo {
    constructor() {
        super();
        this.producto = new todo_model_1.ProductoData();
    }
    /**
     * Modifica el todo enviado, es importante tener el Id del todo
     * @param {todo} todo:  todo a modificar
     * @returns todo modificado
     */
    getProductos() {
        return __awaiter(this, void 0, void 0, function* () {
            // some
            return this.producto;
        });
    }
}
exports.Producto = Producto;
//# sourceMappingURL=producto.service.js.map