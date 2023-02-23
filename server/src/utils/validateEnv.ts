import { cleanEnv,str,port } from 'envalid';
   export default cleanEnv(process.env,{
        NODE_ENV:str(),
        PORT:port(),
        URL_DB:str()
})
