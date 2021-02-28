let mobile = document.querySelector("#mobile");
let password = document.querySelector("#password");
let ConfirmPwd = document.querySelector("#ConfirmPwd");
let LoginId = document.querySelector("#LoginId");
let registerbtnPhone = document.querySelector("#registerbtnPhone");
let MobileCode = document.querySelector('#MobileCode');
let IsAgreeContract = document.querySelector('#IsAgreeContract');
let verifis = document.querySelectorAll('.fill .verifi');
console.log(verifis);
let c = new GVerify({
    id: 'TencentCaptchaSlider',
    type: 'number',
    length: 4
});
//手机号
let mobilereg =/^1[34579]\d{9}$/;
let passwordreg = /[a-zA-Z0-9\W]{6,16}/;
let LoginIdreg = /\w{4,20}/;

let res1;
let res2;
let res3;
let res4;
let res5;

regtips(mobile,0);
regtips(MobileCode,1);
regtips(password,2);
regtips(ConfirmPwd,3);
regtips(LoginId,4);
function regtips(regtip,i){
    regtip.onfocus = function(){
        verifis[i].style.display = "inline-block";
        verifis[i].style.backgroundColor = "#F2F2F2";
        verifis[i].style.color = "#AE7C7D";
        verifis[i].innerHTML = regtip.getAttribute("data-msg");
    }
    regtip.onblur = function(){
        res1 = mobilereg.test(mobile.value);
        res2 = c.validate(MobileCode.value);
        res3 = passwordreg.test(password.value);
        if(ConfirmPwd.value == password.value){
            res4 = true;
        }else{
            res4 = false;
        }
        res5 = LoginIdreg.test(LoginId.value);

        if(regtip==mobile){
            if(res1){
                verifis[i].style.display = "none";
                return
            }    
        }

        if(regtip==MobileCode){
            if(res2){
                verifis[i].style.display = "none";
                return
            }
        }

        if(regtip==password){
            if(res3){
                verifis[i].style.display = "none";
                return
            }
        }

        if(regtip==ConfirmPwd){
            if(res4){
                verifis[i].style.display = "none";
                return
            }
        }

        if(regtip==LoginId){
            if(res5){
                verifis[i].style.display = "none";
                return
            }
        }
        
        if(!res1||!res2||!res3||!res4||!res5){
            verifis[i].style.backgroundColor = "#EB5E00";
            verifis[i].style.color = "#FFFFFF";
            verifis[i].innerHTML = regtip.getAttribute("placeholder");
        }
    }
}

registerbtnPhone.onclick = function () {

    console.log(res1,res2,res3,res4,res5,IsAgreeContract.checked);
    if(res1&&res2&&res3&&res4&&res5&&IsAgreeContract.checked){
        pAjax({
            type: 'post',
            url: '../api/sign.php',
            data: {
                tel: mobile.value,
                password: password.value,
                username: LoginId.value
            }
        }).then(res1 => {
            if (res1) {
                location.href = "../html/login.html";
            }
        })
        mobile.value = "";
        MobileCode.value = "";
        password.value = "";
        ConfirmPwd.value = "";
        LoginId.value = "";
        IsAgreeContract.checked = false;
    }

}
