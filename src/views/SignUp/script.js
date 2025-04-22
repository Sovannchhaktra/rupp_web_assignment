import InputText from 'primevue/inputtext';
import FloatLabel from "primevue/floatlabel";
import Select from 'primevue/select';
import Country from '@/utils/json/countries.json'
import Province from '@/utils/json/province.json'
import Dialog from 'primevue/dialog';

import CreateAccountService from '@/utils/services/CreateAccountService';

export default {
     name: "Signup",
     data() {
          return {
               errMessage: '',
               errCode: '',
               isSubmited: false,
               visible: false,

               // Body
               firstName: '',
               lastName: '',
               phone: '',
               email: '',
               gender: '',
               country: '',
               cityProvince: '',
               password: '',

               countries: Country,
               province: Province,
               genderOption: [
                    { name: 'Male', code: 'male' },
                    { name: 'Female', code: 'female' }
               ]
          }
     },
     components: {
          FloatLabel,
          InputText,
          Select,
          Dialog
     },
     created() {
          // this.getProvinceOption();
     },
     methods: {
          getCountryOption() {
               CreateAccountService.getListContries().then((res)=>{
                    if(res.status === 200) {
                         console.log(res)
                    }else {
                         console.log("Service not found")
                    }
               }).catch((error) => {
                    this.isLoading = false;
               });
          },
          getProvinceOption() {
               CreateAccountService.getListProvince('Cambodia').then((res)=>{
                    if(res.status === 200) {
                         console.log(res)
                    }else {
                         console.log("Service not found")
                    }
               }).catch((error) => {
                    this.isLoading = false;
               });
          },

          onCreate() {
               const validationResult = this.onValidation();
               if (validationResult !== "OK") {
                    this.errMessage = validationResult;
                    return;
               }
               const body = {
                    firstName: this.firstName,
                    lastName: this.lastName,
                    phoneNumber: this.phone,
                    email: this.email,
                    gender: this.gender.code,
                    country: this.country.name,
                    city: this.cityProvince.name,
                    password: this.password,
               };
               this.isSubmited = true;
               CreateAccountService.create(body).then((res)=>{
                    this.isSubmited = false;
                    this.visible = true;
                    if(res.status === 200) {
                         this.clearValue();
                         this.errMessage = '';
                         setTimeout(() => {
                              this.visible = false;
                         }, 3000);
                    }else {
                         console.log("Service not found")
                         this.isSubmited = false;
                         this.visible = false;
                    }
               }).catch((error) => {
                    this.isLoading = false;
               });
          },

          onValidation() {
               if (!this.firstName) {
                  this.errCode = 1;
                  return "First Name is required";
               }
               if (!this.lastName) {
                  this.errCode = 2;
                  return "Last Name is required";
               }
               if (!this.phone) {
                  this.errCode = 3;
                  return "Phone is required";
               }
               if (!this.email) {
                  this.errCode = 4;
                  return "Email is required";
               }
               if (!this.gender) {
                  this.errCode = 5;
                  return "Gender is required";
               }
               if (!this.country) {
                  this.errCode = 6;
                  return "Country is required";
               }
               if (!this.cityProvince) {
                  this.errCode = 7;
                  return "City/Province is required";
               }
               if (!this.password) {
                  this.errCode = 8;
                  return "Password is required";
               }
               this.errCode = 0;
               return "OK";
          },
          clearValue() {
            this.firstName = '';
            this.lastName = '';
            this.phone = '';
            this.email = '';
            this.gender = '';
            this.country = '';
            this.cityProvince = '';
            this.password = '';
          }
     }
}