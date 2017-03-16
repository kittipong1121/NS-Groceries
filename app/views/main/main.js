var frameModule = require("ui/frame");

exports.loaded = () => {
    console.log('loaded cpmplete!!!')
}

exports.gologinpage = function() {
    var topmost = frameModule.topmost();
    topmost.navigate("views/login/login");
};