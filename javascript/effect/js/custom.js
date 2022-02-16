   //highlight
//    const highlight = function(){
//     hljs.highlightAll()};



    //modal
    // const modal = function () {
    //     document.querySelector(".source-btn").addEventListener("click", () => {
    //         document.querySelector("#modal").classList.add("show");
    //         document.querySelector("#modal").classList.remove("hide");
    //     });
    //     document.querySelector(".modal-close").addEventListener("click", () => {
    //         document.querySelector("#modal").classList.remove("hide");
    //     })
    // }
    // modal();


    // const modal = function () {
    //     $(".source-btn").click(() => {
    //         $("#modal").addClass("show");
    //     });
    //     $(".modal-close").click(() => {
    //         $("#modal").removeClass("show");
    //     })
    // }
    // modal();



    //tapmenu
    // const tabmenu = function () {
    //     const viewtitle = document.querySelectorAll(".view-title > ul >li");
    //     const viewcont = document.querySelectorAll(".view-cont > div");
    // }
        //각각의 버튼을 클릭하면 경고창
        // tab.forEach((btn) => {
        //     btn.addEventListener("click", () => {
             //   내가 클릭하지 않은건 active 삭제
    //             tabbtn.forEach((el) => {
    //                 el.classList.remove("active");
    //             });
    //     });
    // });
                //내가 클릭한건 active 추가
                // btn.classLite.add("active");
              //  모든 컨텐츠 박스 안보이게
                // tabcont.forEach(el => {
                //     el.stale.display = "none";
                // });
                //내가 클릭한 박스를 보이게
    //             tab.forEach((btn) => {
    //                 btn.addEventListener("click", () => {
    //                     tabbtn.forEach((el) =>{
    //                         el.classList.add

    //         })
    //     })
    // })
    // tabmenu();
        // const modal = function () {
        //     $(".source-btn").click(() => {
        //         $("#modal").addClass("show");
        //     });
        //     $(".modal-close").click(() => {
        //         $("#modal").removeClass("show");
        //     })
        // }
        // modal();



        //tapmenu
        // const tabmenu = function () {
        //     const viewtitle = document.querySelectorAll(".view-title > ul >li");
        //     const viewcont = document.querySelectorAll(".view-cont > div");

            //각각의 버튼을 클릭하면 경고창
            // tab.forEach((btn) => {
            //     btn.addEventListener("click", () => {
                    //내가 클릭하지 않은건 active 삭제
                    // tabbtn.forEach((el) => {
                    //     el.classList.remove("active");
                    // })

                    //내가 클릭한건 active 추가
                    // btn.classLite.add("active");
                    //모든 컨텐츠 박스 안보이게
                    // tabcont.forEach(el => {
                    //     el.stale.display = "none";
                    // });
                    //내가 클릭한 박스를 보이게
                    // tab.forEach((btn) => {
                    //     btn.addEventListener("click", () => {
                    //         tabbtn.forEach((el) =>{
                    //             el.classList.add

        //         })
        //     })
        // }
        // tabmenu();

            //highlight
        const highlight = function () {
            hljs.highlightAll();
        }
        //modal
        const modal = function(){
            document.querySelector(".source-btn").addEventListener("click", () => {
                document.querySelector("#modal").classList.add("show");
                document.querySelector("#modal").classList.remove("hide");
            });
            document.querySelector(".modal-close").addEventListener("click", () => {
                document.querySelector("#modal").classList.add("hide");
            })
        }
        //tabmenu
        const tabMenu = function(){
            const tabBtn = document.querySelectorAll(".view-title > ul > li");
            const tabCont = document.querySelectorAll(".view-cont > div");
            tabBtn.forEach((btn, index) => {
                btn.addEventListener("click", () => {
                    tabBtn.forEach(el => {
                        el.classList.remove("active");
                    });
                    btn.classList.add("active");
                    tabCont.forEach(el => {
                        el.style.display = "none";
                    });
                    tabCont[index].style.display = "block";
                })
            })
        }