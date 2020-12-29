const search = document.getElementById('header__social__search')
const btn = document.getElementById('header__social__search_btn')
const input = document.getElementById('header__social__search_input')
console.log(btn, search)
btn.addEventListener('click', () => {
    search.classList.toggle('active')
    
    input.focus()
})