<template>
  <div class="container">
    <SideBar />

    <!------- 區塊：上線使用者 ------->
    <section class="online-user">
      <h6 class="sub-title">上線使用者 (5)</h6>

      <!-- 上線使用者 -->
      <div class="user">
        <!-- 大頭照：連接到個人頁面 -->
        <router-link to="#">
          <img class="user-avatar" src="../assets/avatar2.jpg" alt="avatar" />
        </router-link>
        <!-- 名稱與帳號：連接到私人聊天室 -->
        <router-link class="user-info" to="#">
          <span class="user-name">Nintendo</span>
          <span class="user-account">@nintendo</span>
        </router-link>
      </div>
      <div class="user">
        <!-- 大頭照：連接到個人頁面 -->
        <router-link to="#">
          <img class="user-avatar" src="../assets/avatar2.jpg" alt="avatar" />
        </router-link>
        <!-- 名稱與帳號：連接到私人聊天室 -->
        <router-link class="user-info" to="#">
          <span class="user-name">Apple</span>
          <span class="user-account">@apple</span>
        </router-link>
      </div>
    </section>

    <!------- 區塊：公開聊天室 ------->
    <section class="chat-room">
      <h6 class="sub-title">公開聊天室</h6>

      <!-- 訊息：顯示區塊 -->
      <div class="chatting-area">
        <!-- noti -->
        <p class="user-status">
          <span class="chat-user">Nintendo 上線</span>
        </p>
        <p class="user-status">
          <span class="chat-user">Apple 上線</span>
        </p>

        <!-- chats -->
        <div class="chat">
          <router-link to="#">
            <img class="chat-avatar" src="../assets/avatar2.jpg" alt="avatar" />
          </router-link>
          <div class="chat-content">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </div>
          <span class="chat-time">下午 7:00</span>
        </div>
        <div class="chat-self">
          <div class="chat-content-self">
            Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco
            cillum dolor. Voluptate exercitation incididunt aliquip deserunt
            reprehenderit elit laborum.
          </div>
          <span class="chat-time">下午 8:15</span>
        </div>
        <div class="chat">
          <router-link to="#">
            <img class="chat-avatar" src="../assets/avatar2.jpg" alt="avatar" />
          </router-link>
          <div class="chat-content">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </div>
          <span class="chat-time">下午 8:50</span>
        </div>
        <div class="chat-self">
          <div class="chat-content-self">上工囉～</div>
          <span class="chat-time">下午 8:15</span>
        </div>
      </div>
      <!-- 訊息：輸入區塊 -->
      <form class="input-area">
        <label for="new-chat"> </label>
        <input
          class="chat-input"
          type="text"
          id="new-chat"
          name="new-chat"
          placeholder="輸入訊息 ..."
        />
        <img src="../assets/send_message.jpg" alt="" class="send-icon" />
      </form>
    </section>
  </div>
</template>

<script>
import SideBar from "../components/SideBar.vue";

export default {
  name: "PublicChat",
  components: {
    SideBar,
  },
};
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 550px;
}

/* ----- 區塊：上線使用者 ----- */
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

/* ----- 區塊：公開聊天室 ----- */
.chat-room {
  border-right: 1px solid #e6ecf0;
  height: 100vh;
  position: relative;
}

/* 訊息：顯示區塊 */
.chatting-area {
  /* 以 chat-room 為定位 */
  position: absolute;
  bottom: 55px;
  border-bottom: 1px solid #e6ecf0;
}

/* 使用者狀態通知 */
.user-status {
  display: flex;
  justify-content: center;
  margin: 15px 0;
}

.chat-user {
  background: #f3ece8;
  padding: 6px 16px;
  color: #f99663;
  font-weight: 500;
  font-size: 15px;
  border-radius: 16px;
}

/* 訊息：其他使用者 */
.chat {
  margin: 15px;
  position: relative;
}

.chat-avatar {
  height: 50px;
  width: 50px;
  border-radius: 50%;
  object-fit: cover;
  /* 以 chat 為定位 */
  position: absolute;
  bottom: 21px;
  left: 0px;
}

.chat-content {
  background: #e8eff3;
  margin: 0px 130px 0px 60px;
  padding: 15px;
  border-radius: 30px 30px 30px 0;
}

.chat-time {
  margin-left: 60px;
  font-size: 15px;
  color: #657786;
}

/* 訊息：使用者本人 */
.chat-self {
  margin: 15px;
  text-align: right;
}

.chat-content-self {
  color: #ffffff;
  background: #ff6600;
  margin: 0px 0px 0px 165px;
  padding: 15px;
  border-radius: 30px 30px 0 30px;
  text-align: left;
}

/* 訊息：輸入區塊 */
.input-area {
  height: 35px;
  /* 以 chat-room 為定位 */
  position: absolute;
  bottom: 0px;

  margin: 10px 15px;
  width: 520px;
  display: flex;
  align-items: center;
}

.chat-input {
  width: 480px;
  background: #e8eff3;
  border-radius: 15px;
  font-size: 15px;
  font-weight: 400;
  color: #1c1c1c;
  padding: 5px 15px;
  display: flex;
  align-items: center;
}

.chat-input::placeholder {
  font-size: 15px;
  font-weight: 400;
  color: #657786;
}

.chat-input:focus {
  outline: none;
}

.send-icon {
  width: 30px;
  height: 30px;
  margin-left: 10px;
  display: flex;
  align-items: center;
}
</style>