let products = []
const cart = {}

const updateCart = () => {
  let totalPrice = 0;
  document.querySelector('#cartSummary_items').replaceChildren([]);
  for (const key of Object.keys(cart)) {
    const item = products.find((product) => `${product.id}` === key)
    const quantity = cart[key]
    const price = item.price

    const itemRow = document.createElement('tr')
    const itemName = document.createElement('td')
    itemName.innerText = item.title

    const itemQuantity = document.createElement('td')
    itemQuantity.innerText = quantity

    const itemPrice = document.createElement('td')
    itemPrice.innerText = quantity * price

    itemRow.append(itemName, itemQuantity, itemPrice)
    document.querySelector('#cartSummary_items').appendChild(itemRow)

    if (quantity === 0){
      document.querySelector('#cartSummary_items').removeChild(itemRow)
    }

    totalPrice += (price * quantity)
  }
  document.querySelector('#cartSummary_total').innerText = totalPrice.toFixed(2);
}

const createCard = (product) => {
  const productCard = document.createElement('div')
  productCard.className = 'productCard'

  const productThumbnail = document.createElement('img')
  productThumbnail.className = 'productThumbnail'
  productThumbnail.src = product.thumbnail

  const productBottomSheet = document.createElement('div')
  productBottomSheet.className = 'productBottomSheet'

  const productInfoContainer = document.createElement('div')
  productInfoContainer.className = 'productInfoContainer'

  const productName = document.createElement('strong')
  productName.className = 'productName'
  productName.innerText = product.title

  const productPrice = document.createElement('div')
  productPrice.className = 'productPrice'
  productPrice.innerText = `$${product.price.toFixed(2)}`

  const productButton = document.createElement('div')
  productButton.className = 'productButton'

  const addToCard = document.createElement('button')
  addToCard.className = 'addToCart'
  addToCard.innerText = '+'

  const removeToCart = document.createElement('button')
  removeToCart.className = 'removeToCart'
  removeToCart.innerText = '-'

  addToCard.addEventListener('click', () => {
    // {}
    if (cart[product.id] === undefined) cart[product.id] = 0
    cart[product.id] += 1
    updateCart()
  })

  removeToCart.addEventListener('click', () => {
    // {}
    if (cart[product.id]) {
      cart[product.id] -= 1
    }
    updateCart()
  })

  productInfoContainer.append(productName, productPrice)
  productButton.append(addToCard, removeToCart)
  productBottomSheet.append(productInfoContainer, productButton)
  productCard.append(productThumbnail, productBottomSheet)

  document.querySelector('#productList').appendChild(productCard)
}

const fetchProducts = () => {
  fetch('https://dummyjson.com/products')
    .then((res) => res.json())
    .then((productsResponse) => {
      products = productsResponse.products
      products.forEach((product) => {
        createCard(product)
      })
    })
}

const hookViewCart = () =>{
  const viewCartButton = document.querySelector('#viewCart');
  viewCartButton.addEventListener('click', ()=>{
    const cartSummary = document.querySelector('#cartSummary')
    const display = cartSummary.style.display

    if (display === 'none'){
      cartSummary.style.display = 'block'
    }else{
      cartSummary.style.display = 'none'
    }
  })
}

fetchProducts();
hookViewCart();