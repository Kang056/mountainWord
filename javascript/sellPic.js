function showLarge(e) {
    let small = e.target;
    document.getElementById("large").src = small.src.replace("SP_", "");
}

let picture_small = document.querySelectorAll(".picture_small img");
for (let i = 0; i < picture_small.length; i++) {
    picture_small[i].onclick = showLarge;
}
