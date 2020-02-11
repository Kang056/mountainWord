function switchFavorite() {
    var heart = document.getElementById("heart");
    var nnum2 = document.querySelector(".count2").textContent;
    if (heart.title == "加入收藏") {
        heart.src = "img/blogo/favorite2.png";
        heart.title = "取消收藏";
        document.querySelector(".count2").innerText = parseInt(nnum2) + parseInt(1);
    }

    else {
        heart.src = "img/blogo/favorite.png";
        heart.title = "加入收藏";
        document.querySelector(".count2").innerText = parseInt(nnum2) - parseInt(1);
    }

}


//設定[加入收藏 或 取消收藏]的點按事件
document.getElementById("heart").onclick = switchFavorite;
document.getElementById("myImage").onclick = switchFavorite;
document.getElementById("myImage").onclick = switchFavorite;

