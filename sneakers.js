const active = document.getElementById("active");
const active2 = document.getElementById("active2");
const active3 = document.getElementById("active3");
const active4 = document.getElementById("active4");
const mainImages = document.getElementById("mainImages")
const images = document.getElementById("subImage").children;
const MobileImages = document.getElementById("mobile").children;
console.log(MobileImages)
// window.screen.width <760 ? console.log(images):console.log(window.screen.width)
const increase= document.getElementById("increase")
const decrease= document.getElementById("decrease")
const count = document.getElementById("count")
let counter=0; 
increase.onclick=(e)=>{
    counter++;
    count.innerText=counter;
   
}
   
decrease.onclick=()=>{
    counter--;
    count.innerText=counter;
}
 for (const image of images) {
    image.onclick  = () =>{
        mainImages.src=image.src
    }
    
 }

// active.onclick = () =>{
//     mainImages.src= active.src

    
// }
// active2.onclick = () =>{
   
//     mainImages.src= active2.src
      
// }
// active3.onclick = () =>{
   
//     mainImages.src= active3.src
      
// }
// active4.onclick = () =>{
   
//     mainImages.src= active4.src
     
// }
const list = document.getElementById("list");
const toggle = document.getElementById("toggle")
const exit = document.getElementById("exit")
toggle.onclick = (mylist)=>{
    if(list.style.display==='flex'){
        list.style.display='none'
        
        
        
    }else {
        list.style.display='flex'
        list.style.flexDirection="column"
    }
      
}
exit.onclick = ()=>{
    if(list.style.display==='flex'){
        list.style.display='none'}
}
const previous = document.getElementById("navileft")
const next = document.getElementById("naviright")
let index=0;
previous.onclick = () =>{
    if(index===0){
    index=MobileImages.length;
    }
    index--;
    for (const image of MobileImages) {
      image.classList.remove("active") 
    }
    MobileImages[index].classList.add("active") 
    console.log(index)
    
    
}

next.onclick = () =>{
    index++;
    if(index === MobileImages.length){
        index=0
    }
  for (const image of MobileImages) {
    image.classList.remove("active");
  }
  MobileImages[index].classList.add("active") 
//   previewImage(images[index].src)

}