const body_el = document.querySelector('body')
const head_el = document.querySelector('head')

const link = document.createElement('link')
link.rel="stylesheet"
link.href="cartpopupplugin/cartpopup.css"

head_el.appendChild(link)


/* load script file into main/index js file */
const footer_el = document.querySelector('footer')


function cartpopup() {
    
    return(
        `
        <div class="cart_pop_up_plugin_container js-cart">
            <div class="cart_plugin_wrap">
                <div>
                    <h3>Cart</h3>
                    <span  onClick="removepop(this)" >x</span>
                </div>
                <div>
                    <div>
                        <p>Product</p>
                            <p>Unit</p>
                            <p>Price</p>
                        </div>
                    </div>
                <div>
                    <button onClick="removepop(this)" class="btn1" >Close</button>
                    <button class="btn2">Checkout</button>
                </div>
            </div>
        </div>
    `
    )
}

window.onload = footer_el.innerHTML += cartpopup()



const pop_el = document.querySelector( /*pass the element to listen to */ '.js-pop')
const cart_el = document.querySelector('.js-cart')


pop_el.addEventListener( 'click', e => {
    cart_el.classList.add('pop')
    body_el.classList.add('body')
})

cart_el.addEventListener( 'click', e => {
    cart_el.classList.remove('pop')
    body_el.classList.remove('body')
})

function removepop(e) {
    cart_el.classList.remove('pop')
    body_el.classList.remove('body')
}
