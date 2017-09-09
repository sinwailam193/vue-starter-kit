<template lang="html">
    <div class="users">
        <h1>Hello Users</h1>
        <submitForm @formSubmit="onSubmit"></submitForm>
        <hr />
        <list
            :users="users"
            @deleteClick="onClick"
        ></list>
    </div>
</template>

<script>
    import Vue from "vue";
    import Component from "vue-class-component";
    import axios from "axios";
    import submitForm from "./submitForm";
    import list from "./list";

    @Component({
        components: { submitForm, list }
    })
    export default class Users extends Vue {
        users = [];

        async created() {
            this.users = await axios.get("https://jsonplaceholder.typicode.com/users")
                .then(res => res.data.map(val => ({ ...val, contacted: false })));
        }

        onSubmit(email, name) {
            const { users } = this;
            users.push({ email, name, contacted: false });
        };

        onClick(index) {
            const { users } = this;
            users.splice(index, 1);
        };
    }
</script>
