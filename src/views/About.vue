<template>
  <div class="about">
    <TitlePage title="Page about"/>
    <Button btnClass="btn btn-black" btnText="Click Me" v-bind:btnFunction="clickMe" />
  </div>
</template>
<script>

import TitlePage from "../components/TitlePage";
import Button from "../components/Button";

export default {
  name:"About",
  components:{
    TitlePage, Button
  },
  methods: {
    clickMe: function() {
      console.log("its clicked");
    }
  }
}
</script>
