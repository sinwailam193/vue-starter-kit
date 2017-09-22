<template lang="html">
    <div class="translate-output">
        <h2 v-if="loading">Loading...</h2>
        <h2 class="text-success" v-else>{{ translation }}</h2>
    </div>
</template>

<script>
    export default {
        name: "translateOutput",
        props: ["loading", "translation"]
    }
</script>
