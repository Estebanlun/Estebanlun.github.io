let hideText = document.getElementById('hideText')
let hideText_btn = document.getElementById('hideText_btn')

hideText_btn.addEventListener('click', toggleText)

function toggleText(){
    hideText.classList.toggle('show')

    if (hideText.classList.contains('show')) {
        hideText_btn.innerHTML = "Ver menos"
    } else {
        hideText_btn.innerHTML = "Ver mas"
    }
}


let hideExp = document.getElementById('hideExp')
let hideExp_btn = document.getElementById('hideExp_btn')

hideExp_btn.addEventListener('click', toggleExp)

function toggleExp(){
    hideExp.classList.toggle('show')
    if (hideExp.classList.contains('show')) {
        hideExp_btn.innerHTML = "Ver menos"
    } else {
        hideExp_btn.innerHTML = "Ver mas"
    }
}

let hideExpL = document.getElementById('hideExpL')
let hideExpL_btn = document.getElementById('hideExpL_btn')

hideExpL_btn.addEventListener('click', toggleExpL)

function toggleExpL(){
    hideExpL.classList.toggle('show')
    if (hideExpL.classList.contains('show')) {
        hideExpL_btn.innerHTML = "Ver menos"
    } else {
        hideExpL_btn.innerHTML = "Ver mas"
    }
}

let hideForm= document.getElementById('hideForm')
let hideForm_btn = document.getElementById('hideForm_btn')

hideForm_btn.addEventListener('click', toggleForm)

function toggleForm(){
    hideForm.classList.toggle('show')
    if (hideForm.classList.contains('show')) {
        hideForm_btn.innerHTML = "Ver menos"
    } else {
        hideForm_btn.innerHTML = "Ver mas"
    }
}