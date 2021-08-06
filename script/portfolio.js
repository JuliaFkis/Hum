let navFilterPortfolio = document.querySelectorAll(".portfolio-item")

for(let item of navFilterPortfolio){
    item.addEventListener("click", ()=>{

    const navData = item.getAttribute("data-tab-name")
    let portfolioImg = document.querySelectorAll(".portfolio-card")

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




