<template lang="html">
    <div class="main-page">
        <img class="img-logo" src="../assets/logo.png">
        <h1 class="text-center">{{ page.translation }}</h1>
    </div>
</template>

<script>
    import Vue from "vue";
    import Component from "vue-class-component";

    @Component
    export default class MainPage extends Vue {
        get page() {
            return this.$store.getters.MAIN_VIEW;
        }
    }
</script>
