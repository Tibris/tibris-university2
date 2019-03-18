var slideIndex = 1;

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlide");  //getting the number of slides
  var dots = document.getElementsByClassName("dot");        //getting the number of dots
  if (n > slides.length) {slideIndex = 1}                   //if n surpasses the total number of slides it goes to 1
  if (n < 1) {slideIndex = slides.length}                   
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";               //hiding all the slides(img)
  }
  for (i = 0; i < dots.length; i++) {               //coloring the active dot using the active class
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

showSlides(slideIndex);

function myFunction() {
  let x = document.getElementById("myNavbar");
  if(x.className === "navbar") {
    x.className += " responsive";
  }else {
    x.className = "navbar";
  }
}