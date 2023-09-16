# Hideipnetwork Server

hideipnetwork was developed to evade censorship on the web

**`Demo`**：[https://hideip.network](https://hideip.network)

---

## 😃Quickstart

> **you need a mysql database, then replace the env configuration file and import hnet.sql into the database, or create it manually**


```
git clone -b v3.1-beta https://github.com/Hideipnetwork/hideipnetwork-web.git
```

```
npm install
```

```
npm run start
```

if you don`t how to use ,please visite [official.hideip.network](https://official.hideip.network)

## 😃Custom search engine

```
https://hideip.network/?s=#%s
```

![](https://public.aisb.top/e06e8a0ef1a018d7b6944df936f2a3c1/HyVUD9S.png)

## 📃Configuration instructions

| .env| default|**Remark**|
| --- | --- | --- |
| PORT | 56559 | server port |
| HOST | 0.0.0.0 | server resolve ip (docker `0.0.0.0`) other `127.0.0.1`|
| MODO| normal| if you need `socks5 `,change mode to `MODO = socks5`  |

###### * socks5  files are in the directory `proxy/socks5.txt`

## 🔨Use v2ray|Clash

If you want to use the proxy of the airport, please install any client that supports linux or windows on the host computer, such as v2ray, clash, and then add the local proxy `127.0.0.1:port` to the file socks5.txt !!!

## 💸Donate(TRC20)

* USDT(TRC20)：TQVFVa7Hmbycp1q3r3tUdTL9NzAR1XAy9E
* BTC：3M2RajZ2gFGsozqC8wjwqa9K4HtKMERZQ5
* ETH(ERC20)：0x0019985c47d1181e172ca8fd1d375bbc2593ffa6

## 🖨Contact

![](https://store.heytapimage.com/cdo-portal/feedback/202207/02/b705611e231f230f2fec150f35221c0b.png)

## 📋Notice

Developers with code cleanliness please open it yourself


