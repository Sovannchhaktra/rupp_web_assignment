import Paginator from 'primevue/paginator';
import ShopService from '@/utils/services/ShopService';

export default {  
    data() {  
      return {  
        star: 5,
        searchQuery: '',
        numRecord: 10,
        pFirst: 0,
        objs: { 
          newPro: [],
          related: [],
          total: 100 
        },
        pageOptions: [10, 25, 50, 100],
        categories: [], 
        
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
          }else {
            console.log("Service not found")
          }
        }).catch((error) => {
          this.isLoading = false;
        });
      },
      getList(searchParam) {
          this.isLoading = true;
          let params = {};
          if (searchParam) {
            params.search = searchParam;
          }
          console.log(params)
          ShopService.getList(params).then((res)=>{
            this.isLoading = false;
            if(res.status === 200) {
              const data = res.data.data;
              this.objs.newPro = data.latest || [];
              this.objs.related = data.related || [];
            }else {
              console.log("Service not found")
            }
          }).catch((error) => {
            this.isLoading = false;
          });
      },
      handleSearch(value) {
        this.getList(this.searchQuery = value);
      },
    },
    props: {  
      product: {  
        type: Object,  
        required: true,  
      },  
    },  
  };