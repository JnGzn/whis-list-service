"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// importacion de librerias
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const producto_controller_1 = require("./routes/producto.controller");
class App {
    // constructor de la clase App
    constructor() {
        // incializacion
        this.rutasTodo = new producto_controller_1.ProductoController();
        this.app = (0, express_1.default)();
        this.app.use(express_1.default.json());
        this.app.use((0, morgan_1.default)('dev'));
        // inicio routes
        this.rutasTodo.routes(this.app);
    }
}
exports.default = App;
//# sourceMappingURL=app.js.map