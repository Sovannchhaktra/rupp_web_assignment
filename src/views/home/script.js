import Loader from "../../components/shared/loader/index.vue"

export default {
  name: "Home",
  data() {
    return {
      star: 5,
      lists: 4,
      myData: "Hello world",
      isLoading: false
    };
  },
  components: {
    Loader
  },
};
