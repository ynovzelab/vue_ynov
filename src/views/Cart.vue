<template>
    <div class="shopping__cart">
        <table class="shop__table">
            <thead>
                <tr>
                    <th>Titre</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th></th>
                     <th>Total</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in cartArray" :key="item.id">
                    <td>{{item.title}}</td>
                    <td>{{item.qty}}</td>
                    <td>{{item.price}}</td>
                    <td>
                        <button>-</button>
                        <button>+</button>
                    </td>
                    <td>
                        {{item.qty *item.price }} €
                    </td>
                    <td>
                        <button>Supprimer le produit</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <button>Supprimer le panier</button>
    </div>
</template>

<script>
import Cart from "../mixins/Cart";

    export default {
        mixins:[Cart],
        data: function() {
            return {
                cartArray:[]
            }
        },
        created() {
            this.cartArray = this.getCart();
            console.log(this.cartArray);
        }
    }
</script>

<style lang="scss" scoped>
.shop__table {
    width:50%;
    margin:50px auto;
}
</style>