// importacion librerias
import { Sequelize, DataTypes } from "sequelize";
import fotenv from "dotenv";
import { DeseoData } from '../../models/deseo.model';

// lectura configuracion .env
fotenv.config()

export class PersistenceService{

    private sequelize
    private productos
    private deseos

    constructor(){
        this.sequelize = new Sequelize(process.env.NOMBRE_BD || 'postgres', process.env.BASEDATOS_USER || 'postgres', process.env.BASEDATOS_PASSW, {
            host: process.env.BASEDATOS_HOST || 'localhost',
            dialect: 'postgres',
            port: Number(process.env.BASEDATOS_PORT),
        })
        this.productos = this.sequelize.define('productos', {
            id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
            nombre: DataTypes.STRING,
            precio: DataTypes.STRING,
            cantidadStock: DataTypes.INTEGER,
            descripcion: DataTypes.STRING,
            imagen:  DataTypes.STRING
        },{timestamps: false})
        this.deseos = this.sequelize.define('deseos', {
            id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true,},
            idProducto: DataTypes.INTEGER,
            idCliente: DataTypes.STRING,
            esActivo: DataTypes.BOOLEAN,
            descripcion: DataTypes.STRING
        },{timestamps: false})

        this.productos.hasMany(this.deseos, {foreignKey: 'idProducto'})
        this.deseos.belongsTo(this.productos, {foreignKey: 'idProducto'})
    }

    /**
     * Metodo que abre la conexion de la BD
     */
    public async conectarBD(){
        try {
            await this.sequelize.authenticate();
          } catch (error) {
            console.log(error);
            console.error('ERROR PersistenceService -> conectarBD ', JSON.stringify(error));
            throw new Error('internal server error')

        }
    }

    /**
     * Metodo que cierra la conexion de la BD
     */
    public async cerrarConexion(){
        try {
            // await this.sequelize.close();
          } catch (error) {
            console.log(error);
            console.error('ERROR PersistenceService -> cerrarConexion: ', JSON.stringify(error));
            throw new Error('internal server error')
        }
    }

    /**
     * Consulta todos los productos
     * @returns Preoductos[]
     */
    public async buscarProductos(){
        try {
            // abrir conexion
            await this.conectarBD()

            // ejecucion consulta
            const resultConsulta =  await this.productos.findAll()

            // iteracion response y estructura la data
            const arrayResponse = []
            for (const iterator of resultConsulta) {
                arrayResponse.push(iterator.toJSON());
            }

            // cerrar conexion
            await this.cerrarConexion()
            return arrayResponse
        } catch (error) {
            console.error(`ERROR PersistenceService -> buscarProductos: ${JSON.stringify(error)}`);
            throw new Error('internal server error')
        }
    }

    /**
     * Recibe el deseo y lo guarda en BD
     * @param deseo deseo que se creará
     * @returns deseo objeto del deseo creado
     */
    public async crearDeseo(deseo: DeseoData){
        try {
            // abrir conexion
            await this.conectarBD()

            // ejecucion creacion
            const deseoCreado = await this.deseos.create({
                idProducto: deseo.idProducto,
                idCliente: deseo.idCliente,
                descripcion: deseo.descripcion,
            })

             // cerrar conexion
            await this.cerrarConexion()
            return deseoCreado.toJSON()
        } catch (error) {
            console.error(`ERROR PersistenceService -> buscarProductos: ${JSON.stringify(error)}`);
            throw new Error('internal server error')
        }
    }

    /**
     * Consulta todos los deseos
     * @returns deseos[]
     */
    public async buscarDeseos(){
        try {
            // abrir conexion
            await this.conectarBD()

            // ejecucion consulta
            const resultConsulta =  await this.deseos.findAll({
                include: [{
                    model: this.productos,
                    required: true
                }]
            })

            // iteracion response y estructura la data
            const arrayResponse = []
            for (const iterator of resultConsulta) {
                arrayResponse.push(iterator.toJSON());
            }

            // cerrar conexion
            await this.cerrarConexion()
            return arrayResponse
        } catch (error) {
            console.error(`ERROR PersistenceService -> buscarDeseos: ${JSON.stringify(error)}`);
            throw new Error('internal server error')
        }
    }

    /**
     * Consulta todos los deseos
     * @returns deseos[]
     */
     public async eliminarDeseos(idDeseo: number){
        try {
            // abrir conexion
            await this.conectarBD()

            // ejecucion consulta
            await this.deseos.update({
                esActivo: false
            },{where: {id:idDeseo }})


            // cerrar conexion
            await this.cerrarConexion()
            return true
        } catch (error) {
            console.error(`ERROR PersistenceService -> buscarDeseos: ${JSON.stringify(error)}`);
            throw new Error('internal server error')
        }
    }

    /**
     * Consulta todos los deseos
     * @returns deseos[]
     */
     public async modificarDeseos(deseo: DeseoData){
        try {
            // abrir conexion
            await this.conectarBD()

            // ejecucion consulta
            await this.deseos.update({
                descripcion: deseo.descripcion,
            },{where: {id:deseo.id }})


            // cerrar conexion
            await this.cerrarConexion()
            return true
        } catch (error) {
            console.error(`ERROR PersistenceService -> buscarDeseos: ${JSON.stringify(error)}`);
            throw new Error('internal server error')
        }
    }

}