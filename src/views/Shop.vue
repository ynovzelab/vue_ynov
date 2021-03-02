<template>
  <div class="page__shop">
    <TitlePage title="Mon Eshop"/>
    <div class="products__grid" v-for="product in productsArray" :key="product._id">
      <div class="product__item">
       {{ product._id }}
       <h2> {{ product.title }}</h2>
       <img :src="product.imgUrl" :alt="product.title"/>
       {{ product.price }}
       {{ product.description }}
      </div>
    
    </div>
  </div>
</template>

<script>

import TitlePage from "../components/TitlePage";

export default {
    components: {
        TitlePage
    },
    data: function() {
      return {
       productsArray:[]
      }
    },
    methods: {

    },
    created() {
      fetch("http://localhost:3030/api/v1/products")
      .then(res => res.json())
      .then(data => {
        console.log(data,"data");
        this.productsArray = data;
        }
      )
      .catch(err => console.log(err))
    }
}
</script>

<style lang="scss" scoped></style>
