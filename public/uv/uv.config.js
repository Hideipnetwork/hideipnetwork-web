self.__uv$config = {
    prefix: '/server/',
    bare: '/bare/',
    encodeUrl: Hideipnetwork.codec.xor.encode,
    decodeUrl: Hideipnetwork.codec.xor.decode,
    handler: '/uv/uv.handler.js',
    bundle: '/uv/uv.bundle.js',
    config: '/uv/uv.config.js',
    sw: '/uv/uv.sw.js',
};
