import Button from "primevue/button";
export default {
  name: "SignIn",

  data() {
    return {
      isPassword: true,
      isNext: false,
      title: "Persional",
    };
  },
  components: { Button },

  updated() {
    this.updateTitle();
  },
  methods: {
    updateTitle() {
      if (this.isNext) {
        this.title = "Please Enter OTP";
      }
    },
  },
};
