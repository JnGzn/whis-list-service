import { PersistenceService } from './persistence.service';
import { Sequelize, DataTypes, Model } from "sequelize";

// jest.mock('sequelize')

// mock de respose  svc
const mockProducto: any[] = []
const mockDeseos = [{
  id: 1,
  idProducto: 5,
  idCliente: 1,
  descripcion: "cde",
  esActivo: false
}]
const mockEmpty :any[]= []

const persistenceService = new PersistenceService()

process.env = {}

describe('Persistence Service', () => {

  test('buscarProductos: consulta productos exitosa', async done => {

    persistenceService.productos.findAll = jest.fn().mockImplementation((d: any) => Promise.resolve(mockProducto))
    // ejecucion metodo
    try {
      const data = await persistenceService.buscarProductos()
      expect(data).toEqual(mockProducto)
      done()
    } catch (error) {
      expect(error).toBeFalsy()
    }

  })

  test('buscarProductos: consulta productos fallo', async done => {

    persistenceService.productos.findAll = jest.fn().mockImplementation((d: any) => Promise.reject(new Error('some Errro')))
    // ejecucion metodo
    try {
      const data = await persistenceService.buscarProductos()
      expect(data).toBeFalsy()
    } catch (error) {
      expect(error).toBeTruthy()
      done()
    }

  })

  test('crearDeseo: creacion deseos exitosa', async done => {

    persistenceService.deseos.create = jest.fn().mockImplementation((d: any) => Promise.resolve(mockProducto[0]))
    // ejecucion metodo
    try {
      const data = await persistenceService.crearDeseo(mockProducto[0])
      expect(data).toEqual(mockProducto[0])
      done()
    } catch (error) {
      expect(error).toBeTruthy()
      done()
    }

  })

  test('crearDeseo: creacion deseos fallo', async done => {

    persistenceService.deseos.create = jest.fn().mockImplementation((d: any) => Promise.reject(new Error('some Errro')))
    // ejecucion metodo
    try {
      const data = await persistenceService.crearDeseo(mockProducto[0])
      expect(data).toBeFalsy()
    } catch (error) {
      expect(error).toBeTruthy()
      done()
    }

  })

  test('buscarDeseos: consulta deseos exitosa', async done => {

    persistenceService.deseos.findAll = jest.fn().mockImplementation((d: any) => Promise.resolve(mockEmpty))
    // ejecucion metodo
    try {
      const data = await persistenceService.buscarDeseos()
      expect(data).toEqual(mockEmpty)
      done()
    } catch (error) {
      expect(error).toBeFalsy()
    }
  })

  test('buscarDeseos: consulta deseos fallo', async done => {
    persistenceService.deseos.findAll = jest.fn().mockImplementation((d: any) => Promise.reject(new Error('some Errro')))
    // ejecucion metodo
    try {
      const data = await persistenceService.buscarDeseos()
      expect(data).toBeFalsy()
    } catch (error) {
      expect(error).toBeTruthy()
      done()
    }

  })
  test('eliminarDeseos: eliminacionDeseos exitosa', async done => {

    persistenceService.deseos.update = jest.fn().mockImplementation((d: any) => Promise.resolve(mockDeseos[0]))
    // ejecucion metodo
    try {
      const data = await persistenceService.eliminarDeseos(mockDeseos[0].id)
      expect(data).toEqual(true)
      done()
    } catch (error) {
      expect(error).toBeFalsy()
    }
  })

  test('eliminarDeseos: eliminacionDeseos fallo', async done => {

    persistenceService.deseos.update = jest.fn().mockImplementation((d: any) => Promise.reject(new Error('some Errro')))
    // ejecucion metodo
    try {
      const data = await persistenceService.eliminarDeseos(mockDeseos[0].id)
      expect(data).toBeFalsy()
    } catch (error) {
      expect(error).toBeTruthy()
      done()
    }

  })
  test('modificarDeseos: modificacion Deseos exitosa', async done => {

    persistenceService.deseos.update = jest.fn().mockImplementation((d: any) => Promise.resolve(mockDeseos[0]))
    // ejecucion metodo
    try {
      const data = await persistenceService.modificarDeseos(mockDeseos[0])
      expect(data).toEqual(true)
      done()
    } catch (error) {
      expect(error).toBeFalsy()
    }
  })

  test('modificarDeseos: modificacion Deseos fallo', async done => {

    persistenceService.deseos.update = jest.fn().mockImplementation((d: any) => Promise.reject(new Error('some Errro')))
    // ejecucion metodo
    try {
      const data = await persistenceService.modificarDeseos(mockDeseos[0])
      expect(data).toBeFalsy()
    } catch (error) {
      expect(error).toBeTruthy()
      done()
    }

  })
})