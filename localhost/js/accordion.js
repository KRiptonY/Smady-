
if (screen.availWidth<=820) {

function inst(el,title,mass) {
  el.innerHTML=ulGen(title,mass,"mobile-ul mobile-ul_none");
}
let els= document.querySelectorAll(".sec-col_1 .sec-item"),
    mass_title=["<span>Display</span>","<span>Form, colors and materials</span>","<span>Performance and memoryy</span>",
                "<span>Photo, video and audio</span>","<span>Operation System</span>","<span>Mobile networks</span>",
              "<span>Battery</span>","<span>Main purpose of the use</span>","<span>Technologies</span>","<span>Release for sale</span>"];
for (var i=0 ; i < els.length; i++){
  inst(els[i],mass_title[i],mass_tit[i]);
}
  let m_ul= document.getElementsByClassName("mobile-ul");
      els[0].addEventListener("click",function ( ){on_off(this);});
      els[1].addEventListener("click",function ( ){on_off(this);});
      els[2].addEventListener("click",function ( ){on_off(this);});
      els[3].addEventListener("click",function ( ){on_off(this);});
      els[4].addEventListener("click",function ( ){on_off(this);});
      els[5].addEventListener("click",function ( ){on_off(this);});
      els[6].addEventListener("click",function ( ){on_off(this);});
      els[7].addEventListener("click",function ( ){on_off(this);});
      els[8].addEventListener("click",function ( ){on_off(this);});
      els[9].addEventListener("click",function ( ){on_off(this);});
      function on_off (el) {
        el.children[1].classList.toggle("mobile-ul_none");}
      

}
