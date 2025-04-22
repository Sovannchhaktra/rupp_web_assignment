import Loader from "../../components/shared/loader/index.vue"
import Skeleton from 'primevue/skeleton';
import Galleria from 'primevue/galleria';
import HomeService from "@/utils/services/HomeService";
import AdvertisementService from "@/utils/services/AdvertisementService";

import advertisementJson from '@/utils/json/advertisement.json'

export default {
  name: "Home",
  data() {
    return {
      star: 5,
      lists: 4,
      objs: [],
      isLoading: false,
      advertisement: advertisementJson
    };
  },
  components: {
    Loader,
    Galleria,
    Skeleton
  },
  created() {
    // this.getListAdvertisement();
    this.getList();
  },
  methods: {
    getListAdvertisement() {
      this.isLoading = true;
      AdvertisementService.getList().then((res) => {
        this.isLoading = false;
        if(res.status === 200) {
          this.advertisement = [
            {
              itemImageSrc: '../../assets/images/04.png',
              thumbnailImageSrc: '../../assets/images/04.png',
              alt: 'Description for Image 1',
              title: 'Title 1'
            }
          ]
          console.log(this.advertisement)
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
          this.objs = res.data.data;
          console.log(this.objs)
        }else {
          console.log("Service not found")
        }
      }).catch((error) => {
        this.isLoading = false;
      });
    }
  }
};
