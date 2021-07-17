<template>
  <div class="usertweets">
    <!-- 推文區塊 -->
    <div class="tweet">
      <img class="user-avatar" :src="tweet.avatar" alt="avatar" />

      <!-- 使用者名稱與帳號 -->
      <div class="user-info">
        <span class="user-name"> {{ tweet.name }} </span>
        <span class="detail-info">
          @a {{ tweet.account }}・{{ tweet.createdAt | fromNow }}
        </span>
      </div>
      <router-link to="/replylist">
        <!-- 推文內容 -->
        <p class="tweet-content">
          {{ tweet.description }}
        </p>
      </router-link>

      <!-- 留言與按讚 -->
      <div class="icons">
        <img class="icon" src="../assets/reply.jpg" alt="" />
        <span class="count"> {{ tweet.replyCount }} </span>
        <img class="icon" src="../assets/like.jpg" alt="" />
        <span class="count"> {{ tweet.likeCount }} </span>
      </div>
    </div>
  </div>
</template>

<script>
import { fromNowFilter } from "../utils/mixins";
// 推文時間：轉換為中文
import moment from "moment";
moment.locale("zh-tw");

export default {
  name: "UserTweets",
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
.usertweets {
  width: 600px;
  outline: 1px solid #e6ecf0;
}

/* ----- 推文區塊 ----- */
.tweet {
  padding: 13px 15px 0 75px;
  height: 146px;
  position: relative;
  border-bottom: 1px solid #e6ecf0;
}

.tweet:last-child {
  border-bottom: none;
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
  padding-top: 6px;
  font-weight: 500;
  font-size: 15px;
}

.icons {
  height: 21px;
  position: absolute;
  bottom: 10px;
}

.icon {
  width: 15px;
  height: 15px;
  margin-right: 10px;
}

.count {
  margin-right: 50px;
  font-weight: 500;
  font-size: 13px;
  line-height: 21px;
  color: #657786;
}
</style>