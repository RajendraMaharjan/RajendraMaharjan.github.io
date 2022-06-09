exports.login = (req, res, next) => {
    res.clearCookie("key");
    res.sendFile(path.join(__dirname, "views", 'login.html'));
}

exports.authenticate = (req, res, next) => {
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
}

exports.formview = (req, res, next) => {
    console.log("RAJ", req.cookies.key);
    if (req.cookies.key != null
        && req.cookies.key.length > 0) {
        res.sendFile(path.join(__dirname, "views", 'UserForm.html'));
    } else {
        res.clearCookie("key");
        res.redirect("/login");
    }
}


exports.postUser = (req, res, next) => {
    if (req.cookies.key != null
        && req.cookies.key.length > 0) {
        res.render(path.join(__dirname,
            "views", "userdetails.html"), { data: req.body });
    } else {
        res.clearCookie("key");
        res.redirect("/login");
    }
}