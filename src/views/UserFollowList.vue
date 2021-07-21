<template>
  <div class="container">
    <!-- 使用 SideBar 元件 -->
    <SideBar />

    <!-- 使用 UserFollowings 元件 -->
    <div class="followings-wrapper">
      <header class="page-header">
        <!-- ------ 頁首 ------ -->
        <div
          class="page-head"
          @click="$router.push({ name: 'user', params: { id: user.id } })"
        >
          <img
            class="back-icon"
            src="../assets/back.jpg"
            alt="back to home page"
          />
          <h6 class="user-title">{{ user.name }}</h6>
          <span class="tweet-count">{{ user.tweetCount }} 推文</span>
        </div>

        <!-- ---- 項目區塊 ---- -->
        <div class="item-list">
          <router-link to="#" class="item-link">
            <button
              class="item"
              @click.stop.prevent="redirectTab('followers')"
              :class="{ current: tab === 'followers' }"
            >
              跟隨者
            </button>
          </router-link>
          <router-link to="#" class="item-link">
            <button
              class="item"
              @click.stop.prevent="redirectTab('followings')"
              :class="{ current: tab === 'followings' }"
            >
              正在跟隨
            </button>
          </router-link>
        </div>
      </header>
      <UserFollowDetail
        v-for="follow in followShipData"
        :key="follow.id"
        :initial-follow="follow"
        @after-change-follow="afterChangeFollow"
      />
    </div>

    <!-- 使用 OtherUsers 元件 -->
    <OtherUsers />
  </div>
</template>

<script>
import SideBar from "../components/SideBar";
import OtherUsers from "../components/OtherUsers";
import UserFollowDetail from "../components/UserFollowDetail";
import userAPI from "../apis/user";
import { Toast } from "../utils/helpers";

export default {
  name: "UserFollowList",
  components: {
    SideBar,
    OtherUsers,
    UserFollowDetail,
  },
  data() {
    return {
      user: {
        id: -1,
        name: "",
        tweetCount: -1,
      },
      followShipData: [],
      tab: "",
    };
  },
  created() {
    const { id: userId } = this.$route.params;
    const tab = this.$route.name;
    if (tab === "user-followings") {
      this.tab = "followings";
    } else if (tab === "user-followers") {
      this.tab = "followers";
    }

    this.fetchUser(userId);
    this.fetchFollowData(userId, this.tab);
  },
  methods: {
    async fetchUser(userId) {
      try {
        const { data } = await userAPI.getUser({ userId });
        const { id, name, tweetCount } = data;
        this.user = {
          id,
          name,
          tweetCount,
        };
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "無法取得使用者資料，請稍後再試",
        });
      }
    },
    async fetchFollowData(userId, tab) {
      try {
        let data = {};

        if (tab === "followings") {
          data = await userAPI.getFollowings({ userId });
        } else if (tab === "followers") {
          data = await userAPI.getFollowers({ userId });
        }
        this.followShipData = [...data.data];
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "無法取得跟隨清單資料，請稍後再試",
        });
      }
    },
    redirectTab(tab) {
      // 判斷是否當前頁面
      if (this.tab === tab) {
        return;
      } else {
        this.tab = tab;
      }

      // 依據當前頁面改變路由
      if (tab === "followings") {
        this.$router.push({
          name: "user-followings",
          params: { id: this.user.id, tab },
        });
      } else if (tab === "followers") {
        this.$router.push({
          name: "user-followers",
          params: { id: this.user.id, tab },
        });
      }

      // 重新撈取跟隨清單
      this.followShipData = [];
      this.fetchFollowData(this.user.id, this.tab);
    },
    afterChangeFollow() {
      // 重新撈取跟隨清單
      this.followShipData = [];
      const { id: userId } = this.$route.params;
      this.fetchFollowData(userId, this.tab);
      console.log("已更新畫面");
    },
  },
};
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 1fr 600px 1fr;
}

.followings-wrapper {
  height: auto;
  outline: 1px solid #e6ecf0;
}

/* ------ 頁首 ------ */
.page-head {
  height: 58px;
  padding-top: 6px;
  align-items: center;
  position: relative;
  padding-left: 79px;
}

.back-icon {
  position: absolute;
  top: 15px;
  left: 15px;
  width: 24px;
  height: 24px;
}

.user-title {
  font-weight: 900;
  font-size: 19px;
}

.tweet-count {
  font-weight: 500;
  font-size: 13px;
  color: #657786;
  line-height: 19px;
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
.current {
  position: relative;
  color: #ff6600;
}

.current::after {
  content: "";
  background: #ff6600;
  position: absolute;
  top: 53px;
  left: 0;
  height: 2px;
  width: 130px;
  z-index: 1;
}
</style>