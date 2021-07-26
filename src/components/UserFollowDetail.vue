<template>
  <div class="userfollowers">
    <!-- ---- 推文清單 ---- -->
    <section class="tweet-list">
      <!-- 推文（第一則） -->
      <div class="tweet">
        <!-- 推文者資料 -->
        <img class="user-avatar" :src="follow.avatar" alt="avatar" />
        <div class="user-info">
          <p class="user-name">{{ follow.name }}</p>
          <p class="user-account">@{{ follow.account }}</p>
        </div>
        <!-- 按鈕：依跟隨狀態顯示 -->
        <button
          v-if="follow.isFollowing"
          type="button"
          class="following-button"
          @click.prevent.stop="unfollowUser(id)"
        >
          正在跟隨
        </button>
        <button
          v-else
          type="button"
          class="tofollow-button"
          @click.prevent.stop="followUser(id)"
        >
          跟隨
        </button>
        <!-- 推文內容 -->
        <p v-if="follow.introduction" class="tweet-content">
          {{ follow.introduction }}
        </p>
        <p v-else class="tweet-content-empty">尚無"自我介紹"相關資料</p>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from "vuex";
import userAPI from "../apis/user";
import { Toast } from "../utils/helpers";

export default {
  name: "UserFollowDetail",
  props: {
    initialFollow: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      follow: {},
      id: -1,
    };
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  created() {
    this.fetchFollow();
    this.fetchId();
  },
  watch: {
    initalFollow(newValue) {
      this.follow = {
        ...this.follow,
        ...newValue,
      };
    },
  },
  methods: {
    fetchId() {
      if (this.follow.followerId) {
        this.id = this.follow.followerId;
      } else {
        this.id = this.follow.followingId;
      }
    },
    fetchFollow() {
      this.follow = this.initialFollow;
    },
    async followUser(userId) {
      try {
        const { data } = await userAPI.followUser(userId);

        if (data.status === "error") {
          Toast.fire({
            icon: "error",
            title: data.message,
          });
        }

        this.$emit("after-change-follow");
      } catch (error) {
        Toast.fire({
          icon: "warning",
          title: "無法追蹤使用者，請稍候再試",
        });
      }
    },
    async unfollowUser(followingId) {
      try {
        const { data } = await userAPI.unfollowUser({ followingId });

        if (data.status === "error") {
          Toast.fire({
            icon: "error",
            title: data.message,
          });
        }

        this.$emit("after-change-follow");
      } catch (error) {
        Toast.fire({
          icon: "warning",
          title: "無法取消追蹤，請稍候再試",
        });
      }
    },
  },
};
</script>


<style scoped>
/* ------ 外框 ------ */
.userfollowers {
  width: 600px;
}

/* ----- 跟隨者推文 ----- */
/* 推文 */
.tweet {
  /* margin-top: 10px; */
  height: 104px;
  padding: 9px 15px 10px 75px;

  border-bottom: 1px solid #e6ecf0;
  position: relative;
}

/* 推文者資料 */
.user-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  /* 以 tweet 作為定位 */
  position: absolute;
  top: 12px;
  left: 15px;
}

.user-info {
  height: 35px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.user-name {
  font-weight: bold;
  font-size: 15px;
  line-height: 15px;
}

.user-account {
  font-weight: 500;
  font-size: 15px;
  line-height: 15px;
  color: #657786;
}

/* 按鈕：跟隨中 */
.following-button {
  width: 92px;
  height: 30px;
  /* 以 tweet 作為定位 */
  position: absolute;
  top: 11px;
  right: 15px;

  font-weight: bold;
  font-size: 15px;
  line-height: 15px;

  border-radius: 100px;
}

/* 按鈕：想要跟隨 */
.tofollow-button {
  width: 62px;
  height: 30px;
  /* 以 tweet 作為定位 */
  position: absolute;
  top: 11px;
  right: 15px;

  font-weight: bold;
  font-size: 15px;
  line-height: 15px;

  color: #ff6600;
  background: unset;
  border: 1px solid #ff6600;
  border-radius: 100px;
}

/* 推文內容 */
.tweet-content.tweet-content-empty {
  margin-top: 5px;
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
}

.tweet-content-empty {
  color: #657786;
}
</style>