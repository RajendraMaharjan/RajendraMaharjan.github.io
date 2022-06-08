const express = require('express');
// const { path } = require('express/lib/application');
const app = express();

var path = require('path');
const { send } = require('process');

// built in middleWare express parser 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname)));
app.use(express.static(path.join(__dirname, "htmlfrom")));


app.listen(80, () => {
    console.log("Server Running low @default apache port.")
});

//for Page stats
let pageCount = 0;
let getCount = 0;
let postCount = 0;

//1. Get request -> give the html
//2. post request -> stores all in this file where you started the server
//3. From Post redirect -> view Page -> whatever user has entered
//4. Error Html 
//5. Not found page 
//6. Stats -> Hits of each page,


app.get("/getPageStats", function (req, res, next) {
    console.log("Rechhed @getPageStats");
    pageCount++;
    getCount++;

    let format = "<h2> Here are the API hit status</h2>";
    format += "<p>Total Page hit: <strong>" + pageCount + "</strong></p>";
    format += "<p>Total GET hit: <strong>" + getCount + "</strong></p>";
    format += "<p>Total POST hit: <strong>" + postCount + "</strong></p>";
    res.send(format);
});

app.get("/getHiPage", function (req, res, next) {
    pageCount++;
    getCount++;
    console.log("Rechhed @getPage");
    res.send("<h1>Hi I've reaced the header tag 1</h1>")
});


app.get("/getForm", function (req, res, next) {
    pageCount++;
    getCount++;

    console.log("Rechhed @getPage");
    res.sendFile(path.join(__dirname, 'htmlfrom', 'JqueryFormDemo.html'));
});

let userBody;
app.post("/postUser", (req, res, next) => {
    postCount++;
    pageCount++
    console.log("Reached @postUser");

    //You have your data here now try to show that in somewhere
    // console.log(req.body);
    userBody = req.body;
    res.redirect("/viewUser");

});

app.get("/viewUser", (req, res, next) => {
    // console.log(userBody);
    let creatContent = "<html><head>" +
        "    <link rel='stylesheet' href='jqueryForm.css' />"
        + "</head><body>";

    creatContent += "<div class='formContent'>" +
        "<div class='lineRow'>" +
        "<label class='labelTitle' for='labelTitle'>First Name:</label>" +
        userBody.fName +
        "</div>" +
        "<div class='lineRow'>" +
        "<label class='labelTitle' for='lName'>Last Name: </label>" +
        userBody.lName +
        "</div>" +
        "<div class='lineRow'>" +
        "<label class='labelTitle' for='address'>Address: </label>" +
        userBody.address +
        "</div>" +
        "<div class='lineRow'>" +
        "<label class='labelTitle' for='phone'>Phone: </label>" +
        userBody.phone +
        "</div>" +
        "<div class='lineRow'>" +
        "<label class='labelTitle' for='email'>E-mail: </label>" +
        userBody.email +
        "</div>" +
        "<div class='lineRow'>" +
        "<label class='labelTitle' for='flex_rowg10'>Gender: </label>" +
        userBody.radiogender +
        "</div>" +
        "<div class='lineRow'>" +
        "<label class='labelTitle' for='country'>Country:</label>" +
        userBody.countrySelect +
        "</div>" +
        "<div class='lineRow'>" +
        "<label for='checkboxsection' class='labelTitle'> Interests: </label>" +
        userBody.checkBx +
        "</div>" +
        "</div>" +
        "</div>";

    creatContent += "</body></html>";
    res.send(creatContent)
});

//404 not found
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, '404.html'));
    // res.send("PAGE NOT FOUND");
});

//error page
app.use((err, req, res, next) => {
    res.send("Page ran into issues");
});