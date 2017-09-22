<template lang="html">
    <div class="main-page text-center">
        <h1 class="text-center">Word Translate</h1>
        <translateForm
            :langs="page.langs"
            :selectedLang="page.selectedLang"
            @formSubmit="formSubmit"
        ></translateForm>
        <translateOutput
            :loading="page.loading"
            :translation="page.translation"
        ></translateOutput>
    </div>
</template>

<script>
    import Vue from "vue";
    import Component from "vue-class-component";
    import translateForm from "./common/translateForm";
    import translateOutput from "./common/translateOutput";

    @Component({
        components: { translateForm, translateOutput }
    })
    export default class Translate extends Vue {
        get page() {
            return this.$store.getters.TRANSLATE;
        }

        created() {
            this.$store.dispatch("GET_LANGS");
        }

        formSubmit(input) {
            if (input) {
                this.$store.commit("CHANGE_STATE", { loading: true })
                this.$store.dispatch("TRANSLATE_INPUT", { input });
            }
        }
    }
</script>

<style lang="css">
</style>
