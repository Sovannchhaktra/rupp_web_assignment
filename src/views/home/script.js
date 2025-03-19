import Loader from "../../components/shared/loader/index.vue"
import Galleria from 'primevue/galleria';
export default {
  name: "Home",
  data() {
    return {
      star: 5,
      lists: 4,
      myData: "Hello world",
      isLoading: false,
      images: [
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
    Galleria
  },
};
