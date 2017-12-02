var express = require("express");
var superagent = require("superagent");
var app = express();

app.use("/static", express.static("public"));

app.get("/getwxImg", (req, res) => {
    var url = req.url.substring(req.url.indexOf("param=") + 6);
    console.log(url);
    res.writeHead(200, {
        'Content-Type': 'image/*'
    });
    if (!url) {
        res.send("");
        return false;
    }
    superagent.get(url)
        .set('Referer', '')
        .set("User-Agent",
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.94 Safari/537.36'
        )
        .end(function (err, result) {
            if (err) {
                return false;
            }
            res.end(result.body);
            return;
        });
});

app.listen(4001, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("server run!");
    }
});