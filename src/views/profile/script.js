import InputText from 'primevue/inputtext';
import FloatLabel from "primevue/floatlabel";
import Select from 'primevue/select';
import ProfileService from '@/utils/services/ProfileService';

import Country from '@/utils/json/countries.json';
import Province from '@/utils/json/province.json';

export default {
  name: "Profle",
  data() {
    return {
      isFormDisabled: true,
      obj: {
        id: '',
        first_name: '',
        last_name: '',
        gender: '',
        email: '',
        phone_number: '',
        email_verified_at: '',
        country: '',
        city: '',
        remember_token: '',
        created_at: '',
        updated_at: '',
        profile: null,
      },
      genderOption: [
        { name: 'Male', code: 'male' },
        { name: 'Female', code: 'female' }
      ],
      countries: Country,
      province: Province,

      selectedGender: null,
      selectedCity: null,
      selectedProvince: null
    };
  },
  components: {
    FloatLabel,
    InputText,
    Select
  },
  created() {
    this.getProfile();
  },
  methods: {
    getProfile() {
      ProfileService.getProfile().then((res)=>{
        if(res.status === 200) {
          if(!res.data.data) {
            this.$router.push({ name: 'login' }); // or this.$router.push('/login');
            return;
          }

          this.obj = {
            ...this.obj, 
            ...res.data.data 
          };
          console.log(this.obj)
          this.selectedGender = this.genderOption.find(g => g.code === this.obj.gender);
          this.selectedCity = this.countries.find(c => c.name === this.obj.country);
          this.selectedProvince = this.province.find(c => c.name === this.obj.city);
        }else {
          console.log("Service not found")
        }
      }).catch((error) => {
        this.isLoading = false;
      });
    }
  }
};
