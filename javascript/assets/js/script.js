// //결과보기
// //제목을클릭했을때 ~~을 실행하라

// document.querySelector(".result1t h4").addEventListener("click", function () {
//     document.querySelector(".result1").style.display = "block";
// })

// document.querySelector(".result2t h4").addEventListener("click", function () {
//     document.querySelector(".result2").style.display = "block";
// })
// document.querySelector(".result3t h4").addEventListener("click", function () {
//     document.querySelector(".result3").style.display = "block";
// })
// document.querySelector(".result4t h4").addEventListener("click", function () {
//     document.querySelector(".result4").style.display = "block";
// })
// document.querySelector(".result5t h4").addEventListener("click", function () {
//     document.querySelector(".result5").style.display = "block";
// })
// document.querySelector(".result6t h4").addEventListener("click", function () {
//     document.querySelector(".result6").style.display = "block";
// })
// document.querySelector(".result7t h4").addEventListener("click", function () {
//     document.querySelector(".result7").style.display = "block";
// })

// document.querySelector(".result8t h4").addEventListener("click", function () {
//     document.querySelector(".result8").style.display = "block";
// })
// document.querySelector(".result9t h4").addEventListener("click", function () {
//     document.querySelector(".result9").style.display = "block";
// })
// document.querySelector(".result1t h4").addEventListener("click", function () {
//     document.querySelector(".result1").style.display = "block";
// })
// document.querySelector(".result11t h4").addEventListener("click", function () {
//     document.querySelector(".result11").style.display = "block";
// })
// document.querySelector(".result12t h4").addEventListener("click", function () {
//     document.querySelector(".result12").style.display = "block";
// })
// document.querySelector(".result13t h4").addEventListener("click", function () {
//     document.querySelector(".result13").style.display = "block";
// })
// document.querySelector(".result14t h4").addEventListener("click", function () {
//     document.querySelector(".result14").style.display = "block";
// })





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
//결과보기 버튼을 클릭하면 경고창을 띄어 주세요
document.querySelectorAll(".result").forEach(function(el){
  addEventListener("click", function(){
    alert("ddd")
});
})
