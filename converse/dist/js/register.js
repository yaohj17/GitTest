window.onload = function(){
    var oDl = document.getElementsByClassName("dl-3");
    document.getElementsByClassName(".input1").onblur = function(){
        var oValue = $("email_adress").value.replace(/ /ig, "");
        oDl.children[1].value = oValue;
        if(/\d/.test(oValue) && oValue.length == 11){
            oDl.children[2].style.textIndent = 0 + "px";
        }
        if(oValue.length < 18 && oValue.length > 6 && /\d/.test(oValue[0]) && /_/.test(oValue[oValue.length - 1]) && /\W/.test(oValue)){

        }else if(/\d/.test(oValue) && oValue.length == 11){

        }
        else{
            oDl.children[2].style.textIndent = 0 + "px";
        }
    }
}