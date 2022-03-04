import axios, { AxiosResponse } from "axios";
import { ServiceTodo } from '../app.service';
import { ProductoData } from '../../models/producto.model';


export class ProductoService extends ServiceTodo{

    private producto: ProductoData

    constructor(){
        super();
        this.producto = new ProductoData()
    }

    /**
     * Crear el preoducto enviado
     * @param {ProductoData} producto:  producto a crear
     * @returns producto creado
     */
    async getProductos() :Promise<ProductoData[]> {
        // some
        try {
            const productos = await this.persistenceService.buscarProductos()
            return productos

        }catch(error){
            console.error(`ERROR ProductoService -> getProductos: ${JSON.stringify(error)}`);
            throw new Error('internal server error')
        }
    }
}