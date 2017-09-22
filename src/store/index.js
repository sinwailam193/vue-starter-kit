import Vue from "vue";
import Vuex, { Store } from "vuex";
import axios from "axios";
import { YANDEX_API, YANDEX_KEY } from "../../api_config";

Vue.use(Vuex);

export default new Store({
    state: {
        translation: "Hello World",
        langs: {},
        loading: false,
        selectedLang: "en"
    },
    getters: {
        MAIN_VIEW(state) {
            const { translation } = state;
            return { translation };
        },
        TRANSLATE(state) {
            const { translation, langs, loading, selectedLang } = state;
            return { translation, langs, loading, selectedLang };
        }
    },
    mutations: {
        CHANGE_STATE(state, payload) {
            Object.keys(payload).forEach(key => { state[key] = payload[key]; });
        },
        MUTATE_LANGS(state, langs) {
            state.langs = langs;
        },
        MUTATE_TRANSLATION(state, translation) {
            state.translation = translation;
            state.loading = false;
        }
    },
    actions: {
        async GET_LANGS({ commit }) {
            const langs = await axios.get(`${YANDEX_API}/getLangs`, {
                params: {
                    key: YANDEX_KEY,
                    ui: "en"
                }
            }).then(res => (res.data && res.data.langs ? res.data.langs : null));
            commit("MUTATE_LANGS", langs);
        },
        async TRANSLATE_INPUT({ commit, state }, { input }) {
            const { selectedLang } = state;
            const translation = await axios.get(`${YANDEX_API}/translate`, {
                params: {
                    key: YANDEX_KEY,
                    lang: `en-${selectedLang || "en"}`,
                    text: input || ""
                }
            }).then(res => (res.data && res.data.text.length ? res.data.text[0] : ""));
            commit("MUTATE_TRANSLATION", translation);
        }
    }
});
