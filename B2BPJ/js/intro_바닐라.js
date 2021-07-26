//////// 인트로 페이지 JS - intro.js /////////

window.addEventListener("DOMContentLoaded", function () {

    //console.log("로딩완료!");

    let snum = 0;

    const sld = document.querySelector("#slide");

    const sldLi = sld.querySelector("li");

    let indicLi = document.querySelector(".indic li");

    // 광클금지 (0 - 허용, 1 - 블허용)
    let prot = 0;


    // 오른쪽버튼
    const ab2 = document.querySelector(".ab2");

    //왼쪽 버튼
    const ab1 = document.querySelector(".ab1");




    // 오른쪽버튼 클릭시 슬라이드 이동하기

    function ab2ClickMove() {


        //광클 금지///////////////////
        console.log(prot);

        if (prot) return false;

        prot = 1;

        console.log(prot);

        setTimeout(function () {
            prot = 0;
        }, 4000);

        console.log(prot);

        /////////////////////////






    } ////// ab2ClickMove



    ab2.addEventListener("click", ab2ClickMove);




    // 왼쪽 클릭시

    function ab1ClickMove() {

        console.log("된다!");


    } ///// ab1ClickMove



    ab1.addEventListener("click", ab1ClickMove);



    let autoI;

    let autoSlide = function () {

        autoI = setInterval(function () {
            sld.animate({
                left: "-100%"
            }, 800, function () { // 애니 후
                sld.append(sldLi, sld).first()
                    .css({
                        left: "0"
                    });

            });/////// animate /////


                snum++;
                if(snum === 3) snum = 0;
            indicLi.snum[0].addclass("on")
            .sibling().removeClass("on");


        })





    }; //////// autoSlide

    let autoT;

    let clearAuto = function () {
        clearInterval(autoI);

        clearTimeout(autoT);

        autoT = setTimeout(autoSlide, 5000);
    }



});