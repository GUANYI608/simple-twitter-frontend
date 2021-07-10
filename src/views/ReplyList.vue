<template>
  <div class="container">
    <!-- 使用 SideBar 元件 -->
    <SideBar />

    <div class="main-wrapper">
      <!-- 使用 Posting 元件 -->
      <Posting />

      <!-- 使用 PostingComments 元件 -->
      <PostingComments />
    </div>

    <!-- 使用 OtherUsers 元件 -->
    <OtherUsers />
  </div>
</template>

<script>
import SideBar from "../components/SideBar";
import OtherUsers from "../components/OtherUsers";
import Posting from "../components/Posting";
import PostingComments from "../components/PostingComments";

export default {
  components: {
    SideBar,
    OtherUsers,
    Posting,
    PostingComments,
  },
};
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 1fr 600px 1fr;
}

.main-wrapper {
  height: 100vh;
}
</style>