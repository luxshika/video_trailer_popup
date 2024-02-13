const btnEl = document.querySelector(".btn");
const closeEl = document.querySelector(".close-icon");

const videoContainerEl = document.querySelector(".video-container ");


btnEl.addEventListener("click",()=>
{
  videoContainerEl.classList.remove("active");
  
}
);

closeEl.addEventListener("click",()=>{
  videoContainerEl.classList.add("active");
})



