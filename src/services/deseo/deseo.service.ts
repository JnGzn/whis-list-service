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
        // creacion del deseo
        try {
            const deseoCreado = await this.persistenceService.crearDeseo(deseo)
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
}