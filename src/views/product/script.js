import InputText from 'primevue/inputtext';
import Paginator from 'primevue/paginator';

export default {
    name: "Products",
    data() {
        return {
            list: 8,
            star: 5,
            numRecord: 10,
            pFirst: 0,
            objs: { total: 100 },
            pageOptions: [10, 25, 50, 100]
        }
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
        }
    }
}