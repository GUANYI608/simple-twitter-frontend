<template>
  <div class="container">
    <!-- 使用 SideBar 元件 -->
    <SideBar />

    <!-- 使用 UserFollowers 元件 -->
    <div>
      <UserFollowers class="followers-wrapper" />
    </div>

    <!-- 使用 OtherUsers 元件 -->
    <OtherUsers />
  </div>
</template>

<script>
import SideBar from "../components/SideBar";
import OtherUsers from "../components/OtherUsers";
import UserFollowers from "../components/UserFollowers";

export default {
  components: {
    SideBar,
    OtherUsers,
    UserFollowers,
  },
};
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 1fr 600px 1fr;
}

.followers-wrapper {
  height: auto;
  outline: 1px solid #e6ecf0;
}
</style>