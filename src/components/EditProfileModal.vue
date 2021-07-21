<template>
  <div v-if="isEditModalToggle" class="replymodal">
    <!-- 彈出視窗：背景 -->
    <div class="background-wrapper"></div>
    <!-- 彈出視窗：編輯個人資料 -->
    <div class="edit-modal">
      <div class="header">
        <img
          class="cancel-icon"
          src="../assets/cancel.jpg"
          alt="cancel"
          @click.stop.prevent="closeReplyModal"
        />
        <h3 class="title">編輯個人資料</h3>
        <button class="save-btn" type="submit">儲存</button>
      </div>

      <div class="image-wrapper">
        <label class="cover-label">
          <input type="file" />
          <figure class="cover-figure">
            <img class="cover" src="https://imgur.com/LmlMgWk.jpg" alt="" />
            <figcaption class="cover-figcaption">
              <img
                src="https://raw.githubusercontent.com/ThiagoLuizNunes/angular-boilerplate/master/src/assets/imgs/camera-white.png"
              />
            </figcaption>
          </figure>
        </label>
        <label class="avatar-label">
          <input type="file" />
          <figure class="avatar-figure">
            <img
              class="avatar"
              src="https://images.dog.ceo/breeds/saluki/n02091831_3846.jpg"
              alt=""
            />
            <figcaption class="avatar-figcaption">
              <img
                src="https://raw.githubusercontent.com/ThiagoLuizNunes/angular-boilerplate/master/src/assets/imgs/camera-white.png"
              />
            </figcaption>
          </figure>
        </label>
      </div>
      <div class="name">
        <input type="text" />
        <span class="name-placeholder">名稱</span>
        <small class="name-text-counter">0/50</small>
      </div>
      <div class="introduction">
        <input type="text" />
        <span class="intro-placeholder">自我介紹</span>
        <small class="intro-text-counter">0/160</small>
      </div>
    </div>
  </div>
</template>

<script>
import { fromNowFilter } from "../utils/mixins";
import { mapState } from "vuex";
// import tweetsAPI from "./../apis/tweets";
// import { Toast } from "./../utils/helpers";

export default {
  name: "EditProfileModal",
  mixins: [fromNowFilter],
  // 取得 /components/tweets 的資料
  props: {
    initialIsEditModalToggle: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  data() {
    return {
      isEditModalToggle: false,
      // comment: "",
      isProcessing: false,
    };
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  created() {
    this.isEditModalToggle = this.initialIsEditModalToggle;
  },
  watch: {
    initialIsEditModalToggle(newVale) {
      this.isEditModalToggle = newVale;
    },
  },
  methods: {
    closeReplyModal() {
      this.isEditModalToggle = false;

      this.$emit("after-close-modal", this.editModalToggle);
    },
    // async handleSubmit() {
    //   if (this.comment.trim() === "") {
    //     Toast.fire({
    //       icon: "warning",
    //       title: "回覆內容不可為空白",
    //     });
    //     // 清除空白回覆
    //     this.comment = "";
    //     return;
    //   }
    //   try {
    //     this.isProcessing = true;
    //     const { data } = await tweetsAPI.replyTweet({
    //       tweetId: this.modalTweet.id,
    //       comment: this.comment,
    //     });
    //     if (data.status === "error") {
    //       throw new Error(data.message);
    //     }
    //     this.comment = "";
    //     this.closeReplyModal();
    //     // 回報給Posting與Tweets
    //     this.$emit("after-submit");
    //   } catch (error) {
    //     console.log(error);
    //     Toast.fire({
    //       icon: "error",
    //       title: "無法新增回覆，請稍後再試",
    //     });
    //   }
    //   this.isProcessing = false;
    // },
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
.edit-modal {
  position: fixed;
  top: 54px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  width: 600px;
  height: 654px;
  background: #ffffff;
  border-radius: 14px;
}

/* 視窗表頭 */
.header {
  height: 55px;
  padding: 0 15px;
  display: flex;
  align-items: center;
}

.cancel-icon {
  height: 24px;
  width: 24px;
}

.cancel-icon:hover {
  cursor: pointer;
}

.title {
  margin-left: 40px;
  font-weight: bold;
  font-size: 19px;
  line-height: 28px;
}

.save-btn {
  margin-left: 328px;
  width: 64px;
  height: 30px;
  border-radius: 100px;
  background: #ff6600;
  color: #ffffff;
  font-weight: 500;
  font-size: 18px;
  line-height: 18px;
  letter-spacing: 0px;
  display: flex-end;
}

/* 圖片區塊：封面、大頭照 */
.image-wrapper {
  height: 260px;
}

.image-wrapper input[type="file"] {
  display: none;
}

.image-wrapper .cover-figure {
  position: relative;
  width: 100%;
  height: 200px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.cover-figcaption {
  cursor: pointer;
  max-width: 100px;
  max-height: 100px;
  position: absolute;
  top: 50px;
  left: 250px;
  width: inherit;
  height: inherit;
  border-radius: 100%;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0);
  transition: all ease-in-out 0.3s;
}
.cover-figcaption:hover {
  opacity: 1;
  /*   background-color: rgba(0, 0, 0, .5); */
}
.cover-figcaption > img {
  margin-top: 32.5px;
  width: 50px;
  height: 50px;
}

.cover {
  width: 100%;
  height: 200px;
}

.cover:hover {
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.5);
}

.image-wrapper .avatar-figure {
  position: relative;
  display: block;
  border-radius: 50%;
  top: -70px;
  left: 20px;
  border: 3px solid #fff;
}

.avatar-figure img {
  display: block;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  top: -70px;
  left: 20px;
}

.avatar-figcaption {
  cursor: pointer;
  max-width: 100px;
  max-height: 100px;
  position: absolute;
  top: 0px;
  left: 30px;
  width: inherit;
  height: inherit;
  border-radius: 100%;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0);
  transition: all ease-in-out 0.3s;
}
.avatar-figcaption:hover {
  opacity: 1;
  /*   background-color: rgba(0, 0, 0, .5); */
}
.avatar-figcaption > img {
  margin-top: 32.5px;
  width: 50px;
  height: 50px;
}

.edit-modal .name {
  position: relative;
  display: flex;
  align-items: center;
  min-height: 70px;
  background-color: #f2f3f5;
  border: 1px solid #ccd0d5;
  flex: 1 1 auto;
  line-height: 16px;
  padding: 7px 12px;
  margin: 30px 13px 0 13px;
}

.name-placeholder {
  position: absolute;
  left: 10px;
  top: 8px;
}

.name-text-counter {
  position: absolute;
  left: 530px;
  top: 50px;
}

.edit-modal .name input[type="text"] {
  width: 100%;
  outline: none;
  border: 0px solid transparent;
  background: transparent;
  font-size: 14px;
  border-bottom: 0.35px solid;
}

.edit-modal .introduction {
  position: relative;
  display: flex;
  align-items: center;
  min-height: 150px;
  margin-top: 20px;
  background-color: #f2f3f5;
  border: 1px solid #ccd0d5;
  flex: 1 1 auto;
  line-height: 16px;
  padding: 7px 12px;
  margin: 35px 13px 0 13px;
}

.edit-modal .introduction input[type="text"] {
  width: 410px;
  outline: none;
  border: 0px solid transparent;
  background: transparent;
  font-size: 14px;
}

.intro-placeholder {
  position: absolute;
  left: 10px;
  top: 8px;
}

.intro-text-counter {
  position: absolute;
  left: 530px;
  top: 130px;
}
</style>