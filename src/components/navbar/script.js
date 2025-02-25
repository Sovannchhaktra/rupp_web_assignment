import MenuJson from "./menus.json";

export default {
  name: "Navbar",
  data() {
    return {
      menu: MenuJson,
      isLanguage: true,
    };
  },
  created() {},
  methods: {},
  mounted() {
    console.log(this.$route.path)
    if (this.$route.path === '/product/detail') {
      this.$router.replace('/');
    }
  }
};
