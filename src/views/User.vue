<template>
    <div>
        <TitlePage title="Mon compte"/>
        <div>
            <div class="user__info" v-if="user">
                <p>Nom :{{user.firstName}}</p>
                <p>Prénom :{{user.lastName}}</p>
                <p>Email :{{user.email}}</p>
                <button @click="logout">Se déconnecter</button>
            </div>
        </div>
    </div>
</template>

<script>

import VueJwtDecode from "vue-jwt-decode";
import TitlePage from "../components/TitlePage";

    export default {
        components: {
            TitlePage
        },
        data: function() {
            return {
                user:{},
            }
        },
        methods: {
            logout: function() {
                localStorage.removeItem('token');
            }
        },
        created() {
            const token = localStorage.getItem('token');
            if(token) {
               const decodedToken = VueJwtDecode.decode(token);
               fetch(`http://localhost:3030/api/v1/users/${decodedToken.id}`, {
                   headers: {
                       Authorization: token
                   }
               })
               .then(res => res.json())
               .then(data=>{
                   this.user = data;
               })
               .catch(err => console.log(err))
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>