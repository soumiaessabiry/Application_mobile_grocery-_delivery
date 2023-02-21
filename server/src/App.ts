import  express  from 'express';
import 'dotenv/config';
import  Connexiondb  from './Config/database';
import env from './utils/validateEnv'

class App {
    public app: express.Application ;
       constructor() {
           this.app=express();
           this.InitialRoutes();
           this.dbconnexion();
        }

    private InitialRoutes(){
        const router=express.Router();
        router.get('/',(req,res)=>{
            res.json({
                'message':"hello souma"
            })
        });
        this.app.use('/',router);
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