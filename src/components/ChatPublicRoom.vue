<template>
  <section class="chat-room">
    <h6 class="sub-title">公開聊天室, 嗨 {{ currentUser.account }}</h6>

    <!-- 訊息：顯示區塊 -->
    <div class="chatting-area" id="chatting-area">
      <div class="chat-box" v-for="message in messages" :key="message.id">
        <!-- noti -->
        <p class="user-status" v-if="message.type === 'notiOnline'">
          <span class="chat-user">{{ message.content }} 上線中</span>
        </p>

        <p class="user-status" v-if="message.type === 'notiOffline'">
          <span class="chat-user">{{ message.content }} 已離線</span>
        </p>

        <!-- chats -->
        <div v-if="message.type === 'chat'">
          <!-- isSelf -->
          <div class="chat-self" v-if="message.userId === currentUser.id">
            <div class="chat-content-self">{{ message.content }}</div>
            <span class="chat-time">{{ message.createdAt | fromNow }}</span>
          </div>
          <!-- others -->
          <div class="chat" v-else>
            <router-link to="#">
              <img class="chat-avatar" :src="message.avatar" alt="avatar" />
            </router-link>
            <div class="chat-content">
              {{ message.content }}
            </div>
            <span class="chat-time">{{ message.createdAt | fromNow }}</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 訊息：輸入區塊 -->
    <form class="input-area">
      <label for="new-chat"> </label>
      <input
        v-model="newMessage"
        class="chat-input"
        type="text"
        id="new-chat"
        name="new-chat"
        placeholder="輸入訊息 ..."
        @keypress.enter.prevent="handleSubmit"
      />
      <button class="send-button" @click.prevent.stop="handleSubmit">
        <img src="../assets/send_message.jpg" alt="" class="send-icon" />/>
      </button>
    </form>
  </section>
</template>

<script>
import { fromNowFilter } from "../utils/mixins";
import { mapState } from "vuex";
import { Toast } from "../utils/helpers";

export default {
  name: "ChatPublicRoom",
  mixins: [fromNowFilter],
  props: {
    initialMessages: {
      type: Array,
      required: true,
    },
  },
  watch: {
    initialMessages: {
      handler: function (newValue) {
        this.messages = newValue;
      },
      deep: true,
    },
  },
  created() {
    console.log(this.initialMessages);
  },
  data() {
    return {
      messages: this.initialMessages,
      newMessage: "",
    };
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  updated() {
    this.scrollBottom();
  },
  methods: {
    handleSubmit() {
      if (!this.newMessage.trim()) {
        Toast.fire({
          icon: "error",
          title: "尚未輸入聊天內容",
        });
        this.newMessage = "";
        return;
      }
      // 向socket 發出事件，傳送聊天訊息
      this.$socket.emit("publicChat", this.newMessage);
      console.log("呼叫：handleSubmit", this.newMessage);
      // 清空輸入欄
      this.newMessage = "";
    },
    scrollBottom() {
      // 聊天內容置底
      let chattingArea = document.querySelector("#chatting-area");
      chattingArea.scrollTop = chattingArea.scrollHeight;
    },
  },
};
</script>


<style scoped>
.chat-room {
  border-right: 1px solid #e6ecf0;
  height: 100vh;
  position: relative;
  display: grid;
  grid-template-rows: 55px 1fr 60px;
}

/* 標題 */
.sub-title {
  height: 55px;
  display: flex;
  align-items: center;
  padding-left: 15px;

  font-weight: 900;
  font-size: 19px;
  border-right: 1px solid #e6ecf0;
  border-bottom: 1px solid #e6ecf0;
  z-index: 999;
  background: #ffffff;
}

/* 訊息：顯示區塊 */
.chatting-area {
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.chatting-area::-webkit-scrollbar {
  width: 12px;
}

.chatting-area::-webkit-scrollbar-track {
  background: rgb(243 236 232);
}

.chatting-area::-webkit-scrollbar-thumb {
  background-color: rgb(246 205 183);
  border-radius: 20px;
  border: 1px solid rgb(238 188 162);
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

/* 訊息：使用者本人 */
.chat-self {
  margin: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.chat-content-self {
  color: #ffffff;
  background: #ff6600;
  width: fit-content;
  margin: 0px 0px 0px 165px;
  padding: 15px;
  border-radius: 30px 30px 0 30px;
}

.chat-time {
  margin-left: 60px;
  font-size: 15px;
  color: #657786;
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
  width: fit-content;
}

/* 訊息：輸入區塊 */
.input-area {
  height: 60px;
  padding: 10px 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #e6ecf0;
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

.send-button {
  width: 30px;
  height: 30px;
  margin-left: 10px;
  background: none;
  display: flex;
  align-items: center;
}

.send-icon {
  width: 30px;
  height: 30px;
}
</style>