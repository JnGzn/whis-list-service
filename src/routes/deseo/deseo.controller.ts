// importacion librerias
import express from 'express'
import { DeseoService } from '../../services/deseo/deseo.service';
import { schemaDeseoPost } from '../../validators/deseo.validator';



export  class DeseoController {

    private deseoService
    constructor(){
        this.deseoService = new DeseoService()
    }

    public routes(app: any){

        // EndPoint POST
        // crea el deseo y lo retorna
        app.post('/deseo', async (req : express.Request, res: express.Response) => {

            try {

                // validacion datos
                const data: any = req.body;
                const validation = schemaDeseoPost.validate(data)

                // Si hay error en la validacion
                if(validation.error){
                    console.error(`DeseoController -> POST deseo: error en la estructura: ${JSON.stringify(validation.error.message)}`);
                    // Responde y finaliza la peticion
                    res.status(422).json({
                        data: null,
                        err: validation.error.message
                    }).end()
                    return
                }

                // llamada al svc
                const result = await this.deseoService.createDeseo(data)
                // Responde y funaliza la peticion
                res.status(200).json({
                    data: result,
                }).end()

                // finaliza el metodo
                return

            } catch (error) {
                console.error(`ProductoController -> POST /deseo:: ${JSON.stringify(error)}`)
                // Responde y finaliza la peticion
                res.status(500).json({
                    data: null,
                    err: error
                }).end()
            }
        })

        // EndPoint GET
        // obtiene todos los deseos y los retorna
        app.get('/deseo', async (req : express.Request, res: express.Response) => {

            try {


                // llamada al svc
                const result = await this.deseoService.getDeseos()
                // Responde y funaliza la peticion
                res.status(200).json({
                    data: result,
                }).end()

                // finaliza el metodo
                return

            } catch (error) {
                console.error(`ProductoController -> POST /deseo:: ${JSON.stringify(error)}`)
                // Responde y finaliza la peticion
                res.status(500).json({
                    data: null,
                    err: error
                }).end()
            }
        })

    }
}