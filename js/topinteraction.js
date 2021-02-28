//头部提示交互
let toptitle = document.querySelector(".inner .mod-notice #noticeContent");
let topnoTices = [{
    title: "为了您能更好的在洋码头平台选购境外物品，请您在选购商品前认真了解国家跨境相关法律法规，您可直接点击此处跳转至“帮助与客服”"
}, {
    title: "了解具体的可进口商品，或直接联系在线洋管家进行咨询，也可拨打全国客服电话400-850-2233。"
}]
topnoTices.forEach(item => {
    toptitle.innerHTML += `<li>${item.title}</li>`;
})
setInterval(function () {
    let str = "";
    let noticesobject = topnoTices.shift();
    topnoTices.push(noticesobject);
    topnoTices.forEach(item => {
        str += `<li>${item.title}</li>`;
    })
    toptitle.innerHTML = str;
}, 2000);