


const homebody_el = document.querySelector('body')
const navdropdown_el = document.querySelectorAll('.js-dropdown-nav')
/* drop down nav function */
navdropdown_el.forEach( (value, index) => {
    value.addEventListener('click', e => {
        value.classList.toggle('drop')
    })
});


/* invoke hero slider */



