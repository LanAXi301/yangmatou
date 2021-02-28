let loginBtn = document.querySelector('#loginBtn');
let vc = document.querySelector('#vc');
let jinggao = document.querySelector(".jinggao");
let errorMsgOut = document.querySelector("#errorMsgOut");
let LoginName = document.querySelector("#LoginName");
let PassWord= document.querySelector("#PassWord");
let IsRemember= document.querySelector("#IsRemember");
let c = new GVerify({
    id: 'TencentCaptchaSlider',
    type: 'number',
    length: 4
});
loginBtn.onclick = function () {
    
    pAjax({
        type: 'post',
        url: '../api/login.php',
        data: {
            username: LoginName.value,
            password: PassWord.value,
        }
    }).then(res => {
        
        res = JSON.parse(res);
        // console.log(res);
        let res3 = c.validate(vc.value);
        if(res.code == 0){
            errorMsgOut.style.display = "block";
            jinggao.innerHTML = "用户名或者密码错误";
            return;
        }else if(vc.value.length!=4){
            errorMsgOut.style.display = "block";
            jinggao.innerHTML = "验证码长度不正确";
            return;
        }else if(!res3 && vc.value.length==4){
            errorMsgOut.style.display = "block";
            jinggao.innerHTML = "验证码错误";
            return;
        }
        let url = localStorage.getItem('url');
        console.log(res.code,res3,IsRemember.checked);
        if (res.code == 1 && res3 && (!IsRemember.checked)) {
            console.log("登陆成功");
            setCookie('login',LoginName.value);
            // 跳转页面 如果从购物车过来的时候登录成功去购物车页面
            // 否则就去到首页
            if (url) {
                location.href = url;
                // 登录成功的时候把url的这个localstorage值清除
                localStorage.removeItem('url');
            } else {
                location.href = '../index.html';
            }
            LoginName.value="";
            PassWord.value="";
            vc.value="";
        }
        if (res.code == 1 && res3 && IsRemember.checked) {
            console.log("七天免登陆");
            // // 登录成功存储 登录的状态
            let delay = 7*24*60*60;
            console.log(delay);
            // let login = "1";
            setCookie('login',LoginName.value,delay);

            // 跳转页面 如果从购物车过来的时候登录成功去购物车页面
            // 否则就去到首页
            if (url) {
                location.href = url;
                // 登录成功的时候把url的这个localstorage值清除
                localStorage.removeItem('url');
            } else {
                location.href = '../index.html';
            }
            LoginName.value="";
            PassWord.value="";
            vc.value="";
            IsRemember.checked = false;
        }
    })
}


