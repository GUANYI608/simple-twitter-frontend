<template>
  <div class="container">
    <h6 class="sub-title">跟隨誰</h6>
    <section class="user-list">
      <!-- 之後用 v-for 跑資料 -->
      <div class="user">
        <!-- 圖片用灰圖先製作 -->
        <img class="user-avater" src="../assets/avater.jpg" alt="avater" />
        <div class="user-info">
          <p class="user-name">Pizza Hut</p>
          <p class="user-account">@pizzahut</p>
        </div>
        <!-- <button type="button" class="tofollow-button">跟隨</button> -->
        <button type="button" class="following-button">正在跟隨</button>
      </div>
      <div class="user">
        <img class="user-avater" src="../assets/avater.jpg" alt="avater" />
        <div class="user-info">
          <p class="user-name">Pizza Hut</p>
          <p class="user-account">@pizzahut</p>
        </div>
        <button type="button" class="tofollow-button">跟隨</button>
      </div>
      <div class="user">
        <img class="user-avater" src="../assets/avater.jpg" alt="avater" />
        <div class="user-info">
          <p class="user-name">Pizza Hut</p>
          <p class="user-account">@pizzahut</p>
        </div>
        <button type="button" class="tofollow-button">跟隨</button>
      </div>
      <div class="user">
        <img class="user-avater" src="../assets/avater.jpg" alt="avater" />
        <div class="user-info">
          <p class="user-name">Pizza Hut</p>
          <p class="user-account">@pizzahut</p>
        </div>
        <button type="button" class="tofollow-button">跟隨</button>
      </div>
      <div class="user">
        <img class="user-avater" src="../assets/avater.jpg" alt="avater" />
        <div class="user-info">
          <p class="user-name">Pizza Hut</p>
          <p class="user-account">@pizzahut</p>
        </div>
        <button type="button" class="tofollow-button">跟隨</button>
      </div>
      <div class="user">
        <img class="user-avater" src="../assets/avater.jpg" alt="avater" />
        <div class="user-info">
          <p class="user-name">Pizza Hut</p>
          <p class="user-account">@pizzahut</p>
        </div>
        <button type="button" class="tofollow-button">跟隨</button>
      </div>
      <p class="list-footer">
        <router-link to="" class="more-user"> 顯示更多 </router-link>
      </p>
    </section>
  </div>
</template>

<style scoped>
.container {
  width: 350px;
  margin: 15px 82px 0px 30px;
  background: #f5f8fa;
  border-radius: 14px;

  /* 放外框線方便辨別 */
  /* border: 5px solid #0099ff; */
}

.sub-title {
  height: 45px;
  padding-top: 10px;
  padding-left: 15px;
  font-weight: bold;
  font-size: 18px;
  line-height: 26px;
  border-bottom: 1px solid #e6ecf0;
}

.user {
  height: 70px;
  padding: 10px 15px 10px 15px;
  border-bottom: 1px solid #e6ecf0;
  display: flex;
  flex-direction: column;
  position: relative;
}

.user-avater {
  height: 50px;
  width: 50px;
}

.user-info {
  position: absolute;
  left: 75px;
}

.user-name {
  margin-top: 8px;
  font-weight: bold;
  font-size: 15px;
  line-height: 15px;
}

.user-account {
  margin-top: 3px;
  font-weight: bold;
  font-size: 15px;
  line-height: 15px;
  color: #657786;
}

.tofollow-button {
  position: absolute;
  top: 19px;
  right: 15px;
  height: 30px;
  width: 62px;
  background: none;
  color: #ff6600;
  font-weight: bold;
  font-size: 15px;
  line-height: 30px;
  border: 1px solid #ff6600;
  border-radius: 100px;
}

.following-button {
  position: absolute;
  top: 20px;
  right: 15px;
  height: 30px;
  width: 92px;
  color: #ffffff;
  font-weight: bold;
  font-size: 15px;
  line-height: 30px;
  border-radius: 100px;
}

.list-footer {
  height: 45px;
  color: #ff6600;
}

.more-user {
  display: inline-block;
  padding-top: 11px;
  padding-left: 15px;
  font-size: 15px;
  line-height: 22px;
  color: #ff6600;
}
</style>