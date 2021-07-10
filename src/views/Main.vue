<template>
  <div class="container">
    <!-- 使用 SideBar 元件 -->
    <SideBar />

    <div class="main-wrapper">
      <!-- 使用 UserPost 元件 -->
      <UserPost />

      <!-- 使用 Tweets 元件 -->
      <Tweets />
    </div>

    <!-- 使用 OtherUsers 元件 -->
    <OtherUsers />
  </div>
</template>

<script>
import SideBar from "../components/SideBar";
import OtherUsers from "../components/OtherUsers";
import UserPost from "../components/UserPost";
import Tweets from "../components/Tweets";

export default {
  components: {
    SideBar,
    OtherUsers,
    UserPost,
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