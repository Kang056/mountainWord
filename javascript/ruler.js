// window.addEventListener("resize", function(){
//     if ($(window).width() >= 996) {
//         var mountain_title = document.querySelector(".mon_h").textContent;
//         var mountain_name = document.getElementById(mountain_title);
//         mountain_name.style.display = "flex";
//         $(document).ready(function () {
//             $(window).scroll(function () {
//                 var d = $("#depth-o-meter");
//                 d.text(Math.floor($(window).scrollTop() / 100));
//                 var mountain_title = document.querySelector(".mon_h").textContent;
//                 var mountain_name = document.getElementById(mountain_title);
    
//                 var up = parseInt(mountain_title) + parseInt(1);
//                 var down = parseInt(mountain_title) - parseInt(1);
    
//                 var mountain_name_up = document.getElementById(up);
//                 var mountain_name_down = document.getElementById(down);
    
//                 mountain_name.style.display = "flex";
//                 mountain_name_up.style.display = "none";
//                 mountain_name_down.style.display = "none";
//             });
//         });
//     }


// })

if ($(window).width() >= 996) {
    var mountain_title = document.querySelector(".mon_h").textContent;
    var mountain_name = document.getElementById(mountain_title);
    mountain_name.style.display = "flex";
    $(document).ready(function () {
        $(window).scroll(function () {
            var d = $("#depth-o-meter");
            d.text(Math.floor($(window).scrollTop() / 100));
            var mountain_title = document.querySelector(".mon_h").textContent;
            var mountain_name = document.getElementById(mountain_title);

            var up = parseInt(mountain_title) + parseInt(1);
            var down = parseInt(mountain_title) - parseInt(1);

            var mountain_name_up = document.getElementById(up);
            var mountain_name_down = document.getElementById(down);

            mountain_name.style.display = "flex";
            mountain_name_up.style.display = "none";
            mountain_name_down.style.display = "none";
        });
    });
}
else {
};

