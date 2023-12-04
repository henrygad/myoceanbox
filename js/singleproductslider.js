const slides_el = document.querySelector('.js-single-product-slides')
const slidernavs_el = document.querySelectorAll('.js-single-product-slider-nav')
const dontsnav_el = document.querySelectorAll('.js-single-product-slider-dontsnav')



/* get currect position before sliding */
const currectposition = e => {
    let currectposition = slides_el.style.left

    if(currectposition === '0%' || currectposition ===  '') {

        currectposition = 5

    } else if(currectposition === '-50%'){

        currectposition = 10

    } else if (currectposition === '-100%'){
        currectposition = 15
    }
     
      return currectposition;
}



function moveposition(index) {
    let math;
   if (index === 0){
       math = index * 10
       slides_el.style.left = '-' + math + '%'
       displaydontnavcolor(0)

   }else if(index === 5){
        math = index * 10
        slides_el.style.left = '-' + math + '%'
        displaydontnavcolor(1)

   } else if (index === 10){
       math = index * 10
       slides_el.style.left = '-' + math + '%'
       displaydontnavcolor(2)

   } 

}



function displayarrownav(index) {
    slidernavs_el.forEach((el, index2) => {
        const currect = currectposition()
        console.log(currect)

    if(currect > 10 && index === index2 ||
         currect <= 5 && index === index2 ){
        el.style.display = 'none'  

    } else if (currect <= 10 && index != 1 ||
                currect === 15 && index === 1
         ){
        el.style.display = 'flex'
    }

    })
}





const displaydontnavcolor = (index) => {

    dontsnav_el.forEach( (el, index2) => {
        el.classList.remove('black')
        const currect = currectposition()



        if(index2 === index){
            el.classList.add('black')
        } else if(index2 === index ){
            el.classList.add('black')
        } else if(index2 === index ){
            el.classList.add('black')
        } 

      })  
}


const slidenav = (el, nav) => {
    if(nav === 'right') {
        const currect = currectposition()
        moveposition(currect) 
    }

    if(nav === 'left') {
        const currect = currectposition()
            moveposition(currect - 10)

    } 
}

slidernavs_el.forEach((el, index) => {


    el.addEventListener('click', e => {
       
        if( index === 0) {slidenav(el, 'left');     displayarrownav(0); /* displaydontnavcolor(index) */}
        if(index === 1) {slidenav(el, 'right');     displayarrownav(1); /* displaydontnavcolor(index) */ }
            
    }
    )
})




dontsnav_el.forEach((el, index )=> {
    el.addEventListener('click', e=> {
       
               if(index === 0)
                  {moveposition(0); displayarrownav(0); displaydontnavcolor(index)    }
                
                else if(index === 1) 
                 {moveposition(5); displayarrownav(3); displaydontnavcolor(index)    }
                
                else if(index === 2)
                  {moveposition(10); displayarrownav(1); displaydontnavcolor( index)    }
    })
})