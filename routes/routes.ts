import {Router, Response, Request} from 'express'

const router = Router();

router.get("/mensajes", ( req:Request , res:Response )=>{
        res.json({
            ok: true,
            data:{
                Nombre:"Mauricio Medina Sierra"
            }
        })
    });

router.post("/agregar", ( req:Request , res:Response )=>{
        res.json({
            ok: true,
            data:{
                Nombre:"Mauricio Medina Sierra",
                Edad:30
            }
        })
    });

router.post("/add/:identification", ( req:Request , res:Response )=>{

        const body= req.body.cuerpo;
        const edad= req.body.edad??45;
        const parametro = req.params.identification;
        
        res.json({
            ok: true,
            data:{
                BODY:body,
                body,
                edad,
                parametro
            }
        })
    });

 export default   router