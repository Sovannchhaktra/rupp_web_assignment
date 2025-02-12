<template src="./template.html"></template>
<script src="./script.js"></script>
<style scoped src="./style.css"></style>

    
        new Vue({
            el: '#app',
            data() {
                return {
                    categories: [
                        { 
                            name: 'Man', 
                            products: [
                                { name: 'T-Shirt', price: 30, promotion: true, image: 'https://placehold.co/300x450', rating: 5 },
                                { name: 'Jeans', price: 50, promotion: false, image: 'https://placehold.co/300x450', rating: 4 }
                            ]
                        },
                        { 
                            name: 'Woman', 
                            products: [
                                { name: 'Dress', price: 40, promotion: true, image: 'https://placehold.co/300x450', rating: 5 },
                                { name: 'Skirt', price: 20, promotion: false, image: 'https://placehold.co/300x450', rating: 3 }
                            ]
                        }
                    ],
                    filteredCategories: []
                };
            },
            created() {
                // Initially show all categories
                this.filteredCategories = this.categories;
            },
            methods: {
                filterByCategory(category) {
                    // Filter the categories by the selected category name
                    this.filteredCategories = this.categories.filter(c => c.name === category.name);
                },
                filterByPromotion() {
                    // Filter products with promotion
                    this.filteredCategories = this.categories.map(category => {
                        return {
                            ...category,
                            products: category.products.filter(product => product.promotion)
                        };
                    });
                },
                filterByPrice(order) {
                    // Sort products by price
                    this.filteredCategories = this.categories.map(category => {
                        return {
                            ...category,
                            products: category.products.sort((a, b) => 
                                order === 'low' ? a.price - b.price : b.price - a.price
                            )
                        };
                    });
                }
            },
            filters: {
                currency(value) {
                    return '$' + value.toFixed(2);
                }
            }
        });
