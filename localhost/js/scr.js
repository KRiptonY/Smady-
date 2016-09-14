var cls_btn = document.getElementById("sec-clear-btn"),
    close_btn=document.getElementById("sec-close"),
    off_=document.querySelectorAll(".sec-col_1 .sec-item");
    disp=document.getElementById("disp"),
    fcm=document.getElementById("fcm"),
    perf=document.getElementById("perf"),
    pva=document.getElementById("pva"),
    os=document.getElementById("os"),
    net=document.getElementById("net"),
    batt=document.getElementById("batt"),
    mpu=document.getElementById("mpu"),
    tech=document.getElementById("tech"),
    rel=document.getElementById("rel");
var device =screen.availWidth<=820?"phone":"desktop";

cls_btn.addEventListener("click" , function(){
  document.getElementById("sec-result").innerHTML="";
});
close_btn.addEventListener("click", function () {
  document.getElementsByClassName("sec-wrapper")[0].style.display="none";
});



/*
 * Вчасти кода ниже содержатся массивы, элементы которого и есть
 * пункты списка. Каждая переменная, содержащая массив -- это определённый
 * роздел из ПЕРВОЙ колонки
 * [!] В тексте пункта списка не должны использоваться одинарные ковычки ('')
 */
var sec_container= document.getElementsByClassName("sec-col_2")[0],
    mass_tit=[['Color accuracy and image clarity',
                'High resolution screen',
                'The smallest frame on the sides of the display',
                'Optimal screen size','Damage-resistant screen ',
                'Secondary display','Curved screen'
              ],
              ["Уточняющие параметры из этой области 1"],
              ["Уточняющие параметры из этой области 2"],
              ["Уточняющие параметры из этой области 3"],
              ["Уточняющие параметры из этой области 4"],
              ["Уточняющие параметры из этой области 5"],
              ["Уточняющие параметры из этой области 6"],
              ["Уточняющие параметры из этой области 7"],
              ["Уточняющие параметры из этой области 8"],
              ["Уточняющие параметры из этой области 9"]];

function ulGen (title,mass,classes){
  for (let i = 0 ; i < off_.length; i++){off_[i].style.color="#999999"} // Эти циклы делают все пункты исходно-серого цвета
  for (let i = 0 ; i < mass.length; i++){
    mass[i]=  '<li class="sec-item" draggable="true">'+mass[i]+"</li>";
  }
  if (classes===undefined){
    classes="";
  }
  return title+'<ul id="draggable" class="sec-items '+classes+'">\n'+mass.join("\n")+'</ul>\n';
}





(function () {
  if (device==="desktop") {
    sec_container.innerHTML=ulGen('<h1 class="sec-title-colum">Need</h1>\n',mass_tit[0]);}
  disp.style.color="#000";
})(); // Эта функция вызывается чтобы сделать пункт "Display" активным по умолчанию после загрузки страницы

disp.addEventListener("click",function () {
  sec_container.innerHTML=ulGen('<h1 class="sec-title-colum">Need</h1>\n',mass_tit[0]);
  this.style.color="#000";
} );
fcm.addEventListener("click",function () {
   sec_container.innerHTML=ulGen('<h1 class="sec-title-colum">Need</h1>\n',mass_tit[1]);
      this.style.color="#000";
} );
perf.addEventListener("click",function () {
  sec_container.innerHTML=ulGen('<h1 class="sec-title-colum">Need</h1>\n',mass_tit[2]);
    this.style.color="#000";
} );
pva.addEventListener("click",function () {
  sec_container.innerHTML=ulGen('<h1 class="sec-title-colum">Need</h1>\n',mass_tit[3]);
    this.style.color="#000";
} );
os.addEventListener("click",function () {
  sec_container.innerHTML=ulGen('<h1 class="sec-title-colum">Need</h1>\n',mass_tit[4]);
    this.style.color="#000";
} );
net.addEventListener("click",function () {
  sec_container.innerHTML=ulGen('<h1 class="sec-title-colum">Need</h1>\n',mass_tit[5]);
    this.style.color="#000";
 } );
batt.addEventListener("click",function () {
  sec_container.innerHTML=ulGen('<h1 class="sec-title-colum">Need</h1>\n',mass_tit[6]);
  this.style.color="#000";
 } );
mpu.addEventListener("click",function () {
  sec_container.innerHTML=ulGen('<h1 class="sec-title-colum">Need</h1>\n',mass_tit[7]);
  this.style.color="#000";
 } );
tech.addEventListener("click",function () {
  sec_container.innerHTML=ulGen('<h1 class="sec-title-colum">Need</h1>\n',mass_tit[8]);
  this.style.color="#000";
 } );
rel.addEventListener("click",function () {
  sec_container.innerHTML=ulGen('<h1 class="sec-title-colum">Need</h1>\n',mass_tit[9]);
  this.style.color="#000";
} );


if (device==="desktop"){
  let dnd_els=sec_container.children[1].children;
  dnd_event(dnd_els[0]);


  function dnd_event(el){
    el.addEventListener("dragstart",function () {
      this.classList.add("dnd");
    });
    el.addEventListener("dragend",function () {
      this.classList.remove("dnd");
    } );
  }
}




let sel_need=document.querySelector(".sec-col_3>h1"),
    col_1=document.getElementsByClassName("sec-col_1")[0],
    col_2=document.getElementsByClassName("sec-col_2")[0],
    col_4=document.getElementsByClassName("sec-col_4")[0],
    col_5=document.getElementsByClassName("sec-col_5")[0],
    col_cls_btn=document.getElementById("sec-clear-btn"),
    indicator=document.getElementsByClassName("sec-indicator")[0];
    i_txt_1=document.getElementById("sec-ind-n");
    i_txt_2=document.getElementById("sec-ind-b");

sel_need.addEventListener("click",function(){
  if (/tit-on/.test(this.className)){
    col_1.style.display="none";
    col_2.style.display="none";
    col_4.style.display="block";
    col_5.style.display="block";
    col_cls_btn.style.display="none";
    document.querySelector(".sec-col_3>h1").classList.remove("tit-on");
    i_txt_1.style.color="#d4d4d4";
    i_txt_2.style.color="white";
    indicator.style.left="730px"; indicator.style.width="250px";//Изменяет положение индикатора
  } else {
    col_1.style.display="block";
    col_2.style.display="block";
    col_4.style.display="none";
    col_5.style.display="none";
    col_cls_btn.style.display="block";
    document.querySelector(".sec-col_3>h1").classList.add("tit-on");
    i_txt_1.style.color="white";
    i_txt_2.style.color="#d4d4d4";
    indicator.style.left="315px"; indicator.style.width="153px";//Изменяет положение индикатора
  }

});

var needs=document.getElementsByClassName("needs")[0];
needs.addEventListener("click",function () {
  document.getElementsByClassName("sec-wrapper")[0].style.display="block";
  document.getElementsByClassName("rac")[0].style.display="none";
  document.getElementsByClassName("info")[0].style.display="none";
});
