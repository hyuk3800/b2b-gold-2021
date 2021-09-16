


/////////////     달력 //////////////////////
$(function () { ////// jQ 시작

    $.datepicker.setDefaults({
        dateFormat: 'yy. m. d.',
        prevText: '이전 달',
        nextText: '다음 달',
        monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        dayNames: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
        showMonthAfterYear: true,
        yearSuffix: '년'
    });

    // $(function () {
    // });


        $("#datepicker").datepicker({
            beforeShow: function (input, inst) {
                let offset = $(input).offset();
                window.setTimeout(function () {
                    $(inst.dpDiv).css({
                        "top": (offset.top - 70) + "px"
                    })
                }, 1); ///setTimeout
            } /// beforeShow

        });/// datepicker
        // $(".cldbox1111").datepicker("setDate", "+7d");
        $("#cldbox").datepicker({
            showOn: "both",


            beforeShow: function (input, inst) {
                let offset = $(input).offset();
                let height = $(input).height();

                window.setTimeout(function () {
                    $(inst.dpDiv).css({
                        "top": (offset.top - 77) + "px"
                    })
                }, 1); ///setTimeout
            } /// beforeShow
        });// datepicker
        
        
        
        
        $("#orderCldbox1").datepicker({
            showOn: "both",


            beforeShow: function (input, inst) {
                let offset = $(input).offset();
                let height = $(input).height();

                window.setTimeout(function () {
                    $(inst.dpDiv).css({
                        "top": (offset.top - 77) + "px"
                    })
                }, 1); ///setTimeout
            } /// beforeShow
        });// datepicker
        $("#orderCldbox2").datepicker({
            showOn: "both",


            beforeShow: function (input, inst) {
                let offset = $(input).offset();
                let height = $(input).height();

                window.setTimeout(function () {
                    $(inst.dpDiv).css({
                        "top": (offset.top - 77) + "px"
                    })
                }, 1); ///setTimeout
            } /// beforeShow
        });// datepicker
    




    
    });//// jQ 끝