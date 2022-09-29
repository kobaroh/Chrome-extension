let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
})
function renderLeads () {
    let listitems = ""
    for (let i = 0; i < myLeads.length; i++) {
    listitems += 
    '<li>
        <a target='_blank' href="${myleads[i]}">
            ${myLeads[i]}
        </a>
    </li>
    '
    }
    ulEl.innerHTML = listitems

}
