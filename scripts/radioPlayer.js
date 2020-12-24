export const radioPlayerInit = () => {
  const radio = document.querySelector('.radio');
  const radioCoverImg = document.querySelector('.radio-cover__img');
  const radioNavigation = document.querySelector('.radio-navigation');
  const radioHeaderBig = document.querySelector('.radio-header__big');
  const radioItem = document.querySelectorAll('.radio-item');
  const radioStop = document.querySelector('.radio-stop');
  /* const radioVolume = document.querySelector('.radio-volume');
  const radioMute = document.querySelector('.radio-mute'); */

  const audio = new Audio();
  audio.type = "audio/aac";

  /* let tempVolume = audio.volume; */

  radioStop.disabled = true;

  const changeIconPlay = () => {
    if (audio.paused) {
      radio.classList.remove('play');
      radioStop.classList.add('fa-play');
      radioStop.classList.remove('fa-stop');
    } else {
      radio.classList.add('play');
      radioStop.classList.add('fa-stop');
      radioStop.classList.remove('fa-play');
    }
  };

  const selectItem = e => {
    radioItem.forEach(item => item.classList.remove('select'));
    e.classList.add('select');
  }

  radioNavigation.addEventListener('change', event => {
    const target = event.target;
    const parent = target.closest('.radio-item');

    const title = parent.querySelector('.radio-name').textContent;
    radioHeaderBig.textContent = title;

    const urlImage = parent.querySelector('.radio-img').src;
    radioCoverImg.src = urlImage;

    radioStop.disabled = false;
    audio.src = target.dataset.radioStation;

    audio.play();
    changeIconPlay();
    selectItem(parent);
  });

  radioStop.addEventListener('click', () => {
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }

    changeIconPlay();
  });

  /* radioVolume.addEventListener('input', () => {
    audio.volume = radioVolume.value / 100;
    
  });

  radioMute.addEventListener('click', () => {
    
    if (audio.volume) {
      tempVolume = audio.volume;
      audio.volume = 0;
    } else {
      audio.volume = tempVolume;
    }
  });

  radioVolume.value = audio.volume * 100;

  return () => {
    audio.pause();
    changeIconPlay();
  } */
};