
import InputText from 'primevue/inputtext';
import Select from 'primevue/select';

export default {
    name: "Detail",
    data() {
      return {
        size: [
          { name: 'XS', code: 'XS' },
          { name: 'S', code: 'S' },
          { name: 'M', code: 'M' },
          { name: 'L', code: 'L' },
          { name: 'XL', code: 'XL' },
          { name: 'XXL', code: 'XXL' },
        ],
        color: [
          { name: 'Red', code: 'RED' },
          { name: 'Blue', code: 'BLUE' },
          { name: 'Green', code: 'GREEN' },
          { name: 'Black', code: 'BLACK' },
          { name: 'White', code: 'WHITE' },
          { name: 'Yellow', code: 'YELLOW' },
        ],
        selectedSize: { name: 'XL', code: 'XL' },
        selectedColor: { name: 'Red', code: 'RED' }
      };
    },
    components: {
      InputText,
      Select
    },
    methods: {
      
    },
  };