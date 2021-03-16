<template>
    <div class="shopping__cart">
        // loop sur this.cartArray
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
        }
    }
</script>

<style lang="scss" scoped>

</style>