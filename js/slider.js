var slideIndex = 0;
carousel();

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  console.log(slideIndex);
  var i;
  var x = document.getElementsByClassName("slides-container");
  var dots = document.getElementsByClassName("indicator-button");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("indicator-button-selected", "");
  }
  x[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += "indicator-button-selected";
}

function carousel() {
  plusDivs(1);
  setTimeout(carousel, 10000);
}