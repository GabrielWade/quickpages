function myFunction() {
  var x = document.getElementById("header");
  if (x.className === "topnav" || x.className === "topnav rolagem") {
    x.className += " responsive";
  }else if (x.className === "topnav rolagem responsive"){
    x.className = "topnav rolagem";
  }else {
    x.className = "topnav";
  }
}

window.addEventListener("scroll", function() {
    let header = document.querySelector('#header');
    var image = document.getElementById("logoNav");
    
    header.classList.toggle('rolagem', window.scrollY > 200);
    image.src = (window.scrollY > 200) ? "../assets/logo1.png" : "../assets/logo2.png";
});

