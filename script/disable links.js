const links = document.querySelectorAll(".news-card")

function preventEvent(event){
    event.preventDefault()
}

links.forEach((link)=>{
link.addEventListener("click", preventEvent)
})


