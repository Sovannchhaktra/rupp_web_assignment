<template>
  <main id="app" class="w-100 h-auto flex flex-col items-center">
    <Navbar />
    <div class="w-[80%] h-auto mt-7 m-5">
      <RouterView />
    </div>
    <Footer />
  </main>
</template>

<script>
import Navbar from "@/components/navbar/index.vue";
import Footer from "@/components/footer/index.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style></style>
