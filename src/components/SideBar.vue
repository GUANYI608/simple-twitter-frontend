<template>
  <div class="sidebar">
    <img class="logo-img" src="../assets/AClogo.jpg" alt="LOGO" />

    <section class="nav-list">
      <div class="nav-item">
        <img class="nav-img" src="../assets/index.jpg" alt="index" />
        <router-link class="nav-name" to="/homepage"> 首頁 </router-link>
      </div>
      <div class="nav-item">
        <img class="nav-img" src="../assets/user.jpg" alt="user" />
        <router-link
          class="nav-name"
          :to="{ name: 'user-self', params: { id: currentUser.id } }"
        >
          個人資料
        </router-link>
      </div>
      <div class="nav-item">
        <img class="nav-img" src="../assets/setting.jpg" alt="setting" />
        <router-link
          class="nav-name"
          :to="{ name: 'account-setting', params: { id: currentUser.id } }"
        >
          設定
        </router-link>
      </div>
      <button
        type="button"
        class="new-tweet"
        data-toggle="modal"
        data-target="#exampleModal"
        @click.stop.prevent="showModal"
      >
        推文
      </button>
      <div class="nav-item signout">
        <img class="nav-img" src="../assets/signout.jpg" alt="signout" />
        <router-link to="/signin" class="nav-name">登出</router-link>
      </div>

      <!-- --- 彈出視窗：新增推文 --- -->
      <!-- 彈出視窗：模糊主頁 -->
      <div class="background-wrapper" v-if="isShowTweetModal"></div>
      <!-- 彈出視窗：推文內容 -->
      <div class="tweet-modal" v-if="isShowTweetModal">
        <div class="modal-title">
          <img
            class="cancel-icon"
            src="../assets/cancel.jpg"
            alt="cancel"
            @click.stop.prevent="cancelModal"
          />
        </div>
        <div class="modal-text">
          <img class="user-avatar" src="../assets/avatar.jpg" alt="avatar" />
          <div class="form-group">
            <label class="form-input" for="NewTweet"></label>
            <textarea
              id="NewTweet"
              class="tweet-content"
              name="NewTweet"
              rows="4"
              cols="50"
              placeholder="有什麼新鮮事？"
            ></textarea>
            <button type="submit" class="post-button">推文</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      isShowTweetModal: false,
      userId: -1,
    };
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  watch: {
    $route(to) {
      this.userId = to.params.id;
    },
  },
  methods: {
    showModal() {
      this.isShowTweetModal = true;
    },
    cancelModal() {
      this.isShowTweetModal = false;
    },
  },
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

.nav-name:hover {
  color: unset;
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

/* ------ 彈出視窗 ------ */

.background-wrapper {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  margin: unset;
  padding: unset;
  background: #363434;
  opacity: 0.5;
  z-index: 1;
}

.tweet-modal {
  position: fixed;
  top: 54px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  width: 600px;
  background: #ffffff;
  border-radius: 14px;
}

.modal-title {
  height: 55px;
  border-bottom: 1px solid #e6ecf0;
  display: flex;
  align-items: center;
}

.cancel-icon {
  height: 24px;
  width: 24px;
  margin-left: 15px;
}

.modal-text {
  position: relative;
  height: 245px;
}

.user-avatar {
  position: absolute;
  top: 15px;
  left: 15px;
  width: 50px;
  height: 50px;
}

.tweet-content {
  padding: 27px 15px 70px 0;
  margin-left: 75px;
  width: 510px;
  font-weight: 500;
  font-size: 18px;
  color: #9197a3;
  /* 去除邊框與右下角與輸入時的提示框線 */
  border: none;
  resize: none;
  outline: none;
}

.tweet-content::placeholder {
  font-weight: 500;
  font-size: 18px;
  color: #9197a3;
}

.post-button {
  position: absolute;
  right: 15px;
  bottom: 15px;
  height: 40px;
  width: 64px;
  border-radius: 100px;
  font-weight: 500;
  font-size: 18px;
}
</style>