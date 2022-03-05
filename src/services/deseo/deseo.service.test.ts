import { PersistenceService } from './../persistence/persistence.service';
import { DeseoService } from '../../services/deseo/deseo.service';






jest.mock('./../persistence/persistence.service')


// MOCK MODELO Exito
const mockPostTodoExito = {
    "idProducto": 5,
    "idCliente": 1,
    "descripcion": "cde"
}

// mock de respose  svc
const mockcreateDeseo = {
    id: 1,
    idProducto: 5,
    idCliente: 1,
    descripcion: "cde",
    esActivo: false
}

const deseoService = new DeseoService()

describe('Deseo Servive', () => {

  test('createDeseo: creacion exitosa', async done => {
    // mock llamada a persistencia CREAR DESEO
    deseoService.persistenceService.crearDeseo = jest.fn().mockImplementation((d: any) => Promise.resolve(mockcreateDeseo))

    // ejecucion metodo
    try {
        const data = await deseoService.createDeseo(mockcreateDeseo)
        expect(data).toEqual(mockcreateDeseo)
        done()
    } catch (error) {
        expect(error).toBeFalsy()
    }

  })

  test('createDeseo: fallo creacion', async done => {
    // mock llamada a persistencia CREAR DESEO
    deseoService.persistenceService.crearDeseo = jest.fn().mockImplementation((d: any) => Promise.reject(new Error('some Error')))

    // ejecucion metodo
    try {
        const data = await deseoService.createDeseo(mockcreateDeseo)
        expect(data).toBeFalsy()
    } catch (error) {
        expect(error).toBeTruthy()
        done()
    }
    done()
  })
  test('getDeseos: busqueda exitosa', async done => {
    // mock llamada a persistencia
    deseoService.persistenceService.buscarDeseos = jest.fn().mockImplementation((d: any) => Promise.resolve([mockcreateDeseo]))

    // ejecucion metodo
    try {
        const data = await deseoService.getDeseos()
        expect(data.length).toBeGreaterThan(0)
        expect(data).toEqual([mockcreateDeseo])
        done()
    } catch (error) {
        expect(error).toBeFalsy()
    }

  })

  test('getDeseos: fallo busqueda', async done => {
    // mock llamada a persistencia
    deseoService.persistenceService.buscarDeseos = jest.fn().mockImplementation((d: any) => Promise.reject(new Error('some Error')))

    // ejecucion metodo
    try {
        const data = await deseoService.getDeseos()
        expect(data).toBeFalsy()
    } catch (error) {
        expect(error).toBeTruthy()
        done()
    }
    done()
  })
  test('putDeseos: modificacion exitosa', async done => {
    // mock llamada a persistencia
    deseoService.persistenceService.modificarDeseos = jest.fn().mockImplementation((d: any) => Promise.resolve(mockcreateDeseo))

    // ejecucion metodo
    try {
        const data = await deseoService.putDeseos(mockcreateDeseo)
        expect(data).toEqual(mockcreateDeseo)
        done()
    } catch (error) {
        expect(error).toBeFalsy()
    }

  })

  test('putDeseos: fallo modificacion', async done => {
    // mock llamada a persistencia
    deseoService.persistenceService.modificarDeseos = jest.fn().mockImplementation((d: any) => Promise.reject(new Error('some Error')))

    // ejecucion metodo
    try {
        const data = await deseoService.putDeseos(mockcreateDeseo)
        expect(data).toBeFalsy()
    } catch (error) {
        expect(error).toBeTruthy()
        done()
    }
    done()
  })
  test('deleteDeseos: elminacion exitosa', async done => {
    // mock llamada a persistencia
    deseoService.persistenceService.eliminarDeseos = jest.fn().mockImplementation((d: any) => Promise.resolve(mockcreateDeseo))

    // ejecucion metodo
    try {
        const data = await deseoService.deleteDeseos(mockcreateDeseo)
        expect(data).toEqual(mockcreateDeseo)
        done()
    } catch (error) {
        expect(error).toBeFalsy()
    }

  })

  test('deleteDeseos: fallo elminacion', async done => {
    // mock llamada a persistencia
    deseoService.persistenceService.eliminarDeseos = jest.fn().mockImplementation((d: any) => Promise.reject(new Error('some Error')))

    // ejecucion metodo
    try {
        const data = await deseoService.deleteDeseos(mockcreateDeseo)
        expect(data).toBeFalsy()
    } catch (error) {
        expect(error).toBeTruthy()
        done()
    }
    done()
  })

})