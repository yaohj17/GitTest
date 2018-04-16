
        $(function(){
            $.ajax({
                url: "../data/top.json",
                type: "GET",
                success: function(res){
                    var html = "";
                    for(var i = 0; i < res.length; i++){
                        html += '<div><a href = "">'+res[i].text+'</a><a href=""><img src="'+res[i].img+'" alt=""></a></div>';
                    }
                    $(".clearfix1").html(html);

                    var iiNow = 0;

                    $(".brand-segments .clearfix1 div").hover(function(){
                        iiNow = $(this).index();
                        //alert(iiNow);
                        tab()
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








