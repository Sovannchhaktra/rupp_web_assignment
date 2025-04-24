import Paginator from 'primevue/paginator';
import ShopService from '@/utils/services/ShopService';

export default {  
    data() {  
      return {  
        star: 5,
        numRecord: 10,
        pFirst: 0,
        objs: { total: 100 },
        pageOptions: [10, 25, 50, 100],
        categories: [],
        newProducts: [  
          { id: 1, image:"https://placehold.jp/350x450.png", originalPrice: 40, salePrice: 30, name: 'T-Shirt', rating: 5 },  
          { id: 2, image:"https://placehold.jp/350x450.png", originalPrice: 40, salePrice: 30, name: 'T-Shirt', rating: 5 },  
          { id: 3, image:"https://placehold.jp/350x450.png", originalPrice: 40, salePrice: 30, name: 'T-Shirt', rating: 5 },  
        ],  
        relatedProducts: [  
          { id: 1, image:"https://placehold.jp/350x450.png", originalPrice: 40, salePrice: 30, name: 'T-Shirt', rating: 5 },  
          { id: 2, image:"https://placehold.jp/350x450.png", originalPrice: 40, salePrice: 30, name: 'T-Shirt', rating: 5 },  
          { id: 3, image:"https://placehold.jp/350x450.png", originalPrice: 40, salePrice: 30, name: 'T-Shirt', rating: 5 },  
          { id: 4, image:"https://placehold.jp/350x450.png", originalPrice: 40, salePrice: 30, name: 'T-Shirt', rating: 5 },  
        ],  
      };  
    }, 
    created() {
      this.getCategoryOption();
      this.getList();
    }, 
    components: {
      Paginator
    },
    methods: {
      pageEvent(event) {
          console.log("Page changed:", event);
          this.pFirst = event.first;
          this.numRecord = event.rows;
      },
      getCategoryOption() {
        this.isLoading = true;
          ShopService.getCategory().then((res)=>{
            this.isLoading = false;
            if(res.status === 200) {
              this.categories = res.data.data;
              console.log(this.categories)
            }else {
              console.log("Service not found")
            }
          }).catch((error) => {
            this.isLoading = false;
          });
      },
      getList() {
          this.isLoading = true;
          ShopService.getList().then((res)=>{
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
    props: {  
      product: {  
        type: Object,  
        required: true,  
      },  
    },  
  };