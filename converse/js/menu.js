define(["jquery"],function($){
    var menu = function(){
        $(function(){
            $(".menu li").hover(function() {
                $(this).css("borderTop","solid 1px black"),
                $(this).css("color","black"),
                $(this).css("marginTop","-1px")
            }, function() {
                $(this).css("borderTop","solid 0 black"),
                $(this).css("color","#999"),
                $(this).css("marginTop","0")
            });
        })
    }
    return{
        menu: menu
    }
})