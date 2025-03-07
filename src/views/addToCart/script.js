
import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';
import Panel from 'primevue/panel';
import Card from 'primevue/card';
import FloatLabel from "primevue/floatlabel";
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import DatePicker from 'primevue/datepicker';


export default {
  name: "ListCart",
  data() {
    return {
      products: 4,
      visible: false
    };
  },
  components: {
    InputText,
    Dialog,
    Panel,
    Card,
    FloatLabel,
    InputIcon,
    IconField,
    DatePicker
  }
};
