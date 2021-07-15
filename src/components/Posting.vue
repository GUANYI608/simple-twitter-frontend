<template>
  <div class="posting">
    <!-- ------ 頁首 ------ -->
    <div class="page-head">
      <router-link to="/homepage">
        <img
          class="back-icon"
          src="../assets/back.jpg"
          alt="back to homepage page"
        />
        <h6 class="page-name">推文</h6>
      </router-link>
    </div>
    <!-- ------ 推文 ------ -->
    <div class="tweet">
      <img class="user-avatar" :src="tweet.avatar" alt="avatar" />

      <!-- 使用者名稱與帳號 -->
      <div class="user-info">
        <h6 class="user-name">{{ tweet.name }}</h6>
        <h6 class="user-account">{{ tweet.account }}</h6>
      </div>

      <!-- 推文內容 -->
      <p class="tweet-content">
        {{ tweet.description }}
      </p>

      <!-- 推文時間 -->
      <p class="detail-info">{{ tweet.createdAt }}</p>

      <!-- 累積數量： 留言與按讚 -->
      <div class="number-followers">
        <span class="number">{{ tweet.replyCount }}</span>
        <span class="followers">回覆</span>
        <span class="number">{{ tweet.likeCount }}</span>
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
        <img
          v-if="tweet.isLiked"
          class="icon"
          src="../assets/liked.jpg"
          alt=""
          @click.stop.prevent="deleteLike(tweet.id)"
        />
        <img
          v-else
          class="icon"
          src="../assets/like.jpg"
          alt=""
          @click.stop.prevent="addLike(tweet.id)"
        />
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
  props: {
    initialTweet: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isReplyModalToggle: false,
      tweet: this.initialTweet,
    };
  },
  watch: {
    initialTweet(newValue) {
      this.tweet = {
        ...this.tweet,
        ...newValue,
      };
    },
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

.user-avatar {
  width: 50px;
  height: 50px;
  /* 以 tweet 為定位 */
  position: absolute;
  left: 15px;
  border-radius: 50%;
  object-fit: cover;
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
