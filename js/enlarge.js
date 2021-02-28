class Enlarge {
    constructor(str) {
        this.str = str;
        this.init();
    }

    init() {
        this.preview = document.querySelector(this.str);
        this.show = this.preview.querySelector('#vertical');

        this.img = this.show.querySelector('img');
        this.mask = this.preview.querySelector('#winSelector');

        this.list = this.preview.querySelector('#imageslist');
        this.p = this.list.children;

        this.enlarge = this.preview.querySelector('#bigView');

        this.show.onmouseover = () => {
            this.mask.style.display = this.enlarge.style.display = 'block';
            this.setStyle();
        }

        this.show.onmouseout = () => {
            this.mask.style.display = this.enlarge.style.display = 'none';
        }

        this.show.onmousemove = (e) => {
                this.move(e);
            }
            [...this.p].forEach((item, index) => {
                item.onclick = () => {
                    // item 得到每一次点击的那个元素
                    // this.changeImg 函数中需要用到当前点击的元素，需要把这个item当成参数传递
                    this.changeImg(item);
                }
            })
    }

    // 用来计算放大镜盒子的宽度
    setStyle() {

        let style = getStyle(this.enlarge, 'backgroundSize');
        this.bgX = parseInt(style.split(' ')[0])
        this.bgY = parseInt(style.split(' ')[1]);

        let maskW = this.mask.offsetWidth;
        let maskH = this.mask.offsetHeight;

        this.showW = this.show.offsetWidth;
        this.showH = this.show.offsetHeight;

        let enlargeW = this.bgX * maskW / this.showW;
        let enlargeH = this.bgY * maskH / this.showH;

        this.enlarge.style.width = enlargeW + 'px';
        this.enlarge.style.height = enlargeH + 'px';

    }
    move(e) {

        let left = e.clientX - this.preview.offsetLeft - this.mask.offsetWidth / 2;
        let top = e.pageY - this.preview.offsetTop - this.mask.offsetHeight / 2;

        if (left <= 0) {
            left = 0;
        }
        if (top <= 0) {
            top = 0;
        }

        if (left >= this.show.offsetWidth - this.mask.offsetWidth) {
            left = this.show.offsetWidth - this.mask.offsetWidth
        }

        if (top >= this.show.offsetHeight - this.mask.offsetHeight) {
            top = this.show.offsetHeight - this.mask.offsetHeight;
        }

        this.mask.style.left = left + 'px';
        this.mask.style.top = top + 'px';
        let x = left * this.bgX / this.showW;
        let y = top * this.bgY / this.showH;

        this.enlarge.style.backgroundPosition = `${-x}px  ${-y}px`;
    }

    changeImg(p) {
        // [...this.p].forEach(item => {
        //     item.classList.remove('active');
        // })
        // p.classList.add('active');
        let pImg = p.firstElementChild.firstElementChild;
        let midel = pImg.getAttribute('midelImg');
        let big = pImg.getAttribute('bigImg');

        this.img.setAttribute('src', midel);
        this.enlarge.style.backgroundImage = `url(${big})`;
    }
}