// 如果login的值为空的时候就说明没有登录，就应该去登录页面
let downtitle = document.querySelector(".nav-item .downmenu .title");
let login = getCookie('login');
if (!login) {
    localStorage.setItem('url', location.href);
    location.href = '../html/login.html';
}else{
    downtitle.innerHTML = login;
}
//退出键的显示
let dropdownlist1 = document.querySelector(".nav-item .dropdownlist");
console.log(downtitle,dropdownlist1);
let  flag= true;
downtitle.onclick = function(){
    if(flag){
        dropdownlist1.style.display = "block";
        flag = false;
        return;
    }
    dropdownlist1.style.display = "none";
    flag = true;
    
}
//退出该账号
let logoutId = document.querySelector("#logoutId");
logoutId.onclick = function(){
    setCookie("login",0,-1);
    location.href = "./login.html";
}
//右侧微信二维码的显示
class Car {
    constructor(ele, userName) {
        this.ele = document.querySelector(ele);
        this.username = userName;
        this.info = {
            number: 0,
            totalPrice: 0
        };
        console.log(this.ele);
        this.init();
    }
    init() {
        // 获取元素
        console.log(this);
        this.body = this.ele.querySelector('.product-list-wrap');
        this.species = this.ele.querySelector('.totalkind');
        // this.number = this.ele.querySelector('.number');
        this.total = this.ele.querySelector('.hookCartTotalPrice');
        this.allChecked = this.ele.querySelector('.hookCheckAllCheckbox');

        this.getData();

        //事件委托形式的绑定点击事件
        this.ele.onclick = (e) => {
            let target = e.target;
            this.id = target.getAttribute('idx');
            if (target.classList.contains('checked')) {
                // 要把当前点击选择框的这个元素的is_select改为true
                this.data.forEach(item => {
                    if (item.sellerInfoid == this.id) {
                        item.is_select = target.checked;
                    }
                })
                this.calculation();
            }
            if (target.classList.contains('allChecked')) {
                // 如果是勾上的时候就 把勾去掉，下面所有商品的勾都要去掉，表示is_select = false
                // 如果没有白勾上，就把勾勾上，下面所有的商品都勾上 表示素有数据的is_select = true
                this.data.forEach(item => {
                    item.is_select = target.checked;
                })
                this.render();
            }

            if (target.classList.contains('reduce')) {
                // 当点击减号的时候，先判断当前值为多杀，如果值为1不能在减
                // 如果值大于1 的时候
                // 发送ajax请求，更改数据中这条数据的数量
                // 当ajax请求修改成功之后 只需要再次修改一下this.data 中的数据即可

                // indexOf('数据') 
                // includes()判断数组中是否存在某个数据，存在就返回true,不存在就返回false
                // find() 去数组中找某个元素

                this.reduce();
            }

            if (target.classList.contains('add')) {
                this.add();
            }
            if (target.classList.contains('del')) {
                this.remove(this.id);
            }


            if (target.classList.contains('settlement')) {
                // 结算，把勾选的数据删除
                // 数据中is_select = true 这些数据被删除
                // 过滤is_select = true的这些数据，然后循环的去发送ajax请求

                let deleteData = this.data.filter(item => {
                    return item.is_select == true;
                })

                deleteData.forEach(item => {
                    this.remove(item.sellerInfoid)
                })
            }
        }
    }

    // 获取数据的函数
    async getData() {
        let data = await pAjax({
            url: '../api/getCarData.php',
            data: {
                userName: this.username
            }
        });
        this.data = JSON.parse(data);
        
        // 因为获取的数据 默认 is_select = '0'
        // 先处理数据的is_select 的值变为 false
        this.data.forEach(item => {
            item.is_select = false;
        })
        console.log(this.data);
        this.render()
    }

    // 渲染结构的函数
    render() {
        this.calculation();
        let str = '';
        this.data.forEach(item => {
            let total = item.goods_num * item.price*1;
            str += `<div class="media">
            <div class="product-hd hookSeller">
                <span class="checkbox-w"></span>
                <a href="javascript://#!" title="店铺正在建设中..." class="seller">
                    <img title="买手头像" class="avatar"
                        src="${item.avatarUrl}">
                    <span class="name">${item.countryName}</span>
                </a>
                <a href="javascript://#!" class="seller-site">
                    <img src="${item.pic}" width="16" height="16"
                        class="country">
                    <span class="name">${item.countryName}</span>
                </a>

                <a target="_blank" class="blackfive-icon bi-seller"></a>

                <i class="blackfive-icon bi-yhq hkViewCouponList" data-sellerid="17449457"></i>
                <!--优惠券开始-->
                <div class="floating-layer yhq-wrap hkCouponList" style="display:none">
                </div>
                <!--优惠券结束-->
            </div>
            <ul class="product-bd hookProdList">
                <li class="item" data-cartitemid="602faeee3cb8d67e35f2ee77" data-catalogid="c42851710">
                    <span class="check"><input type="checkbox" ${item.is_select ? "checked" :''} idx="${item.sellerInfoid}" class="hookCheckbox checked"></span>
                    <div class="check-product-info">

                        <!--修改属性开始-->
                        <div class="floating-layer modify-attribute-wrap hkAttrLayer" style="display:none">
                            <i class="blackfive-icon bi-arrow-top"></i>
                            <div class="fl-wrap">

                                <div class="modify-attribute">
                                    <!-- 价格 -->
                                    <dl class="mas-prop">
                                        <dt class="mas-title">价格</dt>
                                        <dd>
                                            <span class="mas-price">NaN</span>
                                        </dd>
                                        <span class="sum-num"> </span>
                                    </dl>
                                    <div class="ma-sku">
                                        <!-- 属性1 -->
                                        <!-- 属性2 -->
                                        <dl class="mas-prop">
                                            <dt class="mas-title">颜色</dt>
                                            <dd>
                                                <ul class="mas-meta mas-color">
                                                    <li>
                                                        <!-- <img src="//pc1.img.ymatou.com/G02/shangou/M04/1D/2F/CgvUA1fHkKCAIbllAATdx82qqkw724_n_w_o.JPG">黑石榴纹 -->
                                                        <i class="blackfive-icon bi-checked"></i>
                                                    </li>
                                                    <li class="selected">
                                                        <!-- <img src="//pc1.img.ymatou.com/G02/shangou/M04/1D/2F/CgvUA1fHkKCAIbllAATdx82qqkw724_n_w_o.JPG">荔枝皮纹＋蛇皮纹 -->
                                                        <i class="blackfive-icon bi-checked"></i>
                                                    </li>
                                                </ul>
                                            </dd>
                                        </dl>
                                    </div>
                                    <div class="ma-btns">
                                        <button class="btn-comfirm">确定</button><button
                                            class="btn-cancel">取消</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!--修改属性结束-->

                        <dl class="product-info">
                            <dt class="pi-img"><a target="_blank"><img
                                        src="${item.pic}"
                                        width="80" height="80"></a>


                            </dt>
                            <dd class="pi-info">
                                <p class="pi-name">
                                    <em class="pi-type">


                                        包邮包税
                                    </em>
                                    ${item.name}
                                </p>


                                <div class="pi-attribute hookAttr" ismulti="">
                                    规格:圣诞麋鹿直饮杯480ml

                                    <div class="modify-wrap" style="display: none;">
                                        <span class="modify"><i class="blackfive-icon bi-modify"></i>修改</span>
                                    </div>
                                </div>


                                <p class="pi-icon">
                                    <input type="hidden" value="10">
                                    <span>
                                        境外发货

                                    </span>
                                    <span><i class="logistics-icon li-tuihuo"></i>

                                        本土退货

                                    </span>
                                </p>
                            </dd>


                            <p class="product-time hkRestTime" id="prod602faeee3cb8d67e35f2ee77" data-time="-1">
                            </p>
                        </dl>


                        <div class="price">
                            <p class="current-price hookCurPrice">${item.price}</p>
                        </div>

                        <div class="count">
                            <div class="count-check hookPurchaseNum">
                                <span idx="${item.sellerInfoid}" class="reduce disabled" title="减少"><em></em></span><input type="text"
                                    readonly="readonly" value="${item.goods_num}"><span idx="${item.sellerInfoid}" class="add" title="增加">+</span>
                            </div>


                        </div>
                        <div class="sum hookProdTotalPrice">${total.toFixed(2)}</div>
                        <div class="operate">
                            <p idx="${item.sellerInfoid}" class="delete hookToDelete del">删除</p>
                            <!-- <p class="find-similar hookFindSimilar" id="p5833475">找相似<i class="blackfive-icon bi-find-similar"></i></p> -->
                        </div>
                    </div>
                    
                </li>
            </ul>
        </div>`;
            
        });
        this.body.innerHTML = str;
    }

    // 计算所选择的商品的总价格 和 数量
    calculation() {
        // 给每一个商品数据都添加一个is_select属性，当属性值为true的时候那么就说明这个商品被选择，如果is_select 的值为false那么就说明没有选择

        // 过滤出所选的商品
        this.selectData = this.data.filter(item => {
            return item.is_select == true;
        });

        // 计算所选商品的数量 和价格
        this.info.number = this.selectData.reduce((pre, cur) => {
            return pre + cur.goods_num * 1;
        }, 0);

        this.info.totalPrice = this.selectData.reduce((pre, cur) => {
            return pre + cur.goods_num * cur.price
        }, 0).toFixed(2)

        // 判断是否全选 当所有数据中的is_select = true 的时候表示所有的数据都白勾上
        let res = this.data.every(item => {
            return item.is_select == true;
        })

        // 把商品的种类 和所选商品的数量 和价格渲染到结构
        this.species.innerHTML = this.data.length;
        // this.number.innerHTML = this.info.number;
        this.total.innerHTML = this.info.totalPrice;
        this.allChecked.checked = res;
    }

    // 减数量的函数
    reduce() {
        let num = this.data.find(item => {
            return item.sellerInfoid == this.id;
        }).goods_num;

        if (num <= 1) {
            alert('商品数量最小为1')
            return
        }
        //先修改数据库中数据，当数据库中的数据修改成功之后在修改 this.data中数据 
        pAjax({
            url: '../api/updataCar.php',
            data: {
                'sellerInfoid': this.id,
                'goods_num': --num,
                'username': this.username
            }
        }).then(res => {
            res = JSON.parse(res);
            if (res.code) {
                this.data.forEach(item => {
                    if (item.sellerInfoid == this.id) {
                        item.goods_num = num;
                        this.render();
                    }
                })
            }
        })
    }

    // 加数量的函数
    add() {
        let num = this.data.find(item => {
            return item.sellerInfoid == this.id;
        }).goods_num;
        pAjax({
            url: '../api/updataCar.php',
            data: {
                'sellerInfoid': this.id,
                'goods_num': ++num,
                'username': this.username
            }
        }).then(res => {
            res = JSON.parse(res);
            if (res.code) {
                this.data.forEach(item => {
                    if (item.sellerInfoid == this.id) {
                        item.goods_num = num;
                        this.render();
                    }
                })
            }
        })
    }

    // 删除的函数
    remove(id) {
        // 发送ajax请求 需要传递 用户和sellerInfoid过去
        pAjax({
            url: '../api/deleteCar.php',
            data: {
                'username': this.username,
                'sellerInfoid': id
            }
        }).then(res => {
            res = JSON.parse(res);
            if (res.code) {
                // 把this.data中的这条数据删除 然后在渲染 this.render();
                this.data = this.data.filter(item => {
                    return item.sellerInfoid != id;
                })
                this.render();
            }
        })
    }
}
console.log(login);
new Car(".shopping-cart-wrap .sw-bd", login);

//猜你喜欢部分
let productlist = document.querySelector("#glProducts .product-list");
pAjax({
    url: '../api/detailList.php',
}).then((res) => {
    res = JSON.parse(res);
    console.log(res.detail);
    rander(res.detail);
})
function rander(arr){
    let str = "";
    arr.forEach(item => {
        str+=`<li class="product-item">
                <a class="product-img" title="${item.name}">
                    <img
                        src="${item.pic}">

                    <i class="product-icon pi-tuan"></i>
                </a>
                <p class="name" title="${item.name}">${item.name}</p>
                <p class="price">¥ ${item.price}</p>
            </li>`;
    });
    productlist.innerHTML = str;
}
