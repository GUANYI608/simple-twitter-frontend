<template>
  <div class="container">
    <!-- 使用 AdminSideBar 元件 -->
    <AdminSideBar />

    <!-- 使用 AdminUsersCards 元件 -->
    <div>
      <AdminUsersCards class="main-wrapper" />
    </div>
  </div>
</template>

<script>
import AdminSideBar from "../components/AdminSideBar";
import AdminUsersCards from "../components/AdminUsersCards";

export default {
  components: {
    AdminSideBar,
    AdminUsersCards,
  },
};
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 1fr 1062px;
}

.main-wrapper {
  height: auto;
  outline: 1px solid #e6ecf0;
}
</style>