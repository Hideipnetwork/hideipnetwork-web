import hnetServer from "hnet-server"
import dotEnv from "dotenv"

dotEnv.config()

const server = new hnetServer(process.env.HOST, process.env.PORT, process.env.MODE)

server.start()