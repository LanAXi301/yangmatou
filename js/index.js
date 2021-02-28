//中部轮播图
var mySwiper = new Swiper('#swiper', {
    // initialSlide: 1,
    grabCursor: true,
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项
    autoplay: {
        delay: 2000,
        disableOnInteraction: false
    },
    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
    },
    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
//中部第一部分列表显示
let productlists = document.querySelectorAll(".must-buy-list .product-list");
getmustData(0)
async function getmustData(i) {
    let data = await pAjax({
        url: './json/listdata3.json',
    });
    data = JSON.parse(data);
    console.log(data);
    // 调用数据渲染的函数
    let mustarr = data[0].products.slice(0,4);
    rander(mustarr,i);
}
getmustData1(1);
async function getmustData1(i) {
    let data = await pAjax({
        url: './json/listdata2.json',
    });
    data = JSON.parse(data);
    console.log(data);
    // 调用数据渲染的函数
    let mustarr = data[0].products.slice(0,4);
    rander(mustarr,i);
}
function rander(arr,i) {
    let str = "";
    arr.forEach(item => {
        str += `<li class="product-item" _target="product"
        sproductid="${item.pid}" subject_id="${item.sellerid}">

        <a title="${item.pname}"  target=""
            class="product-img">
            <img alt="${item.pname}" class="lazy"src="${item.pic}">
        </a>

        <a target=""
            title="${item.pname}">
            <p class="name lineClamp2">${item.pname}</p>
        </a>

        <p class="price"><em class="unit">¥</em>${item.price}</p>

        <p class="country"><span class="country-sign">
            <img src="images/Japan.png"alt="日本"></span><span class="country-name">日本</span>
        </p>
    </li>`;
    });
    productlists[i].innerHTML += str;
    str = "";
}

//中部第二部分列表显示
let cpitem = document.querySelectorAll(".category-product .cp-item .cp-item-bd");
console.log(cpitem);
for(let i= 0; i<= 2; i++){
    cpitemData(i);
}
async function cpitemData(i) {
    let data = await pAjax({
        url: './json/baglist.json',
    });
    data = JSON.parse(data);
    console.log(data);
    // 调用数据渲染的函数
    let cparr = data.slice(i*5,(i+1)*5);
    rander1(cparr,i);
}
function rander1(arr,i) {
    let str = "";
    arr.forEach(item => {
        str += `<a module_index category_id="${item.ProductId}" class="cp-product">

        <p class="cp-img"><img alt="${item.brandName}" class="lazy" src="${item.MainPic}"></p>
        
            <p class="cp-name">${item.brandName}</p>
        </a>`;
    });
    cpitem[i].innerHTML += str;
    str = "";
}
//五个轮播显示

let swiper1 = document.querySelector("#swiper1 .swiper-wrapper");
let swiper2 = document.querySelector("#swiper2 .swiper-wrapper");
let swiper3 = document.querySelector("#swiper3 .swiper-wrapper");
let swiper4 = document.querySelector("#swiper4 .swiper-wrapper");
let swiper5 = document.querySelector("#swiper5 .swiper-wrapper");
swiperData(swiper1);
swiperData(swiper2);
swiperData(swiper3);
swiperData(swiper4);
swiperData(swiper5);
async function swiperData(i) {
    let data = await pAjax({
        url: './json/baglist.json',
    });
    data = JSON.parse(data);
    // 调用数据渲染的函数
    let swiperarr = data.slice(0,8);
    console.log(swiperarr);
    rander2(swiperarr,i);
}
function rander2(arr,i) {
    let str = "";
    arr.forEach(item => {
        str +=`<div class="swiper-slide">
                    <a target="${item.brandName}" data-id="${item.ProductId}" module_index brandid="${item.ProductId}"
                    title="${item.brandName}">
                        <p class="bl-img">
                            <img alt="${item.brandName}" class="lazy"
                            src="${item.MainPic}">
                        </p>
                        <p class="bl-name">${item.brandName}</p>
                    </a>
                </div>`;
    });
    i.innerHTML = str;
    str = "";
}

for(let i= 1; i<= 5; i++){
    fiveswiper(i);
}
function fiveswiper(i){
    var swiper = new Swiper(`#swiper${i}`, {
        grabCursor: true,
        direction: 'horizontal', // 垂直切换选项
        // loop: true, // 循环模式选项
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        slidesPerView: 2,
        slidesPerColumn: 2,
        slidesPerGroup : 2,
        navigation: {
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next', 
        },
    });
}

//底部列表加载
let productlist = document.querySelector(".mod-like .product-list");
let loadingmore = document.querySelector(".loading-more");
let loadingend = document.querySelector(".loading-end");
let flag = true;
// 获取数据
getData();
async function getData() {
    let data = await pAjax({
        url: './json/GuessLike.json',
    });
    data = JSON.parse(data);
    console.log(data);
    // 调用数据渲染的函数

    str = "";
    let i = data.length;
    let arr = data.slice(0, 10);
    let j = 10;
    console.log(arr);
    rander(arr);

    function rander(arr) {
        arr.forEach(item => {
            str += `<li class="product-item">
								<a sub_module_name="product_card" title="${item.Title}${item.ProductId}" class="product-img">
									<img class="lazy" alt="${item.Title}${item.ProductId}" src="${item.MainPic}">	
								</a>
								<a target="_blank" title="${item.Title}${item.ProductId}"><p class="name lineClamp2">${item.Title}${item.ProductId}</p></a>
								<p class="price"><em class="unit">¥</em>${item.MinPrice}</p>
							</li>`;
        });
        productlist.innerHTML += str;
        str = "";
    }
    loadingmore.onclick = function () {
        if (j + 10 > i && flag) {
            flag = false;
            arr = data.slice(j, i);
            rander(arr);
            console.log(arr);
        }
        if (j + 10 <= i) {
            let o = j + 10;
            arr = data.slice(j, o);
            j = o;
            rander(arr);
            loadingmore.style.display = "none";
            loadingend.style.display = "block";
        }
    }
}