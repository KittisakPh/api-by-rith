// const attachedCard = (productCard) => {
// }
const createCard = () => {
  const productCard = document.createElement('div')
  productCard.className = 'productCard'

  const productThumbnail = document.createElement('img')
  productThumbnail.className = 'productThumbnail'
  productThumbnail.src =
    'https://cdn.dummyjson.com/products/images/beauty/Red%20Nail%20Polish/1.png'

  const productBottomSheet = document.createElement('div')
  productBottomSheet.className = 'productBottomSheet'

  const productInfoContainer = document.createElement('div')
  productInfoContainer.className = 'productInfoContainer'

  const productName = document.createElement('strong')
  productName.className = 'productName'
  productName.innerText = 'iPhone X'

  const productPrice = document.createElement('div')
  productPrice.className = 'productPrice'
  productPrice.innerText = '$100'

  const addToCard = document.createElement('button')
  addToCard.className = 'addToCard'
  addToCard.innerText = '+'

  productInfoContainer.append(productName, productPrice)
  productBottomSheet.append(productInfoContainer, addToCard)
  productCard.append(productThumbnail, productBottomSheet)

  document.querySelector('#productList').appendChild(productCard)
}

for(let i=0;i<10;i++){
  createCard()
}