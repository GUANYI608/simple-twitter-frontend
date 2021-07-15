<template>
  <section class="adminuserscards">
    <h6 class="page-title">使用者列表</h6>

    <div class="profiles">
      <!-- ----- 使用者卡片 ----- -->
      <div class="profile" v-for="user in users" :key="user.id">
        <!-- 封面 -->
        <img :src="user.cover" alt="cover" class="cover" />
        <!-- 詳細資料 -->
        <div class="profile-detail">
          <img :src="user.avatar" alt="" class="avatar" />
          <h6 class="user-name">{{ user.name }}</h6>
          <span class="user-account">@{{ user.account }}</span>
        </div>
        <!-- 統計數量：留言與按讚 -->
        <div class="icons">
          <img class="icon" src="../assets/replynb.png" alt="" />
          <span class="count">{{ user.tweetCount }}</span>
          <img class="icon" src="../assets/likenb.png" alt="" />
          <span class="count">{{ user.likeCount }}</span>
        </div>
        <!-- 統計數量：跟隨人數 -->
        <div class="numbers">
          <span class="number"> {{ user.followingCount }}個</span>
          <span class="role"> 跟隨中 </span>
          <span class="number"> {{ user.followerCount }}位</span>
          <span class="role"> 跟隨者 </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import adminAPI from "./../apis/admin";
import { Toast } from "./../utils/helpers";

export default {
  name: "AdminUsersCard",
  data() {
    return {
      users: [],
    };
  },
  created() {
    this.fetchUsers();
  },
  methods: {
    async fetchUsers() {
      try {
        const { data } = await adminAPI.getUsers();
        this.users = data;
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "warning",
          title: "無法取得使用者資料，請稍後再試",
        });
      }
    },
  },
};
</script>

<style scoped>
/* ------ 頁首 ------ */
.page-title {
  height: 55px;
  font-weight: bold;
  font-size: 18px;
  line-height: 55px;
  padding-left: 26px;
  outline: 1px solid #e6ecf0;
}

/* ------ 卡片大小 ------ */
.profiles {
  padding: 15px 19px 15px 18px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  grid-gap: 15px;
}

.profile {
  width: 245px;
  height: 314px;
  background: #f6f7f8;
  border-radius: 10px;
}

/* ------ 卡片內部 ------ */
.cover {
  width: 245px;
  height: 140px;
  object-fit: cover;
  border-radius: 10px 10px 0px 0px;
}

.profile-detail {
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;
}

.avatar {
  /* 以 .profile-detai 作為定位 */
  position: absolute;
  width: 100px;
  height: 100px;
  top: -72px;

  border: 4px solid #ffffff;
  border-radius: 50%;
  object-fit: cover;
}

.user-name {
  padding-top: 33px;

  font-weight: 900;
  font-size: 15px;
  line-height: 22px;
}

.user-account {
  padding-top: 2px;

  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
  color: #657786;
}

/* 統計數量：留言與按讚 */
.icons {
  margin: 15px 0 15px 0;
  display: flex;
  justify-content: center;
  height: 24px;
}

.icon {
  width: 24px;
  height: 24px;
  margin-right: 5px;
}

.count {
  margin-right: 15px;

  font-weight: 500;
  font-size: 15px;
}

.count:last-child {
  margin-right: 0;
}

/* 統計數量：跟隨人數 */
.numbers {
  display: flex;
  justify-content: center;
}

.number {
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #000000;
}

.role {
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #657786;
  margin-right: 5px;
}

.role:last-child {
  margin-right: 0;
}
</style>