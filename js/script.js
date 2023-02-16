const speakerContainer = document.querySelector('.featured_speakers .container');
const moreBtn = document.querySelector('#more-speakers-btn');

const speakers = {
  speaker1: {
    imgurl: './img/Felix_Kramer.png',
    name: 'Felix Kramer',
    title: 'The Game Band',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, il!',
  },
  speaker2: {
    imgurl: './img/andrew_maximov.jpg',
    name: 'Andrew Maximov',
    title: 'The Game Band',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, il!',
  },
  speaker3: {
    imgurl: './img/Julien_Merceron.png',
    name: 'Julien Merceron',
    title: 'The Game Band',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, il!',
  },
  speaker4: {
    imgurl: './img/Nick_van_Vugt.jpg',
    name: 'Nick Van Vugt',
    title: 'The Game Band',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, il!',
  },
  speaker5: {
    imgurl: './img/pete_isensee.jpg',
    name: 'Pete Isensee',
    title: 'The Game Band',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, il!',
  },
  speaker6: {
    imgurl: './img/sam_maggs.jpg',
    name: 'Sam Maggs',
    title: 'The Game Band',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, il!',
  },
};

// if (speakerContainer) {
//   Object.keys(speakers).forEach((speaker) => {
//     speakerContainer.innerHTML += `
//                     <div class="speaker">
//                     <img class="speaker_img" src=${speakers[speaker].imgurl} alt="">
//                     <div class="speaker_info">
//                         <h4 class="speaker_name">${speakers[speaker].name}</h4>
//                         <h5 class="speaker_title">${speakers[speaker].title}</h5>
//                         <hr class="custome_border">
//                         <p class="speaker_des">${speakers[speaker].description}</p>
//                     </div>
//                     </div>`;
//   });
// }
if (speakerContainer) {
  const createSpeaker = (speaker) => {
    speakerContainer.innerHTML += `
                    <div class="speaker">
                    <img class="speaker_img" src=${speakers[speaker].imgurl} alt="">
                    <div class="speaker_info">
                        <h4 class="speaker_name">${speakers[speaker].name}</h4>
                        <h5 class="speaker_title">${speakers[speaker].title}</h5>
                        <hr class="custome_border">
                        <p class="speaker_des">${speakers[speaker].description}</p>
                    </div>
                    </div>`;
  };

  let openmore = true;

  const openAll = (speakerKeys) => {
    speakerKeys.forEach((speaker) => {
      createSpeaker(speaker);
    });
  };

  const openTwo = (speakerKeys) => {
    speakerKeys.forEach((speaker) => {
      createSpeaker(speaker);
    });
  };

  if (window.innerWidth > 767) {
    speakerContainer.innerHTML = '';
    openAll(Object.keys(speakers));
    moreBtn.style.display = 'none';
  } else {
    speakerContainer.innerHTML = '';
    openTwo(Object.keys(speakers).slice(0, 2));
    moreBtn.style.display = 'block';
    moreBtn.innerHTML = 'MORE <i class="fa fa-arrow-down">';
  }

  window.addEventListener('resize', () => {
    const nextScreen = (window.innerWidth > 767 ? 'desktop' : 'mobile');
    speakerContainer.innerHTML = '';
    if (nextScreen === 'desktop') {
      openAll(Object.keys(speakers));
      moreBtn.style.display = 'none';
    }
    if (nextScreen === 'mobile') {
      moreBtn.style.display = 'block';
      if (!openmore) {
        openAll(Object.keys(speakers));
        moreBtn.innerHTML = 'LESS <i class="fa fa-arrow-up">';
      } else {
        openTwo(Object.keys(speakers).slice(0, 2));
        moreBtn.innerHTML = 'MORE <i class="fa fa-arrow-down">';
      }
    }
  });

  moreBtn.addEventListener('click', () => {
    if (openmore) {
      speakerContainer.innerHTML = '';
      openAll(Object.keys(speakers));
      openmore = false;
      moreBtn.innerHTML = 'LESS <i class="fa fa-arrow-up">';
    } else {
      speakerContainer.innerHTML = '';
      openTwo(Object.keys(speakers).slice(0, 2));
      openmore = true;
      moreBtn.innerHTML = 'MORE <i class="fa fa-arrow-down">';
    }
  });
}
// Menu button
const openmenubtn = document.querySelector('#toggle-mobile-menu');
const closemenubtn = document.querySelector('#close-menu');
const mobilemenu = document.querySelector('.mobile-menu');

openmenubtn.addEventListener('click', () => {
  mobilemenu.classList.toggle('disable');
});
closemenubtn.addEventListener('click', () => {
  mobilemenu.classList.toggle('disable');
});