var cloak = document.querySelector("#cloak");
var footerData = document.querySelector("#footer-data");
var carousel = document.querySelector("#carousel");
var carouselCurrentImg = document.querySelector("#carousel-current-img");
var carouselBtns = document.querySelector("#carousel-btn-container");
var carouselContainer = document.querySelector("#carousel-container");

var carouselTitle = document.querySelector("#carousel-title");
var carouselSubtitle = document.querySelector("#carousel-subtitle")

window.onload = () => {
    var time = new Date();
    var text = document.createElement("div");
    var onlineUsers = document.createElement("p");

    text.classList.add("text-creator");
    onlineUsers.classList.add("flex-1", "text-left");

    footerData.dataset.user++

    onlineUsers.innerHTML = `Пользователей на странице: ${footerData.dataset.user}`;
    text.innerHTML = `<p class="hover:animate-fill hover:rounded hover:bg-cyan-200 px-2">MusicTrade created by ${time.getFullYear()}</p>`;

    footerData.appendChild(onlineUsers);
    footerData.appendChild(text);
}

function cloakSteps() {
    var time = new Date();
    var p = document.createElement("p");
    var span = document.createElement("span");

    cloak.replaceChildren(p);
    p.classList.add("hover:text-cyan-400", "hover:bg-cyan-200", "hover:animate-fill", "hover:rounded");
    p.innerHTML = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
    cloak.appendChild(p);
}
setInterval(cloakSteps, 1000);


function carouselLive() {
    var path = carousel.dataset.path;
    var imgArr = ["home.jpg", "music.jpg", "studio.jpg"];
    var textArr = [{
            index: 0,
            title: "Наше здание",
            subtitle: "Заходите сюда =)"
        },
        {
            index: 1,
            title: "Наше по",
            subtitle: "На нем мы тебя запишем!"
        },
        {
            index: 2,
            title: "Наша студия",
            subtitle: "Здесь мы запишем вас и ваших друзей!!!"
        }
    ];
    var index = 0;

    carouselBtns.children[0].onclick = function () {
        if (index < 0) {
            index = Math.max(imgArr.length) - 1;
            carouselCurrentImg.setAttribute('src', `${path}${imgArr[index]}`);
            carouselCurrentImg.classList.add("animate-flush");
            carouselCurrentImg.animationend = () => carouselCurrentImg.classList.remove("animate-flush");
            carouselTitle.innerText = textArr[index].title;
            carouselSubtitle.innerText = textArr[index].subtitle;
            return;
        } else {
            carouselCurrentImg.setAttribute('src', `${path}${imgArr[index]}`);
            carouselCurrentImg.classList.add("animate-flush");
            carouselCurrentImg.animationend = () => carouselCurrentImg.classList.remove("animate-flush");
            carouselTitle.innerText = textArr[index].title;
            carouselSubtitle.innerText = textArr[index].subtitle;
            return index--;
        }
        console.log(index);
    }
    carouselBtns.children[1].onclick = function () {
        console.log(index);
        if (index == imgArr.length) {
            index = 0;
            carouselCurrentImg.setAttribute('src', `${path}${imgArr[index]}`);
            carouselCurrentImg.classList.add("animate-flush");
            carouselCurrentImg.animationend = () => carouselCurrentImg.classList.remove("animate-flush");
            carouselTitle.innerText = textArr[index].title;
            return;
        }
        else {
            carouselCurrentImg.setAttribute('src', `${path}${imgArr[index]}`);
            carouselCurrentImg.classList.add("animate-flush");
            carouselCurrentImg.animationend = () => carouselCurrentImg.classList.remove("animate-flush");
            carouselTitle.innerText = textArr[index].title;
            carouselSubtitle.innerText = textArr[index].subtitle;
            index++;
            return;
        }
    }
    carouselCurrentImg.setAttribute('src', `${path}${imgArr[0]}`);
    carouselTitle.innerText = textArr[0].title;
    carouselSubtitle.innerText = textArr[0].subtitle;
}

carouselLive();