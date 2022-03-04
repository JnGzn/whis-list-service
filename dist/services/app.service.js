"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceTodo = void 0;
const persistence_service_1 = require("./persistence/persistence.service");
class ServiceTodo {
    // Constructor Clase ServiceTodo
    constructor() {
        this.persistenceService = new persistence_service_1.PersistenceService();
    }
}
exports.ServiceTodo = ServiceTodo;
//# sourceMappingURL=app.service.js.map