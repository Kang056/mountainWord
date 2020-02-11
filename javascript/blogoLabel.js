var button1 = document.querySelector(".button_item1")
var button2 = document.querySelector(".button_item2")
var button3 = document.querySelector(".button_item3")
var blogo_word_wrap1 = document.querySelector(".blogo_word_wrap1")
var blogo_word_wrap2 = document.querySelector(".blogo_word_wrap2")
var blogo_word_wrap3 = document.querySelector(".blogo_word_wrap3")
function showWrapa() {
    blogo_word_wrap1.style.display = "flex";
    blogo_word_wrap2.style.display = "none";
    blogo_word_wrap3.style.display = "none";

    button1.style.background = "rgba(255, 255, 255)";
    button1.style.borderTop = "15px solid rgba(1, 97, 42)";
    button1.style.borderBottom = "1px solid rgba(255, 255, 255)";

    button2.style.background = "linear-gradient(0deg, rgb(255, 255, 255, .6) 10%, transparent 80%) center center /100% 100%, rgba(255, 255, 255, 0.4)";
    button2.style.borderTop = "15px solid rgba(1, 97, 42, .5)";
    button2.style.borderBottom = "1px solid rgba(255, 255, 255)";

    button3.style.background = "linear-gradient(0deg, rgb(255, 255, 255, .6) 10%, transparent 80%) center center /100% 100%, rgba(255, 255, 255, 0.4)";
    button3.style.borderTop = "15px solid rgba(1, 97, 42, .5)";
    button3.style.borderBottom = "1px solid rgba(255, 255, 255)";
}
function showWrapb() {
    blogo_word_wrap1.style.display = "none";
    blogo_word_wrap2.style.display = "flex";
    blogo_word_wrap3.style.display = "none";

    button1.style.background = "linear-gradient(0deg, rgb(255, 255, 255, .6) 10%, transparent 80%) center center /100% 100%, rgba(255, 255, 255, 0.4)";
    button1.style.borderTop = "15px solid rgba(1, 97, 42, .5)";
    button1.style.borderBottom = "1px solid rgba(255, 255, 255)";

    button2.style.background = "rgba(255, 255, 255)";
    button2.style.borderTop = "15px solid rgba(1, 97, 42)";
    button2.style.borderBottom = "1px solid rgba(255, 255, 255)";

    button3.style.background = "linear-gradient(0deg, rgb(255, 255, 255, .6) 10%, transparent 80%) center center /100% 100%, rgba(255, 255, 255, 0.4)";
    button3.style.borderTop = "15px solid rgba(1, 97, 42, .5)";
    button3.style.borderBottom = "1px solid rgba(255, 255, 255)";
}
function showWrapc() {
    blogo_word_wrap1.style.display = "none";
    blogo_word_wrap2.style.display = "none";
    blogo_word_wrap3.style.display = "flex";

    button1.style.background = "linear-gradient(0deg, rgb(255, 255, 255, .6) 10%, transparent 80%) center center /100% 100%, rgba(255, 255, 255, 0.4)";
    button1.style.borderTop = "15px solid rgba(1, 97, 42, .5)";
    button1.style.borderBottom = "1px solid rgba(255, 255, 255)";

    button2.style.background = "linear-gradient(0deg, rgb(255, 255, 255, .6) 10%, transparent 80%) center center /100% 100%, rgba(255, 255, 255, 0.4)";
    button2.style.borderTop = "15px solid rgba(1, 97, 42, .5)";
    button2.style.borderBottom = "1px solid rgba(255, 255, 255)";

    button3.style.background = "rgba(255, 255, 255)";
    button3.style.borderTop = "15px solid rgba(1, 97, 42)";
    button3.style.borderBottom = "1px solid rgba(255, 255, 255)";
}
button1.onclick = showWrapa;
button2.onclick = showWrapb;
button3.onclick = showWrapc;