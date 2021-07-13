<template>
  <div class="userprofile">
    <!-- ------ 頁首 ------ -->
    <div class="page-head">
      <router-link to="/homepage">
        <img
          class="back-icon"
          src="../assets/back.jpg"
          alt="back to home page"
        />
        <h6 class="user-title">John Doe</h6>
        <span class="tweet-count">25 推文</span>
      </router-link>
    </div>

    <!-- ------ 個人資料 ------ -->
    <div class="profile">
      <!-- 封面 -->
      <img src="../assets/cover.jpg" alt="cover" class="cover" />
      <!-- 詳細資料 -->
      <div class="profile-detail">
        <img src="../assets/avatar.jpg" alt="" class="avatar" />
        <button type="button" class="edit-profile">編輯個人資料</button>
        <h6 class="user-name">John Doe</h6>
        <span class="user-account">@heyjohn</span>
        <p class="person-intro">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint.
        </p>
        <!-- 統計數量：跟隨人數 -->
        <div class="count">
          <router-link class="number" to="/user/self/followings">
            34個
            <span class="role"> 跟隨中 </span>
          </router-link>

          <router-link class="number" to="/user/self/followers">
            808位
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
  padding-left: 15px;
}

.avatar {
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

/* 按鈕：編輯個人資料 */
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