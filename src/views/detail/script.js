import InputText from 'primevue/inputtext';
import Select from 'primevue/select';
import ProductsDetailService from '@/utils/services/ProductDetailService';

export default {
    name: "Detail",
    data() {
      return {
        id: this.$route.params.id,
        data: {},
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
    created() {
      this.getDetail()
    },
    components: {
      InputText,
      Select
    },
    methods: {
      getDetail() {
        this.isLoading = true;
        ProductsDetailService.getDetail(this.id).then((res)=>{
          this.isLoading = false;
          if(res.status === 200) {
            this.data = res.data.data;
            console.log(this.data)
          }else {
            console.log("Service not found")
          }
        }).catch((error) => {
          this.isLoading = false;
        });
      }
    },
  };