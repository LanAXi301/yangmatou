let qrcodeContainer = document.querySelector("#qrcodeContainer");
let wenxinbox = document.querySelector("#wenxinbox");
let  flag1= true;
wenxinbox.onclick = function(){
    if(flag1){
        qrcodeContainer.style.display = "block";
        flag1= false;
        return;
    }
    qrcodeContainer.style.display = "none";
    flag1 = true;
}