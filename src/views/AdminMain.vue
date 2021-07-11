<template>
  <div class="container">
    <!-- 使用 AdminSideBar 元件 -->
    <AdminSideBar />

    <div class="main-wrapper">
      <!-- 使用 Tweets 元件 -->
      <Tweets />
    </div>
  </div>
</template>

<script>
import AdminSideBar from "../components/AdminSideBar";
import Tweets from "../components/Tweets";

export default {
  components: {
    AdminSideBar,
    Tweets,
  },
};
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 1fr 600px 1fr;
}

.main-wrapper {
  height: auto;
}
</style>