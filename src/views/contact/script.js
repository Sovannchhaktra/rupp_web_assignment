import Editor from "@tinymce/tinymce-vue";
import InputText from 'primevue/inputtext';
import FloatLabel from "primevue/floatlabel";

export default {
  components: {
    Editor,
    FloatLabel,
    InputText,
  },
  data() {
    return {
      apiKey: "wp3f37cbiglhh55gwuhiqa6z7ldpv8vlqqj83v4o23lt06nr",
      initOptions: {
        menubar: false,
        toolbar_mode: "sliding",
        height: 300,
        plugins:
          "anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount",
        toolbar:
          "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat",
      },
      followUs: 5,
    };
  },
  created() {
    console.log("TinyMCE API Key:", this.apiKey);
  },
};
