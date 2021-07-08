<template>
  <div class="sidebar">
    <img class="logo-img" src="../assets/AClogo.jpg" alt="LOGO" />

    <div class="nav-list">
      <div class="nav-item">
        <img class="nav-img" src="../assets/index.jpg" alt="index" />
        <router-link class="nav-name" to="/main"> 首頁 </router-link>
      </div>
      <div class="nav-item">
        <img class="nav-img" src="../assets/user.jpg" alt="user" />
        <router-link class="nav-name" to="#"> 個人資料 </router-link>
      </div>
      <div class="nav-item">
        <img class="nav-img" src="../assets/setting.jpg" alt="setting" />
        <router-link class="nav-name" to="/accountsetting"> 設定 </router-link>
      </div>

      <button
        type="button"
        class="new-tweet"
        data-toggle="modal"
        data-target="#exampleModal"
      >
        推文
      </button>
      <div class="nav-item signout">
        <img class="nav-img" src="../assets/signout.jpg" alt="signout" />
        <span class="nav-name">登出</span>
      </div>
    </div>
  </div>
</template>

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

.new-tweet {
  margin: 10px 0px 5px 0px;
  height: 45px;
  width: 210px;
  border-radius: 50px;
  font-size: 18px;
  line-height: 18px;
  font-weight: 500;
}

.signout {
  position: fixed;
  bottom: 0;
}
</style>