<template>
  <div class="container">
    <!-- 使用 SideBar 元件 -->
    <SideBar @after-post-tweet="afterPostTweet" />

    <div class="user-wrapper">
      <!-- 使用 UserProfile 元件 -->
      <UserProfile :initial-user="user" />

      <!-- 項目區塊 -->
      <div class="item-list">
        <router-link
          :to="{ name: 'user', params: { id: user.id } }"
          class="item-link"
        >
          <button class="item">推文</button>
        </router-link>
        <router-link to="#" class="item-link">
          <button class="item item-current">推文與回覆</button>
        </router-link>
        <router-link
          :to="{ name: 'user-like', params: { id: user.id } }"
          class="item-link"
        >
          <button class="item">喜歡的內容</button>
        </router-link>
      </div>

      <!-- 使用 PostingComments 元件 -->
      <UserComments :replies="replies" />
    </div>

    <!-- 使用 OtherUsers 元件 -->
    <OtherUsers @after-follow-action="afterFollowAction" />
  </div>
</template>

<script>
import SideBar from "../components/SideBar";
import OtherUsers from "../components/OtherUsers";
import UserProfile from "../components/UserProfile";
import UserComments from "../components/UserComments";
import userAPI from "../apis/user";
import { Toast } from "../utils/helpers";
import { mapState } from "vuex";

export default {
  name: "UserSelf",
  components: {
    SideBar,
    OtherUsers,
    UserProfile,
    UserComments,
  },
  data() {
    return {
      user: {
        id: -1,
        account: "",
        name: "",
        cover: "",
        avatar: "",
        introduction: "",
        tweetCount: -1,
        followingCount: -1,
        followerCOunt: -1,
      },
      replies: [],
    };
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  created() {
    const { id: userId } = this.$route.params;
    this.fetchUser(userId);
    this.fetchUserReplies(userId);
  },
  methods: {
    // 取得單一使用者個人資料
    async fetchUser(userId) {
      try {
        const { data } = await userAPI.getUser({ userId });

        const {
          id,
          account,
          name,
          cover,
          avatar,
          introduction,
          tweetCount,
          followingCount,
          followerCount,
          isFollowing,
        } = data;

        this.user = {
          id,
          account,
          name,
          cover,
          avatar,
          introduction,
          tweetCount,
          followingCount,
          followerCount,
          isFollowing,
        };
      } catch (error) {
        console.error(error);

        Toast.fire({
          icon: "error",
          title: "無法取得使用者資料，請稍後再試",
        });
      }
    },
    // 取得單一使用者所有推文
    async fetchUserReplies(userId) {
      try {
        const { data } = await userAPI.getUserReplies({ userId });

        this.replies = data.map((reply) => {
          return {
            userId: reply.UserId,
            tweetId: reply.TweetId,
            comment: reply.comment,
            createdAt: reply.createdAt,
            avatar: this.user.avatar,
            name: this.user.name,
            account: this.user.account,
          };
        });
      } catch (error) {
        console.log(error);

        Toast.fire({
          icon: "error",
          title: "無法取得推文，請稍後再試",
        });
      }
    },
    // 於 SideBar 新增推文後，更新推文內容與數量於個人頁面
    afterPostTweet() {
      const { id: userId } = this.$route.params;
      this.fetchUser(userId);
      this.fetchUserTweets(userId);
    },
    afterFollowAction() {
      const { id: userId } = this.$route.params;
      this.fetchUser(userId);
    },
  },
};
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 1fr 600px 1fr;
}

.user-wrapper {
  height: auto;
  outline: 1px solid #e6ecf0;
}

/* ----- 項目區塊 ----- */
.item-list {
  border-bottom: 1px solid #e6ecf0;
}

.item {
  width: 130px;
  height: 54px;

  background: unset;
  color: #657786;
  font-weight: bold;
  font-size: 15px;
  border-radius: 0;
}

/* 當前頁面樣式：橘字加底線 */
.item-current {
  position: relative;
}

.item-current::after {
  content: "";
  background: #ff6600;
  position: absolute;
  top: 53px;
  left: 0;
  height: 2px;
  width: 130px;
  z-index: 1;
}

.item-current {
  color: #ff6600;
}
</style>