const homebody_el = document.querySelector('body')
const main_el = document.querySelector('main')
const hamburger_el = document.querySelectorAll('.hamburger-js')
const mainnav_el = document.querySelector('.js-main-nav')
const headerfix_el = document.querySelector('.js-header-fix')
const dropsubnav_el = document.querySelectorAll('.js-dropdown-sub-nav')


/** start drop down sub nav function **/

/* defind and drop down sub nav and closed up the rest*/
const dropsubnav = index => {
        dropsubnav_el.forEach( (el, index2) => {
            
            if(el.classList != -'drop' && index2 === index ){
                el.classList.toggle('drop')
            } else{
                el.classList.remove('drop')
            }

          })  
       }

    /* get control of each nav list */
    dropsubnav_el.forEach( (el, index) => {
        el.addEventListener('click', e => {
            dropsubnav(index)
        })
    });
/* * end drop down sub nav function**/



/** start responsive nav js for small screa size **/
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
/**  end responsive nav js for small screa size **/

