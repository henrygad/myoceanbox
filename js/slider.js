const slidernav_el = document.querySelectorAll('.js-slider-nav')
const sliderdontsnav_el = document.querySelectorAll('.js-dont-nav')
const slides_el = document.querySelector('.js-hero-slides')
/* end of global veribles */


/* Hero slider function */
const Slidehero = e => {

    /* add or remove color background to slider dont nav */
    const addndremovecolor = (value, index) => {
        sliderdontsnav_el.forEach( e => {
            e.classList.remove('black')

            if(index === 1){
                value.classList.add('black')
            } else if(index === 2){
                value.classList.add('black')
            } else if(index === 3){
                value.classList.add('black')
            } else if(index === 4){
                value.classList.add('black')
            } else if(index === 0){
                value.classList.add('black')
            }


          })  
    }

     
    /* get currect position before sliding */
    const currectposition = e => {
        let currectposition = slides_el.style.left

        if(currectposition === '0%' || currectposition ===  ''){


            /* auto add or remove color background to slider dont nav */  
            sliderdontsnav_el.forEach( (value, index) => {
                value.classList.remove('black')
                if(index === 1){
                    value.classList.add('black')
                }
           })


            slides_el.style.transition = 'all .4s ease'
            currectposition = 1

        } else if(currectposition === '-100%') {

            /* auto add or remove color background to slider dont nav */
            sliderdontsnav_el.forEach( (value, index) => {
                value.classList.remove('black')
                if(index === 2){
                    value.classList.add('black')
                }
           })

            slides_el.style.transition = 'all .4s ease'
            currectposition = 2


        } else if(currectposition === '-200%'){

            /* auto add or remove color background to slider dont nav */
            sliderdontsnav_el.forEach( (value, index) => {
                value.classList.remove('black')
                if(index === 3){
                    value.classList.add('black')
                }
           })

           slides_el.style.transition = 'all .4s ease'
            currectposition = 3 
        } else if(currectposition === '-300%'){

            /* auto add or remove color background to slider dont nav */
            sliderdontsnav_el.forEach( (value, index) => {
                value.classList.remove('black')
                if(index === 4){
                    value.classList.add('black')
                }
           })

            slides_el.style.transition = 'all .4s ease'
            currectposition = 4
        } else if(currectposition === '-400%'){

            /* auto add or remove color background to slider dont nav */
            sliderdontsnav_el.forEach( (value, index) => {
                value.classList.remove('black')
                if(index === 0){
                    value.classList.add('black')
                }
           })

            slides_el.style.transition = 'all .4s ease'
            currectposition = 5
        } else if(currectposition === '-500%'){

            /* auto add or remove color background to slider dont nav */
            sliderdontsnav_el.forEach( (value, index) => {
                value.classList.remove('black')
                if(index === 0){
                    value.classList.add('black')
                }
           })

            slides_el.style.transition = 'none'
            currectposition = 0
        }
        
          return currectposition;
    }

   
    /* slide to another position */
    function moveposition(index) {
         let math;
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
            slides_el.style.left = '-' + math + '%'

        }
    }

   
    /* auto slide function */
   function autoslide() {

        const setIntervalId = setInterval(() => {
            const currect= currectposition()
            moveposition(currect)
        }, 5000);

        /* pause auto slide */
        slides_el.parentElement.addEventListener('mouseover', e => {
            clearInterval(setIntervalId)
        })

   }
   /* start autoslide immidiately */
   autoslide()
 
   /* play auto  slide after pause */
   slides_el.addEventListener('mouseout', e =>{
       autoslide()
   })

    /* slider arrow nav slide function */
   function slidenav(value) {
    
    if(value === 'front'){
       const currect = currectposition()
       moveposition(currect)
    }
    if(value === 'back'){
         const currect = currectposition()
         moveposition(currect - 2)
    }
  }

     /* get slider arrow nav control */
    slidernav_el.forEach( (value, index) => {
        value.addEventListener( 'click', e => {
            if(index === 0) slidenav("back")
            else if(index === 1) slidenav("front")
        })
    })


  /* slider dont nav slide function */
    function slidenavdont(value, index) {
       addndremovecolor(value, index)
        moveposition(index)   
    }

 
    /* get slider dont nav control */
    sliderdontsnav_el.forEach( (value, index) => {

        value.addEventListener('click', e =>{
                if(index === 0)
                  slidenavdont(value, index)
                
                else if(index === 1) 
                  slidenavdont(value, index)
                
                else if(index === 2)
                  slidenavdont(value, index)
                
                else if(index === 3)
                  slidenavdont(value, index)
                
                else if(index === 4)
                  slidenavdont(value, index)  
        })
    })


}

window.onload = Slidehero();

