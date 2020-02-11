var hambtn = document.getElementById("hambtn");
var hamlist = document.getElementById("hamlist");
var hamtitle1 = document.getElementById("hamtitle1");
var hamitem1 = document.getElementById("hamitem1");
var hamtitle2 = document.getElementById("hamtitle2");
var hamitem2 = document.getElementById("hamitem2");
var hamtitle3 = document.getElementById("hamtitle3");
var hamitem3 = document.getElementById("hamitem3");
var hamtitle4 = document.getElementById("hamtitle4");
var hamitem4 = document.getElementById("hamitem4");
hambtn.addEventListener('click', function () {
    hamlist.classList.toggle('Open');
});
hamtitle1.addEventListener('click', function () {
    hamitem1.classList.toggle('Open');
});
hamtitle2.addEventListener('click', function () {
    hamitem2.classList.toggle('Open');
});
hamtitle3.addEventListener('click', function () {
    hamitem3.classList.toggle('Open');
});
hamtitle4.addEventListener('click', function () {
    hamitem4.classList.toggle('Open');
});