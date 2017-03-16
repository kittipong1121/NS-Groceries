const Observable = require("data/observable").Observable;
const frameModule = require("ui/frame");
// const fetch
let page;

//------------ Set ตัวแปร Login เพื่อใช้เก็บค่าจาก Page --------
let login = new Observable({
    email : '',
    pass :'',
    remember: true,
})
//--------------------------------------------------------

exports.loaded = (args) => {
    // console.log('loaded cpmplete!!!')
    page = args.object;
    page.bindingContext = login
}

//------------- Show Data ที่ console เพื่อตรวจสอบ-------------
exports.chklogin = () => {
    // console.log(login.email)
    // console.log(login.pass)
    fetch('', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            email: login.email,
            pass: login.pass,
        })
    }).then((res) => {
        console.log('ok..')
        }).catch((err) => {
            console.dump(err)
            })
    console.log('Test')
};
//---------------------------------------------------------

//-------------Link 2 register page --------------------
exports.goregister = function() {
    const topmost = frameModule.topmost();
    topmost.navigate("views/register/register");
};
//------------------------------------------------------
