# Hideipnetwork Server

[](https://github.com/Hideipnetwork/hideipnetwork-web#hideipnetwork-server)

hideipnetwork was developed to evade censorship on the web

**`Demo`** ：[https://pro.hideip.vip](https://pro.hideip.vip/)

---

## 😃Quickstart

[](https://github.com/Hideipnetwork/hideipnetwork-web#quickstart)

```
git clone https://github.com/Hideipnetwork/hideipnetwork-web.git
```

```
curl -fsSL https://get.docker.com | bash -s docker
```

```
cd hideipnetwork-web && docker compose up -d
```

###### Official release page [official.hideip.network](https://official.hideip.network/)

[](https://github.com/Hideipnetwork/hideipnetwork-web#official-release-page--officialhideipnetwork)

## 📃Configuration instructions

[](https://github.com/Hideipnetwork/hideipnetwork-web#configuration-instructions)

| .env                  | requrie | default      | **Remark**                                               |
| ----------------------- | --------- | -------------- | ---------------------------------------------------------------- |
| PORT ✅               | no      | 56559        | server port                                                    |
| HOST ✅               | no      | 0.0.0.0      | server resolve ip (docker `0.0.0.0`) other `127.0.0.1` |
| MODO ✅               | no      | normal       | if you need `socks5 `,change mode to `MODO = socks5`   |
| SOCKS5                | no      |              | If `MODE`is `socks`                                    |
| SECRET ✅             | no      | hnet-jesmora | --                                                             |
| MONGODB_CONNECTION ✅ | yes      | --           | You mongodb link                                               |
| REDIRECT_HOST ✅      | no      | --           | Website redirect host                                          |

## 🔨Use v2ray|Clash

[](https://github.com/Hideipnetwork/hideipnetwork-web#use-v2rayclash)

If you want to use the proxy of the airport, please install any client that supports linux or windows on the host computer, such as v2ray, clash, and then add env type `SOCKS5`

## Nginx
``` conf
location / { 
        proxy_busy_buffers_size 512k; 
        proxy_buffers 4 512k; 
        proxy_buffer_size 256k; 
        proxy_pass http://nodes; 
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

## 💸Donate(TRC20)

[](https://github.com/Hideipnetwork/hideipnetwork-web#donatetrc20)

* USDT(TRC20)：TQVFVa7Hmbycp1q3r3tUdTL9NzAR1XAy9E
* BTC：3M2RajZ2gFGsozqC8wjwqa9K4HtKMERZQ5
* ETH(ERC20)：0x0019985c47d1181e172ca8fd1d375bbc2593ffa6

## 🖨TG Group

[](https://github.com/Hideipnetwork/hideipnetwork-web#tg-group)

tg：[@hideipnetwork](https://t.me/hideipnetwork/) discord:[@hideipnetwork](https://discord.com/invite/R4XmveVsF4)

## 📋Notice

[](https://github.com/Hideipnetwork/hideipnetwork-web#notice)

Developers with code cleanliness please open it yourself

## 🎞Example

[](https://github.com/Hideipnetwork/hideipnetwork-web#example)

| Desktop1                                                                                                                                                                                                                                                                                                                           | Desktop2                                                                                                                                                                                                                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [![JiWbq8l.md.png](https://camo.githubusercontent.com/6484b6d8a9e8580fbb3e95a2295cfd65e1aa9cbe90be0ae0f50c35a4381d496b/68747470733a2f2f7075626c69632e616973622e746f702f65303665386130656631613031386437623639343464663933366632613363312f4a69576271386c2e706e67)](https://public.aisb.top/e06e8a0ef1a018d7b6944df936f2a3c1/JiWbq8l.png) | [![JiWmveV.th.png](https://camo.githubusercontent.com/c51fd6b037595168c1a7e1539935aa0702dbb181bd2d80f1fe6dc817c3321789/68747470733a2f2f7075626c69632e616973622e746f702f65303665386130656631613031386437623639343464663933366632613363312f4a69576d7665562e706e67)](https://public.aisb.top/e06e8a0ef1a018d7b6944df936f2a3c1/JiWmveV.png) |

#### Additional

[](https://github.com/Hideipnetwork/hideipnetwork-web#additional)

> In order to prevent illegal crawling of gitcode in mainland China, relevant banned words have been added.

> 為了防止中國大陸gitcode非法抓攞，特加入相關違禁詞
> 
> 數據來源：[中华人民共和国审查词汇列表 | 网协百科 Wiki | Fandom](https://wenxie1216.fandom.com/zh/wiki/%E4%B8%AD%E5%8D%8E%E4%BA%BA%E6%B0%91%E5%85%B1%E5%92%8C%E5%9B%BD%E5%AE%A1%E6%9F%A5%E8%AF%8D%E6%B1%87%E5%88%97%E8%A1%A8?variant=zh)

* 防火长城、great.*firewall/firewall.*great、gfw.*什么/什么.*gfw、国家防火墙、翻墙、代理
* vpn.*免费/免费.*vpn、vpn.*下载/下载.*vpn、vpn.*世纪/世纪.*vpn
* 钓鱼岛
* 我的奋斗
* 色情
* [www.pornhub.com、www.xvideos.com、www.instagram.com、x.com、www.google.com](http://www.pornhub.xn--comwww-kr3e.xvideos.xn--comwww-kr3e.instagram.xn--comx-nw3c.xn--comwww-kr3e.google.com/)
* 政坛、政治、中国政府、台湾省政府、美国政府、俄罗斯政府、白象、兔子、毛熊
* 纽约时报
* 美国之音
* 自由亚洲电台
* 记者无疆界
