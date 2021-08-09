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


// Обсудить с ментором ошибку в кнопке 
// const btn = document.querySelector(".portfolio-btn")
// btn.addEventListener("click",()=>{
//     portfolioImg.forEach((i)=>{
//        i.classList.toggle("hide")
//     })
// })

const btn = document.querySelector(".portfolio-btn")

let hidenPortfolioImg = document.querySelectorAll(".portfolio-card")
hidenPortfolioImg = Array.from(hidenPortfolioImg)
hidenPortfolioImg.slice(12)
console.log(hidenPortfolioImg);


btn.addEventListener("click",()=>{
    hidenPortfolioImg.forEach((i)=>{
        if(!"click"){
            i.classList.add("hide")
        } else {
            i.classList.remove("hide")
        }
        console.log(i);
        
    })
})
