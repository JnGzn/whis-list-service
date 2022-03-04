import { ServiceTodo } from '../app.service';
import { DeseoData } from '../../models/deseo.model';


export class DeseoService extends ServiceTodo{

    private deseo: DeseoData

    constructor(){
        super();
        this.deseo = new DeseoData()
    }

    /**
     * Creacion del deseo
     * @param {DeseoData} deseo:  deseo a crear
     * @returns deseo creado
     */
    async createDeseo(deseo: DeseoData) :Promise<DeseoData> {
        this.deseo.id = deseo.id
        this.deseo.idProducto = deseo.idProducto
        this.deseo.idCliente = deseo.idCliente
        this.deseo.descripcion = deseo.descripcion
        this.deseo.esActivo = deseo.esActivo
        // creacion del deseo
        try {
            const deseoCreado = await this.persistenceService.crearDeseo(this.deseo)
            this.deseo.id = deseoCreado.id
            return deseoCreado

        }catch(error){
            console.error(`ERROR ProductoService -> getProductos: ${JSON.stringify(error)}`);
            throw new Error('internal server error')
        }
    }

    /**
     * Crear el preoducto enviado
     * @param {DeseoData} producto:  producto a crear
     * @returns producto creado
     */
     async getDeseos() :Promise<DeseoData[]> {
        // some
        try {
            const deseos = await this.persistenceService.buscarDeseos()
            return deseos

        }catch(error){
            console.error(`ERROR DeseoService -> getDeseos: ${JSON.stringify(error)}`);
            throw new Error('internal server error')
        }
    }

    /**
     * Elimina el deseo enviado
     * @param {DeseoData} producto:  deseo a eliminar
     * @returns deseo eliminado
     */
     async deleteDeseos(deseo: DeseoData) :Promise<DeseoData> {
        try {
            await this.persistenceService.eliminarDeseos(deseo.id)
            deseo.esActivo = false
            return deseo

        }catch(error){
            console.error(`ERROR DeseoService -> deleteDeseos: ${JSON.stringify(error)}`);
            throw new Error('internal server error')
        }
    }

    /**
     * ajusta el deseo enviado
     * @param {DeseoData} deseo:  producto a modificar
     * @returns deseo editado
     */
     async putDeseos(deseo: DeseoData) :Promise<DeseoData> {
        try {
            await this.persistenceService.modificarDeseos(deseo)
            return deseo

        }catch(error){
            console.error(`ERROR DeseoService -> deleteDeseos: ${JSON.stringify(error)}`);
            throw new Error('internal server error')
        }
    }
}