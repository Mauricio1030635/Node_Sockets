import bodyParser from "body-parser";
import Server from "./Classes/Server";
import { SEVER_PORT } from "./global/environment";
import router from "./routes/routes";
import cors from "cors";



const servicio = new Server();
servicio.app.use(bodyParser.urlencoded( {extended:true}) )
servicio.app.use(bodyParser.json())
//cors
servicio.app.use(cors({origin:true, credentials:true}))
//rutas
servicio.app.use("/",  router )

servicio.start(()=>{
    console.log(`estamos en un puerto ${SEVER_PORT}`);
})
