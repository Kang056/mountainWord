var num1 = 0;
var num2 = 0;
var nnum1 = document.querySelector(".count1").textContent;
var nnum2 = document.querySelector(".count2").textContent;
var timerId1;
var timerId2;

function countDown1() {
    num1++;
    if (num1 >= nnum1) {
        num1 = nnum1;
        clearInterval(timerId1);
    }
    document.querySelector(".count1").innerText = num1;
}
function countDown2() {
    num2++;
    if (num2 >= nnum2) {
        num2 = nnum2;
        clearInterval(timerId2);
    }
    document.querySelector(".count2").innerText = num2;
}
timerId1 = setInterval(countDown1, 10);
timerId2 = setInterval(countDown2, 12);