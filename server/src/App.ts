import  express  from 'express';
import 'dotenv/config';
import  Connexiondb  from './Config/database';
import env from './utils/validateEnv'
import { livreurRoute } from './routes/adminRouter';

class App {
    public app: express.Application ;
       constructor() {
           this.app=express();
           this.InitialRoutes();
           this.dbconnexion();
           this.InitialMiddlwaires();
        }

    private InitialRoutes(){
       this.app.use("/api/admin",livreurRoute)
    }
    
    private InitialMiddlwaires(){
     this.app.use(express.json());
     this.app.use(express.urlencoded({extended:true}))
    }

    public dbconnexion() {
       const connexiondb =new Connexiondb();
    }

    public listen(){
        const PORT =env.PORT
            this.app.listen(PORT,()=>{
             console.log(`Server is Runing on Port ${PORT}`)
        })
    }
      
    
}

export default App