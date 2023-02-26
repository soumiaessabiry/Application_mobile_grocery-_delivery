import  express  from 'express';
import 'dotenv/config';
import  Connexiondb  from './Config/database';
import env from './utils/validateEnv'
import { livreurRoute } from './routes/AdminRoute/livreurRouter';
import { vendeurRoute } from './routes/AdminRoute/vendeurRouter';
import * as bodyParser from 'body-parser';
import router from './routes/productRouter';
import ErrorHandler from "./middleware/ErrorHanlder"

class App {
    public app: express.Application ;
       constructor() {
           this.app=express();
           this.router();
           this.dbconnexion();
        }

    public dbconnexion() {
       const connexiondb =new Connexiondb();
    }

    private router(){
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended:true}))
        this.app.use("/api/admin",livreurRoute,vendeurRoute)
        this.app.use("/product",router)
        this.app.use(ErrorHandler)

     }
     
    public listen(){
        const PORT = env.PORT
            this.app.listen(PORT,()=>{
             console.log(`Server is Runing on Port ${PORT}`)
        })
    }
      
    
}

export default App