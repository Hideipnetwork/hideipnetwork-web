/**
 * website:https://hideip.network
 *
*/

new Vue({
    el: '#root',
    data: {
        val: '',
        url: 'https://www.google.com/search?q=',
        errStatus: false,
        pld: 'Search here or Enter a URL',
        listShow: false,
        setShow: false,
        digLog: false,
        editDig: false,
        current: -1,
        editIndex: -1,
        kindex: -1,
        isZindex: false,
        editText: null,
        optionObj: {
            set: false,
            bookmark: true,
        },
        bookObj: {
            title: '',
            siteLink: ''
        },
        imgArr: [],
        listArr: [],
        wdArr: [],
        bookArr: [{
            icon: 'https://store.heytapimage.com/cdo-portal/feedback/202209/01/5b2af43d6cdd374437444d1e9cc7c405.png',
            name: '添加书签',
            link: 'https://hideip.network'
        }],
        spArr: [],
        dwar1: false,
        dwar2: false,
        inputCode: '',
        expressValue: '',
        verify: ''
    },
    created() {
        const styles = [
            'color: green',
            'font-size: 30px',
            'text-shadow: 2px 2px black',
            'padding: 10px',
        ].join(';');
        console.log('%c本项目由主系统抽离\n特供开发者自由部署\n@t.me/hideipnetwork\nhttps://github.com/Hideipnetwork\nhttps://hideip.network', styles);
    },
    mounted() {
        this.baiduWdApi()
        this.getList()


        /***********************/
        if (this.getLocalStronge('set')) {
            this.optionObj = this.getLocalStronge('set')
        } else {
            this.setLocalStronge('set', this.optionObj);
        }

        /**********************/
        if (this.getLocalStronge('book')) {
            this.bookArr = this.getLocalStronge('book')
        } else {
            this.setLocalStronge('book', this.bookArr)
        }

        /*********************/
        // if (this.val == '') return this.wdArr = this.listArr;


    },
    methods: {
        isUrl(val) {
            if (/^ http(s ?): \/\//.test(val) || val.toString().includes('.') && val.substr(0, 1) !== ' ') return true;
            return false;
        },
        handleHost() { },
        async handleCheck(event) {
            const _this = this;
            window.navigator.serviceWorker.register('./sw.js?cros', {
                scope: __uv$config.prefix
            }).then(() => {
                let url = this.val.trim();
                if (!this.isUrl(url)) url = this.url + url;
                else if (!(url.startsWith('https://') || url.startsWith('http://'))) url = 'http://' + url;
                if (this.optionObj.set) {
                    window.open(__uv$config.prefix + __uv$config.encodeUrl(url), "_blank");
                } else {
                    window.location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
                }
            });
        },
        handleChoose(item, index) {
            this.val = item.url
            this.handleCheck()
        },
        getList() {
            fetch('/list').then(data => data.json()).then(res => {
                this.listArr = res.list;
            })
        },
        checkBlur() {
            if (this.val == '' || this.val == null) {
                setTimeout(() => {
                    this.listShow = false;
                    this.isZindex = false;
                    this.wdArr = this.listArr;
                }, 1500)
            }
        },
        checkFocus() {
            this.listShow = true;
            this.isZindex = true;
        },
        handleInput() {
            this.kindex = -1;
            this.baiduWdApi()
        },
        handleDown() {
            const kArr = this.wdArr;
            if (this.kindex == kArr.length - 1) {
                return this.kindex = kArr.length - 1;
            } else {
                this.kindex++;
                this.val = new Object(kArr[this.kindex]).text;
            }

        },
        handleUp() {
            const kArr = Array.from(new Set(this.wdArr.concat(this.listArr)));
            if (this.kindex < 0) {
                return
            } else {
                this.kindex--;
                this.val = new Object(kArr[this.kindex]).text;
            }
        },
        baiduWdApi() {
            const sugurl = `https://suggestion.baidu.com/su?wd='${this.val}'&p=3&cb=window.baidu.sug`;
            const _this = this;
            window.baidu = {
                sug: function (json) {
                    let arr = json.s;
                    let t = arr.map(e => {
                        return {
                            text: e,
                            url: e
                        }
                    });
                    if (_this.val == '') return _this.wdArr = _this.listArr;
                    if (t.length === 0) {
                        _this.listShow = false;
                    } else {
                        _this.listShow = true;
                        _this.wdArr = t;
                    }

                }
            }
            //Dynamically add JS scripts
            var script = document.createElement("script");
            script.src = sugurl;
            document.getElementsByTagName("head")[0].appendChild(script);
        },
        addBook(index, item) {
            const arrL = this.bookArr.length - 1;
            if (index == arrL) {
                this.digLog = true;
            } else {
                this.val = item.link
                this.handleCheck()
            }
        },
        editShow(index) {
            this.editIndex = index;
            this.current = index;
            const arrL = this.bookArr.length - 1;
            if (this.current == arrL) {
                return;
            }
        },
        leave() {
            this.current = -1;
        },
        getFavicon(url) {
            return `https://api.faviconkit.com/${url.replace(/^https?\:\/\//i, "")}`;
        },
        handleAdd() {
            if (this.bookObj.title == '') {
                this.dwar1 = true;
            }
            if (this.bookObj.siteLink == '') {
                this.dwar2 = true;
                return;
            }
            if (!/^(https?:\/\/(([a-zA-Z0-9]+-?)+[a-zA-Z0-9]+\.)+[a-zA-Z]+)(:\d+)?(\/.*)?(\?.*)?(#.*)?$/.test(this.bookObj.siteLink)) {
                this.dwar2 = true;
                return;
            };

            const book = {
                icon: this.getFavicon(this.bookObj.siteLink),
                name: this.bookObj.title,
                link: this.bookObj.siteLink
            }
            if (this.editText == 'edit') {
                this.bookArr.forEach((e, i) => {
                    if (i == this.editIndex) {
                        this.bookArr[i].name = this.bookObj.title;
                        this.bookArr[i].link = this.bookObj.siteLink;
                    }
                })
                this.setLocalStronge('book', this.bookArr);
                this.editText = null;
            } else {
                this.bookArr.unshift(book);
                this.setLocalStronge('book', this.bookArr);
            }
            this.digLog = false;
            this.bookObj = {
                title: '',
                siteLink: ''
            }
        },
        mobifBook(item) {
            this.digLog = true;
            this.editText = 'edit';
            this.bookObj = {
                title: item.name,
                siteLink: item.link
            }
        },
        cancelBook() {
            this.digLog = this.dwar1 = this.dwar2 = false;
            this.bookObj = {
                title: '',
                siteLink: ''
            }
        },
        moveBook(val, index) {
            this.bookArr = this.getLocalStronge('book');
            this.bookArr.map((e, i) => {
                if (e.name === val.name) {
                    this.bookArr.splice(i, 1)
                    this.setLocalStronge('book', this.bookArr)
                }
            })
        },
        handleSet() {
            this.setShow = !this.setShow;
        },
        clearText() {
            setTimeout(() => {
                this.verify = '';
                this.inputCode = '';
                this.getCode()
            }, 2500)
        },

        setWindow() {
            this.optionObj.set = !this.optionObj.set;
            this.setLocalStronge('set', this.optionObj);
        },
        setBook() {
            this.optionObj.bookmark = !this.optionObj.bookmark
            this.setLocalStronge('set', this.optionObj);
        },

        /*###################################################*/
        // Here are all the methods of encapsulation
        setLocalStronge(key, val) {
            window.localStorage.setItem(key, JSON.stringify(val))
        },
        getLocalStronge(key) {
            return JSON.parse(window.localStorage.getItem(key))
        },
        getCookie(cname) {
            const name = cname + "=";
            const ca = document.cookie.split(';');
            for (let i = 0; i < ca.length; i++) {
                const c = ca[i].trim();
                if (c.indexOf(name) == 0) { return c.substring(name.length, c.length); }
            }
            return "";
        },
        setCookie(name, value, exdays) {
            const d = new Date();
            d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
            const expires = "expires=" + d.toGMTString();
            document.cookie = name + "=" + value + "; " + expires;
        }
    }
})