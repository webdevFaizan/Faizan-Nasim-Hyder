let wrapper
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))

async function writingAll (stringTarget, container){
  wrapper = document.querySelector(`.${container}`);
  const stringsContainer = document.getElementsByClassName(stringTarget);
     
  while(1){
    for (i=0; i <  stringsContainer.length ; i++){
      const string = stringsContainer[i].textContent
      await write(string)
      await sleep(2300)
      await erase()
      await sleep(1000)
    };
  }
};

async function write(text){    
  let index = 0
  while(index < text.length){
    const timeout = 120
    await sleep(timeout)
    index++
    wrapper.innerText = text.substring(0, index)
  }
};


async function erase() {
  while(wrapper.textContent.length){
    const timeout = 60
    await sleep(timeout)
    wrapper.textContent = wrapper.textContent.substring(0, wrapper.textContent.length - 2)
  }
};

writingAll('item', 'fillhere');














































