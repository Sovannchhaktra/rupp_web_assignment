import MenuJson from "./menus.json";
import { useI18n } from "vue-i18n";
import Panel from 'primevue/panel';
import { Loader } from "@googlemaps/js-api-loader";

export default {
  name: "Navbar",
  data() {
    return {
      toggleableMap: false,
      menu: MenuJson,
      isLanguage: Boolean,
      lat: 11.562108,
      long: 104.888535
    };
  },
  components: {
    Panel
  },
  created() {
    this.changeLanguage();
  },
  updated() {
    this.changeLanguage();
    this.getMerchantLocation(this.lat, this.long);
  },
  methods: {
    changeLanguage() {
      const { locale } = useI18n();
      if (this.isLanguage) {
        localStorage.setItem("lang", "en");
        document.body.classList.add("english-mode");
        document.body.classList.remove("khmer-mode");
      } else {
        localStorage.setItem("lang", "kh");
        document.body.classList.add("khmer-mode");
        document.body.classList.remove("english-mode");
      }
      // Load language from localStorage on app start
      locale.value = localStorage.getItem("lang");
    },
    getMerchantLocation(lat, lng) {
      let latitude = lat ?? this.lat;
      let longitude = lng ?? this.long;

      const DALLAS = { lat: parseFloat(latitude), lng: parseFloat(longitude) };

      const loader = new Loader({
        apiKey: "AIzaSyAOVYRIgupAurZup5y1PRh8Ismb1A3lLao", // Use your actual API key
        // version: "weekly",
        // libraries: []
      });

      loader.load().then(() => {
        const map = new google.maps.Map(
          document.getElementById("google-map"),
          {
            center: DALLAS,
            zoom: 12
          }
        );

        new google.maps.Marker({
          position: DALLAS,
          map,
          draggable: false
        });
      });
    }
  },
  mounted() {
    this.changeLanguage();
    if (
      localStorage.getItem("lang") === "en" ||
      localStorage.getItem("lang") === null
    ) {
      this.isLanguage = true;
    } else {
      this.isLanguage = false;
    }
  },
};
