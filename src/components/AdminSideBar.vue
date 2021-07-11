<template>
  <div class="sidebar">
    <img class="logo-img" src="../assets/AClogo.jpg" alt="LOGO" />

    <section class="nav-list">
      <div class="nav-item">
        <img class="nav-img" src="../assets/index.jpg" alt="index" />
        <router-link class="nav-name" to="/admin/main"> 推文清單 </router-link>
      </div>
      <div class="nav-item">
        <img class="nav-img" src="../assets/user.jpg" alt="user" />
        <router-link class="nav-name" to="#"> 使用者列表 </router-link>
      </div>
      <div class="nav-item signout">
        <img class="nav-img" src="../assets/signout.jpg" alt="signout" />
        <span class="nav-name">登出</span>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {},
};
</script>


<style scoped>
.sidebar {
  min-width: 235px;
  text-align: left;
  margin: 4px 40px 0px 35px;
  position: relative;
}

.logo-img {
  margin: 10px;
  width: 30px;
  height: 30px;
}

.nav-list {
  margin-top: 24px;
}

.nav-item {
  height: 60px;
  display: flex;
  align-items: center;
  padding-left: 8px;
}

.nav-img {
  width: 24px;
  height: 24px;
}

.nav-name {
  font-weight: bold;
  font-size: 18px;
  margin-left: 18px;
}

.signout {
  position: fixed;
  bottom: 0;
}
</style>