define(["jquery"],function($){
    var index = function(){
        $(function(){
            $.ajax({
                url: "../data/data.json",
                type: "GET",
                success: function(res){
                    var html = "";
                    for(var i = 0; i < res.length; i++){
                        html += '<div class = "slider-box"><a href="http://localhost:8888/commodity-details-page.html"><img src="'+res[i].img+'" alt=""></a></div>';
                    }
                    $(".slide-content .slider").html(html);

                    //轮播图
                    var iNow = 0;
                    var timer = null;

                    $(".menu li").hover(function(){
                        iNow = $(this).index();
                        move()
                    })
                    $(".slide-content .left").click(function(){
                        iNow--;
                        iNow = iNow % 4;
                        move(iNow)
                    })
                    $(".slide-content .right").click(function(){
                        iNow++;
                        iNow = iNow % 4;
                        move(iNow)
                    })

                    function move(){
                        $(".slider .slider-box").eq(iNow).animate({"opacity": 1}).siblings().animate({"opacity": 0.5});

                        $(".slider .slider-box").eq(iNow).animate({"opacity": 1, "zIndex": 5}).siblings().animate({"opacity": 0, "zIndex": 4}).find(".arrow");
                    }
                    function timerInner(){
                        iNow++;
                        if(iNow == 4){
                            iNow = 0
                        }
                        move();
                    }
                    timer = setInterval(timerInner, 3000);

                    $(".slider").hover(function(){
                        clearInterval(timer);
                    },function(){
                        timer = setInterval(timerInner, 3000);
                    })



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
                    $(function(){
                        $(".verificationCode").html(CAPTCHA(4));
                        $(".verificationCode").click(function(){
                            $(this).html(CAPTCHA(4));
                        })
                        $(".verificationCode").html(CAPTCHA(4));
                        $(".dl-3 a").click(function(){
                             $(".verificationCode").html(CAPTCHA(4));
                        })
                    })
                }
            })

            $(function(){
                $.ajax({
                    url: "../data/top.json",
                    type: "GET",
                    success: function(res){
                        var html = "";
                        for(var i = 0; i < res.length; i++){
                            html += '<div><a href = "http://localhost:8888/commodity-details-page.html">'+res[i].text+'</a><a href=""><img src="'+res[i].img+'" alt=""></a></div>';
                        }
                        $(".clearfix1").html(html);

                        var iiNow = 0;

                        $(".brand-segments .clearfix1 div").hover(function(){
                            iiNow = $(this).index();
                            //alert(iiNow);
                        })

                        // $(".clearfix1").eq(iiNow).hover(function(){
                        //     if(iiNow == 0){
                        //         $(".brand-menu-container .brand-menu").css("left","12%")
                        //     }else if(iiNow == 1){
                        //         $(".brand-menu-container .brand-menu").css("left","37%")
                        //     }else if(iiNow == 2){
                        //         $(".brand-menu-container .brand-menu").css("left","62%")
                        //     }else{
                        //         $(".brand-menu-container .brand-menu").css("left","88%")
                        //     }
                        // }
                    }
                })
            })

            $.ajax({
                url: "../data/classify.json",
                type: "GET",
                success: function(res){
                    var html = "";
                    for(var i = 0; i < res.length; i++){
                        for(var j = 0; j < res[i].list.length; j++){
                            html += `<dl>
                                        <dt>
                                            <a href="http://localhost:8888/commodity-details-page.html">
                                                <img src = "${res[i].list[j].img}" alt="">
                                            </a>
                                        </dt>
                                        <dd class = "product-list-name">
                                            <a href="http://localhost:8888/commodity-details-page.html">
                                                ${res[i].list[j].name}
                                            </a>
                                        </dd>
                                        <dd class = "product-list-price">
                                            ${res[i].list[j].price}
                                        </dd>
                                    </dl>`;
                            }
                    }
                    $(".list-slide-gird .product-list-slide .product-list").html(html);

                    $(".list-slide-gird .product-list-slide .product-list dl").hover(function(){
                        $(this).css("border","1px solid black")
                    },function(){
                        $(this).css("border","0")
                    })
                    function tab(){
                        alert(iiNow);
                        $(".product-list").eq(iiNow).animate({"opacity": 1}).siblings().animate({"opacity": 0});

                        //$(".slider .slider-box").eq(iiNow).animate({"opacity": 1, "zIndex": 5}).siblings().animate({"opacity": 0, "zIndex": 4}).find(".arrow");
                    }
                }
            })
            $.ajax({
                url: "../data/newproduct.json",
                type: "GET",
                success: function(res){
                    var html = "";
                    for(var i = 0; i < res.length; i++){
                        for(var j = 0; j < res[i].list.length; j++){
                            html += `<dl>
                                        <dt>
                                            <a href="http://localhost:8888/commodity-details-page.html">
                                                <img src = "${res[i].list[j].img}" alt="">
                                            </a>
                                        </dt>
                                        <dd class = "product-list-name">
                                            <a href="http://localhost:8888/commodity-details-page.html">
                                                ${res[i].list[j].name}
                                            </a>
                                        </dd>
                                        <dd class = "product-list-price">
                                            ${res[i].list[j].price}
                                        </dd>
                                    </dl>`;
                            }
                    }
                    $(".new-product-gird .product-list-slide .product-list").html(html);
                    $(".new-product-gird .product-list-slide .product-list dl").hover(function(){
                        $(this).css("border","1px solid black")
                    },function(){
                        $(this).css("border","0")
                    })
                }
            })
             $.ajax({
                url: "../data/submenu.json",
                type: "GET",
                success: function(res){
                    var html = "";
                    for(var i = 0; i < res.length; i++){
                        html += `<li class = "submenu-list"><a href=""><img src="${res[i].img}" alt=""></a><a>${res[i].text}</a></li>`;
                    }
                    $(".nav-content .submenu .max1200").html(html);
                }
            })
        })
    }
    return{
        index:index
    }
})
