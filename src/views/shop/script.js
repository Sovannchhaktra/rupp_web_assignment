import Paginator from 'primevue/paginator';
export default {  
    data() {  
      return {  
        star: 5,
        numRecord: 10,
        pFirst: 0,
        objs: { total: 100 },
        pageOptions: [10, 25, 50, 100],
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
    components: {
      Paginator
    },
    methods: {
      pageEvent(event) {
          console.log("Page changed:", event);
          this.pFirst = event.first;
          this.numRecord = event.rows;
      }
    },
    props: {  
      product: {  
        type: Object,  
        required: true,  
      },  
    },  
  };