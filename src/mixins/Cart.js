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

            console.log(productObject);

            let indexOfExistingProduct = cart.findIndex(
                (el) => el.id === productObject.id
            )

            if (indexOfExistingProduct !== -1) {
                cart[indexOfExistingProduct].qty += 1
            }
            else {
                cart.push(productObject)
            }

            localStorage.setItem('cart', JSON.stringify(cart));

        },
        getCart() {
            return JSON.parse(localStorage.getItem('cart'));
        },
        removeItemCart(product) {
            
            let card = JSON.parse(localStorage.getItem('cart'));

            const filteredCard = card.filter((item) => {
                return item.id !== product.id;
            });

            localStorage.setItem('cart', JSON.stringify(filteredCard));

        },
        clearCart() {
            localStorage.removeItem('cart');
        },
        removeOneQty(product) {

        },
        addOneQty(product) {

        },
        getCartTotal() {
            // Montant total du panier
            Array.reduce // Aggregat
        },
        getCartCount() {
            //Nombre de qty dans le panier
            Array.Reduce
        }
        
    }
}