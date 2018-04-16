console.log("加载成功");

require.config({
    paths: {
        "jquery": "jquery-1.10.1.min",
        "index": "index",
        "jquery-cookie": "jquery.cookie",
        "expanded": "expanded",
        "hover": "hover",
        "menu": "menu",
        "shift": "shift"
    }
})
require(["index"],function(index){
    index.index();
})
require(["expanded"],function(expanded){
    expanded.expanded();
})
require(["hover"],function(hover){
    hover.hover();
})
require(["captcha"],function(captcha){
    captcha.captcha();
})
require(["menu"],function(menu){
    menu.menu();
})
