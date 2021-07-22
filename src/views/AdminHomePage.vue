<template>
  <div class="container">
    <!-- 使用 AdminSideBar 元件 -->
    <AdminSideBar />

    <!-- 使用 AdminTweets 元件 -->
    <div class="tweets-wrapper">
      <!-- ----- 後台推文清單 ----- -->
      <h6 class="page-title">推文清單</h6>

      <AdminTweets
        v-for="tweet in tweets"
        :key="tweet.id"
        :initial-tweet="tweet"
        @after-delete-tweet="afterDeleteTweet"
      />
    </div>
  </div>
</template>

<script>
import AdminSideBar from "../components/AdminSideBar";
import AdminTweets from "../components/AdminTweets";
import adminAPI from "../apis/admin";
import { Toast } from "../utils/helpers";

export default {
  name: "AdminHomePage",
  components: {
    AdminSideBar,
    AdminTweets,
  },
  data() {
    return {
      tweets: [],
    };
  },
  created() {
    this.fetchTweets();
  },
  methods: {
    async fetchTweets() {
      try {
        const { data } = await adminAPI.tweets.get();
        this.tweets = data.map((tweet) => ({
          id: tweet.id,
          description: tweet.description,
          createdAt: tweet.createdAt,
          name: tweet["User.name"],
          avatar: tweet["User.avatar"],
          account: tweet["User.account"],
          replyCount: tweet.replyCount,
          likeCount: tweet.likeCount,
          isLiked: tweet.isLiked,
        }));
      } catch (error) {
        console.error(error.message);
        Toast.fire({
          icon: "error",
          title: "無法取得推文資料，請稍後再試",
        });
      }
    },
    // 刪除後重新渲染畫面
    afterDeleteTweet() {
      this.fetchTweets();
      Toast.fire({
        icon: "success",
        title: "已刪除該則推文",
      });
    },
  },
};
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 1fr 1062px;
}

.tweets-wrapper {
  height: auto;
  outline: 1px solid #e6ecf0;
}

/* 頁首 */
.page-title {
  height: 55px;
  font-weight: bold;
  font-size: 18px;
  line-height: 55px;
  padding-left: 26px;
  outline: 1px solid #e6ecf0;
}
</style>