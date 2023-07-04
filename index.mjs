import httpServer from "./app/index.mjs";
import config from "./config/default.config.mjs";

httpServer.listen(config.PORT,config.HOST,function(){
    console.log(`http server http://${config.HOST}:${config.PORT}/`);
});