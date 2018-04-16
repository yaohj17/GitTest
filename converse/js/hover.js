define(["jquery"],function($){
    var hover = function(){
        $(function(){
            $(".register-r .register-r-box, .register-r .login").hover(function(){
                $(this).css("backgroundColor","white"),
                $(this).css("color","black"),
                $(this).find(".triangle-r").css("borderLeft","12px solid black")
            }, function(){
                $(this).css("backgroundColor","black"),
                $(this).css("color","white"),
                $(this).find(".triangle-r").css("borderLeft","12px solid white")
            });
            $(".information-link a").eq(0).hover(function(){
                $(this).css("backgroundPosition","0 0")
            },function(){
                $(this).css("backgroundPosition","-75px 0")
            });
            $(".information-link a").eq(1).hover(function(){
                $(this).css("backgroundPosition","0 -75px")
            },function(){
                $(this).css("backgroundPosition","-75px -75px")
            });
            $(".information-link a").eq(2).hover(function(){
                $(this).css("backgroundPosition","0 -150px")
            },function(){
                $(this).css("backgroundPosition","-75px -150px")
            });
            $(".information-link a").eq(3).hover(function(){
                $(this).css("backgroundPosition","0 -225px")
            },function(){
                $(this).css("backgroundPosition","-75px -225px")
            });
            $(".information-link a").eq(4).hover(function(){
                $(this).css("backgroundPosition","0 -300px")
            },function(){
                $(this).css("backgroundPosition","-75px -300px")
            });
            $(".buy-button .product-buy").hover(function(){
                $(this).css("color","black"),
                $(this).css("backgroundColor","white")
            },function(){
                $(this).css("color","white"),
                $(this).css("backgroundColor","black")
            });
            $(".specialfeature .specialfeature-main .product a").hover(function(){
                $(this).css("opcity","0.6"),
                $(this).css("backgroundColor","white"),
                $(this).css("filter","Alpha(Opacity=60)")
            },function(){
                $(this).css("opcity","1"),
                $(this).css("backgroundColor",""),
                $(this).css("filter","Alpha(Opacity=60)")
            })
            $(".specialfeature .specialfeature-main .specialfeature-content a p,.specialfeature .specialfeature-main .specialfeature-content a h1, .sitemap a").hover(function(){
                $(this).css("color","#999")
            },function(){
                $(this).css("color","#333")
            })
            $(".view-all a").hover(function(){
                $(this).css("color","black"),
                $(this).css("backgroundColor","white")
            },function(){
                $(this).css("color","white"),
                $(this).css("backgroundColor","black")
            });
            $(".nav-content ul li, .max1200").hover(function(){
                $(".max1200").css("display","block");
            },function(){
                $(".max1200").css("display","none");
            })
            $(".zoomPad img").hover(function(){

            })
        })
        $(window).scroll(function(){
            var htmlTop = $(document).scrollTop();
            var htmlTopTop = htmlTop + 200;
            $(".lim_float_icon").css("top",htmlTopTop)
        })
    }
    return{
        hover:hover
    }
})