import InputText from 'primevue/inputtext';
import Paginator from 'primevue/paginator';
import ProductsService from '@/utils/services/ProductService';

export default {
    name: "Products",
    data() {
        return {
            searchQuery: '',
            data: [],
            numRecord: 10,
            pFirst: 0,
            objs: { total: 100 },
            pageOptions: [10, 25, 50, 100]
        }
    },
    created() {
        this.getList();
    },
    components: {
        InputText,
        Paginator
    },
    methods: {
        pageEvent(event) {
            console.log("Page changed:", event);
            this.pFirst = event.first;
            this.numRecord = event.rows;
        },
        getList(searchParam) {
            this.isLoading = true;
            let params = {};
            if (searchParam) {
              params.search = searchParam;
            }
            ProductsService.getList(params).then((res)=>{
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
        },
        
        handleSearch() {
          this.getList(this.searchQuery);
        },
    }
}