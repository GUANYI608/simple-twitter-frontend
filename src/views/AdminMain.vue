<template>
  <div class="container">
    <!-- 使用 AdminSideBar 元件 -->
    <AdminSideBar />

    <!-- 使用 AdminTweets 元件 -->
    <div>
      <AdminTweets class="tweets-wrapper" />
    </div>
  </div>
</template>

<script>
import AdminSideBar from "../components/AdminSideBar";
import AdminTweets from "../components/AdminTweets";

export default {
  components: {
    AdminSideBar,
    AdminTweets,
  },
};
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 1fr 1062px;
}

.tweets-wrapper {
  height: auto;
  outline: 1px solid #e6ecf0;
}
</style>