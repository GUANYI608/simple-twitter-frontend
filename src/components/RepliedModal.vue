<template>
  <div v-if="isReplyModalToggle" class="replymodal">
    <!-- 彈出視窗下層：主頁背景 -->
    <div class="background-wrapper"></div>
    <!-- 彈出視窗：推文內容 -->
    <div class="tweet-modal">
      <!-- 視窗表頭 -->
      <div class="modal-title">
        <img
          class="cancel-icon"
          src="../assets/cancel.jpg"
          alt="cancel"
          @click.stop.prevent="closeReplyModal"
        />
      </div>

      <!-- 顯示區塊：推文內容 -->
      <div class="tweet-area">
        <!-- 推文作者 -->
        <img class="tweet-avatar" :src="modalTweet.avatar" alt="avatar" />
        <span class="tweet-line"></span>
        <!-- 使用者名稱與帳號 -->
        <div class="user-info">
          <span class="user-name"> {{ modalTweet.name }} </span>
          <span class="detail-info">
            @{{ modalTweet.account }}・{{ modalTweet.createdAt | fromNow }}
          </span>
        </div>
        <!-- 推文內容 -->
        <p class="tweet-content">
          {{ modalTweet.description }}
        </p>
        <!-- 回覆作者 -->
        <p class="reply-to">
          <span class="reply">回覆給</span>
          @{{ modalTweet.account }}
        </p>
      </div>

      <!-- 輸入區塊：回覆推文 -->
      <form class="modal-text" @submit.stop.prevent="handleSubmit">
        <img class="user-avatar" :src="currentUser.avatar" alt="avatar" />
        <div class="form-group">
          <label class="form-input" for="NewTweet"></label>
          <textarea
            id="NewTweet"
            class="input-reply"
            name="NewTweet"
            v-model="comment"
            rows="4"
            cols="50"
            placeholder="推你的回覆"
          ></textarea>
          <button type="submit" class="post-button" :disabled="isProcessing">
            回覆
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { fromNowFilter } from "../utils/mixins";
import { mapState } from "vuex";
import tweetsAPI from "./../apis/tweets";
import { Toast } from "./../utils/helpers";

export default {
  name: "RepliedModal",
  mixins: [fromNowFilter],
  // 取得 /components/tweets 的資料
  props: {
    initialIsReplyModalToggle: {
      type: Boolean,
      required: true,
      default: false,
    },
    modalTweet: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isReplyModalToggle: false,
      comment: "",
      isProcessing: false,
    };
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  created() {
    this.isReplyModalToggle = this.initialIsReplyModalToggle;
  },
  watch: {
    initialIsReplyModalToggle(newVale) {
      this.isReplyModalToggle = newVale;
    },
  },
  methods: {
    closeReplyModal() {
      this.isReplyModalToggle = false;

      this.$emit("after-close-modal", this.replyModalToggle);
    },
    async handleSubmit() {
      if (this.comment.trim() === "") {
        Toast.fire({
          icon: "warning",
          title: "回覆內容不可為空白",
        });
        // 清除空白回覆
        this.comment = "";
        return;
      }
      try {
        this.isProcessing = true;
        const { data } = await tweetsAPI.replyTweet({
          tweetId: this.modalTweet.id,
          comment: this.comment,
        });
        if (data.status === "error") {
          throw new Error(data.message);
        }
        this.comment = "";
        this.closeReplyModal();
        // 回報給Posting與Tweets
        this.$emit("after-submit");
      } catch (error) {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: "無法新增回覆，請稍後再試",
        });
      }
      this.isProcessing = false;
    },
  },
};
</script>


<style scoped>
/* 推文下層的灰色背景 */
.background-wrapper {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  margin: unset;
  padding: unset;
  background: #363434;
  opacity: 0.5;
  z-index: 1;
}

/* ------- 彈出視窗 ------- */
.tweet-modal {
  position: fixed;
  top: 54px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  width: 600px;
  background: #ffffff;
  border-radius: 14px;
}

/* 視窗表頭 */
.modal-title {
  height: 55px;
  border-bottom: 1px solid #e6ecf0;
  display: flex;
  align-items: center;
}

.cancel-icon {
  height: 24px;
  width: 24px;
  margin-left: 15px;
}

/* 顯示區塊：推文內容 */
.tweet-area {
  position: relative;
  padding: 15px 15px 0 75px;
}

.tweet-avatar {
  position: absolute;
  top: 18px;
  left: 15px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
}

.tweet-line {
  position: absolute;
  top: 73px;
  left: 40px;
  width: 2px;
  height: 80px;
  background: #ccd6dd;
}

.user-name {
  font-weight: bold;
  font-size: 15px;
  padding-right: 5px;
}

.detail-info {
  font-weight: 500;
  font-size: 15px;
  color: #657786;
}

.tweet-content {
  margin-top: 6px;
  font-size: 15px;
  height: 66px;
}

.reply-to {
  margin: 18px 0 5px 0;
  font-weight: 500;
  color: #ff6600;
  line-height: 13px;
}

.reply {
  padding-right: 5px;
  font-weight: 500;
  color: #657786;
}

/* 輸入區塊：回覆推文 */
.modal-text {
  position: relative;
  height: 242px;
}

.user-avatar {
  position: absolute;
  top: 10px;
  left: 15px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
}

.input-reply {
  margin: 22px 15px 0 75px;
  width: 510px;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  color: #9197a3;
  /* 去除邊框與右下角與輸入時的提示框線 */
  border: none;
  resize: none;
  outline: none;
}

.input-reply::placeholder {
  font-weight: 500;
  font-size: 18px;
  color: #9197a3;
}

.post-button {
  position: absolute;
  right: 15px;
  bottom: 15px;
  height: 40px;
  width: 64px;
  border-radius: 100px;
  font-weight: 500;
  font-size: 18px;
}
</style>