//绘制大转盘
function drawlWheel(wheel, canvas) {

    var ctx = canvas.getContext('2d');
    var canvasW = canvas.offsetWidth;
    var canvasH = canvas.offsetWidth;
    var baseAngle = Math.PI * 2 / wheel.prize.length;

    //绘制扇形
    for (var i = 0; i < wheel.prize.length; i++) {
        // 绘制中奖扇形区域
        var startAngle = i * baseAngle - Math.PI / 2 - baseAngle / 2  //保证指针始终停在正上方中间的位置
        var endAngle = startAngle + baseAngle;
        ctx.save()
        ctx.beginPath()
        ctx.fillStyle = wheel.prize[i].color;
        ctx.arc(canvasW / 2, canvasH / 2, wheel.radiusMax, startAngle, endAngle, false)
        ctx.arc(canvasW / 2, canvasH / 2, wheel.radiusMin, endAngle, startAngle, true)
        ctx.closePath()
        ctx.stroke()
        ctx.fill()
        ctx.restore()

        //绘制扇形奖品名称
        ctx.save()
        ctx.beginPath()
        ctx.translate(canvasW / 2, canvasH / 2)
        ctx.fontSize = 12
        ctx.fillStyle = '#000000'
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.rotate(baseAngle * i)
        ctx.fillText(wheel.prize[i].text, 0, -wheel.radiusMax * 0.9)
        ctx.restore()
    }

    //绘制奖品图片
    for (var i = 0; i < 8; i++) {
        (function (i) {
            ctx.beginPath()
            var img = new Image()
            img.src = wheel.prize[i].img;
            img.onload = function () {
                ctx.save()
                ctx.translate(canvasW / 2, canvasH / 2)
                ctx.rotate(baseAngle * i)
                ctx.drawImage(img, -22, -wheel.radiusMax * 0.7, 44, 20);
                ctx.restore();
            }
        })(i)
    }
}

//获取大转盘相关信息
function queryWheelInfo() {
    var wheel = {
        prize:
            [{ 'text': '一等奖', 'img': './img/1.png', 'color': '#F0D6BE' },
            { 'text': '二等奖', 'img': './img/2.png', 'color': '#ffffff' },
            { 'text': '三等奖', 'img': './img/2.jpg', 'color': '#F0D6BE' },
            { 'text': '四等奖', 'img': './img/2.jpg', 'color': '#ffffff' },
            { 'text': '五等奖', 'img': './img/2.jpg', 'color': '#F0D6BE' },
            { 'text': '六等奖', 'img': './img/2.jpg', 'color': '#ffffff' },
            { 'text': '七等奖', 'img': './img/2.jpg', 'color': '#F0D6BE' },
            { 'text': '八等奖', 'img': './img/2.jpg', 'color': '#ffffff' }],
        radiusMax: 150,
        radiusMin: 50,
    }

    return wheel
}

function getWheelResult() {

    return index = 2 //模拟后台返回中奖的索引
}





