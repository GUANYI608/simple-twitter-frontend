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
        <h6 class="user-title">{{ user.name }}</h6>
        <span class="tweet-count"> {{ user.tweetCount }} 推文</span>
      </router-link>
    </div>

    <!-- ------ 個人資料 ------ -->
    <div class="profile">
      <!-- 封面 -->
      <img :src="user.cover" alt="cover" class="cover" />
      <!-- 詳細資料 -->
      <div class="profile-detail">
        <img :src="user.avatar" alt="" class="avatar" />
        <!-- 按鈕區塊：是本人 -->
        <button v-if="isSelf" type="button" class="edit-profile">
          編輯個人資料
        </button>
        <!-- 按鈕區塊：非本人 -->
        <div class="button-area" v-else>
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
          <button
            v-if="user.isFollowing"
            type="button"
            class="following-button"
          >
            正在跟隨
          </button>
          <button v-else type="button" class="tofollow-button">跟隨</button>
        </div>

        <h6 class="user-name">{{ user.name }}</h6>
        <span class="user-account">@{{ user.account }}</span>
        <p class="person-intro">
          {{ user.introduction }}
        </p>
        <!-- 統計數量：跟隨人數 -->
        <div class="count">
          <router-link
            v-show="!isLoading"
            class="number"
            to="/user/self/followings"
          >
            {{ user.followingCount }}
            <span class="role"> 跟隨中 </span>
          </router-link>

          <router-link
            v-show="!isLoading"
            class="number"
            to="/user/self/followers"
          >
            {{ user.followerCount }}
            <span class="role"> 跟隨者 </span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
// import userAPI from "../apis/user";
// import { Toast } from "../utils/helpers";

export default {
  name: "UserProfile",
  props: {
    initialUser: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      user: this.initialUser,
      isSelf: false,
      isLoading: true,
    };
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  watch: {
    initialUser(newValue) {
      this.user = {
        ...this.user,
        ...newValue,
      };

      this.checkIsSelf();
      this.isLoading = false;
    },
  },
  methods: {
    checkIsSelf() {
      if (this.user.id === this.currentUser.id) {
        this.isSelf = true;
      } else {
        this.isSelf = false;
      }
    },
  },
};
</script>


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