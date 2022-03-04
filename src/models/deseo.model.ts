export class DeseoData {
    public id: number
    public idProducto: number
    public idCliente: number
    public descripcion: string
    public esActivo: boolean

    // constructor de la clase ProductoData
    constructor(){
        this.id = 0
        this.descripcion = ''
        this.idProducto = 0
        this.idCliente = 0
        this.esActivo = true
    }

}