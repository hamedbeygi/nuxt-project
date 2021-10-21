import Vuex from "vuex";
import axios from "axios";
const createStore = () => {
  return new Vuex.Store({
    state: {
      posts: []
    },
    mutations: {
      setPost(state, payload) {
        state.posts = payload;
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return axios
          .get("https://nuxt-one-2f33d-default-rtdb.firebaseio.com/posts.json")
          .then(res => {
            const postsArray = [];
            for (const key in res.data) {
              postsArray.push({ ...res.data[key], id: key });
            }
            vuexContext.commit("setPost", postsArray);
          })
          .catch(e => context.error(e));
      }
    },
    getters: {
      posts(state) {
        return state.posts;
      }
    }
  });
};
export default createStore;
