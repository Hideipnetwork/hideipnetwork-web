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

**Besides that, you have to deploy api** [hidwipnetwork-admin](https://github.com/Hideipnetwork/hideipnetwork-admin) !!!

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
