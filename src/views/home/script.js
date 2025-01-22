export default {
  name: "Home",
  data() {
    return {
      myData: "Hello world",
    };
  },

  // lifecycle hooks
  beforeCreate() {
    console.log("beforeCreate called");
  },
  created() {
    console.log("created called");
  },
  beforeMount() {
    console.log("beforeMount called");
  },
  mounted() {
    console.log("mounted called");
  },
  beforeUpdate() {
    console.log("beforeUpdate called");
  },
  updated() {
    console.log("updated called");
  },
  methods: {
    onSave() {},
  },
};
