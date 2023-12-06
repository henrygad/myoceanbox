const homebody_el = document.querySelector('body')

const navdropdown_el = document.querySelectorAll('.js-dropdown-nav')
/* drop down nav function */
navdropdown_el.forEach( el => {
    el.addEventListener('click', e => {
        el.classList.toggle('drop')
    })
});



/* responsove nav js */

const dropnav = (el) =>{
    el.classList.toggle('drop_nav')
}


const hamburger_el = document.querySelectorAll('.hamburger-js')
hamburger_el.forEach((el, index) => {
    el.addEventListener('click', e => {
        dropnav(el, index)
        if(index === 1){
            homebody_el.classList.toggle('body')
        }

    })
})


