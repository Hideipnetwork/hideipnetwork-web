import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getProxy = async () => {
    try {
        const data = await fs.readFileSync(path.resolve(__dirname, '../proxy/socks5.txt'), 'utf8');
        return data.toString().split("\n");
    } catch (err) {
        console.log(err)
    }
}

export {
    getProxy
}