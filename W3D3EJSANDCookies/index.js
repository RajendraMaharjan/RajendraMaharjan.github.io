const express = require("express");
const app = express();

//define path
var path = require('path');

const ejs = require('ejs');
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);

const cookieparser = require('cookie-parser');
app.use(cookieparser());

//define static folders for assest usages
app.use(express.static(path.join(__dirname)));
app.use(express.static(path.join(__dirname, "asset", "css")));
app.use(express.static(path.join(__dirname, "asset", "images")));

//Build in middleware express parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const controller = require('./controller/controller');

const options = {
    "caseSensitive": false, "strict": false
};

const router = express.Router(options);
router.get('/login', controller.login);
router.get('/authenticate', controller.authenticate);
router.get('/formview', controller.formview);
router.get('/postUser', controller.postUser);
router.get('/login', controller.login);
router.get('/login', controller.login);


//Start server at default port 80
app.listen(80);


app.get("/login", (req, res, next) => {
    res.clearCookie("key");
    res.sendFile(path.join(__dirname, "views", 'login.html'));
});

app.post("/authenticate",
    (req, res, next) => {
        // console.log(req.body.username);
        // console.log(req.cookies);
        if (req.body.username == 'admin'
            && req.body.password == 'admin') {
            res.cookie('key', req.body.username + req.body.password);
            res.redirect("formview");
        } else {
            res.clearCookie("key");
            res.redirect('back')
        }
    });

app.get("/formview",
    (req, res, next) => {
        console.log("RAJ", req.cookies.key);
        if (req.cookies.key != null
            && req.cookies.key.length > 0) {
            res.sendFile(path.join(__dirname, "views", 'UserForm.html'));
        } else {
            res.clearCookie("key");
            res.redirect("/login");
        }
    });

app.post("/postUser",
    (req, res, next) => {
        if (req.cookies.key != null
            && req.cookies.key.length > 0) {
            res.render(path.join(__dirname,
                "views", "userdetails.html"), { data: req.body });
        } else {
            res.clearCookie("key");
            res.redirect("/login");
        }
    });

//404 not found
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
    // res.send("PAGE NOT FOUND");
});

// //error page
app.use((err, req, res, next) => {
    res.send("Page ran into issue.");
});