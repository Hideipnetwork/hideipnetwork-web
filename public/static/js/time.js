function Time() {
    let titleText = document.querySelector('#titleText')
    var date = new Date();
    year = date.getFullYear();
    month = date.getMonth() + 1;
    day = date.getDate();
    hours = date.getHours();
    minutes = date.getMinutes();
    seconds = date.getSeconds();
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    titleText.innerText = hours + ":" + minutes + ':' + seconds;
    currentTime = year + "年" + month + "月" + day + "日 " + hours + ":" + minutes;
};
setInterval("Time()", 1000);

