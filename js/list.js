let productlist = document.querySelector(".product-list");
let page = document.querySelector('.page');

let defaultInfo = {
    len: 10,
    num: 1
}
pAjax({
    url: '../api/getlistdata.php',
    data: {
        start: defaultInfo.num,
        len: defaultInfo.len
    }
}).then((res) => {
    res = JSON.parse(res);
    new Pagination(page, {
        pageInfo: {
            pagenum: 1,
            pagesize: defaultInfo.len,
            total: res.total,
            totalpage: Math.ceil(res.total / defaultInfo.len)
        },
        textInfo: {
            first: '首页',
            prev: '上一页',
            list: '',
            next: '下一页',
            last: '最后一页'
        },
        change: function (num) {
            defaultInfo.num = num;
            getData();
            scrollTo(0, 0)
        }
    });
})

async function getData() {
    let res = await pAjax({
        url: '../api/getlistdata.php',
        data: {
            start: defaultInfo.num,
            len: defaultInfo.len
        }
    });
    res = JSON.parse(res);
    console.log(res);
    renderHtml(res.list);
}

function renderHtml(data) {
    let str = '';

    data.forEach((item, index) => {
        str += ` <li class="product-item item-failed" sellerInfoidid= "${item.sellerInfoid}">
        <a href="./detail.html?sellerInfoid=${item.sellerInfoid}" class="product-img" title="${item.name}">
            <img class="lazy" alt="${item.name}" src="${item.pic}">
                <i class="product-icon pi-tuan"></i>
        </a>
        <p class="price"><em class="unit">¥</em>${item.price}
            <span class="type">
                            <em>包邮包税</em>
                <!--<em class="sales">买手促销</em>-->
                        </span>
        </p>
        <p class="name lineClamp2"><a title="${item.name}">${item.name}</a></p>
        <div class="seller-site">
            <a class="seller" title="ELLUI_SEOUL" target="_blank">
                            <span class="avatar">
                            <img src="${item.avatarUrl}">
                                <!--超级买手-->
                            </span>
                <span class="txt">ELLUI_SEOUL</span>
            </a>

            <div class="seller-info-wrap">
                <i class="home-icon hi-arrow-small"></i>
                <div class="siw-hd">
                    <!--超级买手-->
                </div>
                <div class="siw-bd">
                                <span class="siw-l">买家评分<br>
                                        <em class="score">4.8</em>
                                </span>
                    <ul class="siw-r">
                        <li class="siw-item">客户服务
                                <em class="score">4.5</em>
                        </li>
                        <li class="siw-item">物流服务
                                <em class="score">4.9</em>
                        </li>
                        <li class="siw-item">综合评分
                                <em class="low-score">4.7</em>
                                <span class="tips-low-score">
                                                    <em class="arrow-low-left"></em>
                                                    <em class="txt">低于平均6.1%</em>
                                                </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="site">
            <span class="avatar"><img src="${item.countryIconUrl}"></span>
            <span class="txt">${item.countryName}</span>
        </div>
    </li>`;
    })

    productlist.innerHTML = str;
}