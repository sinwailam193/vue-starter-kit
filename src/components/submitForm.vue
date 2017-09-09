<template lang="html">
    <form @submit="onSubmit">
        <input type="text" v-model="newUser.name" placeholder="Enter Name">
        <input type="text" v-model="newUser.email" placeholder="Enter Email">
        <input type="submit" value="Add">
    </form>
</template>

<script>
    import Vue from "vue";
    import Component from "vue-class-component";

    @Component
    export default class SubmitForm extends Vue {
        newUser = {
            name: "",
            email: ""
        }

        onSubmit(event) {
            event.preventDefault();
            const { name, email } = this.newUser;
            this.$emit("formSubmit", name, email);
            this.newUser = { name: "", email: "" };
        };
    }
</script>
