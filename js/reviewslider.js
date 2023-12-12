/* start global veribles */
const reviewslidernavs_el = document.querySelectorAll('.js-review-nav')
const reviewslidderdotsnav_el = document.querySelectorAll('.js-review-dot-nav')
const reviewslides_el = document.querySelector('.js-review-slides')
/* end global veribles */


    
/** start get currect position function **/
    const RScurrectposition = e => {
        let RScurrectposition = reviewslides_el.style.left
        reviewslides_el.style.transition = 'all .5s ease'

        if(RScurrectposition === '0%' || RScurrectposition ===  ''){
            RScurrectposition = 1
        
            /* to the second */

        } else if(RScurrectposition === '-100%') {
            RScurrectposition = 2
           
            /* to the third */

        } else if(RScurrectposition === '-200%'){
            RScurrectposition = 3 
          
            /* to the fourth */

        } else if(RScurrectposition === '-300%'){
            RScurrectposition = 4
           
            /* to the fivth */

        } else if(RScurrectposition === '-400%'){
            RScurrectposition = 5
           
            /* to the sixth */

        } else if(RScurrectposition === '-500%'){
            reviewslides_el.style.transition = 'none'
            RScurrectposition = 0
        
            /* this will return to number one */
        }
        
          return RScurrectposition;
    }

/** end get currect position function **/


/* start slide fuction*/
    const RSchangeposition = index => {
         let math;    
        RSdisplayarrownav(index)
        RSdotsnavbackgroundcolor(index)


        if (index === 1 || index === 0){
            math = index * 100
            reviewslides_el.style.left = '-' + math + '%'

        } else if (index == 2){
            math = index * 100
            reviewslides_el.style.left = '-' + math + '%'

        } else if(index === 3){
            math = index * 100
            reviewslides_el.style.left = '-' + math + '%'

        } else if (index  === 4){
            math = index * 100
            reviewslides_el.style.left = '-' + math + '%'

        } else if(index === 5){
            math = index * 100
            RSdotsnavbackgroundcolor(0)
            reviewslides_el.style.left = '-' + math + '%'

        }

    }

/* end slide fuction*/



/**  start display arrow nav **/
    const RSdisplayarrownav = (index) => {
        reviewslidernavs_el.forEach((el, index2) => {
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
    const RSdotsnavbackgroundcolor = index => {
        reviewslidderdotsnav_el.forEach( (el, index2) => {
            index2 === index? el.classList.add('black'): el.classList.remove('black')          

        })  
    }
/** end display dots nav background color **/



   
/** start auto slide functions **/
    function autoslide() {

        /* auto play */
        const setIntervalId = setInterval(() => {

        const currect= RScurrectposition()
        RSchangeposition(currect)
        }, 10000);

        /* pause auto slide */
        reviewslides_el.parentElement.addEventListener('mouseover', e => {
        clearInterval(setIntervalId)
        })

    }

    /* play auto  slide after paused */
    reviewslides_el.addEventListener('mouseout', e =>{
        autoslide()
    })
/**  end auto slide functions **/



/**  start arrow navs slider functions **/
   /* defind slide move using arrow nav */
   const RSslidenav = value => { 
        if(value === 'next'){
            const currect = RScurrectposition()
            RSchangeposition(currect)
        }
        if(value === 'previous'){
            const currect = RScurrectposition()
            RSchangeposition(currect - 2)
        }

  }

    /* get individual arrow nav control */
    reviewslidernavs_el.forEach( (el, index) => {
        el.addEventListener( 'click', e => {
            if(index === 0) RSslidenav("previous")
            else if(index === 1) RSslidenav("next")

        })

    })
/** end arrow navs slider functions **/



/** start slider dots nav functions **/
     /* defind slide move using dots nav */
    const RSslidenavdont = index => {
         RSchangeposition(index) 
    }

 
    /* get individual dots nav control function */
    reviewslidderdotsnav_el.forEach( (el, index )=> {

        el.addEventListener('click', e =>{
            RSslidenavdont(index)
        })
    })

/** end slider dots nav functions **/

 window.onload = autoslide();

