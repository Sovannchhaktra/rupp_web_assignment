import InputText from 'primevue/inputtext';
import FloatLabel from "primevue/floatlabel";
import Select from 'primevue/select';

export default {
     name: "Signup",
     data() {
          return {
               cities: []
          }
     },
     components: {
          FloatLabel,
          InputText,
          Select
     },
     created() {
          this.option()
     },
     methods: {
          option() {
               this.cities = [
                    { name: 'New York', code: 'NY' },
                    { name: 'Rome', code: 'RM' },
                    { name: 'London', code: 'LDN' },
                    { name: 'Istanbul', code: 'IST' },
                    { name: 'Paris', code: 'PRS' }
               ]
          }
     }
}