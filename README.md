# Hideipnetwork Server

hideipnetwork was developed to evade censorship on the web

**`Demo`**：[https://hideip.network](https://hideip.network)

---

## Quickstart  |  [中文教程](https://github.com/Hideipnetwork/hideipnetwork-web/wiki/Hideipnetwork-Server)

* *Need install Node.js 16+*

```
git clone https://github.com/Hideipnetwork/hideipnetwork-web.git

cd hideipnetwork-web

npm i && npm run start
```

## Nginx configuration

```nginx notranslate position-relative overflow-auto
location / {
  proxy_busy_buffers_size  512k;
  proxy_buffers  4 512k;
  proxy_buffer_size  256k;
  proxy_pass http://localhost:3000;
  proxy_http_version 1.1;
  proxy_set_header Upgrade $http_upgrade;
  proxy_set_header Connection 'Upgrade';
  proxy_set_header X-Real-IP $remote_addr;
  proxy_set_header X-Forwarded-Host $host:$server_port;
  proxy_set_header X-Forwarded-Server $host;
  proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
  proxy_set_header Host $host;
}
```

## contact

![](https://store.heytapimage.com/cdo-portal/feedback/202207/02/b705611e231f230f2fec150f35221c0b.png)


## License

```
Copyright 2021 dss886

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```
