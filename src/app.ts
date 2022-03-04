

// importacion de librerias
import express from 'express'
import logger from "morgan";
import { DeseoController } from './routes/deseo/deseo.controller';
import { ProductoController } from './routes/producto/producto.controller';


export default class App {
  // atributos de la clase App
  public app: express.Application
  private rutasProducto: ProductoController
  private rutasDeseo: DeseoController

  // constructor de la clase App
  constructor() {

     // incializacion
    this.rutasProducto = new ProductoController()
    this.rutasDeseo = new DeseoController()

    this.app = express()
    this.app.use(express.json())
    this.app.use(logger('dev'))

    // inicio routes
    this.rutasProducto.routes(this.app)
    this.rutasDeseo.routes(this.app)

  }
}
