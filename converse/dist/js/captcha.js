
function CAPTCHA(n){
    var arr = [];
    for(var i = 0; i < n; i++){
        var num = Math.floor(Math.random() * 100);
        if(num >= 0 && num <= 9){
            arr.push(num);
        }else if(num >= 65 && num <= 90){
            arr.push(String.fromCharCode(num));
        }else if(num >= 27 && num <= 52){
            arr.push(String.fromCharCode(num + 70));
        }else{
            i--;
        }
    }
    return arr.join("");
}
define(["jquery"],function($){
    var captcha = function(){
        $(function(){
            $(".verificationCode").innerHTML = CAPTCHA(4);
            $(".verificationCode").click(function(){
                $(".verificationCode").innerHTML = CAPTCHA(4);
            })
            $(".verificationCode").innerHTML = CAPTCHA(4);
            $(".dl-3 a").click(function(){
                 $(".verificationCode").innerHTML = CAPTCHA(4);
            })
        })
    }
    return{
        captcha:captcha
    }
})