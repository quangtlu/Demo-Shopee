const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const modal = $('.modal')
const register = $('#register')
const login = $('#login')

function show(elemnet){
    elemnet.classList.remove('hide')
}
function hide(elemnet){
    elemnet.classList.add('hide')
}

showRegister = function(){
    show(modal)
    show(register)
    hide(login)
}
showLogin = function(){
    show(modal)
    hide(register)
    show(login)
}
hideModal = function(){
    hide(modal)
}
