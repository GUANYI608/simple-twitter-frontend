<template>
  <div class="container">
    <!-- 使用 SideBar 元件 -->
    <SideBar />

    <!-- 使用 UserFollowings 元件 -->
    <div>
      <UserFollowings class="followings-wrapper" />
    </div>

    <!-- 使用 OtherUsers 元件 -->
    <OtherUsers />
  </div>
</template>

<script>
import SideBar from "../components/SideBar";
import OtherUsers from "../components/OtherUsers";
import UserFollowings from "../components/UserFollowings";

export default {
  components: {
    SideBar,
    OtherUsers,
    UserFollowings,
  },
};
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 1fr 600px 1fr;
}

.followings-wrapper {
  height: auto;
  outline: 1px solid #e6ecf0;
}
</style>