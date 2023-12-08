const homebody_el = document.querySelector('body')
const main_el = document.querySelector('main')
const headerfix_el = document.querySelector('.js-header-fix')
const mainnav_el = document.querySelector('.js-main-nav')
//const secondnav_el = document.querySelector('.js-second-nav')
const hamburger_el = document.querySelectorAll('.hamburger-js')
const navdropdown_el = document.querySelectorAll('.js-dropdown-nav')


/* drop down nav function */
navdropdown_el.forEach( el => {
    el.addEventListener('click', e => {
        el.classList.toggle('drop')
    })
});



/* responsove nav js */

hamburger_el.forEach((el,index) => {
    el.addEventListener('click', e => {
        el.classList.toggle('drop_nav')
        if(index === 1) homebody_el.classList.toggle('body')
    })
})

headerfix_el.addEventListener('click', e => {
    hamburger_el.forEach((el, index) => {
       el.classList.remove('drop_nav')
       if(index === 1) homebody_el.classList.remove('body')
       
    })
})
mainnav_el.addEventListener('click', e => {
    hamburger_el.forEach((el, index) => {
        if(index === 0){
          el.classList.remove('drop_nav')

        }
    })
})

main_el.addEventListener('click', e => {
    hamburger_el.forEach((el, index) => {
        if(index === 0){
          el.classList.remove('drop_nav')

        }
    })
})

