
function* createIdGenerator(){
  let i=0;
  while(true){
   yield i++
  }
}

const idGenerator = createIdGenerator();
setInterval(() => {
  console.log(idGenerator.next().value)
}, 1000);



