import MenuJson from "./menus.json";
import { useI18n } from 'vue-i18n';

export default {
  name: "Navbar",
  data() {
    return {
      menu: MenuJson,
      isLanguage: Boolean,
    };
  },
  created() {},
  updated() {
    this.changeLanguage();
  },
  methods: {
    changeLanguage(){
      const { locale } = useI18n();
      if (this.isLanguage) {
        localStorage.setItem('lang', 'en')
      } else {
        localStorage.setItem('lang', 'kh')
      }
      // Load language from localStorage on app start
      locale.value = localStorage.getItem('lang');
    }
  },
  mounted() {
    if(localStorage.getItem('lang') === 'en' || localStorage.getItem('lang') === null) {
      this.isLanguage = true;
    }else {
      this.isLanguage = false;
    }
  }
};
