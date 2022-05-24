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











// let wrapper;
// const sleep = (ms)=> new Promise(resolve=>setTimeout(resolve,ms));


// async function functionCall(a, b){
//   wrapper=document.querySelector(`.${b}`);
//   stringList=document.getElementsByClassName(a);
//   // console.log(stringList[].innerText);
//   let i=0;
//   while(true){
    
//     for(i=0; i<stringList.length; ++i){
//       currentString=stringList[i%stringList.length].innerText;
//       await create(currentString);
//       await sleep(1000);
//       await erase();
//       await sleep(1000);
//       // i++;
//     }
//   }
// }

// async function create(currentString){
//   for(i=0; i<currentString.length; i++){
//     await sleep(150);
//     wrapper.innerText=currentString.substring(0,i+1);
//   }
// }

// async function erase(){
//   while(wrapper.innerText){
//     await sleep(60);
//     wrapper.innerText=wrapper.innerText.substring(0,wrapper.innerText.length-2);
//   }
// }

// functionCall('item','fillhere');
// console.log('hi');








































