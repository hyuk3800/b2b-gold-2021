var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});



const ham = document.querySelector(".ham");
const hammenu = document.querySelector(".mbmenu");
const hamlist = document.querySelector(".mbmenu li");
const hamListAll = document.querySelectorAll(".mbmenu li")

function moveMenu() {
    console.log(hamlist);
    ham.classList.toggle("on");
    hammenu.classList.toggle("on");
    console.log(hamlist);

}

//console.log(hamListAll);
// 안됌;;
function moveMenu2(){
    console.log("눌림");
    ham.classList.toggle("on");
    hammenu.classList.toggle("on");
}


ham.addEventListener("click", moveMenu);
//hamListAll.addEventListener("click",moveMenu2);



// 제고관리 클릭시 on되면서 박스 생성(아직 안함)




$('.autoplay1').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    prevArrow: "<button type='button' class='slick-prev'><i class='las la-angle-left'></i></button>",
    nextArrow: "<button type='button' class='slick-next'><i class='las la-angle-right'></i></button>",
    dots: true,
    dotsClass: "slick-dots",
    responsive: [{ // 반응형 구현 옵션
            breakpoint: 950,
            settings: {

            }
        },
        {
            breakpoint: 665,
            settings: {
                dots: false
            }

        }
    ]
});



$('.autoplay').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [{ // 반응형 구현 옵션
            breakpoint: 950,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 665,
            settings: {
                slidesToShow: 1
            }

        }
    ]
});

$('.autoplay2').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    responsive: [{ // 반응형 구현 옵션
            breakpoint: 950,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 665,
            settings: {
                slidesToShow: 1
            }

        }
    ]
});




//   $('.autoplay').slick({
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
// });


///////////// 어렵다. 표 //////////////////