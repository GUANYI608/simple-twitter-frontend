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
        <h6 class="user-title">John Doe</h6>
        <span class="tweet-count">25 推文</span>
      </router-link>
    </div>

    <!-- ------ 個人資料 ------ -->
    <div class="profile">
      <!-- 封面 -->
      <img src="../assets/cover.jpg" alt="cover" class="cover" />
      <!-- 詳細資料資料 -->
      <div class="profile-detail">
        <img src="../assets/avater.jpg" alt="" class="avater" />
        <button type="button" class="edit-profile">編輯個人資料</button>
        <h6 class="user-name">John Doe</h6>
        <span class="user-account">@heyjohn</span>
        <p class="person-intro">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint.
        </p>
        <!-- 累積數量： 留言與按讚 -->
        <div class="count">
          <span class="number">34個</span>
          <span class="role">跟隨中</span>
          <span class="number">808位</span>
          <span class="role">跟隨者</span>
        </div>
      </div>
      <!-- 項目 -->
      <div class="item-list">
        <button class="item">推文</button>
        <button class="item">推文與回覆</button>
        <button class="item">喜歡的內容</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* ------ 外框 ------ */
.userprofile {
  outline: 1px solid #e6ecf0;
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
  line-height: 28px;
}

.tweet-count {
  font-weight: 500;
  font-size: 13px;
  line-height: 19px;
  color: #657786;
}

/* ------ 個人資料 ------ */
.cover {
  width: 598px;
  height: 200px;
  object-fit: cover;
}

.profile-detail {
  position: relative;
  /* border: 1px solid orange; */
  padding-left: 15px;
}

.avater {
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

.edit-profile {
  position: absolute;
  top: -59px;
  right: 15px;
  width: 122px;
  height: 40px;
  background: none;
  color: #ff6600;
  font-weight: bold;
  font-size: 15px;
  line-height: 28px;
  border: 1px solid #ff6600;
  border-radius: 100px;
}

.user-name {
  font-weight: 900;
  font-size: 19px;
  line-height: 28px;
  margin-top: 69px;
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

.count {
  margin-top: 10px;
  font-size: 14px;
}

.number {
  font-weight: 500;
  color: #000000;
}

.role {
  color: #657786;
  margin-right: 20px;
}

.item-list {
  margin-top: 20px;
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
.item:first-child {
  position: relative;
  color: #ff6600;
}

.item:first-child::after {
  content: "";
  background: #ff6600;
  position: absolute;
  top: 53px;
  left: 0;
  height: 2px;
  width: 130px;
  z-index: 1;
}
</style>