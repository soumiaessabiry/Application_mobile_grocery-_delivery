import  express  from 'express';
import 'dotenv/config';
import  Connexiondb  from './Config/database';
import env from './utils/validateEnv'
import { livreurRoute } from './routes/adminRouter';
import * as bodyParser from 'body-parser';
import router from './routes/productRouter';

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
        this.app.use("/api/admin",livreurRoute)
        this.app.use("/product",router)

     }
     
    public listen(){
        const PORT = env.PORT
            this.app.listen(PORT,()=>{
             console.log(`Server is Runing on Port ${PORT}`)
        })
    }
      
    
}

export default App