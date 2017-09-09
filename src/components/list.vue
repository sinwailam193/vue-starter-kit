<template lang="html">
    <ul>
        <li v-for="(user, index) in users">
            <input type="checkbox" class="toggle" v-model="user.contacted">
            <span :class="{contacted: user.contacted}">{{ user.name }} {{ user.email }}</span>
            <button type="button" name="button" @click="onClick(index)">Delete</button>
        </li>
    </ul>
</template>

<script>
    import Vue from "vue";
    import Component from "vue-class-component";

    @Component({
        props: ["users"]
    })
    export default class List extends Vue {
        onClick(index) {
            this.$emit("deleteClick", index);
        }
    }
</script>
