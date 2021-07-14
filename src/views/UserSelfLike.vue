<template>
  <div class="container">
    <!-- 使用 SideBar 元件 -->
    <SideBar />

    <div class="user-wrapper">
      <!-- 使用 UserProfile 元件 -->
      <UserProfile />

      <!-- 使用 UserLikedTweets 元件 -->
      <UserLikedTweets />
    </div>

    <!-- 使用 OtherUsers 元件 -->
    <OtherUsers />
  </div>
</template>

<script>
import SideBar from "../components/SideBar";
import OtherUsers from "../components/OtherUsers";
import UserProfile from "../components/UserProfile";
import UserLikedTweets from "../components/UserLikedTweets";

export default {
  components: {
    SideBar,
    OtherUsers,
    UserProfile,
    UserLikedTweets,
  },
};
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 1fr 600px 1fr;
}

.user-wrapper {
  height: auto;
  outline: 1px solid #e6ecf0;
}
</style>