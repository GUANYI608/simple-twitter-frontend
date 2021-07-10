<template>
  <div class="posting">
    <!-- ------ 頁首 ------ -->
    <div class="page-head">
      <router-link to="/main">
        <img
          class="back-icon"
          src="../assets/back.jpg"
          alt="back to main page"
        />
        <h6 class="page-name">推文</h6>
      </router-link>
    </div>
    <!-- ------ 推文 ------ -->
    <div class="tweet">
      <img class="user-avater" src="../assets/avater.jpg" alt="avater" />

      <!-- 使用者名稱與帳號 -->
      <div class="user-info">
        <h6 class="user-name">Apple</h6>
        <h6 class="user-account">@apple</h6>
      </div>

      <!-- 推文內容 -->
      <p class="tweet-content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quam
        ullam alias explicabo placeat quis officiis adipisci nulla minus beatae
        sapiente cupiditate.
      </p>

      <!-- 推文時間 -->
      <p class="detail-info">上午 10:00・2021年7月9日</p>

      <!-- 累積數量： 留言與按讚 -->
      <div class="number-followers">
        <span class="number">34</span>
        <span class="followers">回覆</span>
        <span class="number">808</span>
        <span class="followers">喜歡次數</span>
      </div>

      <!-- icon: 留言與按讚 -->
      <div class="icons">
        <img
          class="icon"
          src="../assets/reply.jpg"
          alt=""
          @click.stop.prevent="toggleReplyModal()"
        />
        <img class="icon" src="../assets/like.jpg" alt="" />
      </div>
    </div>

    <!-- 彈出視窗：回覆推文 -->
    <RepliedModal
      :initial-is-reply-modal-toggle="isReplyModalToggle"
      @after-close-modal="closeReplyModal"
    />
  </div>
</template>

<script>
import RepliedModal from "./RepliedModal";

export default {
  components: {
    RepliedModal,
  },
  data() {
    return {
      isReplyModalToggle: false,
    };
  },
  methods: {
    toggleReplyModal() {
      this.isReplyModalToggle = true;
    },
    closeReplyModal(isReplyModalToggle) {
      this.isReplyModalToggle = isReplyModalToggle;
    },
  },
};
</script>

<style scoped>
.posting {
  outline: 1px solid #e6ecf0;
  width: 600px;
}

/* ------ 頁首 ------ */
.page-head {
  height: 55px;
  display: flex;
  align-items: center;
  position: relative;
}

.back-icon {
  position: absolute;
  top: 15px;
  left: 15px;
  width: 24px;
  height: 24px;
}

.page-name {
  font-weight: bold;
  font-size: 18px;
  line-height: 55px;
  padding-left: 79px;
}

/* ------ 推文 ------ */
.tweet {
  padding: 15px 15px 0 15px;
  height: 398px;
  outline: 1px solid #e6ecf0;
  position: relative;
}

.user-avater {
  width: 50px;
  height: 50px;
  /* 以 tweet 為定位 */
  position: absolute;
  left: 15px;
}

.user-info {
  padding-left: 60px;
  height: 44px;
}

.user-name {
  font-weight: bold;
  font-size: 15px;
  line-height: 22px;
}

.user-account {
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
  color: #657786;
}

.tweet-content {
  padding: 18px 60px 0 0;
  font-weight: 500;
  font-size: 15px;
  font-weight: 500;
  font-size: 23px;
  line-height: 34px;
}

.detail-info {
  padding-top: 15px;
  padding-bottom: 15px;
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
  color: #657786;
  border-bottom: 1px solid #e6ecf0;
}

.number-followers {
  padding: 20px 0 21px 4px;
  border-bottom: 1px solid #e6ecf0;
}

.number,
.followers {
  font-weight: bold;
  font-size: 19px;
  line-height: 28px;
  color: #000000;
}

.followers {
  padding-left: 5px;
  padding-right: 20px;
  color: #657786;
  font-weight: normal;
}

.icons {
  padding: 18px 0 11px 0;
}

.icon {
  width: 30px;
  height: 30px;
  margin-right: 150px;
}
</style>
