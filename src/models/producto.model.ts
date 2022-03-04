export class ProductoData {
    public id: number
    public nombre: string
    public precio: string
    public cantidadStock: number
    public descripcion: string
    public imagen: string

    // constructor de la clase ProductoData
    constructor(){
        this.id = 0
        this.nombre = ''
        this.precio = ''
        this.cantidadStock = 0
        this.descripcion = ''
        this.imagen = ''
    }
}