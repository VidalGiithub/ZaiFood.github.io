const nav = document.getElementById("nav");

window.addEventListener("scroll", ()=>{
   const scrollheight = window.pageYOffset;
   const navbar = nav.getBoundingClientRect().height;

    if(scrollheight > navbar ){
        nav.classList.add("active");
    }else{
        nav.classList.remove("active");
    }
})

const inputC = document.querySelectorAll(".in");
document.querySelector(".sub").addEventListener("click", ()=>{
    inputC.value = "";
});


const links = document.getElementById("links");
const btnlinks = document.getElementById("links-btn");
btnlinks.addEventListener("click", ()=>{
    if(links.classList.contains("clicks")){
        links.classList.remove("clicks")
    }else{
        links.classList.add("clicks");
    }
});