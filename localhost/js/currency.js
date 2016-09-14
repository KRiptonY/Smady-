
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");

}



window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}



let massPrice=document.querySelectorAll(".sec-col_4 .sec-item"),
              userPrice="";// Эта преременная хранит конечный выбор пользователя
function cls_select(){
  for (let i = 0 ; i < massPrice.length;i++){massPrice[i].style.color="#999999";}

}
    massPrice[0].addEventListener("click",function () {
      cls_select();
      this.style.color="#000";
      userPrice=this.id.split("_")[1];
    });
    massPrice[1].addEventListener("click",function () {
      cls_select();
      this.style.color="#000";
      userPrice=this.id.split("_")[1]
    });
    massPrice[2].addEventListener("click",function () {
      cls_select();
      this.style.color="#000";
      userPrice=this.id.split("_")[1]
    });
    massPrice[3].addEventListener("click",function () {
      cls_select();
      this.style.color="#000";
      userPrice=this.id.split("_")[1]
    });
    massPrice[4].addEventListener("click",function () {
      cls_select();
      this.style.color="#000";
      userPrice=this.id.split("_")[1]
    });
    massPrice[5].addEventListener("click",function () {
      cls_select();
      this.style.color="#000";
      userPrice=this.id.split("_")[1]
    });
