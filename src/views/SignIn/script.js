import InputOtp from 'primevue/inputotp';
import InputText from 'primevue/inputtext';
import FloatLabel from "primevue/floatlabel";
import Dialog from 'primevue/dialog';

import LoginService from '@/utils/services/LoginService';

export default {
  name: "SignIn",

  data() {
    return {
      errMessage: '',
      errCode: '',
      isSubmited: false,
      isPassword: true,
      isNext: false,
      title: "Persional",
      visible: false,

      // Body
      email: '',
      password: ''
    };
  },
  components: {
    InputOtp,
    FloatLabel,
    InputText,
    Dialog
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
    },
    onSubmit() {
      const validationResult = this.onValidation();
      if (validationResult !== "OK") {
           this.errMessage = validationResult;
           return;
      }
      const body = {
        email: this.email,
        password: this.password
      }
      this.isSubmited = true;
      LoginService.login(body).then((res)=>{
        this.isSubmited = false;
        this.visible = true;
        if(res.status === 200) {
          this.onClear();
          const token = res.data.acessToken;
          sessionStorage.setItem("accessToken", token);
          localStorage.setItem("accessToken", token);
          setTimeout(() => {
            this.visible = false;
          }, 3000);
        }else {
           console.log("Service not found")
        }
      }).catch((error) => {
        this.isLoading = false;
        this.isSubmited = false;
      });     
    },
    onValidation() {
      if (!this.email) {
         this.errCode = 1;
         return "Email is required";
      }
      if (!this.password) {
         this.errCode = 2;
         return "Password is required";
      }
      this.errCode = 0;
      return "OK";
    },
    onClear() {
      this.email = '';
      this.password = '';
    }
  },
};
