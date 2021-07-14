<template>
  <div class="userfollowers">
    <!-- ------ 頁首 ------ -->
    <div class="page-head">
      <router-link to="/user/self">
        <img
          class="back-icon"
          src="../assets/back.jpg"
          alt="back to home page"
        />
        <h6 class="user-title">John Doe</h6>
        <span class="tweet-count">25 推文</span>
      </router-link>
    </div>

    <!-- ---- 項目區塊 ---- -->
    <div class="item-list">
      <router-link to="/user/self/followers" class="item-link">
        <button class="item">跟隨者</button>
      </router-link>
      <router-link to="#" class="item-link">
        <button class="item item-current">正在跟隨</button>
      </router-link>
    </div>

    <!-- ---- 推文清單 ---- -->
    <section class="tweet-list">
      <!-- 推文（第一則） -->
      <div class="tweet">
        <!-- 推文者資料 -->
        <img class="user-avatar" src="../assets/avatar.jpg" alt="avatar" />
        <div class="user-info">
          <p class="user-name">Marvin McKinney</p>
          <p class="user-account">@MariaReyes</p>
        </div>
        <!-- 按鈕 -->
        <!-- <button type="button" class="tofollow-button">跟隨</button> -->
        <button type="button" class="following-button">正在跟隨</button>
        <!-- 推文內容 -->
        <p class="tweet-content">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit.onsequat duis
          enim.
        </p>
      </div>
      <!-- 推文（以下需要用 v-for 跑資料） -->
      <div class="tweet">
        <!-- 推文者資料 -->
        <img class="user-avatar" src="../assets/avatar.jpg" alt="avatar" />
        <div class="user-info">
          <p class="user-name">Laure</p>
          <p class="user-account">@LaureBill</p>
        </div>
        <!-- 按鈕 -->
        <button type="button" class="following-button">正在跟隨</button>
        <!-- 推文內容 -->
        <p class="tweet-content">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit.onsequat duis
          enim.
        </p>
      </div>
      <div class="tweet">
        <!-- 推文者資料 -->
        <img class="user-avatar" src="../assets/avatar.jpg" alt="avatar" />
        <div class="user-info">
          <p class="user-name">Laure</p>
          <p class="user-account">@LaureBill</p>
        </div>
        <!-- 按鈕 -->
        <button type="button" class="following-button">正在跟隨</button>
        <!-- 推文內容 -->
        <p class="tweet-content">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit.onsequat duis
          enim.
        </p>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* ------ 外框 ------ */
.userfollowers {
  width: 600px;
}

/* ------ 頁首 ------ */
.page-head {
  height: 58px;
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
  color: #657786;
}

/* ----- 項目區塊 ----- */
.item-list {
  border-bottom: 1px solid #e6ecf0;
}

.item {
  width: 130px;
  height: 54px;

  background: unset;
  color: #657786;
  font-weight: bold;
  font-size: 15px;
  border-radius: 0;
}

/* 當前頁面樣式：橘字加底線 */
.item-current {
  position: relative;
}

.item-current::after {
  content: "";
  background: #ff6600;
  position: absolute;
  top: 53px;
  left: 0;
  height: 2px;
  width: 130px;
  z-index: 1;
}

.item-current {
  color: #ff6600;
}

/* ----- 跟隨者推文 ----- */
/* 推文 */
.tweet {
  margin-top: 10px;
  height: 95px;
  padding: 0 15px 10px 75px;

  border-bottom: 1px solid #e6ecf0;
  position: relative;
}

.tweet:last-child {
  border-bottom: none;
}

/* 推文者資料 */
.user-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  /* 以 tweet 作為定位 */
  position: absolute;
  top: 3px;
  left: 15px;
}

.user-info {
  height: 35px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.user-name {
  font-weight: bold;
  font-size: 15px;
  line-height: 15px;
}

.user-account {
  font-weight: 500;
  font-size: 15px;
  line-height: 15px;
  color: #657786;
}

/* 按鈕：跟隨中 */
.following-button {
  width: 92px;
  height: 30px;
  /* 以 tweet 作為定位 */
  position: absolute;
  top: 2px;
  right: 15px;

  font-weight: bold;
  font-size: 15px;
  line-height: 15px;

  border-radius: 100px;
}

/* 按鈕：想要跟隨 */
.tofollow-button {
  width: 62px;
  height: 30px;
  /* 以 tweet 作為定位 */
  position: absolute;
  top: 2px;
  right: 15px;

  font-weight: bold;
  font-size: 15px;
  line-height: 15px;

  color: #ff6600;
  background: unset;
  border: 1px solid #ff6600;
  border-radius: 100px;
}

/* 推文內容 */
.tweet-content {
  margin-top: 5px;
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
}
</style>