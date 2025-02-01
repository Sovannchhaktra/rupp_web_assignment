export default {  
    data() {  
      return {  
        newProducts: [  
          { id: 1, image: require('./pic/photo_2025-02-01_10-19-42.jpg'), originalPrice: 40, salePrice: 30, name: 'T-Shirt', rating: 5 },  
          { id: 2, image: require('./pic/photo_2025-02-01_10-19-47.jpg'), originalPrice: 40, salePrice: 30, name: 'T-Shirt', rating: 5 },  
          { id: 3, image: require('./pic/photo_2025-02-01_10-19-50.jpg'), originalPrice: 40, salePrice: 30, name: 'T-Shirt', rating: 5 },  
        ],  
        relatedProducts: [  
          { id: 1, image: require('./pic/photo_2025-02-01_10-19-52.jpg'), originalPrice: 40, salePrice: 30, name: 'T-Shirt', rating: 5 },  
          { id: 2, image: require('./pic/photo_2025-02-01_10-19-55.jpg'), originalPrice: 40, salePrice: 30, name: 'T-Shirt', rating: 5 },  
          { id: 3, image: require('./pic/photo_2025-02-01_10-19-57.jpg'), originalPrice: 40, salePrice: 30, name: 'T-Shirt', rating: 5 },  
          { id: 4, image: require('./pic/photo_2025-02-01_10-19-58.jpg'), originalPrice: 40, salePrice: 30, name: 'T-Shirt', rating: 5 },  
        ],  
      };  
    },  
    props: {  
      product: {  
        type: Object,  
        required: true,  
      },  
    },  
  };