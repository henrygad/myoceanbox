const slides_el = document.querySelector('.js-single-product-slides')
const slidernavs_el = document.querySelectorAll('.js-single-product-slider-nav')
const dotsnav_el = document.querySelectorAll('.js-single-product-slider-dontsnav')



/** get currect position function **/
const currectposition = e => {
    let currectposition = slides_el.style.left
    slides_el.style.transition = 'all .5s ease'

    if(currectposition === '0%' || currectposition ===  '') {

        currectposition = 1

    } else if(currectposition === '-50%'){

        currectposition = 2

    } else if (currectposition === '-100%'){
        currectposition = 3
    }
     
      return currectposition;
}

/**end get currect position function **/


/* start slide fuction*/
const changeposition = index => {
    let math;    
   displayarrownav(index)
   dotsnavbackgroundcolor(index)

   if (index === 0){
       math = index * 50
       slides_el.style.left = '-' + math + '%'

   }else if(index === 1){
        math = index * 50
        slides_el.style.left = '-' + math + '%'

   } else if (index === 2){
       math = index * 50
       slides_el.style.left = '-' + math + '%'

   } 

}
/* end slide fuction*/


/**  start display arrow nav **/
const displayarrownav = (index) => {
    slidernavs_el.forEach((el, index2) => {
        let currect;
        el.style.display = 'flex'

        if(index === 0){
            currect  = 0

            if(currect === index2){
                el.style.display = 'none'  
            }

        } else if(index === 2){
                currect = 1
                if(currect === index2){
                el.style.display = 'none' 
                }
        }

    })
}
/**  end display arrow nav **/



/**  display dots nav background color **/
const dotsnavbackgroundcolor = index => {
    dotsnav_el.forEach( (el, index2) => {
        el.classList.remove('black')
        index2 === index? el.classList.add('black'): false            

    })  
}
/** end display dots nav background color **/



/**  start arrow navs slider functions **/
   /* defind slide move using arrow nav */
   const slidenav = value => { 
    if(value === 'next'){
        const currect = currectposition()
        changeposition(currect)
    }
    if(value === 'previous'){
        const currect = currectposition()
        changeposition(currect - 2)
    }

}

/* get individual arrow nav control */
slidernavs_el.forEach( (el, index) => {
    el.addEventListener( 'click', e => {
        if(index === 0) slidenav("previous")
        else if(index === 1) slidenav("next")

    })

})
/** end arrow navs slider functions **/


/** start slider dots nav functions **/
     /* defind slide move using dots nav */
     const slidenavdont = index => {
        changeposition(index) 
   }


   /* get individual dots nav control function */
   dotsnav_el.forEach( (el, index )=> {

       el.addEventListener('click', e =>{
           slidenavdont(index)
       })
   })

/** end slider dots nav functions **/
