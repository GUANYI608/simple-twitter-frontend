<template>
  <div class="container">
    <SideBar />

    <!------- 元件：上線使用者 ------->
    <ChatOnlineUser :online-users="onlineUsers" />

    <!------- 元件：公開聊天室 ------->
    <ChatPublicRoom :initial-messages="messages" />
  </div>
</template>

<script>
import SideBar from "../components/SideBar.vue";
import ChatOnlineUser from "../components/ChatOnlineUser.vue";
import ChatPublicRoom from "../components/ChatPublicRoom.vue";
import Vue from "vue";
import VueSocketIO from "vue-socket.io";
import SocketIO from "socket.io-client";
import { mapState } from "vuex";
import { v4 as uuidv4 } from "uuid";
import chatsAPI from "./../apis/chats";
import { Toast } from "../utils/helpers";

const getToken = () => localStorage.getItem("token");
const token = getToken();

Vue.use(
  new VueSocketIO({
    debug: true,
    connection: SocketIO("https://ac-twitter-api-2021.herokuapp.com", {
      transports: ["websocket"],
      auth: { token: token },
    }),
  })
);

export default {
  name: "PublicChat",
  components: {
    SideBar,
    ChatOnlineUser,
    ChatPublicRoom,
  },
  data() {
    return {
      newMessage: "",
      messages: [],
      onlineUsers: [],
    };
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  created() {
    this.fetchMessages();
    this.$socket.connect();
    this.$socket.emit("joinPublic", this.currentUser);
  },
  destroyed() {
    this.$socket.emit("leavePublic", this.currentUser);
    this.$socket.disconnect();
  },
  methods: {
    async fetchMessages() {
      try {
        const { data } = await chatsAPI.getChats();
        console.log("API.GET:", data);

        data.map((receiveMessage) => {
          const { userId, name, avatar, account, message, createdAt } =
            receiveMessage;

          if (!receiveMessage.userId) {
            return;
          }

          this.messages.push({
            id: uuidv4(),
            userId,
            name,
            avatar,
            account,
            content: message,
            createdAt,
            type: "chat",
          });
        });
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "無法取得歷史聊天訊息，請稍後再試",
        });
      }
    },
  },
  sockets: {
    joinRoom(msg) {
      this.messages.push({
        id: uuidv4(),
        content: msg,
        type: "notiOnline",
      });
      console.log("vue: joinRoom"); // 測試呼叫socket
      console.log(this.messages); // 輸出所有訊息
    },
    leaveRoom(msg) {
      this.messages.push({
        id: uuidv4(),
        content: msg,
        type: "notiOffline",
      });
      console.log("vue: leaveRoom"); // 測試呼叫socket
      console.log(this.messages); // 輸出所有訊息
    },
    publicChat(msg) {
      // 發送訊息
      console.log(msg);
      const message = msg[0];
      const user = msg[1];

      this.messages.push({
        id: uuidv4(),
        userId: user.id,
        account: user.account,
        name: user.name,
        avatar: user.avatar,
        content: message,
        createdAt: new Date(),
        type: "chat",
      });
    },
    totalUser(users) {
      this.onlineUsers = users;
    },
  },
};
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 1fr minmax(390px, 1fr) 550px;
}
</style>