var request = require("request-promise");
var util = require("util");


//get all notifications
exports.notification_list = function (req, res, next) {
    var url = global.apiBaseUrl + 'notifications';
    var options = {
        method: 'get',
        json: true,
        url: url,
        headers: {"Authorization": req.session.user.token}
    }
    request(options).then((data) => {
        console.log("data***************************");
        console.log((util.inspect(data, {depth: null})));
        console.log(typeof data);
        res.send(data);

    }, (error) => {
        if (error.error) {
            error.message = error.error.message;
        }
        req.flash("error", error.message);

        res.render('manageError', {manage_request: "active", message: req.flash()});
    })
            .catch((error) => {
                if (error.error) {
                    error.message = error.error.message;
                }
                req.flash("error", error.message);

                res.render('manageError', {manage_request: "active", message: req.flash()});
            })
}


//handover accept in notification
exports.notification_handover_accept = function (req, res, next) {
    console.log("-----------------------------------------------------------------")
    console.log(req.body);

    var url = global.apiBaseUrl + 'request/handover-action';
    var options = {
        method: 'put',
        json: true,
        url: url,
        body: req.body,
        headers: {"Authorization": req.session.user.token}
    }
    request(options).then((data) => {
        console.log("data***************************");
        console.log((util.inspect(data, {depth: null})));
        console.log(typeof data);
        req.flash("success", "handover request is accepted");
        res.send(data);

    }, (error) => {

        if (error.error) {
            error.message = error.error.message;
        }
        req.flash("error", error.message);

        res.render('manageError', {manage_request: "active", message: req.flash()});
    })
            .catch((error) => {
                if (error.error) {
                    error.message = error.error.message;
                }
                req.flash("error", error.message);

                res.render('manageError', {manage_request: "active", message: req.flash()});
            })

}