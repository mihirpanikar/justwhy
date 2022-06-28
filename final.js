window.onscroll = function(){
    scrollFunction()
};

function scrollFunction(){
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        document.getElementById("navbar").style.padding = "5px 10%";
        document.getElementById("navbar").style.backgroundColor = "#7F00FF";
        document.getElementById("nav-logo").style.filter = "brightness(100) saturate(0) contrast(100)";
        document.getElementById("nav-logo").style.width = "100px";
    }else{
        document.getElementById("navbar").style.backgroundColor = "transparent";
        document.getElementById("nav-logo").style.filter = "none";
        document.getElementById("navbar").style.padding = "25px 10%";
        document.getElementById("nav-logo").style.width = "150px";
    }
}

function leftScroll() {
    const left = document.querySelector(".articles-list");
    left.scrollBy(-1400, 0);
  }

  function rightScroll() {
    const right = document.querySelector(".articles-list");
    right.scrollBy(1400, 0);
  }