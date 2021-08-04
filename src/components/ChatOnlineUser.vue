<template>
  <section class="online-user">
    <h6 class="sub-title">上線使用者 ({{ onlineUsers.length }})</h6>

    <!-- 上線使用者 -->
    <div class="user" v-for="user in onlineUsers" :key="user.id">
      <!-- 大頭照：連接到個人頁面 -->
      <router-link to="#">
        <img class="user-avatar" :src="user.avatar" alt="avatar" />
      </router-link>
      <!-- 名稱與帳號：連接到私人聊天室 -->
      <router-link class="user-info" to="#">
        <span class="user-name"> {{ user.name }} </span>
        <span class="user-account">@{{ user.account }}</span>
      </router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: "ChatOnlineUser",
  props: {
    onlineUsers: {
      type: Array,
      required: true,
    },
  },
};
</script>


<style scoped>
.online-user {
  border-left: 1px solid #e6ecf0;
  border-right: 1px solid #e6ecf0;
}

/* 標題 */
.sub-title {
  height: 55px;
  display: flex;
  align-items: center;
  padding-left: 15px;

  font-weight: 900;
  font-size: 19px;
  border-bottom: 1px solid #e6ecf0;
}

/* 上線使用者 */
.user {
  height: 70px;
  padding: 10px 15px;
  border-bottom: 1px solid #e6ecf0;
}

.user-avatar {
  height: 50px;
  width: 50px;
  border-radius: 50%;
  object-fit: cover;
}

.user-info {
  padding: 0 15px;
}

.user-name {
  font-weight: bold;
  font-size: 15px;
  line-height: 15px;
  padding-right: 6px;
}

.user-account {
  margin-top: 3px;
  font-weight: 500;
  font-size: 15px;
  line-height: 15px;
  color: #657786;
}
</style>