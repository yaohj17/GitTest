define(["jquery"],function($){
    var expanded = function(){
        $(function(){
            $(".register .register-r").on("click",function(){
                $(".header-expanded").css("display","block");
                $(".nav-content").css("display","none");
            })
        })
    }
    return{
        expanded:expanded
    }
})