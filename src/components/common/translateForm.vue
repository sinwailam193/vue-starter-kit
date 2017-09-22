<template lang="html">
    <div class="translate-form row">
        <div class="col-md-6 middle">
            <form class="well form-inline transform" @submit="onSubmit">
                <input type="text" class="form-control margin-right-5" v-model="input" placeholder="Enter text" />
                <select class="form-control margin-right-5" @change="onChange" :value="selectedLang">
                    <option v-for="(val, key) in langs" :value="key" :selected="key === selectedLang">{{ val }}</option>
                </select>
                <input type="submit" class="btn btn-primary" value="Translate">
            </form>
        </div>
    </div>
</template>

<script>
    import Vue from "vue";
    import Component from "vue-class-component";

    @Component({
        props: ["langs", "selectedLang"]
    })
    export default class TranslateForm extends Vue {
        input = "";

        onSubmit(event) {
            event.preventDefault();
            const { input } = this;
            this.$emit("formSubmit", input);
            this.input = "";
        }

        onChange(event) {
            this.$store.commit("CHANGE_STATE", { selectedLang: event.target.value });
        }
    }
</script>
