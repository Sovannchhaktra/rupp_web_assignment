export default {  
    data() {  
      return {  
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
    props: {  
      product: {  
        type: Object,  
        required: true,  
      },  
    },  
  };