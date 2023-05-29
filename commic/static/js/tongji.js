document.writeln("<div style=\"display:none;\">");
var _hmt = _hmt || [];
(function() {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?81f15ea26022343dff3264644989d1d8";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
})();
document.writeln("</div>");
// 插入 favicon.ico title图标
(function() {
    var link = document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = 'https://tva1.sinaimg.cn/large/a20ab060ly1givcpo78k2j200h00g0bz.jpg';
    document.getElementsByTagName('head')[0].appendChild(link);
}());
//  插入 返回头部 样式
document.writeln('<style>')
document.writeln(".box{")
document.writeln("    position: fixed;")
document.writeln("    right: 10px;")
document.writeln("    bottom: 10px;")
document.writeln("    height: 30px;")
document.writeln("    width: 50px;")
document.writeln("    text-align: center;")
document.writeln("    padding-top: 20px;")
document.writeln("    background-color: lightblue;")
document.writeln("    border-radius: 20%;")
document.writeln("    overflow: hidden;")
document.writeln("}")
document.writeln("")
document.writeln(".box:hover:before {")
document.writeln("    top: 50%")
document.writeln("}")
document.writeln("")
document.writeln(".box:hover .box-in {")
document.writeln("    visibility: hidden;")
document.writeln("}")
document.writeln("")
document.writeln(".box:before {")
document.writeln("    position: absolute;")
document.writeln("    top: -50%;")
document.writeln("    left: 50%;")
document.writeln("    transform: translate(-50%, -50%);")
document.writeln("    content: '回到顶部';")
document.writeln("    width: 40px;")
document.writeln("    color: peru;")
document.writeln("    font-weight: bold;")
document.writeln("}")
document.writeln("")
document.writeln(".box-in {")
document.writeln("    visibility: visible;")
document.writeln("    display: inline-block;")
document.writeln("    height: 20px;")
document.writeln("    width: 20px;")
document.writeln("    border: 3px solid black;")
document.writeln("    border-color: white transparent transparent white;")
document.writeln("    transform: rotate(45deg);")
document.writeln("}")
document.writeln("</style>")

document.writeln('<div id="box" class="box">')
document.writeln('<div class="box-in"></div>')
document.writeln('</div>')

var timer = null;
box.onclick = function() {
    cancelAnimationFrame(timer);
    //获取当前毫秒数
    var startTime = +new Date();
    //获取当前页面的滚动高度
    var b = document.body.scrollTop || document.documentElement.scrollTop;
    var d = 500;
    var c = b;
    timer = requestAnimationFrame(function func() {
        var t = d - Math.max(0, startTime - (+new Date()) + d);
        document.documentElement.scrollTop = document.body.scrollTop = t * (-c) / d + b;
        timer = requestAnimationFrame(func);
        if (t == d) {
            cancelAnimationFrame(timer);
        }
    });
}