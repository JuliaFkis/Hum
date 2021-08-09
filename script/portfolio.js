let navFilterPortfolio = document.querySelectorAll(".portfolio-item")
let portfolioImg = document.querySelectorAll(".portfolio-card")


for(let item of navFilterPortfolio){
    item.addEventListener("click", ()=>{

    const navData = item.getAttribute("data-tab-name")
    portfolioImg = document.querySelectorAll(".portfolio-card")

    portfolioImg.forEach((i)=>{
        if(navData === "all"){
            i.classList.remove("hide")
        } else {
            if (i.getAttribute("data-tab-name") !== navData) {
                i.classList.add("hide") 
            } else {
                i.classList.remove("hide")
            }
        }
    })
})
}


// кнопка работает не корректно:
// 1. при нажатии на all открываются все картинки, в т.ч. и скрытые
// 2. при нажатии на любой из табов и нажатии на кнопку, 
// к отфильтрованым картинкам прибавляютя все 12 скрытых



const btn = document.querySelector(".portfolio-btn")
let hidenPortfolioImg = document.querySelectorAll(".portfolio-card")
hidenPortfolioImg = Array.from(hidenPortfolioImg)
const hiden = hidenPortfolioImg.slice(12,24)

console.log(hiden);
btn.addEventListener("click",()=>{
hiden.forEach((el)=>{
    el.classList.remove("hide")
    })
})


// изучить
// фанкшн документ реди
// инклюд


