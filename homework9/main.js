function generateBlocks(){
  const wrapper = document.createElement(`div`);
  wrapper.classList.add(`wrapper`);
  document.body.append(wrapper);
  


  const container = document.createElement(`div`)
  container.style.width = `250px`;
  container.style.height = `250px`;
  container.style.margin = `50px auto`;
  container.style.display = `flex`;
  container.style.flexWrap = `wrap`;
  wrapper.append(container);


  for(let i = 0; i < 25; i++){
  const square = document.createElement(`div`);
  square.style.width = "50px";
  square.style.height = "50px";
  square.style.backgroundColor = '#'+Math.random().toString(16).slice(2,8);
  container.append(square)
  }
}
generateBlocks()



function generateBlocksInterval(){
  const wrapper = document.createElement(`div`);
  wrapper.classList.add(`wrapper`);
  document.body.append(wrapper);
  const container = document.createElement(`div`)
  container.style.width = `250px`;
  container.style.height = `250px`;
  container.style.margin = `50px auto`;
  container.style.display = `flex`;
  container.style.flexWrap = `wrap`;
  wrapper.append(container);


  for(let i = 0; i < 25; i++){
  const square = document.createElement(`div`);
  square.style.width = "50px";
  square.style.height = "50px";
  setInterval(() => {square.style.backgroundColor = '#'+Math.random().toString(16).slice(2,8);}, 1000 );
  container.append(square)
  }
}
generateBlocksInterval()