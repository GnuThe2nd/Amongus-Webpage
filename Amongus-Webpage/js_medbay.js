function showImage() {
    var img = document.getElementById('medscangif'); /* Paneb muutuja img väärtuseks medscangif*/
    img.style.visibility = 'visible'; /*muudab medscangif-fi nähtavaks*/
}



function fadeIn(element) {
  var op = 0.1;  /* muudab pildi veidi nähtavaks */
  var timer = setInterval(function () {
      if (op >= 1){
          clearInterval(timer);
      }
      element.style.opacity = op;
      op += 0.02; /*muudab pilti aina nähtavamaks*/
  }, 10); /*pildi nähtavus muutub, kuni jõuab 1-ni (100%)*/
}

/* https://stackoverflow.com/questions/15318357/show-hide-image-with-javascript */

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n); /* nupule vajutamine muudab slaidi numbrit*/
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n); /*näitab õiget slaidi olenevalt muutujast n*/
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides"); /* lisab pildi*/
  let dots = document.getElementsByClassName("dot"); /* lisab nupu, et piltide vahel liikuda*/
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; /*peidab ühe pildi*/
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", ""); /* võtab "active" staatuse pildilt ära*/
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active"; /*teeb õige pildi nähtavaks*/
}



/* https://www.w3schools.com/howto/howto_js_slideshow.asp */