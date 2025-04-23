import InputText from 'primevue/inputtext';
import FloatLabel from "primevue/floatlabel";
import Select from 'primevue/select';
import ProfileService from '@/utils/services/ProfileService';

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
      genderSelected: null
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
          this.obj = {
            ...this.obj, 
            ...res.data.data 
          };
          this.genderSelected = this.genderOption.find(g => g.code === this.obj.gender);
        }else {
          console.log("Service not found")
        }
      }).catch((error) => {
        this.isLoading = false;
      });
    }
  }
};
