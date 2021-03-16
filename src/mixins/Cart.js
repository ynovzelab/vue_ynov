export default {
    methods: {

        // QUand vous insérez en dans le localStorage => stringifier 
        // Le panier sera un tableau d'objet
        
        addTocart(product) {

            let cart = JSON.parse(localStorage.getItem('cart')) || [];

            let productObject = {
                id: product._id,
                title: product.title,
                price: product.price,
                qty: 1
            }

            //findIndex => renvoies l'index ou -1

            cart.push(productObject);

            localStorage.setItem('cart', JSON.stringify(cart));

        },
        getCart() {
            return JSON.parse(localStorage.getItem('cart'));
        },
        removeItemCart(product) {
            // Récupérer le panier localStorage.getItem + parser
            // Le modifier
            // le réinsérer localStorage.setItem
        },
        clearCart() {
            //localStorage.removeItem('cart');
        },
        removeOneQty(product) {

        },
        addOneQty(product) {

        }
    }
}