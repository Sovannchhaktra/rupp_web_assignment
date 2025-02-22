import InputOtp from 'primevue/inputotp';
import InputText from 'primevue/inputtext';
import FloatLabel from "primevue/floatlabel";

export default {
  name: "SignIn",

  data() {
    return {
      isPassword: true,
      isNext: false,
      title: "Persional"
    };
  },
  components: {
    InputOtp,
    FloatLabel,
    InputText,
  },

  updated() {
    this.updateTitle();
  },
  methods: {
    updateTitle() {
      if (this.isNext) {
        this.title = "Please Enter OTP";
      }
    },
    validateOTP() {
      if (!/^\d*$/.test(value.value)) {
        errorMessage.value = 'Only numbers are allowed';
        value.value = value.value.replace(/\D/g, '');
      } else {
        errorMessage.value = '';
      }
    }
  },
};
