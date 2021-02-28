function fun(res) {
    let s = res.g;
    let div  = document.querySelector('#p');
    let str = '';
    function fun1(c){
        if(c){
            c.forEach(item=>{
                str+=`
                <p class="d">${item.q}</p>`;
            })
            p.innerHTML = str;
            let d = document.querySelectorAll('.d');
            [...d].forEach(item=>{
                item.onclick=function(){
                    word.value=item.innerHTML;
                }
                item.onmouseover =function(){
                    item.classList.add("active");
                }
                item.onmouseout=()=>{
                    item.classList.remove('active');
                }
            })
        }
    }
    fun1(s); 
}
let word = document.querySelector('#word');
let box = document.querySelector('#baidubox');
word.onkeyup = function () {
    // 动态创建script标签
    p.style.display='block';
    let script = document.createElement('script');
    script.src =
        `https://www.baidu.com/sugrec?pre=1&p=3&ie=utf-8&json=1&prod=pc&from=pc_web&sugsid=33425,33516,33402,33344,31660,33285,33287,33338,26350,33264&wd=${word.value}&req=2&csor=1&pwd=zho&cb=fun`;
    document.body.appendChild(script);
    // 添加完成之后需要把script删除
    script.remove();
}
word.onfocus =function () {
    p.style.display='block';
}
box.onmouseleave=function(){
    p.style.display='none';
}