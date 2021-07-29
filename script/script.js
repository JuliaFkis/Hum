let tab = function() {
    let tabNav = document.querySelectorAll(".service-menu-item")
    let tabContent = document.querySelectorAll(".service-content")
    let tabTarget = ""

    tabNav.forEach(item => {
        item.addEventListener("click", selectTabNav )
    })

    function selectTabNav() {
        tabNav.forEach(item => {
            item.classList.remove("is-active")
        })
        this.classList.add("is-active")
        tabTarget = this.getAttribute("data-tab-name")
        selectTabContent(tabTarget)
    }

    function selectTabContent(tabTarget) {
        tabContent.forEach(item => {
            
            if (item.classList.contains(tabTarget)){
                item.classList.add("is-active")
            } else {
                item.classList.remove("is-active")
            }
            
        })
    }
}
tab()


// дата фильтр в хтмл