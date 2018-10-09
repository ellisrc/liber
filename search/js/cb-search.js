 $(document).ready(function () {
        var time1 = 0;
        var show = false;
        var names = new Array(); //Tên bài viết v.v.
        var urls = new Array(); //Địa chỉ bài viết
        $(document).keyup(function (e) {
            var time2 = new Date().getTime();
            if (e.keyCode == 17) {
                var gap = time2 - time1;
                time1 = time2;
                if (gap < 500) {
                    if (show) {
                        $(".cb-search-tool").css("display", "none");
                        show = false;
                    } else {
                        $(".cb-search-tool").css("display", "block");
                        show = true;
                        $("#cb-search-content").val("");
                        $("#cb-search-content").focus();
                    }
                    time1 = 0;
                }
			}else if(e.keyCode == 27){
                    $(".cb-search-tool").css("display", "none");
                    show = false;
                    time1 = 0;
                }
        });

 		$("#cb-search-content").keyup(function (e) {
            var time2 = new Date().getTime();
            if (e.keyCode == 17) {
                var gap = time2 - time1;
                time1 = time2;
                if (gap < 500) {
                    if (show) {
                        $(".cb-search-tool").css("display", "none");
                        show = false;
                    } else {
                        $(".cb-search-tool").css("display", "block");
                        show = true;
                        $("#cb-search-content").val("");
                        $("#cb-search-content").focus();
                    }
                    time1 = 0;
                }
            }
        });

        $("#cb-close-btn").click(function () {
            $(".cb-search-tool").css("display", "none");
            show = false;
            time1 = 0;
        });

        $("#cb-search-btn").click(function(){
            $(".cb-search-tool").css("display", "block");
            show = true;
            $("#cb-search-content").val("");
            $("#cb-search-content").focus();
            time1 = 0;
        });

        $.getJSON("/search/cb-search.json").done(function (data) {
            if (data.code == 0) {
                for (var index in data.data) {
                    var item = data.data[index];
                    names.push(item.title);
                    urls.push(item.url);
                }

                $("#cb-search-content").typeahead({
                    source: names,

                    afterSelect: function (item) {
						$(".cb-search-tool").css("display", "none");
                        show = false;
                        window.location.href = (urls[names.indexOf(item)]);
                        return item;
                    }
                });
            }
        });

    });
console.log(".::         .::                       .::      .::                 \n.::       .:.::                        .::   .::                    \n.::         .::         .::    .: .:::  .:: .::   .::  .::   .::    \n.::      .::.:: .::   .:   .::  .::       .::     .::  .:: .:   .:: \n.::      .::.::   .::.::::: .:: .::     .:: .::   .::  .::.::::: .::\n.::      .::.::   .::.:         .::    .::   .::  .::  .::.:        \n.::::::::.::.:: .::    .::::   .:::   .::      .::  .::.::  .::::   \n \nChào mừng bạn đến với LiberTheme Blog này dựa trên Thỏa thuận cấp phép quốc tế của Creative Commons Attribution 4.0. \n \nBlog sử dụng chủ đề Jekyll đã được mở nguồn trên GitHub của tôi \n \nXin vui lòng không copy nội dung bản gốc \n \n"+"%c By LiberTheme", " font: 2.6rem/1.25rem 'Fredericka the Great', cursive;color: #FFF;text-shadow: 0 1px #2b2b2b, -1px 0 #000, -1px 2px #2b2b2b, -2px 1px #000, -2px 3px #2b2b2b, -3px 2px #000, -3px 4px #2b2b2b, -4px 3px #000, -4px 5px #2b2b2b, -5px 4px #000, -5px 6px #2b2b2b, -6px 5px #000, -6px 7px #2b2b2b, -7px 6px #000, -7px 8px #2b2b2b, -8px 7px #000;");