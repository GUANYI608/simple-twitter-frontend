<template>
  <section class="tweets">
    <!-- 推文 -->
    <div class="tweet">
      <router-link to="/user/other">
        <img class="user-avatar" :src="tweet.avatar" alt="avatar" />
      </router-link>

      <!-- 使用者名稱與帳號 -->
      <div class="user-info">
        <span class="user-name"> {{ tweet.name }} </span>
        <span class="detail-info">
          @{{ tweet.account }}・{{ tweet.createdAt | fromNow }}
        </span>
      </div>
      <router-link :to="{ name: 'reply-list', params: { id: tweet.id } }">
        <!-- 推文內容 -->
        <p class="tweet-content">
          {{ tweet.description }}
        </p>
      </router-link>
      <!-- 留言與按讚 -->
      <div class="icons">
        <img
          class="icon"
          src="../assets/reply.jpg"
          alt=""
          @click.stop.prevent="toggleReplyModal()"
        />
        <span class="count"> {{ tweet.replyCount }} </span>
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
        <span class="count"> {{ tweet.likeCount }} </span>
      </div>
    </div>

    <!-- 彈出視窗：回覆推文 -->
    <RepliedModal
      :initial-is-reply-modal-toggle="isReplyModalToggle"
      @after-close-modal="closeReplyModal"
    />
  </section>
</template>

<script>
import RepliedModal from "./RepliedModal";
import tweetsAPI from "./../apis/tweets";
import { fromNowFilter } from "../utils/mixins";
import { Toast } from "./../utils/helpers";
import { mapState } from "vuex";

export default {
  name: "Tweets",
  components: {
    RepliedModal,
  },
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
      isReplyModalToggle: false,
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
  computed: {
    ...mapState(["currentUser"]),
  },
  methods: {
    toggleReplyModal() {
      this.isReplyModalToggle = true;
    },
    closeReplyModal(isReplyModalToggle) {
      this.isReplyModalToggle = isReplyModalToggle;
    },
    async addLike(tweetId) {
      try {
        const { data } = await tweetsAPI.addLike({ tweetId });
        if (data.status !== "success") {
          throw new Error(data.message);
        }

        this.tweet.isLiked = true;
        this.tweet.likeCount = this.tweet.likeCount + 1;
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "無法新增Like，請稍後再試",
        });
      }
    },
    async deleteLike(tweetId) {
      try {
        const { data } = await tweetsAPI.deleteLike({ tweetId });
        if (data.status !== "success") {
          Toast.fire({
            icon: "error",
            title: data.message,
          });
          throw new Error(data.message);
        }
        this.tweet.isLiked = false;
        this.tweet.likeCount = this.tweet.likeCount - 1;
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "無法移除Like，請稍後再試",
        });
      }
    },
  },
};
</script>


<style scoped>
.tweets {
  width: 600px;
  outline: 1px solid #e6ecf0;
}

.tweet {
  padding: 10px 15px 0 75px;
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

/* 增加效果：放大圖示 */
.icon:hover {
  width: 30px;
  height: 30px;
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
