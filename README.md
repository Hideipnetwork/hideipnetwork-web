# Hideipnetwork Server

hideipnetwork was developed to evade censorship on the web

**`Demo`** ：[https://hideip.network](https://hideip.network/)

---


## 😃Quickstart

```
git clone https://github.com/Hideipnetwork/hideipnetwork-web.git
```

```
docker compose up -d
```

if you don`t how to use ,please visite [official.hideip.network](https://official.hideip.network/)

## 🏐API

| index | path| method| header|body/query|
| --- | --- | --- |---|---|
| 1 | api/v1/site| POST |`Hnet-Header-Secret` |`{ host:string, state:bool }` |
| 2 | api/v1/site| PUT|`Hnet-Header-Secret`|`{ _id:string, state:bool }`  |
| 3 | api/v1/site| DEL|`Hnet-Header-Secret`|`{ _id:string }` |
| 4 | api/v1/site| GET|`Hnet-Header-Secret`|`{ page:number, size:number }` |

## 📃Configuration instructions

| .env | requrie| default | **Remark**                                               |
| ------ | ------| --------- | ---------------------------------------------------------------- |
| PORT |no| 56559   | server port                                                    |
| HOST | no|0.0.0.0 | server resolve ip (docker `0.0.0.0`) other `127.0.0.1` |
| MODO |no|normal  | if you need `socks5 `,change mode to `MODO = socks5`   |
| SECRET*|**yes**|hnet-jesmora  | **This is very important, please keep it safe.Please Please see the api section**   |
| MONGDB_CONNECTION* | **yes**|------| You mongodb link  |
| REDIRECT_HOST| no|------| Website redirect host   |

###### * socks5 files are in the directory `proxy/socks5.txt`

## 🔨Use v2ray|Clash

If you want to use the proxy of the airport, please install any client that supports linux or windows on the host computer, such as v2ray, clash, and then add the local proxy `127.0.0.1:port` to the file socks5.txt !!!

## 💸Donate(TRC20)

* USDT(TRC20)：TQVFVa7Hmbycp1q3r3tUdTL9NzAR1XAy9E
* BTC：3M2RajZ2gFGsozqC8wjwqa9K4HtKMERZQ5
* ETH(ERC20)：0x0019985c47d1181e172ca8fd1d375bbc2593ffa6

## 🖨TG Group

tg：[@hideipnetwork](https://t.me/hideipnetwork/)
discord:[@hideipnetwork](https://discord.com/invite/R4XmveVsF4)

## 📋Notice

Developers with code cleanliness please open it yourself

## 🎞Example

[![JYmVgcJ.md.png](https://iili.io/JYmVgcJ.md.png)](https://freeimage.host/i/JYmVgcJ)

[![JYmVvMF.md.png](https://iili.io/JYmVvMF.md.png)](https://freeimage.host/i/JYmVvMF)
