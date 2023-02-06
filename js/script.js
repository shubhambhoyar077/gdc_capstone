const speakerContainer = document.querySelector(".featured_speakers .container");

let speakers = {
    speaker1:{
        imgurl: "./img/Felix_Kramer.png",
        name: "Felix Kramer",
        title: "The Game Band",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, il!",
    },
    speaker2:{
        imgurl: "./img/andrew_maximov.jpg",
        name: "Andrew Maximov",
        title: "The Game Band",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, il!",
    },
    speaker3:{
        imgurl: "./img/Julien_Merceron.png",
        name: "Julien Merceron",
        title: "The Game Band",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, il!",
    },
    speaker4:{
        imgurl: "./img/Nick_van_Vugt.jpg",
        name: "Nick Van Vugt",
        title: "The Game Band",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, il!",
    },
    speaker5:{
        imgurl: "./img/pete_isensee.jpg",
        name: "Pete Isensee",
        title: "The Game Band",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, il!",
    },
    speaker6:{
        imgurl: "./img/sam_maggs.jpg",
        name: "Sam Maggs",
        title: "The Game Band",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, il!",
    },
};

for(let speaker in speakers){
    speakerContainer.innerHTML += `
                <div class="speaker">
                <img class="speaker_img" src=${speakers[speaker].imgurl} alt="">
                <div class="speaker_info">
                    <h4 class="speaker_name">${speakers[speaker].name}</h4>
                    <h5 class="speaker_title">${speakers[speaker].title}</h5>
                    <hr class="custome_border">
                    <p class="speaker_des">${speakers[speaker].description}</p>
                </div>
                </div>`
    }

const openmenubtn = document.querySelector("#toggle-mobile-menu");
const closemenubtn = document.querySelector("#close-menu");
const mobilemenu = document.querySelector('.mobile-menu');

openmenubtn.addEventListener('click', () => {
    mobilemenu.classList.toggle("disable")
});
closemenubtn.addEventListener('click', () => {
    mobilemenu.classList.toggle("disable");
});