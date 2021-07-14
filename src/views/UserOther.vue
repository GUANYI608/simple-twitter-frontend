<template>
  <div class="container">
    <!-- 使用 SideBar 元件 -->
    <SideBar />

    <div class="otheruser-wrapper">
      <!-- 使用 OtherUserProfile 元件 -->
      <OtherUserProfile />

      <!-- 使用 OtherUserTweets 元件 -->
      <OtherUserTweets />
    </div>

    <!-- 使用 OtherUsers 元件 -->
    <OtherUsers />
  </div>
</template>

<script>
import SideBar from "../components/SideBar";
import OtherUsers from "../components/OtherUsers";
import OtherUserProfile from "../components/OtherUserProfile";
import OtherUserTweets from "../components/OtherUserTweets";

export default {
  components: {
    SideBar,
    OtherUsers,
    OtherUserProfile,
    OtherUserTweets,
  },
};
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 1fr 600px 1fr;
}

.otheruser-wrapper {
  height: auto;
  outline: 1px solid #e6ecf0;
}
</style>