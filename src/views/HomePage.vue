<template>
  <div class="container">
    <!-- 使用 SideBar 元件 -->
    <SideBar />

    <div class="main-wrapper">
      <!-- 使用 UserPost 元件 -->
      <UserPost />

      <!-- 使用 Tweets 元件 -->
      <Tweets v-for="tweet in tweets" :key="tweet.id" :initial-tweet="tweet" />
    </div>

    <!-- 使用 OtherUsers 元件 -->
    <OtherUsers />
  </div>
</template>

<script>
import SideBar from "../components/SideBar";
import OtherUsers from "../components/OtherUsers";
import UserPost from "../components/UserPost";
import Tweets from "../components/Tweets";
import tweetsAPI from "../apis/tweets";
import { Toast } from "../utils/helpers";

export default {
  name: "main",
  components: {
    SideBar,
    OtherUsers,
    UserPost,
    Tweets,
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
        const { data } = await tweetsAPI.getTweets();

        this.tweets = data.map((tweet) => ({
          id: tweet.id,
          userId: tweet.UserId,
          description: tweet.description,
          createdAt: tweet.createdAt,
          name: tweet.User.name,
          avatar: tweet.User.avatar,
          account: tweet.User.account,
          replyCount: tweet.replyCount,
          likeCount: tweet.likeCount,
        }));
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "無法取得推文，請稍後再試",
        });
      }
    },
  },
};
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 1fr 600px 1fr;
}

.main-wrapper {
  height: auto;
}
</style>