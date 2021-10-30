import Vuex from "vuex";
import axios from "axios";
const createStore = () => {
  return new Vuex.Store({
    state: {
      posts: [],
      idToken: ""
    },
    mutations: {
      setPost(state, payload) {
        state.posts = payload;
      },
      editPost(state, payload) {
        const oldIndex = state.posts.findIndex(post => post.id == payload.id);
        console.log(oldIndex);
        state.posts[oldIndex] = payload.post;
      },
      addPost(state, payload) {
        state.posts.unshift(payload);
      },
      setToken(state, payload) {
        state.idToken = payload;
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
      },
      editPost(vuexContext, post) {
        return axios
          .put(
            "https://nuxt-one-2f33d-default-rtdb.firebaseio.com/posts/" +
              post.id +
              ".json",
            { ...post.post, date: new Date() }
          )
          .then(() => vuexContext.commit("editPost", post));
      },
      addPost(vuexContext, post) {
        return axios
          .post(
            "https://nuxt-one-2f33d-default-rtdb.firebaseio.com/posts.json",
            {
              ...post,
              date: new Date()
            }
          )
          .then(() => vuexContext.commit("addPost", post));
      },
      login(vuexContext, account) {
        var url =
          "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" +
          process.env.fbAPIkey;
        if (account.mode) {
          "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" +
            process.env.fbAPIkey;
        }
        return axios
          .post(url, {
            email: account.email,
            password: account.pass,
            returnSecureToken: true
          })
          .then(res => vuexContext.commit("setToken", res.data.idToken));
      }
    },
    getters: {
      posts(state) {
        return state.posts.sort((a, b) => {
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        });
      },
      idToken(state) {
        return state.idToken;
      }
    }
  });
};
export default createStore;
