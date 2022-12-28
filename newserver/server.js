const express = require("express")
const app = express();
app.use(express.static(__dirname + '/public'));

app.use(function (req, resp, next) {
    console.log(req.url + req.method);
    next();
})


app.get("/", function (req, resp) {
    resp.sendFile("public/loginPage.html", { root: __dirname })
});

app.listen(3015);
console.log("server is running at port 3015");