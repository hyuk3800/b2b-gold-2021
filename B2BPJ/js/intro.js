//// 인트로 JS - intro.js /////
$(function () {

    //// 베너 //////
    let snum = 0;

    const sld = $("#slide");

    let prot = 0;


    $(".ab2").click(function () {

        if (prot) return false;

        prot = 1;
        setTimeout(function () {
            prot = 0;
        }, 800);

        clearAuto();

        sld.animate({
            left: "-100%"
        }, 800, function () {

            $(this)
                .append($("li", this).first())
                .css({
                    left: "0"
                });
        }); ////animate

        snum++;
        if (snum === 3) snum = 0;

        $(".indic li").eq(snum).addClass("on")
            .siblings().removeClass("on");

    }); ///////// click ////////

    $(".ab1").click(function () {

        if (prot) return false;

        prot = 1;
        setTimeout(function () {
            prot = 0;
        }, 800);

        clearAuto();

        sld.prepend(sld.find("li").last())
            .css({
                left: "-100%"
            })
            .animate({
                left: "0"
            }, 800);

        snum--;
        if (snum === -1) snum = 2;

        $(".indic li").eq(snum).addClass("on")
            .siblings().removeClass("on");



    }); ///////////click




    let autoI;


    let autoSlide = function () {
        autoI = setInterval(function () {

            sld.animate({
                left: "-100%"
            }, 800, function () {

                $(this)
                    .append($("li", this).first())
                    .css({
                        left: "0"
                    });
            }); //// animate ///////

            snum++;
            if (snum === 3) snum = 0;

            $(".indic li").eq(snum).addClass("on")
                .siblings().removeClass("on");


        }, 3000);
    }; /////////// autoslide 함수

    autoSlide();


    let autoT;


    const clearAuto = function () {

        clearInterval(autoI);

        clearTimeout(autoT);

        autoT = setTimeout(autoSlide, 5000);

    }; /////clearAuto



}); ////////////////////// JQB ////////////////////////
//////////////////////////////////////////////////////


// 햄버거 클릭시 매뉴나오기;

const ham = document.querySelector(".ham");
const hammenu = document.querySelector(".mbmenu");


function moveMenu(){
    //console.log(hammenu);
    ham.classList.toggle("on");
    hammenu.classList.toggle("on");
    //console.log(hammenu);
}


ham.addEventListener("click", moveMenu);


// // 태그 클릭시 그림 나오기

// const rmText = document.querySelectorAll(".Rmtext");

// function rmClickM(){
//     console.log("된다");
    


// }





// rmText.addEventListener("click", rmClickM);




