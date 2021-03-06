function wheelRotate(angle, message, callBack) {
    console.log('angle=' + angle)
    var totalAngle = 360 * 6 + angle    //默认四圈后再旋转到指定角度
    var rotateAngle = 0
    var timer = setInterval(function () {
        var wheel = document.querySelector('canvas');
        if (rotateAngle >= totalAngle) {
            clearInterval(timer)

            //结束后1s弹出中奖对话框
            setTimeout(function () {
                callBack(message)
            }, 1000)

        } else {
            wheel.style.transform = 'rotate(' + rotateAngle + 'deg)'
            rotateAngle = rotateAngle + Math.ceil((totalAngle - rotateAngle) / 10);
        }
    }, 100)
}