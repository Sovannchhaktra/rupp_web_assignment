import InputText from 'primevue/inputtext';
import FloatLabel from "primevue/floatlabel";
import Select from 'primevue/select';

export default {
  name: "Profle",
  data() {
    return {
      isFormDisabled: true,
    };
  },
  components: {
    FloatLabel,
    InputText,
    Select
},
};
