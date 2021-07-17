<template>
  <div class="otherusers">
    <h6 class="sub-title">跟隨誰</h6>
    <section class="user-list">
      <!---------- 推薦使用者清單 --------->
      <div class="showTopSix">
        <div class="user" v-for="user of topUsers" :key="user.id">
          <!-- 使用者資訊 -->
          <router-link :to="{ name: 'user', params: { id: user.id } }">
            <img class="user-avatar" :src="user.avatar" alt="avatar" />
          </router-link>
          <div class="user-info">
            <router-link :to="{ name: 'user', params: { id: user.id } }">
              <p class="user-name">{{ user.name }}</p>
            </router-link>
            <p class="user-account">@{{ user.account }}</p>
          </div>
          <!-- 按鈕 -->
          <button
            v-if="user.isFollowing"
            type="button"
            class="following-button"
            @click.prevent.stop="unfollowUser(user.id)"
          >
            正在跟隨
          </button>
          <button
            v-else
            type="button"
            class="tofollow-button"
            @click.prevent.stop="followUser(user.id)"
          >
            跟隨
          </button>
        </div>
        <!-- 清單 footer -->
        <p class="list-footer" @click.prevent.stop="showMoreUser">
          <span class="more-user"> 顯示更多 </span>
        </p>
      </div>
    </section>
  </div>
</template>

<script>
import userAPI from "../apis/user";
import { Toast } from "../utils/helpers";

export default {
  name: "OtherUsers",
  data() {
    return {
      topUsers: [],
    };
  },
  created() {
    this.fetchTopUsers();
  },
  methods: {
    async fetchTopUsers() {
      try {
        const { data } = await userAPI.getTopUsers();

        this.topUsers = data;
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "無法取得'推薦追蹤者'，請稍後再試！",
        });
      }
    },
    async followUser(userId) {
      try {
        const { data } = await userAPI.followUser(userId);
        if (data.status !== "success") {
          Toast.fire({
            icon: "error",
            title: data.message,
          });
        }
        this.fetchTopUsers();
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "無法追蹤使用者，請稍後再試",
        });
      }
    },
    async unfollowUser(followingId) {
      try {
        const { data } = await userAPI.unfollowUser({ followingId });
        if (data.status !== "success") {
          Toast.fire({
            icon: "error",
            title: data.message,
          });
        }
        this.fetchTopUsers();
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "無法移除追蹤，請稍後再試",
        });
      }
    },
  },
};
</script>


<style scoped>
.otherusers {
  min-width: 350px;
  margin: 15px 82px 0px 30px;

  /* 放外框線方便辨別 */
  /* border: 5px solid #0099ff; */
}

.sub-title {
  height: 45px;
  padding-top: 10px;
  padding-left: 15px;
  font-weight: bold;
  font-size: 18px;
  line-height: 26px;
  background: #f5f8fa;
  border-bottom: 1px solid #e6ecf0;
  border-radius: 14px 14px 0 0;
}

.user {
  height: 70px;
  padding: 10px 15px 10px 15px;
  background: #f5f8fa;
  border-bottom: 1px solid #e6ecf0;
  display: flex;
  flex-direction: column;
  position: relative;
}

.user-avatar {
  height: 50px;
  width: 50px;
  border-radius: 50%;
  object-fit: cover;
}

.user-info {
  position: absolute;
  left: 75px;
}

.user-name {
  margin-top: 8px;
  font-weight: bold;
  font-size: 15px;
  line-height: 15px;
}

.user-account {
  margin-top: 3px;
  font-weight: bold;
  font-size: 15px;
  line-height: 15px;
  color: #657786;
}

.tofollow-button {
  position: absolute;
  top: 20px;
  right: 15px;
  height: 30px;
  width: 62px;
  background: none;
  color: #ff6600;
  font-weight: bold;
  font-size: 15px;
  line-height: 28px;
  border-radius: 100px;
  border: 1px solid #ff6600;
}

.following-button {
  position: absolute;
  top: 20px;
  right: 15px;
  height: 30px;
  width: 92px;
  color: #ffffff;
  font-weight: bold;
  font-size: 15px;
  line-height: 30px;
  border-radius: 100px;
}

.list-footer {
  background: #f5f8fa;
  height: 45px;
  color: #ff6600;
  border-radius: 0 0 14px 14px;
}

.more-user {
  display: inline-block;
  padding-top: 11px;
  padding-left: 15px;
  font-size: 15px;
  line-height: 22px;
  color: #ff6600;
}
</style>