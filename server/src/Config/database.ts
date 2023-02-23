import mongoose from "mongoose";
import env from "../utils/validateEnv"
class Connexiondb {
    constructor() {
      mongoose.set('strictQuery', false);
        mongoose.connect(env.URL_DB)
        .then(() => {
          console.log('Database Connected')
        })
        .catch(err => {
          console.error(err)
        })
        
    }
}
// export const connexiondb = new Connexiondb()
export default Connexiondb;
