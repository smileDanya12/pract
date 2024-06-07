let header_button = document.querySelector(".mobile_icon");
header_button.addEventListener("click", function () {
    let header = document.querySelector("header");
    if (header.classList.contains("open")){
        close_popup();
    }

    else{
        header.classList.add("open");
        header_button.querySelector("img").src = "https://img.icons8.com/?size=100&id=67311&format=png&color=000000"
    }
    
});

function close_popup() {
    document.querySelector("header").classList.remove("open");
        header_button.querySelector("img").src = "free-icon-menu-8695433.png"
}

document.querySelector("#grid").addEventListener("click", close_popup, false);



document.querySelector("header .popup").addEventListener("click", close_popup, false);

document.querySelector("#show_add_photo").addEventListener("click", function () {
    document.querySelector("#add_photo").classList.add("open");
});

document.querySelector("#cancel").addEventListener("click", function () {
    document.querySelector("#add_photo").classList.add("open");
});

document.querySelector("#add_photo").addEventListener("click", function () {
    let src = document.querySelector("#add_photo_src").value;
    let text = document.querySelector("#add_photo_text").value;
if(src && text) {
    let new_photo_div = document.createElement("div");
    new_photo_div.classList.add("photo");

    let new_img = document.createElement("img");
    new_img.src = src;
    new_photo_div.append(new_img);

    let new_p = document.createElement("p");
    new_p.innerText = text;

    document.querySelector("#grid").prepend(new_photo_div);
    document.querySelector("#add_photo").classList.remove("open");
}
}
);