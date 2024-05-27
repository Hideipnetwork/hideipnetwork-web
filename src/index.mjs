import hnetServer from "hnet-server"
import dotEnv from "dotenv"

dotEnv.config()

const server = new hnetServer({ HOST: process.env.HOST, PORT: process.env.PORT, MODE: process.env.MODE })

server.start()