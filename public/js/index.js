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
    text.innerHTML = `<p class="hover:animate-fill hover:rounded hover:bg-cyan-400">MusicTrade created by ${time.getFullYear()}</p>`;

    footerData.appendChild(onlineUsers);
    footerData.appendChild(text);
}
function cloakSteps() {
    var time = new Date();
    var p = document.createElement("p");
    var span = document.createElement("span");

    cloak.replaceChildren(p);
    p.classList.add("hover:text-cyan-400","hover:bg-cyan-200","hover:animate-fill", "hover:rounded");
    p.innerHTML = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
    cloak.appendChild(p);
}
setInterval(cloakSteps, 1000);


function carouselLive() {
    var path = carousel.dataset.path;
    var imgArr = ["home.jpg", "music.jpg", "studio.jpg"];
    var textArr = [         
        {
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

    carouselBtns.children[0].onclick = function() {
        index = index - 1;
        if(index < 0) {
            index = Math.max(imgArr.length)-1;
            carouselCurrentImg.setAttribute('src', `${path}${imgArr[index]}`);
            carouselTitle.innerText = textArr[index].title;
            carouselSubtitle.innerText = textArr[index].subtitle;
            return;
        }
        carouselCurrentImg.setAttribute('src', `${path}${imgArr[index]}`);
        carouselTitle.innerText = textArr[index].title;
        carouselSubtitle.innerText = textArr[index].subtitle;
    }
    carouselBtns.children[1].onclick = function() {
        console.log(index);
        index = index + 1;
        if (index == imgArr.length - 1) {
            index = 0;
            carouselCurrentImg.setAttribute('src', `${path}${imgArr[index]}`);
            carouselTitle.innerText = textArr[index].title;
            return;
        }


        carouselCurrentImg.setAttribute('src', `${path}${imgArr[index]}`);
        carouselTitle.innerText = textArr[index].title;
        carouselSubtitle.innerText = textArr[index].subtitle;
    }
    carouselCurrentImg.setAttribute('src', `${path}${imgArr[0]}`);
    carouselTitle.innerText = textArr[0].title;
    carouselSubtitle.innerText = textArr[0].subtitle;
}

carouselLive();

