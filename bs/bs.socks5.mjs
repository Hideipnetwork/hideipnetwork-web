import { createBareServer } from '@tomphttp/bare-server-node';
import { SocksProxyAgent } from 'socks-proxy-agent';
import * as socksFun from '../utils/socks5.mjs';

let bareServer = function () { };
const data = await socksFun.getProxy();
const random = Math.floor(Math.random() * data.length);
const socks5 = data[random]

if (socks5 === undefined) {
    bareServer = createBareServer('/bare/');
} else {
    const socksProxyAgent = new SocksProxyAgent(`socks://${socks5}`);
    bareServer = createBareServer('/bare/', {
        httpAgent: socksProxyAgent,
        httpsAgent: socksProxyAgent,
    });
}

export default bareServer;