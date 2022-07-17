const btn = document.querySelector('.hamburger')
const hamMenu=document.querySelector('.ham-menu')
const main=document.querySelector('main')
const footer=document.querySelector('footer')
const searchBtn = document.querySelector('.search-btn')
 const closeBtn=document.querySelector('.close-search button');
 const closeSearch=document.querySelector('.close-search');

const hamburger= ()=>{

    btn.classList.toggle('open')
hamMenu.classList.toggle('hidden')
main.classList.toggle('hidden');
footer.classList.toggle('hidden');

}
console.log(closeSearch)
btn.addEventListener('click', hamburger);

closeBtn.addEventListener('click',()=>{
    closeSearch.classList.toggle('hidden')
    // searchBtn.classList.toggle('hidden')

} )
searchBtn.addEventListener('click',()=>{
    // closeSearch.classList.toggle('hidden')
    closeSearch.classList.toggle('hidden')

} )

// let nav = document.querySelector(".nav-container");
// let sticky =nav.offsetTop;
// let mainTop=main.offsetTop;
// window.onscroll = function() {sticker()};
// function sticker() {
    
//    if (window.pageYOffset >= sticky || window.pageYOffset > mainTop ) {
//       nav.classList.add("sticky")
//       main.classList.add("mg-top")
//    } else {
//       nav.classList.remove("sticky");
//       nav.classList.remove("mg-top");
//    }
// }




