function openMovie(typeMovie) {
  var i;
  var x = document.getElementsByClassName("series");
  for(i = 0; i < x.length; i++){
    x[i].style.display = "none";
  }
  document.getElementById(typeMovie).style.display = "block";
}