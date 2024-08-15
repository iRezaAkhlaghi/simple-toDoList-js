let list = document.querySelector(".list")
let title = document.querySelector(".title")
let addBtn = document.querySelector(".Add")
let search = document.querySelector(".search")
let addInp = document.querySelector(".addInp")




list.addEventListener("click", (e) => {
    if (e.target.classList = "delete") {
        e.target.parentNode.remove()
    }
})

addBtn.addEventListener("click", () => {
    let li = document.createElement("li");
    li.classList = "list-item"
    let h3 = document.createElement("h3");
    h3.classList = "title"
    h3.innerText = addInp.value
    li.appendChild(h3)
    let dlt = document.createElement("button");
    dlt.classList = "delete"
    dlt.innerText = "Delete"
    li.appendChild(dlt)


    list.appendChild(li)

    addInp.value = ""

})


search.addEventListener("input", (e) => {

    Array.from(list.children).forEach(
        element => {
            if (element.querySelector(".title").innerText.toLowerCase().includes(e.target.value.toLowerCase())) {
                element.style.display = "flex";
            } else {
                element.style.display = "none";
            }

        }



    )
}


)


