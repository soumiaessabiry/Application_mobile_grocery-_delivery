import  express  from 'express';
import 'dotenv/config';
import  Connexiondb  from './Config/database';
import env from './utils/validateEnv'
import router from './routes/productRouter';

class App {
    public app: express.Application ;
       constructor() {
           this.app=express();
           this.InitialRoutes();
           this.dbconnexion();
        }

    private InitialRoutes(){
        this.app.use(express.json())
        this.app.use("/product",router)
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