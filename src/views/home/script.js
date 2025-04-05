import Loader from "../../components/shared/loader/index.vue"
import Skeleton from 'primevue/skeleton';
import Galleria from 'primevue/galleria';
import HomeService from "@/utils/services/HomeService";
import AdvertisementService from "@/utils/services/AdvertisementService";

export default {
  name: "Home",
  data() {
    return {
      star: 5,
      lists: 4,
      myData: "Hello world",
      isLoading: false,
      advertisement: [
        {
          itemImageSrc: 'https://placehold.co/100x35',
          thumbnailImageSrc: 'https://placehold.co/60x60',
          alt: 'Description for Image 1',
          title: 'Title 1'
        },
        {
          itemImageSrc: 'https://placehold.co/100x35',
          thumbnailImageSrc: 'https://placehold.co/60x60',
          alt: 'Description for Image 1',
          title: 'Title 1'
        },
        {
          itemImageSrc: 'https://placehold.co/100x35',
          thumbnailImageSrc: 'https://placehold.co/60x60',
          alt: 'Description for Image 1',
          title: 'Title 1'
        },
        {
          itemImageSrc: 'https://placehold.co/100x35',
          thumbnailImageSrc: 'https://placehold.co/60x60',
          alt: 'Description for Image 1',
          title: 'Title 1'
        },
        {
          itemImageSrc: 'https://placehold.co/100x35',
          thumbnailImageSrc: 'https://placehold.co/60x60',
          alt: 'Description for Image 1',
          title: 'Title 1'
        },
      ]
    };
  },
  components: {
    Loader,
    Galleria,
    Skeleton
  },
  created() {
    // this.getListAdvertisement();
    // this.getList();
  },
  methods: {
    getListAdvertisement() {
      this.isLoading = true;
      AdvertisementService.getList().then((res) => {
        this.isLoading = false;
        if(res.status === 200) {
          console.log(res)
        } 
      }).catch((error) => {
        this.isLoading = false;
      });
    },

    getList() {
      this.isLoading = true;
      HomeService.getList().then((res)=>{
        this.isLoading = false;
        if(res.status === 200) {
          console.log(res)
        }else {
          console.log("Service not found")
        }
      }).catch((error) => {
        this.isLoading = false;
      });
    }
  }
};
