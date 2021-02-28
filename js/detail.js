// 打开详情页的时候先查看是否有携带id参数
// 如果没有id参数的时候 跳转到列表 
// 如果有id参数的时候 根据id去获取对象的数据 渲染

// http://gz2008.com/day06_code/project/html/detail.html?id=4
let reg = /id=(\d+)/;
if (!reg.test(location.search)) {
    location.href = '../html/list.html'
}

//相关推荐

let sellerInfoid = reg.exec(location.search)[1];
let productdetail = document.querySelector('.product-detail-wrap');
// 根据sellerInfoid获取数据
pAjax({
    url: '../api/getDetail.php',
    data: {
        "sellerInfoid": sellerInfoid,
    }
}).then(res => {
    res = JSON.parse(res);
    console.log(res.detail);
    renderHtml(res.detail)
})

let addcar;

function renderHtml(data) {
    productdetail.innerHTML = `<div class="global-crumbs">
        <a href="../index.html">首页</a><em class="split">&gt;</em>
        <!--<a href="/"></a><em class="split">&gt;</em>-->
        <a >香水彩妆</a><em class="split">&gt;</em>
        <a >唇膏/唇彩/唇笔</a><em class="split">&gt;</em>
        <!--<a href="/"></a><em class="split">&gt;</em>-->
        <span class="active">${data.name}</span>
    </div>
    <div class="pdw-hd">
        <div class="pro-gallery preview">
            <div id="vertical" class="bigImg pro-booth">
                <i class="blackfive-icon bi-zoom"></i>
                <img src="${data.pic}" alt="${data.name}"
                    title="${data.name}" id="midimg">
                <div style="display:none;" id="winSelector"></div>
            </div>
            <!--bigImg end-->
            <div class="smallImg thumb-wrap">
                <div class="scrollbutton smallImgUp disabled"><i class="blackfive-icon bi-prev"></i></div>
                <div id="imageMenu">
                    <ul id = "imageslist">
                        <li><a href="javascript:;"><img midelImg="${data.pic}" bigImg="${data.pic}" title="${data.name}"
                                    src="${data.pic}"></a></li>
                        <li><a href="javascript:;"><img midelImg="../images/CgzUBl3Oyz-AHohwAAGdI_KMNlk937_1_1_n_w_l.jpeg" bigImg="../images/CgzUBl3Oyz-AHohwAAGdI_KMNlk937_1_1_n_w_l.jpeg" title="${data.name}"
                                    src="../images/CgzUBl3Oyz-AHohwAAGdI_KMNlk937_1_1_n_w_l.jpeg"></a></li>
                        <li><a href="javascript:;"><img midelImg="${data.pic}" bigImg="${data.pic}" title="${data.name}"
                                    src="${data.pic}"></a></li>
                        <li><a href="javascript:;"><img midelImg="${data.pic}" bigImg="${data.pic}" title="${data.name}"
                                    src="${data.pic}"></a></li>
                        <li><a href="javascript:;"><img midelImg="${data.pic}" bigImg="${data.pic}" title="${data.name}"
                                    src="${data.pic}"></a></li>
                        <li><a href="javascript:;"><img midelImg="${data.pic}" bigImg="${data.pic}" title="${data.name}"
                                    src="${data.pic}"></a></li>
                        <li><a href="javascript:;"><img midelImg="${data.pic}" bigImg="${data.pic}" title="${data.name}"
                                    src="${data.pic}"></a></li>
                        <li><a href="javascript:;"><img midelImg="${data.pic}" bigImg="${data.pic}" title="${data.name}"
                                    src="${data.pic}"></a></li>
                        <li><a href="javascript:;"><img midelImg="${data.pic}" bigImg="${data.pic}" title="${data.name}"
                                    src="${data.pic}"></a></li>
                        <li><a href="javascript:;"><img midelImg="${data.pic}" bigImg="${data.pic}" title="${data.name}"
                                    src="${data.pic}"></a></li>
                        <li><a href="javascript:;"><img midelImg="${data.pic}" bigImg="${data.pic}" title="${data.name}"
                                    src="${data.pic}"></a></li>
                        <li><a href="javascript:;"><img midelImg="${data.pic}" bigImg="${data.pic}" title="${data.name}"
                                    src="${data.pic}"></a></li>
                    </ul>
                </div>
                <div class="scrollbutton smallImgDown"><i class="blackfive-icon bi-next"></i></div>
            </div>
            <!--smallImg end-->
            <div id="bigView" style="display:block;"><img alt src></div>
        </div>
        <!--商品基本信息-->
        <div class="pro-property">
            <div class="pro-hd">
                <input type="hidden" id="${data.id}" value="19d85c93-2231-4677-a0f9-85fbdfc99a73"
                    key_id="19d85c93-2231-4677-a0f9-85${data.name}</h3>
            </div>
            <div class="pro-bd">
                <div class="activity-panel">
                    <div class="ymt-activity">限时福利价<span class="tips">此商品正在参加限时福利价，距结束<em class="time" id="time"
                                data-enddate="2021/02/25 23:59:59"></em></span></div>

                </div>

                <div class="price-panel">
                    <i id="priceinfo" data-ismember="[object Object]">
                        <dl>
                            <dt>价格：</dt>
                            <dd data-pricetype="1" id="p_price">
                                <span class="original-price">
                                    ¥${data.price}
                                </span>
                                <!--直播商品-->
                            </dd>
                        </dl>
                        <dl>
                            <dt>促销价：</dt>
                            <dd id="p_saleprice" data-pricetype="1">
                                <span class="promo-price">
                                    ¥${data.price}&sim;¥${data.price}
                                </span>
                                <span id="price-btn" class="price-type
                            activity"> 活动价
                                </span>
                            </dd>
                        </dl>
                    </i>
                    <dl>
                        <dt>促销：</dt>
                        <dd class="full-reduction">
                            <span>满减</span>同一商品，满2件减2元
                        </dd>
                    </dl>
                    <dl id="couponlist-module" style="display: none;" module_name="coupon">
                        <dt>领券：</dt>
                        <dd class="coupon" id="coupon">
                        </dd>
                        <div id="couponlist" class="floating-layer yhq-wrap" style="display:none">
                        </div>
                    </dl>
                </div>

                <div class="delivery-panel">
                    <dl>
                        <dt>配送方式：</dt>
                        <dd class="xlobl-tips">
                            境外发货








                        </dd>
                    </dl>
                    <dl>
                        <dt>运费：</dt>
                        <dd>买手承担</dd>
                    </dl>

                    <dl>
                        <dt>关税：</dt>
                        <dd>买手承担</dd>
                    </dl>
                </div>

                <div class="select-panel" id="cataloglist">
                    <div class="select-property">
                        <div class="select-property-error" style="display: none">
                            <div class="property-error-wrap">
                                <i class="blackfive-icon bi-wraning"></i>哈尼，规格还没选好呢～
                            </div>
                        </div>
                        <div class="select-property-item">

                            <dl class="cata_item">
                                <dt>颜色分类：</dt>
                                <dd>
                                    <ul class="property-list" id="color_list">
                                        <li class="item" data-catalogids="${data.id}" data-presale="false">
                                            <img title="${data.name}"
                                                src="${data.pic}">
                                            【2020新款】红管208
                                            <i class="blackfive-icon bi-checked"></i>
                                        </li>
                                        <li class="item" data-catalogids="${data.id}" data-presale="false">
                                            <img title="${data.name}"
                                                src="${data.pic}">
                                            新色号209
                                            <i class="blackfive-icon bi-checked"></i>
                                        </li>
                                        <li class="item" data-catalogids="${data.id}" data-presale="false">
                                            <img title="${data.name}"
                                                src="${data.pic}">
                                            新色号红管415
                                            <i class="blackfive-icon bi-checked"></i>
                                        </li>
                                        <li class="item" data-catalogids="${data.id}" data-presale="false">
                                            <img title="${data.name}"
                                                src="${data.pic}">
                                            热销色-红管205
                                            <i class="blackfive-icon bi-checked"></i>
                                        </li>
                                        <li class="item" data-catalogids="${data.id}" data-presale="false">
                                            <img title="${data.name}"
                                                src="${data.pic}">
                                            热销色红管405番茄色
                                            <i class="blackfive-icon bi-checked"></i>
                                        </li>
                                        <li class="item" data-catalogids="${data.id}" data-presale="false">
                                            <img title="${data.name}"
                                                src="${data.pic}">
                                            红管200红棕色
                                            <i class="blackfive-icon bi-checked"></i>
                                        </li>
                                        <li class="item" data-catalogids="${data.id}" data-presale="false">
                                            <img title="${data.name}"
                                                src="${data.pic}">
                                            红管201姨妈色
                                            <i class="blackfive-icon bi-checked"></i>
                                        </li>
                                        <li class="item" data-catalogids="${data.id}" data-presale="false">
                                            <img title="${data.name}"
                                                src="${data.pic}"> 红管206
                                            <i class="blackfive-icon bi-checked"></i>
                                        </li>
                                        <li class="item" data-catalogids="${data.id}"
                                            data-presale="false">
                                            <img title="${data.name}"
                                                src="${data.pic}"> 红管400
                                            <i class="blackfive-icon bi-checked"></i>
                                        </li>
                                        <li class="item" data-catalogids="${data.id}"
                                            data-presale="false">
                                            <img title="${data.name}"
                                                src="${data.pic}">
                                            红管401
                                            <i class="blackfive-icon bi-checked"></i>
                                        </li>
                                        <li class="item" data-catalogids="${data.id}"
                                            data-presale="false">
                                            <img title="${data.name}"
                                                src="${data.pic}"> 红管402
                                            <i class="blackfive-icon bi-checked"></i>
                                        </li>
                                        <li class="item" data-catalogids="${data.id}" data-presale="false">
                                            <img title="${data.name}"
                                                src="${data.pic}">
                                            鎏金红管405G
                                            <i class="blackfive-icon bi-checked"></i>
                                        </li>
                                        <li class="item" data-catalogids="${data.id}" data-presale="false">
                                            <img title="${data.name}"
                                                src="${data.pic}">
                                            阿玛尼红400G鎏金红管
                                            <i class="blackfive-icon bi-checked"></i>
                                        </li>
                                        <li class="item" data-catalogids="${data.id}" data-presale="false">
                                            <img title="${data.name}"
                                                src="${data.pic}"> 黑管302
                                            <i class="blackfive-icon bi-checked"></i>
                                        </li>
                                        <li class="item" data-catalogids="${data.id}" data-presale="false">
                                            <img title="${data.name}"
                                                src="${data.pic}"> 黑管400
                                            <i class="blackfive-icon bi-checked"></i>
                                        </li>
                                        <li class="item" data-catalogids="${data.id}"
                                            data-presale="false">
                                            <img title="${data.name}"
                                                src="${data.pic}"> 黑管402
                                            <i class="blackfive-icon bi-checked"></i>
                                        </li>
                                        <li class="item" data-catalogids="${data.id}" data-presale="false">
                                            <img title="${data.name}"
                                                src="${data.pic}">
                                            黑管500
                                            <i class="blackfive-icon bi-checked"></i>
                                        </li>
                                        <li class="item" data-catalogids="${data.id}" data-presale="false">
                                            <img title="${data.name}"
                                                src="${data.pic}"> 黑管501
                                            <i class="blackfive-icon bi-checked"></i>
                                        </li>
                                        <li class="item" data-catalogids="c${data.id}" data-presale="false">
                                            <img title="${data.name}"
                                                src="${data.pic}">
                                            黑管502
                                            <i class="blackfive-icon bi-checked"></i>
                                        </li>
                                    </ul>
                                </dd>
                            </dl>

                            <p class="pre-msg" style="display: none" id="pre_sale">选择预定商品后，买手将尽快为你采购，请您耐心等待!</p>

                        </div>
                    </div>

                    <dl>
                        <dt>数量：</dt>
                        <dd>
                            <span class="amount-widget">
                                <span class="numbutton reduce disabled"><i
                                        class="blackfive-icon bi-reduce"></i></span>
                                <input type="text" value="1" class="amount">
                                <span class="numbutton add"><i class="blackfive-icon bi-add"></i></span>
                            </span>
                            <span class="amount-unit">件
                            </span>
                            <span class="stock" id="stock" data-stock="321">剩余库存：<i id="s_content">321</i>件<i
                                    class="weight"></i></span>
                        </dd>
                    </dl>

                    <div class="sku-msg" style="display: none" id="over_stock"><i
                            class="blackfive-icon bi-wraning"></i><em>哈尼，您购买的件数已超过库存数量！</em></div>
                    <!--提交按钮-->
                    <div data-catalogid id="action-panel" class="action-panel
                ">
                        <div class="btn-sku btn-buy" id="quick_Buy" module_name="buy" module_index
                            key_id="19d85c93-2231-4677-a0f9-85fbdfc99a73">
                            <span class="title">立即购买</span>
                            <span class="code" id="qrcode">
                                <i class="blackfive-icon bi-code"></i>
                                <em>扫码</em>
                            </span>
                            <div id="qrcode-dialog">
                                <img id="qrcodeimg" src="../images/qrcode.png">
                                <p>使用手机微信或者其他软件扫码购买</p>
                            </div>

                        </div>
                        <div class="btn-sku btn-basket" id="add_Cart" module_name="add_shoppingcart" module_index
                            key_id="19d85c93-2231-4677-a0f9-85fbdfc99a73"><i
                                class="blackfive-icon bi-basket"></i>加入购物车</div>

                        <span class="collect store" id="collect-module" module_name="collect" module_index
                            key_id="19d85c93-2231-4677-a0f9-85fbdfc99a73">
                            <i class="blackfive-icon bi-collect"></i><em class="storecontent">收藏商品</em>
                        </span>
                    </div>
                </div>


            </div>
            <div class="pro-ft">
                <dl>
                    <dt>支付：</dt>
                    <dd>
                        <span class="ft-item"><i class="logistics-icon li-zhifubao"></i>支付宝支付</span>
                        <span class="ft-item"><i class="logistics-icon li-weixin"></i>微信支付</span>
                    </dd>
                </dl>
                <dl>
                    <dt>服务：</dt>
                    <dd>
                        <span class="ft-item"><i class="logistics-icon li-quality"></i>假一赔三</span>
                        <span class="ft-item"><i class="logistics-icon li-tuihuo"></i>本土退货</span>
                        <span class="ft-item">
                            <i class="logistics-icon li-seven li-diabled"></i>
                            不支持七天无理由退货
                        </span>
                        <span class="ft-item">
                        </span>
                    </dd>
                </dl>
            </div>
        </div>

        <!--买手信息-->
        <div class="seller-wrap">
            <div class="seller-hd">
                <a class="photo">
                    <img id="user-logo" title="ELLUI_SEOUL"
                        src="../images/CgvUA1iBwsWAE-sJAABbZoj_tUM363_1_1_o.jpeg">
                    <p class="name" id="seller_name">ELLUI_SEOUL</p>
                </a>
                <a class="name">

                </a>
                <p class="dsr">
                    专业买手
                    <span class="high-score">4.7</span>
                </p>
                <p class="address"><i class="seller-icon si-site"></i>韩国</p>
                <p class="fans">粉丝<em class="number">104346</em></p>
                <p class="info"></p>
            </div>
            <div class="seller-bd">
                <div class="high-data">
                    <div class="total-score">
                        <p class="title">综合评分</p>
                        <p class="high-score">4.7</p>
                        <p class="desc">
                            <i style="color:#cc3333">(高平均6.1%)</i>
                        </p>
                    </div>
                    <div class="item-score">
                        <p>物流服务<span class="high-score">4.9</span></p>
                        <p>客户服务<span class="high-score">4.5</span></p>
                        <p>买家评分<span class="high-score">4.8</span></p>
                    </div>
                </div>
            </div>
            <div class="seller-ft" id="seller_id" data-sellername="ELLUI_SEOUL" data-sellerid="11539183">
                <a href="javascript:void(0)" id="seller-btn" class="seller-btn" module_name="contact_seller"
                    module_index sellerid="11539183" key_id="19d85c93-2231-4677-a0f9-85fbdfc99a73"><i
                        class="seller-icon si-contact"></i>联系买手</a>
                <a href="javascript:void(0)" class="seller-btn concern" id="concern-module" module_name="follower"
                    module_index sellerid="11539183" key_id="19d85c93-2231-4677-a0f9-85fbdfc99a73"><i
                        class="seller-icon si-attention"></i><em class="attention-text">关注</em></a>
            </div>
        </div>
    </div>
    <div class="pdw-bd">
        <!--左侧商品推荐+热销商品-->
        <div class="pdw-l">
            <div class="mod-products hot-products" id="sellerwell-module" module_name="seller_product">
                <h3 class="product-title">买手热销
                    <span class="refresh hotref"><i class="blackfive-icon bi-refresh"
                            id="sellerwell-refresh"></i>换一批</span>
                </h3>
                <ul class="product-list" id="hot-products">

                </ul>

            </div>
            <div class="mod-products recommend-product" id="recommend-module" module_name="relatedproduct">
                <h3 class="product-title">相关推荐<span class="refresh recommendref" id="recommend-refresh">
                        <i class="blackfive-icon bi-refresh"></i>换一批</span>
                </h3>
                <ul class="product-list" id="recommend-products">

                </ul>

            </div>
        </div>
        <div class="pdw-r">
            <!--右侧商品详情-->
            <div class="mod-tab-box">
                <div class="mtb-hd">
                    <span class="active"><em class="line-top"></em>商品详情</span>
                </div>
                <div class="mtb-bd">
                <div class="pdw-detail item" id="productdetail-module"><div class="detail-title">
                <p class="detail-info">商品参数</p>
            </div>
            <pre class="detail-info-content"></pre>
            <ul class="detail-params">
                <li class="product-param"><i>适用肤质：</i>敏感性</li>
                <li class="product-param"><i>原产地：</i>${data.countryName}</li>
                <li class="product-param"><i>护肤功效：</i>保湿,清凉舒爽,滋润,舒缓肌肤,清洁毛孔,保湿补水,舒缓/抗敏感</li>
                <li class="product-param"><i>洁面产品类型：</i>其他</li>
                <li class="product-param"><i>规格类型：</i>正常规格</li>
                <li class="product-param"><i>保质期：</i>三年</li>
                <li class="product-param"><i>容量：</i>150ml+150ml+120ml+40</li>
            </ul>
            <ul class="detail-img">
            </ul>
            <div class="detail-title">
                <p class="detail-info">商品介绍</p>
            </div>
            <pre class="detail-info-content">${data.name}</pre>
            <ul class="detail-img">
                <li><img class="lazy" src="${data.pic}"></li>
                <li><img class="lazy" src="${data.pic}"></li>
                <li><img class="lazy" src="${data.pic}"></li>
                <li><img class="lazy" src="${data.pic}"></li>
            </ul>
            <div class="detail-title">
                <p class="detail-info">买手介绍</p>
            </div>
            <pre class="detail-info-content">感谢大家的支持！</pre>
            <ul class="detail-img">
                <li><img class="lazy" src="http://staticontent.ymatou.com/app/desc/pricedesc.png"></li>
            </ul>
            </div>
                    <div class="comments item" style="display: none">
                        <a>
                            <p class="app-tips">使用洋码头App, 向买手提出你的疑问吧~</p>
                        </a>
                        <ul class="comments-list" id="askseller-module">
                        </ul>
                    </div>
                </div>
            </div>
            <!--右侧商品详情end-->

            <!--保税区+海外直邮 发货流程-->
            <div class="mod-despatch" id="delivery-module">
                <div class="despatch-item">
                    <div class="customer-info">
                        <h3 class="fi-title">《消费者告知书》</h3>
                        <p class="c-user">尊敬的洋码头客户：</p>
                        <p class="c-hi">您好！<br>
                            请在提交订单前阅读以下洋码头平台鉴别服务消费者下单使用须知（下称“规则”），并确保您在完全知情并接受本规则的情况下提交订单购买商品。如果您继续提交订单，则洋码头（下称“平台”）将默认为您认可并同意本规则内的全部内容。如果您不同意或不理解本规则内容，应停止提交订单。
                        </p>
                        <p class="fi-info">1. 交易模式</p>
                        <p class="fi-info">1.1 经平台鉴别的订单交易流程如下： </p>
                        <p class="fi-info">1.1.1 用户下单：买手将订单商品寄送到洋码头</p>
                        <p class="fi-info">1.1.2 平台鉴别：洋码头以多道鉴别查验工序完成判断</p>
                        <p class="fi-info">1.1.3 鉴后发货：洋码头专属防伪包装后寄送到消费者手中</p>
                        <p class="fi-info">1.2 消费者委托洋码头查验商品，并同意在商品通过检验后即可将消费者支付的款项支付给买手。</p>
                        <p class="fi-info">1.3 如果商品鉴别不通过，或因瑕疵致用户确认拒绝收货之商品，将享有极速退款服务，通常于1-3个工作日内原路返回您的原始支付账户。</p>
                        <p class="fi-info">1.4
                            消费者下单后选择及勾选同意鉴别服务即默认许可平台鉴别中心会对美容个护类商品进行拆封鉴别，可能导致商品保质期于拆封后影响原期限。鉴别通过后的商品会重新包装发货。如同笔订单内购买多件同规格大小颜色之同款商品，则取一抽检查验作为判断结果。
                        </p>
                        <p class="fi-info">1.5 消费者下单后选择及勾选同意鉴别服务即默认认可平台鉴别结果，并此已鉴别订单将不适用于平台假一赔三之赔付条款。</p>
                        <p class="fi-info">2. 服务范围</p>
                        <p class="fi-info">2.1 如订单内商品符合以下范畴，则成立订单且经用户勾选同意后，默认查验以下情况的订单，包括但不限于：</p>
                        <p class="fi-info">2.1.1 商品详情页上系统显示”奢品护航 ”字样</p>
                        <p class="fi-info">2.1.2 精选买手、奢品护航签约买手所属商品</p>
                        <p class="fi-info">2.1.3 洋码头平台自定义之疑似高风险监控订单</p>
                        <p class="fi-info">3. 发货时效</p>
                        <p class="fi-info">3.1
                            买手于订单支付后48小时内发货，因国际物流的特殊性，如自海外配送之商品进入国内需经过海关查验，具体国际段物流运输与清关时间需根据实际情况确认。洋码头平台鉴别中心收货后查验并判断商品是否符合发货要求，如商品查验通过，则平台将在查验通过后48小时内将商品寄发买家。如因个人跨境额度限制导致商品清关失败且无法清关发货，则平台有权取消订单。
                        </p>
                        <p class="fi-info">3.2
                            如遇节假日、平台大促活动或其他不可抗力因素（如自然灾害、政府行为、社会异常事件等）导致的可能影响买手或洋码头平台鉴别中心发货的异常情况，具体发货时效请以商品详情页标注或平台公告为准。
                        </p>
                        <p class="fi-info">3.3 如因商品的特殊性致买手无法如期发货，以买手商品图文详情页标注为准。</p>
                        <p class="fi-info">4. 商品查验</p>
                        <p class="fi-info">4.1
                            如平台在查验商品时判定不通过，消费者同意授权平台于保护消费者利益之情况下代理关闭交易订单，并将商品退还买手，将交易货款退还消费者。平台将依照买手违规处罚积分管理规则严格处分买手。查验不通过的情况包括但不限于：
                        </p>
                        <p class="fi-info">4.1.1 商品出现明显氧化、开胶开裂、污渍划痕、磨损裂痕、染色、破损、磕碰、缺零配件等质量问题；</p>
                        <p class="fi-info">4.1.2 商品实物名称、款号、色号、尺码等与订单信息不相符；</p>
                        <p class="fi-info">4.1.3 商品与外盒（外包装）、配件不配套；</p>
                        <p class="fi-info">4.1.4 商品存在功能调试异常、失灵之情形；</p>
                        <p class="fi-info">4.1.5 商品标榜全新却存在明显使用过的痕迹；</p>
                        <p class="fi-info">4.1.6 商品明显疑似不符合商品原厂设计工艺。</p>
                        <p class="fi-info">4.2
                            如果因商品原生产制造工艺技术导致出现包括但不限于溢胶、自然褶皱、非完全对称、线头、折痕（可复原）、外包装轻微破损等情况，仅存在上述问题属于正常现象，平台查验后将视为查验通过正常发货。
                        </p>
                    </div>

                </div>
            </div>

            <!--猜你喜欢-->
            <div class="mod-like" id="guesslove-module" module_name="maybe_like_product">

            </div>
            <!--猜你喜欢 end-->
        </div>
    </div>`;
    addcar = document.querySelector("#add_Cart");
    console.log(addcar);
    addcar.onclick = function () {
        let e = window.event;
        // if (e.target.id == 'goCar') {
        //     location.href = '../html/car.html'
        // }
        if (e.target.id == 'add_Cart') {
            // alert('添加购物车')
            // 把当前这个条商品的goods_id ，用户名 ，goods_num 添加到 购物车的表
            // goods_id = id
            // userName = getCookie('login)  如果没有登录的时候 不能添加数据，提示进行登录
            // goods_num  判断这个用户对应的这个goods_id 是否已经存在，如果存在 goods_num++，如果不存在操作添加商品到购物车，其中 goods_num = 1
            console.log(111);
            let login = getCookie('login');
            if (!login) {
                alert('没有登录请到登录页面进行登录');
                localStorage.setItem('url', location.href);
                location.href = '../html/login.html';
                return
            }

            // 发添加购物车的ajax请求
            pAjax({
                url: '../api/addcar.php',
                type: 'post',
                data: {
                    'sellerInfoid': sellerInfoid,
                    'username': login
                }
            })
        }
    }
    //买手热销
    pAjax({
        url: '../api/detailList.php'
    }).then(res => {
        res = JSON.parse(res);
        rander(res.detail.slice(0, 6));
    })
    let preview = document.querySelector(".preview");
    console.log(preview);
    //放大镜
    new Enlarge('.preview');
}

function rander(arr) {
    let hotproducts = document.querySelector("#hot-products");
    let recommend = document.querySelector("#recommend-products");
    let str = "";
    arr.forEach(item => {
        str += `<li class="product-item" module_index="" id="${item.item}" key_id="${item.sellerInfoid}">
        <a class="product-img">
            <img class="lazy" alt="${item.name}" src="${item.pic}">
        </a>
        <a class="red-name"><p class="name">${item.name}</p></a>
        <p class="price">¥ ${item.price}</p>
        </li>`;
    });
    hotproducts.innerHTML = str;
    recommend.innerHTML = str;
}