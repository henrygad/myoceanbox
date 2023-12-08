/* start global veribles */
const slidernavs_el = document.querySelectorAll('.js-slider-nav')
const dotsnav_el = document.querySelectorAll('.js-dont-nav')
const slides_el = document.querySelector('.js-hero-slides')
/* end global veribles */


    
/** start get currect position function **/
    const currectposition = e => {
        let currectposition = slides_el.style.left
        slides_el.style.transition = 'all .5s ease'

        if(currectposition === '0%' || currectposition ===  ''){
            currectposition = 1
        
            /* to the second */

        } else if(currectposition === '-100%') {
            currectposition = 2
           
            /* to the third */

        } else if(currectposition === '-200%'){
            currectposition = 3 
          
            /* to the fourth */

        } else if(currectposition === '-300%'){
            currectposition = 4
           
            /* to the fivth */

        } else if(currectposition === '-400%'){
            currectposition = 5
           
            /* to the sixth */

        } else if(currectposition === '-500%'){
            slides_el.style.transition = 'none'
            currectposition = 0
        
            /* this will return to number one */
        }
        
          return currectposition;
    }

/** end get currect position function **/


/* start slide fuction*/
    const changeposition = index => {
         let math;    
        displayarrownav(index)
        dotsnavbackgroundcolor(index)


        if (index === 1 || index === 0){
            math = index * 100
            slides_el.style.left = '-' + math + '%'

        } else if (index == 2){
            math = index * 100
            slides_el.style.left = '-' + math + '%'

        } else if(index === 3){
            math = index * 100
            slides_el.style.left = '-' + math + '%'

        } else if (index  === 4){
            math = index * 100
            slides_el.style.left = '-' + math + '%'

        } else if(index === 5){
            math = index * 100
            dotsnavbackgroundcolor(0)
            slides_el.style.left = '-' + math + '%'

        }

    }

/* end slide fuction*/



/**  start display arrow nav **/
    const displayarrownav = (index) => {
        slidernavs_el.forEach((el, index2) => {
            let currect;
            el.style.display = 'flex'

            if(index === 0 || index === 5){
                currect  = 0

                if(currect === index2){
                    el.style.display = 'none'  
                }

            } else if(index === 4){
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
            index2 === index? el.classList.add('black'): el.classList.remove('black')          

        })  
    }
/** end display dots nav background color **/



   
/** start auto slide functions **/
    function autoslide() {

        /* auto play */
        const setIntervalId = setInterval(() => {

        const currect= currectposition()
        changeposition(currect)
        }, 5000);

        /* pause auto slide */
        slides_el.parentElement.addEventListener('mouseover', e => {
        clearInterval(setIntervalId)
        })

    }

    /* play auto  slide after paused */
    slides_el.addEventListener('mouseout', e =>{
        autoslide()
    })
/**  end auto slide functions **/



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

 window.onload = autoslide();

