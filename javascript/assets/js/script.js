//결과보기
//제목을클릭했을때 ~~을 실행하라

document.querySelector(".result01t h4").addEventListener("click", function () {
    document.querySelector(".result01").style.display = "block";
})

document.querySelector(".result02t h4").addEventListener("click", function () {
    document.querySelector(".result02").style.display = "block";
})
document.querySelector(".result03t h4").addEventListener("click", function () {
    document.querySelector(".result03").style.display = "block";
})
document.querySelector(".result04t h4").addEventListener("click", function () {
    document.querySelector(".result04").style.display = "block";
})
document.querySelector(".result05t h4").addEventListener("click", function () {
    document.querySelector(".result05").style.display = "block";
})
document.querySelector(".result06t h4").addEventListener("click", function () {
    document.querySelector(".result06").style.display = "block";
})
document.querySelector(".result07t h4").addEventListener("click", function () {
    document.querySelector(".result07").style.display = "block";
})

document.querySelector(".result08t h4").addEventListener("click", function () {
    document.querySelector(".result08").style.display = "block";
})
document.querySelector(".result09t h4").addEventListener("click", function () {
    document.querySelector(".result09").style.display = "block";
})
document.querySelector(".result10t h4").addEventListener("click", function () {
    document.querySelector(".result10").style.display = "block";
})
document.querySelector(".result11t h4").addEventListener("click", function () {
    document.querySelector(".result11").style.display = "block";
})
document.querySelector(".result12t h4").addEventListener("click", function () {
    document.querySelector(".result12").style.display = "block";
})
document.querySelector(".result13t h4").addEventListener("click", function () {
    document.querySelector(".result13").style.display = "block";
})
document.querySelector(".result14t h4").addEventListener("click", function () {
    document.querySelector(".result14").style.display = "block";
})





//for을 이용해서 1~12까지 출력 resul1t
// for( let i=1; i<=12; i++){
//         document.querySelector(".result"+i+"t h4").addEventListener("click", function () {
//             document.querySelector(".result"+ i).style.display = "block";
//     });
// }

// for( let i=1; i<=12; i++ ){
//     document.querySelector(".result"+i+"t h4").addEventListener("click", function(){
//         document.querySelector(".result" + i).style.display = "block";
//     });
// }

//forEach문을 이요해서 1~12까지 출력

// document.querySelectorAll(".result h4").forEach(function (el) {
//         console.log(el)


//         el.addeventlistener("click", () => {
//             alert("클릭");
//         });

//     });


// const num = [100, 200, 300, 400, 500]; 123
// //for()
// for( let i=0; i<5; i++ ){
//     // console.log(i) // 0 1 2 3 4
//     // console.log(num[i])
// }
// //forEach()
// num.forEach(function(el , index){
//     console.log(el) //100 200 300 400 500
//     console.log(index) // 0 1 2 3 4
// });