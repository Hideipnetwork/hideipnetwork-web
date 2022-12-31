/**
 * Just replace BAREUR
 */ 
const BAREURL = 'https://yourdomain'

/**
 * Non-developers, please modify without authorization, 98% report errors!
*/
self.__uv$config = {
    prefix: `/aHR0cHM6Ly9naXRodWIuY29tL2hpZGVpcG5ldHdvcms=/`,
    bare: `${BAREURL}/bareServer/`,
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/server/server.handler.js',
    client: '/server/server.client.js',
    bundle: '/server/server.bundle.js',
    config: '/server/server.config.js',
    sw: '/server/server.sw.js',
};
