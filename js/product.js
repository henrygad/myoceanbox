const products = [
    {
        id: 1,
        title: "Open Side (OS) - 40ft HC- New/One Trip - Shipping Container",
        image: "/images/1280x1280/products/1382/13972/side_open__35472.1660033557.jpg?c=2",
        wasprice: "$6,900.00",
        nowprice: "$6,300.00",
        link: "../singleproducts/Buy-40ft-OpenSide-New-Container.html"
    },
    {
        id: 2,
        title: "20' Used Shipping Container - 20ft Storage Containers - Wind &amp; Water Tight (WWT)",
        image: "/images/500x659/products/1834/18515/IMG_1755__01026.1683661262.jpg?c=2",
        wasprice: "$1,300.00",
        nowprice: "$1,100.00",
        link: "../singleproducts/buy-20ft-Storage-Containers-Wind.html"

    },
    {
        id: 3,
        title: "40' Used Shipping Containers - 40ft Storage Container - Wind &amp; Water Tight (WWT)",
        image: "/images/500x659/products/1254/12674/40_con_31__96197.1657137042.jpg?c=2 ",
        wasprice: " $2,400.00",
        nowprice: "$2,200.00",
        link: "../singleproducts/buy-40ft-Storage-Container.html"
    },
    {
        id: 4,
        title: "Refrigerator Container - 40ft High Cube New / One Trip Reefer Shipping Container",
        image: "/images/500x659/products/1814/18335/4_Front_right_45__68313.1682621572.jpg?c=2",
        wasprice: "$27,900.00",
        nowprice: "$27,000.00",
        link: "../singleproducts/buy-40ft-High-Cube-New-One-Trip-Reefer-Shipping-Container.html"
    },
    {
        id: 5,
        title: "40ft High Cube Used Shipping Container - Cargo Worthy (CW)",
        image: "/images/1280x1280/products/856/8839/20180907_132907_resized_1__75872.1622736199.jpg?c=2",
        wasprice: "$2,800.00",
        nowprice: " $2,300.00",
        link: "../singleproducts/buy-40ft-High-Cube-Used-Shipping-Container.html"
    },
    {
        id: 6,
        title: "40ft High Cube New / One Trip Shipping Container",
        image: "/images/500x659/products/314/8630/40HC_New_picture1__75335.1622498051.jpg?c=2",
        wasprice: "$4,500.00",
        nowprice: "$4,100.00",
        link: "../singleproducts/buy-40ft-High-Cube-New.html"
    },
    {
        id: 7,
        title: "20ft DC New / One Trip Shipping Container",
        image: "/images/500x659/products/317/12857/unnamed_2__13751.1657222039.png?c=2",
        wasprice: "$3,300.00",
        nowprice: "$2,850.00",
        link: "../singleproducts/buy-20ft-DC-New.html"
    },
    {
        id: 8,
        title: "Double Door - 20ft DC New / One Trip Shipping Container",
        image: "/images/500x659/products/419/4987/20-foot-double-door-containers-edit-001__16857.1574694987.jpg?c=2",
        wasprice: "$3,400.00",
        nowprice: "$3,100.00",
        link: "../singleproducts/buy-Double-Door-20ft-DC-New.html"
    }
]

const products_el = document.querySelector('.js-products')
let lists = ''

products.forEach( value => {
    lists += `
        <li class="product">
            <a href="">
                <div class="product_img">
                    <a href=${value.link} target="_black" class="cart_message">Add to Cart</a>
                    <img src=${value.image}>
                </div>
            </a>
            <div class="product_title">
                <h4 class="card-title">
                    <a href="">${value.title}</a>
                </h4>
                <div class="product_prices">
                <div class="price was">
                        Was: <span>${value.wasprice}</span>
                </div>
                <div class="price  now">
                    Now: <span>${value.nowprice}</span>
                </div>
            </div>
        </li>
    `
})

products_el.innerHTML = lists

