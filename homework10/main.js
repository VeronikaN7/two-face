

const keys = Array.from(document.querySelectorAll("div.key"));

keys.forEach((key, i) => key.addEventListener(`click`, function(){
    const audios = Array.from(document.querySelectorAll("audio"));
     if(key[i] === audios[i])
    return
    key.classList.add('playing');
    audios[i].currentTime = 0;
    audios[i].play();
    setTimeout(() => {
        key.classList.remove('playing');
    }, 100)
}))


window.addEventListener('keydown', function playSound(e){
    const audio = document.querySelector(`audio[id="${e.keyCode}"]`);
    const key = document.querySelector(`div[id="${e.keyCode}"]`);
   if (key === audio) 
    return  
    audio.currentTime = 0;
    audio.play();
    setTimeout(() => {
        key.classList.add('playing');
    }, 100)
    setTimeout(() => {
        key.classList.remove('playing');
    }, 200)
  });


