const apiMainURLTablePage = "https://moviesmern.herokuapp.com/";




var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); 
}



divImageOnHomePage.innerHTML = 
`
<div class="divOfImageShow">
<img src="https://pbs.twimg.com/profile_images/1208234904405757953/mT0cFOVQ_400x400.jpg">
<div class="hoverCap">Funny</div>
</div>


<div class="divOfImageShow">
<img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/tatb3-unit-10957-r-1634841828.jpg">
<div class="hoverCap">Romantic</div>
</div> 


<div class="divOfImageShow">
<img src="https://see.news/wp-content/uploads/2021/09/daniel-craig-bond-1d24ba1.jpg">
<div class="hoverCap">Action</div>

</div>

<div class="divOfImageShow">
<img src="https://m.media-amazon.com/images/M/MV5BMTg3NzY4NTI3N15BMl5BanBnXkFtZTgwMzc0MDc4NDM@._V1_.jpg">
<div class="hoverCap">Documentary</div>
</div>
`

