<template lang="html">
    <div class="hello">
        <img src="../assets/logo.png">
        <h1>{{ test }} World</h1>
    </div>
</template>

<script>
    import Vue from "vue";
    import Component from "vue-class-component";

    @Component
    export default class Hello extends Vue {
        test = "Hello";
    }
</script>
