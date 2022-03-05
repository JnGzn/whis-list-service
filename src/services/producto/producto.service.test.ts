import { ProductoService } from './producto.service';






jest.mock('./../persistence/persistence.service')


// mock de respose  svc
const mockProducto = [{
  id: 1,
  nombre: '',
  precio: '',
  cantidadStock: 0,
  descripcion: '',
  imagen: '',
}]

const deseoService = new ProductoService()

describe('Producto Service', () => {

  test('getProductos: consulta exitosa', async done => {
    // mock llamada a persistencia CREAR DESEO
    deseoService.persistenceService.buscarProductos = jest.fn().mockImplementation((d: any) => Promise.resolve(mockProducto))

    // ejecucion metodo
    try {
        const data = await deseoService.getProductos()
        expect(data).toEqual(mockProducto)
        done()
    } catch (error) {
        expect(error).toBeFalsy()
    }

  })
  test('getProductos: consulta exitosa', async done => {
    // mock llamada a persistencia CREAR DESEO
    deseoService.persistenceService.buscarProductos = jest.fn().mockImplementation((d: any) => Promise.reject(new Error ('some Error')))

    // ejecucion metodo
    try {
        const data = await deseoService.getProductos()
        expect(data).toBeFalsy()
      } catch (error) {
        expect(error).toBeTruthy()
        done()
    }

  })

})