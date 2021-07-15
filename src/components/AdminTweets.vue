<template>
  <section class="admintweets">
    <!-- 推文 -->
    <div class="tweet">
      <img class="user-avatar" :src="tweet.avatar" alt="avatar" />

      <!-- 使用者名稱與帳號、推文時間 -->
      <div class="user-info">
        <span class="user-name"> {{ tweet.name }} </span>
        <span class="detail-info">
          @{{ tweet.account }}・{{ tweet.createdAt | fromNow }}
        </span>
      </div>
      <!-- 推文內容 -->
      <p class="tweet-content">
        {{ tweet.description }}
      </p>

      <!-- 刪除按鈕 -->
      <button class="delete-button">
        <img class="delete-icon" src="../assets/delete.jpg" alt="delete" />
      </button>
    </div>
  </section>
</template>

<script>
import { fromNowFilter } from "../utils/mixins";

export default {
  name: "AdminTweets",
  mixins: [fromNowFilter],
  props: {
    initialTweet: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
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
};
</script>

<style scoped>
/* 推文 */
.tweet {
  margin-top: 10px;
  padding: 0 80px 0 80px;
  height: 110px;
  position: relative;
  border-bottom: 1px solid #e6ecf0;
}

.user-avatar {
  width: 50px;
  height: 50px;

  /* 以 tweet 為定位 */
  position: absolute;
  top: 3px;
  left: 15px;
  border-radius: 50%;
  object-fit: cover;
}

.user-name {
  font-weight: bold;
  font-size: 15px;
  padding-right: 5px;
}

.detail-info {
  font-weight: 500;
  font-size: 15px;
  color: #657786;
}

.tweet-content {
  margin-top: 6px;
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
}

/* 刪除按鈕 */
.delete-icon {
  width: 24px;
  height: 24px;

  /* 以 tweet 為定位 */
  position: absolute;
  top: 5px;
  right: 15px;
}
</style>