<template>
  <div class="container">
    <!-- 使用 SideBar 元件 -->
    <SideBar />

    <div class="user-wrapper">
      <!-- 使用 UserProfile 元件 -->
      <UserProfile />

      <!-- 項目區塊 -->
      <div class="item-list">
        <router-link to="/user/self" class="item-link">
          <button class="item item-current">推文</button>
        </router-link>
        <router-link to="#" class="item-link">
          <button class="item">推文與回覆</button>
        </router-link>
        <router-link to="/user/self/like" class="item-link">
          <button class="item">喜歡的內容</button>
        </router-link>
      </div>

      <!-- 使用 UserLikedTweets 元件 -->
      <UserLikedTweets />
    </div>

    <!-- 使用 OtherUsers 元件 -->
    <OtherUsers />
  </div>
</template>

<script>
import SideBar from "../components/SideBar";
import OtherUsers from "../components/OtherUsers";
import UserProfile from "../components/UserProfile";
import UserLikedTweets from "../components/UserLikedTweets";

export default {
  components: {
    SideBar,
    OtherUsers,
    UserProfile,
    UserLikedTweets,
  },
};
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 1fr 600px 1fr;
}

.user-wrapper {
  height: auto;
  outline: 1px solid #e6ecf0;
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
</style>