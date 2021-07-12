<template>
  <div class="userprofile">
    <!-- ------ 頁首 ------ -->
    <div class="page-head">
      <router-link to="/main">
        <img
          class="back-icon"
          src="../assets/back.jpg"
          alt="back to main page"
        />
        <h6 class="user-title">Mary Jane</h6>
        <span class="tweet-count">1.4萬 推文</span>
      </router-link>
    </div>

    <!-- ------ 個人資料 ------ -->
    <div class="profile">
      <!-- 封面 -->
      <img src="../assets/cover2.jpg" alt="cover" class="cover" />
      <!-- 詳細資料 -->
      <div class="profile-detail">
        <img src="../assets/avater2.jpg" alt="" class="avater" />

        <!-- 按鈕區塊 -->
        <div class="button-area">
          <!-- 訊息圖示 -->
          <button class="icon-button">
            <img
              src="../assets/message.jpg"
              alt="message"
              class="message-icon"
            />
          </button>
          <!-- 開啟通知 -->
          <button class="icon-button">
            <img src="../assets/noti.jpg" alt="notify" class="noti-icon" />
          </button>
          <!-- 關閉通知 -->
          <!-- <button class="icon-button">
            <img src="../assets/notied.jpg" alt="notied" class="noti-icon" />
          </button> -->
          <!-- 跟隨狀態 -->
          <!-- <button type="button" class="tofollow-button">跟隨</button> -->
          <button type="button" class="following-button">正在跟隨</button>
        </div>

        <h6 class="user-name">Mary Jane</h6>
        <span class="user-account">@mjjane</span>
        <p class="person-intro">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint.
        </p>
        <!-- 統計數量：跟隨人數 -->
        <div class="count">
          <router-link class="number" to="#">
            1,174 個
            <span class="role"> 跟隨中 </span>
          </router-link>

          <router-link class="number" to="#">
            6.3萬
            <span class="role"> 跟隨者 </span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* ------ 外框 ------ */
.userprofile {
  width: 600px;
}

/* ------ 頁首 ------ */
.page-head {
  height: 55px;
  display: flex;
  align-items: center;
  position: relative;
  padding-left: 79px;
}

.back-icon {
  position: absolute;
  top: 15px;
  left: 15px;
  width: 24px;
  height: 24px;
}

.user-title {
  font-weight: 900;
  font-size: 19px;
}

.tweet-count {
  font-weight: 500;
  font-size: 13px;
  line-height: 19px;
  color: #657786;
}

/* ------ 個人資料 ------ */
.cover {
  width: 600px;
  height: 200px;
  object-fit: cover;
}

.profile-detail {
  position: relative;
  margin-top: 69px;
  padding-left: 15px;
}

.avater {
  /* 以 profile-detail 作為定位 */
  position: absolute;
  width: 140px;
  height: 140px;
  left: 15px;
  top: -145px;

  background: #c4c4c4;
  border: 4px solid #ffffff;
  border-radius: 50%;
  object-fit: cover;
}

/* ----- 按鈕區塊 ----- */
.button-area {
  /* 以 profile-detail 作為定位 */
  position: absolute;
  right: 15px;
  top: -59px;
  /* 按鈕水平排列 */
  display: flex;
}

/* 按鈕：傳訊息 */
.icon-button {
  margin-right: 10px;
}

.message-icon,
.noti-icon,
.notied-icon {
  width: 40px;
  height: 40px;
}

/* 按鈕：跟隨中 */
.following-button {
  width: 92px;
  height: 40px;

  font-weight: bold;
  font-size: 15px;
  line-height: 15px;

  border-radius: 100px;
}

/* 按鈕：想要跟隨 */
.tofollow-button {
  width: 62px;
  height: 40px;

  font-weight: bold;
  font-size: 15px;
  line-height: 15px;

  color: #ff6600;
  background: unset;
  border: 1px solid #ff6600;
  border-radius: 100px;
}

/* 名稱、帳號與自我介紹 */
.user-name {
  font-weight: 900;
  font-size: 19px;
  line-height: 28px;
}

.user-account {
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
  color: #657786;
}

.person-intro {
  margin-top: 10px;
}

/* 數量區塊：人數統計 */
.count {
  margin: 10px 0 20px 0;
}

.number {
  font-weight: 500;
  color: #000000;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
}

.role {
  color: #657786;
  margin-right: 20px;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
}
</style>