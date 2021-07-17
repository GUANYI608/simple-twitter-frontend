<template>
  <div class="container">
    <!-- 使用 SideBar 元件 -->
    <SideBar />

    <div class="comments-wrapper">
      <!-- 使用 Posting 元件 -->
      <Posting :initial-tweet="tweet" />

      <!-- 使用 PostingComments 元件 -->
      <PostingComments :initial-tweet="tweet" :replies="replies" />
    </div>

    <!-- 使用 OtherUsers 元件 -->
    <OtherUsers />
  </div>
</template>

<script>
import SideBar from "../components/SideBar";
import OtherUsers from "../components/OtherUsers";
import Posting from "../components/Posting";
import PostingComments from "../components/PostingComments";
import tweetsAPI from "./../apis/tweets";
import { Toast } from "./../utils/helpers";
// 改變格式：時間顯示
import moment from "moment";
moment.locale("zh-tw");

export default {
  name: "ReplyList",
  components: {
    SideBar,
    OtherUsers,
    Posting,
    PostingComments,
  },
  data() {
    return {
      tweet: {},
      replies: [],
    };
  },
  created() {
    this.fetchTweet();
    this.fetchReplies();
  },
  methods: {
    async fetchTweet() {
      try {
        const tweetId = this.$route.params.id;
        const { data } = await tweetsAPI.getTweet({ tweetId });

        const {
          userId,
          avatar,
          name,
          account,
          description,
          createdAt,
          likeCount,
          replyCount,
          isLiked,
        } = data;

        this.tweet = {
          userId,
          id: tweetId,
          avatar,
          name,
          account,
          description,
          createdAt: moment(createdAt).format("a h:mm ⋅ YYYY年M月Do"),
          likeCount,
          replyCount,
          isLiked,
        };
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "無法取得推文，請稍後再試",
        });
      }
    },
    async fetchReplies() {
      try {
        const tweetId = this.$route.params.id;
        const { data } = await tweetsAPI.getTweetReplies({ tweetId });
        this.replies = data.map((reply) => ({
          id: reply.id,
          userId: reply.UserId,
          name: reply.User.name,
          account: reply.User.account,
          avatar: reply.User.avatar,
          comment: reply.comment,
          createdAt: reply.createdAt,
        }));
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "無法取得回覆資訊，請稍後再試",
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

.comments-wrapper {
  height: 100vh;
}
</style>