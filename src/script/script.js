
document.addEventListener('scroll', () => {
    const header = document.querySelector('.header')
    if(window.scrollY === 0){
        header.classList.remove('header--scroll')
    }else{
        header.classList.add('header--scroll')
    }
})
const nav = document.querySelector('.header__nav-button')

nav.addEventListener('click', () => {
    document.querySelector('.header__nav').classList.toggle('header__nav--visible')
})