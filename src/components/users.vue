<template lang="html">
    <div class="users">
        <h1>Hello Users</h1>
        <form @submit="onSubmit">
            <input type="text" v-model="newUser.name" placeholder="Enter Name">
            <input type="text" v-model="newUser.email" placeholder="Enter Email">
            <input type="submit" value="Add">
        </form>
        <hr />
        <ul>
            <li v-for="(user, index) in users">
                <input type="checkbox" class="toggle" v-model="user.contacted">
                <span :class="{contacted: user.contacted}">{{ user.name }} {{ user.email }}</span>
                <button type="button" name="button" @click="onClick(index)">Delete</button>
            </li>
        </ul>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: "Users",
        data() {
            return {
                users: [],
                newUser: {
                    name: "",
                    email: ""
                }
            }
        },
        async created() {
            this.users = await axios.get("https://jsonplaceholder.typicode.com/users")
                .then(res => res.data.map(val => ({ ...val, contacted: false })));
        },
        methods: {
            onSubmit(event) {
                const { newUser: { email, name }, users } = this;
                event.preventDefault();
                users.push({ email, name, contacted: false });
                this.newUser = { name: "", email: "" };
            },
            onClick(index) {
                const { users } = this;
                users.splice(index, 1);
            }
        }
    }
</script>
