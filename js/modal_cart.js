const modalShopping = document.querySelector('.js_cart');
const modalCart = document.querySelector('.js_modal-cart');
const modalContainer = document.querySelector('.js_modal-container');
const modalCloseCart = document.querySelector('.js_cart-close');
function showShoppingCart() {
    modalCart.classList.add('open-cart');
    modalContainer.style.transform = "translateX(0)";

}
function hideShoppingCart() {
    modalCart.classList.remove('open-cart');
    modalContainer.style.transform = "translateX(100%)";

}
modalShopping.addEventListener('click', showShoppingCart);
document.addEventListener('click', function (e) {
    console.log(e.target.contains(modalContainer))
    if (!modalContainer.contains(e.target) && !e.target.matches('.js_cart i')) {
        hideShoppingCart();
    }
});
modalCloseCart.addEventListener('click', hideShoppingCart);