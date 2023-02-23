import  express  from 'express';
import 'dotenv/config';
import  Connexiondb  from './Config/database';
import env from './utils/validateEnv'
<<<<<<< HEAD
import { livreurRoute } from './routes/adminRouter';
import * as bodyParser from 'body-parser';

=======
import router from './routes/productRouter';
>>>>>>> c071af28495f313a206061937edea312216dec02

class App {
    public app: express.Application ;
       constructor() {
           this.app=express();
           this.router();
           this.dbconnexion();
        }

<<<<<<< HEAD
   
=======
    private InitialRoutes(){
        this.app.use(express.json())
        this.app.use("/product",router)
    }

>>>>>>> c071af28495f313a206061937edea312216dec02
    public dbconnexion() {
       const connexiondb =new Connexiondb();
    }

    private router(){
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended:true}))
        this.app.use("/api/admin",livreurRoute)
     }
     
    public listen(){
        const PORT = env.PORT
            this.app.listen(PORT,()=>{
             console.log(`Server is Runing on Port ${PORT}`)
        })
    }
      
    
}

export default App