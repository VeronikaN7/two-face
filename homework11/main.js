


 function getRandomChinese(length){
  return new Promise((resolve) => {
    let word =``;
  const timer =  setInterval(() => {
    const sign = Date.now()%100000
    word += String.fromCharCode(sign) ;
    length--;
    if(length === 0){
    clearInterval(timer)
    resolve(word)
    }
  },  length * 50);
  
})}

getRandomChinese(5).then(word => console.log(word))
